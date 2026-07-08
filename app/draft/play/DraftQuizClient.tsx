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
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="mb-12 border-b-2 border-zinc-800 pb-6">
        <div className="flex justify-between items-center mb-4 text-zinc-400 font-bold uppercase tracking-widest text-sm">
          <span>Decision {currentQuestionIdx + 1} / {questions.length}</span>
        </div>
        <div className="h-4 w-full bg-zinc-900 border-2 border-zinc-800">
          <div 
            className="h-full bg-[#D4102F] transition-all duration-300" 
            style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-[#D4102F] text-white p-6 md:p-10 mb-8 shadow-[8px_8px_0_0_rgba(255,255,255,0.1)]">
        <h1 className="text-3xl md:text-4xl font-black uppercase leading-tight tracking-tight">
          {question.text}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOptionSelect(opt.impact)}
            className="w-full text-left p-6 md:p-8 bg-black hover:bg-white hover:text-black border-2 border-zinc-800 hover:border-white transition-colors font-bold text-lg md:text-xl flex items-center gap-6 group"
          >
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 border-2 border-zinc-700 group-hover:border-black text-zinc-500 group-hover:text-black font-black text-xl transition-colors">
              {String.fromCharCode(65 + i)}
            </span>
            <span className="leading-tight">{opt.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
