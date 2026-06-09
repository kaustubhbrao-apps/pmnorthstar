---
slug: snap-spectacles-launch-2016
type: historical
category: Product
year: 2016
estimatedMinutes: 15
publishedAt: '2026-10-21T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-10-25T15:00:00+00:00'
principle: Artificial scarcity drives initial hype, but failing to transition to scalable distribution destroys the business.
intro: |
  It's late 2016. You are leading the launch of Snap Inc.'s first hardware product: Spectacles. They are stylish sunglasses with an integrated camera that records 10-second circular videos directly to Snapchat.
  
  Instead of a traditional retail or online launch, you've designed a guerrilla marketing masterpiece: the "Snapbot". These bright yellow vending machines drop in random locations, announced only hours beforehand. The hype is instant. Lines stretch for blocks, the glasses sell out in minutes, and they are reselling on eBay for thousands of dollars.
  
  The initial launch is a massive cultural moment. You've made wearable tech cool. But now, you face the critical transition from viral stunt to a sustainable hardware business.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: strategy
    prompt: |
      The Snapbots have generated incredible buzz. The executive team is thrilled and wants to scale. They propose ordering hundreds of thousands of units from the manufacturer in China to meet what they perceive as massive pent-up demand. What is your supply chain recommendation?
    options:
      - text: "Keep supply tightly constrained. Slowly expand the Snapbots and launch a limited online store. Do not over-order."
        next: "constrained_supply"
        points: 50
        rationale: "Hype does not equal sustained demand. Hardware requires careful inventory management."
      - text: "Approve the massive order. Capitalize on the hype now before the momentum fades. Flood the market."
        next: "massive_order"
        points: 0
        rationale: "Mistaking artificial scarcity hype for broad market demand is a fatal hardware error."

  constrained_supply:
    dimension: product
    prompt: |
      You manage the inventory carefully. The hype slowly cools down, but you aren't sitting on massive unsold stock. However, data shows that retention is terrible. Users wear the glasses for a week, record a few videos, and then put them in a drawer. How do you iterate on the product?
    options:
      - text: "Focus entirely on software integration. Make it easier to edit and export the videos to other platforms."
        next: "software_focus"
        points: 0
        rationale: "If the core utility of capturing the moment isn't sticky, exporting won't save the product."
      - text: "Halt V2 development to deeply research why users abandon the hardware. Wait until you have a killer use case before launching again."
        next: "halt_research"
        points: 50
        rationale: "A cool toy isn't a sustained business. You need a sticky use case."

  massive_order:
    dimension: business
    prompt: |
      You approve the massive order of 800,000 units. By the time they arrive, the Snapbot hype has completely died. You finally open an online store, but sales are a trickle. The warehouses are full of unsold glasses. The CFO is panicking. What is your next move?
    options:
      - text: "Slash prices immediately, push them into big-box retailers (Target, Best Buy) to clear the inventory."
        next: "slash_prices"
        points: 50
        rationale: "Accept the loss and clear the inventory. It hurts the brand, but saves cash."
      - text: "Hold the price to protect the premium brand. Launch a massive traditional ad campaign to reignite the hype."
        next: "hold_price"
        points: 0
        rationale: "Throwing good marketing money after bad inventory will only compound the financial disaster."

  halt_research:
    isOutcome: true
    prompt: |
      You avoid the massive write-down. Spectacles remain a cool experiment rather than a core business driver, but you save the company hundreds of millions and pivot the AR strategy towards software lenses.
      
      Score: 100/100
      You navigated the transition from hype to reality gracefully.

  software_focus:
    isOutcome: true
    prompt: |
      The software improvements don't move the needle on hardware retention. The glasses remain a novelty, and the hardware division continues to burn money without a clear path to profitability.
      
      Score: 50/100
      You iterated on the wrong problem.

  slash_prices:
    isOutcome: true
    prompt: |
      You clear the inventory, but Snap takes a massive public write-down. The brand takes a hit, and investors severely punish the stock for the gross mismanagement of hardware inventory.
      
      Score: 50/100
      You mitigated the disaster, but the initial miscalculation was incredibly costly.

  hold_price:
    isOutcome: true
    prompt: |
      This is the historical reality. Snap massively over-ordered based on the vending machine hype. Demand evaporated. They were forced to take a devastating $40 million write-down on unsold inventory, crippling their hardware ambitions for years.
      
      Score: 0/100
      You believed your own marketing stunt and ignored hardware fundamentals.
---
