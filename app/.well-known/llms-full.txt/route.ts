import { NextResponse } from "next/server";
import { publishedCaseStudies } from "@/data/caseStudies";
import { publishedAIDecoded } from "@/data/aiDecodedManifest";
import { books } from "@/data/books";

export const dynamic = "force-static";
export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const caseStudies = publishedCaseStudies();
  const aiArticles = publishedAIDecoded();
  
  let output = "# northstar Full Knowledge Base\n\n";
  output += "This file contains the complete text of all case studies, book reviews, and AI articles on northstar for ingestion by LLMs and AI agents.\n\n";
  
  // ─── AI DECODED ────────────────────────────────────────────────────────
  output += "## AI Decoded Articles\n\n";
  aiArticles.forEach(a => {
    output += `### ${a.title}\n`;
    output += `Category: ${a.category} | Published: ${a.publishedAt}\n\n`;
    output += `${a.searchableContent}\n\n---\n\n`;
  });

  // ─── CASE STUDIES ───────────────────────────────────────────────────────
  output += "## Product Case Studies\n\n";
  caseStudies.forEach(cs => {
    output += `### ${cs.title} (${cs.company})\n`;
    output += `Category: ${cs.category} | Year: ${cs.year}\n\n`;
    output += `**Outcome:** ${cs.outcome}\n\n`;
    output += `${cs.content}\n\n---\n\n`;
  });

  // ─── BOOKS ─────────────────────────────────────────────────────────────
  output += "## Essential Book Summaries\n\n";
  books.forEach(b => {
    output += `### ${b.title} by ${b.author}\n`;
    output += `Category: ${b.category}\n\n`;
    output += `#### Overview\n${b.description}\n\n`;
    if (b.summary) {
      output += `#### Key Takeaways\n${b.summary.whoShouldRead}\n\n`;
      b.summary.analysis.forEach(p => {
        output += `${p}\n\n`;
      });
      output += `#### Key Concepts\n`;
      b.summary.keyConcepts.forEach(kc => {
        output += `- **${kc.name}:** ${kc.explanation}\n`;
      });
    }
    output += `\n---\n\n`;
  });

  return new NextResponse(output, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
