import { Book, books, getBookBySlug } from "./books";

export interface BookFAQ {
  question: string;
  answer: string;
}

// FAQs are generated from each book's own summary fields. Each Q is a
// real Google search pattern PMs type when evaluating a book; each A
// pulls a 1-3 sentence answer from the editorial review we already
// wrote, so the content is unique per book and not boilerplate.
export function getBookFaqs(book: Book): BookFAQ[] {
  if (!book.summary) return [];
  const { analysis, whoShouldRead, pairsWith } = book.summary;

  const faqs: BookFAQ[] = [
    {
      question: `Is ${book.title} worth reading in 2026?`,
      answer: analysis[0] ?? "",
    },
    {
      question: `Who should read ${book.title}?`,
      answer: whoShouldRead,
    },
  ];

  // Pair-with answer: only include if we have a known companion book.
  if (pairsWith && pairsWith.length > 0) {
    const paired = books.find((b) => b.id === pairsWith[0]);
    if (paired) {
      faqs.push({
        question: `What should I read alongside ${book.title}?`,
        answer: `Pair it with ${paired.title} by ${paired.author}. ${paired.description}`,
      });
    }
  }

  // Common-misreading answer — usually paragraph 4 of analysis is the
  // "most common misreading" paragraph since that's how we structured
  // every book review. Falls back to paragraph 2 if shorter.
  const misreading = analysis[3] ?? analysis[1];
  if (misreading) {
    faqs.push({
      question: `What's the most common misreading of ${book.title}?`,
      answer: misreading,
    });
  }

  return faqs;
}

// Slug-based lookup convenience for layout / page consumers.
export function getBookFaqsBySlug(slug: string): BookFAQ[] {
  const book = getBookBySlug(slug, books);
  return book ? getBookFaqs(book) : [];
}
