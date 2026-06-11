import { prisma } from "@/lib/prisma";

export type LeaderboardEntry = {
  id: string;
  name: string | null;
  username: string | null;
  leaguePoints: number;
  rank: number;
};

export async function fetchLeaderboard(userId?: string): Promise<{
  top10: LeaderboardEntry[];
  myEntry: LeaderboardEntry | null;
  totalPlayers: number;
}> {
  try {
    const top10Raw = await prisma.user.findMany({
      where: { leaguePoints: { gt: 0 } },
      orderBy: { leaguePoints: "desc" },
      take: 10,
      select: { id: true, name: true, username: true, leaguePoints: true },
    });
    const top10: LeaderboardEntry[] = top10Raw.map((u, i) => ({ ...u, rank: i + 1 }));
    const totalPlayers = await prisma.user.count({ where: { leaguePoints: { gt: 0 } } });

    let myEntry: LeaderboardEntry | null = null;
    if (userId) {
      const inTop = top10.find((e) => e.id === userId);
      if (inTop) {
        myEntry = inTop;
      } else {
        const me = await prisma.user.findUnique({
          where: { id: userId },
          select: { id: true, name: true, username: true, leaguePoints: true },
        });
        if (me && me.leaguePoints > 0) {
          const above = await prisma.user.count({
            where: { leaguePoints: { gt: me.leaguePoints } },
          });
          myEntry = { ...me, rank: above + 1 };
        }
      }
    }
    return { top10, myEntry, totalPlayers };
  } catch {
    return { top10: [], myEntry: null, totalPlayers: 0 };
  }
}
