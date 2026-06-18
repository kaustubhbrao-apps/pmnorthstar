import os

drills_dir = "/Users/Amber_User/downloads/northstar/content/drills"

def read_file(filename):
    with open(os.path.join(drills_dir, filename), 'r') as f:
        return f.read()

def write_file(filename, content):
    with open(os.path.join(drills_dir, filename), 'w') as f:
        f.write(content)

# File 2: series-a-mid-pivot-2026.md
series_a = read_file("series-a-mid-pivot-2026.md")
sa_start = series_a.find("nodes:\n")
sa_end = series_a.find("---", sa_start)
new_sa_nodes = """nodes:
  start:
    dimension: founder
    prompt: |
      $15M is two weeks from close. Pick the move.
    options:
      - text: Close on the SDR thesis. Pivot to CS once the money's in the bank.
        points: 0
        pattern: deceive-the-investor
        rationale: |
          Catastrophic call. Sophisticated lead investors do reference checks.
        consequence: |
          You close. Two months in, the pivot becomes obvious.
        leadsTo: A-deception-followup
      - text: Tell the lead investor now. Be honest. Offer to re-paper the round on the CS thesis at the same terms, or release them.
        points: 15
        pattern: honest-recalibration
        rationale: |
          The mature move.
        consequence: |
          The lead takes 4 days to decide. They come back enthusiastic.
        leadsTo: B-honest-followup
      - text: Delay the close — tell the lead 'we need 6 weeks more time' without explaining why.
        points: 6
        pattern: stall-without-honesty
        rationale: |
          Defers the problem without solving it.
        consequence: |
          The lead will know something is off.
        leadsTo: C-delay-followup
      - text: Withdraw the round entirely. Bootstrap on revenue until the CS thesis is unambiguous.
        points: 9
        pattern: walk-away-from-money
        rationale: |
          Honorable but expensive.
        consequence: |
          You forfeit 12-18 months of runway to make the point.
        leadsTo: D-bootstrap-followup

  A-deception-followup:
    dimension: founder
    prompt: |
      Two months after close, the pivot is obvious. The lead investor is furious and confronts you.
    options:
      - text: Double down on the deception. Say this is just a minor experiment and SDR is still the main focus.
        points: 0
        pattern: double-deception
        rationale: |
          Lying to cover a lie breaks trust permanently.
        consequence: |
          The investor uncovers the truth from CS design partners.
        leadsTo: A-board-reaction
      - text: Admit you planned the pivot before close. Apologize and argue it was necessary to survive.
        points: 3
        pattern: forced-confession
        rationale: |
          Honesty now doesn't fix the earlier lie, but stops the bleeding.
        consequence: |
          The board is split on whether to fire you.
        leadsTo: A-board-reaction

  A-board-reaction:
    dimension: business
    prompt: |
      The board convenes a special session. They are considering replacing you.
    options:
      - text: Fight the board. Threaten to take your technical co-founder and leave if they fire you.
        points: 0
        pattern: scorched-earth
        rationale: |
          You have no leverage. You broke fiduciary duty.
        consequence: |
          They fire you with cause. The company collapses.
        leadsTo: end-A-fail
      - text: Accept a demotion to CTO. Let the board bring in a new 'adult' CEO.
        points: 6
        pattern: swallow-pride
        rationale: |
          You preserve some equity and the company survives.
        consequence: |
          You stay on, but lose control of your company.
        leadsTo: end-A-survive

  B-honest-followup:
    dimension: business
    prompt: |
      The round closed on the CS pivot. You need a clear 90-day plan to validate the CS market.
    options:
      - text: Sign 5 more design partners in CS. Free, with monthly QBRs and product co-design rights.
        points: 15
        pattern: validation-velocity
        rationale: |
          Right early-stage move.
        consequence: |
          All 5 signed within 30 days.
        leadsTo: B-validation-results
      - text: Charge enterprise prices from day one — $50K/year. Filter for serious customers.
        points: 9
        pattern: premium-pricing-pre-validation
        rationale: |
          Premature to charge before PMF.
        consequence: |
          You sign 1 enterprise customer. Signal is weak.
        leadsTo: B-validation-results
      - text: Run a public beta. Let any CS team sign up free. Maximize sample size.
        points: 6
        pattern: spray-and-pray
        rationale: |
          Volume without depth.
        consequence: |
          Signal is muddy.
        leadsTo: B-validation-results

  B-validation-results:
    dimension: product
    prompt: |
      The 90-day window is over. You have signal. What is your primary GTM strategy moving forward?
    options:
      - text: Direct outbound sales targeting VP Customer Success.
        points: 15
        pattern: outbound-to-buyer
        rationale: |
          CS is a traditional enterprise motion.
        consequence: |
          Sales efficiency climbs rapidly. You secure series B.
        leadsTo: end-B-great
      - text: Product-led growth targeting individual CSMs.
        points: 6
        pattern: misaligned-motion
        rationale: |
          Individual CSMs lack buying power for expensive workflow tools.
        consequence: |
          High usage but poor conversion to paid.
        leadsTo: end-B-mixed

  C-delay-followup:
    dimension: founder
    prompt: |
      You delayed the close by 6 weeks. The lead investor is highly suspicious and demands to know why.
    options:
      - text: Finally come clean about the CS pivot data.
        points: 6
        pattern: delayed-honesty
        rationale: |
          Better late than never, but trust is already damaged.
        consequence: |
          Investor pauses the round to do their own due diligence.
        leadsTo: C-investor-response
      - text: Blame internal legal/accounting delays.
        points: 0
        pattern: stalling-tactics
        rationale: |
          More lies.
        consequence: |
          The investor discovers the truth anyway.
        leadsTo: C-investor-response

  C-investor-response:
    dimension: business
    prompt: |
      The investor knows about the pivot. They are reconsidering the deal.
    options:
      - text: Offer them a 20% discount on valuation to stay in the round.
        points: 3
        pattern: discount-for-trust
        rationale: |
          You are paying a massive penalty for your delay.
        consequence: |
          They accept the lower valuation, but the relationship is strained forever.
        leadsTo: end-C-lower
      - text: Tell them the terms stand, take it or leave it.
        points: 9
        pattern: call-the-bluff
        rationale: |
          You need conviction in your pivot.
        consequence: |
          They walk away. You have to restart fundraising from scratch.
        leadsTo: end-C-pullout

  D-bootstrap-followup:
    dimension: product
    prompt: |
      You withdrew the round. Runway is tight. How do you fund growth?
    options:
      - text: Cut 50% of the team to extend runway and build the CS product slowly.
        points: 6
        pattern: defensive-cut
        rationale: |
          Safe but sacrifices your speed advantage.
        consequence: |
          You survive, but competitors catch up.
        leadsTo: D-fundraise-again
      - text: Do consulting/services for CS teams to fund the product development.
        points: 9
        pattern: services-to-software
        rationale: |
          Generates cash and deepens your customer understanding.
        consequence: |
          You build the exact right product, but it takes an extra 6 months.
        leadsTo: D-fundraise-again

  D-fundraise-again:
    dimension: business
    prompt: |
      9 months later. The CS product has strong traction. Do you raise now?
    options:
      - text: Raise the Series A now on the strong CS metrics.
        points: 15
        pattern: raise-from-strength
        rationale: |
          You did the hard work. Now you capitalize.
        consequence: |
          You raise a strong round and scale.
        leadsTo: end-D-raise
      - text: Keep bootstrapping indefinitely. VC money is toxic.
        points: 3
        pattern: over-correction
        rationale: |
          You let a bad experience close off necessary growth capital.
        consequence: |
          A funded competitor outspends you and takes the market.
        leadsTo: end-D-wait

  end-A-fail:
    isOutcome: true
    prompt: |
      You were fired with cause. The company died. Reputation ruined.
  end-A-survive:
    isOutcome: true
    prompt: |
      You survived as CTO. You kept your equity, but lost your company.
  end-B-great:
    isOutcome: true
    prompt: |
      Honest recalibration plus correct GTM worked. Series B closed 18 months later at 5x valuation.
  end-B-mixed:
    isOutcome: true
    prompt: |
      The PLG motion slowed revenue growth. You eventually corrected to outbound, but lost 12 months.
  end-C-lower:
    isOutcome: true
    prompt: |
      The delay cost you 20% of your company's value and board trust is permanently damaged.
  end-C-pullout:
    isOutcome: true
    prompt: |
      The lead pulled out. The round restarted 3 months later on weaker terms.
  end-D-raise:
    isOutcome: true
    prompt: |
      Bootstrapping was painful but worked. The new Series A was slightly lower than the original SDR terms, but your conviction won.
  end-D-wait:
    isOutcome: true
    prompt: |
      You waited too long. A competitor raised $20M and out-executed you.
"""
write_file("series-a-mid-pivot-2026.md", series_a[:sa_start] + new_sa_nodes + series_a[sa_end:])

# File 3: razorpay-api-pivot-2014.md
razorpay = read_file("razorpay-api-pivot-2014.md")
rp_start = razorpay.find("nodes:\n")
rp_end = razorpay.find("---", rp_start)
new_rp_nodes = """nodes:
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
"""
write_file("razorpay-api-pivot-2014.md", razorpay[:rp_start] + new_rp_nodes + razorpay[rp_end:])

# File 4: quibi-pricing-2020.md
quibi = read_file("quibi-pricing-2020.md")
quibi_start = quibi.find("nodes:\n")
quibi_end = quibi.find("---", quibi_start)
new_quibi_nodes = """nodes:
  start:
    dimension: business
    prompt: |
      You have launch terms to set. Pick.
    options:
      - text: 'Launch as planned: $4.99 with ads, $7.99 ad-free, mobile-only, premium short-form.'
        points: 3
        pattern: ignore-market-shift
        rationale: |
          Ignores the most important fact: commute time has just collapsed.
        consequence: |
          Launch lands with strong press but lukewarm retention.
        leadsTo: A-launch-followup
      - text: Postpone launch by 6 months. Reposition for a post-pandemic moment when commute returns.
        points: 12
        pattern: wait-for-the-thesis-to-return
        rationale: |
          Defensible patience.
        consequence: |
          You postpone.
        leadsTo: B-postpone-followup
      - text: 'Pivot positioning: drop the commute frame. Make it premium short-form for any device.'
        points: 15
        pattern: reposition-product
        rationale: |
          Right adaptive call.
        consequence: |
          You ship web, TV apps, and mobile in parallel.
        leadsTo: C-reposition-followup
      - text: Drop the price to $2.99 with ads. Compete with TikTok and YouTube for attention.
        points: 3
        pattern: race-to-the-bottom
        rationale: |
          Wrong axis.
        consequence: |
          Subscriber count grows but ARPU collapses.
        leadsTo: D-price-war

  A-launch-followup:
    dimension: product
    prompt: |
      You launched as planned. Retention is plummeting because users are stuck at home.
    options:
      - text: Rush out a screen-casting feature so users can cast from phone to TV.
        points: 6
        pattern: band-aid-fix
        rationale: |
          A necessary feature, but doesn't fix the core content formatting issues.
        consequence: |
          It helps slightly, but churn remains high.
        leadsTo: A-panic-mode
      - text: Double down on mobile-only marketing. Try to invent new "at-home" mobile use cases.
        points: 0
        pattern: denial
        rationale: |
          Forcing user behavior never works.
        consequence: |
          Marketing spend is entirely wasted.
        leadsTo: A-panic-mode

  A-panic-mode:
    dimension: business
    prompt: |
      Six months in. You are burning cash rapidly. Shutdown is imminent.
    options:
      - text: Sell the content library to Roku or Apple immediately.
        points: 9
        pattern: salvage-value
        rationale: |
          Recoup what you can for investors.
        consequence: |
          You sell the library for a fraction of its cost.
        leadsTo: end-A-salvage
      - text: Keep trying to raise more money to pivot.
        points: 0
        pattern: throwing-good-money-after-bad
        rationale: |
          No investor will touch this.
        consequence: |
          You burn down to $0 and shut down abruptly.
        leadsTo: end-A-zero

  B-postpone-followup:
    dimension: business
    prompt: |
      You postponed 6 months. Commutes are partially back.
    options:
      - text: Launch exactly the original mobile-only product.
        points: 3
        pattern: failure-to-adapt
        rationale: |
          You waited, but didn't improve the offering.
        consequence: |
          Launch is mediocre.
        leadsTo: B-new-launch
      - text: Spend the 6 months building TV apps to launch as multi-platform.
        points: 12
        pattern: productive-delay
        rationale: |
          Using the delay to expand the addressable market.
        consequence: |
          Launch is much stronger across devices.
        leadsTo: B-new-launch

  B-new-launch:
    dimension: product
    prompt: |
      You are launching now.
    options:
      - text: Maintain the $7.99 premium pricing.
        points: 9
        pattern: defend-premium
        rationale: |
          You need ARPU to cover content costs.
        consequence: |
          Growth is slow but economics are better.
        leadsTo: end-B-premium
      - text: Drop to $4.99 ad-free to simulate growth.
        points: 3
        pattern: panic-pricing
        rationale: |
          Destroys your unit economics.
        consequence: |
          You get users but bleed cash.
        leadsTo: end-B-cheap

  C-reposition-followup:
    dimension: product
    prompt: |
      Repositioned to "premium short-form for any device." Web + TV apps shipped.
    options:
      - text: Stay premium. The differentiation is the production value.
        points: 12
        pattern: premium-or-nothing
        rationale: |
          Right call. Going downstream erases differentiation.
        consequence: |
          Subscriber growth is steady but slow.
        leadsTo: C-content-strategy
      - text: Add a creator-tier. Open the platform to creators making 10-minute premium content.
        points: 15
        pattern: marketplace-as-flywheel
        rationale: |
          Best long-term move.
        consequence: |
          Creator-tier launches in 6 months. Catalog grows 10x.
        leadsTo: C-content-strategy

  C-content-strategy:
    dimension: business
    prompt: |
      You have your platform. What is the long-term play?
    options:
      - text: Focus on deep engagement and high retention in your niche.
        points: 12
        pattern: build-a-moat
        rationale: |
          A strong, loyal niche is better than a weak broad audience.
        consequence: |
          You build a highly profitable specialty service.
        leadsTo: end-C-good
      - text: Try to acquire massive cultural scale by buying sports rights.
        points: 3
        pattern: overreach
        rationale: |
          You cannot outbid Amazon and Apple for sports.
        consequence: |
          You burn billions and fail to win the bids.
        leadsTo: end-C-overreach

  D-price-war:
    dimension: business
    prompt: |
      You dropped the price. Sub count is up, but ARPU is terrible.
    options:
      - text: Start stuffing the app with aggressive, unskippable ads.
        points: 0
        pattern: hostile-monetization
        rationale: |
          Users will immediately churn to TikTok.
        consequence: |
          Subscribers flee.
        leadsTo: D-cash-crunch
      - text: Try to slowly raise the price back to $4.99.
        points: 6
        pattern: boil-the-frog
        rationale: |
          Difficult to pull off without adding immense new value.
        consequence: |
          High churn upon price increase.
        leadsTo: D-cash-crunch

  D-cash-crunch:
    dimension: founder
    prompt: |
      You are running out of cash fast.
    options:
      - text: File for bankruptcy immediately.
        points: 3
        pattern: give-up
        rationale: |
          The end of the line.
        consequence: |
          Company closes.
        leadsTo: end-D-bankrupt
      - text: Do a massive layoff and try to pivot to a B2B video platform.
        points: 6
        pattern: desperate-pivot
        rationale: |
          Extremely hard to pivot a B2C content company to B2B SaaS.
        consequence: |
          You fail, but you tried.
        leadsTo: end-D-fail

  end-A-salvage:
    isOutcome: true
    prompt: |
      You shut down 6 months in, returning ~$350M to shareholders. Roku bought the library.
  end-A-zero:
    isOutcome: true
    prompt: |
      You burned it all. A massive failure.
  end-B-premium:
    isOutcome: true
    prompt: |
      Postponing worked okay. You exist as a niche player.
  end-B-cheap:
    isOutcome: true
    prompt: |
      You ran out of money due to poor unit economics.
  end-C-good:
    isOutcome: true
    prompt: |
      Repositioning produced a sustainable, profitable niche business.
  end-C-overreach:
    isOutcome: true
    prompt: |
      You overreached and destroyed your profitable niche by burning cash on sports rights.
  end-D-bankrupt:
    isOutcome: true
    prompt: |
      Racing to the bottom on price killed the company quickly.
  end-D-fail:
    isOutcome: true
    prompt: |
      The desperate B2B pivot failed. The company is dead.
"""
write_file("quibi-pricing-2020.md", quibi[:quibi_start] + new_quibi_nodes + quibi[quibi_end:])

# File 5: openai-consumer-device-launches-2026.md
openai_file = read_file("openai-consumer-device-launches-2026.md")
oi_start = openai_file.find("nodes:\n")
oi_end = openai_file.find("---", oi_start)
new_oi_nodes = """nodes:
  start:
    dimension: founder
    prompt: |
      OpenAI just announced hardware that does what your app does. Pick.
    options:
      - text: Build a companion app for the device. Position as 'the productivity app for ChatGPT Companion.'
        points: 12
        pattern: become-the-platform-tenant
        rationale: |
          Defensible bridge play. If you can't beat them, plug into them.
        consequence: |
          You ship a Companion app in 5 months.
        leadsTo: A-tenant-followup
      - text: 'Pivot vertical: re-position the app for a specific profession and ignore the hardware entirely.'
        points: 15
        pattern: vertical-where-device-cant-fit
        rationale: |
          The right contrarian bet.
        consequence: |
          You pick lawyers. Pivot takes 6 months.
        leadsTo: B-vertical-followup
      - text: Pivot to be a multi-model app. Position as 'works with ChatGPT, Claude, Gemini, and Apple Intelligence.'
        points: 9
        pattern: model-agnostic-bridge
        rationale: |
          Defensive moat.
        consequence: |
          You ship multi-model support in 3 months.
        leadsTo: C-agnostic-followup
      - text: Sell the company to OpenAI before the device ships and your ARR drops.
        points: 9
        pattern: exit-before-the-shift
        rationale: |
          Defensible.
        consequence: |
          You make discreet inquiries.
        leadsTo: D-acquisition-talks

  A-tenant-followup:
    dimension: product
    prompt: |
      Your Companion app shipped. OpenAI is tightening platform guidelines. Pick.
    options:
      - text: Stay platform-aligned. Adapt to every guideline change. Don't fight.
        points: 9
        pattern: comply-and-keep-running
        rationale: |
          Survival mode.
        consequence: |
          You stay in the app store but become indistinguishable from OpenAI's first-party app.
        leadsTo: A-platform-shift
      - text: Build a parallel product that doesn't depend on the device. Use Companion as one of several distribution channels.
        points: 15
        pattern: distribute-don't-depend
        rationale: |
          The right long-term move.
        consequence: |
          You spend 6 months rebuilding the core product as multi-surface.
        leadsTo: A-platform-shift

  A-platform-shift:
    dimension: business
    prompt: |
      OpenAI just announced they are fully integrating your core features into the OS.
    options:
      - text: Pivot the app entirely to enterprise team collaboration (multi-player).
        points: 12
        pattern: go-multiplayer
        rationale: |
          The OS usually only solves single-player mode.
        consequence: |
          You survive by moving upmarket.
        leadsTo: end-A-good
      - text: Just accept the death of the app.
        points: 3
        pattern: surrender
        rationale: |
          You let the platform win.
        consequence: |
          Company shuts down.
        leadsTo: end-A-stable

  B-vertical-followup:
    dimension: business
    prompt: |
      ARR is $9M, 12,000 paying lawyers. You can scale two ways.
    options:
      - text: Go deeper in legal. Become the productivity layer that integrates with case-management software.
        points: 15
        pattern: depth-before-breadth
        rationale: |
          The compounding bet.
        consequence: |
          Three Clio integrations ship. ARPU rises.
        leadsTo: B-vertical-expansion
      - text: Add medical + financial advisors. Three verticals.
        points: 9
        pattern: spread-too-thin
        rationale: |
          Premature breadth.
        consequence: |
          ARR grows to $14M but you are sub-scale in all.
        leadsTo: B-vertical-expansion

  B-vertical-expansion:
    dimension: product
    prompt: |
      You have expanded. The market is getting crowded with AI wrappers.
    options:
      - text: Build custom, fine-tuned models specifically for legal reasoning.
        points: 15
        pattern: deep-tech-moat
        rationale: |
          Moving from wrapper to deep tech creates a true moat.
        consequence: |
          You build an unassailable advantage in legal tech.
        leadsTo: end-B-great
      - text: Stick to prompt engineering on top of OpenAI APIs.
        points: 6
        pattern: lazy-moat
        rationale: |
          A thin wrapper is always vulnerable.
        consequence: |
          Competitors catch up quickly.
        leadsTo: end-B-mixed

  C-agnostic-followup:
    dimension: product
    prompt: |
      You are multi-model. Users are getting confused about which model to use.
    options:
      - text: Abstract the models away. Route the prompt to the best model automatically under the hood.
        points: 12
        pattern: smart-routing
        rationale: |
          Provides actual value instead of just a dropdown menu.
        consequence: |
          Users love the simplicity.
        leadsTo: C-model-wars
      - text: Keep the dropdowns. Let power users choose.
        points: 6
        pattern: power-user-trap
        rationale: |
          Catering only to AI nerds limits your TAM.
        consequence: |
          Mainstream users churn.
        leadsTo: C-model-wars

  C-model-wars:
    dimension: business
    prompt: |
      The foundation models are now indistinguishable in quality.
    options:
      - text: Pivot the UI into a workflow automation tool rather than just a chat interface.
        points: 15
        pattern: workflow-over-chat
        rationale: |
          Chat is a commodity; workflow is a business.
        consequence: |
          You build a sticky product.
        leadsTo: end-C-good
      - text: Continue competing on having "more models" integrated.
        points: 3
        pattern: irrelevant-feature
        rationale: |
          Users no longer care.
        consequence: |
          Growth flatlines.
        leadsTo: end-C-fail

  D-acquisition-talks:
    dimension: founder
    prompt: |
      OpenAI passed. Anthropic offers $30M.
    options:
      - text: Accept the $30M from Anthropic.
        points: 12
        pattern: take-the-win
        rationale: |
          A solid exit before the market shifts.
        consequence: |
          Acquisition closes.
        leadsTo: D-integration
      - text: Hold out for $50M from Apple.
        points: 3
        pattern: greed
        rationale: |
          Overplaying a weak hand.
        consequence: |
          Apple passes. Anthropic walks away.
        leadsTo: D-integration

  D-integration:
    dimension: business
    prompt: |
      The M&A outcome is decided.
    options:
      - text: Ensure your team gets good retention packages.
        points: 9
        pattern: care-for-team
        rationale: |
          Good leadership.
        consequence: |
          Team is happy.
        leadsTo: end-D-anthropic
      - text: Just take your payout and leave immediately.
        points: 3
        pattern: check-out
        rationale: |
          Burns bridges.
        consequence: |
          Reputation damage.
        leadsTo: end-D-burn

  end-A-good:
    isOutcome: true
    prompt: |
      By going multi-player, you built a defensible enterprise business that survived the OS platform shift.
  end-A-stable:
    isOutcome: true
    prompt: |
      You were absorbed by the OS. The company died a quiet death.
  end-B-great:
    isOutcome: true
    prompt: |
      You owned legal productivity by building deep integrations and fine-tuned models. A massive success.
  end-B-mixed:
    isOutcome: true
    prompt: |
      You survived, but as a thin wrapper you are constantly fighting off cheaper competitors.
  end-C-good:
    isOutcome: true
    prompt: |
      You successfully pivoted from a multi-model chat app to a sticky workflow automation tool.
  end-C-fail:
    isOutcome: true
    prompt: |
      Model agnostic positioning became irrelevant. You eventually shut down.
  end-D-anthropic:
    isOutcome: true
    prompt: |
      You successfully sold the company and protected your team. A good, if early, exit.
  end-D-burn:
    isOutcome: true
    prompt: |
      You got greedy or burned bridges. The acquisition fell through or ruined your reputation.
"""
write_file("openai-consumer-device-launches-2026.md", openai_file[:oi_start] + new_oi_nodes + openai_file[oi_end:])

# File 6: notion-pivot-2015.md
notion = read_file("notion-pivot-2015.md")
n_start = notion.find("nodes:\n")
n_end = notion.find("---", n_start)
new_n_nodes = """nodes:
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
"""
write_file("notion-pivot-2015.md", notion[:n_start] + new_n_nodes + notion[n_end:])
