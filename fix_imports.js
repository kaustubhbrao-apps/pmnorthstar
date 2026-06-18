const fs = require('fs');
let code = fs.readFileSync('components/HeroBanner.tsx', 'utf-8');

code = code.replace(/  DRILL_COUNT,\n/, '');
code = code.replace(/\/\/ CheckIt total = 35 weighted checks across 7 dimensions \(see lib\/checkit\/dimensions\.ts\)\.\nconst CHECKIT_TOTAL = 35;\n/, '');

fs.writeFileSync('components/HeroBanner.tsx', code);
