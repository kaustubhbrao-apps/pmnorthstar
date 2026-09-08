import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { YC_STUDY } from "@/data/yc-study";

export const alt = "We audited 496 YC startup websites";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  const S = YC_STUDY;
  return ogImage({
    eyebrow: `Original research · ${S.ranAt}`,
    title: `We audited ${S.audited} YC startup homepages`,
    subtitle: `Median ${S.median}/100 · 35 technical checks`,
    description:
      "Every check a visitor would notice is nearly universal. Every check only a crawler would notice is a coin flip. Every company named and ranked.",
  });
}
