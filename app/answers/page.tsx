import type { Metadata } from "next";
import { publishedAnswers } from "@/data/answers";
import { AnswersClient, type AnswerCard } from "./AnswersClient";
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
  // Map to the card shape here, on the server. Passing the full answers
  // through would serialise 72 pre-rendered bodyHtml blobs into the RSC
  // payload for a list that renders none of them.
  const cards: AnswerCard[] = all.map((a) => ({
    slug: a.slug,
    question: a.question,
    shortAnswer: a.shortAnswer,
    category: a.category,
    accentColor: a.accentColor,
    updatedAt: a.updatedAt,
  }));

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

      <AnswersClient answers={cards} />

      <Footer />
    </SidebarShell>
  );
}
