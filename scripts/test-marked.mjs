import { marked } from 'marked';

const markdown = `## The Incumbent Landscape

In 1999, enterprise software was synonymous with pain.

*   List item 1
*   List item 2`;

const paragraphs = markdown.split("\n\n").filter(Boolean);
for (const p of paragraphs) {
  console.log("Raw:", p);
  console.log("Parsed:", marked.parse(p));
}
