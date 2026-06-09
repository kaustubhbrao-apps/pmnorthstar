---
slug: foursquare-swarm-split-2014
type: historical
category: Strategy
year: 2014
estimatedMinutes: 15
publishedAt: '2026-08-12T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-08-16T15:00:00+00:00'
principle: Splitting a single app into two to serve divergent use cases breaks the core habit loop that built the network.
intro: |
  It's early 2014. You are a PM at Foursquare. You have built an incredible check-in app with a strong social graph and gamification (mayorships, badges).
  
  But you have a strategic dilemma. Half your users use the app as a social radar ("where are my friends?"). The other half use it as a local search engine ("what's the best pizza nearby?"), competing with Yelp.
  
  The data shows these two use cases are diverging. The app is getting bloated. The leadership team is considering a radical move: splitting Foursquare into two separate apps. Foursquare for local search, and a new app called 'Swarm' for social check-ins.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: product
    prompt: |
      The decision is on the table. Do you unbundle the app?
    options:
      - text: "Yes, split them. Unbundling is the trend (like Facebook Messenger). We need a clean UX for local search to beat Yelp, and a dedicated app for social."
        next: "node_split"
        points: 0
        rationale: "Checking in (social) generated the data that powered the search (utility). Separating them breaks the data flywheel."
      - text: "No, keep them together. The social check-in gamification is the engine that generates the reviews and data for local search. Redesign the UI, but keep the core loop intact."
        next: "node_keep"
        points: 100
        rationale: "The utility depends on the social habit. Break the habit, lose the utility."
  node_split:
    dimension: business
    prompt: |
      You split the apps. You force users to download Swarm to check in. Users are furious about the forced migration. Check-in volume plummets. Foursquare (now just search) has no fresh data coming in.
    options:
      - text: "Reverse course immediately. Merge them back into one app and apologize to the user base."
        next: "end_reversal"
        points: 50
        rationale: "Admitting a mistake quickly can save a dying network, though the whiplash is painful."
      - text: "Hold the line. Use aggressive push notifications and cross-app promos to force users to adopt the two-app paradigm."
        next: "end_irrelevance"
        points: 0
        rationale: "You cannot force a user to adopt two apps for what used to take one. They will simply churn."
  node_keep:
    dimension: product
    prompt: |
      You keep them together. The app is heavy, but the data flywheel continues. However, Yelp is crushing you on SEO and comprehensive reviews. How do you compete in local search?
    options:
      - text: "Pivot to a B2B data play. Stop fighting Yelp for consumers. Sell our incredible location intelligence and check-in data to other enterprises (Uber, Twitter, Apple)."
        next: "end_b2b_pivot"
        points: 100
        rationale: "The consumer search war is lost to Google and Yelp. The proprietary data is where the real enterprise value lies."
      - text: "Double down on consumer gamification. Add more badges and points to drive even more reviews to beat Yelp."
        next: "end_slow_bleed"
        points: 0
        rationale: "Gamification is a novelty that fades. It won't beat Yelp's pure utility and network effects in search."
  end_reversal:
    isOutcome: true
    dimension: product
    summary: |
      You merge them back. The user base is alienated, but you stop the bleeding. The company survives, but the momentum is permanently broken, and Foursquare becomes a niche product for power users.
  end_irrelevance:
    isOutcome: true
    dimension: business
    summary: |
      Users refuse to download Swarm. Check-ins stop. Foursquare search dies without fresh data. The company fades into irrelevance in the consumer space, serving as a cautionary tale of unbundling gone wrong.
  end_b2b_pivot:
    isOutcome: true
    dimension: business
    summary: |
      By keeping the data engine intact and pivoting to B2B, Foursquare becomes the silent powerhouse of location intelligence, powering maps and features for the biggest tech giants in the world, achieving massive enterprise success.
  end_slow_bleed:
    isOutcome: true
    dimension: product
    summary: |
      More badges don't solve the core utility problem. Consumers prefer Google Maps and Yelp for finding places. The app slowly dies as the gamification novelty wears off completely.
---
