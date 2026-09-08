import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { publishedComparisons } from "@/data/comparisons";

export const alt = "northstar Compare — head-to-head company comparisons";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogImage({
    eyebrow: "Compare",
    title: "Same market. Opposite bets.",
    subtitle: `${publishedComparisons().length} head-to-heads`,
    description:
      "Two companies broken down side by side on model, positioning, execution and outcome — each ending in a verdict rather than a both-sides shrug.",
  });
}
