// Randomly selects and schedules Simulation League Matchdays.
//
// Run via: npx tsx scripts/schedule-league.ts
//
// 1. Reads unscheduled, drafted drills from content/league-pool/
// 2. Shuffles them to randomize point distribution and topics.
// 3. Assigns them to the next available Wednesday (8:30pm IST) -> Saturday (11:59pm IST) slots.
// 4. Writes the updated markdown back to content/drills/ (so they go live in the next sync).

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = process.cwd();
const POOL_DIR = path.join(ROOT, "content", "league-pool");
const LIVE_DIR = path.join(ROOT, "content", "drills");

function getNextWednesday(after: Date): Date {
  const d = new Date(after);
  d.setDate(d.getDate() + ((3 - d.getDay() + 7) % 7));
  if (d <= after) d.setDate(d.getDate() + 7);
  // 8:30 PM IST = 15:00 UTC
  d.setUTCHours(15, 0, 0, 0);
  return d;
}

function getFollowingSaturday(wednesday: Date): Date {
  const d = new Date(wednesday);
  d.setDate(d.getDate() + 3);
  // 11:59 PM IST = 18:29 UTC
  d.setUTCHours(18, 29, 59, 0);
  return d;
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function main() {
  if (!fs.existsSync(POOL_DIR)) {
    console.log("No league-pool directory found. Create content/league-pool/ to draft matches.");
    return;
  }
  
  if (!fs.existsSync(LIVE_DIR)) {
    fs.mkdirSync(LIVE_DIR, { recursive: true });
  }

  const files = fs.readdirSync(POOL_DIR).filter(f => f.endsWith(".md"));
  if (files.length === 0) {
    console.log("No drafted drills found in content/league-pool/.");
    return;
  }

  console.log(`Found ${files.length} drafted drills in the pool.`);
  const shuffled = shuffle(files);

  // Determine the starting date by looking at the latest scheduled drill in LIVE_DIR
  let latestDate = new Date();
  const liveFiles = fs.readdirSync(LIVE_DIR).filter(f => f.endsWith(".md"));
  for (const f of liveFiles) {
    const raw = fs.readFileSync(path.join(LIVE_DIR, f), "utf8");
    const { data } = matter(raw);
    if (data.publishedAt) {
      const d = new Date(data.publishedAt);
      if (d > latestDate) latestDate = d;
    }
  }

  let nextSlot = getNextWednesday(latestDate);

  console.log(`Scheduling ${shuffled.length} matches starting from ${nextSlot.toISOString()}...`);

  let count = 0;
  for (const file of shuffled) {
    const rawPath = path.join(POOL_DIR, file);
    const raw = fs.readFileSync(rawPath, "utf8");
    const parsed = matter(raw);
    
    // Assign schedule
    const pubDate = nextSlot.toISOString().replace(/\.000Z$/, "+00:00");
    const endSlot = getFollowingSaturday(nextSlot);
    const endDate = endSlot.toISOString().replace(/\.000Z$/, "+00:00");
    
    parsed.data.publishedAt = pubDate;
    parsed.data.isLeagueMatch = true;
    parsed.data.leagueEndsAt = endDate;
    
    // Write out the new markdown
    const newContent = matter.stringify(parsed.content, parsed.data);
    const livePath = path.join(LIVE_DIR, file);
    
    fs.writeFileSync(livePath, newContent, "utf8");
    fs.unlinkSync(rawPath); // Remove from pool
    
    console.log(`- Scheduled [Matchday] ${file}`);
    console.log(`  Start: ${pubDate} | End: ${endDate}`);
    
    // Advance slot to next week
    nextSlot = getNextWednesday(nextSlot);
    count++;
  }

  console.log(`\\nSuccessfully scheduled ${count} League Matches.`);
  console.log("Run \`npx tsx scripts/sync-content.ts\` to update the live manifests.");
}

main();