import type { Metadata } from "next";
import { publishedComparisons } from "@/data/comparisons";
import { SidebarShell } from "@/components/SidebarShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SectionHead, VsBox, splitVs } from "@/components/Editorial";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// 6h. Scheduled content normally goes live via /api/cron/revalidate just
// after UTC midnight, so this window is a fallback, not the mechanism.
export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Compare — Head-to-Head Product Breakdowns",
  description:
    "Two companies, same market, opposite bets — compared side by side on model, positioning, execution and outcome, each ending in a verdict.",
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
    <SidebarShell activeNav="explore">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "northstar", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE_URL}/compare` },
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
            name: "Compare",
            url: `${SITE_URL}/compare`,
            description: "Two companies in the same market that made opposite bets, each ending in a verdict.",
            isPartOf: { "@type": "WebSite", name: "northstar", url: SITE_URL },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: comparisons.length,
              itemListElement: comparisons.map((x, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${SITE_URL}/compare/${x.slug}`,
                name: x.title,
              })),
            },
          }),
        }}
      />

      <div className="site-inner pb-16">
        <Breadcrumbs className="pt-6" items={[{ label: "northstar", href: "/" }, { label: "Compare" }]} />
        <SectionHead as="h1" title="Head-to-Head" count={comparisons.length} />
        <p className="shead-sub">
          Same market. Opposite bets. The most useful thing about a product decision is the alternative somebody else
          picked — each comparison puts two companies against each other on model, positioning, execution and outcome,
          and ends with a verdict on which bet actually held up.
        </p>
        <div className="heads">
          {comparisons.map((c) => {
            const { a, b } = splitVs(c.title, c.companyA, c.companyB);
            return <VsBox key={c.slug} a={a} b={b} m={c.eyebrow} href={`/compare/${c.slug}`} />;
          })}
        </div>
      </div>
      <Footer />
    </SidebarShell>
  );
}
