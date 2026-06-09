---
slug: tiktok-musically-licensing-2017
type: historical
category: Strategy
year: 2017
estimatedMinutes: 15
publishedAt: '2026-10-25T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-10-28T15:00:00+00:00'
principle: In UGC media, securing foundational IP rights early is a competitive moat that prevents existential platform risk.
intro: |
  It's late 2017. You are a key executive at ByteDance. You've recently acquired Musical.ly for $1 billion and merged it with your own app, Douyin, to create the global version: TikTok. 
  
  The app is growing explosively, fueled by teenagers lip-syncing and dancing to 15-second audio clips. The algorithmic feed is addictive, and user engagement is off the charts.
  
  However, there's a massive, existential threat looming. Musical.ly's original music licenses with the major record labels (Universal, Sony, Warner) were short-term and are expiring. Furthermore, users are uploading copyrighted music that isn't covered, leading to rampant DMCA takedown notices. The major labels are threatening to sue the platform into oblivion.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: business
    prompt: |
      The major labels are demanding exorbitant, traditional streaming royalties (like Spotify pays) for the use of their music, arguing TikTok is a music consumption app. How do you negotiate?
    options:
      - text: "Argue TikTok is a promotional tool, not a streaming app. Pay a flat, upfront blanket license fee, refusing per-stream royalties."
        next: "node_promotional_tool"
        points: 50
        rationale: "Positioning TikTok as a powerful marketing engine for the labels allowed ByteDance to avoid the ruinous economics of per-stream payouts."
      - text: "Accept per-stream royalties. The music is essential; without it, the app dies. Pass the cost to creators eventually."
        next: "node_per_stream"
        points: 0
        rationale: "Accepting per-stream royalties on short-form video would have destroyed the company's margins and stunted growth."
        
  node_per_stream:
    dimension: product
    prompt: |
      You agreed to per-stream royalties. The bills are astronomical. To offset costs, you need to monetize aggressively. What's your product move?
    options:
      - text: "Insert unskippable pre-roll ads before every video."
        next: "node_preroll_ads"
        points: 0
        rationale: "Pre-roll ads would absolutely destroy the hyper-fast swipe mechanics of the 'For You' page."
      - text: "Launch a premium tier where users pay $5/month to use popular music."
        next: "node_premium_music"
        points: 10
        rationale: "Gating core creation tools stifles UGC growth, though it might save some cash."
        
  node_promotional_tool:
    dimension: product
    prompt: |
      You secured the flat-fee blanket licenses by proving TikTok makes songs go viral. Now, how do you handle user-generated, unlicensed audio (like remixes or TV show clips) to avoid future copyright strikes while keeping the platform creative?
    options:
      - text: "Implement a strict Content ID system that automatically mutes or deletes any video with unrecognized audio."
        next: "node_strict_content_id"
        points: 0
        rationale: "Over-aggressive takedowns kill the remix culture that makes TikTok unique."
      - text: "Build an 'Original Audio' feature allowing users to upload custom sounds, while aggressively striking deals with independent distributors."
        next: "node_original_audio"
        points: 50
        rationale: "Embracing 'Original Audio' created a new cultural paradigm, making sounds themselves viral templates."
        
  node_preroll_ads:
    isOutcome: true
    prompt: "The fast-paced, addictive nature of the feed is ruined. Users abandon TikTok for Instagram, which is launching Reels. TikTok fades into obscurity."
    
  node_premium_music:
    isOutcome: true
    prompt: "Creation plummets. Only a small fraction of users pay, and the feed becomes filled with royalty-free elevator music. The app loses its cultural relevance."
    
  node_original_audio:
    isOutcome: true
    prompt: "The 'Original Audio' feature becomes the defining characteristic of TikTok. Sounds become memes. The music industry relies on you for hits, giving you infinite leverage. TikTok dominates global culture."
    
  node_strict_content_id:
    isOutcome: true
    prompt: "The platform becomes sterile. The chaotic, remix-heavy meme culture that defined Musical.ly is crushed. Growth flatlines."
---
