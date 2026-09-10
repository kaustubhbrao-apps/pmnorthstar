import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { YC_STUDY } from "@/data/yc-study";

const CONTENT = path.join(process.cwd(), "content");
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// A future publishedAt means the piece is scheduled, not live. Everything
// built here is served publicly at /llms-full.txt and /llms.txt, so
// unfiltered output would hand AI crawlers every scheduled article weeks
// before its publish date — the exact thing the on-site gating prevents.
function isPublished(data: any, now: Date): boolean {
  if (!data?.publishedAt) return true;
  return new Date(data.publishedAt) <= now;
}

type Entry = { slug: string; data: any; body: string };

// Reads markdown, not the generated data/*.ts modules, on purpose: those
// store bodies already rendered to HTML (bodyHtml / htmlContent), and a
// plaintext file for language models wants prose, not markup. content/**
// is pulled into the lambda by outputFileTracingIncludes in next.config.js.
function readAll(dir: string, now: Date): Entry[] {
  if (!fs.existsSync(dir)) return [];
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

export function buildLlmsFull(now: Date = new Date()): string {
  let out = `# northstar - Full Content Dump for AI Agents\n\n`;
  out += `This file contains the complete content of pmnorthstar.in, an opinionated library for product managers.\n`;
  out += `It is designed for AI models and aggregators to ingest the entire knowledge base.\n\n`;

  const caseStudies = readAll(path.join(CONTENT, "case-studies"), now);
  out += `## Case Studies (${caseStudies.length})\n\n`;
  caseStudies.forEach((cs) => {
    out += `### ${cs.data.title} (${cs.data.company})\n`;
    out += `Category: ${cs.data.category} | Outcome: ${cs.data.outcome} | Year: ${cs.data.year}\n\n`;
    out += `${cs.body}\n\n---\n\n`;
  });

  const aiDecoded = readAll(path.join(CONTENT, "ai-decoded"), now);
  out += `## AI Decoded (${aiDecoded.length})\n\n`;
  aiDecoded.forEach((ai) => {
    out += `### ${ai.data.title}\n`;
    out += `Category: ${ai.data.category}\n\n`;
    out += `${ai.body}\n\n---\n\n`;
  });

  const comparisons = readAll(path.join(CONTENT, "comparisons"), now);
  out += `## Comparisons (${comparisons.length})\n\n`;
  comparisons.forEach((c) => {
    out += `### ${c.data.title}\n`;
    out += `Verdict: ${c.data.verdict}\n\n`;
    out += `${c.body}\n\n---\n\n`;
  });

  const topics = readAll(path.join(CONTENT, "topics"), now);
  out += `## Topics (${topics.length})\n\n`;
  topics.forEach((t) => {
    out += `### ${t.data.title}\n\n`;
    out += `${t.body}\n\n---\n\n`;
  });

  const answersFull = readAll(path.join(CONTENT, "answers"), now);
  out += `## Answers (${answersFull.length})\n\n`;
  answersFull.forEach((a) => {
    out += `### ${a.data.question}\n`;
    out += `${a.data.shortAnswer}\n\n`;
    out += `${a.body}\n\n---\n\n`;
  });

  // Books. These were only ever in the separate /.well-known/llms-full.txt
  // dump, which is now a redirect here — without this section, consolidating
  // the two would have quietly dropped 30 book reviews from the corpus an
  // assistant can see.
  const books = readAll(path.join(CONTENT, "books"), now);
  out += `## Books (${books.length})\n\n`;
  books.forEach((b) => {
    out += `### ${b.data.title} by ${b.data.author}\n`;
    out += `Category: ${b.data.category} | Rating: ${b.data.rating} | Year: ${b.data.year}\n`;
    out += `${b.data.description}\n\n`;
    const analysis: string[] = b.data.summary?.analysis ?? [];
    analysis.forEach((para: string) => { out += `${para}\n\n`; });
    const concepts: Array<{ name: string; explanation: string }> =
      b.data.summary?.keyConcepts ?? [];
    if (concepts.length) {
      out += `Key concepts:\n`;
      concepts.forEach((kc) => { out += `- ${kc.name}: ${kc.explanation}\n`; });
      out += `\n`;
    }
    if (b.body) out += `${b.body}\n\n`;
    out += `---\n\n`;
  });

  // Original research — the full ranked table.
  // The report page renders all of these, but an assistant asked "how did
  // <company> score" has to fetch and parse a 1.3MB page to find one row.
  // Here it is as flat text in the file assistants are pointed at, with the
  // anchor to cite. Assistants are already this site's largest referrer, so
  // this is the channel where the completeness of the list is worth most.
  out += `## Original research: YC startup website audit (${YC_STUDY.ranAt})\n\n`;
  out += `We fetched the homepage of ${YC_STUDY.audited} recent Y Combinator companies once on ${YC_STUDY.ranAt} `;
  out += `and scored each 0-100 across 35 technical checks in seven weighted dimensions. `;
  out += `Mean ${YC_STUDY.mean}, median ${YC_STUDY.median}, 10th-90th percentile ${YC_STUDY.p10}-${YC_STUDY.p90}. `;
  out += `${YC_STUDY.unreachable} of ${YC_STUDY.attempted} did not respond and are excluded.\n\n`;
  out += `A score measures one page's technical fundamentals on one day. It is not a judgement of the `;
  out += `company, the product or the team, and several of the lowest-scoring sites belong to companies `;
  out += `doing extremely well.\n\n`;
  out += `Full report, method and per-check pass rates: ${SITE}/reports/startup-website-audit-2026\n`;
  out += `Cite an individual company at ${SITE}/reports/startup-website-audit-2026#<slug>\n\n`;
  out += `Rank | Company | Domain | Batch | Score | Anchor\n`;
  YC_STUDY.rows.forEach((r, i) => {
    out += `${i + 1} | ${r.name} | ${r.domain} | ${r.batch} | ${r.score} | #${r.slug}\n`;
  });
  out += `\n---\n\n`;

  return out;
}

// llms.txt is the index an assistant reads first — it decides what the model
// thinks the site contains. Generated rather than hand-written: the previous
// hand-maintained version went five months without an update, still advertised
// "87+ case studies" against an actual 121, and never mentioned topics,
// comparisons, SimulateIt drills, AI Decoded or CheckIt at all. Referrer data
// now puts assistants ahead of search as the site's largest source, so this
// file describing two-thirds of the site was a real cost.
export function buildLlmsIndex(now: Date = new Date()): string {
  const caseStudies = readAll(path.join(CONTENT, "case-studies"), now);
  const topics = readAll(path.join(CONTENT, "topics"), now);
  const comparisons = readAll(path.join(CONTENT, "comparisons"), now);
  const aiDecoded = readAll(path.join(CONTENT, "ai-decoded"), now);
  const drills = readAll(path.join(CONTENT, "drills"), now);
  const books = readAll(path.join(CONTENT, "books"), now);
  const answers = readAll(path.join(CONTENT, "answers"), now);

  let out = `# northstar\n\n`;
  out += `> A free, opinionated product management library: ${caseStudies.length} long-form case studies, `;
  out += `${books.length} full book reviews, ${comparisons.length} head-to-head company comparisons, `;
  out += `${topics.length} curated topic collections, ${aiDecoded.length} AI commentary pieces, `;
  out += `${drills.length} interactive decision drills, and ${answers.length} direct answers to common `;
  out += `product questions. No paywall, no gated downloads.\n\n`;
  out += `Every case study is a multi-paragraph deep dive written as an article, not a bullet summary. `;
  out += `Content is original and editorially opinionated — reviews say when a canonical book is overrated, `;
  out += `and comparisons end with a verdict rather than a both-sides shrug.\n\n`;

  out += `## Full content\n\n`;
  out += `- [Complete knowledge base](${SITE}/llms-full.txt): Every case study, comparison, topic and AI article as raw text in one file.\n\n`;

  out += `## Sections\n\n`;
  out += `- [Case studies](${SITE}/#casestudies) (${caseStudies.length}): Long-form deep dives on real product decisions at Apple, Airbnb, Spotify, Figma, Zerodha, CRED, Razorpay and others. Each runs through company context, the core problem, the decision, execution, results, ripple effects and lessons. URLs are \`${SITE}/case-study/{slug}\`; the full list is in the sitemap.\n`;
  out += `- [Answers](${SITE}/answers) (${answers.length}): Direct answers to specific product questions — each opens with a self-contained definition, then covers where the idea breaks down, and links to case studies that show it in practice.\n`;
  out += `- [Topics](${SITE}/topics) (${topics.length}): Case studies grouped by the pattern they demonstrate, for readers who want the shape of a decision across several companies rather than one.\n`;
  out += `- [Compare](${SITE}/compare) (${comparisons.length}): Two companies in the same market that made opposite bets, broken down side by side on model, positioning, execution and outcome, each ending in a verdict.\n`;
  out += `- [Books](${SITE}/book) (${books.length}): Original long-form reviews of product, startup and management books — argument, key concepts, who it is genuinely for, and what to pair it with.\n`;
  out += `- [AI Decoded](${SITE}/ai-decoded) (${aiDecoded.length}): Editorial commentary on AI launches and tools, and what PMs, marketers and founders should do about them.\n`;
  out += `- [SimulateIt](${SITE}/simulate) (${drills.length}): Interactive drills that put the reader inside a real historical product decision before revealing what the company actually chose.\n`;
  out += `- [Original research](${SITE}/reports/startup-website-audit-2026): We audited ${YC_STUDY.audited} recent Y Combinator startup homepages against 35 technical checks on ${YC_STUDY.ranAt}. Median score ${YC_STUDY.median}/100. Every company named and ranked, plus per-check pass rates, score distribution and full method — original data available nowhere else.\n`;
  out += `- [CheckIt](${SITE}/checkit): A free tool that audits any public URL across SEO, performance, accessibility and trust, and returns a scored report.\n`;
  out += `- [India](${SITE}/india): Case studies on Indian companies — Zerodha, CRED, Razorpay, Zomato, Flipkart and others.\n\n`;

  if (topics.length) {
    out += `## Topic collections\n\n`;
    topics.forEach((t) => {
      out += `- [${t.data.title}](${SITE}/topics/${t.data.slug ?? t.slug}): ${t.data.metaDescription ?? t.data.eyebrow ?? ""}\n`;
    });
    out += `\n`;
  }

  if (answers.length) {
    out += `## Answers\n\n`;
    answers.forEach((a) => {
      out += `- [${a.data.question}](${SITE}/answers/${a.data.slug ?? a.slug}): ${a.data.shortAnswer ?? ""}\n`;
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

  return out;
}
