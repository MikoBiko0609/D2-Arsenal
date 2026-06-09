import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const DEFAULT_BASE_URL = "http://localhost:3000";
const CONCURRENCY = 12;

function getArg(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function getManifestKey(manifest) {
  const paths = manifest.Response.jsonWorldComponentContentPaths.en;

  return (
    manifest.Response.version ??
    [
      paths.DestinyInventoryItemDefinition,
      paths.DestinyPlugSetDefinition,
      paths.DestinyDamageTypeDefinition,
      paths.DestinyStatGroupDefinition,
    ].join("|")
  );
}

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.json();
}

async function mapWithConcurrency(items, worker) {
  const results = new Array(items.length);
  let nextIndex = 0;

  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (nextIndex < items.length) {
        const index = nextIndex;
        nextIndex += 1;
        results[index] = await worker(items[index], index);
      }
    })
  );

  return results;
}

async function main() {
  const baseUrl = (getArg("--base-url") ?? DEFAULT_BASE_URL).replace(/\/$/, "");
  const outputPath =
    getArg("--output") ??
    path.join(process.cwd(), "data", "generated", "arsenal-cache.json");

  console.log(`Reading manifest from ${baseUrl}`);
  const manifest = await fetchJson(`${baseUrl}/api/manifest`);
  const manifestKey = getManifestKey(manifest);

  console.log("Building weapon search cache");
  const weapons = await fetchJson(`${baseUrl}/api/weapons`);
  const weaponDetails = {};

  console.log(`Building ${weapons.length} weapon detail entries`);
  await mapWithConcurrency(weapons, async (weapon, index) => {
    const details = await fetchJson(`${baseUrl}/api/weapon/${weapon.hash}`);
    weaponDetails[String(weapon.hash)] = details;

    if ((index + 1) % 100 === 0 || index === weapons.length - 1) {
      console.log(`${index + 1}/${weapons.length}`);
    }
  });

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(
    outputPath,
    JSON.stringify(
      {
        manifestKey,
        generatedAt: new Date().toISOString(),
        weapons,
        weaponDetails,
      },
      null,
      0
    )
  );

  console.log(`Wrote ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
