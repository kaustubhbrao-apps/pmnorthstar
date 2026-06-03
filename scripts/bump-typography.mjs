import fs from "fs";
import { execSync } from "child_process";

const files = execSync("find app components -name '*.tsx'").toString().split('\n').filter(Boolean);

let changed = 0;
for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  // Bump the tiny absolute sizes
  content = content.replace(/text-\[10px\]/g, "text-xs");
  content = content.replace(/text-\[11px\]/g, "text-sm");
  
  // Bump text-xs in eyebrows and metadata to text-sm
  content = content.replace(/text-xs font-bold uppercase/g, "text-sm font-bold uppercase");
  content = content.replace(/text-xs font-medium uppercase/g, "text-sm font-medium uppercase");
  content = content.replace(/text-xs font-semibold uppercase/g, "text-sm font-semibold uppercase");
  content = content.replace(/text-xs uppercase/g, "text-sm uppercase");
  content = content.replace(/text-xs font-mono/g, "text-sm font-mono");
  
  // Breadcrumbs and Bylines
  content = content.replace(/text-xs font-medium/g, "text-sm font-medium");
  content = content.replace(/text-xs leading-relaxed/g, "text-sm leading-relaxed");
  content = content.replace(/text-xs sm:text-sm/g, "text-sm sm:text-base");

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    changed++;
  }
}

// Update globals.css
const cssPath = "app/globals.css";
let cssContent = fs.readFileSync(cssPath, "utf8");
cssContent = cssContent.replace(/font-size: 11px;/g, "font-size: 13px;");
fs.writeFileSync(cssPath, cssContent, "utf8");

console.log(`Bumped typography in ${changed} files and globals.css`);
