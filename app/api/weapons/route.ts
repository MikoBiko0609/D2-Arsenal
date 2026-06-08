import { NextResponse } from "next/server";
import { getManifest } from "@/lib/bungie";

const BUNGIE_BASE = "https://www.bungie.net";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
  index?: number;
  itemType: number;
  itemTypeDisplayName?: string;
  flavorText?: string;
  screenshot?: string;
  displayProperties?: {
    name?: string;
    description?: string;
    icon?: string;
  };
  inventory?: {
    tierTypeName?: string;
  };
  sockets?: {
    socketEntries?: SocketEntry[];
  };
  plug?: {
    plugCategoryIdentifier?: string;
  };
  defaultDamageTypeHash?: number;
  equippingBlock?: {
    ammoType?: number;
  };
  traitIds?: string[];
};

type PlugSetDefinition = {
  reusablePlugItems?: PlugItem[];
};

type DamageTypeDefinition = {
  displayProperties?: {
    name?: string;
  };
};

type WeaponPlug = {
  hash: number;
  name: string;
  type: string;
  description: string;
  plugCategoryIdentifier: string;
  enhancedPlug?: WeaponPlug;
};

type WeaponSearchResult = {
  hash: number;
  manifestIndex: number;
  releaseTag: string;
  releaseVersion: number;
  name: string;
  icon: string;
  type: string;
  tier: string;
  screenshot: string;
  barrelPerks: string[];
  magPerks: string[];
  perk1: string[];
  perk2: string[];
  hasPerks: string[];
  originTraits: string[];
  ammoType: string;
  element: string;
  hasEnhancedPerks: boolean;
  isExotic: boolean;
  archetype: string;
};

type ScoredWeaponSearchResult = WeaponSearchResult & {
  score: number;
};

const AMMO_TYPES: Record<number, string> = {
  1: "Primary",
  2: "Special",
  3: "Heavy",
};

function buildIconPath(icon?: string) {
  if (!icon) return "";
  if (icon.startsWith("http")) return icon;
  return `${BUNGIE_BASE}${icon}`;
}

function scoreWeapon(item: DestinyItem) {
  let score = 0;

  if (item.screenshot) score += 1000;
  if (item.flavorText) score += 100;

  const sockets = item.sockets?.socketEntries ?? [];
  score += sockets.length * 5;

  const usefulSockets = sockets.filter((socket) => {
    return (
      socket.reusablePlugSetHash ||
      socket.randomizedPlugSetHash ||
      socket.reusablePlugItems?.length ||
      socket.randomizedPlugItems?.length
    );
  });

  score += usefulSockets.length * 25;

  return score;
}

function getReleaseInfo(item: DestinyItem) {
  const releaseTag =
    item.traitIds?.find((traitId) => traitId.startsWith("releases.")) ?? "";
  const releaseVersion = Number(releaseTag.match(/releases\.v(\d+)/)?.[1] ?? 0);

  return {
    releaseTag,
    releaseVersion,
  };
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

function isEnhancedPlug(plug: WeaponPlug) {
  const type = plug.type.toLowerCase();

  return (
    (type.startsWith("enhanced ") &&
      !type.includes("intrinsic") &&
      !type.includes("weapon mod")) ||
    isEnhancedName(plug.name)
  );
}

function enhancedPlugKey(name?: string, category?: string) {
  return `${category ?? ""}|${normalizePerkName(name)}`;
}

function itemToPlug(item: DestinyItem): WeaponPlug {
  return {
    hash: item.hash,
    name: item.displayProperties?.name ?? "",
    type: item.itemTypeDisplayName ?? "",
    description: item.displayProperties?.description ?? "",
    plugCategoryIdentifier: item.plug?.plugCategoryIdentifier ?? "",
  };
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

function uniqueNames(plugs: WeaponPlug[]) {
  return Array.from(new Set(plugs.map((plug) => plug.name).filter(Boolean)));
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
    name.includes("default ornament") ||
    name.includes("deepsight") ||
    name.includes("weapon level") ||
    name.includes("tracker") ||
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
    description.includes("deepsight can be applied") ||
    description.includes("increase this weapon's level")
  );
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

function isOriginPlug(plug: WeaponPlug) {
  const text = `${plug.name} ${plug.type} ${plug.plugCategoryIdentifier}`.toLowerCase();

  return (
    text.includes("origin") ||
    text.includes("foundry") ||
    text.includes("trait.origins")
  );
}

function getRawSocketPlugs(
  socket: SocketEntry | undefined,
  items: Record<string, DestinyItem>,
  plugSets: Record<string, PlugSetDefinition>
) {
  if (!socket) return [];

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

  return hashes
    .map((plugHash) => {
      const item = items[String(plugHash)];

      if (!item?.displayProperties?.name) return null;

      return itemToPlug(item);
    })
    .filter((plug): plug is WeaponPlug => Boolean(plug));
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

function getSocketPlugs(
  socket: SocketEntry | undefined,
  weapon: DestinyItem,
  items: Record<string, DestinyItem>,
  plugSets: Record<string, PlugSetDefinition>
) {
  const plugs = getRawSocketPlugs(socket, items, plugSets)
    .filter((plug) => !isBadPlug(plug))
    .filter((plug) => !isIncompatibleWeaponPlug(plug, weapon));

  return combineEnhancedSocketPlugs(plugs);
}

function buildWeaponResult(
  weapon: DestinyItem,
  items: Record<string, DestinyItem>,
  plugSets: Record<string, PlugSetDefinition>,
  damageTypes: Record<string, DamageTypeDefinition>
): ScoredWeaponSearchResult {
  const socketEntries = weapon.sockets?.socketEntries ?? [];
  const barrelPlugs = getSocketPlugs(
    socketEntries[1],
    weapon,
    items,
    plugSets
  );
  const magPlugs = getSocketPlugs(
    socketEntries[2],
    weapon,
    items,
    plugSets
  );
  const perk1Plugs = getSocketPlugs(
    socketEntries[3],
    weapon,
    items,
    plugSets
  );
  const perk2Plugs = getSocketPlugs(
    socketEntries[4],
    weapon,
    items,
    plugSets
  );
  const socketPlugCache = socketEntries.map((socket) =>
    getSocketPlugs(socket, weapon, items, plugSets)
  );
  const rawSocketPlugs = socketEntries.flatMap((socket) =>
    getRawSocketPlugs(socket, items, plugSets)
  );
  const originPlugs = socketPlugCache
    .flat()
    .filter((plug) => !isBadPlug(plug))
    .filter((plug) => isOriginPlug(plug));
  const columnPlugs = [
    ...barrelPlugs,
    ...magPlugs,
    ...perk1Plugs,
    ...perk2Plugs,
    ...originPlugs,
  ];
  const hasEnhancementSocket = rawSocketPlugs.some(
    (plug) => isDeepsightPlug(plug) || isEnhancementPlug(plug)
  );
  const hasModernEnhancedPlugs =
    socketEntries.length >= 12 &&
    columnPlugs.some((plug) => Boolean(plug.enhancedPlug));
  const archetypeItem = socketEntries[0]?.singleInitialItemHash
    ? items[String(socketEntries[0].singleInitialItemHash)]
    : undefined;
  const damageType = weapon.defaultDamageTypeHash
    ? damageTypes[String(weapon.defaultDamageTypeHash)]
    : undefined;
  const releaseInfo = getReleaseInfo(weapon);

  const result: WeaponSearchResult = {
    hash: weapon.hash,
    manifestIndex: weapon.index ?? 0,
    releaseTag: releaseInfo.releaseTag,
    releaseVersion: releaseInfo.releaseVersion,
    name: weapon.displayProperties?.name ?? "",
    icon: buildIconPath(weapon.displayProperties?.icon),
    type: weapon.itemTypeDisplayName ?? "",
    tier: weapon.inventory?.tierTypeName ?? "",
    screenshot: buildIconPath(weapon.screenshot),
    barrelPerks: uniqueNames(barrelPlugs),
    magPerks: uniqueNames(magPlugs),
    perk1: uniqueNames(perk1Plugs),
    perk2: uniqueNames(perk2Plugs),
    hasPerks: uniqueNames([...perk1Plugs, ...perk2Plugs]),
    originTraits: uniqueNames(originPlugs),
    ammoType: AMMO_TYPES[weapon.equippingBlock?.ammoType ?? 0] ?? "",
    element: damageType?.displayProperties?.name ?? "",
    hasEnhancedPerks:
      weapon.inventory?.tierTypeName === "Legendary" &&
      (hasEnhancementSocket || hasModernEnhancedPlugs),
    isExotic: weapon.inventory?.tierTypeName === "Exotic",
    archetype: archetypeItem?.displayProperties?.name ?? "",
  };

  return {
    ...result,
    score:
      scoreWeapon(weapon) +
      result.barrelPerks.length +
      result.magPerks.length +
      result.perk1.length * 2 +
      result.perk2.length * 2 +
      (result.hasEnhancedPerks ? 500 : 0),
  };
}

export async function GET() {
  try {
    const manifest = await getManifest();
    const paths = manifest.Response.jsonWorldComponentContentPaths.en;

    const [itemResponse, plugSetResponse, damageResponse] = await Promise.all([
      fetch(`${BUNGIE_BASE}${paths.DestinyInventoryItemDefinition}`, {
        cache: "no-store",
      }),
      fetch(`${BUNGIE_BASE}${paths.DestinyPlugSetDefinition}`, {
        cache: "no-store",
      }),
      fetch(`${BUNGIE_BASE}${paths.DestinyDamageTypeDefinition}`, {
        cache: "no-store",
      }),
    ]);

    const items = (await itemResponse.json()) as Record<string, DestinyItem>;
    const plugSets =
      (await plugSetResponse.json()) as Record<string, PlugSetDefinition>;
    const damageTypes =
      (await damageResponse.json()) as Record<string, DamageTypeDefinition>;

    const weapons = Object.values(items)
      .filter((item) => {
        return (
          item.itemType === 3 &&
          item.displayProperties?.name &&
          item.displayProperties?.icon &&
          item.itemTypeDisplayName &&
          item.inventory?.tierTypeName
        );
      })
      .map((weapon) => buildWeaponResult(weapon, items, plugSets, damageTypes))
      .sort(
        (a, b) =>
          a.name.localeCompare(b.name) ||
          b.score - a.score ||
          a.hash - b.hash
      )
      .map((result) => {
        const weapon = { ...result };
        delete (weapon as Partial<ScoredWeaponSearchResult>).score;
        return weapon as WeaponSearchResult;
      });

    return NextResponse.json(weapons, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch weapons" },
      { status: 500 }
    );
  }
}
