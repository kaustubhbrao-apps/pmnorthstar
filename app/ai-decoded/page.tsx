import type { Metadata } from "next";
import { getAllAIDecodedArticles } from "@/lib/ai-decoded";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SidebarShell } from "@/components/SidebarShell";
import { SubscribeForm } from "@/components/SubscribeForm";
import { SectionHead } from "@/components/Editorial";
import { AIDecodedClient } from "./AIDecodedClient";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// ISR: rebuild the index hourly so a scheduled article appears on its
// publishedAt date without a redeploy.
// 6h. Scheduled content normally goes live via /api/cron/revalidate just
// after UTC midnight, so this window is a fallback, not the mechanism.
// Kept at 6h rather than 24h so a missed cron run (or an unset
// CRON_SECRET) delays a publish by hours, not a full day.
export const revalidate = 21600;

export const metadata: Metadata = {
  title: "AI Decoded — Practical AI for Product People",
  description:
    "What is actually happening in AI and what PMs, founders and operators should do about it. Commentary on launches and tools. No hype, no fluff.",
  alternates: { canonical: `${SITE_URL}/ai-decoded` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/ai-decoded`,
    title: "AI Decoded by northstar",
    description:
      "Editorial commentary on AI for PMs, marketers and founders. No hype, no fluff.",
    siteName: "northstar",
  },
};

export default function AIDecodedIndexPage() {
  const articles = getAllAIDecodedArticles();

  return (
    <SidebarShell activeNav="ai-decoded">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "northstar", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "AI Decoded", item: `${SITE_URL}/ai-decoded` },
            ],
          }),
        }}
      />
      <div className="site-inner pb-16">
        <Breadcrumbs className="pt-6" items={[{ label: "northstar", href: "/" }, { label: "AI Decoded" }]} />
        <SectionHead as="h1" title="AI Decoded" count={articles.length} />
        <p className="shead-sub">
          What&apos;s actually happening in AI. Editorial commentary on launches, conferences and tools, plus what
          PMs, marketers, founders and operators should do about them. No hype. No fluff. Just the moves worth making.
        </p>

        <AIDecodedClient articles={articles} />

        <div className="max-w-2xl mt-14">
          <SubscribeForm
            variant="card"
            surface="ai-decoded-index"
            headline="Get the next decoded read in your inbox."
            subhead="One sharp take on AI for PMs, marketers, founders, and operators. Every few days. Free."
          />
        </div>
      </div>
      <Footer />
    </SidebarShell>
  );
}
