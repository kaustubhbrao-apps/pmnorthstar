import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// `/*?q=` blocks the homepage tag/search filter URLs (e.g. /?q=marketing).
// These are client-side filtered views of the library with no standalone SEO
// value — the real landing pages for that intent are the curated /topics/*
// hubs, which are indexed. Google was crawling every /?q=<tag> permutation and
// scattering them across Soft 404 (a tag with few results renders an empty
// state, which overrides the canonical), Duplicate, and Alternate-canonical
// buckets — ~120 "not indexed" URLs from one source. The homepage self-canonical
// alone didn't stop it; blocking the crawl does. `/` itself is unaffected.
const DISALLOW = ["/api/", "/reset-password", "/*?q="];

// The assistant crawlers that attribute what they read. middleware.ts already
// exempts these from rate limiting; naming them here changes no behaviour but
// states the policy where a crawler looks for it, rather than leaving them to
// infer permission from the wildcard. Kept in sync with AI_BOT_REGEX in
// middleware.ts.
//
// bytespider and ccbot are deliberately absent — they take content for
// training without citing it, which is the opposite of the trade this site
// wants. They are not disallowed either: the wildcard rule still permits
// them, and turning that into a block is a call to make on purpose.
const CITING_AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Google-NotebookLM",
  "DuckAssistBot",
  "Amazonbot",
  "meta-externalagent",
  "meta-externalfetcher",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...CITING_AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
