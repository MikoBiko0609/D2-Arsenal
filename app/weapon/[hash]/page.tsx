import Link from "next/link";
import { headers } from "next/headers";
import WeaponBuilder from "@/components/WeaponBuilder";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type WeaponPageProps = {
  params: Promise<{
    hash: string;
  }>;
};

export default async function WeaponPage({ params }: WeaponPageProps) {
  const { hash } = await params;

  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";

  const response = await fetch(`${protocol}://${host}/api/weapon/${hash}`, {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
    headers: {
      "Cache-Control": "no-store",
    },
  });

  const weapon = await response.json();

  if (!response.ok) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white p-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-zinc-400 hover:text-white">
            Back to main menu
          </Link>

          <div className="mt-8 bg-zinc-900 border border-red-800 rounded-xl p-6 text-red-300">
            {weapon.error ?? "Failed to load weapon."}
          </div>
        </div>
      </main>
    );
  }
  return <WeaponBuilder key={`${weapon.hash}-${weapon.screenshot}`} weapon={weapon} />;
}
