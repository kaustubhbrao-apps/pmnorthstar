import { prisma } from "../lib/prisma";
import { runAudit } from "../lib/checkit/audit";

async function main() {
  console.log("Fetching distinct hosts from database...");
  const recentDistinctAudits = await prisma.$queryRaw`
    SELECT DISTINCT ON (host) host
    FROM checkit_audits
    ORDER BY host, fetched_at DESC;
  `;

  const hosts = (recentDistinctAudits as any[]).map(a => a.host);
  console.log(`Found ${hosts.length} distinct hosts. Beginning re-audit...`);

  let completed = 0;
  let failed = 0;

  // Run sequentially to avoid network congestion
  for (let i = 0; i < hosts.length; i++) {
    const rawHost = hosts[i];
    const url = `https://${rawHost}`;
    console.log(`[${i + 1}/${hosts.length}] Auditing ${url}...`);

    try {
      const result = await runAudit(url);
      
      if (!result.fatalError) {
        // Save to DB
        let finalHost = result.finalUrl;
        try {
          finalHost = new URL(result.finalUrl || url).hostname;
        } catch {
          finalHost = rawHost;
        }

        await prisma.checkitAudit.create({
          data: {
            host: finalHost,
            score: result.totalScore,
            band: result.band,
            cached: false,
          },
        });
        console.log(`  ✓ Score: ${result.totalScore} (${result.band})`);
        completed++;
      } else {
        console.log(`  ✗ Fatal Error: ${result.fatalError}`);
        failed++;
      }
    } catch (err) {
      console.error(`  ✗ Error processing ${url}:`, err);
      failed++;
    }
  }

  console.log(`\nDone! Successfully audited ${completed} sites, failed ${failed}.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
