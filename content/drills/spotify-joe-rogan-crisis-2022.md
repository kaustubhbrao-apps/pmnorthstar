---
slug: spotify-joe-rogan-crisis-2022
caseStudySlug: spotify-joe-rogan-crisis-2022
type: historical
category: strategic
publishedAt: '2026-11-11T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-11-15T15:00:00+00:00'
estimatedMinutes: 10
principle: |
  A platform's rules must be systemic, not episodic. When you make moderation 
  decisions in response to PR pressure rather than established policy, you transition 
  from a neutral platform to a liable publisher. You cannot buy creators like a 
  network but moderate them like a utility. You must pick your business model and own the fallout.
intro: |
  It's January 2022. You are the CEO of Spotify.
  
  Two years ago, you paid over $200 million for the exclusive rights to the *The Joe Rogan Experience*, signaling a massive pivot from purely music distribution to becoming the world's leading audio network. It worked—Rogan brought 11 million daily listeners and single-handedly built your podcast ad business.
  
  But today, it's a crisis. Rogan has been interviewing controversial doctors about the COVID-19 vaccine. The medical community is outraged. Now, rock legend Neil Young has published an open letter: "They can have Rogan or Young. Not both."
  
  The hashtag #DeleteSpotify is trending globally. Your stock is down 6% in pre-market trading. Employees are threatening walkouts, and the press is demanding to know why Spotify is "funding misinformation."
  
  You are caught between your biggest creator, the music industry that supplies your core product, and your own workforce.
nodes:
  start:
    dimension: founder
    prompt: |
      The board wants an immediate response. PR is drafting three different statements. 
      Neil Young's label is waiting on the line to process the takedown of his catalog if you don't yield.
    options:
      - text: "Quietly remove Rogan's most controversial episodes to appease critics."
        points: 0
        pattern: short-term-appeasement
        rationale: |
          Making ad-hoc moderation choices without a policy precedent makes you look guilty and sets a standard that any angry mob can force your hand.
        consequence: |
          You delete 70 episodes. Reddit notices within 15 minutes.
        leadsTo: A-appeasement
      - text: "Refuse to remove anything. State firmly: 'We are a platform, not a publisher.'"
        points: 5
        pattern: rigid-ideology
        rationale: |
          While legally true, this ignores the reality that you paid $200M for exclusive rights. You aren't just a platform for Rogan; you are his exclusive sponsor.
        consequence: |
          Neil Young pulls his catalog. Joni Mitchell follows. The press eviscerates you.
        leadsTo: B-absolutist
      - text: "Publish internal content policies and add content advisories to all COVID podcasts."
        points: 15
        pattern: systemic-transparency
        rationale: |
          The right systemic move. You shift the debate from "Spotify's morality" to "Spotify's rulebook," taking the subjective heat out of the moderation.
        consequence: |
          You publish the rules. Neil Young still leaves, but the broader industry reaction stabilizes.
        leadsTo: C-transparent

  A-appeasement:
    dimension: product
    prompt: |
      You deleted 70 episodes. The internet noticed instantly. Rogan is furious—he feels betrayed because you promised creative control in the $200M deal. Meanwhile, the appeasement didn't work. Brené Brown pauses her exclusive Spotify podcast, and the press is now digging up decade-old clips of Rogan using racial slurs out of context. The pressure is 10x worse.
    options:
      - text: "Suspend Rogan's contract. The brand risk is too high."
        points: 0
        pattern: panic-button
        rationale: |
          You are burning a $200M asset and your only moat in the podcast war because of a news cycle.
        consequence: |
          Rogan announces he's leaving Spotify to launch an independent platform.
        leadsTo: A-suspend
      - text: "Hold an emergency meeting with Rogan. Announce a $100M 'marginalized creator fund'."
        points: 8
        pattern: pr-shield
        rationale: |
          A classic corporate crisis move. Throw money at the PR problem to buy goodwill while keeping the cash cow intact.
        consequence: |
          You announce the fund. Rogan issues a public apology for the old clips.
        leadsTo: A-fund
      - text: "Reverse course. Put the deleted episodes back up and apologize for overstepping."
        points: 0
        pattern: zero-conviction
        rationale: |
          Flip-flopping destroys trust on all sides. You look like a leaf blowing in the wind.
        consequence: |
          The artists think you're spineless, and Rogan's fans think you're a sellout.
        leadsTo: A-flip-flop

  A-suspend:
    dimension: business
    prompt: |
      Rogan takes his 11 million daily listeners with him. Your stock tanks 15% in a single day as Wall Street realizes your entire podcast strategy—your only defense against Apple—is dead. The board calls an emergency session.
    options:
      - text: "Offer your resignation. The board has lost confidence."
        points: 0
        pattern: total-defeat
        rationale: |
          You let a PR crisis dictate your core business strategy, and it cost you the company.
        consequence: |
          The board accepts your resignation.
        leadsTo: end-A-resign
      - text: "Pivot the company back to pure music streaming. Abandon podcasts."
        points: 5
        pattern: strategic-regression
        rationale: |
          Retreating to your core business is safer, but music streaming has terrible gross margins due to label royalties.
        consequence: |
          You survive the quarter, but your long-term valuation gets slashed in half.
        leadsTo: end-A-retreat

  A-fund:
    dimension: founder
    prompt: |
      The $100M fund stops the external bleeding, but internal employees are in full revolt. The Slack channels are melting down. An employee coalition demands editorial review power over all future Rogan episodes before they go live.
    options:
      - text: "Grant employees editorial review power to prevent walkouts."
        points: 0
        pattern: crossing-the-rubicon
        rationale: |
          If you review content before publishing, you are legally a publisher, not a platform. You just assumed liability for every word spoken on Spotify.
        consequence: |
          Employees rejoice, but Spotify's legal exposure skyrockets.
        leadsTo: end-A-publisher
      - text: "Refuse. Tell employees the rules are set and Rogan retains creative control."
        points: 10
        pattern: drawing-the-line-late
        rationale: |
          You finally draw the line. It's messy, but yielding editorial control to employees is corporate suicide.
        consequence: |
          Employees leak internal documents to the press, causing a minor news cycle.
        leadsTo: end-A-leaks

  A-flip-flop:
    dimension: product
    prompt: |
      You restored the episodes. Now everyone hates you. Neil Young's camp feels vindicated in leaving. Rogan's audience no longer trusts your commitment to free speech. The PR team is asking for direction.
    options:
      - text: "Do nothing. Eat the damage and wait for the next news cycle."
        points: 5
        pattern: eating-the-damage
        rationale: |
          Sometimes the best PR strategy is shutting up. Any further action just extends the story.
        consequence: |
          The press moves on after two weeks, but your brand equity is permanently scarred.
        leadsTo: end-A-pariah
      - text: "Launch a massive PR and ad campaign defending free expression."
        points: 0
        pattern: pouring-gas-on-fire
        rationale: |
          You are spending millions of dollars to remind people of a controversy they were about to forget.
        consequence: |
          The ads reignite the debate. The boycott trends again.
        leadsTo: end-A-wasted-money

  B-absolutist:
    dimension: business
    prompt: |
      You take a hardline stance: "We are a tech platform, not an editor." Neil Young walks, followed by a few other legacy artists. But soon, major corporate advertisers (Coke, Ford, Verizon) pause their ad spend on your podcast network to avoid brand risk. Your podcast ad revenue drops 40% in a single week.
    options:
      - text: "Subsidize the ad losses using premium subscription revenue."
        points: 5
        pattern: margin-destruction
        rationale: |
          You are using your high-margin core business to bail out the risky new bet. It protects Rogan but destroys unit economics.
        consequence: |
          Wall Street notices the margins compressing. Your CFO warns of a catastrophic Q1 earnings call.
        leadsTo: B-subsidize
      - text: "Quietly ask Rogan to tone it down and read a pre-written apology."
        points: 0
        pattern: half-measure
        rationale: |
          You took a public absolutist stance, but privately you are trying to act like a publisher. You get the worst of both worlds.
        consequence: |
          Rogan refuses. "If you want to edit me, fire me."
        leadsTo: B-compromise
      - text: "Double down. Court new, edgy advertisers (crypto, supplements, VPNs)."
        points: 12
        pattern: market-segmentation
        rationale: |
          You accept your new position in the market. If you are the platform for controversial content, sell ads to controversial sponsors.
        consequence: |
          Ad revenue recovers, but mainstream music artists complain about the new ad mix.
        leadsTo: B-edgy-ads

  B-subsidize:
    dimension: business
    prompt: |
      Your CFO warns that missing Q1 earnings because of the ad subsidy will cause a 20% stock drop. You need to plug the hole fast.
    options:
      - text: "Raise the price of Spotify Premium by $1 to cover the gap."
        points: 0
        pattern: passing-the-buck
        rationale: |
          Taxing your music subscribers to pay for a podcast controversy they don't care about is a great way to drive them to Apple Music.
        consequence: |
          Subscriber churn spikes. The stock drops anyway.
        leadsTo: end-B-price-hike
      - text: "Take the earnings hit. Explain it as a long-term creator acquisition strategy."
        points: 10
        pattern: taking-the-l
        rationale: |
          You take the financial punch to the face but protect the integrity of the product and the user base.
        consequence: |
          Stock drops 15%, but the platform architecture remains intact.
        leadsTo: end-B-earnings-hit

  B-compromise:
    dimension: founder
    prompt: |
      Rogan called your bluff. He won't read the apology. He's challenging you to fire him.
    options:
      - text: "Fire him. Break the contract."
        points: 0
        pattern: total-value-destruction
        rationale: |
          You lose $200M, your biggest creator, and you still look weak because you only did it after getting pushed.
        consequence: |
          Spotify's podcast ambitions are completely wiped out.
        leadsTo: end-B-fire
      - text: "Back down and let him do what he wants."
        points: 2
        pattern: loss-of-leverage
        rationale: |
          You surrender all leverage. Rogan now knows he effectively runs the company.
        consequence: |
          You keep the revenue, but the internal culture rots as employees realize you are hostage to one man.
        leadsTo: end-B-cuck

  B-edgy-ads:
    dimension: product
    prompt: |
      You replaced Coke and Ford with crypto casinos and supplements. The ad revenue recovers. However, mainstream pop artists threaten to pull out because they don't want their family-friendly music playing next to crypto ads.
    options:
      - text: "Separate the ad networks for Music and Podcasts entirely."
        points: 15
        pattern: architectural-isolation
        rationale: |
          The brilliant structural fix. You isolate the brand-safe music business from the wild-west podcast business.
        consequence: |
          The artists calm down. The advertisers are satisfied.
        leadsTo: end-B-ad-split
      - text: "Tell the artists they don't control the ad inventory."
        points: 2
        pattern: unnecessary-antagonism
        rationale: |
          You pick a fight with your supply side over something you could easily fix in software.
        consequence: |
          Taylor Swift and others threaten to pull their catalogs.
        leadsTo: end-B-artist-war

  C-transparent:
    dimension: business
    prompt: |
      You publish the "Spotify Platform Rules" and add advisories to COVID-related content. The stock stabilizes. However, the media narrative shifts. Critics point out: "Why are you paying Joe Rogan $200M to spread controversy while musicians make $0.003 per stream?" The COVID crisis has morphed into a royalty inequality crisis.
    options:
      - text: "Ignore the royalty debate. They are completely different business models."
        points: 12
        pattern: structural-discipline
        rationale: |
          Podcasts are exclusive IP; music is licensed non-exclusive distribution. Conflating them is a PR trap. Don't legitimize the comparison.
        consequence: |
          The music industry is furious and launches a coordinated campaign against you.
        leadsTo: C-ignore-royalties
      - text: "Announce a new royalty model paying artists more, funded by cutting label margins."
        points: 0
        pattern: fighting-the-supplier
        rationale: |
          You are using a PR crisis as an excuse to declare war on Universal, Sony, and Warner—the companies that own 70% of your product.
        consequence: |
          The major labels threaten to pull their entire catalogs off Spotify globally.
        leadsTo: C-labels-war
      - text: "Launch a 'Creator Tipping' feature to let users pay artists directly."
        points: 5
        pattern: performative-product
        rationale: |
          A classic tech solution to a political problem. It looks good but fundamentally doesn't change the economics.
        consequence: |
          The feature launches. It makes almost no money for artists.
        leadsTo: C-tipping

  C-ignore-royalties:
    dimension: product
    prompt: |
      You hold the line. But a massive coordinated campaign by indie artists starts actively telling their listeners to switch to Apple Music. "Cancel Spotify, they don't pay us."
    options:
      - text: "Offer exclusive playlist placements to indie artists who stay loyal."
        points: 5
        pattern: algorithm-corruption
        rationale: |
          You are corrupting your core product feature (editorial playlists) to bribe angry suppliers. It degrades the user experience.
        consequence: |
          Some artists stay, but the quality of your flagship playlists drops.
        leadsTo: end-C-playlist-bribe
      - text: "Hold the line. Apple Music's UX isn't good enough to cause mass churn."
        points: 15
        pattern: moat-confidence
        rationale: |
          You recognize that users listen to Spotify because of the algorithm and UX, not out of moral solidarity with indie bands.
        consequence: |
          Churn is minimal. You win the long game without breaking your product.
        leadsTo: end-C-hold-the-line

  C-labels-war:
    dimension: business
    prompt: |
      Universal and Sony call your bluff. They give you 48 hours to retract your threat to their margins, or they will pull their catalogs. You are staring down the barrel of an empty app.
    options:
      - text: "Call their bluff. They need Spotify's revenue as much as we need their music."
        points: 0
        pattern: fatal-miscalculation
        rationale: |
          They hold a legal monopoly on the world's most popular IP. You are just a distribution pipe. They can survive a quarter of lost revenue; your stock goes to zero in a week.
        consequence: |
          They pull out. Spotify becomes unusable.
        leadsTo: end-C-bluff
      - text: "Retreat immediately and issue a joint statement reaffirming the partnership."
        points: 5
        pattern: public-capitulation
        rationale: |
          You survive, but you publicly neutered yourself in front of the industry.
        consequence: |
          You look incredibly weak, but the app stays online.
        leadsTo: end-C-humiliation

  C-tipping:
    dimension: founder
    prompt: |
      The tipping feature is a dud. The press calls it a "slap in the face." Now, opportunistic politicians are getting involved, proposing congressional hearings on "Streaming Monopolies and Artist Exploitation."
    options:
      - text: "Send lobbyists to quietly kill the bill in committee."
        points: 8
        pattern: dark-arts
        rationale: |
          Standard corporate defense. It works, but it's expensive and does nothing to improve your public image.
        consequence: |
          The hearings are delayed indefinitely. The PR stain remains.
        leadsTo: end-C-lobbying
      - text: "Embrace the hearings. Testify publicly that major labels take the lion's share of the money."
        points: 12
        pattern: narrative-judo
        rationale: |
          You use the political theater to redirect the public's anger to the actual bottleneck in music economics: the major labels.
        consequence: |
          You win the public opinion battle, though the labels will hate you forever.
        leadsTo: end-C-testify

  end-A-resign:
    isOutcome: true
    prompt: |
      You let a temporary PR crisis dictate your core business strategy. You destroyed a $200M asset, lost your podcast moat, and ultimately lost the company.
  end-A-retreat:
    isOutcome: true
    prompt: |
      You survived by retreating to your core music business, but the company's growth story is dead. You are forever locked into terrible margin structures with the labels.
  end-A-publisher:
    isOutcome: true
    prompt: |
      By granting editorial review to your employees, you legally crossed the line from platform to publisher. You are now liable for every controversial statement made on your app.
  end-A-leaks:
    isOutcome: true
    prompt: |
      You survived the crisis, but internal trust is shattered. Top talent leaves for rivals, and your internal Slack remains a toxic battleground for the next year.
  end-A-pariah:
    isOutcome: true
    prompt: |
      You flip-flopped and pleased nobody. You survived the news cycle, but your brand equity as a creator-first platform is permanently damaged.
  end-A-wasted-money:
    isOutcome: true
    prompt: |
      You spent millions on a PR campaign that only reminded people why they were mad at you. A masterclass in unforced errors.
  end-B-price-hike:
    isOutcome: true
    prompt: |
      You taxed your music users to pay for a podcast mistake. User churn spiked, the stock tanked, and you alienated your core user base.
  end-B-earnings-hit:
    isOutcome: true
    prompt: |
      You took the financial punch to the face. Wall Street punished you in the short term, but your platform architecture and long-term strategy remained intact.
  end-B-fire:
    isOutcome: true
    prompt: |
      You fired your biggest creator after taking a public stand for him. You lost the $200M investment, the users, and your reputation for conviction.
  end-B-cuck:
    isOutcome: true
    prompt: |
      You surrendered all leverage to Rogan. He knows he's untouchable, and your employees know you have no spine. A terrible way to run a company.
  end-B-ad-split:
    isOutcome: true
    prompt: |
      A brilliant structural fix. You isolated the brand-safe music business from the controversial podcast business, protecting your revenue without compromising your platform stance.
  end-B-artist-war:
    isOutcome: true
    prompt: |
      You picked an unnecessary fight with your core suppliers (musicians) over ad inventory, leading to massive catalog boycotts. You won the battle but lost the war.
  end-C-playlist-bribe:
    isOutcome: true
    prompt: |
      You corrupted your core product's algorithm to appease angry suppliers. Users notice the drop in recommendation quality, and engagement slowly declines.
  end-C-hold-the-line:
    isOutcome: true
    prompt: |
      You understood your actual moat. Users care about your product, not industry politics. You held your ground, the news cycle moved on, and you won.
  end-C-bluff:
    isOutcome: true
    prompt: |
      You played chicken with the entities that own 70% of your product. They pulled their catalogs, the app became a ghost town, and Spotify died.
  end-C-humiliation:
    isOutcome: true
    prompt: |
      You survived, but at the cost of public humiliation. The labels now know you will back down when threatened, stripping you of all future negotiating leverage.
  end-C-lobbying:
    isOutcome: true
    prompt: |
      You killed the bill using standard corporate dark arts. It worked, but the underlying PR problem remains, and you look like just another evil tech monopoly.
  end-C-testify:
    isOutcome: true
    prompt: |
      You successfully redirected the anger toward the major labels. It was a bold, risky move that won public opinion, but you'll be fighting a cold war with the labels for the next decade.
---
## What's at stake here

This drill simulates the exact crisis Spotify faced in early 2022. The fundamental tension is the collision of two completely different business models inside one app: **licensed music distribution** (where you are a neutral pipe) and **exclusive podcasting** (where you act like a network).

When you pay $200M for exclusive rights to a creator, you cannot claim you are merely a neutral platform. You are their sponsor. However, if you start actively moderating their content based on PR backlash, you assume the legal and structural liabilities of a publisher. 

The winning strategy for platforms facing content crises is **systemic transparency**. Ad-hoc moderation always fails. You must build clear, publicly accessible rules and productize the friction (e.g., content advisories) rather than relying on manual episode takedowns. Furthermore, you must understand your actual moats—users stay for the UX and the algorithms, not because of industry politics.

**Related reading:** [Platform vs. Publisher: The 2020s tech dilemma](/topics/platform-vs-publisher)
