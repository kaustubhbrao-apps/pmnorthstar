---
slug: linear-pricing-2019
caseStudySlug: linear-brand-from-day-one
type: historical
category: pricing
publishedAt: '2026-06-22T19:00:00+05:30'
year: 2019
estimatedMinutes: 6
principle: |
  In categories where the dominant competitor is enterprise-priced
  and slow, free-forever for individuals is a market-entry weapon.
  But free-forever only works if you can defend the unit economics
  at scale.
intro: |
  You are the CEO of a new project-management tool for software teams. You've built a faster, opinionated alternative to the dominant incumbent. Your product is meaningfully better — faster, keyboard-shortcut-driven, designed for engineers.

  Launch is in four weeks. You've assembled a beta of ~200 software teams; they love the product. Pricing is the last big decision.
nodes:
  start:
    dimension: business
    prompt: |
      Pick the pricing model for public launch.
    options:
      - text: 'Match the incumbent: $8/user/month. Compete on product quality.'
        points: 6
        pattern: incumbent-match
        rationale: |
          Requires every prospect to actively switch — a motion that takes 6-9 months. You burn the velocity advantage of being new.
        consequence: |
          Initial signups are slow. By month 12 you have 200 paying teams; the incumbent has 100,000.
        leadsTo: A_match_followup
      - text: Free for small teams (under 10 users). $8/user/month for larger teams.
        points: 15
        pattern: free-for-the-trojan-horse
        rationale: |
          The right wedge. Small teams self-serve and bring you with them when they grow.
        consequence: |
          Signups hit 5,000 teams in 90 days. ARR compounds rapidly.
        leadsTo: B_free_followup
      - text: Free forever, no limits. Monetize later via enterprise features.
        points: 9
        pattern: monetize-much-later
        rationale: |
          Audacious, but free forever means no revenue for 12-18 months.
        consequence: |
          Adoption hits 20,000 teams in 6 months. Revenue stays at zero.
        leadsTo: C_free_followup
      - text: 'Aggressive undercut: $4/user/month flat. Half the incumbent price.'
        points: 3
        pattern: undercut-with-no-moat
        rationale: |
          The incumbent has 100x your capital and can match any price.
        consequence: |
          The incumbent matches your price for new customers. Margins are thin.
        leadsTo: D_undercut_followup
  B_free_followup:
    dimension: product
    prompt: |
      Twelve months post-launch. Free teams hit the 10-user limit and instead of upgrading, they create multiple workspaces to stay free.
    options:
      - text: Enforce a strict 'one workspace per organization' rule. Block abuse.
        points: 6
        pattern: enforce-the-gate-hard
        rationale: |
          Direct but adversarial. Users feel policed.
        consequence: |
          ~30% switch to a competitor. Brand trust takes a hit.
        leadsTo: B_enforce_hard
      - text: Make the upgrade feel like an upgrade — add valuable team features only available paid.
        points: 15
        pattern: positive-upgrade-pull
        rationale: |
          Pull, not push. Make the upgrade path more attractive than the workaround.
        consequence: |
          Upgrade rate jumps to 28%. Conversion engine compounds.
        leadsTo: B_positive_pull
      - text: Tighten free tier limits — drop from 10 users to 5.
        points: 3
        pattern: shrink-the-free-tier
        rationale: |
          Retroactive-narrowing destroys free-tier trust.
        consequence: |
          Backlash on social media. Net loss across the funnel.
        leadsTo: B_shrink_free
  B_enforce_hard:
    dimension: founder
    prompt: |
      Users are furious about the strict blocking. How do you recover?
    options:
      - text: Backtrack and apologize publicly.
        points: 8
        pattern: own-the-mistake
        rationale: |
          Humility saves brands.
        consequence: |
          You stop the bleeding but look indecisive.
        leadsTo: end-B-bad
      - text: Offer a 50% discount for the first year of paid to soften the blow.
        points: 5
        pattern: discount-apology
        rationale: |
          Trains users to expect discounts.
        consequence: |
          Conversion bumps, but long term LTV is damaged.
        leadsTo: end-B-bad
  B_positive_pull:
    dimension: business
    prompt: |
      Upgrade rate is fantastic. Larger enterprises now want to use the product.
    options:
      - text: Build an 'Enterprise' tier with SOC2 and SAML for $15/user.
        points: 15
        pattern: capture-enterprise-value
        rationale: |
          Standard SaaS progression.
        consequence: |
          You become a multi-hundred-million ARR business.
        leadsTo: end-B-great
      - text: Refuse to build enterprise bloat and stay strictly product-led for small teams.
        points: 8
        pattern: stay-small
        rationale: |
          You leave millions on the table.
        consequence: |
          A highly profitable lifestyle business, but not a unicorn.
        leadsTo: end-B-niche
  B_shrink_free:
    dimension: product
    prompt: |
      Backlash is intense. Competitors are actively poaching.
    options:
      - text: Grandfather existing users, applying the limit only to new signups.
        points: 10
        pattern: grandfathering
        rationale: |
          Should have been the first move.
        consequence: |
          Stops the immediate churn, but brand is permanently tarnished.
        leadsTo: end-B-terrible
      - text: Push through the pain. The angry users weren't going to pay anyway.
        points: 0
        pattern: ignore-the-mob
        rationale: |
          You lose your viral word-of-mouth distribution.
        consequence: |
          Growth flatlines.
        leadsTo: end-B-terrible
  A_match_followup:
    dimension: business
    prompt: |
      Growth is slow. How do you force momentum?
    options:
      - text: Hire a massive outbound sales team.
        points: 4
        pattern: premature-scaling
        rationale: |
          Outbound sales on a new, undifferentiated-pricing product burns cash.
        consequence: |
          Burn rate spikes.
        leadsTo: A_match_crisis
      - text: Pivot to targeting non-software teams (marketing/design).
        points: 8
        pattern: find-new-wedge
        rationale: |
          Finding a less contested market.
        consequence: |
          You survive but lose your core engineering identity.
        leadsTo: A_match_crisis
  A_match_crisis:
    dimension: founder
    prompt: |
      Cash is running low. Final move?
    options:
      - text: Lay off the sales team and rely on organic growth.
        points: 5
        pattern: painful-reset
        rationale: |
          Saves the company but resets growth to zero.
        consequence: |
          You become a slow-growth SaaS.
        leadsTo: end-A
      - text: Raise a down-round to fund the sales team.
        points: 2
        pattern: dilution
        rationale: |
          Founders are massively diluted.
        consequence: |
          You survive but lose control of the company.
        leadsTo: end-A
  C_free_followup:
    dimension: product
    prompt: |
      Adoption is huge but zero revenue. Runway is 6 months.
    options:
      - text: Introduce a hard usage limit immediately.
        points: 5
        pattern: bait-and-switch
        rationale: |
          Forces revenue but breaks trust.
        consequence: |
          Users revolt.
        leadsTo: C_free_crisis
      - text: Raise venture debt to keep the free tier alive while building enterprise.
        points: 2
        pattern: risky-leverage
        rationale: |
          Taking debt pre-revenue is incredibly risky.
        consequence: |
          You default on the debt when enterprise sales take too long.
        leadsTo: C_free_crisis
  C_free_crisis:
    dimension: business
    prompt: |
      You are out of options.
    options:
      - text: Launch an open-source version to win back goodwill.
        points: 6
        pattern: open-source-pivot
        rationale: |
          A valid pivot for developer tools.
        consequence: |
          You build a services business around the open source core.
        leadsTo: end-C
      - text: Sell the company to a larger player for the user base.
        points: 8
        pattern: acquihire
        rationale: |
          Best return for investors at this stage.
        consequence: |
          Acquired by Atlassian. Product is shut down.
        leadsTo: end-C
  D_undercut_followup:
    dimension: business
    prompt: |
      Incumbent matched your $4 price.
    options:
      - text: Drop to $2/user/month.
        points: 0
        pattern: suicidal-pricing
        rationale: |
          You lose money on every user.
        consequence: |
          Bankruptcy approaches rapidly.
        leadsTo: D_undercut_crisis
      - text: Pivot to focusing on small startups instead of enterprise.
        points: 5
        pattern: micro-smb
        rationale: |
          A retreat to a less profitable segment.
        consequence: |
          You survive as a cheap tool for early-stage companies.
        leadsTo: D_undercut_crisis
  D_undercut_crisis:
    dimension: founder
    prompt: |
      Margins are dead.
    options:
      - text: Raise prices back to $8/user.
        points: 4
        pattern: break-trust
        rationale: |
          You admit the undercut was a gimmick.
        consequence: |
          You lose users and brand trust.
        leadsTo: end-D
      - text: Pivot to web3/crypto project management.
        points: 0
        pattern: trend-chasing
        rationale: |
          Desperation pivot.
        consequence: |
          Company dies when the crypto bubble pops.
        leadsTo: end-D
  end-A:
    isOutcome: true
    prompt: |
      Matching the incumbent's price made the product invisible. You missed the launch momentum.
  end-B-great:
    isOutcome: true
    prompt: |
      The positive-upgrade-pull model worked. By year 5 you were the default project-management tool for software teams and a multi-hundred-million ARR business.
  end-B-niche:
    isOutcome: true
    prompt: |
      You built a great product but refused to scale it. You run a profitable indie business.
  end-B-bad:
    isOutcome: true
    prompt: |
      The enforcement worked technically but cost brand trust. The product still works but the love is gone.
  end-B-terrible:
    isOutcome: true
    prompt: |
      The retroactive limit change made you a case study in "how to destroy your community." 
  end-C:
    isOutcome: true
    prompt: |
      Free-forever drove huge adoption but no revenue. You eventually found an exit, but not the unicorn outcome you wanted.
  end-D:
    isOutcome: true
    prompt: |
      The undercut became a race to the bottom you couldn't win. The incumbent outlasted you.
---
## What actually happened

This drill is loosely based on **Linear's pricing model from 2019 onward**. Linear shipped with **free for teams under 10 users, $8/user/month above** — and made the paid tier compelling by adding genuinely valuable team features. 

The free tier became Linear's primary distribution channel. By 2024 Linear was the dominant project-management tool for high-growth software companies.

**Related reading:** [Linear: brand as a moat from day one](/case-study/linear-brand-from-day-one)
