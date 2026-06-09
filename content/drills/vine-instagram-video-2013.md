---
slug: vine-instagram-video-2013
type: historical
category: Strategy
year: 2013
estimatedMinutes: 15
publishedAt: '2026-11-18T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-11-22T15:00:00+00:00'
principle: Product velocity and creator monetization trump pure product differentiation when fighting a platform war.
intro: |
  It's June 2013. You are a PM at Vine, Twitter's breakout hit app. You've popularized the 6-second looping video, and the cultural impact is massive. Creators are minting memes, and growth is vertical.
  
  But dark clouds are gathering. Rumors are swirling that Facebook-owned Instagram is about to launch video support. They have an audience of 130 million active users. You have around 13 million.
  
  Your engineering resources are constrained, and there's growing tension with the Twitter mothership about independence vs. integration. You need to make a strategic call on how to defend against the impending Instagram launch.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: product
    prompt: |
      Instagram is officially launching 15-second videos with filters. Your core product is 6 seconds, no filters, raw and authentic. What is your immediate product response?
    options:
      - text: "Stay true to 6 seconds. It's our unique constraint and breeds creativity. Focus on making creation tools better."
        leadsTo: "node_stay"
        points: 0
        rationale: "Constraint breeds creativity, but when a competitor offers 'more' to the mainstream, constraint feels like a limitation."
      - text: "Immediately expand video length to 15 seconds to match Instagram and add basic filters to retain mainstream users."
        leadsTo: "node_match"
        points: 50
        rationale: "Matching parity neutralizes the immediate switching trigger for average users."
  node_stay:
    dimension: business
    prompt: |
      You stay the course. Instagram Video launches and immediately cannibalizes your casual user growth. But your top creators are still making incredible 6-second loops. However, they are starting to ask how they can make money.
    options:
      - text: "Build a native monetization platform (rev-share, tipping, brand deals portal) immediately, even if it delays core product features."
        leadsTo: "end_survive"
        points: 100
        rationale: "Creators go where the money is. Securing the supply side is existential."
      - text: "Focus on growing the overall audience size. If we get big enough, the brands will come to them naturally."
        leadsTo: "end_die"
        points: 0
        rationale: "Hope is not a strategy. Creators need direct financial incentives to stay exclusive."
  node_match:
    dimension: business
    prompt: |
      You matched Instagram's features. It buys you some time, but Instagram's network effect is massive. Your top 6-second creators are getting courted by YouTube and Instagram, who offer monetization. How do you retain your talent?
    options:
      - text: "Build a native monetization platform immediately."
        leadsTo: "end_survive"
        points: 100
        rationale: "Creators go where the money is. Securing the supply side is existential."
      - text: "Rely on the culture. We are the cool place to be. Pay a few top creators directly out of pocket to stay."
        leadsTo: "end_stall"
        points: 50
        rationale: "A band-aid solution. It buys time but isn't scalable without a proper ad/rev-share model."
  end_survive:
    isOutcome: true
    dimension: product
    summary: |
      You prioritize creator monetization. By paying your top stars, you secure the cultural lifeblood of the app. Vine evolves into a sustainable, differentiated entertainment platform, surviving the Instagram assault by owning the professional short-form creator niche.
  end_die:
    isOutcome: true
    dimension: founder
    summary: |
      You failed to build a business model for creators. They led an exodus to YouTube and Instagram. Vine becomes a ghost town of abandoned accounts and is eventually shut down by Twitter.
  end_stall:
    isOutcome: true
    dimension: business
    summary: |
      Paying a few stars directly prevents immediate collapse, but the lack of a systemic business model means new creators churn out. The platform slowly bleeds relevance over the next two years.
---
