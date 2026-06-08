import Link from "next/link";
import WeaponBuilder from "@/components/WeaponBuilder";
import { getWeaponDetails } from "@/lib/weaponDetails";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type WeaponPageProps = {
  params: Promise<{
    hash: string;
  }>;
};

export default async function WeaponPage({ params }: WeaponPageProps) {
  const { hash } = await params;

  try {
    const weapon = await getWeaponDetails(hash);

    return (
      <WeaponBuilder
        key={`${weapon.hash}-${weapon.screenshot}`}
        weapon={weapon}
      />
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "fetch failed";

    return (
      <main className="min-h-screen bg-zinc-950 text-white p-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-zinc-400 hover:text-white">
            Back to main menu
          </Link>

          <div className="mt-8 bg-zinc-900 border border-red-800 rounded-xl p-6 text-red-300">
            {message}
          </div>
        </div>
      </main>
    );
  }
}
