import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getAnswerBySlug } from "@/data/answers";

export const alt = "northstar answer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: { slug: string } }) {
  const answer = getAnswerBySlug(params.slug);
  if (!answer) {
    return ogImage({ eyebrow: "Answer", title: "Answer not found" });
  }
  return ogImage({
    eyebrow: `Answer · ${answer.category}`,
    title: answer.question,
    // The short answer is the citable unit on the page, so it is also what
    // the card should show — a share is often the only thing someone reads.
    description: answer.shortAnswer,
  });
}
