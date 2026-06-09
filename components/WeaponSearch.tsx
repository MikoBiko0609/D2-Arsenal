"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { loadWeaponSearchData } from "@/lib/clientWeaponData";

type FilterKey =
  | "barrelPerks"
  | "magPerks"
  | "perk1"
  | "perk2"
  | "hasPerks"
  | "originTraits"
  | "ammoType"
  | "element"
  | "hasEnhancedPerks"
  | "isExotic"
  | "archetype"
  | "type";

type Weapon = {
  hash: number;
  manifestIndex: number;
  releaseTag: string;
  releaseVersion: number;
  name: string;
  icon: string;
  type: string;
  tier: string;
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

type FilterDefinition = {
  key: FilterKey;
  label: string;
  multi: boolean;
  boolean?: boolean;
  getValues: (weapon: Weapon) => string[];
};

type Filters = Record<FilterKey, string[]>;

const FILTERS: FilterDefinition[] = [
  {
    key: "barrelPerks",
    label: "Barrel Perk",
    multi: true,
    getValues: (weapon) => weapon.barrelPerks,
  },
  {
    key: "magPerks",
    label: "Mag Perk",
    multi: true,
    getValues: (weapon) => weapon.magPerks,
  },
  {
    key: "perk1",
    label: "Perk 1",
    multi: true,
    getValues: (weapon) => weapon.perk1,
  },
  {
    key: "perk2",
    label: "Perk 2",
    multi: true,
    getValues: (weapon) => weapon.perk2,
  },
  {
    key: "hasPerks",
    label: "Has Perk",
    multi: true,
    getValues: (weapon) => weapon.hasPerks,
  },
  {
    key: "originTraits",
    label: "Origin Trait",
    multi: true,
    getValues: (weapon) => weapon.originTraits,
  },
  {
    key: "ammoType",
    label: "Ammo Type",
    multi: false,
    getValues: (weapon) => [weapon.ammoType],
  },
  {
    key: "element",
    label: "Element",
    multi: false,
    getValues: (weapon) => [weapon.element],
  },
  {
    key: "hasEnhancedPerks",
    label: "Has Enhanced Perks",
    multi: false,
    boolean: true,
    getValues: (weapon) => [weapon.hasEnhancedPerks ? "True" : "False"],
  },
  {
    key: "isExotic",
    label: "Is Exotic",
    multi: false,
    boolean: true,
    getValues: (weapon) => [weapon.isExotic ? "True" : "False"],
  },
  {
    key: "archetype",
    label: "Archetype",
    multi: false,
    getValues: (weapon) => (weapon.isExotic ? [] : [weapon.archetype]),
  },
  {
    key: "type",
    label: "Weapon Type",
    multi: false,
    getValues: (weapon) => [weapon.type],
  },
];

const EMPTY_FILTERS = FILTERS.reduce((filters, filter) => {
  filters[filter.key] = [];
  return filters;
}, {} as Filters);

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function includesText(value: string, search: string) {
  return normalize(value).includes(normalize(search));
}

function getFilterDefinition(key: FilterKey) {
  return FILTERS.find((filter) => filter.key === key) ?? FILTERS[0];
}

function weaponMatchesFilter(weapon: Weapon, filter: FilterDefinition, values: string[]) {
  if (values.length === 0) return true;

  const weaponValues = filter.getValues(weapon).filter(Boolean);

  if (filter.multi) {
    return values.every((value) => weaponValues.includes(value));
  }

  return weaponValues.includes(values[0]);
}

export default function WeaponSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [activeFilter, setActiveFilter] = useState<FilterKey | null>(null);
  const [open, setOpen] = useState(false);
  const [navigatingHash, setNavigatingHash] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function loadWeapons() {
      try {
        setLoading(true);
        setError("");
        const data = await loadWeaponSearchData<Weapon[]>();
        setWeapons(data);
      } catch (loadError) {
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Failed to load weapons."
        );
      } finally {
        setLoading(false);
      }
    }

    loadWeapons();
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveFilter(null);
    setNavigatingHash(null);
    inputRef.current?.blur();
  }, [pathname]);

  useEffect(() => {
    function clearNavigationState() {
      setNavigatingHash(null);
    }

    window.addEventListener("pageshow", clearNavigationState);
    window.addEventListener("focus", clearNavigationState);
    document.addEventListener("visibilitychange", clearNavigationState);

    return () => {
      window.removeEventListener("pageshow", clearNavigationState);
      window.removeEventListener("focus", clearNavigationState);
      document.removeEventListener("visibilitychange", clearNavigationState);
    };
  }, []);

  useEffect(() => {
    function closeSearch() {
      setOpen(false);
      setActiveFilter(null);
      inputRef.current?.blur();
    }

    function handleOutsidePointer(event: PointerEvent) {
      if (!open) return;
      const target = event.target;

      if (
        target instanceof Node &&
        containerRef.current &&
        !containerRef.current.contains(target)
      ) {
        closeSearch();
      }
    }

    document.addEventListener("pointerdown", handleOutsidePointer, true);
    return () =>
      document.removeEventListener("pointerdown", handleOutsidePointer, true);
  }, [open]);

  const selectedFilterCount = FILTERS.reduce(
    (total, filter) => total + filters[filter.key].length,
    0
  );

  const filteredWeapons = useMemo(() => {
    return weapons
      .filter((weapon) => {
        const nameMatches = includesText(weapon.name, search);
        const filtersMatch = FILTERS.every((filter) =>
          weaponMatchesFilter(weapon, filter, filters[filter.key])
        );

        return nameMatches && filtersMatch;
      })
      .slice(0, 40);
  }, [weapons, search, filters]);

  const activeOptions = useMemo(() => {
    if (!activeFilter) return [];

    const definition = getFilterDefinition(activeFilter);
    const options = new Set<string>();

    weapons.forEach((weapon) => {
      definition.getValues(weapon).forEach((value) => {
        if (value) options.add(value);
      });
    });

    return Array.from(options)
      .filter((option) => includesText(option, search))
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 80);
  }, [activeFilter, weapons, search]);

  function focusInput() {
    inputRef.current?.focus();
    setOpen(true);
  }

  function activateFilter(key: FilterKey) {
    const definition = getFilterDefinition(key);

    if (definition.boolean) {
      setFilters((current) => ({
        ...current,
        [key]: current[key][0] === "True" ? [] : ["True"],
      }));
      setActiveFilter(null);
      setSearch("");
      setOpen(true);
      requestAnimationFrame(() => inputRef.current?.focus());
      return;
    }

    setActiveFilter(key);
    setSearch("");
    setOpen(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function editFilter(key: FilterKey) {
    setActiveFilter(key);
    setSearch("");
    setOpen(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function chooseOption(value: string) {
    if (!activeFilter) return;

    const definition = getFilterDefinition(activeFilter);

    setFilters((current) => {
      const currentValues = current[activeFilter];
      const nextValues = definition.multi
        ? currentValues.includes(value)
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value]
        : currentValues[0] === value
          ? []
          : [value];

      return {
        ...current,
        [activeFilter]: nextValues,
      };
    });

    setSearch("");
  }

  function clearFilterValue(key: FilterKey, value?: string) {
    setFilters((current) => {
      const currentValues = current[key];

      return {
        ...current,
        [key]: value
          ? currentValues.filter((item) => item !== value)
          : [],
      };
    });
  }

  function handleInputChange(value: string) {
    setSearch(value);
    setOpen(true);
  }

  return (
    <div ref={containerRef} className="relative">
      <div
        role="button"
        tabIndex={0}
        onClick={focusInput}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            focusInput();
          }
        }}
        className="min-h-16 w-full rounded-xl border border-zinc-600 bg-zinc-900 px-4 py-4 shadow-2xl shadow-black/40 focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-500/20"
      >
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((filter) => {
            const values = filters[filter.key];

            if (values.length === 0 && activeFilter !== filter.key) {
              return null;
            }

            return (
              <span
                key={filter.key}
                onClick={(event) => {
                  event.stopPropagation();
                  editFilter(filter.key);
                }}
                className={`flex max-w-full cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold shadow-lg transition ${
                  activeFilter === filter.key
                    ? "border-sky-300 bg-sky-500/25 text-sky-100 shadow-sky-950/60"
                    : "border-zinc-500 bg-zinc-800 text-zinc-100 shadow-black/30 hover:border-sky-400 hover:bg-zinc-700"
                }`}
              >
                <span className="whitespace-nowrap text-zinc-400">
                  {filter.label}:
                </span>
                <span className="truncate">
                  {values.length > 0 ? values.join(", ") : ""}
                </span>
                {values.length > 0 && (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      clearFilterValue(filter.key);
                    }}
                    className="ml-1 grid h-5 w-5 place-items-center rounded-full bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:text-white"
                    aria-label={`Clear ${filter.label}`}
                  >
                    x
                  </button>
                )}
              </span>
            );
          })}

          <input
            ref={inputRef}
            value={search}
            onFocus={() => setOpen(true)}
            onChange={(event) => handleInputChange(event.target.value)}
            onClick={() => {
              if (!activeFilter) return;
              setSearch("");
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setActiveFilter(null);
                setSearch("");
                inputRef.current?.blur();
                setOpen(false);
              }
              if (event.key === "Backspace" && !search && activeFilter) {
                setActiveFilter(null);
              }
            }}
            placeholder={
              activeFilter
                ? `Search ${getFilterDefinition(activeFilter).label}...`
                : selectedFilterCount > 0
                  ? "Search weapon names..."
                  : "Search weapons or add filters..."
            }
            className="min-w-56 flex-1 bg-transparent px-1 py-1 text-white outline-none placeholder:text-zinc-500"
          />
        </div>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-40 mt-3 max-h-[70vh] overflow-y-auto rounded-xl border border-zinc-700 bg-zinc-950 shadow-2xl shadow-black/60 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {!activeFilter && (
            <div className="border-b border-zinc-800 p-3">
              <div className="mb-2 text-xs uppercase text-zinc-500">
                Filters
              </div>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((filter) => (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => activateFilter(filter.key)}
                    className="rounded-xl border border-zinc-600 bg-zinc-900 px-4 py-3 text-sm font-bold text-zinc-100 shadow-lg shadow-black/30 transition hover:border-sky-400 hover:bg-sky-500/15 hover:text-white"
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeFilter && (
            <div className="border-b border-zinc-800 p-3">
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="text-xs uppercase text-zinc-500">
                  {getFilterDefinition(activeFilter).label} Options
                </div>
                <button
                  type="button"
                  onClick={() => setActiveFilter(null)}
                  className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-bold text-zinc-300 hover:border-sky-400 hover:text-white"
                >
                  Back to weapon search
                </button>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {activeOptions.map((option) => {
                  const selected = filters[activeFilter].includes(option);

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => chooseOption(option)}
                      className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold shadow-md transition ${
                        selected
                          ? "border-sky-400 bg-sky-500/25 text-white shadow-sky-950/50"
                          : "border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {!activeFilter && (
            <div className="p-3">
              <div className="mb-2 text-xs uppercase text-zinc-500">
                Weapons
              </div>

              <div className="grid gap-2">
                {loading && (
                  <div className="flex items-center gap-3 rounded-lg border border-sky-500/30 bg-sky-500/10 p-4 text-sky-100">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-sky-200/30 border-t-sky-200" />
                    <span className="font-semibold">Loading weapons...</span>
                  </div>
                )}

                {!loading && error && (
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-200">
                    {error}
                  </div>
                )}

                {!loading &&
                  !error &&
                  filteredWeapons.map((weapon) => {
                    const isNavigating = navigatingHash === weapon.hash;
                    const href = `/weapon/${weapon.hash}`;

                    return (
                      <Link
                        href={href}
                        key={weapon.hash}
                        onMouseEnter={() => router.prefetch(href)}
                        onFocus={() => router.prefetch(href)}
                        onClick={() => {
                          setNavigatingHash(weapon.hash);
                        }}
                        className={`relative flex items-center gap-4 rounded-xl border p-4 shadow-lg shadow-black/20 transition ${
                          isNavigating
                            ? "border-sky-400 bg-sky-500/15"
                            : "border-zinc-800 bg-zinc-900 hover:border-sky-500/70 hover:bg-zinc-800"
                        }`}
                        aria-busy={isNavigating}
                      >
                        <img
                          src={weapon.icon}
                          alt={weapon.name}
                          className="h-12 w-12 rounded bg-zinc-800"
                        />

                        <div className="min-w-0 flex-1">
                          <h3 className="truncate font-bold">{weapon.name}</h3>
                          <p className="text-sm text-zinc-400">
                            {weapon.tier} {weapon.type}
                            {weapon.element && ` - ${weapon.element}`}
                            {weapon.ammoType && ` - ${weapon.ammoType}`}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2 text-xs">
                            {weapon.archetype && !weapon.isExotic && (
                              <span className="rounded bg-zinc-800 px-2 py-1 text-zinc-300">
                                {weapon.archetype}
                              </span>
                            )}
                            {weapon.originTraits.slice(0, 2).map((origin) => (
                              <span
                                key={origin}
                                className="rounded bg-cyan-500/10 px-2 py-1 text-cyan-200"
                              >
                                {origin}
                              </span>
                            ))}
                            {weapon.isExotic && (
                              <span className="rounded bg-amber-500/10 px-2 py-1 text-amber-200">
                                Exotic
                              </span>
                            )}
                            {!weapon.hasEnhancedPerks && !weapon.isExotic && (
                              <span className="rounded bg-zinc-800 px-2 py-1 text-zinc-500">
                                Not enhanceable
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {weapon.hasEnhancedPerks && (
                            <span className="rounded bg-yellow-500/20 px-2 py-1 text-xs font-semibold text-yellow-200">
                              Enhanceable
                            </span>
                          )}

                          {isNavigating && (
                            <span className="flex items-center gap-2 rounded bg-sky-500/20 px-2 py-1 text-xs font-semibold text-sky-100">
                              <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-sky-100/30 border-t-sky-100" />
                              Loading
                            </span>
                          )}
                        </div>
                      </Link>
                    );
                  })}

                {!loading && !error && filteredWeapons.length === 0 && (
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-zinc-400">
                    No weapons match those filters.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
