let weaponSearchPromise: Promise<unknown> | null = null;
let weaponSearchData: unknown | null = null;

const STORAGE_KEY = "d2-arsenal.weapon-search-data";
const STORAGE_TTL_MS = 60 * 60 * 1000;

type StoredWeaponSearchData = {
  expiresAt: number;
  data: unknown;
};

function readStoredWeaponSearchData() {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as StoredWeaponSearchData;

    if (parsed.expiresAt <= Date.now()) {
      window.sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return parsed.data;
  } catch {
    return null;
  }
}

function writeStoredWeaponSearchData(data: unknown) {
  if (typeof window === "undefined") return;

  try {
    window.sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        expiresAt: Date.now() + STORAGE_TTL_MS,
        data,
      })
    );
  } catch {
    // Storage can fail in private browsing or under quota pressure.
  }
}

export function loadWeaponSearchData<T>() {
  if (weaponSearchData) {
    return Promise.resolve(weaponSearchData as T);
  }

  const storedData = readStoredWeaponSearchData();

  if (storedData) {
    weaponSearchData = storedData;
    return Promise.resolve(storedData as T);
  }

  if (!weaponSearchPromise) {
    weaponSearchPromise = fetch("/api/weapons", { cache: "no-store" }).then(
      async (response) => {
        if (!response.ok) {
          weaponSearchPromise = null;
          throw new Error("Failed to load weapons.");
        }

        const data = await response.json();
        weaponSearchData = data;
        writeStoredWeaponSearchData(data);
        return data;
      }
    );
  }

  return weaponSearchPromise as Promise<T>;
}
