import type { Metadata } from "next";
import Link from "next/link";
import { publishedAnswers, answerCategories } from "@/data/answers";
import { SidebarShell } from "@/components/SidebarShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// 6h. Scheduled content normally goes live via /api/cron/revalidate just
// after UTC midnight, so this window is a fallback, not the mechanism.
export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Answers — Straight Answers to Product Questions",
  description:
    "Direct, no-preamble answers to the questions product people actually ask: north star metrics, RICE vs ICE, PLG, PM vs PO, JTBD, OKRs vs KPIs and more — each backed by real case studies.",
  alternates: { canonical: `${SITE_URL}/answers` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/answers`,
    title: "Answers — northstar",
    description:
      "Straight answers to product questions, each backed by real case studies.",
    siteName: "northstar",
  },
};

export default function AnswersIndexPage() {
  const all = publishedAnswers();
  const categories = answerCategories();

  return (
    <SidebarShell
      activeNav="answers"
      backHref="/"
      backLabelDesktop="Back to the library"
      shareTitle="Answers on northstar"
      shareText="Straight answers to product questions, each backed by real case studies."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Answers",
            url: `${SITE_URL}/answers`,
            description:
              "Direct answers to common product management questions, each backed by real case studies.",
            hasPart: all.map((a) => ({
              "@type": "Question",
              name: a.question,
              url: `${SITE_URL}/answers/${a.slug}`,
              acceptedAnswer: { "@type": "Answer", text: a.shortAnswer },
            })),
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
            items={[{ label: "northstar", href: "/" }, { label: "Answers" }]}
          />
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px" style={{ background: "#EA580C" }} />
            <span
              className="text-sm font-mono uppercase"
              style={{ color: "#EA580C", letterSpacing: "0.16em" }}
            >
              {all.length} answers
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.04] mb-6"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            The answer first.
            <br />
            Then the argument.
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            Most explanations of product concepts spend four paragraphs warming up.
            These start with a straight answer in the first three lines, then get
            into where the idea breaks down, what people get wrong about it, and
            which companies got it right or badly wrong — with the case study to
            prove it.
          </p>
        </div>
      </section>

      {categories.map((category) => {
        const items = all.filter((a) => a.category === category);
        return (
          <section
            key={category}
            className="px-4 sm:px-8 lg:px-12 py-9 sm:py-12 flex justify-center"
            style={{ borderBottom: "1.5px solid var(--card-border)" }}
          >
            <div className="w-full max-w-5xl">
              <div className="flex items-baseline gap-3 mb-6">
                <h2
                  className="text-xl sm:text-2xl font-semibold"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
                >
                  {category}
                </h2>
                <span className="text-xs font-mono" style={{ color: "var(--text-faint)" }}>
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {items.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/answers/${a.slug}`}
                    className="playlist-card surface flex flex-col p-5 group"
                  >
                    <h3
                      className="text-base sm:text-lg font-semibold leading-snug mb-2.5 group-hover:underline"
                      style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
                    >
                      {a.question}
                    </h3>
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {a.shortAnswer.length > 175
                        ? `${a.shortAnswer.slice(0, 175).trimEnd()}…`
                        : a.shortAnswer}
                    </p>
                    <p className="text-sm font-medium mt-4" style={{ color: a.accentColor }}>
                      Read the full answer →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </SidebarShell>
  );
}
