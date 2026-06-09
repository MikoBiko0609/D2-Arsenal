import { getManifestComponent, getStatDefinitions } from "@/lib/bungie";
import { getGeneratedWeaponDetails } from "@/lib/generatedArsenalCache";

const BUNGIE_BASE = "https://www.bungie.net";


type DestinyStat = { statHash: number; value: number };
type InvestmentStat = { statTypeHash: number; value: number };
type DestinyStatDefinition = { displayProperties?: { name?: string } };
type DisplayInterpolationPoint = { value: number; weight: number };
type ScaledStat = {
  statHash: number;
  displayInterpolation?: DisplayInterpolationPoint[];
};
type StatGroupDefinition = { scaledStats?: ScaledStat[] };
type PlugItem = { plugItemHash: number };

type SocketEntry = {
  singleInitialItemHash?: number;
  reusablePlugItems?: PlugItem[];
  randomizedPlugItems?: PlugItem[];
  reusablePlugSetHash?: number;
  randomizedPlugSetHash?: number;
};

type DestinyItem = {
  hash: number;
  itemType: number;
  itemTypeDisplayName?: string;
  flavorText?: string;
  screenshot?: string;
  displayProperties?: {
    name?: string;
    description?: string;
    icon?: string;
  };
  inventory?: { tierTypeName?: string };
  stats?: { stats?: Record<string, DestinyStat>; statGroupHash?: number };
  investmentStats?: InvestmentStat[];
  sockets?: { socketEntries?: SocketEntry[] };
  plug?: { plugCategoryIdentifier?: string };
  defaultDamageTypeHash?: number;
  equippingBlock?: { ammoType?: number };
};

type PlugSetDefinition = { reusablePlugItems?: PlugItem[] };

type DamageTypeDefinition = {
  displayProperties?: {
    name?: string;
    icon?: string;
  };
};

type WeaponPlug = {
  hash: number;
  name: string;
  description: string;
  icon: string;
  type: string;
  plugCategoryIdentifier: string;
  investmentStats: InvestmentStat[];
  enhancedPlug?: WeaponPlug;
};

type PerkColumn = {
  name: string;
  perks: WeaponPlug[];
};

const DEEPSIGHT_ICON =
  "https://www.bungie.net/common/destiny2_content/icons/7428ebd2201189d429214a5f3d00ab96.jpg";
const weaponDetailsCache = new WeakMap<
  Record<string, DestinyItem>,
  Map<string, any>
>();

function buildIconPath(icon?: string) {
  if (!icon) return "";
  if (icon.startsWith("http")) return icon;
  return `${BUNGIE_BASE}${icon}`;
}

function getBestScreenshotForWeapon(
  weapon: DestinyItem,
  items: Record<string, DestinyItem>
) {
  const ownScreenshot = buildIconPath(weapon.screenshot);

  if (ownScreenshot) {
    return ownScreenshot;
  }

  const name = weapon.displayProperties?.name ?? "";
  const type = weapon.itemTypeDisplayName ?? "";
  const tier = weapon.inventory?.tierTypeName ?? "";
  const icon = weapon.displayProperties?.icon ?? "";

  const candidate = Object.values(items).find((item) => {
    const sameName = item.displayProperties?.name === name;
    const sameType = item.itemTypeDisplayName === type;
    const sameTier = item.inventory?.tierTypeName === tier;
    const sameIcon = item.displayProperties?.icon === icon;

    return (
      item.hash !== weapon.hash &&
      sameName &&
      sameType &&
      sameTier &&
      sameIcon &&
      Boolean(item.screenshot)
    );
  });

  return buildIconPath(candidate?.screenshot);
}

function uniqueByName(plugs: WeaponPlug[]) {
  const seen = new Set<string>();

  return plugs.filter((plug) => {
    const key = plug.name.trim().toLowerCase();

    if (seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

function normalizePerkName(name?: string) {
  return (name ?? "")
    .toLowerCase()
    .replace(/^enhanced\s+/i, "")
    .replace(/^enhanced:\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isEnhancedName(name?: string) {
  const clean = (name ?? "").toLowerCase();
  return clean.startsWith("enhanced ") || clean.startsWith("enhanced:");
}

function isEnhancedItem(item: DestinyItem) {
  const type = item.itemTypeDisplayName?.toLowerCase() ?? "";

  return (
    type.startsWith("enhanced ") &&
    !type.includes("intrinsic") &&
    !type.includes("weapon mod")
  ) || isEnhancedName(item.displayProperties?.name);
}

function isEnhancedPlug(plug: WeaponPlug) {
  const type = plug.type.toLowerCase();

  return (
    type.startsWith("enhanced ") &&
    !type.includes("intrinsic") &&
    !type.includes("weapon mod")
  ) || isEnhancedName(plug.name);
}

function itemToPlug(item: DestinyItem): WeaponPlug {
  return {
    hash: item.hash,
    name: item.displayProperties?.name ?? "",
    description: item.displayProperties?.description ?? "",
    icon: buildIconPath(item.displayProperties?.icon),
    type: item.itemTypeDisplayName ?? "",
    plugCategoryIdentifier: item.plug?.plugCategoryIdentifier ?? "",
    investmentStats: item.investmentStats ?? [],
  };
}

function enhancedPlugKey(name?: string, category?: string) {
  return `${category ?? ""}|${normalizePerkName(name)}`;
}

function buildEnhancedPlugMap(items: Record<string, DestinyItem>) {
  const map = new Map<string, WeaponPlug>();

  Object.values(items).forEach((item) => {
    const name = item.displayProperties?.name ?? "";
    const category = item.plug?.plugCategoryIdentifier ?? "";

    if (!isEnhancedItem(item) || !name || !item.displayProperties?.icon) {
      return;
    }

    map.set(enhancedPlugKey(name, category), itemToPlug(item));
  });

  return map;
}

function hasDifferentDescription(first: WeaponPlug, second: WeaponPlug) {
  return (
    Boolean(first.description) &&
    Boolean(second.description) &&
    first.description.trim() !== second.description.trim()
  );
}

function combineEnhancedSocketPlugs(plugs: WeaponPlug[]) {
  const combined: WeaponPlug[] = [];
  const byKey = new Map<string, WeaponPlug>();

  plugs.forEach((plug) => {
    const key = enhancedPlugKey(plug.name, plug.plugCategoryIdentifier);
    const existing = byKey.get(key);

    if (!existing) {
      if (!isEnhancedPlug(plug)) {
        combined.push(plug);
        byKey.set(key, plug);
      }

      return;
    }

    if (plug.hash === existing.hash) {
      return;
    }

    if (isEnhancedPlug(plug) || hasDifferentDescription(existing, plug)) {
      existing.enhancedPlug = plug;
    }
  });

  return combined;
}

function isIncompatibleWeaponPlug(plug: WeaponPlug, weapon: DestinyItem) {
  const weaponType = weapon.itemTypeDisplayName?.toLowerCase() ?? "";
  const plugName = plug.name.toLowerCase();

  if (!weaponType.includes("shotgun")) {
    return (
      plugName === "full choke" ||
      plugName === "rifled barrel" ||
      plugName === "smoothbore" ||
      plugName === "barrel shroud"
    );
  }

  return false;
}

function isBadPlug(plug: WeaponPlug) {
  const name = plug.name.toLowerCase();
  const description = plug.description.toLowerCase();
  const type = plug.type.toLowerCase();
  const category = plug.plugCategoryIdentifier.toLowerCase();

  return (
    !name ||
    name.includes("empty") ||
    name === "origin trait" ||
    name === "random masterwork" ||
    name === "extract pattern" ||
    name.includes("default ornament") ||
    name.includes("deepsight") ||
    name.includes("weapon level") ||
    name.includes("increase weapon level") ||
    name.includes("tracker") ||
    name.includes("kill tracker") ||
    name.includes("memento") ||
    name.includes("shader") ||
    name.includes("ornament") ||
    type.includes("shader") ||
    type.includes("memento") ||
    type.includes("ornament") ||
    category.includes("shader") ||
    category.includes("memento") ||
    category.includes("ornament") ||
    category.includes("tracker") ||
    category.includes("deepsight") ||
    category.includes("weapon_level") ||
    description.includes("restores your weapon") ||
    description.includes("deepsight can be applied") ||
    description.includes("increase this weapon's level") ||
    description.includes("weapon level boost")
  );
}

function isMasterwork(plug: WeaponPlug) {
  const name = plug.name.toLowerCase();
  const category = plug.plugCategoryIdentifier.toLowerCase();

  return name.includes("masterwork") || category.includes("masterwork");
}

function isBadMod(plug: WeaponPlug) {
  const name = plug.name.toLowerCase();
  const description = plug.description.toLowerCase();
  const category = plug.plugCategoryIdentifier.toLowerCase();

  return (
    name.includes("enhancement") ||
    name.includes("enhanced intrinsic") ||
    name === "random mod" ||
    name === "random masterwork" ||
    name === "extract pattern" ||
    name.includes("tier 1") ||
    name.includes("tier 2") ||
    name.includes("tier 3") ||
    name.includes("deepsight") ||
    category.includes("enhancement") ||
    category.includes("deepsight") ||
    description.includes("enhancement") ||
    description.includes("enhance")
  );
}

function isMod(plug: WeaponPlug) {
  const name = plug.name.toLowerCase();
  const type = plug.type.toLowerCase();
  const category = plug.plugCategoryIdentifier.toLowerCase();

  return (
    type.includes("weapon mod") ||
    category.includes("weapon.mod") ||
    category.includes("mods") ||
    name.includes("targeting adjuster") ||
    name.includes("backup mag") ||
    name.includes("counterbalance") ||
    name.includes("quick access sling") ||
    name.includes("icarus grip") ||
    name.includes("minor spec") ||
    name.includes("major spec") ||
    name.includes("boss spec")
  );
}

function isDeepsightPlug(plug: WeaponPlug) {
  const name = plug.name.toLowerCase();
  const description = plug.description.toLowerCase();
  const category = plug.plugCategoryIdentifier.toLowerCase();

  return (
    name.includes("deepsight") ||
    description.includes("deepsight can be applied") ||
    category.includes("deepsight")
  );
}

function isEnhancementPlug(plug: WeaponPlug) {
  const name = plug.name.toLowerCase();
  const category = plug.plugCategoryIdentifier.toLowerCase();

  return (
    category.includes("crafting.plugs.weapons.mods.enhancers") ||
    name.includes("empty enhancement socket") ||
    name.includes("tier 1 enhancement") ||
    name.includes("tier 2 enhancement") ||
    name.includes("tier 3 enhancement")
  );
}

function canUseAdeptMods(weapon: DestinyItem) {
  const name = weapon.displayProperties?.name?.toLowerCase() ?? "";

  return name.includes("(adept)") || name.endsWith(" adept");
}

function isEligibleMod(plug: WeaponPlug, weapon: DestinyItem) {
  const name = plug.name.toLowerCase();
  const category = plug.plugCategoryIdentifier.toLowerCase();
  const isAdeptMod = name.includes("adept") || category.includes("adept");

  return !isAdeptMod || canUseAdeptMods(weapon);
}

function isOriginGroup(plugs: WeaponPlug[]) {
  const text = plugs
    .map((plug) => `${plug.name} ${plug.type} ${plug.plugCategoryIdentifier}`)
    .join(" ")
    .toLowerCase();

  return (
    text.includes("origin") ||
    text.includes("foundry") ||
    text.includes("trait.origins")
  );
}

function isGarbageGroup(plugs: WeaponPlug[]) {
  const text = plugs
    .map((plug) => `${plug.name} ${plug.type} ${plug.plugCategoryIdentifier}`)
    .join(" ")
    .toLowerCase();

  return (
    text.includes("shader") ||
    text.includes("memento") ||
    text.includes("ornament") ||
    text.includes("tracker")
  );
}

function getColumnName(position: number, weaponType?: string) {
  const type = weaponType?.toLowerCase() ?? "";

  if (position === 0) {
    if (type.includes("sword")) return "Blade";
    if (type.includes("rocket launcher")) return "Launcher Barrel";
    return "Barrel";
  }

  if (position === 1) {
    if (type.includes("sword")) return "Guard";
    return "Magazine";
  }

  if (position === 2) return "Trait 1";
  if (position === 3) return "Trait 2";

  return "Origin / Stock";
}

function getAllowedMasterworkNames(
  weapon: DestinyItem,
  archetype?: WeaponPlug | null
) {
  const type = weapon.itemTypeDisplayName?.toLowerCase() ?? "";
  const ammoType = weapon.equippingBlock?.ammoType ?? 0;
  const archetypeText = `${archetype?.name ?? ""} ${archetype?.description ?? ""}`.toLowerCase();

  const normal = [
    "Masterworked: Handling",
    "Masterworked: Range",
    "Masterworked: Stability",
    "Masterworked: Reload Speed",
  ];

  const heat = [
    "Masterworked: Handling",
    "Masterworked: Range",
    "Masterworked: Stability",
    "Masterworked: Cooling Efficiency",
  ];

  const bowPrimary = [
    "Masterworked: Handling",
    "Masterworked: Accuracy",
    "Masterworked: Target Acquisition",
    "Masterworked: Draw Time",
    "Masterworked: Stability",
    "Masterworked: Reload Speed",
  ];

  const explosive = [
    "Masterworked: Handling",
    "Masterworked: Velocity",
    "Masterworked: Blast Radius",
    "Masterworked: Reload Speed",
  ];

  const microMissileSidearm = [
    "Masterworked: Handling",
    "Masterworked: Range",
    "Masterworked: Stability",
    "Masterworked: Reload Speed",
    "Masterworked: Velocity",
    "Masterworked: Blast Radius",
  ];

  const microMissilePulse = [
    "Masterworked: Handling",
    "Masterworked: Stability",
    "Masterworked: Reload Speed",
    "Masterworked: Velocity",
    "Masterworked: Blast Radius",
  ];

  const fusion = [
    "Masterworked: Handling",
    "Masterworked: Range",
    "Masterworked: Stability",
    "Masterworked: Reload Speed",
    "Masterworked: Charge Time",
  ];

  const glaive = [
    "Masterworked: Handling",
    "Masterworked: Range",
    "Masterworked: Shield Duration",
    "Masterworked: Reload Speed",
  ];

  const heavyBow = [
    "Masterworked: Handling",
    "Masterworked: Reload Speed",
    "Masterworked: Persistence",
    "Masterworked: Velocity",
  ];

  const sword = ["Masterworked: Impact"];

  if (type.includes("sword")) return sword;

  if (
    archetypeText.includes("dynamic heat weapon") ||
    archetypeText.includes("balanced heat weapon")
  ) {
    return heat;
  }

  if (archetypeText.includes("micro-missile") && type.includes("sidearm")) {
    return microMissileSidearm;
  }

  if (archetypeText.includes("micro-missile") && type.includes("pulse rifle")) {
    return microMissilePulse;
  }

  if (type.includes("bow") && ammoType === 3) {
    return heavyBow;
  }

  if (type.includes("bow")) {
    return bowPrimary;
  }

  if (type.includes("glaive")) {
    return glaive;
  }

  if (type.includes("fusion rifle") || type.includes("linear fusion rifle")) {
    return fusion;
  }

  if (type.includes("grenade launcher") || type.includes("rocket launcher")) {
    return explosive;
  }

  return normal;
}

function getInvestmentStatTotal(weapon: DestinyItem, statHash: number) {
  return (weapon.investmentStats ?? []).reduce((total, stat) => {
    if (stat.statTypeHash !== statHash) {
      return total;
    }

    return total + stat.value;
  }, 0);
}

export async function getWeaponDetails(hash: string) {
    const generatedDetails = await getGeneratedWeaponDetails(hash);

    if (generatedDetails) {
      return generatedDetails;
    }

    const [items, damageTypes, plugSets, statGroups] = await Promise.all([
      getManifestComponent<Record<string, DestinyItem>>(
        "DestinyInventoryItemDefinition"
      ),
      getManifestComponent<Record<string, DamageTypeDefinition>>(
        "DestinyDamageTypeDefinition"
      ),
      getManifestComponent<Record<string, PlugSetDefinition>>(
        "DestinyPlugSetDefinition"
      ),
      getManifestComponent<Record<string, StatGroupDefinition>>(
        "DestinyStatGroupDefinition"
      ),
    ]);
    const enhancedPlugMap = buildEnhancedPlugMap(items);

    const weapon = items[hash];

    if (!weapon) {
      throw new Error("Weapon not found");
    }

    let cachedDetailsByHash = weaponDetailsCache.get(items);

    if (!cachedDetailsByHash) {
      cachedDetailsByHash = new Map<string, any>();
      weaponDetailsCache.set(items, cachedDetailsByHash);
    }

    const cachedDetails = cachedDetailsByHash.get(hash);

    if (cachedDetails) {
      return cachedDetails;
    }

    const screenshot = getBestScreenshotForWeapon(weapon, items);

    const statDefinitions =
      (await getStatDefinitions()) as Record<string, DestinyStatDefinition>;

    const statGroup = weapon.stats?.statGroupHash
      ? statGroups[String(weapon.stats.statGroupHash)]
      : undefined;

    const stats = Object.values(weapon.stats?.stats ?? {}).map((stat) => {
      const scaledStat = statGroup?.scaledStats?.find(
        (entry) => entry.statHash === stat.statHash
      );

      return {
        statHash: stat.statHash,
        name:
          statDefinitions[String(stat.statHash)]?.displayProperties?.name ??
          "Unknown",
        value: stat.value,
        investmentValue: getInvestmentStatTotal(weapon, stat.statHash),
        displayInterpolation: scaledStat?.displayInterpolation ?? [],
      };
    });

    const getPlug = (plugHash: number): WeaponPlug | null => {
      const plug = items[String(plugHash)];

      if (!plug?.displayProperties?.name) return null;

      const basePlug = itemToPlug(plug);
      const enhancedPlug = enhancedPlugMap.get(
        enhancedPlugKey(basePlug.name, basePlug.plugCategoryIdentifier)
      );

      return {
        ...basePlug,
        enhancedPlug,
      };
    };

    const getSocketPlugs = (socket: SocketEntry) => {
      const hashes = [
        ...(socket.reusablePlugItems?.map((plug) => plug.plugItemHash) ?? []),
        ...(socket.randomizedPlugItems?.map((plug) => plug.plugItemHash) ?? []),
        ...(socket.reusablePlugSetHash
          ? plugSets[String(socket.reusablePlugSetHash)]?.reusablePlugItems?.map(
              (plug) => plug.plugItemHash
            ) ?? []
          : []),
        ...(socket.randomizedPlugSetHash
          ? plugSets[String(socket.randomizedPlugSetHash)]?.reusablePlugItems?.map(
              (plug) => plug.plugItemHash
            ) ?? []
          : []),
        socket.singleInitialItemHash,
      ].filter((plugHash): plugHash is number => Boolean(plugHash));

      const plugs = hashes
        .map(getPlug)
        .filter((plug): plug is WeaponPlug => Boolean(plug))
        .filter((plug) => !isIncompatibleWeaponPlug(plug, weapon));

      return uniqueByName(combineEnhancedSocketPlugs(plugs));
    };

    const socketEntries = weapon.sockets?.socketEntries ?? [];
    const socketPlugCache = socketEntries.map(getSocketPlugs);
    const allSocketPlugs = socketPlugCache.flat();

    const archetype = socketEntries[0]?.singleInitialItemHash
      ? getPlug(socketEntries[0].singleInitialItemHash)
      : undefined;

    const deepsightPlug =
      allSocketPlugs.find((plug) => isDeepsightPlug(plug)) ??
      allSocketPlugs.find((plug) => isEnhancementPlug(plug)) ??
      null;

    const hasDeepsightAvailable =
      weapon.inventory?.tierTypeName === "Legendary" &&
      Boolean(deepsightPlug);

    const usableGroups = socketPlugCache
      .map((socketPlugs) => {
        const plugs = socketPlugs.filter((plug) => {
          if (isBadPlug(plug)) return false;
          if (isMasterwork(plug)) return false;
          if (isMod(plug)) return false;
          if (plug.hash === archetype?.hash) return false;
          return true;
        });

        return uniqueByName(plugs);
      })
      .filter((plugs) => plugs.length > 0)
      .filter((plugs) => !isGarbageGroup(plugs));

    const normalGroups = usableGroups.filter((plugs) => !isOriginGroup(plugs));
    const originGroup = usableGroups.find((plugs) => isOriginGroup(plugs));

    const perkColumns: PerkColumn[] = normalGroups
      .slice(0, 4)
      .map((plugs, index) => ({
        name: getColumnName(index, weapon.itemTypeDisplayName),
        perks: uniqueByName(plugs),
      }));

    if (originGroup) {
      perkColumns.push({
        name: "Origin / Stock",
        perks: uniqueByName(originGroup),
      });
    }

    const allowedMasterworkNames = getAllowedMasterworkNames(weapon, archetype);

    const masterworks = uniqueByName(
      allSocketPlugs
        .filter((plug) => !isBadPlug(plug))
        .filter((plug) => isMasterwork(plug))
        .filter((plug) => plug.name.toLowerCase().startsWith("masterworked:"))
        .filter((plug) => allowedMasterworkNames.includes(plug.name))
    );

    const mods = uniqueByName(
      allSocketPlugs
        .filter((plug) => !isBadPlug(plug))
        .filter((plug) => !isBadMod(plug))
        .filter((plug) => isMod(plug))
        .filter((plug) => isEligibleMod(plug, weapon))
    );

    const exoticPerks =
      weapon.inventory?.tierTypeName === "Exotic"
        ? allSocketPlugs
            .filter((plug) => {
              return (
                plug.description &&
                plug.hash !== archetype?.hash &&
                !isBadPlug(plug) &&
                !isMasterwork(plug) &&
                !isMod(plug)
              );
            })
            .slice(0, 1)
        : [];

    const damageType = weapon.defaultDamageTypeHash
      ? damageTypes[String(weapon.defaultDamageTypeHash)]
      : undefined;

    const enhanceable =
      weapon.inventory?.tierTypeName === "Legendary" &&
      (hasDeepsightAvailable ||
        allSocketPlugs.some((plug) => isEnhancementPlug(plug)) ||
        (socketEntries.length >= 12 &&
          allSocketPlugs.some((plug) => Boolean(plug.enhancedPlug))));

    const details = {
        hash: weapon.hash,
        name: weapon.displayProperties?.name,
        description: weapon.flavorText || weapon.displayProperties?.description,
        icon: buildIconPath(weapon.displayProperties?.icon),
        screenshot,
        type: weapon.itemTypeDisplayName,
        tier: weapon.inventory?.tierTypeName,
        stats,
        archetype,
        exoticPerks,
        perkColumns,
        masterworks,
        mods,
        enhanceable,
        deepsight:
          hasDeepsightAvailable && deepsightPlug
            ? {
                name: "Enhanceable Perks",
                icon: DEEPSIGHT_ICON,
              }
            : null,
        damageType: damageType
          ? {
              name: damageType.displayProperties?.name ?? "",
              icon: buildIconPath(damageType.displayProperties?.icon),
            }
          : null,
        ammoType: weapon.equippingBlock?.ammoType ?? null,
      };

    cachedDetailsByHash.set(hash, details);
    return details;
}


