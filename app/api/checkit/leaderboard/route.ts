import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // We want the most recent *distinct* audits. 
    // If someone spams audit on 'apple.com', it should only show up once.
    // In PostgreSQL, DISTINCT ON is the standard way to do this.
    const recentDistinctAudits = await prisma.$queryRaw`
      SELECT DISTINCT ON (host) 
        host, 
        score, 
        band, 
        fetched_at 
      FROM checkit_audits 
      ORDER BY host, fetched_at DESC 
      LIMIT 100
    `;
    
    // Sort the distinct results by time descending, take the top 5, 
    // and format them for the client.
    const sortedAudits = (recentDistinctAudits as any[])
      .sort((a, b) => new Date(b.fetched_at).getTime() - new Date(a.fetched_at).getTime())
      .slice(0, 5)
      .map(audit => {
        // Simple heuristic to get a "company name" from a host:
        // 'www.stripe.com' -> 'stripe' -> 'Stripe'
        const rawHost = audit.host.replace(/^www\./, '');
        const firstPart = rawHost.split('.')[0] || rawHost;
        const companyName = firstPart.charAt(0).toUpperCase() + firstPart.slice(1);
        
        return {
          company: companyName,
          url: audit.host,
          score: audit.score,
          band: audit.band,
          timestamp: audit.fetched_at,
        };
      });

    return NextResponse.json(
      { leaderboard: sortedAudits },
      {
        // Cache for 30s so the feed feels 'live' without hammering the DB.
        headers: { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120" },
      },
    );
  } catch (error) {
    console.error("CheckIt leaderboard error:", error);
    // Fallback empty array so UI doesn't crash on DB failure
    return NextResponse.json({ leaderboard: [] });
  }
}
