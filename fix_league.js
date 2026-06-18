const fs = require('fs');
let code = fs.readFileSync('app/league/page.tsx', 'utf-8');

// remove ArrowUpRight
code = code.replace(/import \{ ChevronRight, ArrowUpRight \} from "lucide-react";/, 'import { ChevronRight } from "lucide-react";');

// remove drillTitle function completely
code = code.replace(/function drillTitle[\s\S]*?\}\n/, '');

// remove activeMatch variable definition
code = code.replace(/  const activeMatch = leagueMatches\.find[^\n]+\n/, '');

// change completedMatchdays to 0 for the coming soon page
code = code.replace(/const completedMatchdays = leagueMatches\.filter\(d => new Date\(d\.publishedAt\) <= cutoff\)\.length;/, 'const completedMatchdays = 0;');

fs.writeFileSync('app/league/page.tsx', code);
