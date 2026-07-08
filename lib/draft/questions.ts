export type DraftQuestion = {
  id: number;
  text: string;
  options: {
    text: string;
    impact: { vision?: number; execution?: number; chaos?: number; defense?: number; flair?: number };
  }[];
};

export const DRAFT_QUESTIONS: DraftQuestion[] = [
  {
    id: 1,
    text: "A massive bug is found 10 minutes before the biggest launch of the year. What do you do?",
    options: [
      { text: "Fix it myself instantly on production. No time for PRs.", impact: { execution: +10, chaos: +15, defense: -5 } },
      { text: "Delay the launch. We do not ship broken software.", impact: { defense: +15, chaos: -10, flair: -5 } },
      { text: "Launch anyway and write a brilliant tweet making fun of the bug.", impact: { flair: +15, chaos: +10, execution: -5 } },
      { text: "Quickly delegate the fix and oversee the hotfix deployment calmly.", impact: { vision: +10, execution: +10, defense: +5 } }
    ]
  },
  {
    id: 2,
    text: "What is your primary motivation for building?",
    options: [
      { text: "Hitting the revenue target and crushing competitors.", impact: { execution: +15, defense: +5, flair: -5 } },
      { text: "Building an elegant, perfectly architected system.", impact: { vision: +15, defense: +10, chaos: -10 } },
      { text: "Having fun, experimenting, and hacking cool things together.", impact: { flair: +15, chaos: +10, defense: -10 } },
      { text: "Empowering the rest of my team to succeed.", impact: { defense: +15, vision: +5, flair: -5 } }
    ]
  },
  {
    id: 3,
    text: "How do you handle internal processes like Jira and daily standups?",
    options: [
      { text: "I enforce them strictly. Process prevents failure.", impact: { defense: +15, chaos: -15 } },
      { text: "I ignore them completely. Let me build in peace.", impact: { flair: +10, chaos: +15, defense: -15 } },
      { text: "I tolerate them, but I do my real work in the shadows.", impact: { vision: +10, chaos: +5 } },
      { text: "I optimized them so we spend 50% less time on them.", impact: { execution: +15, vision: +10 } }
    ]
  },
  {
    id: 4,
    text: "When you present your roadmap or pitch deck...",
    options: [
      { text: "It's a cinematic masterpiece with custom animations.", impact: { flair: +15, chaos: +5 } },
      { text: "It's just a raw spreadsheet of metrics and growth curves.", impact: { execution: +15, flair: -10 } },
      { text: "It's a deep, 10-page strategic memo.", impact: { vision: +15, defense: +5 } },
      { text: "I don't pitch. I just show the working prototype.", impact: { execution: +10, defense: +10 } }
    ]
  },
  {
    id: 5,
    text: "Your competitor just launched a copycat feature. Your reaction?",
    options: [
      { text: "Start a public Twitter war and call them out.", impact: { chaos: +15, flair: +10 } },
      { text: "Ignore them. We execute faster and better anyway.", impact: { execution: +15, defense: +5 } },
      { text: "Pivot slightly to a space they can't easily follow.", impact: { vision: +15, chaos: +5 } },
      { text: "Lock down our IP and aggressively protect our current clients.", impact: { defense: +15, chaos: -5 } }
    ]
  }
];

export const INITIAL_STATS = { vision: 50, execution: 50, chaos: 50, defense: 50, flair: 50 };
