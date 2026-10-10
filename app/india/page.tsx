import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SidebarShell } from "@/components/SidebarShell";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SubscribeForm } from "@/components/SubscribeForm";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { caseStudies, getIndianCaseStudies } from "@/data/caseStudies";
import { publishedComparisons } from "@/data/comparisons";

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
    color: "#FF6B35",
  },
  {
    title: "UPI changed the rails",
    body: "India's real-time payments layer made money movement free and instant, which rewrote fintech, commerce, and even social. A whole generation of products assume UPI the way the West assumes credit cards — and monetise completely differently because of it.",
    color: "#2563EB",
  },
  {
    title: "Brutal price sensitivity",
    body: "Willingness-to-pay is a fraction of Western benchmarks, so subscription and SaaS playbooks rarely transfer unchanged. Indian products lean on volume, ads, lending, and freemium — and obsess over cost-to-serve in a way most global case studies never discuss.",
    color: "#DB2777",
  },
  {
    title: "Vernacular and voice",
    body: "Over 90% of Indians don't use English as their first language. The products that reach Bharat go vernacular-first and voice-first, not as a feature but as the core interface — a design constraint with almost no parallel in the US playbook.",
    color: "#9333EA",
  },
  {
    title: "Quick commerce & D2C",
    body: "10-minute delivery and direct-to-consumer brands scaled faster in India than almost anywhere — on the back of dense cities, cheap labour, and UPI checkout. The unit-economics fights (Zepto, Swiggy Instamart, boAt, Lenskart) are a live masterclass.",
    color: "#16A34A",
  },
  {
    title: "Distribution is everything",
    body: "With low per-user revenue, cheap, viral, or bundled distribution decides who wins. Jio gave away data; PhonePe rode UPI; Meesho rode WhatsApp resellers. The product is often good enough — the distribution wedge is the real strategy.",
    color: "#0891B2",
  },
];

export default function IndiaPage() {
  const indianStudies = getIndianCaseStudies();

  const indiaComparisons = publishedComparisons()
    .filter((c) => INDIA_COMPARE_SLUGS.includes(c.slug))
    .sort(
      (a, b) =>
        INDIA_COMPARE_SLUGS.indexOf(a.slug) - INDIA_COMPARE_SLUGS.indexOf(b.slug)
    );

  const globalRelevant = caseStudies.filter((c) =>
    globalRelevantIds.includes(c.id)
  );

  const publishedCompanies = new Set(
    indianStudies.map((c) => c.company.toLowerCase())
  );
  const stillUpcoming = upcomingIndia.filter(
    (e) =>
      !publishedCompanies.has(e.company.toLowerCase()) &&
      !e.company
        .split(" vs ")
        .every((c) => publishedCompanies.has(c.toLowerCase()))
  );

  // Homepage-style "explore" tiles, scoped to India.
  const tiles: Array<{
    label: string;
    value: string;
    hook: string;
    color: string;
    href: string;
  }> = [
    { label: "Case Studies", value: String(indianStudies.length), hook: "Indian company deep dives", color: "#FF6B35", href: "#india-studies" },
    { label: "Head-to-heads", value: String(indiaComparisons.length), hook: "Zepto vs Dunzo, Swiggy vs Zomato…", color: "#7C3AED", href: "#india-compare" },
    { label: "Indian Fintech", value: "", hook: "UPI, lending & the payments wars", color: "#2563EB", href: "/topics/indian-fintech" },
    { label: "D2C Brands", value: "", hook: "boAt, Lenskart, Nykaa & more", color: "#DB2777", href: "/topics/d2c-brands" },
    { label: "Bootstrapped", value: "", hook: "Zerodha & co — unicorns, no VC", color: "#16A34A", href: "/topics/bootstrapped-companies" },
    { label: "SimulateIt", value: "", hook: "Decision drills on real Indian calls", color: "#0891B2", href: "/simulate" },
  ];

  return (
    <SidebarShell
      activeNav="india"
      backHref="/"
      backLabelDesktop="Back to the library"
      backLabelMobile="Back"
    >
      <div className="flex flex-col min-w-0">
        {/* Hero */}
        <section
          className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 flex justify-center"
          style={{ borderBottom: "1.5px solid var(--card-border)" }}
        >
          <div className="w-full max-w-5xl">
            <Breadcrumbs
              className="mb-6"
              items={[{ label: "northstar", href: "/" }, { label: "India" }]}
            />
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-5 h-px" style={{ background: "#FF6B35" }} />
              <span
                className="text-sm font-mono uppercase"
                style={{ color: "#FF6B35", letterSpacing: "0.16em" }}
              >
                {indianStudies.length} studies · {indiaComparisons.length} head-to-heads · for builders in India
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.04em" }}
            >
              Product management,
              <br />
              for the India context.
            </h1>
            <p
              className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl"
              style={{ color: "var(--text-muted)" }}
            >
              A curated library for Indian product managers, founders, and
              operators. The case studies you read elsewhere are written for the
              US market — these are written for ours: UPI, Bharat, brutal price
              sensitivity, and the distribution wars that actually decide who
              wins here.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 mt-8">
              <a href="#india-studies" className="btn-primary group">
                Browse the library
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Explore India — homepage-style tile grid */}
        <section className="px-4 sm:px-8 lg:px-12 py-10 sm:py-12 flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="mb-5">
              <p className="eyebrow mb-1" style={{ color: "#FF6B35" }}>
                Explore India
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Every India surface, one click away.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {tiles.map(({ label, value, hook, color, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-left p-4 rounded-2xl transition-all group hover:opacity-95 hover:-translate-y-0.5"
                  style={{ background: color }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-sm font-bold uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {label}
                    </span>
                    <ArrowUpRight
                      size={12}
                      strokeWidth={2}
                      style={{ color: "rgba(255,255,255,0.8)" }}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  {value && (
                    <div
                      className="font-display text-2xl font-bold mb-1"
                      style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
                    >
                      {value}
                    </div>
                  )}
                  <p
                    className="text-xs leading-snug"
                    style={{ color: "rgba(255,255,255,0.78)" }}
                  >
                    {hook}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What's different about building for India — context material */}
        <section
          className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 flex justify-center"
          style={{ borderTop: "1.5px solid var(--card-border)", borderBottom: "1.5px solid var(--card-border)" }}
        >
          <div className="w-full max-w-5xl">
            <p className="eyebrow mb-3" style={{ color: "#FF6B35" }}>
              The India context
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              Why building for India is a different game.
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-3xl"
              style={{ color: "var(--text-muted)" }}
            >
              The frameworks transfer. The assumptions don&apos;t. These are the
              forces that quietly reshape every product decision when your
              market is India — and the lenses to read the case studies below
              through.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {indiaContext.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl p-5 sm:p-6"
                  style={{
                    background: "var(--card-bg)",
                    border: "1.5px solid var(--card-border)",
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span
                      className="w-4 h-1 rounded-full"
                      style={{ background: c.color }}
                    />
                    <h3
                      className="font-display text-lg font-semibold"
                      style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
                    >
                      {c.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Indian case studies — the library */}
        <section
          id="india-studies"
          className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 scroll-mt-4 flex justify-center"
          style={{ borderBottom: "1.5px solid var(--card-border)" }}
        >
          <div className="w-full max-w-5xl">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-5 h-px" style={{ background: "#FF6B35" }} />
              <span
                className="text-sm font-mono uppercase"
                style={{ color: "#FF6B35", letterSpacing: "0.16em" }}
              >
                Live now
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              {indianStudies.length} Indian case studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {indianStudies.map((study, idx) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  index={idx}
                  hideCategory={false}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Indian head-to-heads */}
        {indiaComparisons.length > 0 && (
          <section
            id="india-compare"
            className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 scroll-mt-4 flex justify-center"
            style={{ borderBottom: "1.5px solid var(--card-border)" }}
          >
            <div className="w-full max-w-5xl">
              <p className="eyebrow mb-3" style={{ color: "#7C3AED" }}>
                Head-to-heads
              </p>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
              >
                India&apos;s biggest product rivalries
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {indiaComparisons.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/compare/${c.slug}`}
                    className="rounded-2xl p-5 group transition-transform hover:-translate-y-0.5"
                    style={{
                      background: "var(--card-bg)",
                      border: "1.5px solid var(--card-border)",
                    }}
                  >
                    <span
                      className="inline-block text-xs font-bold uppercase px-2 py-0.5 rounded-md mb-2"
                      style={{ background: c.accentColor, color: "#ffffff", letterSpacing: "0.1em" }}
                    >
                      {c.title.split(" — ")[0]}
                    </span>
                    <p
                      className="text-sm leading-snug line-clamp-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {c.eyebrow}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Globally relevant, read first */}
        {globalRelevant.length > 0 && (
          <section
            className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 flex justify-center"
            style={{ borderBottom: "1.5px solid var(--card-border)" }}
          >
            <div className="w-full max-w-5xl">
              <p className="eyebrow mb-3" style={{ color: "#9B8FFF" }}>
                Read these first
              </p>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
              >
                Global, but essential for India
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {globalRelevant.map((study, idx) => (
                  <CaseStudyCard
                    key={study.id}
                    study={study}
                    index={idx}
                    hideCategory={false}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Upcoming */}
        {stillUpcoming.length > 0 && (
          <section
            className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 flex justify-center"
            style={{ borderBottom: "1.5px solid var(--card-border)" }}
          >
            <div className="w-full max-w-5xl">
              <p className="eyebrow mb-3" style={{ color: "var(--text-muted)" }}>
                In the pipeline
              </p>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
              >
                Coming next
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stillUpcoming.map((e) => (
                  <div
                    key={e.company}
                    className="rounded-xl px-5 py-4"
                    style={{
                      background: "var(--card-bg)",
                      border: "1.5px solid var(--card-border)",
                    }}
                  >
                    <p
                      className="font-display text-base font-semibold mb-0.5"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {e.company}
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {e.angle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto">
            <SubscribeForm
              variant="card"
              surface="india"
              headline="New Indian case studies, in your inbox."
              subhead="One product deep dive every few days. Free. No paywall."
            />
          </div>
        </section>

        <Footer />
      </div>
    </SidebarShell>
  );
}
