import type { Metadata } from "next";
import { books, getBookSlug, type Category } from "@/data/books";
import { SidebarShell } from "@/components/SidebarShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { EdCard, Tile, Cap, SectionHead, clip, tintAt } from "@/components/Editorial";

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
    <SidebarShell activeNav="books">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "northstar", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Books", item: `${SITE_URL}/book` },
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

      <div className="site-inner pb-16">
        <Breadcrumbs className="pt-6" items={[{ label: "northstar", href: "/" }, { label: "Books" }]} />
        <SectionHead as="h1" title="Books" count={books.length} />
        <p className="shead-sub">
          Read the review before you buy the book. Every book here has a full review, not a blurb: what it argues,
          the concepts worth keeping, who it&apos;s genuinely for, and what to read alongside it. Some of these are
          canon. A few are overrated, and the reviews say so.
        </p>

        {byCategory.map(({ category, items }) => (
          <section key={category}>
            <SectionHead title={category} count={items.length} />
            <p className="shead-sub">{CATEGORY_BLURB[category]}</p>
            <div className="grid3">
              {items.map((b, i) => (
                <EdCard key={b.id} href={`/book/${getBookSlug(b)}`}>
                  <Tile tint={tintAt(i)} minH={300} chip={String(b.year)} title={b.title} size="m" />
                  <Cap k={`${b.author} · ${b.pages} pages`} title={clip(b.description, 80)} />
                </EdCard>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </SidebarShell>
  );
}
