import { drills, Drill } from "./data/drills";

let totalDrills = drills.length;
let issuesCount = 0;

console.log(`\nAuditing ${totalDrills} drills...\n`);
console.log(`-----------------------------------------------------`);

drills.forEach(drill => {
  const issues: string[] = [];
  let numDecisionNodes = 0;
  let numOutcomeNodes = 0;
  
  if (!drill.nodes || Object.keys(drill.nodes).length === 0) {
    issues.push("Missing or empty nodes object");
  } else {
    for (const [key, node] of Object.entries(drill.nodes)) {
      if (node.isOutcome) {
        numOutcomeNodes++;
        if (!node.prompt || node.prompt.length < 10) {
          issues.push(`Outcome node '${key}' has very short or missing prompt`);
        }
      } else {
        numDecisionNodes++;
        if (!node.options || node.options.length < 2) {
          issues.push(`Decision node '${key}' has fewer than 2 options`);
        } else {
          node.options.forEach((opt: any, i: number) => {
            if (!opt.leadsTo) {
              issues.push(`Node '${key}' option ${i} missing leadsTo`);
            } else if (!drill.nodes[opt.leadsTo]) {
              issues.push(`Node '${key}' option ${i} leadsTo invalid node '${opt.leadsTo}'`);
            }
            if (typeof opt.points !== 'number') {
              issues.push(`Node '${key}' option ${i} missing points`);
            }
          });
        }
        
        if (!node.dimension) {
          issues.push(`Decision node '${key}' missing dimension`);
        } else if (!['product', 'business', 'founder', 'strategy'].includes(node.dimension)) {
          issues.push(`Decision node '${key}' has invalid dimension '${node.dimension}'`);
        }
      }
    }
  }

  if (numDecisionNodes < 2) issues.push(`Too short: only ${numDecisionNodes} decision nodes`);
  if (!drill.intro || drill.intro.length < 100) issues.push("Intro is suspiciously short (<100 chars)");

  if (issues.length > 0) {
    issuesCount++;
    console.log(`❌ ${drill.slug} (${drill.type})`);
    console.log(`   Nodes: ${numDecisionNodes} decisions, ${numOutcomeNodes} outcomes`);
    issues.forEach(i => console.log(`   - ${i}`));
    console.log('');
  }
});

console.log(`\nAudit complete: ${issuesCount}/${totalDrills} drills have issues.`);
