---
slug: razorpay-api-pivot-2014
caseStudySlug: razorpay-pivot-fintech
type: historical
category: pivots
publishedAt: '2026-10-21T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-10-14T15:00:00+00:00'
year: 2014
estimatedMinutes: 7
principle: |
  In regulated markets, the pivot signal isn't always weak metrics —
  sometimes it's that you discover the real product after talking to
  the people you thought were your competitors. Listen carefully when
  someone says "the real problem is one level deeper than what you're
  solving."
intro: |
  You are one of two co-founders of a fintech startup in India. You
  spent the first 18 months building a peer-to-peer payments app —
  imagine Venmo for India, before UPI existed. Adoption is real but
  slow; growth is constrained by the friction of bank-to-bank
  transfers (which take 2-3 days to settle in 2014).

  In Y Combinator interviews and during early investor calls, every
  smart person you talk to asks the same thing: "Why are you building
  a consumer product when the payments infrastructure underneath is
  broken? Most businesses in India can't accept online payments
  reliably. Why aren't you solving that?"

  Your bank account: ₹40 lakh ($60K) of personal savings. Your team:
  two engineers and the two of you. The bank-API integrations you've
  built for the consumer product could, in theory, be packaged as
  payment APIs for businesses.
nodes:
  start:
    dimension: founder
    prompt: |
      The consumer app has 2K users and is growing slowly. Every investor is asking why you're not building B2B payments. Runway is 6 months.
    options:
      - text: Stay the course on the consumer app. UPI is coming.
        points: 3
        pattern: wait-for-the-platform
        rationale: |
          Betting on government infrastructure to fix your product is dangerous.
        consequence: |
          Six months pass. UPI hasn't shipped.
        leadsTo: A-consumer-followup
      - text: Pivot to B2B payment APIs. Build for the businesses that can't accept online payments.
        points: 15
        pattern: pivot-to-the-real-problem
        rationale: |
          The right call. The B2B opportunity is a validated demand.
        consequence: |
          You spend three months building the API.
        leadsTo: B-api-followup
      - text: 'Hybrid: keep the consumer app, ship the B2B API as a side product.'
        points: 6
        pattern: half-pivot
        rationale: |
          Trying to honor sunk cost while chasing the new opportunity.
        consequence: |
          The team is split.
        leadsTo: C-hybrid-followup
      - text: Sell what you have to a fintech in the consumer-payments space.
        points: 6
        pattern: graceful-exit-then-restart
        rationale: |
          Premature.
        consequence: |
          Acqui-hire closes at ₹2 crore (~$300K).
        leadsTo: D-sell-followup

  A-consumer-followup:
    dimension: founder
    prompt: |
      You stayed the course. You have 1 month of runway left. UPI is still not here.
    options:
      - text: Max out personal credit cards to keep the servers running another 3 months.
        points: 0
        pattern: personal-ruin
        rationale: |
          Never put personal ruin on the line for a business with no PMF.
        consequence: |
          You go into deep personal debt.
        leadsTo: A-desperation
      - text: Shut down the company and look for jobs.
        points: 6
        pattern: accept-defeat
        rationale: |
          The logical conclusion of running out of money without PMF.
        consequence: |
          The company dies quietly.
        leadsTo: A-desperation

  A-desperation:
    dimension: founder
    prompt: |
      It's over. What is your final action?
    options:
      - text: Open source the consumer app code before leaving.
        points: 9
        pattern: community-good
        rationale: |
          Good karma, though the code is tied to old banking infrastructure.
        consequence: |
          A few developers star it on GitHub.
        leadsTo: end-A-oss
      - text: Just close the laptops and walk away.
        points: 3
        pattern: burnout
        rationale: |
          Understandable exhaustion.
        consequence: |
          You take a long vacation.
        leadsTo: end-A-fail

  B-api-followup:
    dimension: business
    prompt: |
      Six months into the pivot. ~50 merchants live. What is your product focus?
    options:
      - text: Build the no-code version for small merchants.
        points: 15
        pattern: small-merchants-as-distribution
        rationale: |
          Right call for early-stage compounding.
        consequence: |
          No-code embed ships in 8 weeks. Merchant count crosses 1,000.
        leadsTo: B-scale-strategy
      - text: Custom rates and features for big merchants first.
        points: 9
        pattern: enterprise-first-too-soon
        rationale: |
          Slower compounding.
        consequence: |
          Two big merchants sign. Long-tail growth slows.
        leadsTo: B-scale-strategy
      - text: Stay focused on the current 50 merchants. Stabilize the product.
        points: 6
        pattern: stabilize-when-momentum-matters
        rationale: |
          Defensive when the moment calls for offense.
        consequence: |
          Stable product, slow growth.
        leadsTo: B-scale-strategy

  B-scale-strategy:
    dimension: product
    prompt: |
      You are at the next inflection point. A competitor is copying your API docs. How do you defend your moat?
    options:
      - text: Expand the product suite into payroll and corporate cards (Neo-banking).
        points: 15
        pattern: expand-the-surface
        rationale: |
          Once you have the payments flow, you can own all money movement for the business.
        consequence: |
          You become an indispensable financial OS.
        leadsTo: end-B-great
      - text: Focus purely on having the lowest transaction fees in the market.
        points: 6
        pattern: commodity-race
        rationale: |
          Payments is a scale game, but racing to zero fee kills your margin.
        consequence: |
          You win merchants but struggle to hit profitability.
        leadsTo: end-B-mixed

  C-hybrid-followup:
    dimension: product
    prompt: |
      The hybrid approach is failing. Both products are buggy. Team is burning out.
    options:
      - text: Finally kill the consumer app. Shift 100% to B2B.
        points: 9
        pattern: delayed-commitment
        rationale: |
          Better late than never.
        consequence: |
          You regain focus, but a competitor has a 6-month head start.
        leadsTo: C-forced-choice
      - text: Continue trying to raise a Series A on the combined "ecosystem" story.
        points: 0
        pattern: delusion
        rationale: |
          Investors see through the lack of focus.
        consequence: |
          Every VC passes.
        leadsTo: C-forced-choice

  C-forced-choice:
    dimension: founder
    prompt: |
      You have one last chance to salvage the company.
    options:
      - text: Acqui-hire the team to a larger bank.
        points: 3
        pattern: surrender
        rationale: |
          Admitting defeat.
        consequence: |
          You join a bank's innovation lab.
        leadsTo: end-C-bank
      - text: Do a massive layoff and rebuild the B2B side with a skeleton crew.
        points: 9
        pattern: hard-reset
        rationale: |
          Painful but gives you a real chance at the true market.
        consequence: |
          You survive, but the journey is brutal.
        leadsTo: end-C-survive

  D-sell-followup:
    dimension: founder
    prompt: |
      You sold the company for $300K. You have some cash. What next?
    options:
      - text: Take 6 months off to rest.
        points: 6
        pattern: rest-and-vest
        rationale: |
          Reasonable, but you miss the B2B window.
        consequence: |
          The market explodes without you.
        leadsTo: D-new-start
      - text: Immediately start a new B2B payments company.
        points: 9
        pattern: serial-founder
        rationale: |
          You realize your mistake and try to re-enter.
        consequence: |
          You have to rebuild all the tech from scratch.
        leadsTo: D-new-start

  D-new-start:
    dimension: business
    prompt: |
      You are starting over.
    options:
      - text: Go through Y Combinator again with the new B2B idea.
        points: 12
        pattern: leverage-network
        rationale: |
          YC loves pivot stories and serial founders.
        consequence: |
          You get funded and build a strong competitor.
        leadsTo: end-D-rebound
      - text: Bootstrap the new company.
        points: 6
        pattern: slow-build
        rationale: |
          B2B payments is too capital intensive to bootstrap in India in 2015.
        consequence: |
          You are out-competed by well-funded rivals.
        leadsTo: end-D-slow

  end-A-fail:
    isOutcome: true
    prompt: |
      You waited for the platform and ran out of money. The company died.
  end-A-oss:
    isOutcome: true
    prompt: |
      You open sourced the code, but it became obsolete quickly. You moved on.
  end-B-great:
    isOutcome: true
    prompt: |
      The no-code embed compounded, and the expansion into neo-banking made you a $7.5B juggernaut.
  end-B-mixed:
    isOutcome: true
    prompt: |
      The race to the bottom on fees won market share but destroyed margins. The company is huge but unprofitable.
  end-C-bank:
    isOutcome: true
    prompt: |
      The hybrid failure led to a quiet acqui-hire. The true market was won by others.
  end-C-survive:
    isOutcome: true
    prompt: |
      You survived the hard reset. It took 5 years, but you built a solid B2B business.
  end-D-rebound:
    isOutcome: true
    prompt: |
      You rebounded with a new YC company. You lost a year, but still became a major player.
  end-D-slow:
    isOutcome: true
    prompt: |
      Bootstrapping was too slow. You built a lifestyle business while others built unicorns.
---
## What actually happened

This drill is based on the **Razorpay pivot in 2014**. Harshil Mathur
and Shashank Kumar started Razorpay as a peer-to-peer consumer
payments app. During their YC interview, Paul Graham specifically
pointed out that the real opportunity was in fixing payments
infrastructure for Indian businesses — every YC mentor they spoke
to said the same thing.

They pivoted in 2014 to B2B payment APIs. The first version of the
product was painful to onboard (3-day verification, paperwork,
manual integration) but the demand was so acute that businesses
tolerated it. The team then built a no-code embed that brought
onboarding from days to minutes — that became the unlock.

By 2018 Razorpay had crossed ₹10,000 crore in annual transaction
volume. By 2022 the company was valued at **$7.5B** and was the
default payments provider for digital-first Indian businesses.

The pattern: in regulated markets, the best signal of where to
build is what your investors and mentors *keep* pointing at, even
when you've committed to a different idea.

**Related reading:** [Razorpay's brand polish at fintech scale](/case-study/razorpay-pivot-fintech)
