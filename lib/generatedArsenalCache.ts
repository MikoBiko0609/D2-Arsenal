import { readFile } from "node:fs/promises";
import path from "node:path";
import { getManifestCacheKey } from "@/lib/bungie";

type GeneratedArsenalCache = {
  manifestKey: string;
  generatedAt: string;
  weapons: unknown[];
  weaponDetails: Record<string, unknown>;
};

const CACHE_PATH = path.join(
  process.cwd(),
  "data",
  "generated",
  "arsenal-cache.json"
);

let loadedCache:
  | {
      cache: GeneratedArsenalCache | null;
      promise?: Promise<GeneratedArsenalCache | null>;
    }
  | null = null;

async function loadGeneratedCache() {
  if (loadedCache?.cache !== undefined) {
    return loadedCache.cache;
  }

  if (loadedCache?.promise) {
    return loadedCache.promise;
  }

  const promise = readFile(CACHE_PATH, "utf8")
    .then((contents) => JSON.parse(contents) as GeneratedArsenalCache)
    .catch(() => null);

  loadedCache = { cache: null, promise };

  const cache = await promise;
  loadedCache = { cache };

  return cache;
}

async function getCurrentGeneratedCache() {
  const [cache, manifestKey] = await Promise.all([
    loadGeneratedCache(),
    getManifestCacheKey(),
  ]);

  if (!cache || cache.manifestKey !== manifestKey) {
    return null;
  }

  return cache;
}

export async function getGeneratedWeaponSearchResults<T>() {
  const cache = await getCurrentGeneratedCache();
  return (cache?.weapons as T | undefined) ?? null;
}

export async function getGeneratedWeaponDetails<T>(hash: string) {
  const cache = await getCurrentGeneratedCache();
  return (cache?.weaponDetails[String(hash)] as T | undefined) ?? null;
}
