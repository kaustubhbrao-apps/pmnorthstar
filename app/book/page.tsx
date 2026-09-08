import type { Metadata } from "next";
import Link from "next/link";
import { books, getBookSlug, type Category } from "@/data/books";
import { SidebarShell } from "@/components/SidebarShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

export const metadata: Metadata = {
  title: "Books — Product, Startup and Management Reviews",
  description:
    "Original long-form reviews of product, startup and management books — the argument, the key concepts, who each is for, and what to pair it with.",
  alternates: { canonical: `${SITE_URL}/book` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/book`,
    title: "Books — northstar",
    description:
      "Original long-form reviews of essential product, startup and management books.",
    siteName: "northstar",
  },
};

// Category order is editorial, not alphabetical — PM first because it's
// what most readers arrive for.
const CATEGORY_ORDER: Category[] = ["Product Management", "Startups", "Management"];

const CATEGORY_BLURB: Record<Category, string> = {
  "Product Management":
    "Discovery, prioritisation, delivery and the craft of the role itself.",
  Startups: "Zero-to-one, finding product-market fit, and the founder's side of the table.",
  Management: "Building teams, leading builders, and the parts nobody trains you for.",
};

export default function BooksIndexPage() {
  const byCategory = CATEGORY_ORDER.map((category) => ({
    category,
    items: books
      .filter((b) => b.category === category)
      .sort((a, b) => b.rating - a.rating),
  })).filter((group) => group.items.length > 0);

  return (
    <SidebarShell
      activeNav="home"
      backHref="/"
      backLabelDesktop="Back to the library"
      shareTitle="Book reviews on northstar"
      shareText="Original long-form reviews of essential product, startup and management books."
    >
      {/* CollectionPage + ItemList.
          These three hubs exist so the detail pages have a crawl entry
          point; without an ItemList an assistant still has to fetch the
          hub and parse markup to learn what it contains. The list is the
          page's whole substance, so it belongs in the structured data. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Books",
            url: `${SITE_URL}/book`,
            description: "Original long-form reviews of product, startup and management books.",
            isPartOf: { "@type": "WebSite", name: "northstar", url: SITE_URL },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: books.length,
              itemListElement: books.map((x, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${SITE_URL}/book/${getBookSlug(x)}`,
                name: x.title,
              })),
            },
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
            items={[{ label: "northstar", href: "/" }, { label: "Books" }]}
          />
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px" style={{ background: "#9B8FFF" }} />
            <span
              className="text-sm font-mono uppercase"
              style={{ color: "#9B8FFF", letterSpacing: "0.16em" }}
            >
              {books.length} books reviewed
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.04] mb-6"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            Read the review before
            <br />
            you buy the book.
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            Every book here has a full review, not a blurb: what it argues, the
            concepts worth keeping, who it&apos;s genuinely for, and what to read
            alongside it. Some of these are canon. A few are overrated, and the
            reviews say so.
          </p>
        </div>
      </section>

      {byCategory.map(({ category, items }) => (
        <section
          key={category}
          className="px-4 sm:px-8 lg:px-12 py-9 sm:py-12 flex justify-center"
          style={{ borderBottom: "1.5px solid var(--card-border)" }}
        >
          <div className="w-full max-w-5xl">
            <div className="flex items-baseline gap-3 mb-1.5">
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
            <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              {CATEGORY_BLURB[category]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {items.map((b) => (
                <Link
                  key={b.id}
                  href={`/book/${getBookSlug(b)}`}
                  className="playlist-card surface flex flex-col p-5 group"
                >
                  <h3
                    className="text-base sm:text-lg font-semibold leading-snug mb-1 group-hover:underline"
                    style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
                    {b.author} · {b.year} · {b.pages} pages
                  </p>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {b.description.length > 165
                      ? `${b.description.slice(0, 165).trimEnd()}…`
                      : b.description}
                  </p>
                  <p className="text-sm font-medium mt-4" style={{ color: "#9B8FFF" }}>
                    Read the review →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </SidebarShell>
  );
}
