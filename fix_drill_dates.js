const fs = require('fs');
const path = require('path');

const drillsDir = path.join(__dirname, 'content', 'drills');
const files = fs.readdirSync(drillsDir).filter(f => f.endsWith('.md'));

const leagueMatches = [];
for (const file of files) {
  const content = fs.readFileSync(path.join(drillsDir, file), 'utf8');
  if (content.includes('isLeagueMatch: true')) {
    leagueMatches.push({ file, content });
  }
}

leagueMatches.sort((a, b) => {
  const dateA = a.content.match(/publishedAt:\s*['"]?(.*?)['"]?\n/)?.[1] || '';
  const dateB = b.content.match(/publishedAt:\s*['"]?(.*?)['"]?\n/)?.[1] || '';
  return new Date(dateA).getTime() - new Date(dateB).getTime();
});

let currentDate = new Date('2026-06-26T15:00:00Z'); // Matchday 1 is June 26 (Friday)

for (let i = 0; i < leagueMatches.length; i++) {
  const match = leagueMatches[i];
  const newDateStr = currentDate.toISOString().replace('.000Z', '+00:00');
  
  const newContent = match.content.replace(/publishedAt:\s*['"]?.*?['"]?\n/, `publishedAt: '${newDateStr}'\n`);
  fs.writeFileSync(path.join(drillsDir, match.file), newContent);

  // Determine next date
  if (i === 0) {
    // Matchday 1 is Friday, June 26. Next matchday is Sunday, June 28 (+2 days)
    currentDate.setUTCDate(currentDate.getUTCDate() + 2);
  } else if (currentDate.getUTCDay() === 0) {
    // Sunday -> Wednesday (+3 days)
    currentDate.setUTCDate(currentDate.getUTCDate() + 3);
  } else {
    // Wednesday -> Sunday (+4 days)
    currentDate.setUTCDate(currentDate.getUTCDate() + 4);
  }
}
