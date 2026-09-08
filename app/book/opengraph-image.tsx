import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { books } from "@/data/books";

export const alt = "northstar Books — original long-form reviews";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogImage({
    eyebrow: "Books",
    title: "Reviews that say when a classic is overrated",
    subtitle: `${books.length} full reviews`,
    description:
      "Original long-form reviews of product, startup and management books — the argument, the key concepts, who it is genuinely for, and what to pair it with.",
  });
}
