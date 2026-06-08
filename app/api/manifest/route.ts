import { NextResponse } from "next/server";
import { getManifest } from "@/lib/bungie";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const manifest = await getManifest();

    return NextResponse.json(manifest, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch manifest" },
      { status: 500 }
    );
  }
}
