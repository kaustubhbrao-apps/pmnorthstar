import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const users = await prisma.user.findMany({
    where: { leaguePoints: { gt: 0 } },
    select: { name: true, leaguePoints: true }
  });
  console.log(users);
}
main();
