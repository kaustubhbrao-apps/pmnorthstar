import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const DIR = "/Users/Amber_User/downloads/northstar/content/drills";

const files = readdirSync(DIR).filter((f) => f.endsWith(".md"));

const skipConvert = new Set([
  "ai-agent-autonomy-2026.md",
  "cursor-vs-windsurf-2026.md",
  "mcp-build-or-skip-2026.md",
  "foundation-model-shipped-your-product-2026.md",
]);

let converted = 0;
const leagueFiles = [];

// 1. First pass: Convert the 23 files
for (const file of files) {
  const path = join(DIR, file);
  let raw = readFileSync(path, "utf8");

  const isLeague = raw.includes("isLeagueMatch: true");
  
  if (!isLeague && !skipConvert.has(file)) {
    // Add isLeagueMatch right after publishedAt
    raw = raw.replace(
      /^(publishedAt:\s*['"][^'"]+['"])/m,
      `$1\nisLeagueMatch: true`
    );
    writeFileSync(path, raw, "utf8");
    converted++;
    leagueFiles.push(file);
  } else if (isLeague) {
    leagueFiles.push(file);
  }
}

console.log(`Converted ${converted} drills to League Matches.`);
console.log(`Total League Matches now: ${leagueFiles.length} (Need 50)`);

// 2. Schedule all league files
// Start date: Sunday June 14, 2026 at 20:30 IST (15:00 UTC)
// Dates alternate between Wed and Sun.
let currentDate = new Date("2026-06-14T15:00:00Z");

for (let i = 0; i < leagueFiles.length; i++) {
  const file = leagueFiles[i];
  const path = join(DIR, file);
  let raw = readFileSync(path, "utf8");

  // Format dates: publishedAt is this date, leagueEndsAt is the NEXT date
  const publishedIso = currentDate.toISOString().replace('.000Z', '+00:00');
  
  // Calculate next date for leagueEndsAt
  const nextDate = new Date(currentDate);
  if (currentDate.getUTCDay() === 0) { // Sunday
    nextDate.setUTCDate(nextDate.getUTCDate() + 3); // next is Wed
  } else { // Wednesday
    nextDate.setUTCDate(nextDate.getUTCDate() + 4); // next is Sun
  }
  
  const endsIso = nextDate.toISOString().replace('.000Z', '+00:00');

  // Replace publishedAt
  if (/^publishedAt:/m.test(raw)) {
    raw = raw.replace(/^publishedAt:.*$/m, `publishedAt: '${publishedIso}'`);
  } else {
    raw = raw.replace(/^isLeagueMatch:/m, `publishedAt: '${publishedIso}'\nisLeagueMatch:`);
  }

  // Replace or add leagueEndsAt
  if (/^leagueEndsAt:/m.test(raw)) {
    raw = raw.replace(/^leagueEndsAt:.*$/m, `leagueEndsAt: '${endsIso}'`);
  } else {
    raw = raw.replace(/^isLeagueMatch:.*$/m, `isLeagueMatch: true\nleagueEndsAt: '${endsIso}'`);
  }

  writeFileSync(path, raw, "utf8");
  
  // Advance currentDate to nextDate for the next drill
  currentDate = new Date(nextDate);
}

console.log(`Scheduled ${leagueFiles.length} league matches alternating Wed/Sun starting June 14, 2026.`);
