import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { publishedAIDecoded } from "@/data/aiDecodedManifest";

export const alt = "northstar AI Decoded — what PMs should do about AI";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogImage({
    eyebrow: "AI Decoded",
    title: "No hype. No fluff. Just the moves worth making.",
    subtitle: `${publishedAIDecoded().length} articles`,
    description:
      "Editorial commentary on AI launches and tools, and what PMs, marketers and founders should actually do about them.",
  });
}
