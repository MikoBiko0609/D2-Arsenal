let weaponSearchPromise: Promise<unknown> | null = null;

export function loadWeaponSearchData<T>() {
  if (!weaponSearchPromise) {
    weaponSearchPromise = fetch("/api/weapons", { cache: "no-store" }).then(
      async (response) => {
        if (!response.ok) {
          weaponSearchPromise = null;
          throw new Error("Failed to load weapons.");
        }

        return response.json();
      }
    );
  }

  return weaponSearchPromise as Promise<T>;
}
