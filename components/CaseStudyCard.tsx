"use client";

// Case-study card in the editorial vocabulary: tinted tile (date chip, circle
// arrow, headline) with the kicker + outcome caption below, and the save
// control on a quiet row under that. Used by saved/favourites, search results
// and topic pages; the big listings compose Tile/Cap directly.

import Link from "next/link";
// Type-only import: erased at compile time, so it costs the client nothing.
import type { CaseStudy } from "@/data/caseStudies";
// Value import comes from the slug leaf module, not the dataset — importing
// getCaseStudySlug from @/data/caseStudies would pull the whole ~800 KB
// array into every bundle that renders a card.
import { getCaseStudySlug } from "@/data/caseStudySlugs";
import { SmartSaveButton } from "@/components/SmartSaveButton";
import { Tile, Cap, clip, tintAt } from "@/components/Editorial";
import { photoFor } from "@/data/cardImages";

interface CaseStudyCardProps {
  study: Omit<CaseStudy, "content">;
  index?: number;
  isLoggedIn?: boolean;
  initialSaved?: boolean;
  initialLiked?: boolean;
  onAuthRequired?: () => void;
  onSavedChange?: (id: string, saved: boolean) => void;
  onLikedChange?: (id: string, liked: boolean) => void;
  hideCategory?: boolean;
}

export function CaseStudyCard({ study, index = 0, initialSaved = false, initialLiked = false }: CaseStudyCardProps) {
  const href = `/case-study/${getCaseStudySlug(study.id)}`;
  const kicker = `${study.category} · ${study.region === "India" ? "India" : study.company}`;
  const chip = initialLiked ? "♥ Liked" : initialSaved ? "Saved" : String(study.year);

  return (
    <div className="flex flex-col h-full">
      <Link href={href} className="card flex-1">
        <Tile
          tint={tintAt(index)}
          minH={300}
          chip={chip}
          title={study.title}
          size="m"
          img={photoFor([...study.tags, study.title, study.category, study.region, study.company], study.id)}
        />
        <Cap k={kicker} title={clip(study.outcome, 80)} />
      </Link>
      <div className="flex items-center justify-between pt-3 px-0.5">
        <span className="text-xs font-semibold" style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}>
          Read case study
        </span>
        <SmartSaveButton
          resource={{
            id: study.id,
            title: study.title,
            author: study.company,
            category: study.category,
            link: href,
          }}
        />
      </div>
    </div>
  );
}
