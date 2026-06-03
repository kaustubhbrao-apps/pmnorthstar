import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // We want the absolute highest scores achieved by unique hosts.
    // Grouping by host and taking the MAX(score) ensures we don't
    // get 5 entries of "pmnorthstar.in" just because it was audited 5 times.
    const topAudits = await prisma.$queryRaw`
      SELECT 
        host, 
        MAX(score) as best_score, 
        MAX(band) as band,
        MAX(fetched_at) as last_checked
      FROM checkit_audits 
      WHERE host NOT LIKE '%pmnorthstar.in'
      GROUP BY host
      ORDER BY best_score DESC 
      LIMIT 5
    `;
    
    // Format them for the client.
    const sortedAudits = (topAudits as any[]).map(audit => {
      // Simple heuristic to get a "company name" from a host:
      // 'www.stripe.com' -> 'stripe' -> 'Stripe'
      const rawHost = audit.host.replace(/^www\./, '');
      const firstPart = rawHost.split('.')[0] || rawHost;
      const companyName = firstPart.charAt(0).toUpperCase() + firstPart.slice(1);
      
      return {
        company: companyName,
        url: audit.host,
        score: Number(audit.best_score), // BigInt from raw query needs conversion
        band: audit.band,
        timestamp: audit.last_checked,
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
