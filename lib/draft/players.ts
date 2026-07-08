export type PlayerStatVector = {
  vision: number;
  execution: number;
  chaos: number;
  defense: number;
  flair: number;
};

export type PlayerArchetype = {
  id: string;
  name: string;
  archetype: string;
  description: string;
  image: string; // fallback
  stats: PlayerStatVector;
};

export const DRAFT_PLAYERS: PlayerArchetype[] = [
  { id: "messi", name: "Lionel Messi", archetype: "The Visionary", description: "You see the entire board. You connect teams effortlessly and deliver elegant solutions.", image: "messi.png", stats: { vision: 99, execution: 95, chaos: 50, defense: 30, flair: 98 } },
  { id: "ronaldo", name: "Cristiano Ronaldo", archetype: "The Obsessive Finisher", description: "Pure execution. You are obsessed with the final metric and outworking everyone else.", image: "ronaldo.png", stats: { vision: 80, execution: 99, chaos: 40, defense: 30, flair: 90 } },
  { id: "hazard", name: "Eden Hazard", archetype: "The Maverick Genius", description: "Allergic to Jira and process. You ship brilliant features purely on vibes and natural talent.", image: "hazard.png", stats: { vision: 90, execution: 85, chaos: 85, defense: 20, flair: 99 } },
  { id: "palmer", name: "Cole Palmer", archetype: "The Ice-Cold Closer", description: "Cold Palmer. Zero panic during a crisis. You step up and deliver when the stakes are highest.", image: "palmer.png", stats: { vision: 88, execution: 92, chaos: 40, defense: 50, flair: 88 } },
  { id: "kante", name: "N'Golo Kanté", archetype: "The 10x Generalist", description: "You cover every inch of the pitch. Code, support, sales—you do all the dirty work humbly.", image: "kante.png", stats: { vision: 75, execution: 95, chaos: 30, defense: 99, flair: 50 } },
  { id: "kdb", name: "Kevin De Bruyne", archetype: "The Master Architect", description: "The highly technical PM. You engineer perfect systems and deliver flawless specs.", image: "kdb.png", stats: { vision: 98, execution: 90, chaos: 30, defense: 60, flair: 85 } },
  { id: "ramos", name: "Sergio Ramos", archetype: "The Wartime Founder", description: "Aggressive and ruthless. You thrive in conflict and will fight anyone to win the market.", image: "ramos.png", stats: { vision: 70, execution: 85, chaos: 90, defense: 95, flair: 60 } },
  { id: "muller", name: "Thomas Müller", archetype: "The Raumdeuter", description: "The Growth Hacker. You find weird loopholes and spaces in the market nobody else sees.", image: "muller.png", stats: { vision: 95, execution: 88, chaos: 70, defense: 60, flair: 70 } },
  { id: "vandijk", name: "Virgil van Dijk", archetype: "The Unshakeable Anchor", description: "The Staff Engineer. Absolute stability. As long as you're there, the servers don't crash.", image: "vandijk.png", stats: { vision: 75, execution: 85, chaos: 20, defense: 99, flair: 55 } },
  { id: "pirlo", name: "Andrea Pirlo", archetype: "The Elegant Strategist", description: "Deep, slow thinker. You don't hustle; you move the market with one perfect whitepaper.", image: "pirlo.png", stats: { vision: 98, execution: 75, chaos: 20, defense: 50, flair: 90 } },
  { id: "zlatan", name: "Zlatan Ibrahimović", archetype: "The Ego-Marketer", description: "Loud, brash personal brand. You talk a massive game and somehow actually back it up.", image: "zlatan.png", stats: { vision: 80, execution: 92, chaos: 85, defense: 40, flair: 95 } },
  { id: "bellingham", name: "Jude Bellingham", archetype: "The Prodigy", description: "Infuriatingly good at everything. Design, code, sales, leadership—you have it all.", image: "bellingham.png", stats: { vision: 88, execution: 90, chaos: 60, defense: 85, flair: 92 } },
  { id: "modric", name: "Luka Modrić", archetype: "The Timeless Veteran", description: "The 3x exited founder. You have seen every cycle, never panic, and ship with perfect grace.", image: "modric.png", stats: { vision: 96, execution: 85, chaos: 30, defense: 75, flair: 90 } },
  { id: "haaland", name: "Erling Haaland", archetype: "The Algorithmic Machine", description: "Optimized strictly for conversion. You are a robot designed to hit KPIs flawlessly.", image: "haaland.png", stats: { vision: 70, execution: 99, chaos: 40, defense: 30, flair: 75 } },
  { id: "neymar", name: "Neymar Jr.", archetype: "The Flashy Presenter", description: "Incredible pitch decks and demos. Entertaining and raises millions, but highly chaotic.", image: "neymar.png", stats: { vision: 90, execution: 80, chaos: 95, defense: 20, flair: 99 } },
  { id: "rodri", name: "Rodri", archetype: "The Invisible Engine", description: "The backend dev holding the entire company together while getting zero press coverage.", image: "rodri.png", stats: { vision: 90, execution: 95, chaos: 20, defense: 95, flair: 60 } },
  { id: "kane", name: "Harry Kane", archetype: "The Reliable Workhorse", description: "Consistently hits targets every quarter. Loyal, hardworking, and deeply dependable.", image: "kane.png", stats: { vision: 85, execution: 95, chaos: 20, defense: 40, flair: 75 } },
  { id: "martinez", name: "Emi Martínez", archetype: "The Chaotic Shield", description: "The crisis manager. You embrace the toxicity of the market and play mind games to win.", image: "martinez.png", stats: { vision: 60, execution: 80, chaos: 99, defense: 90, flair: 80 } },
  { id: "keane", name: "Roy Keane", archetype: "The Demanding Manager", description: "Ruthless manager. Demands perfection, accepts zero excuses, and hates broken builds.", image: "keane.png", stats: { vision: 70, execution: 85, chaos: 85, defense: 90, flair: 40 } },
  { id: "ronaldinho", name: "Ronaldinho", archetype: "The Joyful Hacker", description: "Builds purely for fun. Smiling while shipping, open-source contributor, loves the game.", image: "ronaldinho.png", stats: { vision: 95, execution: 80, chaos: 80, defense: 30, flair: 99 } },
];

export function calculateClosestMatch(userStats: PlayerStatVector): PlayerArchetype {
  let closestPlayer = DRAFT_PLAYERS[0];
  let minDistance = Infinity;

  for (const player of DRAFT_PLAYERS) {
    const distance =
      Math.abs(userStats.vision - player.stats.vision) +
      Math.abs(userStats.execution - player.stats.execution) +
      Math.abs(userStats.chaos - player.stats.chaos) +
      Math.abs(userStats.defense - player.stats.defense) +
      Math.abs(userStats.flair - player.stats.flair);

    if (distance < minDistance) {
      minDistance = distance;
      closestPlayer = player;
    }
  }

  return closestPlayer;
}
