import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { books, getBookSlug, getBookBySlug } from "@/data/books";
import { getBookFaqs } from "@/data/bookFaqs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// Wikipedia URLs for the authors we know have a page. Used for Person
// schema sameAs — only including entries we've verified exist, to avoid
// 404 references that hurt rather than help Knowledge Graph signals.
const AUTHOR_WIKIPEDIA: Record<string, string> = {
  "Marty Cagan": "https://en.wikipedia.org/wiki/Marty_Cagan",
  "Eric Ries": "https://en.wikipedia.org/wiki/Eric_Ries",
  "Peter Thiel": "https://en.wikipedia.org/wiki/Peter_Thiel",
  "Ben Horowitz": "https://en.wikipedia.org/wiki/Ben_Horowitz",
  "Reid Hoffman": "https://en.wikipedia.org/wiki/Reid_Hoffman",
  "Steve Blank": "https://en.wikipedia.org/wiki/Steve_Blank",
  "Brad Feld": "https://en.wikipedia.org/wiki/Brad_Feld",
  "Andrew Grove": "https://en.wikipedia.org/wiki/Andrew_Grove",
  "John Doerr": "https://en.wikipedia.org/wiki/John_Doerr",
  "Jim Collins": "https://en.wikipedia.org/wiki/Jim_Collins_(American_businessman)",
  "Ray Dalio": "https://en.wikipedia.org/wiki/Ray_Dalio",
  "Clayton Christensen": "https://en.wikipedia.org/wiki/Clayton_Christensen",
  "Daniel Kahneman": "https://en.wikipedia.org/wiki/Daniel_Kahneman",
  "Seth Godin": "https://en.wikipedia.org/wiki/Seth_Godin",
  "Reed Hastings": "https://en.wikipedia.org/wiki/Reed_Hastings",
  "Michael E. Gerber": "https://en.wikipedia.org/wiki/Michael_E._Gerber",
  "Nir Eyal": "https://en.wikipedia.org/wiki/Nir_Eyal",
};

export async function generateStaticParams() {
  return books.map((b) => ({ slug: getBookSlug(b) }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const book = getBookBySlug(params.slug, books);
  if (!book) return { title: "Book not found" };
  const url = `${SITE_URL}/book/${getBookSlug(book)}`;
  return {
    title: `${book.title} by ${book.author}`,
    description: book.description,
    keywords: [
      book.title,
      book.author,
      book.category,
      "book review",
      "book takeaways",
      `${book.title} summary`,
      "product management books",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "book",
      url,
      title: `${book.title} by ${book.author}`,
      description: book.description,
      siteName: "northstar",
    },
    twitter: {
      card: "summary_large_image",
      title: `${book.title} by ${book.author}`,
      description: book.description,
    },
  };
}

export default function BookLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const book = getBookBySlug(params.slug, books);
  if (!book) notFound();
  const slug = getBookSlug(book);
  const url = `${SITE_URL}/book/${slug}`;
  const wikipediaUrl = AUTHOR_WIKIPEDIA[book.author];
  const authorEntity = {
    "@type": "Person",
    name: book.author,
    ...(wikipediaUrl ? { sameAs: [wikipediaUrl] } : {}),
  };
  const faqs = getBookFaqs(book);

  return (
    <>
      {/* Book schema — Cagan / Inspired itself as an entity */}
      <script
        key="book-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: book.title,
            author: authorEntity,
            datePublished: `${book.year}`,
            numberOfPages: book.pages,
            inLanguage: "en",
            genre: book.category,
            description: book.description,
            url,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: book.rating,
              bestRating: 5,
              ratingCount: 1, // placeholder until you have real ratings
            },
          }),
        }}
      />
      {/* Person schema — surfaces the author as a separate entity so
          Google can connect 'Marty Cagan' to multiple books across the
          site and to his Wikipedia entry when one exists. */}
      <script
        key="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...authorEntity,
          }),
        }}
      />
      {/* Breadcrumb schema — matches the visible breadcrumbs on the page. */}
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "northstar", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Books", item: `${SITE_URL}/#books-section` },
              { "@type": "ListItem", position: 3, name: book.category, item: `${SITE_URL}/#books-section` },
              { "@type": "ListItem", position: 4, name: book.title, item: url },
            ],
          }),
        }}
      />
      {/* FAQPage schema — same FAQs the page renders visibly. Eligible
          for the People-Also-Ask rich-snippet treatment on Google. */}
      {faqs.length > 0 && (
        <script
          key="faq-schema"
          id="ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.answer,
                },
              })),
            }),
          }}
        />
      )}
      {children}
    </>
  );
}
