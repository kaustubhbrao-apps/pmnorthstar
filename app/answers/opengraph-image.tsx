import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { publishedAnswers } from "@/data/answers";

export const alt = "northstar Answers — straight answers to product questions";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogImage({
    eyebrow: "Answers",
    title: "The answer first. Then the argument.",
    subtitle: `${publishedAnswers().length} product questions`,
    description:
      "Direct answers to the questions product people actually ask — each opening with a self-contained definition, then where the idea breaks down.",
  });
}
