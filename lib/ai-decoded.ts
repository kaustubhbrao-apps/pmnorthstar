// AI Decoded — northstar's section on how PMs, marketers, founders,
// and operators should adapt to the latest AI developments. Markdown
// files in content/ai-decoded/ remain the source of truth; they are
// rendered to HTML at build time by scripts/sync-content.ts into
// data/aiDecodedArticles.ts.
//
// This module used to read and parse those markdown files on every
// request (fs.readFileSync -> gray-matter -> marked). Because the route
// is ISR with a low hit rate, that parsing landed in TTFB on most visits
// and made /ai-decoded/[slug] the slowest route on the site. Reading a
// prebuilt array costs nothing at request time.

export interface AIDecodedFrontmatter {
  slug: string;
  title: string;
  excerpt: string;        // ~140-160 chars, used as meta description
  metaTitle?: string;     // optional override if natural title is too long for <title>
  primaryKeyword: string; // main SEO target
  longTailKeywords: string[]; // additional keywords surfaced in headings
  category: string;       // e.g. "Search & SEO", "Agents", "Tooling"
  audience: string[];     // ["PM", "Marketer", "Founder"]
  publishedAt: string;    // ISO date
  updatedAt?: string;     // ISO date — surfaces as "Updated X" line
  heroImage?: {
    src: string;
    alt: string;
    credit?: string;      // attribution line if needed
  };
  tags?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  readTime?: number;      // minutes; calculated from word count if absent
  // Authors add ad-hoc frontmatter keys (e.g. category_note). The old runtime
  // parser cast the parsed object and silently tolerated them; the build-time
  // generated literal is checked strictly, so allow them explicitly rather
  // than dropping fields or widening with a cast.
  [key: string]: unknown;
}

export interface AIDecodedArticle {
  frontmatter: AIDecodedFrontmatter;
  htmlContent: string;    // body rendered to HTML at build time
  wordCount: number;
  readTime: number;
}

// Imported below the type declarations because the generated module imports
// AIDecodedArticle back from here.
import { aiDecodedArticles } from "@/data/aiDecodedArticles";

export function getAllAIDecodedSlugs(): string[] {
  return aiDecodedArticles.map((a) => a.frontmatter.slug);
}

export function getAIDecodedArticleBySlug(
  slug: string
): AIDecodedArticle | null {
  return aiDecodedArticles.find((a) => a.frontmatter.slug === slug) ?? null;
}

export function getAllAIDecodedArticles(): AIDecodedArticle[] {
  const now = new Date();
  return aiDecodedArticles
    .filter(
      (a) =>
        !!a.frontmatter.publishedAt && new Date(a.frontmatter.publishedAt) <= now
    )
    .sort((a, b) => {
      // Most recent first.
      return (
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
      );
    });
}
