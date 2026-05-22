import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// AI Decoded — northstar's section on how PMs, marketers, founders,
// and operators should adapt to the latest AI developments. Markdown
// files in content/ai-decoded/ are the source of truth. Each file
// follows the Decoder template (frontmatter + 6 sections).

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
}

export interface AIDecodedArticle {
  frontmatter: AIDecodedFrontmatter;
  htmlContent: string;    // body rendered to HTML
  rawMarkdown: string;    // raw markdown body (for editing flows)
  wordCount: number;
  readTime: number;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "ai-decoded");

function ensureContentDir() {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }
}

// Configure marked: GFM (tables, task lists), header IDs for in-page
// anchors, line breaks honored. Synchronous mode keeps server components
// simple — async would force route components to be async too.
marked.setOptions({ gfm: true, breaks: false });

export function getAllAIDecodedSlugs(): string[] {
  ensureContentDir();
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAIDecodedArticleBySlug(
  slug: string
): AIDecodedArticle | null {
  ensureContentDir();
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readTime =
    (data.readTime as number | undefined) ?? Math.max(1, Math.round(wordCount / 220));
  const htmlContent = marked.parse(content, { async: false }) as string;
  return {
    frontmatter: { ...(data as AIDecodedFrontmatter), slug },
    htmlContent,
    rawMarkdown: content,
    wordCount,
    readTime,
  };
}

export function getAllAIDecodedArticles(): AIDecodedArticle[] {
  const slugs = getAllAIDecodedSlugs();
  return slugs
    .map((s) => getAIDecodedArticleBySlug(s))
    .filter((a): a is AIDecodedArticle => a !== null)
    .filter((a) => !!a.frontmatter.publishedAt)
    .sort((a, b) => {
      // Most recent first.
      return (
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
      );
    });
}
