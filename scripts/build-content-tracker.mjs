import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = "/Users/Amber_User/Downloads/northstar/content";

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

console.log("# northstar Content Tracker\n");
console.log("Single source of truth for what's been written and what's planned.");
console.log("Read this before drafting anything new to avoid duplicates.\n");
console.log("**Last regenerated:** 2026-05-28 from `content/`. Run `npx tsx scripts/build-content-tracker.ts` to refresh.\n");
console.log("---\n");

console.log("## Case Studies (76)\n");
console.log("76 hand-written case studies. Indian region tagged separately at the bottom.\n");
console.log("| # | Slug | Company | Category | Region |");
console.log("|---|---|---|---|---|");
for (const c of cases) {
  const region = c.data.region || "";
  console.log(`| ${c.data.id} | \`${c.slug}\` | ${c.data.company} | ${c.data.category} | ${region} |`);
}
console.log("");

console.log("## AI Decoded Articles (16)\n");
console.log("Topical editorial on AI / product strategy. Sorted newest first.\n");
console.log("| Slug | Title | Published |");
console.log("|---|---|---|");
for (const a of aiDecoded) {
  console.log(`| \`${a.slug}\` | ${a.data.title} | ${(a.data.publishedAt||"").slice(0,10)} |`);
}
console.log("");

console.log("## SimulateIt Drills (21)\n");
console.log("Decision-practice drills. Mondays = historical, Thursdays = current. Sorted by publishedAt.\n");
console.log("| Slug | Type | Category | Publishes (IST) |");
console.log("|---|---|---|---|");
for (const d of drills) {
  const pub = d.data.publishedAt || "";
  console.log(`| \`${d.slug}\` | ${d.data.type} | ${d.data.category} | ${pub.replace("T", " ").slice(0,16)} |`);
}
console.log("");

console.log(`## Topics — category hubs (${topics.length})\n`);
console.log("Category-level pages that aggregate related case studies. Each topic is an SEO-anchored hub.\n");
console.log("| Slug | Title | Eyebrow | Linked Case Studies |");
console.log("|---|---|---|---|");
for (const t of topics) {
  const linked = (t.data.caseStudyIds || []).length;
  console.log(`| \`${t.slug}\` | ${t.data.title || ""} | ${t.data.eyebrow || ""} | ${linked} |`);
}
console.log("");

console.log(`## Comparisons (${comparisons.length})\n`);
console.log("X-vs-Y SEO pages. Each captures a head-to-head search query and ends in a verdict.\n");
console.log("| Slug | Title | Verdict snippet |");
console.log("|---|---|---|");
for (const c of comparisons) {
  const title = (c.data.title || "").replace(/\|/g, "\\|");
  const verdict = (c.data.verdict || "").slice(0, 100).replace(/\|/g, "\\|").replace(/\n/g, " ");
  const truncated = (c.data.verdict || "").length > 100 ? "..." : "";
  console.log(`| \`${c.slug}\` | ${title} | ${verdict}${truncated} |`);
}
console.log("");

console.log("---\n");
console.log("## What's NOT yet covered — open queue\n");
console.log("Topics worth writing (case study, drill, or AI Decoded — sometimes more than one).\n");
console.log("### India case studies still missing");
console.log("- Lenskart's omnichannel bet");
console.log("- Nykaa's IPO journey (cs-already-exists? check)");
console.log("- Swiggy Instamart pivot vs Zomato/Blinkit");
console.log("- PayU vs Razorpay early-stage rivalry");
console.log("- OYO's pandemic crash");
console.log("- BharatPe founder fallout");
console.log("");
console.log("### AI Decoded — open topics");
console.log("- Anthropic vs OpenAI enterprise revenue split (Q3 update)");
console.log("- The Cursor / Windsurf / Cognition consolidation watch");
console.log("- Apple's WWDC 2026 AI moves (when announced)");
console.log("- The agentic browser wars Q3 retro");
console.log("- AI hiring assessments — actually predictive or theatre?");
console.log("");
console.log("### SimulateIt drills — beyond Aug 10");
console.log("- Razorpay merchant-pricing decision (Mon Aug 17)");
console.log("- AI search referral traffic implosion (Thu Aug 20)");
console.log("- Lenskart's online-only debate (Mon Aug 24)");
console.log("- ChatGPT-killer launches: stay defensive or pivot? (Thu Aug 27)");
console.log("- Boat's IPO-or-stay-private call (Mon Aug 31)");
console.log("- OpenAI ships consumer device — what your AI app does (Thu Sep 3)");
console.log("- Zerodha's competitor-shipped-leverage moment (Mon Sep 7)");
console.log("- Series B environment — bridge or down round? (Thu Sep 10)");
console.log("");
console.log("### Topics (category hubs) — open queue");
console.log("- D2C India playbook (Boat, Mamaearth, Sugar Cosmetics, Wakefit)");
console.log("- AI-native startups (Cursor, Perplexity, Anthropic, OpenAI)");
console.log("- Marketplaces that worked vs. died (Airbnb, Quibi, Etsy, eBay)");
console.log("- Pivots that saved companies (Slack, Instagram, Notion, YouTube)");
console.log("- Pricing as strategy (Stripe, Linear, Notion, Figma)");
console.log("- Failed launches & what they teach (Quibi, Google Glass, Theranos, Clubhouse)");
console.log("");
console.log("### Comparisons — open queue");
console.log("- Cursor vs Windsurf (AI IDE wars)");
console.log("- Anthropic vs OpenAI (enterprise AI)");
console.log("- Notion vs Coda (workspace tools)");
console.log("- Stripe vs Adyen (payments infra)");
console.log("- Swiggy vs Zomato (Indian food delivery)");
console.log("- Lenskart vs Warby Parker (eyewear D2C)");
console.log("- Figma vs Adobe XD (design tools)");
console.log("- Substack vs Beehiiv (creator newsletters)");
console.log("");
console.log("---\n");
console.log("## Topics deliberately skipped (don't suggest these)\n");
console.log("- Pure crypto / web3 case studies — not the audience");
console.log("- Frontier AI lab \"who's winning the race\" framing — too speculative");
console.log("- Specific stock-price commentary — out of scope");
console.log("- Founder personal-life / drama posts — not the brand");
console.log("- Anything requiring claims about private financials we can't verify");
console.log("");
console.log("---\n");
console.log("## Cross-reference rules\n");
console.log("- Every SimulateIt drill of type \"historical\" links to its `caseStudySlug` in frontmatter. Check that slug exists in `content/case-studies/` before authoring.");
console.log("- Every SimulateIt drill of type \"current\" optionally links to an `aiDecodedSlug` if a relevant article exists.");
console.log("- Case studies don't link back to drills automatically — that's a v4.1 nice-to-have.");
console.log("- AI Decoded articles can reference case studies via inline markdown links.");
console.log("");
console.log("## How agents use this file\n");
console.log("- **Scout (Gemini CLI):** Read full tracker before proposing a new topic. Cross-check against \"open queue\" first, then \"deliberately skipped\". If neither, suggest with rationale.");
console.log("- **Writer (Codex):** Read tracker to confirm slug doesn't collide. Use existing slugs only for legitimate updates.");
console.log("- **Engineer (Cursor + Claude):** Regenerate this file by running the tracker script after any new content lands. Push immediately so other agents see it on next pull.");
