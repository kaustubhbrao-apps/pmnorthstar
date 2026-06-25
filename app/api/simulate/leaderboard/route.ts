import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();

    const topUsersRaw = await prisma.user.findMany({
      where: { leaguePoints: { gt: 0 } },
      orderBy: { leaguePoints: 'desc' },
      take: 10,
      select: { id: true, name: true, username: true, leaguePoints: true }
    });

    const top10 = topUsersRaw.map((u, i) => ({ ...u, rank: i + 1 }));

    const totalPlayers = await prisma.user.count({
      where: { leaguePoints: { gt: 0 } }
    });

    let myEntry = null;
    if (session) {
      // Find where I am
      const me = await prisma.user.findUnique({
        where: { id: session.id },
        select: { id: true, name: true, username: true, leaguePoints: true }
      });
      if (me && me.leaguePoints > 0) {
        // Calculate rank
        const higherScoring = await prisma.user.count({
          where: { leaguePoints: { gt: me.leaguePoints } }
        });
        myEntry = { ...me, rank: higherScoring + 1 };
      }
    }

    return NextResponse.json({ 
      top10, 
      totalPlayers,
      myEntry,
      currentUserId: session?.id 
    });
  } catch (error) {
    console.error("Leaderboard fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 });
  }
}