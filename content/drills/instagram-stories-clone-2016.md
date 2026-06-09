---
slug: instagram-stories-clone-2016
type: historical
category: Product Strategy
year: 2016
estimatedMinutes: 15
publishedAt: '2026-08-23T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-08-26T15:00:00+00:00'
principle: Don't be too proud to steal a working format if it solves your user's exact problem.
intro: |
  It is mid-2016. You are Kevin Systrom, CEO and co-founder of Instagram. 
  
  Instagram is a massive success, but it has a growing problem: the "Highlight Reel" effect. Users are posting less frequently because they feel every photo must be picture-perfect. Meanwhile, Snapchat is exploding among teenagers. Snapchat's ephemeral "Stories" format removes the pressure of permanence, and engagement is through the roof. 
  
  Your growth team is sounding the alarm. If you don't solve the pressure of the grid, Snapchat will capture the entire next generation of social media users. You need an ephemeral format. 
  
  Your design team has proposed two options: invent a completely new, uniquely "Instagram" way to share ephemeral content, or shamelessly clone Snapchat's Stories format down to the exact circle avatars and tap-to-advance mechanics. The tech press will crucify you if you clone it, but inventing a new format risks confusing your 500 million users.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: product
    prompt: |
      Your Head of Product presents the options. "We can build 'Moments', a unique grid-based ephemeral format that stays true to our square aesthetic. Or we can just build 'Stories' exactly like Snapchat. Circles at the top of the feed." 
      
      What is your call?
    options:
      - text: "Clone Snapchat's format exactly. Call it Stories. Users already know how it works."
        leadsTo: "clone_format"
        points: 50
        rationale: "Correct. A new format would require re-educating half a billion users. Stories is not just a feature, it's a format (like the feed). When a format works, you adopt it."
      - text: "Invent a new format. We are Instagram, we don't copy. We innovate."
        leadsTo: "invent_format"
        points: 0
        rationale: "Wrong. Pride is dangerous. If you invent a new format, you introduce friction. Users will stick to what they know (Snapchat)."
  
  clone_format:
    dimension: business
    prompt: |
      You decide to clone it. The press leak happens, and TechCrunch runs a headline: "Instagram is building a shameless Snapchat clone." The internal team is demoralized. Some designers threaten to quit over the lack of originality. 
      
      How do you frame this internally to rally the company?
    options:
      - text: "Tell the team: 'Snapchat didn't invent ephemeral video, they just popularized it. Just like Facebook didn't invent the feed. We are adopting a format.'"
        leadsTo: "rally_team"
        points: 50
        rationale: "Correct. Framing it as a 'format' rather than a 'feature' changes the narrative. It's like the hashtag or the feed—everyone uses it now."
      - text: "Tell the team: 'We are at war. If we don't do this, we die. Suck it up and build.'"
        leadsTo: "war_mode"
        points: 10
        rationale: "Partial. While true, war-time CEO mode on a creative team can cause massive attrition. The 'format' framing is much more intellectually honest and palatable."

  invent_format:
    dimension: founder
    prompt: |
      You build "Moments". It's a horizontal scrolling grid of squares that disappear after 24 hours. You launch it. 
      
      Data comes back after 30 days: engagement is flat. Users are confused by the UI. Snapchat's growth accelerates. Your board is furious. What do you do?
    options:
      - text: "Swallow your pride, kill Moments, and clone Stories exactly."
        leadsTo: "rally_team"
        points: 20
        rationale: "You wasted months and lost momentum, but at least you course-corrected before it was fatal."
      - text: "Iterate on Moments. The users just need to get used to it."
        leadsTo: "death"
        points: 0
        rationale: "Fatal error. You are suffering from sunk cost fallacy. Snapchat wins."

  rally_team:
    dimension: product
    prompt: |
      The team is on board. Now you have to decide where to place Stories in the app. 
      
      The feed is sacred real estate. The design team wants to put Stories in a separate tab to keep the main feed pure. The growth team wants them at the very top of the main feed.
    options:
      - text: "Put them at the very top of the main feed. Front and center."
        leadsTo: "win"
        points: 50
        rationale: "Correct. If it's hidden in a tab, it will die. You have to force the behavior change by making it the first thing users see."
      - text: "Put them in a dedicated 'Stories' tab. Don't ruin the feed."
        leadsTo: "slow_death"
        points: 0
        rationale: "Wrong. IGTV was put in a separate tab and it failed. You have to leverage your existing feed distribution."

  war_mode:
    dimension: product
    prompt: |
      The team builds it, but moral is low. Now, placement. Where does it go?
    options:
      - text: "Top of the feed."
        leadsTo: "win"
        points: 50
        rationale: "Correct placement, even if the team is unhappy."
      - text: "Separate tab."
        leadsTo: "slow_death"
        points: 0
        rationale: "Wrong placement."

  win:
    isOutcome: true
    title: "You Won the Format War"
    body: |
      You put Stories at the top of the feed. The tech press initially mocks you, but within 8 months, Instagram Stories surpasses Snapchat's entire daily active user base. 
      
      By adopting the format and leveraging Instagram's massive existing distribution, you neutralized the biggest existential threat to the company and drove the next phase of massive growth.
  
  slow_death:
    isOutcome: true
    title: "Death by Friction"
    body: |
      You buried the feature in a tab. Users open Instagram, scroll the feed, and leave. Only 5% of users ever tap over to the Stories tab. Snapchat continues its meteoric rise, eventually overtaking Instagram in daily engagement among the core 18-24 demographic. 
  
  death:
    isOutcome: true
    title: "Pride Comes Before the Fall"
    body: |
      You refused to admit defeat. You kept iterating on a confusing format while Snapchat ate your lunch. A year later, Facebook replaces you as CEO.
---
