import type { Metadata } from "next";
import Link from "next/link";
import { publishedComparisons } from "@/data/comparisons";
import { SidebarShell } from "@/components/SidebarShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// 6h. Scheduled content normally goes live via /api/cron/revalidate just
// after UTC midnight, so this window is a fallback, not the mechanism.
export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Compare — Head-to-Head Product Breakdowns",
  description:
    "Every northstar comparison in one place. Two companies, the same market, opposite bets — broken down side by side on strategy, model, execution and outcome, with a verdict on which call held up.",
  alternates: { canonical: `${SITE_URL}/compare` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/compare`,
    title: "Compare — northstar",
    description:
      "Head-to-head product breakdowns: two companies, the same market, opposite bets.",
    siteName: "northstar",
  },
};

export default function CompareIndexPage() {
  const comparisons = publishedComparisons();

  return (
    <SidebarShell
      activeNav="explore"
      backHref="/"
      backLabelDesktop="Back to the library"
      shareTitle="Comparisons on northstar"
      shareText="Head-to-head product breakdowns: two companies, the same market, opposite bets."
    >
      <section
        className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 flex justify-center"
        style={{ borderBottom: "1.5px solid var(--card-border)" }}
      >
        <div className="w-full max-w-5xl">
          <Breadcrumbs
            className="mb-6"
            items={[{ label: "northstar", href: "/" }, { label: "Compare" }]}
          />
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px" style={{ background: "#26A69A" }} />
            <span
              className="text-sm font-mono uppercase"
              style={{ color: "#26A69A", letterSpacing: "0.16em" }}
            >
              {comparisons.length} head-to-heads
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.04] mb-6"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            Same market.
            <br />
            Opposite bets.
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            The most useful thing about a product decision is the alternative
            somebody else picked. Each comparison puts two companies that faced
            the same market against each other — model, positioning, execution,
            outcome — and ends with a verdict on which bet actually held up, and
            why.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 flex justify-center">
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="playlist-card surface flex flex-col p-5 sm:p-6 group"
              style={{ ["--accent-color" as never]: c.accentColor } as React.CSSProperties}
            >
              <p
                className="text-xs sm:text-sm font-medium uppercase tracking-wider mb-2"
                style={{ color: c.accentColor, opacity: 0.85 }}
              >
                {c.eyebrow}
              </p>
              <h2
                className="text-lg sm:text-xl font-semibold leading-snug mb-3 group-hover:underline"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
              >
                {c.title}
              </h2>
              <p
                className="text-sm leading-relaxed mb-4 flex-1"
                style={{ color: "var(--text-muted)" }}
              >
                {c.intro.length > 190 ? `${c.intro.slice(0, 190).trimEnd()}…` : c.intro}
              </p>
              <p className="text-sm font-medium" style={{ color: c.accentColor }}>
                Read the breakdown →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </SidebarShell>
  );
}
