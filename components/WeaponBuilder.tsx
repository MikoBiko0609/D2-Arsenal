"use client";

import Link from "next/link";
import { type MouseEvent, useMemo, useState } from "react";
import { getPerkCompendiumEntry } from "@/lib/perkCompendium";
import WeaponSearch from "@/components/WeaponSearch";

type InvestmentStat = {
  statTypeHash: number;
  value: number;
};

type DisplayInterpolationPoint = {
  value: number;
  weight: number;
};

type WeaponStat = {
  statHash: number;
  value: number;
  name: string;
  investmentValue?: number;
  displayInterpolation?: DisplayInterpolationPoint[];
};

type WeaponPlug = {
  hash: number;
  name: string;
  description: string;
  icon: string;
  type: string;
  investmentStats: InvestmentStat[];
  enhancedPlug?: WeaponPlug;
};

type PerkColumn = {
  name: string;
  perks: WeaponPlug[];
};

type DisplayStat = WeaponStat & {
  baseValue: number;
  delta: number;
};

type Weapon = {
  hash: number;
  name: string;
  description: string;
  icon: string;
  screenshot: string;
  type: string;
  tier: string;
  stats: WeaponStat[];
  enhanceable?: boolean;
  archetype?: WeaponPlug;
  exoticPerks?: WeaponPlug[];
  perkColumns?: PerkColumn[];
  masterworks?: WeaponPlug[];
  mods?: WeaponPlug[];
  deepsight?: {
    name: string;
    icon: string;
  } | null;
  damageType?: {
    name: string;
    icon: string;
  } | null;
  ammoType?: number | null;
};

type WeaponBuilderProps = {
  weapon: Weapon;
};

type FloatingPerkInfo = {
  group: string;
  plug: WeaponPlug;
  statChanges: string[];
  left: number;
  top: number;
};

const NORMAL_STAT_ORDER = [
  "Impact",
  "Range",
  "Stability",
  "Handling",
  "Reload Speed",
  "Reload Time",
  "Aim Assistance",
  "Ammo Generation",
  "Zoom",
  "Airborne Effectiveness",
  "Recoil",
  "Rounds Per Minute",
  "Magazine",
];

const EXPLOSIVE_STAT_ORDER = [
  "Blast Radius",
  "Velocity",
  "Stability",
  "Handling",
  "Reload Speed",
  "Reload Time",
  "Aim Assistance",
  "Ammo Generation",
  "Zoom",
  "Airborne Effectiveness",
  "Recoil",
  "Rounds Per Minute",
  "Magazine",
];

const BAR_STATS = [
  "Impact",
  "Range",
  "Blast Radius",
  "Velocity",
  "Stability",
  "Handling",
  "Reload Speed",
  "Aim Assistance",
  "Ammo Generation",
  "Zoom",
  "Airborne Effectiveness",
];

const VALUE_ONLY_STATS = [
  "Reload Time",
  "Recoil",
  "Rounds Per Minute",
  "Magazine",
];

const AMMO_NAMES: Record<number, string> = {
  1: "Primary",
  2: "Special",
  3: "Heavy",
};

const AMMO_ICONS: Record<number, string> = {
  1: "/icons/ammo/primary.svg",
  2: "/icons/ammo/special.svg",
  3: "/icons/ammo/heavy.svg",
};

const EMPTY_SLOT_ICON =
  "https://www.bungie.net/common/destiny2_content/icons/431cc8304da4f5eb44c5c10a5c1866ce.jpg";

function formatStatValue(stat: WeaponStat) {
  if (stat.name === "Reload Time") {
    return `${(stat.value / 1000).toFixed(2)}s`;
  }

  return stat.value;
}

function clampStat(value: number) {
  return Math.max(0, Math.min(100, value));
}

function getDeltaClass(delta: number) {
  if (delta > 0) return "text-green-400";
  if (delta < 0) return "text-red-400";
  return "text-zinc-300";
}

function getDeltaBarClass(delta: number) {
  if (delta > 0) return "bg-green-500/80";
  if (delta < 0) return "bg-red-500/90";
  return "bg-zinc-400";
}

function formatDelta(delta: number) {
  if (delta > 0) return `+${delta}`;
  return String(delta);
}

function interpolateDisplayValue(
  value: number,
  interpolation?: DisplayInterpolationPoint[]
) {
  if (!interpolation?.length) {
    return value;
  }

  const points = [...interpolation].sort((a, b) => a.value - b.value);

  if (value <= points[0].value) {
    return points[0].weight;
  }

  const lastPoint = points[points.length - 1];

  if (value >= lastPoint.value) {
    return lastPoint.weight;
  }

  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];

    if (value < start.value || value > end.value) {
      continue;
    }

    const progress = (value - start.value) / (end.value - start.value);
    return Math.round(start.weight + (end.weight - start.weight) * progress);
  }

  return lastPoint.weight;
}

function getDisplayedStatValue(stat: WeaponStat, investmentDelta: number) {
  if (
    stat.name !== "Magazine" ||
    stat.investmentValue === undefined ||
    !stat.displayInterpolation?.length
  ) {
    return stat.value + investmentDelta;
  }

  return interpolateDisplayValue(
    stat.investmentValue + investmentDelta,
    stat.displayInterpolation
  );
}

function cleanMasterworkName(name: string) {
  return name.replace(/^Masterworked:\s*/i, "");
}

function getEffectivePlug(plug: WeaponPlug, enhanced: boolean) {
  if (enhanced && plug.enhancedPlug) {
    return plug.enhancedPlug;
  }

  return plug;
}

function getInvestmentStatValue(plug: WeaponPlug, statHash: number) {
  return plug.investmentStats.reduce((total, stat) => {
    if (stat.statTypeHash !== statHash) {
      return total;
    }

    return total + stat.value;
  }, 0);
}

function getEffectiveInvestmentStatValue(
  plug: WeaponPlug,
  statHash: number,
  enhanced: boolean
) {
  const baseValue = getInvestmentStatValue(plug, statHash);

  if (!enhanced || !plug.enhancedPlug) {
    return baseValue;
  }

  const enhancedValue = getInvestmentStatValue(plug.enhancedPlug, statHash);

  if (enhancedValue === 0) {
    return baseValue;
  }

  if (baseValue === 0) {
    return enhancedValue;
  }

  if (Math.abs(enhancedValue) > Math.abs(baseValue)) {
    return enhancedValue;
  }

  if (Math.abs(enhancedValue) < Math.abs(baseValue)) {
    return baseValue + enhancedValue;
  }

  return enhancedValue;
}

function getPlugStatChanges(plug: WeaponPlug, weaponStats: WeaponStat[]) {
  return weaponStats
    .map((stat) => {
      const value = getInvestmentStatValue(plug, stat.statHash);

      if (value === 0) {
        return null;
      }

      const displayDelta = getDisplayedStatValue(stat, value) - stat.value;

      if (displayDelta === 0) {
        return null;
      }

      return `${stat.name} ${formatDelta(displayDelta)}`;
    })
    .filter((change): change is string => Boolean(change));
}

function getCompendiumEntry(plug: WeaponPlug) {
  return getPerkCompendiumEntry(plug.name);
}

function renderCompendiumLine(line: string) {
  if (line.trimStart().startsWith("↑")) {
    return <span className="font-bold italic text-yellow-300">{line}</span>;
  }

  return line.split(/(↑\S+)/g).map((part, index) => {
    if (part.startsWith("↑")) {
      return (
        <span key={`${part}-${index}`} className="font-bold italic text-yellow-300">
          {part}
        </span>
      );
    }

    return part;
  });
}

function getDisplayParagraphs(description: string) {
  const paragraphs = description
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return paragraphs.filter((paragraph, index) => {
    if (!paragraph.startsWith("↑")) {
      return true;
    }

    const previousText = paragraphs.slice(0, index).join(" ");
    const normalizedParagraph = paragraph.replace(/^↑/, "").toLowerCase();

    return !previousText.toLowerCase().includes(normalizedParagraph);
  });
}

function renderCompendiumDescription(description: string) {
  return getDisplayParagraphs(description).map((paragraph, index) => (
    <p key={`${paragraph.slice(0, 24)}-${index}`} className="whitespace-pre-line">
      {paragraph.split("\n").map((line, lineIndex) => (
        <span key={`${line}-${lineIndex}`}>
          {lineIndex > 0 && <br />}
          {renderCompendiumLine(line)}
        </span>
      ))}
    </p>
  ));
}

function PerkInfoCard({
  group,
  plug,
  statChanges,
  align,
}: {
  group: string;
  plug: WeaponPlug;
  statChanges: string[];
  align: "left" | "right";
}) {
  const isEnhancedPlug = plug.type.toLowerCase().startsWith("enhanced");
  const compendiumEntry = getCompendiumEntry(plug);
  const description =
    compendiumEntry?.description.trim() || plug.description.trim();
  const category = compendiumEntry?.category ?? plug.type;

  return (
    <article
      className={`pointer-events-none absolute top-full left-1/2 z-50 mt-3 hidden w-[min(24rem,calc(100vw-3rem))] -translate-x-1/2 overflow-hidden rounded-lg border border-zinc-600 bg-zinc-950 text-left shadow-2xl shadow-black/60 group-hover:block md:top-1/2 md:mt-0 md:w-96 md:-translate-y-1/2 md:translate-x-0 ${
        align === "right" ? "md:left-full md:ml-3" : "md:right-full md:left-auto md:mr-3"
      }`}
    >
      <div
        className={`flex items-start gap-3 p-3 ${
          isEnhancedPlug ? "bg-yellow-500/20" : "bg-zinc-800/80"
        }`}
      >
        <img
          src={plug.icon}
          alt={plug.name}
        className="h-9 w-9 rounded object-contain bg-zinc-900"
        />

        <div className="min-w-0">
          <div className="text-[10px] uppercase text-zinc-400">{group}</div>
          <h4 className="text-base font-bold leading-tight text-white">
            {plug.name}
          </h4>
          <div className="mt-0.5 text-xs text-zinc-300">{category}</div>
        </div>
      </div>

      <div className="p-3 pt-2">
        {description && (
          <div className="grid gap-2 text-xs leading-snug text-zinc-200">
            {compendiumEntry ? (
              renderCompendiumDescription(description)
            ) : (
              <p>{description}</p>
            )}
          </div>
        )}

        {statChanges.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {statChanges.map((change) => (
              <span
                key={change}
                className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] font-semibold text-green-300"
              >
                {change}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function FloatingPerkInfoCard({ info }: { info: FloatingPerkInfo }) {
  const isEnhancedPlug = info.plug.type.toLowerCase().startsWith("enhanced");
  const compendiumEntry = getCompendiumEntry(info.plug);
  const description =
    compendiumEntry?.description.trim() || info.plug.description.trim();
  const category = compendiumEntry?.category ?? info.plug.type;

  return (
    <article
      className="pointer-events-none fixed z-[100] max-h-[calc(100vh-2rem)] w-[min(24rem,calc(100vw-2rem))] -translate-y-1/2 overflow-hidden rounded-lg border border-zinc-600 bg-zinc-950 text-left shadow-2xl shadow-black/60"
      style={{
        left: info.left,
        top: info.top,
      }}
    >
      <div
        className={`flex items-start gap-3 p-3 ${
          isEnhancedPlug ? "bg-yellow-500/20" : "bg-zinc-800/80"
        }`}
      >
        <img
          src={info.plug.icon}
          alt={info.plug.name}
          className="h-9 w-9 rounded object-contain bg-zinc-900"
        />

        <div className="min-w-0">
          <div className="text-[10px] uppercase text-zinc-400">
            {info.group}
          </div>
          <h4 className="text-base font-bold leading-tight text-white">
            {info.plug.name}
          </h4>
          <div className="mt-0.5 text-xs text-zinc-300">{category}</div>
        </div>
      </div>

      <div className="max-h-[22rem] overflow-y-auto p-3 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {description && (
          <div className="grid gap-2 text-xs leading-snug text-zinc-200">
            {compendiumEntry ? (
              renderCompendiumDescription(description)
            ) : (
              <p>{description}</p>
            )}
          </div>
        )}

        {info.statChanges.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {info.statChanges.map((change) => (
              <span
                key={change}
                className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] font-semibold text-green-300"
              >
                {change}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function WeaponBuilder({ weapon }: WeaponBuilderProps) {
  const [selectedPerks, setSelectedPerks] = useState<Record<string, WeaponPlug>>(
    {}
  );

  const [enhanced, setEnhanced] = useState(false);
  const [modelImageFailed, setModelImageFailed] = useState(false);
  const [floatingInfo, setFloatingInfo] = useState<FloatingPerkInfo | null>(
    null
  );

  const selectedPlugList = useMemo(() => {
    return Object.values(selectedPerks);
  }, [selectedPerks]);

  const finalStats = useMemo<DisplayStat[]>(() => {
    return weapon.stats.map((baseStat) => {
      const investmentDelta = selectedPlugList.reduce((total, plug) => {
        return (
          total +
          getEffectiveInvestmentStatValue(plug, baseStat.statHash, enhanced)
        );
      }, 0);
      const displayValue = getDisplayedStatValue(baseStat, investmentDelta);

      return {
        ...baseStat,
        baseValue: baseStat.value,
        delta: displayValue - baseStat.value,
        value: displayValue,
      };
    });
  }, [weapon.stats, selectedPlugList, enhanced]);

  const hasExplosiveStats = finalStats.some((stat) => {
    return stat.name === "Blast Radius" || stat.name === "Velocity";
  });

  const statOrder = hasExplosiveStats ? EXPLOSIVE_STAT_ORDER : NORMAL_STAT_ORDER;

  const sortedStats = [...finalStats]
    .filter((stat) => statOrder.includes(stat.name))
    .sort((a, b) => statOrder.indexOf(a.name) - statOrder.indexOf(b.name));

  const archetypeTitle = weapon.tier === "Exotic" ? "Exotic Trait" : "Archetype";

  function selectPlug(group: string, plug: WeaponPlug) {
    setSelectedPerks((current) => {
      if (current[group]?.hash === plug.hash) {
        const next = { ...current };
        delete next[group];
        return next;
      }

      return {
        ...current,
        [group]: plug,
      };
    });
  }

  function clearPlug(group: string) {
    setSelectedPerks((current) => {
      const next = { ...current };
      delete next[group];
      return next;
    });
  }

  function showFloatingInfo(
    event: MouseEvent<HTMLButtonElement>,
    group: string,
    plug: WeaponPlug,
    statChanges: string[]
  ) {
    const rect = event.currentTarget.getBoundingClientRect();
    const margin = 16;
    const cardWidth = Math.min(384, window.innerWidth - margin * 2);
    const estimatedCardHeight = 360;
    const rightSideLeft = rect.right + 12;
    const left =
      rightSideLeft + cardWidth <= window.innerWidth - margin
        ? rightSideLeft
        : Math.max(margin, rect.left - cardWidth - 12);
    const top = Math.min(
      Math.max(rect.top + rect.height / 2, margin + estimatedCardHeight / 2),
      window.innerHeight - margin - estimatedCardHeight / 2
    );

    setFloatingInfo({
      group,
      plug,
      statChanges,
      left,
      top,
    });
  }

  return (
    <main className="min-h-screen bg-zinc-950 p-4 text-white">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-4 grid gap-3 lg:grid-cols-[auto_1fr] lg:items-start">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-900 px-4 text-sm font-bold text-zinc-100 shadow-lg shadow-black/30 transition hover:border-sky-400 hover:bg-sky-500/15"
          >
            Back to main menu
          </Link>

          <WeaponSearch />
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[390px_1fr_360px]">
          <section className="contents xl:block xl:space-y-4">
            <div className="order-1 rounded-lg border border-zinc-700 bg-zinc-900 p-3 xl:order-none">
              <div className="flex items-center gap-3">
                <img
                  src={weapon.icon}
                  alt={weapon.name}
                  className="h-14 w-14 rounded object-cover bg-zinc-800"
                />

                <div>
                  <h1 className="text-2xl font-bold leading-tight">
                    {weapon.name}
                  </h1>
                  <p className="mt-1 text-zinc-400 text-sm">
                    {weapon.tier} {weapon.type}
                  </p>
                </div>
              </div>
            </div>

            <div className="order-3 rounded-lg border border-zinc-700 bg-zinc-900 p-4 xl:order-none">
              <h2 className="mb-4 text-xl font-bold">Stats</h2>

              <div className="grid gap-2.5">
                {sortedStats.map((stat) => {
                  const isBarStat = BAR_STATS.includes(stat.name);
                  const isValueOnly = VALUE_ONLY_STATS.includes(stat.name);
                  const changed = stat.delta !== 0;
                  const baseWidth = clampStat(stat.baseValue);
                  const finalWidth = clampStat(stat.value);
                  const deltaStart = Math.min(baseWidth, finalWidth);
                  const deltaWidth = Math.abs(finalWidth - baseWidth);

                  return (
                    <div
                      key={stat.statHash}
                      className="grid grid-cols-[135px_18px_1fr_64px] items-center gap-2"
                    >
                      <div className="text-right text-xs leading-tight text-zinc-300">
                        {stat.name}
                      </div>

                      <div className="flex justify-center">
                        {stat.delta > 0 && (
                          <span className="text-green-400 text-xs">▲</span>
                        )}

                        {stat.delta < 0 && (
                          <span className="text-red-400 text-xs">▼</span>
                        )}
                      </div>

                      {isBarStat ? (
                        <div className="relative h-3.5 overflow-hidden bg-zinc-800">
                          <div
                            className="absolute left-0 top-0 h-3.5 bg-zinc-400"
                            style={{ width: `${baseWidth}%` }}
                          />

                          {changed && (
                            <div
                              className={`absolute top-0 h-3.5 ${getDeltaBarClass(
                                stat.delta
                              )}`}
                              style={{
                                left: `${deltaStart}%`,
                                width: `${deltaWidth}%`,
                              }}
                            />
                          )}
                        </div>
                      ) : (
                        <div className="text-xs text-zinc-300">
                          {formatStatValue(stat)}
                        </div>
                      )}

                      {isBarStat && (
                        <div className="flex items-center gap-1.5 text-xs">
                          {changed && (
                            <span className={getDeltaClass(stat.delta)}>
                              {formatDelta(stat.delta)}
                            </span>
                          )}

                          <span className={getDeltaClass(stat.delta)}>
                            {stat.value}
                          </span>
                        </div>
                      )}

                      {isValueOnly && <div />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="order-7 rounded-lg border border-zinc-700 bg-zinc-900 p-4 xl:order-none">
              <h2 className="mb-4 text-xl font-bold">Weapon Mods</h2>

              <div className="max-h-72 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => clearPlug("Mod")}
                    className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 ${
                      selectedPerks.Mod
                        ? "border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
                        : "border-sky-400 bg-sky-500/30"
                    }`}
                  >
                    <img
                      src={EMPTY_SLOT_ICON}
                      alt="Empty Mod Slot"
                      className="h-7 w-7 rounded"
                    />
                    <span className="text-xs">Empty Mod Slot</span>
                  </button>

                  {(weapon.mods ?? []).map((plug) => {
                    const selected = selectedPerks.Mod?.hash === plug.hash;
                    const statChanges = getPlugStatChanges(plug, weapon.stats);

                    return (
                      <div key={plug.hash} className="group relative">
                        <button
                          type="button"
                          onMouseEnter={(event) =>
                            showFloatingInfo(
                              event,
                              "Weapon Mod",
                              plug,
                              statChanges
                            )
                          }
                          onMouseLeave={() => setFloatingInfo(null)}
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => selectPlug("Mod", plug)}
                          className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 ${
                            selected
                              ? "border-sky-400 bg-sky-500/30"
                              : "border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
                          }`}
                        >
                          <img
                            src={plug.icon}
                            alt={plug.name}
                            className="h-7 w-7 rounded"
                          />
                          <span className="text-xs">{plug.name}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="contents xl:block xl:space-y-4">
            <div className="order-4 rounded-lg border border-zinc-700 bg-zinc-900 p-4 xl:order-none">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold">Perks</h2>

                {weapon.enhanceable && (
                  <button
                    type="button"
                    onClick={() => setEnhanced((current) => !current)}
                    className="flex items-center gap-3"
                  >
                    <span className="text-sm text-zinc-300">Enhanced</span>

                    <span
                      className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${
                        enhanced ? "bg-yellow-500" : "bg-zinc-700"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 rounded-full bg-white transition ${
                          enhanced ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-5 gap-2 pt-1 md:gap-3">
                {(weapon.perkColumns ?? []).map((column, columnIndex) => (
                  <div key={column.name}>
                    <div className="grid gap-2.5">
                      {column.perks.map((perk) => {
                        const selected =
                          selectedPerks[column.name]?.hash === perk.hash;
                        const displayPerk = getEffectivePlug(perk, enhanced);
                        const hasEnhancedPlug = Boolean(perk.enhancedPlug);
                        const showEnhancedArrow =
                          enhanced && hasEnhancedPlug;
                        const statChanges = getPlugStatChanges(
                          displayPerk,
                          weapon.stats
                        );
                        const tooltipAlign =
                          columnIndex >= 3 ? "left" : "right";

                        return (
                          <div
                            key={perk.hash}
                            className="group relative mx-auto h-12 w-12"
                          >
                            {showEnhancedArrow && (
                              <span className="pointer-events-none absolute -left-2 -top-3 z-20 text-2xl leading-none text-yellow-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                                {"\u2191"}
                              </span>
                            )}

                            <button
                              type="button"
                              onMouseDown={(event) => event.preventDefault()}
                              onClick={() => selectPlug(column.name, perk)}
                              title={displayPerk.name}
                              className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border p-1 ${
                                selected
                                  ? "border-sky-400 bg-sky-500/40"
                                  : "border-zinc-600 bg-zinc-800 hover:bg-zinc-700"
                              }`}
                            >
                            <img
                              src={displayPerk.icon}
                              alt={displayPerk.name}
                              className="h-9 w-9 rounded-full"
                            />

                            {enhanced && hasEnhancedPlug && (
                              <span className="pointer-events-none absolute inset-1 rounded-full bg-gradient-to-t from-yellow-400/55 via-yellow-300/20 to-transparent mix-blend-screen" />
                            )}
                            </button>

                            <PerkInfoCard
                              group={column.name}
                              plug={displayPerk}
                              statChanges={statChanges}
                              align={tooltipAlign}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-5 rounded-lg border border-zinc-700 bg-zinc-900 p-4 xl:order-none">
              <h2 className="mb-4 text-xl font-bold">Masterwork</h2>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => clearPlug("Masterwork")}
                  className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 ${
                    selectedPerks.Masterwork
                      ? "border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
                      : "border-sky-400 bg-sky-500/30"
                  }`}
                >
                  <img
                    src={EMPTY_SLOT_ICON}
                    alt="No Masterwork"
                    className="h-7 w-7 rounded"
                  />
                  <span className="text-xs">No Masterwork</span>
                </button>

                {(weapon.masterworks ?? []).map((plug) => {
                  const selected = selectedPerks.Masterwork?.hash === plug.hash;

                  return (
                    <button
                      key={plug.hash}
                      type="button"
                      onClick={() => selectPlug("Masterwork", plug)}
                      className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 ${
                        selected
                          ? "border-sky-400 bg-sky-500/30"
                          : "border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
                      }`}
                    >
                      <img
                        src={plug.icon}
                        alt={cleanMasterworkName(plug.name)}
                        className="h-7 w-7 rounded"
                      />
                      <span className="text-xs">
                        {cleanMasterworkName(plug.name)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <aside className="contents xl:block xl:space-y-4">
            <div className="order-2 h-fit rounded-lg border border-zinc-700 bg-zinc-900 p-4 xl:order-none">
              <div className="flex min-h-[180px] items-center justify-center">
                {weapon.screenshot && !modelImageFailed ? (
                  <img
                    key={weapon.screenshot}
                    src={weapon.screenshot}
                    alt={weapon.name}
                    className="w-full max-w-[330px] rounded-lg object-contain"
                    onError={() => {
                      setModelImageFailed(true);
                    }}
                  />
                ) : (
                  <div className="flex min-h-[180px] w-full items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 text-zinc-500">
                    No model image found
                  </div>
                )}
              </div>

              {weapon.description && (
                <p className="mt-4 text-sm italic text-zinc-300">
                  {weapon.description}
                </p>
              )}

              <div className="mt-4 space-y-2.5">
                {weapon.damageType && (
                  <div className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <img
                      src={weapon.damageType.icon}
                      alt={weapon.damageType.name}
                      className="h-6 w-6"
                    />
                    <span>{weapon.damageType.name}</span>
                  </div>
                )}

                {weapon.deepsight && (
                  <div className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <img
                      src={weapon.deepsight.icon}
                      alt={weapon.deepsight.name}
                      className="h-6 w-6"
                    />
                    <span>{weapon.deepsight.name}</span>
                  </div>
                )}

                {weapon.ammoType && (
                  <div className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <img
                      src={AMMO_ICONS[weapon.ammoType]}
                      alt={AMMO_NAMES[weapon.ammoType]}
                      className="h-6 w-6"
                    />

                    <span>{AMMO_NAMES[weapon.ammoType] ?? "Ammo"}</span>
                  </div>
                )}
              </div>

              {weapon.archetype && (
                <div className="mt-5 border-t border-zinc-700 pt-4">
                  <h2 className="mb-3 text-lg font-bold">{archetypeTitle}</h2>

                  <div className="flex gap-4">
                    <img
                      src={weapon.archetype.icon}
                      alt={weapon.archetype.name}
                      className="h-12 w-12 rounded object-contain bg-transparent"
                    />

                    <div>
                      <h3 className="font-bold text-zinc-200">
                        {weapon.archetype.name}
                      </h3>

                      {weapon.archetype.description && (
                        <p className="mt-2 text-sm text-zinc-300">
                          {weapon.archetype.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {(weapon.exoticPerks ?? []).length > 0 && (
                <div className="mt-5 border-t border-zinc-700 pt-4">
                  <h2 className="mb-3 text-lg font-bold">Exotic Perk</h2>

                  {(weapon.exoticPerks ?? []).map((perk) => (
                    <div key={perk.hash} className="flex gap-4">
                      <img
                        src={perk.icon}
                        alt={perk.name}
                        className="h-12 w-12 rounded object-contain bg-transparent"
                      />

                      <div>
                        <h3 className="font-bold text-zinc-200">{perk.name}</h3>
                        <p className="mt-2 text-sm text-zinc-300">
                          {perk.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </aside>
        </div>
      </div>

      {floatingInfo && <FloatingPerkInfoCard info={floatingInfo} />}
    </main>
  );
}
