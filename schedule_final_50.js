const fs = require('fs');
const path = require('path');

const drillsDir = path.join(__dirname, 'content', 'drills');
const files = fs.readdirSync(drillsDir).filter(f => f.endsWith('.md'));

const alreadyOut = [
  'airbnb-survival-2008.md',
  'claude-5-ships-2026.md',
  'zee-world-cup-launch-2026.md',
  'slack-pivot-from-glitch-2013.md',
  'apple-opens-siri-to-llms-2026.md',
  'stripe-pricing-call-2010.md'
];

// Pick 3 drills to be the pre-season releases for Jun 15, 19, 22
const preSeason = [
  'competitor-shipped-your-roadmap-2026.md',
  'notion-pivot-2015.md',
  'linear-pricing-2019.md'
];

const preSeasonDates = [
  '2026-06-15T19:00:00+05:30',
  '2026-06-19T19:00:00+05:30',
  '2026-06-22T19:00:00+05:30'
];

const leagueDrills = [];

for (const file of files) {
  let content = fs.readFileSync(path.join(drillsDir, file), 'utf8');

  if (alreadyOut.includes(file)) {
    // Already perfectly configured by previous script, ignore.
    continue;
  } else if (preSeason.includes(file)) {
    // Convert to SimulateIt drill (remove league, assign past/current date)
    content = content.replace(/isLeagueMatch:\s*(true|false)\n/g, '');
    content = content.replace(/leagueEndsAt:\s*['"]?.*?['"]?\n/g, '');
    const dateStr = preSeasonDates[preSeason.indexOf(file)];
    content = content.replace(/publishedAt:\s*['"]?.*?['"]?\n/, `publishedAt: '${dateStr}'\n`);
    fs.writeFileSync(path.join(drillsDir, file), content);
  } else {
    // It's a League drill
    if (!content.includes('isLeagueMatch:')) {
      content = content.replace(/(publishedAt:\s*['"]?.*?['"]?\n)/, `$1isLeagueMatch: true\n`);
    } else {
      content = content.replace(/isLeagueMatch:\s*(true|false)\n/, 'isLeagueMatch: true\n');
    }
    leagueDrills.push({ file, content });
  }
}

// Sort League matches alphabetically
leagueDrills.sort((a, b) => a.file.localeCompare(b.file));

// Schedule League Matches starting EXACTLY June 26
let currentDate = new Date('2026-06-26T15:00:00Z');

for (let i = 0; i < leagueDrills.length; i++) {
  const match = leagueDrills[i];
  const newDateStr = currentDate.toISOString().replace('.000Z', '+00:00');
  
  const newContent = match.content.replace(/publishedAt:\s*['"]?.*?['"]?\n/, `publishedAt: '${newDateStr}'\n`);
  fs.writeFileSync(path.join(drillsDir, match.file), newContent);

  // Friday -> Sunday -> Wednesday -> Sunday
  if (i === 0) {
    currentDate.setUTCDate(currentDate.getUTCDate() + 2); // Fri -> Sun
  } else if (currentDate.getUTCDay() === 0) {
    currentDate.setUTCDate(currentDate.getUTCDate() + 3); // Sun -> Wed
  } else {
    currentDate.setUTCDate(currentDate.getUTCDate() + 4); // Wed -> Sun
  }
}

console.log(`Scheduled ${preSeason.length} pre-season drills and ${leagueDrills.length} League Matchdays.`);
