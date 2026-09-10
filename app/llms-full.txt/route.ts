import { buildLlmsFull } from "@/lib/llms";

// See app/llms.txt/route.ts — same reason, same window. This one is ~1.2MB,
// so it is served with a long shared-cache TTL and revalidated in the
// background rather than regenerated per request.
export const revalidate = 21600;

export async function GET() {
  return new Response(buildLlmsFull(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=21600, stale-while-revalidate=86400",
    },
  });
}
