---
id: "dr-28"
slug: "zee-world-cup-launch-2026"
caseStudySlug: "zee-fifa-world-cup-bet"
type: "current"
category: "product"
publishedAt: "2026-05-31T19:00:00+05:30"
estimatedMinutes: 8
principle: |
  In live high-concurrency events, availability is the only feature that 
  matters. The best product decision is the one that preserves the 
  core utility for the maximum number of users, even at the cost of 
  premium polish or secondary features.
intro: |
  It's June 11, 2026. You are the Head of Product at ZEE5. 
  The FIFA World Cup opening match is ten minutes away. 
  Your dashboard shows 8M concurrent users—double your highest 
  stress test. The "Unite8" launch is on the line. 
  What is the move?
nodes:
  start:
    dimension: product
    prompt: |
      The dashboard is redlining. 8M users are hitting the 
      app simultaneously. Buffers are starting to 
      spike in Tier 2 cities. Engineering suggests three 
      emergency paths. What do you authorize?
    options:
      - text: "Downgrade all free users to 720p immediately to save bandwidth."
        points: 8
        pattern: "availability-first"
        rationale: "Live sports users value continuity over resolution. Freeing up bandwidth ensures the stream doesn't break for everyone."
        consequence: "Bandwidth usage drops by 30%. Buffering stabilizes, but Twitter/X starts complaining about quality."
        leadsTo: "ad_decision"
      - text: "Implement a 'Waitlist' for new logins until capacity clears."
        points: 4
        pattern: "protectionist"
        rationale: "Protecting the experience for those already inside is safer, but you lose the viral acquisition moment."
        consequence: "Existing users are happy, but you're being roasted for 'killing the hype' on launch night."
        leadsTo: "ad_decision"
      - text: "Disable the 6-language audio commentary and stick to English/Hindi."
        points: 6
        pattern: "resource-pruning"
        rationale: "Audio processing is cheap compared to video, but every bit of compute matters when you're redlining."
        consequence: "Minor compute savings, but you alienate the regional audiences that Zee was specifically targeting."
        leadsTo: "ad_decision"

  ad_decision:
    dimension: business
    prompt: |
      The stream is stable, but the ad-server is lagging. 
      Mid-roll ads are causing the player to hang for 
      3-5 seconds after the ad ends. It’s the 30th minute.
    options:
      - text: "Bypass ad-server. Show a static brand logo during breaks instead."
        points: 10
        pattern: "retention-first"
        rationale: "Missing an ad is a revenue loss; a hanging player is a churn event. Protect the viewing habit first."
        consequence: "Sales team is furious, but retention remains at record highs. Users praise the 'clean' experience."
        leadsTo: "final_stretch"
      - text: "Push through. The ad revenue from this match pays for the rights."
        points: 3
        pattern: "revenue-obsessed"
        rationale: "Zee needs the cash. You risk the player crashing to secure the EBITDA targets."
        consequence: "Player crashes for 1M users during a goal. The negative PR costs more than the ad revenue."
        leadsTo: "final_stretch"

  final_stretch:
    dimension: founder
    prompt: |
      It's the 85th minute. A celebrity just tweeted a 
      link to a specific highlight on your app. 2M more 
      users are flooding in *just* to see that clip. 
      The main match stream is at risk.
    options:
      - text: "Disable the 'Highlights' section temporarily. Redirect all traffic to the Live stream."
        points: 9
        pattern: "core-focus"
        rationale: "The live match is the primary 'Job to be Done.' Don't let a secondary feature kill the main engine."
        consequence: "Traffic is forced into one pipe. You survive the final whistle without a crash."
        leadsTo: "success_outcome"
      - text: "Keep both open. This is the viral moment you paid for."
        points: 5
        pattern: "growth-at-all-costs"
        rationale: "You want the new users to see the full breadth of the app, even if it's risky."
        consequence: "The app becomes sluggish. Most new users bounce before the video even loads."
        leadsTo: "partial_failure"

  success_outcome:
    isOutcome: true
    summary: |
      You survived the opening night. By prioritizing 
      availability over polish and core utility over 
      ad-revenue, you secured ZEE5's position as a 
      serious sports player. Your DAU hit an all-time 
      high, and the "Unite8" brand is the #1 trending 
      topic for the right reasons.

  partial_failure:
    isOutcome: true
    summary: |
      The app stayed up, but the friction was high. 
      By trying to have it all—ads, highlights, and 
      high-res—you gave millions of users a 
      'mediocre' first impression. You caught the 
      traffic, but the retention won't follow.
---
**Post-match analysis:**
The 2026 World Cup deal was Zee's attempt to leapfrog into the top-tier of Indian streaming. 
The technical execution of the launch night proved to be as critical as the $30M rights acquisition. 
When your DAU scales by 4x in ten minutes, your product philosophy changes from "delight" to "survival."
Zee's choice to focus on availability-first was the right technical call for a long-term brand play.
