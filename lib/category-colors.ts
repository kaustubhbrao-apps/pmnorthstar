// Canonical accent color per content category. Imported wherever a card,
// tag, or section needs a category-specific tint — keeps Product Management
// purple, Startups orange, and Management blue across the site instead of
// every tag being the same brand red.

export type CategoryColor = {
  color: string; // foreground (text + dot)
  bg: string;    // tinted background for soft pill style
  border: string; // border tint for the same pill
};

export const CATEGORY_COLORS: Record<string, CategoryColor> = {
  "Product Management": {
    color: "#9B8FFF",
    bg: "rgba(155, 143, 255, 0.12)",
    border: "rgba(155, 143, 255, 0.30)",
  },
  Startups: {
    color: "#FF6B35",
    bg: "rgba(255, 107, 53, 0.12)",
    border: "rgba(255, 107, 53, 0.30)",
  },
  Management: {
    color: "#4FC3F7",
    bg: "rgba(79, 195, 247, 0.12)",
    border: "rgba(79, 195, 247, 0.30)",
  },
  // Case-study categories — share the same palette for consistency.
  Product: {
    color: "#9B8FFF",
    bg: "rgba(155, 143, 255, 0.12)",
    border: "rgba(155, 143, 255, 0.30)",
  },
  Growth: {
    color: "#FF6B35",
    bg: "rgba(255, 107, 53, 0.12)",
    border: "rgba(255, 107, 53, 0.30)",
  },
  Strategy: {
    color: "#F5C842",
    bg: "rgba(245, 200, 66, 0.12)",
    border: "rgba(245, 200, 66, 0.30)",
  },
  Design: {
    color: "#50C878",
    bg: "rgba(80, 200, 120, 0.12)",
    border: "rgba(80, 200, 120, 0.30)",
  },
  Failure: {
    color: "#FF4B4B",
    bg: "rgba(255, 75, 75, 0.12)",
    border: "rgba(255, 75, 75, 0.30)",
  },
  // AI Decoded categories
  Agents: {
    color: "#7C3AED", // Purple
    bg: "rgba(124, 58, 237, 0.12)",
    border: "rgba(124, 58, 237, 0.30)",
  },
  "AI Launches": {
    color: "#0F9D58", // Green
    bg: "rgba(15, 157, 88, 0.12)",
    border: "rgba(15, 157, 88, 0.30)",
  },
  Careers: {
    color: "#0891B2", // Teal
    bg: "rgba(8, 145, 178, 0.12)",
    border: "rgba(8, 145, 178, 0.30)",
  },
  Models: {
    color: "#2563EB", // Blue
    bg: "rgba(37, 99, 235, 0.12)",
    border: "rgba(37, 99, 235, 0.30)",
  },
  "Search & SEO": {
    color: "#EA580C", // Orange
    bg: "rgba(234, 88, 12, 0.12)",
    border: "rgba(234, 88, 12, 0.30)",
  },
  Standards: {
    color: "#4B5563", // Gray
    bg: "rgba(75, 85, 99, 0.12)",
    border: "rgba(75, 85, 99, 0.30)",
  },
  Tooling: {
    color: "#DB2777", // Magenta
    bg: "rgba(219, 39, 119, 0.12)",
    border: "rgba(219, 39, 119, 0.30)",
  },
};

const FALLBACK: CategoryColor = {
  color: "var(--brand-primary)",
  bg: "var(--brand-soft)",
  border: "rgba(243, 18, 60, 0.30)",
};

export function getCategoryColor(category: string): CategoryColor {
  return CATEGORY_COLORS[category] ?? FALLBACK;
}

// Deterministic color picker used for any taxonomy that doesn't have a
// hand-picked entry above (AI Decoded categories, free-form tag chips
// on case study cards). Hashes the string so the same name always maps
// to the same color across the site. Brand red is reserved.
const SOLID_PALETTE = [
  "#EA580C", // orange
  "#7C3AED", // purple
  "#2563EB", // blue
  "#0F9D58", // green
  "#F59E0B", // amber
  "#0891B2", // teal
  "#DB2777", // magenta
];
export function solidColorFor(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return SOLID_PALETTE[Math.abs(hash) % SOLID_PALETTE.length];
}
