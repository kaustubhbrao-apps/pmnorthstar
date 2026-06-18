const fs = require('fs');
const path = require('path');

const drillsDir = path.join(__dirname, 'content', 'drills');
const files = fs.readdirSync(drillsDir).filter(f => f.endsWith('.md'));

// The exact 6 drills that were already out, with their original dates
const alreadyOut = {
  'airbnb-survival-2008.md': '2026-05-29T01:00:00+05:30',
  'claude-5-ships-2026.md': '2026-06-01T19:00:00+05:30',
  'zee-world-cup-launch-2026.md': '2026-06-01T20:00:00+05:30',
  'slack-pivot-from-glitch-2013.md': '2026-06-05T19:00:00+05:30',
  'apple-opens-siri-to-llms-2026.md': '2026-06-08T19:00:00+05:30',
  'stripe-pricing-call-2010.md': '2026-06-12T19:00:00+05:30'
};

const leagueDrills = [];

for (const file of files) {
  let content = fs.readFileSync(path.join(drillsDir, file), 'utf8');
  
  if (alreadyOut[file]) {
    // Remove isLeagueMatch entirely if it exists
    content = content.replace(/isLeagueMatch:\s*(true|false)\n/g, '');
    content = content.replace(/leagueEndsAt:\s*['"]?.*?['"]?\n/g, '');
    // Restore the exact date
    content = content.replace(/publishedAt:\s*['"]?.*?['"]?\n/, `publishedAt: '${alreadyOut[file]}'\n`);
    fs.writeFileSync(path.join(drillsDir, file), content);
  } else {
    // Ensure it is a league match
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
