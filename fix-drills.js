const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const dir = path.join(__dirname, 'content/drills');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

let fixedCount = 0;

for (const file of files) {
  const p = path.join(dir, file);
  const content = fs.readFileSync(p, 'utf8');
  const match = content.match(/^---\n([\s\S]*?)\n---(\n[\s\S]*)?$/);
  if (!match) continue;
  
  let changed = false;
  const data = yaml.load(match[1]);
  
  if (data.nodes) {
    for (const key of Object.keys(data.nodes)) {
      const node = data.nodes[key];
      
      // Fix broken_promise node in amazon-prime
      if (key === 'broken_promise' && node.options && node.options.length < 2) {
        node.options.push({
          text: "Double down. Inform customers that 5 days is the new normal.",
          leadsTo: "death",
          points: 0,
          rationale: "Changing the core value proposition after people paid for it destroys all brand trust."
        });
        changed = true;
      }
      
      // Fix outcome nodes using 'body' or 'summary' instead of 'prompt'
      if (node.isOutcome) {
        if (!node.prompt) {
          if (node.body) {
            node.prompt = (node.title ? `**${node.title}**\n\n` : '') + node.body;
            delete node.body;
            delete node.title;
            changed = true;
          } else if (node.summary) {
            node.prompt = (node.title ? `**${node.title}**\n\n` : '') + node.summary;
            delete node.summary;
            delete node.title;
            changed = true;
          } else {
             // Still missing prompt?
             node.prompt = "Outcome reached.";
             changed = true;
          }
        }
      }
    }
  }
  
  if (changed) {
    const newYaml = yaml.dump(data, { lineWidth: -1, noRefs: true });
    const restOfFile = match[2] || '';
    fs.writeFileSync(p, `---\n${newYaml}---\n${restOfFile.trim()}\n`);
    fixedCount++;
    console.log(`Fixed ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files.`);
