import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Starting simulation run...");

  // Clean up if they exist
  await prisma.user.deleteMany({
    where: { email: { in: ['alex@example.com', 'jordan@example.com', 'taylor@example.com'] } }
  });

  // Create 3 users
  const user1 = await prisma.user.create({
    data: {
      email: 'alex@example.com',
      name: 'Alex Builder',
      username: 'alex_b',
      leaguePoints: 0
    }
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'jordan@example.com',
      name: 'Jordan Founder',
      username: 'jordan_f',
      leaguePoints: 0
    }
  });
  const user3 = await prisma.user.create({
    data: {
      email: 'taylor@example.com',
      name: 'Taylor Operator',
      username: 'taylor_o',
      leaguePoints: 0
    }
  });

  console.log("Created 3 users.");

  const drills = [
    'ai-hiring-assessment-2026',
    'apple-opens-siri-to-llms-2026',
    'ai-agent-autonomy-2026',
    'amazon-prime-shipping-gamble-2005',
    'apple-maps-launch-2012'
  ];

  // Helper to simulate a drill
  async function simulateDrill(user: any, drillSlug: string, score: number, max: number, refUserId?: string) {
    const isFirst = true;
    let pointsEarned = score;

    await prisma.drillAttempt.create({
      data: {
        userId: user.id,
        drillSlug,
        score,
        maxPossible: max,
        pathTaken: [],
        isFirstAttempt: isFirst,
        leaguePointsEarned: pointsEarned
      }
    });

    await prisma.simulateAttempt.create({
      data: {
        drillSlug,
        score,
        maxPossible: max
      }
    });

    if (refUserId) {
      await prisma.leagueReferral.create({
        data: {
          referrerId: refUserId,
          referredId: user.id,
          drillSlug,
          points: 3
        }
      });
      // Give 3 points to referrer
      await prisma.user.update({
        where: { id: refUserId },
        data: { leaguePoints: { increment: 3 } }
      });
    }

    // Give points to user
    await prisma.user.update({
      where: { id: user.id },
      data: { leaguePoints: { increment: pointsEarned } }
    });
  }

  for (const drill of drills) {
    console.log(`Simulating drill: ${drill}`);
    await simulateDrill(user1, drill, 80, 100);
    // User 1 refers User 2
    await simulateDrill(user2, drill, 90, 100, user1.id);
    // User 2 refers User 3
    await simulateDrill(user3, drill, 70, 100, user2.id);
  }

  // Print leaderboard
  const topUsers = await prisma.user.findMany({
    orderBy: { leaguePoints: 'desc' },
    take: 10,
    select: { username: true, leaguePoints: true }
  });

  console.log("\n--- LEADERBOARD ---");
  topUsers.forEach((u, i) => {
    console.log(`${i + 1}. ${u.username} - ${u.leaguePoints} pts`);
  });

  console.log("\nSimulation complete!");
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
