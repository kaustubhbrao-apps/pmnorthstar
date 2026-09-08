import type { Metadata } from "next";
import Link from "next/link";
import { publishedTopics } from "@/data/topics";
import { publishedCaseStudies } from "@/data/caseStudies";
import { SidebarShell } from "@/components/SidebarShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// 6h. Scheduled content normally goes live via /api/cron/revalidate just
// after UTC midnight, so this window is a fallback, not the mechanism.
export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Topics — Curated Product Case Study Collections",
  description:
    "Curated collections of long-form product case studies grouped by theme — bootstrapped companies, comeback stories, D2C brands, pricing and growth loops.",
  alternates: { canonical: `${SITE_URL}/topics` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/topics`,
    title: "Topics — northstar",
    description:
      "Curated collections of long-form product case studies, grouped by theme.",
    siteName: "northstar",
  },
};

export default function TopicsIndexPage() {
  const topics = publishedTopics();
  const studies = publishedCaseStudies();

  // Only count case studies that are themselves published — a topic
  // referencing a scheduled study shouldn't advertise it yet.
  const liveCount = (ids: string[]) =>
    ids.filter((id) => studies.some((c) => c.id === id)).length;

  return (
    <SidebarShell
      activeNav="explore"
      backHref="/"
      backLabelDesktop="Back to the library"
      shareTitle="Topics on northstar"
      shareText="Curated collections of long-form product case studies, grouped by theme."
    >
      {/* CollectionPage + ItemList.
          These three hubs exist so the detail pages have a crawl entry
          point; without an ItemList an assistant still has to fetch the
          hub and parse markup to learn what it contains. The list is the
          page's whole substance, so it belongs in the structured data. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Topics",
            url: `${SITE_URL}/topics`,
            description: "Case studies grouped by the pattern they demonstrate.",
            isPartOf: { "@type": "WebSite", name: "northstar", url: SITE_URL },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: topics.length,
              itemListElement: topics.map((x, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${SITE_URL}/topics/${x.slug}`,
                name: x.title,
              })),
            },
          }),
        }}
      />

      <section
        className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 flex justify-center"
        style={{ borderBottom: "1.5px solid var(--card-border)" }}
      >
        <div className="w-full max-w-5xl">
          <Breadcrumbs
            className="mb-6"
            items={[{ label: "northstar", href: "/" }, { label: "Topics" }]}
          />
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px" style={{ background: "#26A69A" }} />
            <span
              className="text-sm font-mono uppercase"
              style={{ color: "#26A69A", letterSpacing: "0.16em" }}
            >
              {topics.length} collections
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.04] mb-6"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            Case studies, grouped by
            <br />
            the question they answer.
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            A single case study tells you what one company did. A topic tells you
            what a pattern looks like across several — which decisions repeat,
            which ones only worked once, and what actually transfers to your own
            product. Each collection below pulls together the deep dives that
            belong to one theme.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 flex justify-center">
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`/topics/${t.slug}`}
              className="playlist-card surface flex flex-col p-5 sm:p-6 group"
              style={{ ["--accent-color" as never]: t.accentColor } as React.CSSProperties}
            >
              <p
                className="text-xs sm:text-sm font-medium uppercase tracking-wider mb-2"
                style={{ color: t.accentColor, opacity: 0.85 }}
              >
                {t.eyebrow}
              </p>
              <h2
                className="text-lg sm:text-xl font-semibold leading-snug mb-3 group-hover:underline"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
              >
                {t.title}
              </h2>
              <p
                className="text-sm leading-relaxed mb-4 flex-1"
                style={{ color: "var(--text-muted)" }}
              >
                {t.intro.length > 190 ? `${t.intro.slice(0, 190).trimEnd()}…` : t.intro}
              </p>
              <p className="text-sm font-medium" style={{ color: t.accentColor }}>
                {liveCount(t.caseStudyIds)} case studies →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </SidebarShell>
  );
}
