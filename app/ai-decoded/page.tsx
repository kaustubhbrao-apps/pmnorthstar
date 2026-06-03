import type { Metadata } from "next";
import { getAllAIDecodedArticles } from "@/lib/ai-decoded";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SidebarShell } from "@/components/SidebarShell";
import { SubscribeForm } from "@/components/SubscribeForm";
import { AIDecodedClient } from "./AIDecodedClient";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// ISR: rebuild the index hourly so a scheduled article appears on its
// publishedAt date without a redeploy.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "AI Decoded — northstar",
  description:
    "What's actually happening in AI, and what PMs, marketers, founders, and operators should do about it. Editorial commentary on AI launches, conferences, and tools. No hype, no fluff.",
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
    <SidebarShell
      activeNav="ai-decoded"
      backHref="/"
      backLabelDesktop="Back to the library"
      shareTitle="AI Decoded by northstar"
      shareText="What's actually happening in AI, and what PMs / marketers / founders should do about it."
    >
      {/* Hero — neutral background, green eyebrow accent ties back to
          the AI Decoded card on the home page without overwhelming. */}
      <section
        className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 flex justify-center"
        style={{ borderBottom: "1.5px solid var(--card-border)" }}
      >
        <div className="w-full max-w-4xl">
          <Breadcrumbs
            className="mb-6"
            items={[
              { label: "northstar", href: "/" },
              { label: "AI Decoded" },
            ]}
          />
          <div className="flex items-center gap-2.5 mb-5">
            <span
              className="w-5 h-px"
              style={{ background: "#0F9D58" }}
            />
            <span
              className="text-sm font-mono uppercase"
              style={{ color: "#0F9D58", letterSpacing: "0.16em" }}
            >
              AI Decoded
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-[1.02] mb-6"
            style={{
              color: "var(--text-primary)",
              letterSpacing: "-0.04em",
            }}
          >
            What&apos;s actually happening in AI.
          </h1>
          <p
            className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            Editorial commentary on AI launches, conferences, and tools, plus what PMs, marketers, founders, and operators should do about them. No hype. No fluff. Just the moves worth making.
          </p>
        </div>
      </section>

      {/* Interactive Filter and List */}
      <AIDecodedClient articles={articles} />

      <section
        className="px-4 sm:px-8 lg:px-12 py-10 sm:py-16 flex justify-center"
        style={{ borderTop: "1.5px solid var(--card-border)" }}
      >
        <div className="w-full max-w-4xl">
          <SubscribeForm
            variant="card"
            surface="ai-decoded-index"
            headline="Get the next decoded read in your inbox."
            subhead="One sharp take on AI for PMs, marketers, founders, and operators. Every few days. Free."
          />
        </div>
      </section>

      <Footer />
    </SidebarShell>
  );
}
