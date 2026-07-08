"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DRAFT_QUESTIONS, INITIAL_STATS } from "@/lib/draft/questions";
import { calculateClosestMatch, PlayerStatVector } from "@/lib/draft/players";

export function DraftQuizClient() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [stats, setStats] = useState<PlayerStatVector>(INITIAL_STATS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questions, setQuestions] = useState(DRAFT_QUESTIONS);
  const router = useRouter();

  useEffect(() => {
    const shuffled = [...DRAFT_QUESTIONS].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
  }, []);

  const handleOptionSelect = async (impact: Partial<PlayerStatVector>) => {
    const newStats = {
      vision: stats.vision + (impact.vision || 0),
      execution: stats.execution + (impact.execution || 0),
      chaos: stats.chaos + (impact.chaos || 0),
      defense: stats.defense + (impact.defense || 0),
      flair: stats.flair + (impact.flair || 0),
    };
    setStats(newStats);

    if (currentQuestionIdx < questions.length - 1) {
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

  const question = questions[currentQuestionIdx];

  if (isSubmitting || !question) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h2 className="text-3xl font-bold mb-4 animate-pulse">Calculating your archetype...</h2>
        <p className="text-zinc-400">Comparing your traits to the 20 legendary builders.</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-full">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-[#D4102F] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto py-12 px-6 relative z-10">
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-[0.2em]">
              Decision {currentQuestionIdx + 1}
            </div>
            <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-[0.2em]">
              {questions.length - (currentQuestionIdx + 1)} Remaining
            </div>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-[#D4102F] to-orange-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(212,16,47,0.5)]" 
              style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="p-8 md:p-12 rounded-2xl bg-[#0a0a0a] border border-white/5 shadow-2xl relative overflow-hidden mb-8 group transition-all duration-300 hover:border-white/10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4102F] via-orange-500 to-[#D4102F] opacity-50" />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-snug tracking-tight text-white mb-2">
            {question.text}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleOptionSelect(opt.impact)}
              className="relative w-full text-left p-6 md:p-8 bg-[#111] hover:bg-[#151515] border border-white/5 hover:border-[#D4102F]/50 rounded-xl transition-all duration-300 font-medium text-lg text-zinc-300 hover:text-white group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4102F]/0 to-[#D4102F]/0 group-hover:from-[#D4102F]/5 group-hover:to-transparent transition-colors duration-500" />
              <div className="relative z-10 flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-xs font-mono group-hover:border-[#D4102F] group-hover:text-[#D4102F] transition-colors duration-300 flex-shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="leading-relaxed">{opt.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
