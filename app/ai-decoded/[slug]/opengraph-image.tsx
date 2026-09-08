import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getAIDecodedArticleBySlug } from "@/lib/ai-decoded";

export const alt = "northstar AI Decoded";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: { slug: string } }) {
  const article = getAIDecodedArticleBySlug(params.slug);
  if (!article) {
    return ogImage({ eyebrow: "AI Decoded", title: "Article not found" });
  }
  const fm = article.frontmatter;
  return ogImage({
    eyebrow: `AI Decoded · ${fm.category}`,
    title: fm.title,
    description: fm.excerpt,
    footer: `${article.readTime} min read`,
  });
}
