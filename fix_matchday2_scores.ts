import { prisma } from "./lib/prisma";

async function main() {
  const drillSlug = "ai-hiring-assessment-2026";
  
  // Find all attempts for Matchday 2 where points were not awarded but should have been
  const attempts = await prisma.drillAttempt.findMany({
    where: {
      drillSlug,
      leaguePointsEarned: 0,
      score: { gt: 0 }
    }
  });

  console.log(`Found ${attempts.length} affected attempts for ${drillSlug}`);

  for (const attempt of attempts) {
    // 1. Update the attempt to award the points
    await prisma.drillAttempt.update({
      where: { id: attempt.id },
      data: { leaguePointsEarned: attempt.score }
    });

    // 2. Add the points to the user's total leaguePoints
    await prisma.user.update({
      where: { id: attempt.userId },
      data: {
        leaguePoints: { increment: attempt.score }
      }
    });
    console.log(`Restored ${attempt.score} points for user ${attempt.userId}`);
  }
}

main().catch(console.error);
