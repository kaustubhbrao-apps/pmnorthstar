// Dedicated /login route. Thin wrapper around the existing
// AuthModal so we can deep-link "Sign in to save your progress"
// CTAs and respect a ?next= param for post-login redirect.
//
// Built because SimulateIt needs a stable URL to send unauthenticated
// users to. The rest of the site uses AuthModal as a popover triggered
// from buttons; that pattern doesn't work for deep links.

import type { Metadata } from "next";
import { Suspense } from "react";
import LoginPageClient from "./LoginPageClient";

// Auth surface, not content. Nothing here should compete in the index.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginPageClient />
    </Suspense>
  );
}
