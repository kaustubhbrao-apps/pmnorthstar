---
slug: notion-pivot-2015
caseStudySlug: notion-all-in-one-workspace
type: historical
category: crisis
publishedAt: '2026-09-30T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-09-23T15:00:00+00:00'
year: 2015
estimatedMinutes: 7
principle: |
  When you're 18 months in with no PMF and the product feels wrong,
  the courageous move is to nuke what you have and rebuild on first
  principles — but only if you can name what was wrong in one
  sentence. Pivots that can't be articulated are just thrash.
intro: |
  You are the co-founder of an early-stage productivity startup, two
  years post-founding, $2M raised, four engineers including the two
  co-founders. You've shipped a v1 product — a tool that lets users
  combine notes, tasks, and databases on a single canvas. It has a
  few hundred power users who love it, but daily-active users are
  flat and signups have been steady at ~30/day for nine months.

  Your fundraise runway is six months. The product has 47 features.
  Half of them are used by under 5% of users. The codebase is a
  React-on-a-custom-renderer experiment that nobody else on the
  team fully understands except your CTO. Two power users keep
  emailing about a specific bug; you can't fix it without rewriting
  the renderer.

  Your CTO walks into your one-on-one and says: "I think we should
  throw it all away and rebuild from scratch."
nodes:
  start:
    dimension: founder
    prompt: |
      The CTO wants to rebuild. The product works for a few hundred users. Six months of runway. Pick.
    options:
      - text: Rebuild from scratch. Communicate to the team and to investors. Buy 4 more months runway by cutting headcount.
        points: 15
        pattern: nuke-and-rebuild
        rationale: |
          The courageous move when the diagnosis is correct.
        consequence: |
          You communicate the pivot to the team and investors.
        leadsTo: B-rebuild-followup
      - text: Refactor incrementally. Keep shipping features. Don't break the existing users.
        points: 6
        pattern: incremental-when-radical-needed
        rationale: |
          The defensible-looking instinct.
        consequence: |
          12 months later you've half-rebuilt the renderer and shipped 8 new features. DAU is still flat.
        leadsTo: A-refactor-crisis
      - text: Cut features aggressively. Don't rebuild. Just remove everything below 10% usage.
        points: 9
        pattern: prune-without-rebuild
        rationale: |
          Right instinct on bloat, wrong call on architecture.
        consequence: |
          Feature count drops to 12.
        leadsTo: C-feature-cut-followup
      - text: Sell the company. You have a working product and 200 paying users — find a strategic buyer.
        points: 3
        pattern: surrender-prematurely
        rationale: |
          Premature capitulation.
        consequence: |
          The acqui-hire offer arrives at $4M.
        leadsTo: D-sale-process

  B-rebuild-followup:
    dimension: product
    prompt: |
      Three months into the rebuild. The team has shipped a working prototype. Pick the launch strategy.
    options:
      - text: Invite-only beta. Personal outreach to 100 power users.
        points: 15
        pattern: deliberate-base-rebuild
        rationale: |
          The right call for a rebuilt product.
        consequence: |
          Of the 100 invited, 87 sign up.
        leadsTo: B-public-launch
      - text: Public launch on Product Hunt. Maximum surface area, fast feedback.
        points: 9
        pattern: launch-before-loop
        rationale: |
          Faster, riskier.
        consequence: |
          Launch lands on PH top 10. 2,000 signups but 40% churn.
        leadsTo: B-public-launch
      - text: Skip the launch. Quietly migrate the old users.
        points: 6
        pattern: hide-the-bet
        rationale: |
          Conservative to a fault.
        consequence: |
          The migration works but nobody outside the user base notices.
        leadsTo: B-public-launch

  B-public-launch:
    dimension: business
    prompt: |
      You are now live in the market with the new "blocks" architecture.
    options:
      - text: Focus heavily on community building, templates, and ambassadors.
        points: 15
        pattern: community-led-growth
        rationale: |
          A flexible tool needs people to show others how to use it.
        consequence: |
          Growth goes parabolic.
        leadsTo: end-B-great
      - text: Focus purely on paid ads targeting enterprise companies.
        points: 3
        pattern: wrong-gtm
        rationale: |
          The product is too horizontal for direct enterprise sales right now.
        consequence: |
          High CAC, slow growth.
        leadsTo: end-B-mixed

  A-refactor-crisis:
    dimension: founder
    prompt: |
      The incremental refactor is failing. Code is a mess. 2 months runway.
    options:
      - text: Stop feature development entirely and just try to fix the bugs.
        points: 6
        pattern: panic-fix
        rationale: |
          Too late to fix structural rot.
        consequence: |
          You fix some bugs but users still churn.
        leadsTo: A-final-call
      - text: Accept defeat and start looking for acqui-hires.
        points: 3
        pattern: give-up
        rationale: |
          You squandered your runway.
        consequence: |
          You scramble for buyers.
        leadsTo: A-final-call

  A-final-call:
    dimension: business
    prompt: |
      It's the final month.
    options:
      - text: Shut it down cleanly.
        points: 9
        pattern: clean-end
        rationale: |
          Graceful exit.
        consequence: |
          Company dies.
        leadsTo: end-A-fail
      - text: Try to raise money on a pivot story, but without having built anything new.
        points: 0
        pattern: delusion
        rationale: |
          Investors won't fund a broken product team.
        consequence: |
          You fail to raise.
        leadsTo: end-A-fail

  C-feature-cut-followup:
    dimension: product
    prompt: |
      You cut features but didn't fix the core architecture. DAU is still flat.
    options:
      - text: Finally agree to the CTO's rebuild plan.
        points: 9
        pattern: late-rebuild
        rationale: |
          You lost time, but you finally make the right call.
        consequence: |
          You have to lay off 80% of the team to get enough runway.
        leadsTo: C-runway-end
      - text: Try to market the "new, simpler" product.
        points: 0
        pattern: lipstick-on-pig
        rationale: |
          Marketing doesn't fix a broken core experience.
        consequence: |
          Marketing spend fails.
        leadsTo: C-runway-end

  C-runway-end:
    dimension: founder
    prompt: |
      Runway is almost zero.
    options:
      - text: Execute the extreme layoff and rebuild in a garage.
        points: 12
        pattern: true-grit
        rationale: |
          The founder's journey.
        consequence: |
          You survive by the skin of your teeth and rebuild.
        leadsTo: end-C-survive
      - text: Give up and shut it down.
        points: 3
        pattern: surrender
        rationale: |
          You lack the conviction to do the hard thing.
        consequence: |
          Company dies.
        leadsTo: end-C-fail

  D-sale-process:
    dimension: business
    prompt: |
      You are negotiating the $4M acqui-hire.
    options:
      - text: Push for $10M, threatening to walk away.
        points: 0
        pattern: overplay-hand
        rationale: |
          You have no leverage with 6 months runway.
        consequence: |
          Buyer walks. You have nothing.
        leadsTo: D-post-sale
      - text: Take the $4M and ensure the team gets good jobs.
        points: 9
        pattern: pragmatic-exit
        rationale: |
          Accepting the reality of your choice.
        consequence: |
          Deal closes.
        leadsTo: D-post-sale

  D-post-sale:
    dimension: founder
    prompt: |
      The aftermath.
    options:
      - text: Stay at the acquiring company for 4 years, vesting peacefully.
        points: 6
        pattern: golden-handcuffs
        rationale: |
          You chose safety.
        consequence: |
          You watch someone else build the multi-billion dollar workspace company.
        leadsTo: end-D-sold
      - text: Leave after 1 year to start a new company.
        points: 9
        pattern: serial-founder
        rationale: |
          You still have the itch.
        consequence: |
          You try again in a new space.
        leadsTo: end-D-sold

  end-B-great:
    isOutcome: true
    prompt: |
      The community-led growth on the new blocks primitive made you a $10B+ juggernaut. A legendary pivot.
  end-B-mixed:
    isOutcome: true
    prompt: |
      The wrong GTM strategy slowed you down, but the product was so good it eventually survived.
  end-A-fail:
    isOutcome: true
    prompt: |
      The incremental refactor failed. The company died quietly.
  end-C-survive:
    isOutcome: true
    prompt: |
      The late garage rebuild worked. It was insanely painful, but you built the right product eventually.
  end-C-fail:
    isOutcome: true
    prompt: |
      You cut features but didn't fix the core. The company ran out of money and died.
  end-D-sold:
    isOutcome: true
    prompt: |
      You sold the company for parts. You made some money, but left billions on the table.
---
## What actually happened

This drill is based on the **Notion 2015 rebuild**. Notion shipped
its first product in 2014 to lukewarm reception — a few hundred
power users, a complex codebase, a CTO (Simon Last) who believed
the rendering architecture was the constraint.

Ivan Zhao and Simon Last made the call to **throw the entire product
away and rebuild from scratch on a new "blocks" primitive** — the
idea that every UI element (text, image, table, database row) is
the same primitive that can nest infinitely into other blocks.

The rebuild took about 18 months. They cut the team to four people,
moved to a cheaper Bay Area apartment, and shipped quietly to a
small invite list before the public launch in 2018. Within 24
months of relaunch, Notion was the fastest-growing productivity
tool of its category.

The current Notion valuation is **$10B+** with tens of millions of
users, and the "blocks" primitive defined an entire category of
productivity tools that followed (Coda, Craft, Tana, etc.).

The lesson: when the architecture is wrong, the only honest move is
to rebuild. But only if you can name what was wrong in one
sentence first.

**Related reading:** [Notion: identity through every surface](/case-study/notion-all-in-one-workspace)
