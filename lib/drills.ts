import type { Drill } from "@/data/drills";

// Words the naive slug title-caser gets wrong. It uppercased the first letter
// of every hyphen-separated token, which shipped "Ai Hiring Assessment",
// "Apple Opens Siri To Llms", "Byjus Overexpansion" and "Cursor Vs Windsurf"
// as the <title> on live, indexed pages. Brands and acronyms are spelled the
// way their owners spell them; the small words are the standard title-case
// stop list.
const EXACT: Record<string, string> = {
  ai: "AI", aeo: "AEO", geo: "GEO", api: "API", llms: "LLMs", mcp: "MCP",
  vr: "VR", dvd: "DVD", v4: "v4", vs: "vs",
  byjus: "BYJU'S", openai: "OpenAI", tiktok: "TikTok", iphone: "iPhone",
  paypal: "PayPal", youtube: "YouTube", wework: "WeWork", moviepass: "MoviePass",
  gamestop: "GameStop", blackberry: "BlackBerry", cred: "CRED",
  foursquare: "Foursquare", musically: "Musical.ly", zee: "Zee",
};

// Lowercased inside a title, never at the start.
const MINOR = new Set([
  "a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "no", "nor",
  "of", "on", "or", "the", "to", "vs", "with", "your",
]);

/**
 * Display title for a drill. Prefers an explicit `title` when the drill
 * carries one; otherwise derives a properly-cased title from the slug.
 *
 * This used to be four separate copies — app/simulate/page.tsx,
 * app/simulate/me/page.tsx, app/simulate/[slug]/page.tsx and
 * SimulatePlayer.tsx each had their own — which is how the same mangled
 * casing reached the <title>, the <h1>, the share text and the index card
 * without anyone noticing it was wrong in one place.
 */
export function drillTitle(drill: { slug: string; title?: string }): string {
  if (drill.title?.trim()) return drill.title.trim();

  const parts = drill.slug.split("-");
  return parts
    .map((word, i) => {
      const lower = word.toLowerCase();
      if (EXACT[lower]) {
        // A minor word mapping (vs) still capitalises in first position.
        return i === 0 ? cap(EXACT[lower]) : EXACT[lower];
      }
      if (/^\d+$/.test(word)) return word;
      if (i > 0 && i < parts.length - 1 && MINOR.has(lower)) return lower;
      return cap(lower);
    })
    .join(" ");
}

function cap(w: string): string {
  return w.charAt(0).toUpperCase() + w.slice(1);
}

/**
 * Meta description for a drill page. The old inline version was
 * `drill.intro.split("\n\n")[0].slice(0, 180)`, which kept the single
 * newlines inside that first paragraph — so every drill shipped a meta
 * description containing raw line breaks — and cut mid-word at 180, past
 * the ~160 chars a search result will show.
 */
export function drillDescription(drill: Pick<Drill, "intro" | "principle">): string {
  const paras = (drill.intro || "")
    .split("\n\n")
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  // Take paragraphs until there is enough to fill a result snippet. Several
  // drills open with a one-line scene-setter ("It is late 2004. You are Jeff
  // Bezos, CEO of Amazon.") — true, but 51 characters of a ~160 budget, and
  // it says nothing about the decision the drill actually poses.
  let source = "";
  for (const p of paras) {
    source = source ? `${source} ${p}` : p;
    if (source.length >= 120) break;
  }
  if (!source) source = (drill.principle || "").replace(/\s+/g, " ").trim();
  if (source.length <= 160) return source;

  const cut = source.slice(0, 160);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 100 ? lastSpace : 160).replace(/[,;:.\s]+$/, "")}…`;
}
