import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Was an absolute path to one machine's checkout, which meant the script
// only ran for whoever wrote it.
const ROOT = path.join(process.cwd(), "content");

// The script used to print to stdout, so "regenerate" silently did nothing
// unless you remembered to redirect. It writes the file now.
const OUT = path.join(process.cwd(), "docs", "content-tracker.md");
const lines = [];
const log = (s = "") => lines.push(s);

function readAll(dir) {
  return fs.readdirSync(path.join(ROOT, dir))
    .filter(f => f.endsWith(".md"))
    .map(f => {
      const raw = fs.readFileSync(path.join(ROOT, dir, f), "utf8");
      const { data } = matter(raw);
      return { slug: f.replace(/\.md$/, ""), data };
    });
}

const cases = readAll("case-studies").sort((a,b) => {
  const an = parseInt((a.data.id||"cs-0").split("-")[1] || "0", 10);
  const bn = parseInt((b.data.id||"cs-0").split("-")[1] || "0", 10);
  return an - bn;
});
const aiDecoded = readAll("ai-decoded").sort((a,b) =>
  new Date(b.data.publishedAt||0) - new Date(a.data.publishedAt||0));
const drills = readAll("drills").sort((a,b) =>
  new Date(a.data.publishedAt||0) - new Date(b.data.publishedAt||0));
const topics = readAll("topics").sort((a,b) =>
  (a.slug||"").localeCompare(b.slug||""));
const comparisons = readAll("comparisons").sort((a,b) =>
  (a.slug||"").localeCompare(b.slug||""));
// Neither of these was in the tracker, so the file that exists to prevent
// duplicate work was blind to 72 answers and 30 book reviews.
const books = readAll("books").sort((a,b) => (a.slug||"").localeCompare(b.slug||""));
const answers = readAll("answers").sort((a,b) => (a.slug||"").localeCompare(b.slug||""));

log("# northstar Content Tracker\n");
log("Single source of truth for what's been written and what's planned.");
log("Read this before drafting anything new to avoid duplicates.\n");
log(`**Last regenerated:** ${new Date().toISOString().slice(0, 10)} from \`content/\`. Run \`node scripts/build-content-tracker.mjs\` to refresh.\n`);
log("---\n");

log(`## Case Studies (${cases.length})\n`);
log(`${cases.length} hand-written case studies. Indian region tagged separately at the bottom.\n`);
log("| # | Slug | Company | Category | Region |");
log("|---|---|---|---|---|");
for (const c of cases) {
  const region = c.data.region || "";
  log(`| ${c.data.id} | \`${c.slug}\` | ${c.data.company} | ${c.data.category} | ${region} |`);
}
log("");

log(`## AI Decoded Articles (${aiDecoded.length})\n`);
log("Topical editorial on AI / product strategy. Sorted newest first.\n");
log("| Slug | Title | Published |");
log("|---|---|---|");
for (const a of aiDecoded) {
  log(`| \`${a.slug}\` | ${a.data.title} | ${(a.data.publishedAt||"").slice(0,10)} |`);
}
log("");

log(`## SimulateIt Drills (${drills.length})\n`);
log("Decision-practice drills. Mondays = historical, Thursdays = current. Sorted by publishedAt.\n");
log("| Slug | Type | Category | Publishes (IST) |");
log("|---|---|---|---|");
for (const d of drills) {
  const pub = d.data.publishedAt || "";
  log(`| \`${d.slug}\` | ${d.data.type} | ${d.data.category} | ${pub.replace("T", " ").slice(0,16)} |`);
}
log("");

log(`## Topics — category hubs (${topics.length})\n`);
log("Category-level pages that aggregate related case studies. Each topic is an SEO-anchored hub.\n");
log("| Slug | Title | Eyebrow | Linked Case Studies |");
log("|---|---|---|---|");
for (const t of topics) {
  const linked = (t.data.caseStudyIds || []).length;
  log(`| \`${t.slug}\` | ${t.data.title || ""} | ${t.data.eyebrow || ""} | ${linked} |`);
}
log("");

log(`## Comparisons (${comparisons.length})\n`);
log("X-vs-Y SEO pages. Each captures a head-to-head search query and ends in a verdict.\n");
log("| Slug | Title | Verdict snippet |");
log("|---|---|---|");
for (const c of comparisons) {
  const title = (c.data.title || "").replace(/\|/g, "\\|");
  const verdict = (c.data.verdict || "").slice(0, 100).replace(/\|/g, "\\|").replace(/\n/g, " ");
  const truncated = (c.data.verdict || "").length > 100 ? "..." : "";
  log(`| \`${c.slug}\` | ${title} | ${verdict}${truncated} |`);
}
log("");

log(`## Answers (${answers.length})\n`);
log("Question-shaped reference pages. Each opens with a self-contained short answer, then where the idea breaks down.\n");
log("| Slug | Question | Category |");
log("|---|---|---|");
for (const a of answers) {
  const q = (a.data.question || "").replace(/\|/g, "\\|");
  log(`| \`${a.slug}\` | ${q} | ${a.data.category || ""} |`);
}
log("");

log(`## Book reviews (${books.length})\n`);
log("Original long-form reviews. Argument, key concepts, who it is for, what to pair it with.\n");
log("| Slug | Title | Category |");
log("|---|---|---|");
for (const b of books) {
  const t = (b.data.title || "").replace(/\|/g, "\\|");
  log(`| \`${b.slug}\` | ${t} | ${b.data.category || ""} |`);
}
log("");

log("---\n");
log("## What's NOT yet covered — open queue\n");
log("Topics worth writing (case study, drill, or AI Decoded — sometimes more than one).\n");
log("### India case studies still missing");
log("- Lenskart's omnichannel bet");
log("- Nykaa's IPO journey (cs-already-exists? check)");
log("- Swiggy Instamart pivot vs Zomato/Blinkit");
log("- PayU vs Razorpay early-stage rivalry");
log("- OYO's pandemic crash");
log("- BharatPe founder fallout");
log("");
log("### AI Decoded — open topics");
log("- Anthropic vs OpenAI enterprise revenue split (Q3 update)");
log("- The Cursor / Windsurf / Cognition consolidation watch");
log("- Apple's WWDC 2026 AI moves (when announced)");
log("- The agentic browser wars Q3 retro");
log("- AI hiring assessments — actually predictive or theatre?");
log("");
log("### SimulateIt drills — beyond Aug 10");
log("- Razorpay merchant-pricing decision (Mon Aug 17)");
log("- AI search referral traffic implosion (Thu Aug 20)");
log("- Lenskart's online-only debate (Mon Aug 24)");
log("- ChatGPT-killer launches: stay defensive or pivot? (Thu Aug 27)");
log("- Boat's IPO-or-stay-private call (Mon Aug 31)");
log("- OpenAI ships consumer device — what your AI app does (Thu Sep 3)");
log("- Zerodha's competitor-shipped-leverage moment (Mon Sep 7)");
log("- Series B environment — bridge or down round? (Thu Sep 10)");
log("");
log("### Topics (category hubs) — open queue");
log("- D2C India playbook (Boat, Mamaearth, Sugar Cosmetics, Wakefit)");
log("- AI-native startups (Cursor, Perplexity, Anthropic, OpenAI)");
log("- Marketplaces that worked vs. died (Airbnb, Quibi, Etsy, eBay)");
log("- Pivots that saved companies (Slack, Instagram, Notion, YouTube)");
log("- Pricing as strategy (Stripe, Linear, Notion, Figma)");
log("- Failed launches & what they teach (Quibi, Google Glass, Theranos, Clubhouse)");
log("");
log("### Comparisons — open queue");
log("- Cursor vs Windsurf (AI IDE wars)");
log("- Anthropic vs OpenAI (enterprise AI)");
log("- Notion vs Coda (workspace tools)");
log("- Stripe vs Adyen (payments infra)");
log("- Swiggy vs Zomato (Indian food delivery)");
log("- Lenskart vs Warby Parker (eyewear D2C)");
log("- Figma vs Adobe XD (design tools)");
log("- Substack vs Beehiiv (creator newsletters)");
log("");
log("---\n");
log("## Topics deliberately skipped (don't suggest these)\n");
log("- Pure crypto / web3 case studies — not the audience");
log("- Frontier AI lab \"who's winning the race\" framing — too speculative");
log("- Specific stock-price commentary — out of scope");
log("- Founder personal-life / drama posts — not the brand");
log("- Anything requiring claims about private financials we can't verify");
log("");
log("---\n");
log("## Cross-reference rules\n");
log("- Every SimulateIt drill of type \"historical\" links to its `caseStudySlug` in frontmatter. Check that slug exists in `content/case-studies/` before authoring.");
log("- Every SimulateIt drill of type \"current\" optionally links to an `aiDecodedSlug` if a relevant article exists.");
log("- Case studies don't link back to drills automatically — that's a v4.1 nice-to-have.");
log("- AI Decoded articles can reference case studies via inline markdown links.");
log("");
log("## How agents use this file\n");
log("- **Scout (Gemini CLI):** Read full tracker before proposing a new topic. Cross-check against \"open queue\" first, then \"deliberately skipped\". If neither, suggest with rationale.");
log("- **Writer (Codex):** Read tracker to confirm slug doesn't collide. Use existing slugs only for legitimate updates.");
log("- **Engineer (Cursor + Claude):** Regenerate this file by running the tracker script after any new content lands. Push immediately so other agents see it on next pull.");

fs.writeFileSync(OUT, lines.join("\n") + "\n", "utf8");
console.log(`\u2713 docs/content-tracker.md written`);
console.log(`  ${cases.length} case studies, ${aiDecoded.length} AI Decoded, ${drills.length} drills,`);
console.log(`  ${topics.length} topics, ${comparisons.length} comparisons, ${answers.length} answers, ${books.length} books`);
