import { publishedDrills } from "./data/drills";

const cutoff = undefined;
const allPublished = publishedDrills(cutoff);
const leagueMatches = allPublished.filter(d => d.isLeagueMatch).sort((a, b) => new Date(a.publishedAt!).getTime() - new Date(b.publishedAt!).getTime());
const matchdayMap = new Map(leagueMatches.map((d, i) => [d.slug, i + 1]));

console.log("League Matches count:", leagueMatches.length);
leagueMatches.forEach(m => console.log(m.slug, m.publishedAt, matchdayMap.get(m.slug)));
