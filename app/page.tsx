import NewestWeapons from "@/components/NewestWeapons";
import WeaponSearch from "@/components/WeaponSearch";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl p-6 pt-16">
        <div className="mb-7 text-center">
          <h1 className="text-5xl font-black tracking-wide text-white">
            D2 Arsenal
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-zinc-400">
            Search weapons by name, perk columns, origin traits, ammo, element, and archetype.
          </p>
        </div>

        <WeaponSearch />
        <NewestWeapons />
      </div>
    </main>
  );
}
