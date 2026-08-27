"use client";

import { useState } from "react";
import { SaveButton } from "./SaveButton";
import { useUserStateContext } from "@/components/UserStateProvider";
import { AuthModal } from "./AuthModal";

// Reads saved/liked state from the shared provider instead of fetching it.
//
// Previously each instance fetched /api/auth/me, then /api/saved and
// /api/liked twice over (once via useUserState, once in its own effect), and
// pulled the user's entire saved and liked lists just to test one id for
// membership. With 53 of these on the homepage that was ~265 requests per
// signed-in page view. Membership is now a Set lookup against lists the
// provider fetched once.
export function SmartSaveButton({ resource }: { resource: any }) {
  const {
    loading,
    listsReady,
    isLoggedIn,
    savedIds,
    likedIds,
    markSaved,
    markLiked,
  } = useUserStateContext();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (loading || (isLoggedIn && !listsReady)) {
    return (
      <div
        className="h-8 w-[130px] rounded-lg"
        style={{
          background: "var(--card-border)",
          opacity: 0.1,
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      />
    );
  }

  return (
    <>
      <SaveButton
        resource={resource}
        isLoggedIn={isLoggedIn}
        initialSaved={savedIds.has(resource.id)}
        initialLiked={likedIds.has(resource.id)}
        onAuthRequired={() => setShowAuthModal(true)}
        onSavedChange={markSaved}
        onLikedChange={markLiked}
      />
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
}
