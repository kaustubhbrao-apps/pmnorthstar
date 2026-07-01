import { prisma } from "./lib/prisma";

async function main() {
  const userId = "3765ee3b-3c50-433d-9079-c9e3ff6bb1dd";
  const drillSlug = "ai-hiring-assessment-2026";
  
  // Find all attempts for this user for this drill
  const attempts = await prisma.drillAttempt.findMany({
    where: { userId, drillSlug },
    orderBy: { attemptedAt: 'asc' }
  });

  if (attempts.length > 1) {
    // Keep the first attempt's points, but revert any others
    for (let i = 1; i < attempts.length; i++) {
      const extraAttempt = attempts[i];
      if (extraAttempt.leaguePointsEarned > 0) {
        // 1. Remove points from attempt
        await prisma.drillAttempt.update({
          where: { id: extraAttempt.id },
          data: { leaguePointsEarned: 0 }
        });

        // 2. Remove points from user's total
        await prisma.user.update({
          where: { id: userId },
          data: {
            leaguePoints: { decrement: extraAttempt.leaguePointsEarned }
          }
        });
        console.log(`Reverted ${extraAttempt.leaguePointsEarned} extra points for user ${userId}`);
      }
    }
  }
}

main().catch(console.error);
