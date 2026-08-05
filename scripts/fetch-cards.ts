import fs from 'fs';
import path from 'path';
import { DRAFT_PLAYERS } from '../lib/draft/players';

const OUT_DIR = path.join(process.cwd(), 'public', 'draft-cards');
fs.mkdirSync(OUT_DIR, { recursive: true });

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

async function fetchCards() {
  for (const player of DRAFT_PLAYERS) {
    const port = process.env.PORT || 3000;
    const url = `http://localhost:${port}/api/draft/og?id=${player.id}&v=${player.stats.vision}&e=${player.stats.execution}&c=${player.stats.chaos}&d=${player.stats.defense}&f=${player.stats.flair}`;
    console.log(`Fetching ${player.name}...`);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(path.join(OUT_DIR, `${player.id}_card.png`), buffer);
      console.log(`Saved ${player.id}_card.png`);
      await delay(500);
    } catch (e) {
      console.error(`Failed to fetch ${player.id}:`, e);
    }
  }
}

fetchCards();
