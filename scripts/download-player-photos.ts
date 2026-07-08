import fs from 'fs';
import path from 'path';

const players = [
  { id: "messi", query: "Lionel Messi" },
  { id: "ronaldo", query: "Cristiano Ronaldo" },
  { id: "hazard", query: "Eden Hazard" },
  { id: "palmer", query: "Cole Palmer" },
  { id: "kante", query: "N'Golo Kante" },
  { id: "kdb", query: "Kevin De Bruyne" },
  { id: "ramos", query: "Sergio Ramos" },
  { id: "muller", query: "Thomas Muller" },
  { id: "vandijk", query: "Virgil van Dijk" },
  { id: "pirlo", query: "Andrea Pirlo" },
  { id: "zlatan", query: "Zlatan Ibrahimovic" },
  { id: "bellingham", query: "Jude Bellingham" },
  { id: "modric", query: "Luka Modric" },
  { id: "haaland", query: "Erling Haaland" },
  { id: "neymar", query: "Neymar" },
  { id: "rodri", query: "Rodrigo Hernandez" },
  { id: "kane", query: "Harry Kane" },
  { id: "martinez", query: "Emiliano Martinez" },
  { id: "keane", query: "Roy Keane" },
  { id: "ronaldinho", query: "Ronaldinho" }
];

const OUT_DIR = path.join(process.cwd(), 'public', 'players');
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

async function downloadPhotos() {
  for (const p of players) {
    try {
      console.log(`Searching TheSportsDB for ${p.query}...`);
      const res = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(p.query)}`);
      const data = await res.json();
      
      const playerMatches = data.player;
      if (!playerMatches || playerMatches.length === 0) {
        console.error(`No image found for ${p.id}`);
        continue;
      }

      // Find the first matching player with a cutout or thumb
      const match = playerMatches.find((x: any) => x.strCutout || x.strThumb) || playerMatches[0];
      const imageUrl = match.strCutout || match.strThumb;

      if (!imageUrl) {
        console.error(`No image found for ${p.id}`);
        continue;
      }

      console.log(`Downloading ${imageUrl}`);
      const imgRes = await fetch(imageUrl);
      const arrayBuffer = await imgRes.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(path.join(OUT_DIR, `${p.id}.jpg`), buffer); // Keep as .jpg to avoid changing route.tsx extension
      console.log(`Saved ${p.id}.jpg`);
      await delay(1000);
    } catch (e) {
      console.error(`Error processing ${p.id}:`, e);
    }
  }
}

downloadPhotos();
