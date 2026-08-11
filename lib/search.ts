// Server-side site search.
//
// This logic used to live in six useMemo blocks inside HomeClient, which
// meant every dataset it touches — including the ~150 KB FAQ corpus and the
// build-time `searchableContent` blobs — had to ship to the browser before a
// visitor could type a single character. Running it here keeps the corpus on
// the server; the client sends a query and gets back only the matches.
//
// Matching behaviour is a deliberate port of the previous client code:
// case-insensitive substring against the same fields, same order, no
// ranking. Anything else would quietly change results for existing queries.

import { publishedCaseStudiesLite as publishedCaseStudies } from "@/data/caseStudiesLite";
import { getCaseStudyFaqs } from "@/data/caseStudyFaqs";
import { books } from "@/data/books";
import { playlists } from "@/data/learn";
import { publishedTopics } from "@/data/topics";
import { publishedComparisons } from "@/data/comparisons";
import { publishedAIDecoded } from "@/data/aiDecodedManifest";

export interface SearchResults {
  books: ReturnType<typeof searchBooks>;
  caseStudies: ReturnType<typeof searchCaseStudies>;
  playlists: ReturnType<typeof searchPlaylists>;
  topics: ReturnType<typeof searchTopics>;
  aiDecoded: ReturnType<typeof searchAIDecoded>;
  comparisons: ReturnType<typeof searchComparisons>;
}

// `summary` holds the full editorial review — several paragraphs plus key
// concepts. It's searched here but never rendered on a result card, and
// leaving it in made a broad query like "pivot" return tens of KB of prose.
// The field is optional on Book, so dropping it needs no type gymnastics.
const withoutSummary = (b: (typeof books)[number]) => {
  const { summary, ...rest } = b;
  return rest;
};

function searchBooks(q: string, category: string) {
  let result = books;
  if (category !== "All") {
    result = result.filter((b) => b.category === category);
  }
  if (!q) return result.map(withoutSummary);
  return result.filter((b) => {
    // Search the obvious fields first
    if (
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.tags.some((t) => t.toLowerCase().includes(q)) ||
      b.description.toLowerCase().includes(q)
    )
      return true;
    // Then the editorial review body — analysis paragraphs,
    // key concept names + explanations, who-should-read.
    const s = b.summary;
    if (!s) return false;
    if (s.whoShouldRead.toLowerCase().includes(q)) return true;
    if (s.analysis.some((p) => p.toLowerCase().includes(q))) return true;
    if (
      s.keyConcepts.some(
        (kc) =>
          kc.name.toLowerCase().includes(q) ||
          kc.explanation.toLowerCase().includes(q)
      )
    )
      return true;
    return false;
  }).map(withoutSummary);
}

function searchCaseStudies(q: string) {
  if (!q) return [];
  return publishedCaseStudies().filter((c) => {
    if (
      c.title.toLowerCase().includes(q) ||
      c.company.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.outcome.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      (c.region && c.region.toLowerCase().includes(q)) ||
      c.tags.some((t) => t.toLowerCase().includes(q))
    )
      return true;
    // FAQ Q&A matching — surfaces case studies whose FAQs cover
    // the query even if the body doesn't.
    return getCaseStudyFaqs(c.id).some(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q)
    );
  });
}

function searchPlaylists(q: string) {
  if (!q) return [];
  return playlists.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.channel.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.level && p.level.toLowerCase().includes(q)) ||
      (p.tags ?? []).some((t) => t.toLowerCase().includes(q))
  );
}

function searchTopics(q: string) {
  if (!q) return [];
  return publishedTopics().filter((t) => {
    if (
      t.title.toLowerCase().includes(q) ||
      t.eyebrow.toLowerCase().includes(q) ||
      t.intro.toLowerCase().includes(q) ||
      t.metaTitle.toLowerCase().includes(q) ||
      t.metaDescription.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.toLowerCase().includes(q))
    )
      return true;
    return Boolean(
      t.faqs?.some(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      )
    );
  });
}

function searchAIDecoded(q: string) {
  if (!q) return [];
  return publishedAIDecoded().filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.primaryKeyword.toLowerCase().includes(q) ||
      a.longTailKeywords.some((k) => k.toLowerCase().includes(q)) ||
      a.searchableContent.includes(q) // already lowercased at build time
  );
}

function searchComparisons(q: string) {
  if (!q) return [];
  return publishedComparisons().filter((c) => {
    if (
      c.title.toLowerCase().includes(q) ||
      c.eyebrow.toLowerCase().includes(q) ||
      c.intro.toLowerCase().includes(q) ||
      c.verdict.toLowerCase().includes(q) ||
      c.metaTitle.toLowerCase().includes(q) ||
      c.metaDescription.toLowerCase().includes(q) ||
      c.keywords.some((k) => k.toLowerCase().includes(q)) ||
      c.rows.some(
        (r) =>
          r.label.toLowerCase().includes(q) ||
          r.a.toLowerCase().includes(q) ||
          r.b.toLowerCase().includes(q)
      )
    )
      return true;
    return Boolean(
      c.faqs?.some(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      )
    );
  });
}

/**
 * `bookCategory` is folded in here because the books rail is filtered by
 * category and query at once — the previous client code combined them in a
 * single useMemo and the UI still expects one list.
 */
export function searchSite(rawQuery: string, bookCategory = "All"): SearchResults {
  const q = rawQuery.trim().toLowerCase();
  return {
    books: searchBooks(q, bookCategory),
    caseStudies: searchCaseStudies(q),
    playlists: searchPlaylists(q),
    topics: searchTopics(q),
    aiDecoded: searchAIDecoded(q),
    comparisons: searchComparisons(q),
  };
}
