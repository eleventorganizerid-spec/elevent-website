// patch-insight-en-copy.js
// Patches EN fields (title, excerptEn, bodyEn) for all 10 insight documents.
// Does NOT touch titleId, excerpt, or body.

const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: '98jwav2j',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76ZOtO2mXzNG7V2iUNXSH2Xm7atO8kE3pWrVn5Ygc25qU90QN0UPM0yLmC1Ef710qreEYPkPFbzpyZwDTbnHLUS0NDoLiO84ttCmmIZKbX4UvvDJwslbQaIgweNub7FLaptfCXpcQFtXxuJa5RSETGbDNLIYg77DJXqpnKYSzLYfWDV4FJ',
  useCdn: false,
})

// Convert plain text (with ## headings) into Sanity Portable Text blocks
function toBlocks(text) {
  let i = 0
  return text.trim().split(/\n\n+/).map(para => {
    const t = para.trim()
    if (!t) return null
    i++
    if (t.startsWith('## ')) {
      return {
        _key: `b${i}`, _type: 'block', style: 'h2', markDefs: [],
        children: [{ _key: `c${i}`, _type: 'span', text: t.slice(3), marks: [] }]
      }
    }
    return {
      _key: `b${i}`, _type: 'block', style: 'normal', markDefs: [],
      children: [{ _key: `c${i}`, _type: 'span', text: t, marks: [] }]
    }
  }).filter(Boolean)
}

const patches = [
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'panduan-corporate-townhall-indonesia-2025',
    title: 'A Complete Guide to Running Corporate Town Halls in Indonesia in 2025',
    excerptEn: 'Most town halls fail not because of poor logistics but because of the wrong philosophy from the start. When a town hall is treated as an announcement session rather than a conversation, the result is a room that is physically full but meaningless. Here is how to design one that actually works.',
    bodyText: `## Why Town Halls So Often Fail

Most corporate town halls fail not because of poor logistics but because the philosophy is wrong from the start. When a town hall is treated as an announcement session rather than a conversation, the result is a room that is physically full but empty of meaning.

The pattern repeats: senior management speaks for 80 percent of the time, the Q&A session is limited or tightly filtered, and the "safe" questions get priority. Employees sit, nod, then return to their desks without carrying any change. A town hall designed this way does not build trust. It quietly erodes it.

The failure indicators are easy to recognise: attendance dropping with each edition, an atmosphere that is too rigid and formal, no critical questions from the floor, and no concrete action emerging after the event. If you recognise this pattern, the change needed is not in the decorations but in the structure and intent.

## The Anatomy of a Successful Town Hall

A successful town hall starts with one simple question: what do we want to achieve together once this is over? Not "what do we want to communicate," but what do we want to achieve together. That framing shift changes everything: who speaks, for how long, in what format, and how success is measured.

Five elements of a successful town hall: a specific and measurable objective (not something generic like "alignment"), a venue proportionate to the number of attendees, pre-event communication that provides context and builds anticipation, a structured dialogue session that creates space for honest voices, and follow-up communicated no later than 72 hours after the event.

On the venue: avoid a room that is too large for the number of attendees. A half-empty room kills energy. Conversely, a room that is slightly full creates warmth and urgency. For 200 attendees, a venue with capacity for 220 to 240 is far better than a 500-person ballroom.

## The Right Format and Duration

A half-day town hall (three to four hours) suits a regular quarterly update or a specific agenda with one major theme. This format maintains focus and does not drain energy. A full-day town hall only makes sense if the content genuinely requires the time: workshops, breakout sessions, or major announcements that need deep processing.

For companies with more than 500 employees at a single location, consider a cascade format: a primary town hall for senior management and representatives, followed by smaller division sessions within 48 hours. This preserves the depth of discussion that is simply not achievable in a mass format.

A hybrid town hall, combining in-person and remote attendees, requires significant AV investment and a dedicated moderator for the online audience. Without both, the remote experience becomes noticeably inferior and creates an impression of exclusion that contradicts the whole point of a town hall.

## An Eight-Week Preparation Checklist

Weeks 8 to 7: Finalise the internal brief. Set specific objectives, budget, date, and the list of key people who must attend. Secure confirmation from the CEO or C-suite who will be present. This calendar block is non-negotiable.

Weeks 6 to 5: Survey venues and confirm your choice. Brief your event organiser or internal team on the concept and a first draft rundown. Begin producing presentation content. Give it enough time for iteration. Do not wait until the last week.

Weeks 4 to 3: Send formal invitations with the agenda. Open a channel for pre-event questions. This gives management a view of the issues employees are most concerned about and time to prepare substantive answers.

Weeks 2 to 1: Content and technical rehearsal. Coach all speakers, including simulated Q&A sessions. Confirm RSVPs and final logistics. Prepare follow-up materials (summary, recording, action items) before the event day, not after.

## What Is Most Often Overlooked

Post-town-hall follow-up is the single most neglected element and the one with the greatest long-term impact on perception. If commitments are made on stage but there is no update within two weeks, the trust built during the event dissolves faster than it was constructed.

Send a summary within 72 hours. Not a long email. One page covering the key decisions, the questions raised and their answers, and the concrete next steps with owners and deadlines. This format is simple but it signals that the town hall was the start of action, not just a ritual.

Also measure: a short survey of three to five questions sent 24 hours after the event yields far more accurate data than the subjective impressions of the organising committee. Use this data for iteration, not just archiving. A town hall that improves with each edition is a sign that the company is genuinely listening.`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'budget-corporate-event-enterprise-jakarta',
    title: 'What Is a Realistic Budget for an Enterprise Corporate Event in Jakarta?',
    excerptEn: 'Three causes explain most event budget overruns: uncontrolled scope creep, hidden costs that were never anticipated, and last-minute changes that always cost more than expected. Here is how to budget realistically and what warning signs to watch for in vendor proposals.',
    bodyText: `## Why Event Budgets So Often Overshoot

Three root causes explain most event budget overruns: uncontrolled scope creep, hidden costs that were never anticipated, and last-minute changes that always cost more than expected. A single venue revision two weeks before the event can consume 20 to 30 percent of the buffer that was already set aside.

Scope creep happens when no brief is locked from the start. Internal teams add small requests, one extra session here, a bit more decoration there, and before anyone notices the event is 40 percent larger than the original plan on the same budget. The solution is not tighter control but a clear brief and a formal change process.

Changes to speakers or attending key leaders, especially C-suite level, within two weeks of the event are among the most expensive changes. Not because of direct cost, but because of the cascade effect on the rundown, branded materials, catering, and VIP logistics that have already been configured.

## The Budget Components That Get Forgotten

A contingency of 10 to 15 percent is not a luxury. It is a professional requirement. Vendors who do not include a contingency in their proposal are not signalling greater efficiency. They are signalling inexperience or a lack of transparency. Jakarta's conditions, traffic, weather, and infrastructure that is not always reliable, make contingency non-optional.

The items most often absent from initial proposals: overtime crew costs (each hour beyond the contracted duration is typically billed at 1.5 to 2 times the standard rate), event insurance (strongly recommended for events above 500 attendees or with paid talent), speaker transportation and accommodation from other cities, guest parking valet or shuttle, and venue permit or additional security fees for VIP guests.

For events with live streaming or professional video documentation, budget for this separately and realistically. Poor-quality video documentation frequently does more damage to a brand's image than no documentation at all.

## Benchmark Budgets by Format in Jakarta 2025

Town hall with 500 attendees (half-day, four-star hotel, Central or South Jakarta): Rp 350 to 550 million. This range covers the venue, standard AV, coffee break and lunch, functional decor, and photo documentation. Outside this range means a premium component or deliberately chosen premium venue.

Gala dinner with 300 attendees (five hours, five-star hotel, with entertainment): Rp 500 to 900 million. The lower end is for a standard gala dinner without a live band or artist. The upper end covers a full entertainment performance, an awards ceremony, and a complete thematic decoration setup.

Conference with 1,000 attendees (full day, convention center): Rp 1.2 to 2.5 billion. The range depends heavily on the number of breakout rooms, speaker quality (domestic vs international), and AV complexity. Conferences that try to cut costs on AV and venue typically spend more on emergency repairs on the day.

Team building with 100 attendees (full day, venue within two hours of Jakarta): Rp 120 to 250 million. This covers transportation, venue, catering, a facilitator, and activity equipment. This figure increases significantly if overnight accommodation is included.

## How to Optimise Budget

Invest in the three things attendees feel most directly: clear sound, good food in sufficient quantity, and the first impression as they walk into the venue. Attendees will not remember an expensive branded backdrop. They will remember a microphone that fed back every ten minutes.

Save where it does not show: backdrops in hallways that rarely get photographed, overly elaborate table decorations for a content-focused event, expensive goodie bags that are not relevant to attendees. Redirect that budget toward AV quality or catering.

Effective venue negotiation: offer earlier payment (30 to 45 days vs the standard 7 to 14) to receive a 5 to 10 percent discount. Booking during off-peak months (avoid December, early in the year, and the month before Eid) can save 15 to 25 percent on venue rates.

## Warning Signs in a Budget Proposal

First sign: no detailed cost breakdown. A proposal that only shows a total figure without itemised components is hiding something, either a very high margin or specifications far below what is expected.

Second sign: no contingency line, or "already included" stated without a specific figure. Third sign: pricing far below the market average, which usually means the vendor will add variations or paid upgrades after the contract is signed. Compare at least three proposals before deciding, and ask for references from events of similar scale.`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'checklist-90-hari-annual-gathering',
    title: 'The 90-Day Checklist for Preparing Your Company\'s Annual Gathering',
    excerptEn: 'For an annual gathering with 300 or more attendees, 90 days is the minimum safe runway. Starting earlier means more venue options, more negotiation time, and no decisions made under pressure. Here is the complete timeline, broken down by phase.',
    bodyText: `## D-90 to D-75: Foundations

Ninety days may feel far away, but for an annual gathering of 300 or more attendees in Jakarta, this is the minimum safe runway. Starting earlier means more venue choices, more negotiation time, and no decisions made because there is no alternative left.

In this phase, the priority is to lock three things: a date confirmed by the most senior decision-maker, an approved budget range, and a specific event objective. Not "team bonding" or "alignment" but a measurable objective. For example: increase the internal engagement score by 15 percent within one quarter after the event, or introduce new company values to all staff with a 70 percent retention rate.

Build a shortlist of at least five venues before conducting site visits. Initial screening criteria: capacity matches the estimated number of attendees, the date is available, the location is accessible to the majority of participants, and a proven track record with similar events. Eliminate venues that do not meet three of the four criteria before investing time in a physical visit.

## D-75 to D-60: Vendor and Concept

With the venue locked, move into the vendor and concept phase. A detailed brief for the event organiser or internal team is a time investment that prevents far more revision cycles later. A good brief covers: event objective, attendee profile, desired tone, mandatory elements, budget per component, and decision timeline.

The process for selecting an EO: request proposals from two to three candidates against an identical brief, evaluate based on their understanding of the brief (not the polish of the presentation), references from events of similar scale, and the team that will actually handle your event. Be cautious of an EO that sends a different team to pitch from the one that will execute.

In parallel with EO selection, begin shortlisting entertainment and content talent. In-demand talent, including musicians, keynote speakers, and well-known MCs, are often booked three to four months in advance. Waiting until D-30 to confirm entertainment means limited options and premium pricing.

## D-60 to D-30: Production

The production phase begins with final confirmation of all vendors and signed contracts. Nothing should still be in negotiation at D-60. If any key vendor is unconfirmed, prioritise closing this before moving into production planning.

The registration system must be live no later than D-45. This provides enough time for attendance confirmation, collection of dietary restrictions, size information for jerseys or merchandise if applicable, and an accurate headcount for catering and logistics. Do not underestimate the time this takes: for 500 attendees, managing confirmations is a part-time job on its own.

Content production, including company videos, achievement infographics, and game or quiz material, must begin in this phase with an internal deadline of D-21. Content that is rushed together in the final week looks rushed. Strong content is one of the most memorable elements of any gathering.

## D-30 to D-7: Finalisation

All major creative and logistical decisions must be finalised by D-30. After this point, only refinements, not fundamental changes. Major changes after D-30 almost always produce lower quality at higher cost.

At D-14, conduct a unified briefing with all vendors: final rundown, coordination checkpoints, emergency contact numbers, and escalation paths if problems arise. Every vendor must know who to contact for what, and within how many minutes a response is expected.

A contingency plan is not "let's hope it does not happen." It is a real document covering: what happens if the keynote speaker cancels 48 hours out, what is the evacuation procedure, what is the alternative if there is extreme weather for outdoor elements, and who has authority to make fast decisions on the day.

## D-7 to the Day: Execution

A full technical rehearsal at D-2 or D-1 is not optional for a large event. This is the only opportunity to surface audio-visual, lighting, rundown flow, and stage coordination issues before 500 pairs of eyes are watching. Treat this rehearsal seriously. Do not cut the duration because everyone is busy.

The day-of briefing starts 90 minutes before participants arrive. All crew, internal committee members, and vendor representatives gather for a final alignment: weather and logistics updates, walkie-talkie or communication channel distribution, confirmation of each person's position, and a contingency plan review.

Post-event documentation begins while the event is still happening. Designate someone responsible for collecting: high-quality photos of key moments, video recording of main segments, verbatim notes from Q&A sessions, and informal feedback from attendees. This material is the raw input for the report, internal communications, and planning for the following year.`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: '5-kesalahan-fatal-corporate-event',
    title: '5 Fatal Mistakes in Corporate Events That Indonesian Companies Keep Making',
    excerptEn: 'The most expensive mistake in this industry is not the one that shows on the invoice. It is the decisions made before the brief is even written. Here are five errors that consistently destroy event quality and budget, and how to avoid them.',
    bodyText: `## Mistake 1: Choosing a Vendor Based on the Lowest Price

Selecting an EO based on the lowest price is the most expensive false saving in this industry. A Rp 50 million difference in the initial proposal can turn into a Rp 200 million difference in repair costs, do-overs, or reputational damage. A cheap vendor often means undertrained crew, poorly maintained equipment, or subcontractors who have never worked together before.

A better evaluation method: request a portfolio of events at a similar scale, contact references directly (not the names the vendor provides, but contacts you find through your own industry network), and ask specifically about how they handled problems that arose on the day. A good vendor has stories about crises that were managed well. Not a vendor with no problems at all.

Healthy price competition happens when three vendors of equivalent qualification are competing for the same brief. Not when one premium vendor is being compared against two under-resourced ones. Compare like with like.

## Mistake 2: A Brief That Is Too Vague

A brief that says "we want a fun and memorable team building for 150 people" is an instruction to produce a generic event. Vendors cannot read minds. They will propose what is easiest to sell and most profitable for them, not what best fits your company's specific needs.

A good brief answers: what are we celebrating or resolving together? Who is the audience, by seniority, by division, is this a cross-hierarchical mix or a single level? What do we specifically not want (equally important as what we do want)? What is the one thing every attendee should feel when they leave? What would indicate that this event succeeded?

Invest one to two hours in writing a solid brief. A good brief saves three to five hours of proposal revision cycles, and often saves tens of millions in scope that was never well-targeted.

## Mistake 3: No Clear KPIs

An event without KPIs is an event without accountability. If the only measure of success is "everyone showed up" and "the food was good," you will never know whether a Rp 500 million event produced anything meaningful for the business.

Relevant KPIs for a corporate event: attendance rate vs target (and the reasons behind any absences), NPS or satisfaction score from a post-event survey, the percentage of attendees who can identify at least one key message that was intended, and measurable behaviour change within 30 to 60 days post-event (relevant for town halls or events with a change agenda).

KPIs must be set before the event, not after. Setting KPIs after the event is over is like drawing a target after the arrow has already been released. Data collected without a measurement objective cannot be used for improvement.

## Mistake 4: Starting Preparation Too Late

Starting preparation four weeks before a 500-person annual gathering is not preparation. It is crisis management that started slightly too early. Almost every decision made under pressure produces results that are more expensive, lower quality, or both.

Realistic preparation timelines based on scale: events under 100 attendees need a minimum of four to six weeks; 100 to 500 attendees need eight to twelve weeks; above 500 attendees, or with a travel component (out-of-town gathering), need a minimum of sixteen weeks. These are not inflated numbers. They come from the field experience of hundreds of events.

Starting earlier does not mean working harder. It means having more choices, more negotiation time, and fewer decisions made because no alternative exists.

## Mistake 5: Ignoring the Post-Event Phase

The event ends when the last guest leaves the room. But the impact of the event, positive or negative, begins precisely after that. Companies that ignore the post-event phase throw away a significant portion of the value they already invested.

The minimum that must happen within 72 hours of the event: send materials or a summary to all attendees and those who could not attend, follow up on any commitments or promises made during the event, and send a short satisfaction survey to capture data before memory fades.

Within 30 days: review all data and feedback, hold an internal debrief with everyone involved, document the lessons learned, and begin planning for the next event using the input from this evaluation. Companies that do this have events that improve each year. Those that do not repeat the same mistakes with the same budget.`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'memilih-venue-corporate-event-jakarta',
    title: 'Choosing a Corporate Event Venue in Jakarta: A Guide for GA and CorpComm Managers',
    excerptEn: 'Venue selection is a strategic decision, not a logistical one. The room you choose sets the tone before the event begins, determines the quality of conversation that happens inside it, and shapes what participants remember. Here is how to evaluate correctly.',
    bodyText: `## Venue Is More Than Just a Room

Venue selection is a strategic decision, not a logistical one. Venue shapes the first impression participants form before the event even begins. A grand and formal lobby, an industrial warehouse with warm lighting, a rooftop overlooking the city: each creates a different expectation, and setting the right expectation is half the work of a successful event.

Venue also fundamentally shapes logistics: accessibility determines who shows up and in what condition when they arrive, AV infrastructure determines the quality of communication, and layout determines social dynamics. A ballroom that is too large makes 300 attendees feel like 100 people who wandered in.

The common mistake: choosing a venue based on name recognition or prestige without evaluating its fit for the specific event objective. The most prestigious five-star hotel in Jakarta is not always the right choice for a town hall designed to create openness and dialogue.

## What to Evaluate

Correct capacity: choose a venue at 110 to 120 percent of your expected headcount. Too spacious creates a flat atmosphere; too crowded creates discomfort. For standing receptions, the math is different: a venue can accommodate 30 to 40 percent more guests than its seated capacity.

AV infrastructure is the biggest differentiator between a venue that looks good in photos and one that functions well on the day. Specific questions to ask: is the sound system built-in or does it need to be rented? How many rigging points are there for lighting? Is there dedicated power for AV? What is the internet speed and reliability, especially if the event includes live streaming or digital voting?

What is often forgotten: setup and breakdown time (some venues grant access four hours before and two hours after, which is not enough for a complex event), room exclusivity policy (are there other events on the same floor the same day?), acoustics between spaces (will sound from the adjacent ballroom bleed through?), and service elevator access for large equipment.

## Venue Zones in Jakarta

SCBD and Sudirman are the primary choice for executive events, premium conferences, and gala dinners with VIP guests. The cluster of five-star hotels in this area has mature infrastructure, experienced event teams, and easy access for attendees based in Jakarta's central business district. Pricing is premium, but expectations can be reliably met.

The hotel corridor along Gatot Subroto, Kuningan, and MT Haryono offers better value at near-equivalent quality. For conferences with 500 to 1,000 attendees, many four-star hotels in this zone have ballrooms and convention facilities that are more flexible than five-star hotels in the core business district.

Unique venues, such as converted factories, rooftops, heritage buildings, or outdoor settings, are ideal for gatherings that want to leave a different impression. Special consideration: confirm that technical infrastructure (power, AV, catering) can be met by external vendors if the venue does not provide it in-house. A beautiful venue that cannot support the technical requirements becomes a serious problem on the day.

## Questions to Ask the Venue

Ask explicitly: are there other events in the same building on the same date, and where? Is the service elevator available and what is its capacity? Who is the technical contact who will be present during setup and the event? Are there additional charges for setup overtime beyond the agreed hours, and what is the rate per hour?

On catering: is in-house catering mandatory or can external vendors be brought in? If in-house catering is required, request a tasting using the actual menu that will be served, not one that "can be made." Clarify the surcharge policy if special beverages are brought in from outside.

Legal and safety: does the venue hold the necessary permits for the scale of your event? Who is liable if an incident occurs, the venue or the organiser? Request a copy of the venue's insurance policy and verify that the coverage is adequate.

## Red Flags During a Site Visit

First sign: staff who cannot answer technical questions specifically and always need to check with someone else first. A professional venue team knows their own capacity, AV specifications, and policies in detail. The inability to answer basic questions is a signal about the quality of support you will receive on the day.

Second sign: a venue that looks noticeably different from its marketing photos. If the website photos use very specific angles that conceal certain features, a site visit will reveal them. Check the condition of the carpet, the default lighting, the cleanliness of service areas, and the restrooms. These are indicators of overall maintenance standards.

Third sign: a contract that is inflexible or full of clauses that heavily favour the venue, such as no deposit refund under any circumstances, or a clause allowing unilateral menu changes. A venue confident in its own quality is typically more flexible in contract negotiations.`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'hybrid-event-vs-virtual-event',
    title: 'Hybrid Event vs Virtual Event: Which Is Right for Your Company?',
    excerptEn: 'A hybrid event is not just streaming a physical event to Zoom. A virtual event is not a cheaper hybrid. Understanding the fundamental difference between these two formats will save you from a compromise that satisfies neither audience.',
    bodyText: `## The Fundamental Difference That Is Most Misunderstood

A hybrid event is not streaming a physical event to Zoom. This is the most common and most expensive misunderstanding. A true hybrid event is designed from the ground up as two parallel experiences that are integrated: one for the physical audience, one for the online audience, with deliberately engineered interaction points between the two.

A virtual event is also not a cheaper hybrid. A well-designed virtual event leverages the strengths of the digital medium: interactions that can happen at any moment, real-time polling across hundreds of participants simultaneously, breakout rooms that can be reconfigured in seconds, and geographic accessibility without limits. This is not a compromise. It is a different format with different strengths.

Treating hybrid as slightly more sophisticated live streaming, or virtual as a venue cost saving, almost always produces an event that fails both audiences. The format decision must start with objectives and audience characteristics, not with budget or the preferences of the organising committee.

## When a Hybrid Event Makes Strategic Sense

A hybrid event is strategically justified when: the audience is distributed across more than two cities and it is not practical for everyone to attend physically, there are international speakers whose value is significant but physical attendance is not possible, or there is an audience group whose presence is symbolically important but who are constrained by distance.

For multinational companies with employees in Jakarta, Surabaya, Medan, and Makassar, a hybrid format can be more inclusive than choosing one city as the centre. With one condition: investment in streaming infrastructure and a dedicated moderator for the online audience is non-negotiable.

A realistic minimum budget for a hybrid event of equivalent quality on both sides: add 25 to 35 percent of the physical event cost for the online component (platform, streaming AV, moderator, and content specifically curated for the online audience). Below this threshold, the online experience will be noticeably inferior and create an impression of unfairness.

## When a Virtual Event Is the Better Choice

A virtual event is a smart choice, not a fallback, when the primary objective is knowledge transfer or information sharing that does not require a shared physical experience. Training sessions, new product briefings, cross-regional internal conferences: all of these can be delivered virtually at equal or even better quality.

When your audience is already comfortable with digital interaction and the platform being used, a virtual event can achieve higher participation rates than a physical one. Attendees can join from anywhere, attendance barriers drop, and features like anonymous Q&A often produce more honest questions than a microphone in front of hundreds of people.

Virtual is also the right choice when preparation time is very short. A worthwhile physical event needs a minimum of four to six weeks of preparation. A quality virtual event can be prepared in two to three weeks with a competent team and an already available platform.

## The Most Common Mistakes in Hybrid Events

The most fatal mistake: treating the online audience as second-class citizens. This happens when the camera is only pointed at the speakers with no view of the physical audience, when online questions are ignored or always responded to last, and when no content is designed specifically for them.

Inadequate AV preparation is the silent killer of hybrid events. A single static camera, unclear audio from the online side, and significant delays create a frustrating experience. The minimum required: two cameras (a speaker close-up and a wide room view), dedicated audio separate from the room speaker system, and a platform with sufficient capacity.

Having no dedicated moderator for the online audience is the third most common mistake. The on-stage MC cannot simultaneously monitor the chat, manage online Q&A, and integrate online participation into the physical event flow. These are two separate jobs that need two separate people.

## A Format Decision Checklist

Use this framework before deciding on a format: (1) Where is your audience, one city, a few cities, or widely distributed? (2) What is the primary objective, a shared experience, information transfer, or both? (3) What is the realistic budget for the chosen format done correctly? (4) How much preparation time is available?

If the majority of the audience is in one city and the goal is a shared experience: physical is the primary choice and is hard to beat. If the audience is distributed and the goal is information delivery: virtual is an efficient and effective choice. If the audience is distributed and shared experience matters: hybrid with adequate investment in the online component.

What not to do: choose hybrid because it sounds modern, or virtual because it costs less, without answering the questions above. The best format is the one that best fits the objective, not the most popular or the most cost-efficient.`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'kpi-corporate-event-bukan-hanya-foto',
    title: 'Why Your Corporate Event Needs KPIs, Not Just Photos',
    excerptEn: 'Almost every post-event report uses the same language: the event was a success, attendees were happy, feedback was positive. But when pressed further, what actually changed? This article makes the case for measuring corporate events the same way you measure any serious business investment.',
    bodyText: `## The Problem with "Successful Events" That Cannot Be Measured

Almost every post-event corporate debrief uses the same language: "the event was a success," "attendees were happy," "feedback was positive." But when pressed further, what changed after this event? What is better or different now? The answer is often empty. Not because the event was bad, but because no one ever defined what "success" looked like before the event started.

The impact of having no KPIs: event budgets become difficult to defend in front of a sceptical CFO, there is no basis for improving the next edition, and event organisers have no incentive to innovate because the minimum standard is simply "no major complaints."

The greatest irony: companies that are most rigorous about measuring ROI on marketing campaigns or IT projects are often most lenient when measuring the impact of internal events. Yet an event with 500 attendees and a Rp 600 million budget is a very serious investment that deserves the same standard of accountability.

## A KPI Framework for Corporate Events

Five KPI categories relevant to the majority of corporate events. (1) Attendance: not just the number, but who attended and who did not. A consistent pattern of absence from a particular division or seniority level is important data. (2) Engagement: a satisfaction survey measuring content relevance, speaker quality, and overall experience.

(3) Message recall: how well attendees remember and can articulate the key message that was intended. This is measured through open-ended questions in the post-event survey, not multiple-choice questions that can be guessed. (4) Net Promoter Score (NPS): would attendees recommend a similar event to a colleague? (5) Behaviour change: the longest-horizon and hardest to measure metric, but also the most meaningful.

Not all KPIs are relevant to every event. Choose two to three that best fit the specific objective, set targets before the event, and measure consistently. Data collected across three consecutive editions is far more valuable than very detailed data from a single event.

## KPIs by Event Type

Town hall: focus on message recall and clarity of direction. The key question: after the town hall, can employees explain the company's three priorities for the next half-year? Did trust in leadership increase, stay flat, or decline?

Team building: focus on cross-functional connections and post-event application. How many new connections between departments were formed? Within 30 days of the event, is there any new collaboration that can be traced back to it? This requires proactive follow-up, not passive waiting.

Internal conference: focus on knowledge transfer and concrete action. What percentage of attendees applied at least one thing from the conference within 60 days? This is the KPI most rarely measured and most important for evaluating a conference's actual value.

## Practical Measurement Methods

A post-event survey is the most accessible tool. Send it within 24 to 48 hours after the event. After that, accuracy drops sharply. Use a maximum of seven questions: five Likert scale (1 to 5) and two open-ended questions. Free platforms like Google Forms are sufficient for this purpose.

For message recall, use the question "What are the two or three most important things you are taking away from today?" rather than "Did you understand the company's vision?" The latter almost always gets a "Yes" because no one wants to appear out of the loop.

Direct observation during the event is also valid data: noise levels during sessions (an indicator of engagement), how many questions were asked in Q&A and their quality, whether attendees used breaks to build connections or immediately reached for their phones. Assign one person from the team to make systematic observations rather than simply enjoying the event.

## Using Data for the Next Event

Data from one event only becomes meaningful when compared to trends from several editions. Build a simple repository, a spreadsheet is enough, that stores KPIs from every event: date, format, scale, satisfaction score, NPS, and key qualitative notes. After three editions, patterns begin to emerge.

Patterns most commonly found: sessions that run too long consistently score lower regardless of content quality, internal speakers receive more variable scores than external ones, and poor catering consistently deflates the overall score by a disproportionate amount.

Present this data to management as part of next year's budget proposal. A company that can show its event satisfaction score rose from 3.6 to 4.2 over three years, with NPS moving from -10 to +25, has a far stronger argument for maintaining or growing the event budget than one that can only show photos.`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'mice-indonesia-2025-tren-destinasi',
    title: 'MICE in Indonesia 2026: Trends, Destinations, and What Companies Need to Know',
    excerptEn: 'The MICE industry in Indonesia has recovered in volume, but expectations have permanently shifted. Companies still running 2019-era programs in 2026 are finding that participants no longer show up just to be present. Here is what has changed and what it means for your planning.',
    bodyText: `## Indonesia's MICE Industry After the Pandemic

Indonesia's MICE industry has recovered in volume: event numbers and participant counts have returned to near 2019 levels. But what has changed permanently is expectation. Companies running 2025 MICE programs with a 2019 approach are finding that participants no longer accept showing up just to be present. They want to be there for a clear reason.

The most significant post-pandemic shift: participants are more selective about the time they invest in company events. Extended remote work made many employees aware that a lot of previous events were not worth the time they required. The implication: MICE programs that cannot answer "why should I attend?" will face higher resistance than before.

On the positive side, the pandemic created a genuine longing for meaningful shared experiences. MICE programs that are well-designed, with a clear purpose, honest experiences, and real space for human connection, are receiving higher enthusiasm scores than before the pandemic. Standards are higher, but the potential impact is also greater.

## MICE Destinations on the Rise

Bali remains Indonesia's top MICE destination for international programs, but for domestic corporate programs, the clear trend is diversification. Labuan Bajo has risen significantly over the past two to three years, driven by infrastructure development and a visual appeal that is difficult to match. For an exclusive incentive trip or leadership retreat, Labuan Bajo offers a memorable setting at costs still more accessible than Bali for the same scale.

Mandalika in Lombok is beginning to attract serious attention for mid-scale MICE. Rapidly developing hotel and convention infrastructure since the MotoGP circuit opened, combined with a landscape far less crowded than Bali, makes it an appealing option for companies wanting to offer something different. Worth factoring in: flight connectivity is still limited compared to Bali, which matters for programs drawing participants from multiple cities.

Yogyakarta is experiencing a revival as a MICE destination for programs that want to blend cultural and heritage elements with a business agenda. Costs far lower than Bali, excellent accessibility from Jakarta and Surabaya, and a mature MICE vendor ecosystem make Yogyakarta a very strong option for programs with an efficient budget.

## The Trends Defining MICE in 2025

Sustainability is no longer a differentiator. It is becoming a baseline standard for large companies. Participants, especially younger employees and those with international exposure, are paying attention to whether corporate MICE programs have real environmental policies. Reducing carbon footprint, cutting single-use plastic, and menu options that consider environmental impact are no longer simply nice to have.

Wellness integration is the fastest-growing trend of the past two years. MICE programs that incorporate wellness elements, not just a hotel gym but activities designed for recovery and reflection such as guided meditation, forest bathing, or breathing sessions, consistently score higher NPS than conventional programs.

Experience over logistics is the most fundamental philosophical shift. In the past, MICE programs were evaluated on logistical smoothness: buses on time, enough food, schedule kept. Now the evaluation has shifted to: what will participants talk about after they get home? Unexpected moments, exclusive access to places or experiences unavailable independently, interactions with inspiring speakers: these define high-quality MICE in 2025.

## What Participants Want Now

Personalisation in MICE programs is not about a name on a badge or a decorated hotel room. It is about a program that feels designed for the specific participants, not a template reused from a previous event. Sessions that accommodate different interests, activity choices rather than one mandatory activity for everyone, and a program rhythm that accounts for different energy levels and preferences: this is meaningful personalisation.

Meaningful experience is the phrase that keeps appearing in post-program MICE surveys. Participants want to bring home more than memories of good photos. They want a new perspective, a genuine connection, or a new capability: something that feels relevant to their professional and personal lives.

Work-life balance within a MICE program is not about bringing a laptop to the resort. It is about a program that acknowledges participants as whole human beings, not just employees who need to be recharged for greater productivity. The best programs create space for something personally meaningful, not just a schedule packed from morning to night.

## Implications for Corporate Planning

Lead time for quality MICE at popular destinations is growing. For Bali during peak season (July to August and December), the best hotels and venues need to be booked six to nine months in advance. For Labuan Bajo with its more limited accommodation capacity, four to six months is the safe minimum for programs above 50 participants.

MICE budget per participant in Indonesia in 2026 (all-inclusive, two nights and three days, Bali): Rp 8 to 15 million per participant depending on accommodation standard and program. This figure has risen 20 to 30 percent compared to 2022, driven by hotel operating cost increases and vendor inflation. Companies using a 2022 budget for a 2026 program will find that the quality they expect can no longer be delivered at the same number.

Choosing a MICE partner is a strategic decision that deserves the same time and research as selecting a technology vendor or consultant. Request proposals that are specific to your company's objectives and context, not templates. A good MICE partner will ask more questions than they answer in the early stages, because they know the best solution starts with deep understanding.`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'annual-gathering-vs-team-building',
    title: 'Annual Gathering vs Team Building: What Is the Difference and When to Choose Which',
    excerptEn: 'These two formats are often treated as interchangeable. They are not. Understanding the difference between an annual gathering and a team building program can save your company significant budget and help you address the organisational need that actually exists.',
    bodyText: `## Two Formats That Are Often Misunderstood

Annual gatherings and team building programs are the two formats most often treated as interchangeable, yet they have fundamentally different objectives, mechanisms, and outcomes. An annual gathering is about organisational alignment: the moment when the whole company comes together to celebrate achievements, hear strategic direction, and renew human connections across different levels. Team building is about specific team dynamics: building trust, improving collaboration, or integrating new members into an existing group.

Both matter. But neither can replace the other. A company that runs a team building program when what is needed is a gathering, or the reverse, wastes budget and misses the real organisational need.

## When an Annual Gathering Is What You Need

A gathering works at the organisational level, not the team level. Several signals indicate your company needs a gathering: employees feel disconnected from the company's vision, there is a significant achievement that deserves to be celebrated together, there is a strategic shift that needs to be communicated face to face, or morale and engagement are dropping and a moment of renewal is needed.

A well-designed gathering can do something that emails, slide decks, and internal memos cannot: create a shared moment that becomes a collective reference point. "Remember when the CEO said that at last year's gathering?" That is what a successful gathering produces.

## When Team Building Is What You Need

Team building works at the team level, not the organisational level. The signals: there is unresolved conflict or friction within a team, a new team has just been formed or departments have merged, team productivity is flat despite capable individuals, or there is a specific need to build collaboration capability ahead of a major incoming project.

Effective team building always starts with a clear diagnosis: what specific problem are we trying to solve? Without a clear answer to that question, a team building program ends up as a series of enjoyable activities that change nothing.

## Can You Have Both in One Event?

The answer is yes, but only if the design is very deliberate and the time available is sufficient. An event that tries to be both a gathering and a team building program in a single day typically falls short of both. The formats are different: a gathering requires shared sessions and collective moments, team building requires small groups and structured activities. The energy is different. And the time each requires cannot be compromised.

If budget and time are limited, choose one primary objective and build the entire event around it. Attempting both at half effort means neither is done well.

## A Decision Framework

Three questions to determine which format your organisation actually needs right now. First, is the problem at the organisational level or the team level? If employees do not know where the company is going, that is an organisational problem and it needs a gathering. If two departments cannot work together, that is a team problem and it needs team building.

Second, is the objective communication and celebration, or capability development? Gatherings are better for the first. Team building for the second. Third, who is the audience, the whole company or a specific unit? Answering all three questions almost always points to the right format. If still unsure, consult with your event organiser before the brief is written, not after.`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'protokol-vip-corporate-event',
    title: 'VIP Protocol in Corporate Events: A Complete Guide for Priority Guests',
    excerptEn: 'VIP protocol is not something to think about three days before the event. This guide covers everything GA and CorpComm managers need to know, from guest tiers and dedicated rundowns to briefing your entire crew correctly.',
    bodyText: `## Why VIP Protocol Is Often Ignored Until It Is Too Late

Many GA Managers only start thinking about VIP protocol three days before the event, or even the day before. By that point, many decisions are too late to change: the venue has already been configured, the rundown has been printed, and the crew has been briefed without the relevant information. Good VIP protocol starts at the initial brief, long before the venue is selected.

The consequences of poor protocol go beyond discomfort. VIP guests, especially senior executives and government officials, carry expectations shaped by past experience. A single moment that feels unprofessional can damage the perception of the entire organisation running the event.

## Guest Tiers and Their Implications

Not all VIPs are treated the same, and understanding these differences is critical for correct resource allocation. The first tier is government officials: ministers, governors, or equivalent. At this level, formal government protocol applies, and coordination with security teams may be required. Schedule flexibility must be built into the rundown because their arrival time is often unpredictable.

The second tier is C-suite executives from partner companies or strategic clients. They need dedicated escorts, separate entry routes from general participants, and priority seating confirmed well ahead of the event day. The third tier is keynote speakers and main presenters: they need a preparation room, adequate technical rehearsal, and a clear content briefing before they go on.

## The Protocol Checklist That Gets Missed

Several elements are almost always absent from a standard rundown but always needed when VIPs are present: a separate VIP entrance and parking area away from general participants, a dedicated escort per VIP guest who knows the details about that guest, and a full crew briefing on who the VIPs are and how to identify them.

What gets forgotten most often: a clear contingency plan if a VIP runs late or must leave early, coordination with venue security on access and restricted areas, and dedicated documentation coverage with a photographer assigned specifically to moments involving VIPs rather than relying on the main photographer covering the entire event.

## A Dedicated VIP Rundown

Events with multiple VIP guests need two separate rundowns. The main rundown for the full production team covers the overall program. A more detailed and confidential VIP rundown contains specific information on each VIP's movements: expected arrival time, entry route, seating position, key moments involving them, and who is responsible for accompanying them at each point.

Do not combine these into one document. Information about VIP guests does not need to be known by everyone on the production team, only by those who interact with them directly.

## How to Brief the Team Correctly

Everyone who will interact with VIPs must receive a dedicated briefing, not just through the general rundown. This briefing covers: the VIP's full name and title, the correct form of address including proper titles and honorifics, what is and is not appropriate to say or do, and who is accountable if an immediate need arises.

This is not just for the MC and lead escorts. Registration staff at the entrance, ushers directing guests to their seats, and even security personnel at the door need to know who the VIPs are and how to treat them correctly. One awkward interaction from a crew member who was not properly briefed can unravel the overall impression that was built with great care.`,
  },
]

async function run() {
  console.log(`Patching EN fields for ${patches.length} insight documents...\n`)

  let succeeded = 0
  let failed = 0

  for (const p of patches) {
    try {
      const doc = await client.fetch(
        `*[_type == "insight" && slug.current == $slug][0]{ _id }`,
        { slug: p.slug }
      )

      if (!doc?._id) {
        console.log(`  NOT FOUND   ${p.slug}`)
        failed++
        continue
      }

      await client.patch(doc._id).set({
        title:     p.title,
        excerptEn: p.excerptEn,
        bodyEn:    toBlocks(p.bodyText),
      }).commit()

      console.log(`  OK   ${p.slug}`)
      succeeded++
    } catch (err) {
      console.log(`  FAIL ${p.slug} -- ${err.message}`)
      failed++
    }
  }

  console.log(`\nDone. Succeeded: ${succeeded}  Failed: ${failed}`)
}

run()
