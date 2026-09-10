import { buildLlmsIndex } from "@/lib/llms";

// Was a static file in public/, rebuilt only at deploy time — but content
// publishes on a schedule (a future publishedAt reveals via ISR and the
// revalidate cron, with no deploy). A static file cannot be rewritten by
// either, so the index AI crawlers read drifted behind the live site every
// time a scheduled piece went live. As a route it regenerates on the same
// 6h window as the content itself and cannot fall out of step.
export const revalidate = 21600;

export async function GET() {
  return new Response(buildLlmsIndex(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=21600, stale-while-revalidate=86400",
    },
  });
}
