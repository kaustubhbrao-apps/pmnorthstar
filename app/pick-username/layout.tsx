import type { Metadata } from "next";

// page.tsx is a client component, so its noindex has to live here.
// Username selection is a step inside the auth flow, not a page that
// should ever be a search result.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PickUsernameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
