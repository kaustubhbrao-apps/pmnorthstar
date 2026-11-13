import type { Metadata } from "next";
import { publishedAnswers } from "@/data/answers";
import { AnswersClient, type AnswerCard } from "./AnswersClient";
import { SidebarShell } from "@/components/SidebarShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SectionHead } from "@/components/Editorial";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// 6h. Scheduled content normally goes live via /api/cron/revalidate just
// after UTC midnight, so this window is a fallback, not the mechanism.
export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Answers — Straight Answers to Product Questions",
  description:
    "Straight answers to the questions product people actually ask — north star metrics, RICE vs ICE, PLG, JTBD, OKRs — each backed by a real case study.",
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
    <SidebarShell activeNav="answers">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "northstar", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Answers", item: `${SITE_URL}/answers` },
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

      <div className="site-inner pb-16">
        <Breadcrumbs className="pt-6" items={[{ label: "northstar", href: "/" }, { label: "Answers" }]} />
        <SectionHead as="h1" title="Answers" count={all.length} />
        <p className="shead-sub">
          The answer first, then the argument. Most explanations of product concepts spend four paragraphs warming
          up. These start with a straight answer in the first three lines, then get into where the idea breaks down,
          what people get wrong about it, and which companies got it right or badly wrong — with the case study to
          prove it.
        </p>
        <AnswersClient answers={cards} />
      </div>

      <Footer />
    </SidebarShell>
  );
}
