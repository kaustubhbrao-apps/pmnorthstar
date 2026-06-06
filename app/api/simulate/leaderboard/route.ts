import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 60; // Cache for 60 seconds

export async function GET() {
  try {
    const topUsers = await prisma.user.findMany({
      where: {
        leaguePoints: { gt: 0 }
      },
      orderBy: {
        leaguePoints: 'desc'
      },
      take: 10,
      select: {
        id: true,
        name: true,
        leaguePoints: true
      }
    });

    return NextResponse.json({ leaderboard: topUsers });
  } catch (error) {
    console.error("Leaderboard fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 });
  }
}