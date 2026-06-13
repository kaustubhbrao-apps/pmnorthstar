---
slug: blackberry-touchscreen-delay-2008
type: historical
category: Strategy
year: 2008
estimatedMinutes: 20
publishedAt: '2026-07-22T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-07-12T15:00:00+00:00'
principle: Incremental half-measures fail when a paradigm shift demands a complete leap. Defending a legacy moat against a disruptive platform shift only guarantees you die with your moat intact.
intro: |
  It's early 2008. You are a senior PM at Research In Motion (RIM / BlackBerry), the undisputed king of the smartphone market. 

  The iPhone launched last year. Initially, your co-CEOs dismissed it as a toy—it has terrible battery life, no secure enterprise email, and most glaringly, no physical keyboard. But the iPhone is starting to gain serious traction with consumers, and worse, executives are starting to bring their personal iPhones into the office and demanding IT support them.

  Verizon, your biggest carrier partner and distribution channel, is panicking. They want an "iPhone killer." They are demanding a full touchscreen device from RIM to compete with AT&T's exclusive lock on the iPhone. 

  But your core enterprise users—and your executive board—firmly believe the physical keyboard is your untouchable moat. Typing on a flat screen is seen as an inferior, frustrating experience.

  You need to design the BlackBerry Storm to satisfy Verizon without alienating your core base. 

  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal for the company.
nodes:
  start:
    dimension: product
    prompt: |
      The hardware design phase is kicking off for the BlackBerry Storm. How do you design the touchscreen experience to compete with Apple while satisfying your internal stakeholders?
    options:
      - text: Invent 'SurePress' - a clicky, mechanical touchscreen where the entire screen acts as a giant physical button.
        leadsTo: node_surepress
        points: 0
        pattern: complex-half-measure
        rationale: |
          Wrong. A mechanical touchscreen is incredibly complex, prone to hardware failure, and gives the worst of both worlds.
        consequence: |
          The engineering team spends millions developing SurePress. It's thick, heavy, and buggy.
      - text: Go full capacitive touchscreen like the iPhone. Abandon the physical click.
        leadsTo: node_capacitive
        points: 50
        pattern: paradigm-acceptance
        rationale: |
          Correct. Skating to where the puck is going. The physical keyboard paradigm is dying for mainstream consumers.
        consequence: |
          The hardware is a sleek slate. The executives hate it, but you push it through.
      - text: Refuse Verizon. Build a better physical keyboard phone (the Bold).
        leadsTo: node_refuse_verizon
        points: 0
        pattern: denial-of-reality
        rationale: |
          Wrong. Refusing Verizon means you lose your primary distribution channel.
        consequence: |
          Verizon signs an exclusive deal with Google for the upcoming "Droid" franchise.

  node_surepress:
    dimension: business
    prompt: |
      You launch the Storm with SurePress. It's a buggy nightmare. Return rates at Verizon approach 100%. 
      Verizon's CEO is furious. What is your immediate triage?
    options:
      - text: Recall the device immediately. Take the financial hit and apologize to Verizon.
        leadsTo: surepress_recall_crisis
        points: 50
        pattern: extreme-ownership
        rationale: |
          Trust with your biggest distribution partner is more valuable than short-term revenue.
        consequence: |
          The recall costs hundreds of millions, but Verizon agrees to wait for your next attempt.
      - text: Push software updates to try and fix the lag. Keep selling the hardware.
        leadsTo: surepress_patch_crisis
        points: 0
        pattern: protecting-the-quarter
        rationale: |
          You can't fix a fundamental hardware design flaw with software patches.
        consequence: |
          Verizon store reps actively tell customers not to buy the Storm.

  surepress_recall_crisis:
    dimension: strategy
    prompt: |
      The recall is complete. Verizon is giving you one last chance for next year.
      What do you build?
    options:
      - text: "Abandon SurePress. License Android immediately to get an OS that works with touch."
        leadsTo: end_android
        points: 5
        pattern: pragmatic-survival
        rationale: |
          You don't have time to build a touch OS from scratch. Android is the life raft.
        consequence: |
          You survive as a hardware manufacturer, but lose the platform war.
      - text: "Try SurePress 2.0. Fix the mechanical issues. The core idea is still good."
        leadsTo: end_brand_death
        points: 0
        pattern: doubling-down-on-stupid
        rationale: |
          The idea was never good. It was a compromise that no one wanted.
        consequence: |
          SurePress 2.0 fails just as badly. Verizon drops you completely.

  surepress_patch_crisis:
    dimension: business
    prompt: |
      The patches fail. The hardware is fundamentally broken. The press is calling it 
      the "FailBerry." Sales are zero.
    options:
      - text: "Blame the users. Say people are 'typing on it wrong'."
        leadsTo: end_arrogance
        points: 0
        pattern: blaming-the-customer
        rationale: |
          Arrogance in the face of product failure is fatal.
        consequence: |
          The tech press mocks you endlessly.
      - text: "Quietly discontinue it and pretend it never happened. Pivot back to keyboards."
        leadsTo: end_slow_death
        points: 5
        pattern: strategic-retreat
        rationale: |
          A quiet death is better than an arrogant one, but you still cede the consumer market.
        consequence: |
          You retreat to enterprise and slowly bleed out over 5 years.

  node_capacitive:
    dimension: product
    prompt: |
      You build a capacitive touchscreen. But your legacy OS is built for trackballs. 
      You need a modern OS to power this modern hardware.
    options:
      - text: Acquire a company (like QNX) and rewrite the entire OS from scratch.
        leadsTo: capacitive_qnx_crisis
        points: 90
        pattern: structural-rebuild
        rationale: |
          A legacy OS bolted onto modern hardware is a dead end.
        consequence: |
          You delay the Storm. Verizon is angry but accepts it.
      - text: Slap a touch-friendly UI skin on top of the legacy Java-based OS.
        leadsTo: capacitive_skin_crisis
        points: 0
        pattern: technical-debt-shortcut
        rationale: |
          Technical debt will drown you. Performance will never match iOS.
        consequence: |
          The device ships on time but feels laggy and cheap.

  capacitive_qnx_crisis:
    dimension: strategy
    prompt: |
      The QNX rewrite (BlackBerry 10) takes 18 months. When it launches, it's beautiful. 
      But iOS and Android have already locked up all the major app developers.
    options:
      - text: "Pay developers millions to port their apps. Fund the ecosystem yourself."
        leadsTo: end_qnx
        points: 10
        pattern: subsidizing-ecosystem
        rationale: |
          It's incredibly expensive, but you have to jump-start the flywheel somehow.
        consequence: |
          You get the top 100 apps. You survive as a solid #3 player.
      - text: "Build an Android-emulator layer so Android apps run natively on BB10."
        leadsTo: end_android_emulator
        points: 5
        pattern: parasitic-ecosystem
        rationale: |
          It solves the app problem, but the apps look terrible and perform poorly.
        consequence: |
          Users just buy Android phones instead of dealing with the emulator.

  capacitive_skin_crisis:
    dimension: business
    prompt: |
      The skinned Java OS is a disaster. It freezes constantly. The iPhone 3G launches 
      and makes you look like a dinosaur.
    options:
      - text: "Drop the price of the phone by 50% to compete on value."
        leadsTo: end_slow_death
        points: 0
        pattern: race-to-bottom
        rationale: |
          A cheap, broken phone is still a broken phone.
        consequence: |
          You destroy your premium brand positioning and still don't sell units.
      - text: "Give up on touch entirely. Tell the board the experiment failed."
        leadsTo: end_retreat
        points: 5
        pattern: capitulation
        rationale: |
          You confirm the board's worst biases. They never try touch again.
        consequence: |
          You retreat to keyboards and die a slow death.

  node_refuse_verizon:
    dimension: business
    prompt: |
      Verizon is gone. They are pushing Motorola Droids. Consumer growth has flatlined. 
      The board wants a consumer strategy.
    options:
      - text: Double down on enterprise. Ignore the consumer market. Build hyper-secure phones.
        leadsTo: refuse_enterprise_crisis
        points: 30
        pattern: retreat-to-niche
        rationale: |
          Dominating a highly profitable niche is a valid survival strategy.
        consequence: |
          RIM shrinks but remains profitable for several years.
      - text: Launch a tablet (the PlayBook) to show we can innovate in new consumer form factors.
        leadsTo: refuse_playbook_crisis
        points: 0
        pattern: unforced-expansion
        rationale: |
          You can't build a touch phone, and you want to build a touch tablet?
        consequence: |
          The PlayBook launches without a native email app. It flops.

  refuse_enterprise_crisis:
    dimension: product
    prompt: |
      The enterprise niche is profitable, but 'Bring Your Own Device' (BYOD) is starting 
      to penetrate the enterprise. Employees are demanding to use their iPhones for work.
    options:
      - text: "Build MDM (Mobile Device Management) software to manage iPhones and Androids securely."
        leadsTo: end_enterprise_niche
        points: 20
        pattern: software-pivot
        rationale: |
          If you can't beat their hardware, secure their hardware.
        consequence: |
          You pivot successfully into a software security company.
      - text: "Force companies to ban iPhones. Lean on your government and banking relationships."
        leadsTo: end_retreat
        points: 0
        pattern: fighting-gravity
        rationale: |
          You cannot fight consumer gravity, even in the enterprise.
        consequence: |
          Companies just fire RIM and switch to MobileIron or Good Technology.

  refuse_playbook_crisis:
    dimension: business
    prompt: |
      The PlayBook tablet is a massive failure. You have $1 billion in unsold inventory.
    options:
      - text: "Write it off entirely. Fire the CEO. Attempt to sell the company."
        leadsTo: end_acquisition
        points: 10
        pattern: orderly-liquidation
        rationale: |
          The game is over. Maximize whatever shareholder value is left.
        consequence: |
          The company is sold for patents.
      - text: "Drop the price to $99 and try to clear the inventory at a massive loss."
        leadsTo: end_playbook
        points: 0
        pattern: desperate-fire-sale
        rationale: |
          You destroy the premium brand and still take the massive loss.
        consequence: |
          The company goes bankrupt shortly after.

  end_android:
    isOutcome: true
    prompt: |
      **The Hardware Commodity.**
      You survived by licensing Android. You became a niche hardware player making secure Android phones with physical keyboards. You exist, but you are no longer a platform kingmaker.
  end_brand_death:
    isOutcome: true
    prompt: |
      **The Death of a Brand.**
      SurePress 2.0 was the final nail. The brand became synonymous with broken hardware. The collapse was rapid and total.
  end_arrogance:
    isOutcome: true
    prompt: |
      **The Hubris Collapse.**
      Blaming the user cemented you as an arrogant dinosaur. Sales plummeted, the co-CEOs were ousted, and the company was sold for parts.
  end_slow_death:
    isOutcome: true
    prompt: |
      **Death by a Thousand Cuts.**
      The skinned OS and subsequent retreat to keyboards condemned you to irrelevance. Market share plummeted from 50% to zero over 4 years.
  end_qnx:
    isOutcome: true
    prompt: |
      **The Painful Salvation.**
      BB10 launched late, but it was modern. By paying for apps, you secured your position as a solid #3 player, deeply entrenched in enterprise, saving the company from total death.
  end_android_emulator:
    isOutcome: true
    prompt: |
      **The Parasitic Failure.**
      The Android emulator ran terribly. Users realized they should just buy real Android phones instead of dealing with your janky middle-layer.
  end_retreat:
    isOutcome: true
    prompt: |
      **The Slow Extinction.**
      By fighting BYOD and retreating from touch, you guaranteed the company's extinction. It just took five long, agonizing years.
  end_enterprise_niche:
    isOutcome: true
    prompt: |
      **The Software Pivot.**
      You pivoted away from hardware entirely and became a successful Mobile Device Management (MDM) software company. You lost the cultural war but won on Wall Street.
  end_acquisition:
    isOutcome: true
    prompt: |
      **The Patent Sale.**
      You admitted defeat. The company was carved up and sold to patent trolls and a consortium of buyers. The BlackBerry name lived on only in licensing deals.
  end_playbook:
    isOutcome: true
    prompt: |
      **The Final Distraction.**
      The PlayBook fire sale drained billions. It distracted engineering from fixing the phones. The company went bankrupt shortly after.
---
## What actually happened — the reveal

This drill is based on the real 2008 launch of the **BlackBerry Storm** by **Research In Motion**.

Under immense pressure from Verizon to deliver an "iPhone killer," RIM's co-CEOs (Mike Lazaridis and Jim Balsillie) pushed the hardware team to create a touchscreen device. But because they couldn't let go of their physical keyboard moat, they invented "SurePress"—a mechanical screen that required the user to physically depress the entire glass display to register a click.

It was a catastrophic failure. The legacy Java OS couldn't handle touch inputs smoothly, and the SurePress hardware was prone to jamming and failure. Verizon faced near 100% return rates in some stores. RIM eventually had to pay Verizon roughly $500 million to cover the losses.

Instead of taking the time to rebuild their OS from scratch (which they eventually tried to do years later with QNX/BlackBerry 10, but far too late), RIM opted for a complex hardware hack to bridge a paradigm shift.

The Storm destroyed BlackBerry's reputation for rock-solid reliability and opened the floodgates for Android (via the Motorola Droid) to become Verizon's true iPhone competitor. BlackBerry never recovered.

**Related reading:** [Why legacy moats become traps during platform shifts](/case-study/blackberry-touchscreen-delay-2008)
