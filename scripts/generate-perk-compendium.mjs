import fs from "node:fs/promises";
import path from "node:path";

const inputPath =
  process.argv[2] ?? "C:\\Users\\mad35\\Downloads\\data.csv";
const outputPath =
  process.argv[3] ?? path.join(process.cwd(), "lib", "perkCompendium.ts");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  if (field || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function repairMojibake(text) {
  return text
    .replaceAll("â†‘", "↑")
    .replaceAll("â¢", "•")
    .replaceAll("â", "–")
    .replaceAll("â", "—")
    .replaceAll("â", "'")
    .replaceAll("â", '"')
    .replaceAll("â", '"')
    .replaceAll("Ã©", "é")
    .replaceAll("ðŸŽ°", "");
}

function normalizeName(name) {
  return repairMojibake(name)
    .split("\n")[0]
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeKey(name) {
  return normalizeName(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function cleanDescriptionForEntry(key, description) {
  if (key === "problem solver") {
    return description.replace(
      /\n\nHit Requirement:[\s\S]*?(?=\n\n(?:â†‘|\u2191)|$)/,
      ""
    );
  }

  return description;
}

function toAsciiJson(value) {
  return JSON.stringify(value, null, 2).replace(
    /[\u007f-\uffff]/g,
    (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`
  );
}

const sectionAliases = new Map([
  ["weapon traits", "Weapon Trait"],
  ["weapon mods", "Weapon Mod"],
  ["seasonal mods", "Weapon Mod"],
  ["regular weapon mods", "Weapon Mod"],
  ["intrinsic traits", "Intrinsic Trait"],
  ["origin traits", "Origin Trait"],
  ["armor set bonuses", "Armor Set Bonus"],
]);

const csvText = await fs.readFile(inputPath, "utf8");
const rows = parseCsv(csvText);
const entries = {};
let currentSection = "";

for (const row of rows) {
  const first = repairMojibake(row[0] ?? "").trim();
  const description = repairMojibake(row[2] ?? "").trim();
  const section = sectionAliases.get(first.toLowerCase());

  if (section) {
    currentSection = section;
    continue;
  }

  const name = normalizeName(first);

  if (!name || !description || description.length < 24) {
    continue;
  }

  if (name.toLowerCase() === "perk" || name.toLowerCase().includes("information")) {
    continue;
  }

  const key = normalizeKey(name);

  entries[key] = {
    name,
    category: currentSection || "Perk",
    description: cleanDescriptionForEntry(key, description),
  };
}

const output = `export type PerkCompendiumEntry = {
  name: string;
  category: string;
  description: string;
};

export const perkCompendium = ${toAsciiJson(entries)} as const satisfies Record<string, PerkCompendiumEntry>;

export function normalizePerkCompendiumKey(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\\s+/g, " ");
}

export function getPerkCompendiumEntry(name: string) {
  const entries: Record<string, PerkCompendiumEntry> = perkCompendium;
  return entries[normalizePerkCompendiumKey(name)];
}
`;

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, output, "utf8");
console.log(
  `Wrote ${Object.keys(entries).length} compendium entries to ${outputPath}`
);
