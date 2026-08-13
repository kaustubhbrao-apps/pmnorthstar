// Site search endpoint backing the homepage search box.
//
// The homepage used to filter the whole library in the browser, which meant
// shipping every dataset it searched. This runs the same matching on the
// server and returns only the hits.
//
// Cached at the edge: results depend solely on the query and the published
// set, so identical queries can be served from cache. The published set can
// change on a schedule boundary, hence the modest s-maxage rather than a
// long immutable cache.

import { NextRequest, NextResponse } from "next/server";
import { searchSite } from "@/lib/search";

export const runtime = "nodejs";
// The response depends entirely on searchParams, so there is nothing to
// prerender. Without this, the build attempts a static render, throws
// "Dynamic server usage" into the catch below, and logs a spurious error.
// CDN caching still applies via the Cache-Control header set below.
export const dynamic = "force-dynamic";

// Long queries can only be pathological — the longest thing worth matching is
// a book subtitle. Cap rather than reject so a paste doesn't error the UI.
const MAX_QUERY_LENGTH = 100;

export async function GET(req: NextRequest) {
  try {
    const raw = req.nextUrl.searchParams.get("q") ?? "";
    const bookCategory = req.nextUrl.searchParams.get("bookCategory") ?? "All";
    const q = raw.slice(0, MAX_QUERY_LENGTH);

    const results = searchSite(q, bookCategory);

    return NextResponse.json(results, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
      },
    });
  } catch (err) {
    console.error("search error:", err);
    // An empty result set degrades to "no matches" in the UI rather than
    // breaking the page.
    return NextResponse.json(
      {
        books: [],
        caseStudies: [],
        playlists: [],
        topics: [],
        aiDecoded: [],
        comparisons: [],
      },
      { status: 200 }
    );
  }
}
