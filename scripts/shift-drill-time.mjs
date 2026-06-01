import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "content/drills");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".md"));

let shifted = 0;

for (const file of files) {
  const p = path.join(dir, file);
  const content = fs.readFileSync(p, "utf8");
  
  // Look for publishedAt: "YYYY-MM-DDTHH:MM:SS+05:30"
  const updated = content.replace(/publishedAt: "([^"]+)"/, (match, iso) => {
    // Only target the ones currently set to 20:30:00
    if (iso.includes("20:30:00+05:30")) {
      const newIso = iso.replace("20:30:00+05:30", "19:00:00+05:30");
      console.log(`✓ ${file}: ${iso} → ${newIso}`);
      shifted++;
      return `publishedAt: "${newIso}"`;
    }
    return match; // Unchanged (e.g. ones already published at 01:00:00)
  });

  if (content !== updated) {
    fs.writeFileSync(p, updated, "utf8");
  }
}

console.log(`\nShifted time for ${shifted} drill(s) to 19:00 (7:00 PM) IST.`);
console.log("Now run: npx tsx scripts/sync-content.ts");
