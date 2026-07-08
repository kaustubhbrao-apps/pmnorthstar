"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DRAFT_QUESTIONS, INITIAL_STATS } from "@/lib/draft/questions";
import { calculateClosestMatch, PlayerStatVector } from "@/lib/draft/players";

export function DraftQuizClient() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [stats, setStats] = useState<PlayerStatVector>(INITIAL_STATS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleOptionSelect = async (impact: Partial<PlayerStatVector>) => {
    const newStats = {
      vision: stats.vision + (impact.vision || 0),
      execution: stats.execution + (impact.execution || 0),
      chaos: stats.chaos + (impact.chaos || 0),
      defense: stats.defense + (impact.defense || 0),
      flair: stats.flair + (impact.flair || 0),
    };
    setStats(newStats);

    if (currentQuestionIdx < DRAFT_QUESTIONS.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setIsSubmitting(true);
      // Finish the quiz, calculate closest match, and save.
      const closestMatch = calculateClosestMatch(newStats);
      
      try {
        const res = await fetch("/api/draft/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ archetypeId: closestMatch.id, stats: newStats }),
        });
        
        if (res.ok) {
          const data = await res.json();
          router.push(`/draft/result/${closestMatch.id}?v=${newStats.vision}&e=${newStats.execution}&c=${newStats.chaos}&d=${newStats.defense}&f=${newStats.flair}`);
        } else {
          console.error("Failed to save draft attempt");
          setIsSubmitting(false);
        }
      } catch (err) {
        console.error(err);
        setIsSubmitting(false);
      }
    }
  };

  const question = DRAFT_QUESTIONS[currentQuestionIdx];

  if (isSubmitting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h2 className="text-3xl font-bold mb-4 animate-pulse">Calculating your archetype...</h2>
        <p className="text-zinc-400">Comparing your traits to the 20 legendary builders.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="mb-8">
        <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">
          Question {currentQuestionIdx + 1} of {DRAFT_QUESTIONS.length}
        </div>
        <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#D4102F] transition-all duration-300" 
            style={{ width: `${((currentQuestionIdx + 1) / DRAFT_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-10">{question.text}</h1>

      <div className="space-y-4">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOptionSelect(opt.impact)}
            className="w-full text-left p-6 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 rounded-xl transition-all font-medium text-lg"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
