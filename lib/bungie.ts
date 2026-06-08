const API_KEY = process.env.BUNGIE_API_KEY;

const BASE_URL = "https://www.bungie.net/Platform";

export async function getManifest() {
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

export async function getStatDefinitions() {
  const manifest = await getManifest();

  const statPath =
    manifest.Response.jsonWorldComponentContentPaths.en
      .DestinyStatDefinition;

  const response = await fetch(
    `https://www.bungie.net${statPath}`,
    { cache: "no-store" }
  );

  return response.json();
}
