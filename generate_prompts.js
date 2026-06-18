const fs = require('fs');

const schedule = fs.readFileSync('/Users/Amber_User/.gemini/antigravity-cli/brain/2bcba104-56eb-4d6a-9ff6-8495c56f21a9/instagram_reels_schedule.md', 'utf-8');

const regex = /\*\*([^*]+)\*\*(?:\s*\*\s*\*\*Hook:\*\*\s*"([^"]+)")?/g;
let match;
const prompts = [];

prompts.push("# Simulation League: Video Prompts Distribution Playbook");
prompts.push("\n> This document contains the exact prompts to feed into your AI video generator or provide to your motion designer to produce the 'Kumar Method' style reels for the entire schedule.");

const basePrompt = `**CONTEXT:**
I want to generate a 15-20 second high-impact, fast-paced motion graphics promotional video for "Simulation League by northstar". "Simulation League" is a competitive, interactive training tool for product managers, founders, and tech operators. Instead of just reading case studies, users "play" through branching, choose-your-own-adventure style drills based on historic business decisions.

**CRITICAL VIBE & AESTHETIC (The "Kumar Method" Style):**
Do NOT use messy or glitchy hacker effects. The aesthetic must be ultra-premium, highly polished, and cinematic—mimicking the viral Instagram style of high-budget "finance bro" edits (like @thekumarmethod). It should feel like a luxury car commercial mixed with a high-stakes e-sports tournament. Strictly clean, vector-style graphics, deep blacks, high-contrast brand red (#F3123C) and clean typography (Space Grotesk). Fast kinetic typography, smooth easing, and deep bass sound design.

**SCENE BY SCENE SCRIPT:**`;

const lines = schedule.split('\n');
let currentDay = '';
for (let i = 0; i < lines.length; i++) {
  let line = lines[i].trim();
  if (line.startsWith('**Day') || line.startsWith('**Matchday')) {
    let title = line.replace(/\*\*/g, '');
    let hook = '';
    let isMatchday = line.startsWith('**Matchday');
    
    // Find hook in next lines
    for (let j = i + 1; j < i + 3 && j < lines.length; j++) {
      if (lines[j].includes('**Hook:**')) {
        hook = lines[j].split('**Hook:**')[1].trim().replace(/"/g, '');
        break;
      }
    }
    
    if (!hook && isMatchday) {
      let scenarioName = title.split(': ')[1] || title;
      hook = `Could you have survived the ${scenarioName} crisis?`;
    }
    
    if (hook) {
      prompts.push(`\n## ${title}`);
      prompts.push(`\n${basePrompt}`);
      prompts.push(`\n- **0:00 - 0:03 (The Hook):** Text on screen: "${hook}" in massive, kinetic typography. Quick snap cuts. Dark background, glowing red accents.`);
      prompts.push(`- **0:03 - 0:08 (The Tension):** Show an animated UI of a branching decision tree. The camera swoops through the nodes. "Make the wrong call, lose the company."`);
      
      if (isMatchday) {
        let matchNum = title.split(' ')[1];
        prompts.push(`- **0:08 - 0:12 (The Stakes):** "Welcome to Matchday ${matchNum}." Show 4 scoring dimensions building up (Product, Business, Strategy, Founder). `);
      } else {
        prompts.push(`- **0:08 - 0:12 (The Stakes):** "Welcome to the Pre-Season." Show the leaderboard ranking ticking upward rapidly.`);
      }
      prompts.push(`- **0:12 - 0:15 (The CTA):** Screen flashes white, then cuts to the northstar logo. "Play now at pmnorthstar.in". Boom sound effect.`);
    }
  }
}

fs.writeFileSync('/Users/Amber_User/.gemini/antigravity-cli/brain/2bcba104-56eb-4d6a-9ff6-8495c56f21a9/Distribution_Playbook.md', prompts.join('\n'));
