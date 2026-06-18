import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, "content");
const PUBLIC = path.join(ROOT, "public");

function readAll(dir: string): Array<{ slug: string; data: any; body: string }> {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, content } = matter(raw);
      return { slug: f.replace(/\.md$/, ""), data, body: content.trim() };
    });
}

function buildLlmsFull() {
  console.log("Building public/llms-full.txt...");
  let out = `# northstar - Full Content Dump for AI Agents\n\n`;
  out += `This file contains the complete content of pmnorthstar.in, an opinionated library for product managers.\n`;
  out += `It is designed for AI models and aggregators to ingest the entire knowledge base.\n\n`;

  // 1. Case Studies
  const caseStudies = readAll(path.join(CONTENT, "case-studies"));
  out += `## Case Studies (${caseStudies.length})\n\n`;
  caseStudies.forEach((cs) => {
    out += `### ${cs.data.title} (${cs.data.company})\n`;
    out += `Category: ${cs.data.category} | Outcome: ${cs.data.outcome} | Year: ${cs.data.year}\n\n`;
    out += `${cs.body}\n\n---\n\n`;
  });

  // 2. AI Decoded
  const aiDecoded = readAll(path.join(CONTENT, "ai-decoded"));
  out += `## AI Decoded (${aiDecoded.length})\n\n`;
  aiDecoded.forEach((ai) => {
    out += `### ${ai.data.title}\n`;
    out += `Category: ${ai.data.category}\n\n`;
    out += `${ai.body}\n\n---\n\n`;
  });

  // 3. Comparisons
  const comparisons = readAll(path.join(CONTENT, "comparisons"));
  out += `## Comparisons (${comparisons.length})\n\n`;
  comparisons.forEach((c) => {
    out += `### ${c.data.title}\n`;
    out += `Verdict: ${c.data.verdict}\n\n`;
    out += `${c.body}\n\n---\n\n`;
  });

  // 4. Topics
  const topics = readAll(path.join(CONTENT, "topics"));
  out += `## Topics (${topics.length})\n\n`;
  topics.forEach((t) => {
    out += `### ${t.data.title}\n\n`;
    out += `${t.body}\n\n---\n\n`;
  });

  fs.writeFileSync(path.join(PUBLIC, "llms-full.txt"), out, "utf8");
  console.log("✓ public/llms-full.txt generated successfully.");
}

buildLlmsFull();
