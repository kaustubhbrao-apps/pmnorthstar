import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { getAllAIDecodedArticles } from "@/lib/ai-decoded";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

export const metadata: Metadata = {
  title: "AI Decoded — northstar",
  description:
    "What's actually happening in AI, and what PMs, marketers, founders, and operators should do about it. Editorial commentary on AI launches, conferences, and tools — no hype, no fluff.",
  alternates: { canonical: `${SITE_URL}/ai-decoded` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/ai-decoded`,
    title: "AI Decoded — northstar",
    description:
      "Editorial commentary on AI for PMs, marketers and founders. No hype, no fluff.",
    siteName: "northstar",
  },
};

export default function AIDecodedIndexPage() {
  const articles = getAllAIDecodedArticles();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--page-bg)" }}
    >
      <header
        className="flex-shrink-0 px-4 sm:px-6 py-3 flex items-center justify-between gap-3"
        style={{
          background: "var(--nav-bg)",
          borderBottom: "1px solid var(--card-border)",
        }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft size={14} strokeWidth={1.6} />
          <span className="hidden sm:inline">Back to the library</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section
          className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 relative overflow-hidden"
          style={{ borderBottom: "1px solid var(--card-border)" }}
        >
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              top: -100,
              left: -100,
              width: 360,
              height: 360,
              borderRadius: 9999,
              background: "rgba(243,18,60,0.14)",
              filter: "blur(100px)",
            }}
          />
          <div className="max-w-3xl relative z-10">
            <Breadcrumbs
              className="mb-5"
              items={[
                { label: "northstar", href: "/" },
                { label: "AI Decoded" },
              ]}
            />
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
              style={{ color: "var(--brand-primary)" }}
            >
              AI Decoded
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.02] mb-5"
              style={{
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
              }}
            >
              What&apos;s actually happening in AI.
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl"
              style={{ color: "var(--text-muted)" }}
            >
              Editorial commentary on AI launches, conferences, and tools — and what PMs, marketers, founders, and operators should do about them. No hype. No fluff. Just the moves worth making.
            </p>
          </div>
        </section>

        {/* Articles list */}
        <section className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
          <div className="max-w-3xl">
            {articles.length === 0 ? (
              <div
                className="surface p-8 text-center"
                style={{ borderRadius: 12 }}
              >
                <p
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  First decoded read is coming soon.
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  Working on the inaugural batch. Subscribe to the newsletter to know when they drop.
                </p>
              </div>
            ) : (
              <ul className="space-y-3">
                {articles.map((a) => (
                  <li key={a.frontmatter.slug}>
                    <Link
                      href={`/ai-decoded/${a.frontmatter.slug}`}
                      className="surface p-5 sm:p-6 block group transition-colors"
                      style={{ borderRadius: 12 }}
                    >
                      <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                        <span
                          className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(243, 18, 60, 0.10)",
                            color: "var(--brand-primary)",
                            border: "1px solid rgba(243, 18, 60, 0.30)",
                          }}
                        >
                          <span
                            className="w-1 h-1 rounded-full"
                            style={{ background: "var(--brand-primary)" }}
                          />
                          {a.frontmatter.category}
                        </span>
                        <span className="meta-mono inline-flex items-center gap-1">
                          <Clock size={10} strokeWidth={1.6} />
                          {a.readTime} min
                        </span>
                        <span
                          className="meta-mono"
                          style={{ color: "var(--text-faint)" }}
                        >
                          {new Date(a.frontmatter.publishedAt).toLocaleDateString(
                            "en-IN",
                            { day: "numeric", month: "short", year: "numeric" }
                          )}
                        </span>
                      </div>
                      <h2
                        className="text-xl sm:text-2xl font-semibold mb-2 leading-tight group-hover:underline"
                        style={{
                          color: "var(--text-primary)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {a.frontmatter.title}
                      </h2>
                      <p
                        className="text-sm leading-relaxed mb-3"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {a.frontmatter.excerpt}
                      </p>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold"
                        style={{ color: "var(--brand-primary)" }}
                      >
                        Read the decoded take
                        <ArrowUpRight size={11} strokeWidth={1.8} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
