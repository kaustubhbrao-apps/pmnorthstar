import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { publishedTopics } from "@/data/topics";

export const alt = "northstar Topics — case studies grouped by pattern";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogImage({
    eyebrow: "Topics",
    title: "The same decision, across several companies",
    subtitle: `${publishedTopics().length} curated collections`,
    description:
      "Case studies grouped by the pattern they demonstrate, for readers who want the shape of a decision rather than one instance of it.",
  });
}
