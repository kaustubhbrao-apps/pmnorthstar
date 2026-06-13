---
slug: tiktok-musically-licensing-2017
type: historical
category: Strategy
year: 2017
estimatedMinutes: 15
publishedAt: '2026-11-22T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-11-11T15:00:00+00:00'
principle: |
  In UGC media, securing foundational IP rights early is a competitive moat that prevents existential platform risk.
  Reframing your value proposition from "content consumer" to "promotional engine" is the only way to survive
  the punishing economics of the music industry.
intro: |
  It's late 2017. You are a key executive at ByteDance. You've recently acquired the lip-syncing app Musical.ly 
  for $1 billion and merged it with your own app, Douyin, to create the global powerhouse: TikTok. 
  
  The app is growing explosively. Teenagers are lip-syncing, dancing, and acting out 15-second audio clips. 
  The algorithmic feed is highly addictive, and user engagement metrics are off the charts. You have lightning 
  in a bottle.
  
  However, an existential threat is looming. Musical.ly's original, short-term music licenses with the major 
  record labels (Universal, Sony, Warner) are expiring. Furthermore, users are constantly uploading copyrighted 
  music that isn't covered by any agreement, leading to a massive backlog of DMCA takedown notices. 
  The major labels are threatening coordinated litigation that would shutter the app globally.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal. You must navigate 
  the most notoriously difficult industry on earth: the music business.
nodes:
  start:
    dimension: business
    prompt: |
      You are sitting across from the major label executives. They are demanding exorbitant, traditional 
      streaming royalties for the use of their music. They view TikTok the same way they view Spotify or 
      Apple Music: as a music consumption app. If you pay per-stream on 15-second loops that users swipe 
      through in seconds, the unit economics will bankrupt you in a month. 
      How do you negotiate?
    options:
      - text: Argue TikTok is a promotional tool, not a streaming app. Pay a flat, upfront blanket license fee.
        points: 15
        pattern: reframe-the-value-prop
        rationale: |
          Positioning TikTok as a powerful marketing engine for the labels is the only viable path. By proving 
          that TikTok breaks new artists and drives users to Spotify to listen to the full track, you can 
          justify avoiding the ruinous economics of per-stream payouts.
        consequence: |
          The labels are skeptical but greedy. They accept massive, upfront lump-sum payments for multi-year 
          blanket licenses. You secure the music without destroying your margins.
        leadsTo: node_promotional_tool
      - text: Accept per-stream royalties. The music is essential; without it, the app dies immediately.
        points: 0
        pattern: margin-destruction
        rationale: |
          Accepting per-stream royalties on short-form video is financial suicide. A user might swipe through 
          100 videos in 10 minutes. Paying a fraction of a cent 100 times for partial song plays will obliterate 
          any advertising revenue you could ever generate.
        consequence: |
          You sign the deal. The app stays live, but the first royalty bill arrives and it exceeds your entire 
          annual revenue projection. You are bleeding cash.
        leadsTo: node_per_stream
      - text: Refuse the labels. Build a purely royalty-free library and ban major label music entirely.
        points: 3
        pattern: cultural-irrelevance
        rationale: |
          While financially prudent, this ignores the core product loop. The viral dances and trends are built 
          on recognizable pop culture. A sterile library of elevator music will instantly kill the app's appeal 
          to teenagers.
        consequence: |
          You pull all major label music. The creators revolt. Growth flatlines, and users migrate back to 
          Instagram and Snapchat.
        leadsTo: end_cultural_irrelevance

  node_per_stream:
    dimension: product
    prompt: |
      You agreed to per-stream royalties. The bills are astronomical. ByteDance leadership is furious. 
      To offset costs and avoid immediate bankruptcy, you need to monetize the platform aggressively and instantly. 
      What's your product move?
    options:
      - text: Insert unskippable pre-roll video ads before every 3rd TikTok.
        points: 0
        pattern: user-experience-destruction
        rationale: |
          Pre-roll ads absolutely destroy the hyper-fast swipe mechanics of the 'For You' page. The magic of 
          TikTok is the frictionless dopamine loop. Adding friction kills the loop.
        consequence: |
          Engagement plummets. Users abandon TikTok for Instagram, which is just launching Reels.
        leadsTo: end_preroll_death
      - text: Launch a premium tier where users pay $5/month to use popular music, leaving free users with generic tracks.
        points: 3
        pattern: gating-creation
        rationale: |
          Gating core creation tools stifles the UGC (User Generated Content) flywheel. The 99% of users who 
          don't pay will stop creating, starving the algorithm of the content needed to entertain the viewers.
        consequence: |
          Creation plummets by 80%. The feed becomes filled with royalty-free music and boring content. The 
          app loses its cultural relevance.
        leadsTo: end_premium_death

  node_promotional_tool:
    dimension: product
    prompt: |
      You secured the flat-fee blanket licenses by proving TikTok makes songs go viral. The core app is safe. 
      However, a new behavior is emerging: users are uploading custom, unlicensed audio (like dialogue from 
      movies, obscure remixes, or funny voiceovers). 
      These sounds often go viral, but they exist in a legal gray area and copyright holders are complaining. 
      How do you handle this?
    options:
      - text: Implement a strict Content ID system that automatically mutes or deletes any video with unrecognized audio.
        points: 0
        pattern: sterile-compliance
        rationale: |
          Over-aggressive takedowns kill the remix culture that makes TikTok unique. The platform thrives on 
          chaotic, unpredictable, user-generated weirdness. Muting it sanitizes the app to death.
        consequence: |
          The platform becomes sterile. Users get frustrated as their creative edits are muted. The meme culture 
          is crushed.
        leadsTo: end_content_id_death
      - text: Build an 'Original Audio' feature allowing sounds to be extracted, renamed, and reused as templates by others.
        points: 15
        pattern: productizing-memes
        rationale: |
          This is a masterstroke. By productizing the audio itself, you turn a single soundbite into a viral 
          template. You embrace the remix culture and deal with copyright claims on a case-by-case basis later, 
          prioritizing growth over perfect compliance.
        consequence: |
          'Original Audio' becomes the defining characteristic of TikTok. Sounds themselves become memes. 
          The culture explodes.
        leadsTo: node_competitor_response

  node_competitor_response:
    dimension: founder
    prompt: |
      TikTok is now a cultural leviathan. But the giants have awoken. Facebook launches Instagram Reels, 
      directly cloning your UI. Furthermore, smaller competitors like Triller are offering massive, multi-million 
      dollar upfront cash contracts to poach your top creators (like Charli D'Amelio and Addison Rae). 
      How do you defend the creator ecosystem?
    options:
      - text: Launch a massive $1 Billion 'Creator Fund' to pay users directly based on views.
        points: 12
        pattern: supply-side-subsidy
        rationale: |
          You must secure the supply side of your marketplace. The Creator Fund wasn't perfect, but it signaled 
          to the ecosystem that TikTok was willing to pay to retain talent, neutralizing the immediate threat 
          of poaching.
        consequence: |
          The Creator Fund generates massive goodwill. Most top creators stay on TikTok, treating Reels as a 
          secondary distribution channel.
        leadsTo: end_total_victory
      - text: Ignore the poaching. Our algorithm is superior. If top creators leave, the algorithm will instantly mint new ones.
        points: 6
        pattern: algorithm-hubris
        rationale: |
          While the TikTok algorithm is indeed powerful enough to mint new stars, losing the biggest names to 
          a direct competitor provides them with the cultural legitimacy they desperately need. It's too risky.
        consequence: |
          Some top stars leave. Reels gains early traction. You eventually have to build monetization tools anyway, 
          but you lose crucial momentum.
        leadsTo: end_messy_survival

  end_cultural_irrelevance:
    isOutcome: true
    prompt: |
      Without major label music, TikTok became just another video app. It failed to capture the cultural zeitgeist 
      and was eventually shut down by ByteDance.
      
      Score: 20/100
      You protected the balance sheet but killed the product.

  end_preroll_death:
    isOutcome: true
    prompt: |
      The pre-roll ads destroyed the frictionless swipe experience. The app became unuseable, and Instagram Reels 
      easily swallowed your user base.
      
      Score: 0/100
      You misunderstood the core UX loop of your own product.

  end_premium_death:
    isOutcome: true
    prompt: |
      Gating creation behind a paywall killed the supply of content. The app withered away.
      
      Score: 10/100
      You treated a UGC platform like a traditional software SaaS product.

  end_content_id_death:
    isOutcome: true
    prompt: |
      The strict copyright enforcement crushed the remix culture. The chaotic energy that defined Musical.ly 
      was lost, and growth flatlined.
      
      Score: 20/100
      You prioritized compliance over culture.

  end_messy_survival:
    isOutcome: true
    prompt: |
      You survived the label negotiations, but by refusing to pay creators directly, you allowed Instagram Reels 
      to establish a strong foothold. The platform war drags on indefinitely.
      
      Score: 60/100
      You won the music battle but misplayed the creator war.

  end_total_victory:
    isOutcome: true
    prompt: |
      By negotiating flat-fee licenses, productizing 'Original Audio', and launching the Creator Fund, TikTok 
      secured its position as the dominant cultural force of the decade. 
      
      Score: 100/100
      You successfully navigated the music industry, embraced chaotic UGC culture, and aggressively defended 
      your creator supply.

---
## What actually happened — the reveal

This drill is based on the critical period in 2017-2018 when ByteDance acquired Musical.ly and merged it into TikTok.

Musical.ly had built a massive audience on the back of lip-syncing to copyrighted music, but their licenses with 
the major record labels were tenuous and expiring. The labels saw an opportunity to squeeze ByteDance for 
per-stream royalties, which would have instantly bankrupted the short-form video platform due to the sheer volume 
of rapid video swipes.

ByteDance executives executed a masterful negotiation strategy: they successfully reframed TikTok not as a music 
streaming service, but as the most powerful promotional tool in the history of the music industry. They proved 
with data that TikTok trends directly caused songs to rocket up the Billboard charts and Spotify playlists. 
Because of this, they were able to negotiate massive, upfront "blind" blanket licenses, avoiding per-stream 
economics. 

Furthermore, TikTok embraced the chaotic nature of user-generated audio. Instead of aggressively policing 
copyrighted dialogue or remixes, they built the "Original Audio" feature, allowing any sound to become a viral 
template. This productized the meme format itself.

When competitors like Instagram (with Reels) and Triller attempted to poach their top creators with cash, TikTok 
responded by establishing the $1 Billion Creator Fund. While the fund was later criticized for its payout structure, 
at the time it was a decisive strategic move that signaled to creators that TikTok was willing to pay to keep 
them, effectively neutralizing the immediate exodus.

TikTok successfully navigated the legal minefield of the music industry to become the defining cultural app of 
its generation.
