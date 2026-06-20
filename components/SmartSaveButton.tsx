"use client";

import { useState, useEffect } from "react";
import { SaveButton } from "./SaveButton";
import { useUserState } from "@/lib/use-user-state";
import { AuthModal } from "./AuthModal";

export function SmartSaveButton({ resource }: { resource: any }) {
  const { isLoggedIn, loading } = useUserState();
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) return;
    
    let cancelled = false;
    Promise.all([
      fetch("/api/saved").then(r => r.ok ? r.json() : { items: [] }).catch(() => ({ items: [] })),
      fetch("/api/liked").then(r => r.ok ? r.json() : { items: [] }).catch(() => ({ items: [] }))
    ]).then(([sData, lData]) => {
      if (cancelled) return;
      if (sData?.items?.some((i: any) => i.resourceId === resource.id)) setSaved(true);
      if (lData?.items?.some((i: any) => i.resourceId === resource.id)) setLiked(true);
      setFetched(true);
    });

    return () => { cancelled = true; };
  }, [isLoggedIn, resource.id]);

  if (loading || (isLoggedIn && !fetched)) {
    return <div className="h-8 w-[130px] rounded-lg" style={{ background: "var(--card-border)", opacity: 0.1, animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />;
  }

  return (
    <>
      <SaveButton 
        resource={resource}
        isLoggedIn={isLoggedIn}
        initialSaved={saved}
        initialLiked={liked}
        onAuthRequired={() => setShowAuthModal(true)}
      />
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </>
  );
}
