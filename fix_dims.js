const fs = require('fs');
const path = require('path');

const validDims = new Set(['product', 'business', 'founder', 'strategy']);

const mapDim = {
  marketing: 'business',
  sales: 'business',
  brand: 'business',
  content: 'product',
  engineering: 'product',
  team: 'founder',
  logistics: 'business',
  ecosystem: 'strategy',
  finance: 'business',
  execution: 'founder',
  'investor-relations': 'business',
  growth: 'business'
};

const dir = 'content/drills';
const files = fs.readdirSync(dir);

let changedFiles = 0;

for (const file of files) {
  if (!file.endsWith('.md')) continue;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  content = content.replace(/^[ \t]*dimension:[ \t]*(.+)$/gm, (match, dim) => {
    const d = dim.trim().replace(/^['"]|['"]$/g, '');
    if (!validDims.has(d)) {
      const mapped = mapDim[d] || 'business'; // default to business
      changed = true;
      console.log(`Mapping ${d} to ${mapped} in ${file}`);
      return match.replace(dim, mapped);
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    changedFiles++;
  }
}

console.log(`Fixed dimensions in ${changedFiles} files.`);
