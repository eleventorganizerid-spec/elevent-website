// patch-service-en-copy.js
// Patches EN fields (tagline, problem, approach, included, idealFor)
// for all 16 service documents in Sanity.

const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: '98jwav2j',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76ZOtO2mXzNG7V2iUNXSH2Xm7atO8kE3pWrVn5Ygc25qU90QN0UPM0yLmC1Ef710qreEYPkPFbzpyZwDTbnHLUS0NDoLiO84ttCmmIZKbX4UvvDJwslbQaIgweNub7FLaptfCXpcQFtXxuJa5RSETGbDNLIYg77DJXqpnKYSzLYfWDV4FJ',
  useCdn: false,
})

const patches = [
  {
    slug: 'corporate-event',
    tagline: 'When an organization gathers, every moment must work.',
    problem: 'Corporate events fail when treated as a scheduling obligation rather than a meaningful opportunity. Full venues and packed agendas, yet the core message never lands and attendees leave without real change.',
    approach: 'We design corporate events as communication environments that work. From annual kick-offs to national town halls, every element, session sequence, room layout, transition moment, is built to advance a specific business agenda.',
    included: [
      'Full concept and event program',
      'Venue selection and management',
      'Stage, audio-visual, and lighting production',
      'Attendee experience flow from registration to closing',
      'Speaker and presenter management',
      'Catering and guest services',
      'Photo and video documentation',
    ],
    idealFor: 'Companies running annual gatherings, strategy kick-offs, executive town halls, or corporate milestone celebrations, from 100 to 5,000+ attendees.',
  },
  {
    slug: 'corporate-gathering',
    tagline: 'A different room produces a different conversation.',
    problem: 'Corporate gatherings often end up as a repetition of the office environment with a larger dining table. Information gets delivered, but the human connections that should be strengthened are left unaddressed.',
    approach: 'We design gatherings as moments that bring people together in a real way, not just an agenda dressed up in a new room. The format, energy, and rhythm of the event are built to create connections that cannot happen in a weekly meeting.',
    included: [
      'Gathering concept and theme',
      'Venue management and logistics',
      'Event program and facilitation',
      'Catering and guest services',
      'Entertainment and activities',
      'Photo and video documentation',
      'Branded merchandise and supplies',
    ],
    idealFor: 'Companies running family days, national town halls, year-end parties, or internal gatherings, to build connections that cannot be built from behind a screen.',
  },
  {
    slug: 'product-launching',
    tagline: 'The first impression that cannot be repeated.',
    problem: 'A product launch is a one-time moment. It either captures attention or disappears. Most launches mistake announcement for impact, communicating features when the market is listening for meaning.',
    approach: 'We build product launches as brand narratives. The product enters a context we have already built, the atmosphere, the room, the reveal sequence, designed so journalists, partners, and buyers feel its significance before they understand its specifications.',
    included: [
      'Pre-launch teaser concept and materials',
      'Venue or pop-up space design',
      'Media and VIP guest experience design',
      'Product reveal sequence and stage setup',
      'Content capture setup for press and social media',
      'MC and presenter coaching',
      'Post-event press kit coordination',
    ],
    idealFor: 'Brands introducing a new product, platform, or market direction to media, partners, key accounts, or consumers, when first perception is everything.',
  },
  {
    slug: 'gala-dinner-award-night',
    tagline: 'The night your organization remembers itself.',
    problem: 'Annual events are often treated as obligations rather than opportunities. Just a dinner, a few speeches, and a plaque. The result is a forgettable evening that does little for employee retention, pride, or company culture.',
    approach: 'We treat the gala as a cultural anchor. The evening is designed to surface organizational values, acknowledge achievements, and send every attendee home feeling they are part of something meaningful.',
    included: [
      'Full evening concept, theme, and visual identity',
      'Venue transformation and atmosphere design',
      'Award sequence and ceremony production',
      'Entertainment and talent curation',
      'Guest management and seating strategy',
      'Video and photo documentation',
      'Table gifts and branded touchpoints',
    ],
    idealFor: 'Organizations holding annual award ceremonies, company milestones, or year-end galas, where culture, team morale, and company reputation are at stake.',
  },
  {
    slug: 'conference-seminar',
    tagline: 'Where ideas become direction.',
    problem: 'Most conferences are scheduled, not designed. Speakers address rows of passive attendees. Information is delivered but rarely absorbed. By the second day, the room has already lost focus.',
    approach: 'We design conferences as decision-making environments. Every session, transition, and room layout is built to advance the agenda, from seating arrangements that create dialogue to closing sessions that produce alignment rather than applause.',
    included: [
      'Full concept and conference program',
      'Speaker curation and management',
      'Stage, audio-visual, and lighting production',
      'Registration and attendee experience design',
      'Session and panel facilitation',
      'Parallel session management',
      'Summary documentation and attendee materials',
    ],
    idealFor: 'Companies and associations bringing together 100 to 2,000 or more professionals, executives, or industry practitioners for knowledge sharing, strategic alignment, or thought leadership.',
  },
  {
    slug: 'team-building',
    tagline: 'Shared experience builds what meetings cannot.',
    problem: 'Team building events often feel forced because they are forced. An activity-first approach produces events that are tolerated, not remembered, and rarely improves actual team cohesion or performance.',
    approach: 'We design team building around specific organizational goals, whether cross-departmental alignment, post-restructuring integration, or rebuilding trust after a difficult period. The activities serve the outcome.',
    included: [
      'Goal-setting workshop with leadership team',
      'Customized program and activity design',
      'Venue and logistics coordination',
      'Team facilitation and coaching',
      'Catering and guest services',
      'Photo and video documentation',
      'Post-event reflection survey and feedback',
    ],
    idealFor: 'Teams of 20 to 300 navigating change, growth, or the need to work better together, from newly formed units to established teams that have lost their momentum.',
  },
  {
    slug: 'mice-hospitality',
    tagline: 'MICE is not just logistics. It is a reflection of your company\'s standards.',
    problem: 'Enterprise MICE programs often fail at the coordination gaps between meeting organizer, hotel, vendors, and client. Standards are inconsistent, accountability is unclear, and international delegates are the first to notice.',
    approach: 'We manage MICE programs as a single integrated operation. One point of contact, one standard, from initial planning through post-event reporting. Every aspect is designed to reflect the standards of the enterprise clients we represent.',
    included: [
      'Full program management (meeting, incentive, convention, exhibition)',
      'Venue and hotel negotiation and management',
      'Delegate transportation and logistics',
      'Catering and executive guest services',
      'Partner management and on-site coordination',
      'Program documentation and reporting',
      'International delegate management',
    ],
    idealFor: 'Multinational companies, industry associations, and organizations running MICE programs with corporate delegates, where execution standards and company reputation are on the line.',
  },
  {
    slug: 'hybrid-virtual-event',
    tagline: 'One event. No audience left behind.',
    problem: 'Hybrid events typically fail to serve either audience well. The physical room is disrupted by production logistics while the remote audience is treated as an afterthought. The result is a compromise that satisfies no one.',
    approach: 'We design hybrid events as two separately crafted experiences that share the same moments, not one event with a camera at the back. Remote and in-room audiences have different journeys that converge at the same key points.',
    included: [
      'Dual-audience experience design',
      'Broadcast production and live streaming',
      'Interactive digital platform integration',
      'In-room production and audio-visual management',
      'Remote host and moderation',
      'Technical rehearsal and contingency planning',
      'On-demand recording and content distribution',
    ],
    idealFor: 'Organizations with distributed teams, regional audiences, or international partners, where physical attendance is limited but engagement cannot be compromised.',
  },
  {
    slug: 'incentive-trip',
    tagline: 'The best reward is an experience that cannot be bought alone.',
    problem: 'A failed incentive trip is one that feels like a standard tour package with a company logo vest. Participants enjoy the holiday but return without renewed motivation or stronger loyalty.',
    approach: 'We design incentive trips as immersive recognition experiences. Every element of the journey, the destination, the activities, the moments along the way, is built to deliver one message: their achievement is recognized and remembered.',
    included: [
      'Destination selection and trip concept',
      'Accommodation and transportation coordination',
      'Activity and experience program design',
      'Participant management and group logistics',
      'Private dining and culinary experiences',
      'Trip photo and video documentation',
      'Coordination with local vendors and authorities',
    ],
    idealFor: 'Companies rewarding top-performing employees or key business partners through travel, where the experience must match the achievement being recognized.',
  },
  {
    slug: 'corporate-meeting',
    tagline: 'Productive meetings start with the right room.',
    problem: 'Important corporate meetings are often held in spaces that do not support their purpose. The wrong seating, poor acoustics, technology that does not work, and major decisions end up being made in the wrong conditions.',
    approach: 'We manage corporate meetings as an experience that supports conversation quality, from selecting the right space and ensuring smooth technical setup to guest services that keep participants focused throughout the session.',
    included: [
      'Meeting venue selection and management',
      'Audio-visual and conferencing technology setup',
      'Catering and guest services',
      'Attendee logistics coordination',
      'Professional documentation and minutes',
      'Full on-site management',
    ],
    idealFor: 'Executive teams, board meetings, strategy sessions, or important client meetings that require an environment supporting the quality of conversation.',
  },
  {
    slug: 'corporate-anniversary',
    tagline: 'Every milestone deserves to be told the right way.',
    problem: 'Company anniversaries often become nostalgia without direction. Old photos, long speeches, ceremonial remarks, and employees leave without understanding why this milestone matters for the future, not just the past.',
    approach: 'We design corporate anniversary celebrations as a bridge between legacy and vision. The evening honors what has been achieved, reaffirms the values that remain foundational, and opens the next chapter with clear direction.',
    included: [
      'Anniversary theme concept and visual identity',
      'Evening program and ceremony sequence',
      'Heritage content production (video, timeline, gallery)',
      'Thematic entertainment and performances',
      'Guest and invitation management',
      'Official photo and video documentation',
      'Anniversary keepsakes and commemorative materials',
    ],
    idealFor: 'Companies celebrating 10, 25, 50 years or more, where the anniversary must be meaningful to employees, clients, and business partners alike.',
  },
  {
    slug: 'corporate-outing',
    tagline: 'Out of the office. Into the team.',
    problem: 'A failed corporate outing is one that feels like an annual obligation, the same generic activities every department does every year. Attendees show up but never really engage.',
    approach: 'We design outings as experiences built specifically for your team, chosen based on team dynamics, the goals you want to achieve, and the season. Not an off-the-shelf package but a program designed for this specific group.',
    included: [
      'Customized activity and destination selection',
      'Transportation and logistics coordination',
      'Program and activity facilitation',
      'Catering and meal management',
      'Equipment and safety briefing',
      'Photo and video documentation',
      'Post-outing summary',
    ],
    idealFor: 'Divisions, departments, or business units that need a meaningful day outside the office routine, to strengthen the team, recharge, or simply create good shared memories.',
  },
  {
    slug: 'brand-activation',
    tagline: 'Turn presence into participation.',
    problem: 'Brand activations fail when they prioritize spectacle over engagement. A crowd does not mean connection. Most activations are photographed and forgotten within hours.',
    approach: 'We design activations as participatory brand experiences. Visitors are not spectators, they become part of the experience. Every interaction is designed to create memories that belong to the brand, not just content for a feed.',
    included: [
      'Concept and experience design',
      'Space design and installation',
      'Brand narrative and messaging integration',
      'Crew and talent briefing',
      'Visitor flow and journey management',
      'Content capture setup',
      'Post-activation report and impact analysis',
    ],
    idealFor: 'Brands with a presence at public events, expos, malls, or brand-owned experiences, where the goal is dwell time, emotional connection, and organic reach.',
  },
  {
    slug: 'exhibition-pameran',
    tagline: 'Among hundreds of booths, be the one remembered.',
    problem: 'A failed exhibition booth is one designed like a three-dimensional brochure. Visitors look, read, and walk away. No conversation started, no prospect engaged, no impression that lasts.',
    approach: 'We design exhibition presence as an experience, not a display. From booth concept and visitor flow to activities inside the booth, every element is designed to start the right conversation with the right person.',
    included: [
      'Booth concept and visual design',
      'Booth construction and installation',
      'Visitor flow and experience design',
      'Promotional materials and supplies',
      'Booth team briefing and management',
      'Prospect capture system',
      'Post-exhibition documentation and report',
    ],
    idealFor: 'Companies participating in trade shows, industry exhibitions, or expos, where the goal is generating prospects, building market awareness, or strengthening market position.',
  },
  {
    slug: 'roadshow',
    tagline: 'One message. Many cities. The same standard.',
    problem: 'Roadshows fail when every city feels like a different event. Inconsistent quality, a message that weakens along the way, and audiences in city three receiving a worse experience than city one.',
    approach: 'We manage roadshows as a single program expressed across multiple locations, with identical production standards, messaging, and experience from the first city to the last. Local adaptation is possible without sacrificing consistency.',
    included: [
      'Route planning and city-by-city scheduling',
      'Venue management in each city',
      'Team and equipment movement logistics',
      'Standard production at every location',
      'Local attendee management and registration',
      'Local media coordination',
      'Comprehensive per-city reporting',
    ],
    idealFor: 'Brands and companies reaching audiences across multiple cities in one coordinated program, for product launches, policy socialization, or regional engagement campaigns.',
  },
  {
    slug: 'corporate-event-organizer',
    tagline: 'More than an executor. A partner that thinks alongside you.',
    problem: 'Many event organizers can execute an event. Few can understand the business context behind it, offer a perspective that challenges the brief, and take full responsibility for the outcome, not just the attendance and decorations.',
    approach: 'Elevent operates as a thinking partner, not just an executor. We bring perspective, cross-industry experience, and a curated partner network to every project, with a single accountable point of contact from brief to post-event evaluation.',
    included: [
      'Brief consultation and program planning',
      'Full end-to-end project management',
      'Partner and subcontractor coordination',
      'Budget management and financial reporting',
      'On-site execution and day-of management',
      'Post-event evaluation and reporting',
      "Access to Elevent's curated venue and partner network",
    ],
    idealFor: 'Companies looking for a long-term EO partner that understands corporate standards, can manage the scale and complexity of enterprise events, and can be trusted to represent their brand at every event.',
  },
]

async function run() {
  console.log(`Patching EN fields for ${patches.length} service documents...\n`)

  let succeeded = 0
  let failed = 0

  for (const p of patches) {
    try {
      const doc = await client.fetch(
        `*[_type == "service" && slug.current == $slug][0]{ _id }`,
        { slug: p.slug }
      )

      if (!doc?._id) {
        console.log(`  NOT FOUND   ${p.slug}`)
        failed++
        continue
      }

      await client.patch(doc._id).set({
        tagline:  p.tagline,
        problem:  p.problem,
        approach: p.approach,
        included: p.included,
        idealFor: p.idealFor,
      }).commit()

      console.log(`  OK   ${p.slug}`)
      succeeded++
    } catch (err) {
      console.log(`  FAIL ${p.slug} — ${err.message}`)
      failed++
    }
  }

  console.log(`\nDone. Succeeded: ${succeeded}  Failed: ${failed}`)
}

run()
