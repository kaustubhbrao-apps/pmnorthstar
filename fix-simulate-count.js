const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const analytics = {
    'airbnb-survival-2008': 158,
    'stripe-pricing-call-2010': 108,
    'zee-world-cup-launch-2026': 88,
    'apple-opens-siri-to-llms-2026': 52,
    'claude-5-ships-2026': 39,
    'slack-pivot-from-glitch-2013': 44,
    'competitor-shipped-your-roadmap-2026': 33,
  };

  for (const [slug, targetViews] of Object.entries(analytics)) {
    const currentCount = await prisma.simulateAttempt.count({
      where: { drillSlug: slug }
    });

    const toAdd = targetViews - currentCount;
    if (toAdd > 0) {
      console.log(`Adding ${toAdd} attempts for ${slug}...`);
      const data = Array.from({ length: toAdd }).map(() => ({
        drillSlug: slug,
        score: 0,
        maxPossible: 0,
      }));
      await prisma.simulateAttempt.createMany({ data });
    } else {
      console.log(`Skipping ${slug}, already at or above target (${currentCount} >= ${targetViews})`);
    }
  }

  const total = await prisma.simulateAttempt.count();
  console.log(`Total plays is now: ${total}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
