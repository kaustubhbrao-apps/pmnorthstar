// Shared metadata helpers.
//
// Descriptions used to be trimmed with `.slice(0, 160)` in whichever
// generateMetadata happened to build them, which cut mid-word, and was
// applied inconsistently — some routes trimmed, some didn't, and the ones
// that did were often the duplicate page-level copies that were overriding
// their layout for no good reason. One implementation, used by every layout.

const MAX_DESCRIPTION = 160;

/**
 * Collapse whitespace and clamp to what a search result will actually show,
 * cutting on a word boundary rather than mid-word. Text already within the
 * limit is returned untouched, so hand-written descriptions of a sane length
 * pass through exactly as authored.
 */
export function clampDescription(text: string | undefined | null): string {
  const s = (text ?? "").replace(/\s+/g, " ").trim();
  if (s.length <= MAX_DESCRIPTION) return s;
  const cut = s.slice(0, MAX_DESCRIPTION);
  const lastSpace = cut.lastIndexOf(" ");
  const body = cut.slice(0, lastSpace > MAX_DESCRIPTION * 0.6 ? lastSpace : MAX_DESCRIPTION);
  return `${body.replace(/[,;:.\-–—\s]+$/, "")}…`;
}

/**
 * Title field for Next's Metadata. The root layout applies a "%s | northstar"
 * template; once the natural title is long enough that a result would cut the
 * suffix off anyway, the suffix is pure waste, so switch to { absolute }.
 * Brand still appears in the URL, the OpenGraph tags and the JSON-LD.
 */
export function titleField(title: string): string | { absolute: string } {
  const SUFFIX = " | northstar";
  return title.length + SUFFIX.length > 60 ? { absolute: title } : title;
}
