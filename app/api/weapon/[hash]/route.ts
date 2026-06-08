import { NextResponse } from "next/server";
import { getWeaponDetails } from "@/lib/weaponDetails";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ hash: string }> }
) {
  try {
    const { hash } = await params;
    const weapon = await getWeaponDetails(hash);

    return NextResponse.json(weapon, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "fetch failed";
    const status = message === "Weapon not found" ? 404 : 500;

    return NextResponse.json({ error: message }, { status });
  }
}
