---
slug: tesla-model-3-automation-2018
type: historical
category: Strategy
year: 2018
estimatedMinutes: 15
publishedAt: '2026-11-01T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-11-04T15:00:00+00:00'
principle: Over-automation of complex physical processes leads to catastrophic bottlenecks; humans are underrated at complex dexterity.
intro: |
  It's early 2018. Tesla is in "production hell" with the Model 3. The company’s survival depends on scaling production to 5,000 cars per week, but currently, you are barely scraping together a few hundred.
  
  You are a senior manufacturing leader at the Fremont factory. Elon Musk's vision was the "alien dreadnought"—a factory so highly automated that it looks like an alien spaceship, with robots building the machine that builds the machine. You have automated everything: parts delivery, welding, even installing fiberglass mats on the battery packs.
  
  But the line is constantly stopping. Robots are failing at simple, tactile tasks. Software glitches in the automated guided vehicles (AGVs) are causing traffic jams on the factory floor. Cash is burning fast.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: founder
    prompt: |
      The automated "fluff bot" meant to place fiberglass mats on battery packs is failing repeatedly, halting the entire line. The engineering team wants to rewrite the computer vision code, which will take weeks. What is your call?
    options:
      - text: "Tear out the 'fluff bot' immediately and replace it with human workers. Humans are better at handling flexible materials."
        leadsTo: "node_human_workers"
        points: 50
        rationale: "Recognizing that humans excel at tactile, adaptive tasks while robots excel at precise, repeatable tasks is crucial."
      - text: "Double down on the automation. Bring in extra software engineers and halt the line until the vision system is perfected."
        leadsTo: "node_double_down_automation"
        points: 0
        rationale: "Stubbornly clinging to automation for tasks better suited to humans caused massive delays and nearly bankrupted the company."
        
  node_double_down_automation:
    dimension: business
    prompt: |
      You wait for the code rewrite. The line remains stalled. Wall Street is panicking, and short sellers are circling. Tesla's cash reserves will run out in a matter of months. How do you address the cash crunch while waiting?
    options:
      - text: "Ask suppliers for retroactive price cuts and delay payments to conserve cash."
        leadsTo: "node_supplier_squeeze"
        points: 0
        rationale: "Squeezing suppliers during a crisis destroys trust and threatens your supply chain."
      - text: "Open up pre-orders for a future vehicle (like the Roadster) to generate immediate cash deposits."
        leadsTo: "node_preorder_cash"
        points: 20
        rationale: "A clever financing trick, but it doesn't solve the core manufacturing bottleneck."
        
  node_human_workers:
    dimension: product
    prompt: |
      You replaced the bot with humans, and that segment of the line is moving. But overall throughput is still too low because the main factory building is physically out of space for final assembly. You need more capacity immediately.
    options:
      - text: "Construct a massive, sprung-structure tent in the parking lot and build a new, simplified assembly line inside it."
        leadsTo: "node_tent_factory"
        points: 50
        rationale: "A radically scrappy, out-of-the-box solution that solved the space constraint rapidly."
      - text: "Halt production to radically redesign the existing factory floor layout to squeeze in a second line."
        leadsTo: "node_factory_redesign"
        points: 0
        rationale: "Halting production entirely would have guaranteed bankruptcy; you cannot stop the line."
        
  node_supplier_squeeze:
    isOutcome: true
    prompt: "Suppliers balk. Some refuse to ship crucial parts. Production grinds to an absolute halt. Tesla files for Chapter 11 bankruptcy. The 'alien dreadnought' becomes a cautionary tale."
    
  node_preorder_cash:
    isOutcome: true
    prompt: "You buy a few months of runway, but the core production issues persist. Eventually, the cash runs out. You are forced to sell the company to an legacy automaker at a massive discount."
    
  node_tent_factory:
    isOutcome: true
    prompt: "GA4 (General Assembly 4) in the tent works. By stripping away over-automation and relying on human adaptability, you hit the 5,000 cars/week milestone. Tesla survives production hell and becomes the most valuable automaker on Earth."
    
  node_factory_redesign:
    isOutcome: true
    prompt: "The downtime is fatal. While the new layout is theoretically better, the company runs out of cash before a single car rolls off the newly redesigned line."
---
