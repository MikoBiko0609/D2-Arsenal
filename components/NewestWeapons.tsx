"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loadWeaponSearchData } from "@/lib/clientWeaponData";

type Weapon = {
  hash: number;
  manifestIndex: number;
  releaseVersion: number;
  name: string;
  icon: string;
  type: string;
  tier: string;
  element: string;
  ammoType: string;
  isExotic: boolean;
};

export default function NewestWeapons() {
  const router = useRouter();
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  const [loading, setLoading] = useState(true);
  const [navigatingHash, setNavigatingHash] = useState<number | null>(null);

  useEffect(() => {
    async function loadWeapons() {
      try {
        setLoading(true);
        const data = await loadWeaponSearchData<Weapon[]>();
        setWeapons(data);
      } catch {
        setWeapons([]);
      } finally {
        setLoading(false);
      }
    }

    loadWeapons();
  }, []);

  const newestWeapons = useMemo(() => {
    const latestReleaseVersion = Math.max(
      0,
      ...weapons
        .filter((weapon) => !weapon.isExotic)
        .map((weapon) => weapon.releaseVersion)
    );
    const seenNames = new Set<string>();

    return [...weapons]
      .filter((weapon) => !weapon.isExotic && weapon.manifestIndex > 0)
      .filter((weapon) => {
        if (latestReleaseVersion === 0) {
          return true;
        }

        return weapon.releaseVersion === latestReleaseVersion;
      })
      .sort((a, b) => b.manifestIndex - a.manifestIndex)
      .filter((weapon) => {
        const key = weapon.name.toLowerCase().trim();

        if (seenNames.has(key)) {
          return false;
        }

        seenNames.add(key);
        return true;
      })
      .slice(0, 30);
  }, [weapons]);

  return (
    <section className="mt-10">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2 className="text-sm font-bold uppercase tracking-wide text-zinc-300">
          Newest Weapons
        </h2>
        {loading && (
          <span className="flex items-center gap-2 text-xs font-semibold text-sky-200">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-sky-200/30 border-t-sky-200" />
            Loading
          </span>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {loading
          ? Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="h-20 animate-pulse rounded-xl border border-zinc-800 bg-zinc-900/70"
              />
            ))
          : newestWeapons.map((weapon) => {
              const href = `/weapon/${weapon.hash}`;
              const isNavigating = navigatingHash === weapon.hash;

              return (
                <Link
                  key={weapon.hash}
                  href={href}
                  onMouseEnter={() => router.prefetch(href)}
                  onFocus={() => router.prefetch(href)}
                  onClick={() => setNavigatingHash(weapon.hash)}
                  className={`flex min-h-20 items-center gap-3 rounded-xl border p-3 shadow-lg shadow-black/20 transition ${
                    isNavigating
                      ? "border-sky-400 bg-sky-500/15"
                      : "border-zinc-800 bg-zinc-900 hover:border-sky-500/70 hover:bg-zinc-800"
                  }`}
                  aria-busy={isNavigating}
                >
                  <img
                    src={weapon.icon}
                    alt={weapon.name}
                    className="h-10 w-10 rounded bg-zinc-800"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-bold text-zinc-100">
                      {weapon.name}
                    </div>
                    <div className="mt-1 text-xs text-zinc-400">
                      {weapon.type}
                      {weapon.element && ` - ${weapon.element}`}
                      {weapon.ammoType && ` - ${weapon.ammoType}`}
                    </div>
                  </div>
                  {isNavigating && (
                    <span className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-sky-100/30 border-t-sky-100" />
                  )}
                </Link>
              );
            })}
      </div>
    </section>
  );
}
