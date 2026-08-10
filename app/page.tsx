import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// Thin server wrapper around the homepage's client component.
//
// The homepage holds its search/filter state in the browser, so HomeClient
// is a "use client" module — and a client module cannot export metadata.
// That left the homepage as the one route on the site with no canonical:
// the root layout used to supply one, but it was removed because a layout
// canonical applies to every child page and pointed them all at "/".
//
// Declaring the canonical here fixes the homepage without touching any
// child route. Without it, every /?q=<term> search permutation is crawled
// as an unconsolidated duplicate of the homepage. Everything else (title,
// description, OG) is inherited from the root layout.
export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function Page() {
  return <HomeClient />;
}
