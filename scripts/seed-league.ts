import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding dummy leaderboard data...");

  const dummyUsers = [
    { name: "Satoshi", username: "satoshi", leaguePoints: 450 },
    { name: "Linus", username: "torvalds", leaguePoints: 420 },
    { name: "Ada", username: "lovelace", leaguePoints: 390 },
    { name: "Grace", username: "hopper", leaguePoints: 310 },
    { name: "Alan", username: "turing", leaguePoints: 280 }
  ];

  for (const u of dummyUsers) {
    await prisma.user.upsert({
      where: { email: `${u.username}@example.com` },
      update: { leaguePoints: u.leaguePoints, name: u.name, username: u.username },
      create: {
        email: `${u.username}@example.com`,
        name: u.name,
        username: u.username,
        leaguePoints: u.leaguePoints
      }
    });
  }

  console.log("Done.");
}

main().catch(console.error).finally(() => prisma.$disconnect());
