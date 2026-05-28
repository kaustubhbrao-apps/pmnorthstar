// Dedicated /login route. Thin wrapper around the existing
// AuthModal so we can deep-link "Sign in to save your progress"
// CTAs and respect a ?next= param for post-login redirect.
//
// Built because SimulateIt needs a stable URL to send unauthenticated
// users to. The rest of the site uses AuthModal as a popover triggered
// from buttons; that pattern doesn't work for deep links.

import { Suspense } from "react";
import LoginPageClient from "./LoginPageClient";

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginPageClient />
    </Suspense>
  );
}
