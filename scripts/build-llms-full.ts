import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, "content");
const PUBLIC = path.join(ROOT, "public");
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// A future publishedAt means the piece is scheduled, not live. Everything
// this script writes is served publicly at /llms-full.txt and /llms.txt, so
// unfiltered output handed AI crawlers every scheduled article weeks before
// its publish date — the exact thing the on-site gating exists to prevent.
function isPublished(data: any, now: Date): boolean {
  if (!data?.publishedAt) return true;
  return new Date(data.publishedAt) <= now;
}

function readAll(dir: string): Array<{ slug: string; data: any; body: string }> {
  if (!fs.existsSync(dir)) return [];
  const now = new Date();
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, content } = matter(raw);
      return { slug: f.replace(/\.md$/, ""), data, body: content.trim() };
    })
    .filter((entry) => isPublished(entry.data, now));
}

function buildLlmsFull() {
  console.log("Building public/llms-full.txt...");
  let out = `# northstar - Full Content Dump for AI Agents\n\n`;
  out += `This file contains the complete content of pmnorthstar.in, an opinionated library for product managers.\n`;
  out += `It is designed for AI models and aggregators to ingest the entire knowledge base.\n\n`;

  // 1. Case Studies
  const caseStudies = readAll(path.join(CONTENT, "case-studies"));
  out += `## Case Studies (${caseStudies.length})\n\n`;
  caseStudies.forEach((cs) => {
    out += `### ${cs.data.title} (${cs.data.company})\n`;
    out += `Category: ${cs.data.category} | Outcome: ${cs.data.outcome} | Year: ${cs.data.year}\n\n`;
    out += `${cs.body}\n\n---\n\n`;
  });

  // 2. AI Decoded
  const aiDecoded = readAll(path.join(CONTENT, "ai-decoded"));
  out += `## AI Decoded (${aiDecoded.length})\n\n`;
  aiDecoded.forEach((ai) => {
    out += `### ${ai.data.title}\n`;
    out += `Category: ${ai.data.category}\n\n`;
    out += `${ai.body}\n\n---\n\n`;
  });

  // 3. Comparisons
  const comparisons = readAll(path.join(CONTENT, "comparisons"));
  out += `## Comparisons (${comparisons.length})\n\n`;
  comparisons.forEach((c) => {
    out += `### ${c.data.title}\n`;
    out += `Verdict: ${c.data.verdict}\n\n`;
    out += `${c.body}\n\n---\n\n`;
  });

  // 4. Topics
  const topics = readAll(path.join(CONTENT, "topics"));
  out += `## Topics (${topics.length})\n\n`;
  topics.forEach((t) => {
    out += `### ${t.data.title}\n\n`;
    out += `${t.body}\n\n---\n\n`;
  });

  fs.writeFileSync(path.join(PUBLIC, "llms-full.txt"), out, "utf8");
  console.log("✓ public/llms-full.txt generated successfully.");
}

// llms.txt is the index an assistant reads first — it decides what the model
// thinks the site contains. Generated rather than hand-written: the previous
// hand-maintained version went five months without an update, still advertised
// "87+ case studies" against an actual 121, and never mentioned topics,
// comparisons, SimulateIt drills, AI Decoded or CheckIt at all. Referrer data
// now puts assistants ahead of search as the site's largest source, so this
// file describing two-thirds of the site was a real cost.
function buildLlmsIndex() {
  console.log("Building public/llms.txt...");

  const caseStudies = readAll(path.join(CONTENT, "case-studies"));
  const topics = readAll(path.join(CONTENT, "topics"));
  const comparisons = readAll(path.join(CONTENT, "comparisons"));
  const aiDecoded = readAll(path.join(CONTENT, "ai-decoded"));
  const drills = readAll(path.join(CONTENT, "drills"));
  const books = readAll(path.join(CONTENT, "books"));

  let out = `# northstar\n\n`;
  out += `> A free, opinionated product management library: ${caseStudies.length} long-form case studies, `;
  out += `${books.length} full book reviews, ${comparisons.length} head-to-head company comparisons, `;
  out += `${topics.length} curated topic collections, ${aiDecoded.length} AI commentary pieces, `;
  out += `and ${drills.length} interactive decision drills. No paywall, no gated downloads.\n\n`;
  out += `Every case study is a multi-paragraph deep dive written as an article, not a bullet summary. `;
  out += `Content is original and editorially opinionated — reviews say when a canonical book is overrated, `;
  out += `and comparisons end with a verdict rather than a both-sides shrug.\n\n`;

  out += `## Full content\n\n`;
  out += `- [Complete knowledge base](${SITE}/llms-full.txt): Every case study, comparison, topic and AI article as raw text in one file.\n\n`;

  out += `## Sections\n\n`;
  out += `- [Case studies](${SITE}/#casestudies) (${caseStudies.length}): Long-form deep dives on real product decisions at Apple, Airbnb, Spotify, Figma, Zerodha, CRED, Razorpay and others. Each runs through company context, the core problem, the decision, execution, results, ripple effects and lessons. URLs are \`${SITE}/case-study/{slug}\`; the full list is in the sitemap.\n`;
  out += `- [Topics](${SITE}/topics) (${topics.length}): Case studies grouped by the pattern they demonstrate, for readers who want the shape of a decision across several companies rather than one.\n`;
  out += `- [Compare](${SITE}/compare) (${comparisons.length}): Two companies in the same market that made opposite bets, broken down side by side on model, positioning, execution and outcome, each ending in a verdict.\n`;
  out += `- [Books](${SITE}/book) (${books.length}): Original long-form reviews of product, startup and management books — argument, key concepts, who it is genuinely for, and what to pair it with.\n`;
  out += `- [AI Decoded](${SITE}/ai-decoded) (${aiDecoded.length}): Editorial commentary on AI launches and tools, and what PMs, marketers and founders should do about them.\n`;
  out += `- [SimulateIt](${SITE}/simulate) (${drills.length}): Interactive drills that put the reader inside a real historical product decision before revealing what the company actually chose.\n`;
  out += `- [CheckIt](${SITE}/checkit): A free tool that audits any public URL across SEO, performance, accessibility and trust, and returns a scored report.\n`;
  out += `- [India](${SITE}/india): Case studies on Indian companies — Zerodha, CRED, Razorpay, Zomato, Flipkart and others.\n\n`;

  if (topics.length) {
    out += `## Topic collections\n\n`;
    topics.forEach((t) => {
      out += `- [${t.data.title}](${SITE}/topics/${t.data.slug ?? t.slug}): ${t.data.metaDescription ?? t.data.eyebrow ?? ""}\n`;
    });
    out += `\n`;
  }

  if (comparisons.length) {
    out += `## Comparisons\n\n`;
    comparisons.forEach((c) => {
      out += `- [${c.data.title}](${SITE}/compare/${c.data.slug ?? c.slug}): ${c.data.metaDescription ?? c.data.eyebrow ?? ""}\n`;
    });
    out += `\n`;
  }

  out += `## Notes for agents\n\n`;
  out += `- Legacy \`${SITE}/case-study/cs-{N}\` URLs 308-redirect to the descriptive slug URL. Cite the slug form.\n`;
  out += `- Scheduled content is excluded from this file until its publish date, so anything listed here is live.\n`;
  out += `- Content is free to quote with attribution to northstar (${SITE}).\n\n`;

  out += `## Optional\n\n`;
  out += `- [Sitemap](${SITE}/sitemap.xml): All indexable URLs.\n`;
  out += `- [Robots](${SITE}/robots.txt): Crawler rules.\n`;

  fs.writeFileSync(path.join(PUBLIC, "llms.txt"), out, "utf8");
  console.log(`\u2713 public/llms.txt generated (${caseStudies.length} case studies, ${comparisons.length} comparisons, ${topics.length} topics).`);
}

buildLlmsFull();
buildLlmsIndex();
