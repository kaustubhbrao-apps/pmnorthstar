import type { Metadata } from "next";
import { SidebarShell } from "@/components/SidebarShell";
import { SubscribeForm } from "@/components/SubscribeForm";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { caseStudies, getIndianCaseStudies } from "@/data/caseStudies";
import { getCaseStudySlug } from "@/data/caseStudySlugs";
import { publishedComparisons } from "@/data/comparisons";
import { EdCard, Tile, Cap, SectionHead, VsBox, PW_ID, clip, tintAt, splitVs } from "@/components/Editorial";
import { photoFor } from "@/data/cardImages";

// 6h. Scheduled content normally goes live via /api/cron/revalidate just
// after UTC midnight, so this window is a fallback, not the mechanism.
export const revalidate = 21600;

export const metadata: Metadata = {
  description:
    "A curated library for Indian product managers, founders, and operators. Long-form Indian case studies, head-to-heads, and the context behind building for Bharat — in the same depth as the global ones.",
};

// Head-to-heads where both companies are Indian (or India is the battleground).
const INDIA_COMPARE_SLUGS = [
  "zepto-vs-dunzo",
  "swiggy-vs-zomato",
  "phonepe-vs-paytm",
  "nykaa-vs-amazon",
  "uber-vs-ola",
  "meesho-vs-walmart",
  "cred-vs-monzo",
  "razorpay-vs-stripe",
  "doordash-vs-swiggy",
  "boat-vs-sony",
];

// Globally-relevant studies worth reading even though they aren't Indian.
const globalRelevantIds = ["cs-2", "cs-5", "cs-7", "cs-27", "cs-30", "cs-3"];

// Still-to-come Indian deep dives (teasers).
const upcomingIndia = [
  { company: "Meesho", angle: "The rural commerce playbook" },
  { company: "Cult.fit", angle: "Gym chain to subscription empire" },
  { company: "Groww vs Zerodha", angle: "Two paths to fintech leadership" },
  { company: "Ola Electric", angle: "The scooter bet that split the company" },
  { company: "Jio", angle: "How free data rewired a billion users" },
  { company: "ShareChat", angle: "Vernacular-first social at scale" },
];

// What's genuinely different about building for the India market.
const indiaContext = [
  {
    title: "Bharat, not just India",
    body: "The next 500 million users are low-income, mobile-first, and often new to the internet. Products built for metro English-speakers quietly exclude them. The winners design for data costs, intermittent connectivity, and first-time digital behaviour.",
  },
  {
    title: "UPI changed the rails",
    body: "India's real-time payments layer made money movement free and instant, which rewrote fintech, commerce, and even social. A whole generation of products assume UPI the way the West assumes credit cards — and monetise completely differently because of it.",
  },
  {
    title: "Brutal price sensitivity",
    body: "Willingness-to-pay is a fraction of Western benchmarks, so subscription and SaaS playbooks rarely transfer unchanged. Indian products lean on volume, ads, lending, and freemium — and obsess over cost-to-serve in a way most global case studies never discuss.",
  },
  {
    title: "Vernacular and voice",
    body: "Over 90% of Indians don't use English as their first language. The products that reach Bharat go vernacular-first and voice-first, not as a feature but as the core interface — a design constraint with almost no parallel in the US playbook.",
  },
  {
    title: "Quick commerce & D2C",
    body: "10-minute delivery and direct-to-consumer brands scaled faster in India than almost anywhere — on the back of dense cities, cheap labour, and UPI checkout. The unit-economics fights (Zepto, Swiggy Instamart, boAt, Lenskart) are a live masterclass.",
  },
  {
    title: "Distribution is everything",
    body: "With low per-user revenue, cheap, viral, or bundled distribution decides who wins. Jio gave away data; PhonePe rode UPI; Meesho rode WhatsApp resellers. The product is often good enough — the distribution wedge is the real strategy.",
  },
];

export default function IndiaPage() {
  // Newest first so the lead tile is the latest Indian story.
  const indianStudies = [...getIndianCaseStudies()].sort(
    (a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || "") || b.year - a.year
  );

  const indiaComparisons = publishedComparisons()
    .filter((c) => INDIA_COMPARE_SLUGS.includes(c.slug))
    .sort((a, b) => INDIA_COMPARE_SLUGS.indexOf(a.slug) - INDIA_COMPARE_SLUGS.indexOf(b.slug));

  const globalRelevant = caseStudies.filter((c) => globalRelevantIds.includes(c.id));

  const publishedCompanies = new Set(indianStudies.map((c) => c.company.toLowerCase()));
  const stillUpcoming = upcomingIndia.filter(
    (e) =>
      !publishedCompanies.has(e.company.toLowerCase()) &&
      !e.company.split(" vs ").every((c) => publishedCompanies.has(c.toLowerCase()))
  );

  return (
    <SidebarShell activeNav="india">
      <div className="site-inner pb-16">
        <Breadcrumbs className="pt-6" items={[{ label: "northstar", href: "/" }, { label: "India" }]} />

        <SectionHead as="h1" title="India" count={indianStudies.length} more="The product stories shaping Bharat →" />
        <p className="shead-sub">
          Fintech, quick-commerce, edtech and D2C — the teardowns of the companies building for the next 500 million
          users. Written for our market: UPI, Bharat, brutal price sensitivity, and the distribution wars that decide
          who wins here.
        </p>

        {/* Indian case studies — lead tile in brand red, then the ink/blush/mint rhythm */}
        <div className="grid3">
          {indianStudies.map((s, i) => {
            const lead = i === 0;
            return (
              <EdCard key={s.id} href={`/case-study/${getCaseStudySlug(s.id)}`}>
                <Tile
                  tint={lead ? "feature" : tintAt(i - 1)}
                  minH={360}
                  chip={lead ? (s.id === PW_ID ? "New · IPO" : "New") : String(s.year)}
                  title={s.title}
                  size={lead ? "2xl" : "l"}
                  img={photoFor([...s.tags, s.title, s.category, "india", s.company], s.id)}
                  brand={s.company}
                />
                <Cap k={`${s.category} · ${s.company}`} title={clip(s.outcome, 80)} />
              </EdCard>
            );
          })}
        </div>

        {indiaComparisons.length > 0 && (
          <>
            <SectionHead title="India · Head-to-Head" more="All head-to-heads →" moreHref="/compare" />
            <div className="heads">
              {indiaComparisons.map((c) => {
                const { a, b } = splitVs(c.title, c.companyA, c.companyB);
                return <VsBox key={c.slug} a={a} b={b} m={c.eyebrow} href={`/compare/${c.slug}`} />;
              })}
            </div>
          </>
        )}

        <SectionHead title="Why India is different" />
        <p className="shead-sub">
          The frameworks transfer. The assumptions don&apos;t. These are the forces that quietly reshape every product
          decision when your market is India — and the lenses to read the case studies through.
        </p>
        <div className="heads">
          {indiaContext.map((c) => (
            <div key={c.title} className="vsbox" style={{ cursor: "default" }}>
              <div className="vs" style={{ fontSize: "1.2rem" }}>
                {c.title}
              </div>
              <div className="m">{c.body}</div>
            </div>
          ))}
        </div>

        {globalRelevant.length > 0 && (
          <>
            <SectionHead title="Global, but essential" />
            <p className="shead-sub">Read these first — not Indian, but the playbooks every Indian builder ends up using.</p>
            <div className="grid3">
              {globalRelevant.map((s, i) => (
                <EdCard key={s.id} href={`/case-study/${getCaseStudySlug(s.id)}`}>
                  <Tile
                    tint={tintAt(i)}
                    minH={300}
                    chip={String(s.year)}
                    title={s.title}
                    size="m"
                    img={photoFor([...s.tags, s.title, s.category, s.company], s.id)}
                    brand={s.company}
                  />
                  <Cap k={`${s.category} · ${s.company}`} title={clip(s.outcome, 80)} />
                </EdCard>
              ))}
            </div>
          </>
        )}

        {stillUpcoming.length > 0 && (
          <>
            <SectionHead title="Coming next" />
            <div className="heads">
              {stillUpcoming.map((e) => (
                <div key={e.company} className="vsbox" style={{ cursor: "default" }}>
                  <div className="vs" style={{ fontSize: "1.2rem" }}>
                    {e.company}
                  </div>
                  <div className="m">{e.angle}</div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="max-w-2xl mt-14">
          <SubscribeForm
            variant="card"
            surface="india"
            headline="New Indian case studies, in your inbox."
            subhead="One product deep dive every few days. Free. No paywall."
          />
        </div>
      </div>
      <Footer />
    </SidebarShell>
  );
}
