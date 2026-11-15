"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SidebarShell } from "@/components/SidebarShell";
import { SmartEngagementBlock } from "@/components/SmartEngagementBlock";
import { ShareButton } from "@/components/ShareButton";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookFaqs } from "@/components/BookFaqs";
import { getBookFaqs } from "@/data/bookFaqs";
import { Byline } from "@/components/Byline";
import { ViewCounter } from "@/components/ViewCounter";
import { SmartSaveButton } from "@/components/SmartSaveButton";
import { SITE_LAST_REVIEWED } from "@/lib/site";
import { books, getBookSlug, getBookBySlug, getAmazonAffiliateUrl } from "@/data/books";
import { caseStudiesLite as caseStudies } from "@/data/caseStudiesLite";
import { getCaseStudySlug } from "@/data/caseStudies";
import { ArrowUpRight, ShoppingCart, Star } from "lucide-react";
import { BigDiv, Pill, EdCard, Tile, Cap, SectionHead, clip, tintAt, bookCover } from "@/components/Editorial";

interface AuthorPhotoState {
  url: string | null;
  failed: boolean;
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = getBookBySlug(params.slug, books);
  const [authorPhoto, setAuthorPhoto] = useState<AuthorPhotoState>({ url: null, failed: false });

  // Wikipedia author photo fallback (same hook idea as ResourceCard, inlined)
  useEffect(() => {
    if (!book) return;
    if (typeof window === "undefined") return;
    const cacheKey = `pmnorthstar:author-photo:${book.author}`;
    const cached = window.localStorage.getItem(cacheKey);
    if (cached === "none") {
      setAuthorPhoto({ url: null, failed: true });
      return;
    }
    if (cached) {
      setAuthorPhoto({ url: cached, failed: false });
      return;
    }
    let cancelled = false;
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(book.author)}`, {
      headers: { Accept: "application/json" },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (cancelled) return;
        const src = data?.thumbnail?.source;
        if (src) {
          window.localStorage.setItem(cacheKey, src);
          setAuthorPhoto({ url: src, failed: false });
        } else {
          window.localStorage.setItem(cacheKey, "none");
          setAuthorPhoto({ url: null, failed: true });
        }
      })
      .catch(() => {
        if (!cancelled) {
          window.localStorage.setItem(cacheKey, "none");
          setAuthorPhoto({ url: null, failed: true });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [book]);

  if (!book) notFound();

  const amazonUrl = getAmazonAffiliateUrl(book);
  const faqs = getBookFaqs(book);

  // Related books (same category, different book)
  const relatedBooks = books.filter((b) => b.id !== book.id && b.category === book.category).slice(0, 4);

  // Pull related case studies if specified in the summary
  const relatedCaseStudies = (book.summary?.relatedCaseStudies || [])
    .map((id) => caseStudies.find((c) => c.id === id))
    .filter(Boolean) as typeof caseStudies;

  const cover = bookCover(book.thumbnailURL);
  const injectAfter = book.summary ? Math.max(2, Math.floor(book.summary.analysis.length * 0.4)) : 0;

  return (
    <SidebarShell activeNav="books">
      <div className="site-inner read-page pb-16">
        <Breadcrumbs
          className="pt-6"
          items={[
            { label: "northstar", href: "/" },
            { label: "Books", href: "/book" },
            { label: book.category, href: "/book" },
            { label: book.title },
          ]}
        />
        <BigDiv>
          Book review · {book.year} · {book.pages} pages
        </BigDiv>

        <div className="story-grid">
          <article className="read-wrap">
            <div className="flex flex-wrap items-center gap-3">
              <Pill>{book.category}</Pill>
              <span className="progress inline-flex items-center gap-1">
                <Star size={12} strokeWidth={2} style={{ color: "var(--brand-primary)", fill: "var(--brand-primary)" }} />
                {book.rating.toFixed(1)}
              </span>
              <ViewCounter path={`/book/${params.slug}`} className="progress" />
            </div>

            <h1 className="t">{book.title}</h1>
            <p className="lede">{book.description}</p>

            <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
              <Byline label="Reviewed" date={SITE_LAST_REVIEWED} />
              <div className="flex items-center gap-3">
                <SmartSaveButton
                  resource={{ id: book.id, title: book.title, author: book.author, category: book.category, link: `/book/${getBookSlug(book)}` }}
                />
                <ShareButton
                  title={`${book.title} by ${book.author} — northstar review`}
                  text={`${book.title} by ${book.author}: ${book.description} — northstar's review`}
                  label="Share"
                  variant="prominent"
                />
              </div>
            </div>

            {/* Cover tile + buy routes */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-6 mt-8 items-start">
              <EdCard href={amazonUrl} external ariaLabel={`${book.title} on Amazon`}>
                <Tile tint={tintAt(0)} minH={260} chip={String(book.year)} title={book.title} size="s" img={cover} />
              </EdCard>
              <div>
                <p className="progress mb-2">By {book.author}</p>
                <div className="flex flex-wrap items-center gap-2.5">
                  {book.summary && (
                    <a href="#short-route" className="btn-primary">
                      The short route
                    </a>
                  )}
                  <a href={amazonUrl} target="_blank" rel="noopener noreferrer" className="btn-accent">
                    <ShoppingCart size={14} strokeWidth={1.8} />
                    Buy on Amazon
                    <ArrowUpRight size={12} strokeWidth={1.8} />
                  </a>
                </div>
                <p className="serif mt-3" style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.45 }}>
                  The short route — our review and takeaways, 5 min. The long route — buy the book if you want to go deeper. Both work.
                </p>
                {authorPhoto.url && !authorPhoto.failed && (
                  <img
                    src={authorPhoto.url}
                    alt={`${book.author}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="mt-4 rounded-full object-cover"
                    style={{ width: 64, height: 64, border: "1.5px solid var(--hair)" }}
                  />
                )}
              </div>
            </div>

            {/* The short route — northstar's take */}
            <SectionHead title="The short route" className="mt-10" />
            <p className="shead-sub">northstar&apos;s take on this book — what it argues, and who it&apos;s really for.</p>

            {book.summary ? (
              <>
                {book.summary.analysis.map((para, i) => (
                  <div key={i}>
                    <p className="markdown-prose case-para" style={{ fontSize: "1.18rem", lineHeight: 1.72, color: "var(--text-primary)", marginBottom: "1.4rem" }}>
                      {para}
                    </p>
                    {i === injectAfter && (
                      <div className="my-8">
                        <SmartEngagementBlock
                          fromType="book"
                          fromSlug={getBookSlug(book)}
                          newsletterHeadline="Like this review? Get the next book breakdown in your inbox."
                          newsletterSubhead="One book or case study every few days — the short route, with the takeaways and our honest read. Free."
                          recommendations={relatedBooks.slice(0, 3).map((b) => ({
                            type: "book",
                            slug: getBookSlug(b),
                            title: b.title,
                            eyebrow: `${b.category} · ${b.author}`,
                            href: `/book/${getBookSlug(b)}`,
                          }))}
                        />
                      </div>
                    )}
                  </div>
                ))}

                <div className="drillcard mt-8" style={{ maxWidth: "100%" }}>
                  <div className="railhead">Key concepts</div>
                  <ul className="space-y-3 mt-1">
                    {book.summary.keyConcepts.map((c, i) => (
                      <li key={i} className="serif" style={{ fontSize: "1.08rem", lineHeight: 1.55, color: "var(--text-muted)" }}>
                        <strong style={{ color: "var(--text-primary)" }}>{c.name}</strong> — {c.explanation}
                      </li>
                    ))}
                  </ul>
                </div>

                <SectionHead title="Who should read it" />
                <p className="serif" style={{ fontSize: "1.18rem", lineHeight: 1.6, color: "var(--text-muted)" }}>
                  {book.summary.whoShouldRead}
                </p>
              </>
            ) : (
              <div className="drillcard" style={{ maxWidth: "100%" }}>
                <div className="railhead">Summary coming soon</div>
                <p className="serif" style={{ color: "var(--text-muted)", fontSize: "1.08rem", lineHeight: 1.5 }}>
                  We&apos;re writing northstar&apos;s take on this one. Subscribe to the newsletter to get notified when it&apos;s live.
                </p>
              </div>
            )}

            <div className="play mt-10">
              <div className="lab">The long route</div>
              <p>
                Want the full argument? Read the book.{" "}
                <a href={amazonUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline" }}>
                  Get it on Amazon →
                </a>
              </p>
            </div>

            {faqs.length > 0 && <BookFaqs faqs={faqs} />}

            {relatedCaseStudies.length > 0 && (
              <>
                <SectionHead title="See it in practice" count={relatedCaseStudies.length} />
                <p className="shead-sub">Case studies that demonstrate these ideas.</p>
                <div className="grid3">
                  {relatedCaseStudies.map((cs, i) => (
                    <EdCard key={cs.id} href={`/case-study/${getCaseStudySlug(cs.id)}`}>
                      <Tile tint={tintAt(i)} minH={240} chip={cs.category} title={cs.title} size="m" brand={cs.company} />
                      <Cap k={`${cs.category} · ${cs.company}`} />
                    </EdCard>
                  ))}
                </div>
              </>
            )}

            <div className="mt-12 flex flex-wrap gap-2.5">
              <Link href="/book" className="btn-primary">
                All book reviews →
              </Link>
              <Link href="/#casestudies" className="btn-ghost">
                Browse case studies
              </Link>
            </div>
          </article>

          <aside className="rail">
            <div className="railcard">
              <div className="railhead">At a glance</div>
              <div className="statrow">
                <span className="sn">{book.rating.toFixed(1)}</span>
                <span className="sl">northstar rating</span>
              </div>
              <div className="statrow">
                <span className="sn">{book.pages}</span>
                <span className="sl">Pages</span>
              </div>
              <div className="statrow">
                <span className="sn">{book.year}</span>
                <span className="sl">Published</span>
              </div>
              <div className="statrow">
                <span className="sn">{book.category}</span>
                <span className="sl">Shelf</span>
              </div>
            </div>

            {relatedBooks.length > 0 && (
              <div className="railcard">
                <div className="railhead">More in {book.category}</div>
                {relatedBooks.map((b) => (
                  <Link key={b.id} href={`/book/${getBookSlug(b)}`} className="rellink">
                    {b.title} →
                  </Link>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
      <Footer />
    </SidebarShell>
  );
}
