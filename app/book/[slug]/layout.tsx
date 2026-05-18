import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { books, getBookSlug, getBookBySlug } from "@/data/books";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: book.title,
            author: { "@type": "Person", name: book.author },
            datePublished: `${book.year}`,
            numberOfPages: book.pages,
            inLanguage: "en",
            genre: book.category,
            description: book.description,
            url: `${SITE_URL}/book/${getBookSlug(book)}`,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: book.rating,
              bestRating: 5,
              ratingCount: 1, // placeholder until you have real ratings
            },
          }),
        }}
      />
      {children}
    </>
  );
}
