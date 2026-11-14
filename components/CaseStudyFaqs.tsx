// FAQ block on the case-study reading page — the shared editorial FaqList
// (native <details> accordions, first one open), kept as a named export so
// the reading page's import stays stable.

import type { FAQ } from "@/data/caseStudyFaqs";
import { FaqList } from "@/components/Editorial";

export function CaseStudyFaqs({ faqs }: { faqs: FAQ[] }) {
  return <FaqList faqs={faqs} className="mt-4" />;
}
