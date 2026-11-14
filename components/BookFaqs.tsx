// FAQ block on the book reading page — the shared editorial FaqList.

import type { BookFAQ } from "@/data/bookFaqs";
import { FaqList } from "@/components/Editorial";

export function BookFaqs({ faqs }: { faqs: BookFAQ[] }) {
  return <FaqList faqs={faqs} className="mt-4" />;
}
