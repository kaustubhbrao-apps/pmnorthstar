import type { Metadata } from "next";
import { publishedTopics } from "@/data/topics";
import { publishedCaseStudies } from "@/data/caseStudies";
import { SidebarShell } from "@/components/SidebarShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { EdCard, Tile, Cap, SectionHead, clip, tintAt } from "@/components/Editorial";
import { photoFor } from "@/data/cardImages";

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
    <SidebarShell activeNav="explore">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "northstar", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Topics", item: `${SITE_URL}/topics` },
            ],
          }),
        }}
      />
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

      <div className="site-inner pb-16">
        <Breadcrumbs className="pt-6" items={[{ label: "northstar", href: "/" }, { label: "Topics" }]} />
        <SectionHead as="h1" title="Topics" count={topics.length} />
        <p className="shead-sub">
          Case studies, grouped by the question they answer. A single case study tells you what one company did; a
          topic tells you what a pattern looks like across several — which decisions repeat, which only worked once,
          and what actually transfers to your own product.
        </p>
        <div className="grid3">
          {topics.map((t, i) => {
            const n = liveCount(t.caseStudyIds);
            return (
              <EdCard key={t.slug} href={`/topics/${t.slug}`}>
                <Tile
                  tint={tintAt(i)}
                  minH={280}
                  chip={`${n} ${n === 1 ? "case" : "cases"}`}
                  title={t.title}
                  size="m"
                  img={photoFor([t.eyebrow, t.title], t.slug)}
                />
                <Cap k={t.eyebrow} title={clip(t.intro, 90)} />
              </EdCard>
            );
          })}
        </div>
      </div>
      <Footer />
    </SidebarShell>
  );
}
