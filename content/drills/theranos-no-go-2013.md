---
slug: theranos-no-go-2013
caseStudySlug: theranos-fraud
type: historical
category: crisis
publishedAt: '2026-11-04T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-11-08T15:00:00+00:00'
year: 2013
estimatedMinutes: 6
principle: |
  The hardest call a senior employee at a hyped startup makes is the
  one to leave when the science doesn't work. Pattern-matched
  excellence (Stanford, board members, billions raised) doesn't
  override the data on your monitor. If the lab results don't
  reproduce, the company can't.
intro: |
  You are a senior R&D scientist at a high-profile health-tech
  startup. The company has raised $400M+ at a $9B valuation. The
  CEO is on the cover of business magazines. Board members include
  former Secretaries of State and military generals.

  The promised product is a blood-testing machine that can run
  hundreds of tests on a single finger-prick. Internally, the
  device works for ~12 specific tests under ideal conditions. The
  remaining tests run on standard commercial machines hidden behind
  a curtain — including all the tests being run on samples from the
  pharmacy partnership that just launched.

  Investor demos use the proprietary device for show, but the
  actual diagnostic results returned to patients come from the
  commercial machines. Three colleagues in your lab have raised
  this discrepancy with the CEO. All three have been moved off
  the project. You've been asked to sign an updated NDA.
nodes:
  start:
    dimension: founder
    prompt: |
      You're four years into a job you took because you believed in
      the mission. Pick the move.
    options:
      - text: Sign the NDA. Stay quiet. Keep collecting the paycheck while you figure out next steps.
        points: 0
        pattern: complicity-by-inaction
        rationale: |
          Catastrophic. Every month you stay quiet is another month
          you become legally and morally entangled in the misuse
          of diagnostics on real patients. The NDA you sign will
          eventually be used to suppress your testimony. The
          paycheck argument always feels reasonable in the moment
          and ruinous in retrospect — your career and reputation
          will be defined by what happens when the truth comes out.
        consequence: |
          You sign. The immediate crisis is averted, but you are now bound.
        leadsTo: A-nda-followup
      - text: Refuse to sign. Document everything you've seen. Resign and contact regulators.
        points: 15
        pattern: integrity-over-pattern-match
        rationale: |
          The right call, however hard. Real patients are receiving
          diagnostic results from machines being used outside their
          validated specifications — that's a patient-safety
          issue, not a startup-pivot question. The pattern-matched
          excellence around the company (the board, the press, the
          valuation) doesn't override the data on your monitor.
          Resigning + contacting regulators preserves your
          integrity, protects patients, and ends your association
          before the public reckoning.
        consequence: |
          You resign. You are now a target of the company's aggressive legal team.
        leadsTo: B-resign-followup
      - text: Take the issue to the board. Trust the governance to investigate.
        points: 9
        pattern: trust-the-governance
        rationale: |
          Defensible procedurally, often unreliable in practice.
          Boards at hyped startups with celebrity directors tend
          to defer to the CEO until the public reckoning forces
          action. Three colleagues already raised this issue and
          got moved off the project — that pattern is the signal
          that internal channels are captured. Going to the board
          rarely produces the corrective action a regulator
          would.
        consequence: |
          Your concerns are noted in a confidential memo. The
          board commissions an "external review".
        leadsTo: C-board-followup
      - text: Stay but try to fix it from the inside. You're senior; you can push for better validation.
        points: 3
        pattern: hero-inside-the-broken-system
        rationale: |
          The "I'll fix it from within" rationalization. Three
          colleagues with similar seniority have already tried;
          they were moved off the project. The pattern is clear:
          the company isn't a science company with a leadership
          problem — it's a leadership-driven misuse of science.
          You can't fix that from inside without the leadership
          changing, and the leadership hasn't.
        consequence: |
          You stay and try to reform the testing protocols.
        leadsTo: D-inside-followup
  A-nda-followup:
    dimension: founder
    prompt: |
      You signed the NDA. Six months later, you are asked to sign off on validation reports for a new suite of tests. You know the data has been cherry-picked to remove outliers and the device is still failing.
    options:
      - text: Sign the reports. You are already in this deep.
        points: 0
        pattern: doubling-down-on-fraud
        rationale: Signing fraudulent validation reports crosses the line from bystander to active participant in fraud.
        consequence: Your signature is now on the core documents of the deception.
        leadsTo: A-sign-fake
      - text: Refuse to sign and quit immediately.
        points: 10
        pattern: belated-integrity
        rationale: You finally hit your breaking point. Better late than never, but you still wasted 6 months.
        consequence: You are fired and threatened with the NDA you signed.
        leadsTo: A-quit-late
  A-sign-fake:
    dimension: founder
    prompt: |
      You signed the reports. The regulators are now conducting a surprise inspection.
    options:
      - text: Lie to the regulators to protect the company.
        points: 0
        pattern: criminal-complicity
        rationale: Perjury and obstructing a federal investigation.
        consequence: You face federal charges.
        leadsTo: end-A
      - text: Confess everything to the regulators immediately.
        points: 5
        pattern: panic-confession
        rationale: You try to save yourself, but your signature is already on the documents.
        consequence: You get immunity but your career is destroyed.
        leadsTo: end-A
  A-quit-late:
    dimension: founder
    prompt: |
      You quit, but you are terrified. A federal investigation has begun, but you are not yet named.
    options:
      - text: Volunteer as a witness.
        points: 10
        pattern: redemption
        rationale: You try to make it right.
        consequence: You become a key witness.
        leadsTo: end-A-late
      - text: Hide and hope they don't find you.
        points: 0
        pattern: cowardice
        rationale: They always find the senior scientists.
        consequence: You are subpoenaed anyway.
        leadsTo: end-A-late
  B-resign-followup:
    dimension: founder
    prompt: |
      You resigned. The company is suing you for the NDA breach
      they claim you committed by talking to the FDA. You're
      receiving threats from private investigators hired by the
      company's law firm. A journalist has reached out asking for
      on-record testimony.
    options:
      - text: Go on the record with the journalist. The public story is the only thing that protects you.
        points: 15
        pattern: transparency-as-defense
        rationale: |
          Defensive but correct. The intimidation campaign relies
          on the threat of public exposure cutting both ways.
          Going public first inverts the leverage: the company
          can't credibly threaten you for a story that's already
          out, and the regulators investigating the company now
          have public corroboration of the internal misconduct.
          The personal cost is real but transient; the
          legal/reputational cost of staying silent is permanent.
        consequence: |
          The journalist's story breaks. Other former employees
          come forward. The federal investigation accelerates.
        leadsTo: B-journal-followup
      - text: Stay quiet. Settle the NDA case privately. Rebuild your career outside the spotlight.
        points: 9
        pattern: settle-and-retreat
        rationale: |
          Survivable but ethically thinner. The settlement makes
          your immediate situation safer but leaves you bound to
          silence while patients continue to receive bad
          diagnostics. The harm doesn't stop because you signed
          a non-disparagement clause.
        consequence: |
          The settlement closes. You move to a different state
          and take a quieter role.
        leadsTo: B-quiet-followup
  B-journal-followup:
    dimension: founder
    prompt: |
      The story is public. The company is now suing you for defamation and trade secret theft.
    options:
      - text: Fight it in court. Let discovery expose them.
        points: 15
        pattern: standing-firm
        rationale: They are bluffing. They can't survive discovery.
        consequence: The lawsuit is dropped shortly after regulators raid their offices.
        leadsTo: end-B-great
      - text: Cave to the pressure and retract your statements.
        points: 0
        pattern: buckling
        rationale: You destroy your own credibility and hand them a victory.
        consequence: You are disgraced publicly.
        leadsTo: end-B-good
  B-quiet-followup:
    dimension: founder
    prompt: |
      You stayed quiet. A year later, Congress is holding hearings and you receive a federal subpoena.
    options:
      - text: Testify fully and truthfully.
        points: 15
        pattern: compelled-truth
        rationale: You have no choice now.
        consequence: You tell the truth, but your delay cost patients.
        leadsTo: end-B-good
      - text: Plead the Fifth to avoid any liability.
        points: 5
        pattern: self-preservation
        rationale: Legally safe, morally vacant.
        consequence: You survive legally but are a pariah in the industry.
        leadsTo: end-B-bad
  C-board-followup:
    dimension: founder
    prompt: |
      The board's "external review" found nothing wrong. You are reassigned to a meaningless project.
    options:
      - text: Quit now. It's clear they are all in on it.
        points: 10
        pattern: seeing-the-light
        rationale: The governance failed. Time to go.
        consequence: You leave quietly.
        leadsTo: C-quit-now
      - text: Stay quiet and ride it out.
        points: 0
        pattern: willful-ignorance
        rationale: You are actively choosing to ignore the ongoing fraud.
        consequence: You become part of the problem.
        leadsTo: C-stay
  C-quit-now:
    dimension: founder
    prompt: |
      You quit. Do you blow the whistle now?
    options:
      - text: Yes, go to the regulators.
        points: 15
        pattern: belated-whistleblower
        rationale: Better late than never.
        consequence: You help bring them down.
        leadsTo: end-C
      - text: No, just move on.
        points: 5
        pattern: wash-hands
        rationale: You escape, but don't help stop it.
        consequence: You watch from the sidelines.
        leadsTo: end-C
  C-stay:
    dimension: founder
    prompt: |
      You stayed. The federal raid happens.
    options:
      - text: Cooperate.
        points: 10
        pattern: forced-cooperation
        rationale: You only do the right thing when forced.
        consequence: You avoid jail but your career is over.
        leadsTo: end-A
      - text: Continue lying.
        points: 0
        pattern: loyalty-to-fraud
        rationale: Inexcusable.
        consequence: Prison.
        leadsTo: end-A
  D-inside-followup:
    dimension: founder
    prompt: |
      You spent 18 months trying to reform the QA processes. The CEO completely ignores your reports.
    options:
      - text: Leak the QA reports to the press anonymously.
        points: 10
        pattern: shadow-whistleblower
        rationale: You finally take action, but hide your identity.
        consequence: The press gets the story, you keep your job temporarily.
        leadsTo: D-leak
      - text: Give up and leave quietly.
        points: 5
        pattern: quiet-exit
        rationale: You tried, it failed, you leave.
        consequence: You escape the worst of it.
        leadsTo: D-leave
  D-leak:
    dimension: founder
    prompt: |
      The press publishes your leaked reports. The company begins a witch hunt to find the leaker.
    options:
      - text: Come forward internally and resign.
        points: 15
        pattern: owning-it
        rationale: You own your actions.
        consequence: You are fired and sued, but sleep well.
        leadsTo: end-B-good
      - text: Deny everything and let a colleague take the fall.
        points: 0
        pattern: moral-bankruptcy
        rationale: Cowardice.
        consequence: You survive but destroy an innocent person's life.
        leadsTo: end-B-bad
  D-leave:
    dimension: founder
    prompt: |
      You left. Your name is still on the patents.
    options:
      - text: Demand your name be removed.
        points: 10
        pattern: clearing-name
        rationale: You try to distance yourself.
        consequence: They refuse, but you have a paper trail.
        leadsTo: end-D
      - text: Do nothing.
        points: 0
        pattern: apathy
        rationale: You leave yourself exposed.
        consequence: You are named in the lawsuits later.
        leadsTo: end-D
  end-A:
    isOutcome: true
    prompt: |
      The complicity compounded. Years later, the public
      reckoning named you among the senior staff who knew. Career
      in healthcare ended; legal exposure substantial; reputation
      permanently damaged. The integrity choice was always
      available; you took the paycheck path.
  end-A-late:
    isOutcome: true
    prompt: |
      You got out late. Your career took a massive hit, and you spent years dealing with subpoenas, but you avoided criminal charges.
  end-B-great:
    isOutcome: true
    prompt: |
      The whistleblower path defined the rest of your career.
      Patient safety was eventually protected; the federal case
      named you as a credible source; your name in healthcare
      circles became synonymous with integrity. You rebuilt at a
      different lab and went on to do important work.
  end-B-good:
    isOutcome: true
    prompt: |
      You survived but stayed out of the public story. Other
      whistleblowers told it without you. Your career continued
      but the silence sat with you for decades.
  end-B-bad:
    isOutcome: true
    prompt: |
      You protected yourself entirely at the cost of your soul and others' wellbeing. You survived, but you carry the shame forever.
  end-C:
    isOutcome: true
    prompt: |
      The board didn't act in time. You resigned under the cloud of having raised concerns through "proper
      channels" that no one acted on. The eventual public story
      named the board as enablers; your role was peripheral but
      not absolved.
  end-D:
    isOutcome: true
    prompt: |
      The "fix from within" path produced no change. By the time
      the story broke, your name was on validation documents
      tied to the misuse. The legal exposure was significant; the
      reputational damage lasting.
---
## What actually happened

This drill is based on the **Theranos scandal**, specifically the
period from 2013-2015 when senior scientists and engineers were
quietly raising concerns about the Edison device being used to
produce diagnostic results that weren't validated. Most of those
concerns were suppressed through NDAs, reassignment, and
intimidation. Tyler Shultz (grandson of board member George
Shultz) became one of the key whistleblowers in 2014-2015.

The Wall Street Journal investigation by John Carreyrou broke in
October 2015, leading to federal investigations, the eventual SEC
charges against CEO Elizabeth Holmes (2018), and the criminal
trial that ended in her 2022 conviction on four counts of fraud.

The principle: pattern-matched excellence (Stanford, the board,
the press, the valuation) doesn't override what you're seeing in
the lab. When the science doesn't reproduce, the company can't.
The hardest call senior employees make in hyped startups is the
one to leave when the data tells them to.

**Related reading:** [Theranos: what happens when trust is staged](/case-study/theranos-fraud)
