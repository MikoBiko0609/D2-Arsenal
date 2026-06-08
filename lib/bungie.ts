const API_KEY = process.env.BUNGIE_API_KEY;

const BASE_URL = "https://www.bungie.net/Platform";
const BUNGIE_BASE = "https://www.bungie.net";
const MANIFEST_TTL_MS = 60 * 1000;
const COMPONENT_TTL_MS = 5 * 60 * 1000;

type ManifestResponse = {
  Response: {
    jsonWorldComponentContentPaths: {
      en: Record<string, string>;
    };
  };
};

type CacheEntry<T> = {
  expiresAt: number;
  value?: T;
  promise?: Promise<T>;
};

let manifestCache: CacheEntry<ManifestResponse> | null = null;
const componentCache = new Map<string, CacheEntry<unknown>>();

export async function getManifest() {
  const now = Date.now();

  if (manifestCache && manifestCache.expiresAt > now) {
    if (manifestCache.value) return manifestCache.value;
    if (manifestCache.promise) return manifestCache.promise;
  }

  const promise = fetchManifest();
  manifestCache = {
    expiresAt: now + MANIFEST_TTL_MS,
    promise,
  };

  try {
    const value = await promise;
    manifestCache = {
      expiresAt: Date.now() + MANIFEST_TTL_MS,
      value,
    };
    return value;
  } catch (error) {
    manifestCache = null;
    throw error;
  }
}

async function fetchManifest() {
  const response = await fetch(`${BASE_URL}/Destiny2/Manifest/`, {
    cache: "no-store",
    headers: {
      "X-API-Key": API_KEY || "",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch manifest");
  }

  return response.json();
}

export async function getManifestComponent<T>(
  componentName: string
): Promise<T> {
  const manifest = await getManifest();
  const componentPath =
    manifest.Response.jsonWorldComponentContentPaths.en[componentName];

  if (!componentPath) {
    throw new Error(`Manifest component not found: ${componentName}`);
  }

  const cacheKey = `${componentName}:${componentPath}`;
  const now = Date.now();
  const cached = componentCache.get(cacheKey) as CacheEntry<T> | undefined;

  if (cached && cached.expiresAt > now) {
    if (cached.value) return cached.value;
    if (cached.promise) return cached.promise;
  }

  const promise = fetch(`${BUNGIE_BASE}${componentPath}`, {
    cache: "no-store",
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch manifest component: ${componentName}`);
    }

    return response.json() as Promise<T>;
  });

  componentCache.set(cacheKey, {
    expiresAt: now + COMPONENT_TTL_MS,
    promise,
  });

  try {
    const value = await promise;
    componentCache.set(cacheKey, {
      expiresAt: Date.now() + COMPONENT_TTL_MS,
      value,
    });
    return value;
  } catch (error) {
    componentCache.delete(cacheKey);
    throw error;
  }
}

export async function getStatDefinitions() {
  return getManifestComponent("DestinyStatDefinition");
}
