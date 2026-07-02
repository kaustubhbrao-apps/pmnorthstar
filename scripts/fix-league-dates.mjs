import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const DIR = "./content/drills";
const files = readdirSync(DIR).filter((f) => f.endsWith(".md"));

let fixedCount = 0;

for (const file of files) {
  const path = join(DIR, file);
  const raw = readFileSync(path, "utf8");

  const pubMatch = raw.match(/^publishedAt:\s*['"]([^'"]+)['"]/m);
  if (!pubMatch) continue;

  const pubDateIso = pubMatch[1];
  const pubDate = new Date(pubDateIso);
  
  const addDays = 7;
  const endMs = pubDate.getTime() + addDays * 24 * 60 * 60 * 1000;
  const endDate = new Date(endMs);
  
  // Format as ISO but keep same timezone if possible, or just use UTC
  const endIso = endDate.toISOString().replace('.000Z', '+00:00'); // roughly matches Next.js / frontmatter format

  const endMatch = raw.match(/^leagueEndsAt:\s*['"]([^'"]+)['"]/m);
  if (endMatch) {
    const updated = raw.replace(
      /^leagueEndsAt:\s*['"][^'"]+['"]/m,
      `leagueEndsAt: '${endIso}'`
    );
    writeFileSync(path, updated, "utf8");
    fixedCount++;
  } else {
    // Inject it if it has isLeagueMatch
    if (raw.includes('isLeagueMatch: true')) {
       const updated = raw.replace(
         /isLeagueMatch: true/m,
         `isLeagueMatch: true\nleagueEndsAt: '${endIso}'`
       );
       writeFileSync(path, updated, "utf8");
       fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} drills.`);
