// patch-case-study-en-copy.js
// Patches EN fields for all 9 case study documents in Sanity.
// Fields: title, audience, outcome, challengeEn, approachEn, executionEn, resultEn, clientQuote
// Does NOT touch any *Id fields.

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
    slug: 'shimizu-corporation-50th-anniversary',
    title: 'Shimizu Corporation Jakarta 50th Anniversary',
    audience: '500 guests, Tokyo directors, local partners, government representatives.',
    outcome: 'A spontaneous standing ovation, an unplanned moment that became the most remembered of the evening.',
    challengeEn: "Shimizu Corporation was celebrating 50 years of presence in Indonesia, an achievement that went beyond business success to deepen the long-standing relationship between a Japanese company and the Indonesian business ecosystem. The challenge was complex: how to create one evening that felt worthy of Shimizu's standing in the eyes of Tokyo directors, senior local business partners, and government representatives, all in the same room, with very different expectations.",
    approachEn: 'We started with one question: what makes 50 years of Shimizu in Indonesia more than just a number? The answer was the depth of relationship, between Japan and Indonesia, between contractor and community, between legacy and the future. From that, we built the concept of Harmony in Legacy, blending the precision of Japanese aesthetics with the warmth of Indonesian hospitality. Every element was designed with deliberate care, from decorations that wove origami motifs together with batik, to a program sequence that made room for reflective moments within the celebration.',
    executionEn: [
      'VIP Reception with a specially curated cocktail session, bringing together Tokyo directors and local partners in an intimate setting before the evening began',
      'Gala Dinner at the Grand Ballroom of Hotel Kempinski with executive-standard table settings for 500 guests',
      'Lifetime Achievement Awarding, a ceremonial moment honoring individuals and organizations that had been part of Shimizu\'s 50-year journey in Indonesia',
      'Cultural Performance, an artistic showcase that brought together elements of Japanese and Indonesian culture, designed as an expression of two cultures in mutual respect',
      'VIP Protocol Management, a dedicated team ensuring every VIP guest was handled to international protocol standards',
    ],
    resultEn: 'The evening ran without a single disruption. All 500 guests arrived on time. The Tokyo directors personally expressed their appreciation to our team after the event. Most meaningful of all was the spontaneous standing ovation from the entire audience during the screening of Shimizu\'s 50-year journey video, something unplanned that became the most remembered moment of the night.',
    clientQuote: 'Elevent understood that this was not simply a company birthday party. It was a statement about who we are in Indonesia for the next 50 years. They translated that vision perfectly.',
  },
  {
    slug: 'future-leader-fest-2023',
    title: 'Future Leader Fest 2023',
    audience: '1,000 attendees, young leaders and students.',
    outcome: '1,000 young people attended in full, the mentoring sessions received the most positive feedback for successfully creating genuine connections at scale.',
    challengeEn: 'A youth event with 1,000 attendees and speakers of ministerial caliber required two things that often work against each other: impressive scale and an intimate, inspiring atmosphere. A leadership festival is not a seminar. The energy has to be different, and young attendees hold high expectations for the quality of the experience.',
    approachEn: 'We designed this event as a festival, not a conference. The venue layout was built to encourage movement and interaction rather than sitting and listening. The mentoring sessions were structured in a more personal format, breaking 1,000 participants into smaller groups to allow real conversations with mentors.',
    executionEn: [
      'Community Booth, dozens of booths from youth communities creating a festival atmosphere from the moment the first attendees arrived',
      'Talk Show on the main stage of Teater Tanah Airku at full capacity for 1,000 attendees',
      'Future Leader Mentoring, small group mentoring sessions drawn from the full 1,000 attendees',
      'Keynotes from Dr. H. Emil Elestianto Dardak (Deputy Governor of East Java), Billy Mambrasar (Presidential Special Staff), Bahlil Lahadalia (Minister of Investment), Damoza Nirwan (CEO Hyundai Gowa)',
      'Full protocol management for all government official speakers',
      'Crowd management for 1,000 attendees at Teater Tanah Airku TMII',
    ],
    resultEn: '1,000 young people attended from morning through to the afternoon. All keynote speakers arrived without protocol issues. The mentoring sessions received the most positive feedback, with the intimate format within a large-scale event successfully creating genuine connections between mentors and participants.',
    clientQuote: 'Managing 1,000 young people with high expectations is no small thing. They created exactly the right energy, enthusiastic but organized, large-scale but still personal.',
  },
  {
    slug: 'hekrafnas-2023',
    title: 'Perayaan Hari Ekonomi Kreatif Nasional 2023',
    audience: '350 guests, ministry officials and creative economy practitioners.',
    outcome: 'A more open and conversational talk show format successfully drew out the personal side of national figures, widely cited by media as the highlight of the event.',
    challengeEn: 'Hekrafnas is a state event. Every detail is visible to the public, media, and national figures. The Ministry of Tourism and Creative Economy needed an event that could celebrate the creative economy in a way that was itself creative, not a rigid ceremony but a celebration that reflected the spirit of the creative industry. With speakers of the caliber of Sandiaga Uno, Titiek Puspa, Darwis Triadi, and Putu Wijaya, production and protocol standards could not be compromised.',
    approachEn: 'Government events often get trapped in formality that works against the spirit of the creative industry. Our approach was formal in structure, creative in expression. The program sequence was built with the discipline of state protocol, but every segment was given room for honest expression.',
    executionEn: [
      'Inauguration with full state protocol, coordinated with the Ministry\'s protocol team',
      'Lifetime Awarding for figures who have contributed to Indonesia\'s creative economy',
      'Hybrid Zoom Online, stable quality streaming for participants across Indonesia',
      'Talk Show with Sandiaga Uno, Titiek Puspa, Darwis Triadi, and Putu Wijaya, with stage design that made the discussion feel natural',
      'Full protocol coordination for all VIP guests and state invitees',
    ],
    resultEn: 'The event ran without a single protocol incident. The hybrid streaming reached an audience far beyond the physical venue capacity. The talk show became the most media-cited highlight, with the more open and conversational format successfully drawing out the personal side of figures rarely seen in formal state events.',
    clientQuote: 'Our biggest challenge was creating a state event that did not feel stiff. They found that balance very well.',
  },
  {
    slug: 'milad-ke-11-askrindo-syariah',
    title: 'Milad Ke-11 Askrindo Syariah',
    audience: '350 guests, company leadership and business partners.',
    outcome: 'The UNGU Band performance became the most memorable moment of the evening, with many attendees experiencing UNGU live for the first time.',
    challengeEn: "A state-owned Islamic company's anniversary carries its own unique demands. Islamic values and sensibility need to be present genuinely, not as a formality. Askrindo Syariah wanted to celebrate their 11th year in a way that reflected the company's identity: professional, meaningful, and entertaining, all within a single evening.",
    approachEn: 'We built the evening around three phases of atmosphere that flowed naturally, an opening that was formal and inspiring with a plenary and awarding ceremony, a middle section that was entertaining with a cabaret show, and a closing that was celebratory with the gala dinner. The guest star selection reflected the same approach: UNGU Band for an emotional moment and Dalang Kang Denny Chandra for a lighter and more entertaining segment.',
    executionEn: [
      'Plenary and Welcome Remarks from Mr. Fankar Umran (President Director of PT Askrindo) and Mr. Kokok Alun Akbar (President Director of Askrindo Syariah)',
      'Awarding Ceremony, recognizing the best employees and business partners',
      'Cabaret Show, an entertainment segment that brought fresh energy to the middle of the evening',
      'Gala Dinner with a curated menu prepared to halal standards',
      'UNGU Band performance as the headline act of the evening',
      'Dalang Kang Denny Chandra for a comedy segment that brought laughter to the entire room',
    ],
    resultEn: "The evening ran smoothly in a packed format that never felt rushed. 350 attendees enjoyed every segment enthusiastically. The UNGU Band performance became the most memorable moment of the night. Askrindo Syariah's management expressed special appreciation for the team's sensitivity in maintaining an atmosphere consistent with the company's identity.",
    clientQuote: 'They understood that our company is about more than business. It is about values. Every element of that evening reflected who we are, and that is what we valued most.',
  },
  {
    slug: 'mirae-asset-10th-anniversary',
    title: '10th Anniversary Mirae Asset Sekuritas Indonesia',
    audience: '500 guests, company leadership, partners, and VIP guests.',
    outcome: 'A two-day program delivered without a single disruption, with Korean executives personally expressing appreciation for execution quality that exceeded their expectations.',
    challengeEn: 'A 10th anniversary is a milestone where a Korean company operating in Indonesia needs to affirm its identity: Indonesian enough to be celebrated together, while still honoring the Korean standards and values that form its foundation. The brief from Mirae Asset was clear: two full days that felt like a celebration among family, not just a corporate event.',
    approachEn: 'We built the two-day program with an intentional rhythm, from activities that built collective energy on the first day, through to the peak of the celebration on the second evening. The team building was designed so that every activity brought employees from different departments together in challenges that required genuine collaboration.',
    executionEn: [
      'Team Building and Gathering on day one, outdoor activities in the Sentul area to strengthen cross-departmental connections',
      'Motivation Class with a speaker relevant to the context of a growing securities company',
      'Gala Dinner with full production, stage, lighting, and entertainment to Korean corporate standards',
      'Guest Star: Wali Band as the headline entertainment',
      'Sand Artist Denny Darko for a memorable visual performance',
      'Executive Keynotes from Mr. Rhee Jung Ho (Vice Chairman) and Mr. Tae Yong Shim (CEO), coordinated with careful attention to Korean protocol',
    ],
    resultEn: "The two-day program ran on schedule with no delays. 500 attendees were fully engaged from the first day through to the gala dinner. Mirae Asset's Korean management specifically expressed appreciation for execution quality that exceeded their expectations.",
    clientQuote: 'We came with high expectations because this was our 10th anniversary. They did not just meet those expectations. They exceeded what we imagined could be done in two days.',
  },
  {
    slug: 'rakortek-direktorat-bandar-udara',
    title: 'Rapat Koordinasi Teknis Direktorat Bandar Udara',
    audience: '500 guests, ministry officials and aviation industry practitioners from across Indonesia.',
    outcome: 'Three days ran on schedule without a single delay. The Ministry of Transportation considered continuing the collaboration for the following year\'s Rakortek.',
    challengeEn: 'A ministerial technical coordination meeting is not simply a large gathering. It is a forum where national aviation policy is discussed. Five hundred participants from across Indonesia came to Yogyakarta with a dense technical agenda. Beyond the formal sessions, the Ministry of Transportation needed a program that built a sense of togetherness among staff from different units and regions.',
    approachEn: "We designed three days with a rhythm that accounted for the participants' energy curve, technical sessions at peak attention times, physical and social activities to refresh and strengthen bonds, and a gala dinner as a celebratory close. Yogyakarta was not just a venue. We incorporated elements of the city's culture and tourism into the program itself.",
    executionEn: [
      "Tour to Yogyakarta's cultural destinations, an icebreaker that brought participants from across the country together in an informal setting",
      'Gathering and Team Building, activities relevant to the context of a government organization',
      'Plenary Sessions, full technical setup for coordination sessions with 500 participants',
      'Awarding Ceremony, recognizing the best-performing units within the Directorate General of Civil Aviation',
      'Gala Dinner with guest star Ifan Seventeen',
      'Full logistics coordination for 500 participants traveling from cities across Indonesia',
    ],
    resultEn: "Three days of programming ran on schedule. All technical sessions were completed with full participation. Ifan Seventeen's performance at the gala dinner brought the energy of the entire group to its highest point before everyone returned to their respective cities.",
    clientQuote: 'An event of this scale with participants from all over Indonesia requires extremely careful coordination. Everything ran on time and to the standard we expected.',
  },
  {
    slug: 'sosialisasi-tanda-tangan-digital-kominfo',
    title: 'Sosialisasi Tanda Tangan Digital Kominfo',
    audience: '200 participants per province, NTB, West Papua, North Maluku.',
    outcome: '3 provinces, 600 or more participants completed the socialization program. Not a single session was cancelled or delayed due to logistical issues.',
    challengeEn: 'A government roadshow to remote regions is a true test of logistics. BSRE Kominfo needed a consistent socialization program across three provinces with very different infrastructure conditions, from Lombok which is relatively accessible, to Sorong and Ternate which required far more complex coordination.',
    approachEn: 'We built a fully portable program package. All materials, audio-visual equipment, and program protocols were packaged so they could be replicated under any conditions. Our advance team conducted venue surveys in each city to identify gaps between program requirements and actual site conditions, then prepared location-specific contingency plans for each venue.',
    executionEn: [
      'Lombok (12 October 2023): Hotel Merumata, FGD, Talk Show, and Plenary for 200 participants from NTB government agencies',
      'Sorong (29 November 2023): Hotel Aston Sorong, program replication with adaptations for West Papua conditions',
      'Ternate (6 December 2023): Hotel Muara, final program iteration with participants from North Maluku government agencies',
      'Consistent standards across all three locations, from audio-visual quality to socialization materials',
      'Full logistics coordination including team and all program equipment transportation to three different cities',
    ],
    resultEn: 'Three roadshows were executed within three months with consistently maintained quality. A total of over 600 participants from three provinces completed the socialization program. Not a single session was cancelled or delayed due to logistical issues.',
    clientQuote: 'A roadshow to Sorong and Ternate is not easy for any vendor. They proved that program standards do not have to drop just because the location is far from Jakarta.',
  },
  {
    slug: 'vertiv-asia-channel-summit-2023',
    title: 'Vertiv Asia Channel Summit 2023',
    audience: '350 delegates from 12 countries, Malaysia, Singapore, Indonesia, Vietnam, Cambodia, India, Pakistan, Philippines, Korea, China, Australia.',
    outcome: 'A two-day summit delivered without a single operational failure. Vertiv named it one of the best Asia Channel Summits they have ever held.',
    challengeEn: 'Vertiv needed a summit that could bring channel partners from 12 Asian countries together in a single strategic forum. The challenge was not only logistical, coordinating 350 people from 12 countries to Bali within two days, but also ensuring every element of the program felt relevant and valuable to delegates from vastly different business and cultural contexts.',
    approachEn: 'We approached this summit as an experience design challenge, not a logistics exercise. A good summit is not only about the content delivered. It is about the conditions created so that meaningful business connections can happen. We designed every segment, from seating arrangements in the plenary sessions to table compositions at the gala dinner, to maximize cross-country interaction.',
    executionEn: [
      'Plenary Sessions with broadcast-grade audio-visual setup for 350 delegates at the Grand Ballroom of Grand Hyatt',
      'Gala Dinner at an outdoor venue in Nusa Dua with the Bali sunset as a backdrop, designed for natural connection among delegates',
      'CSR Activity: Book Donation and Education Program, bringing all delegates together in a social program as a shared experience',
      'Business Forum, structured discussion sessions designed to encourage the exchange of insights across markets',
      'Half Day Tour and Golf, a post-summit program for informal connection outside the formal business setting',
      'Multi-language coordination, an operations team handling the needs of delegates from 12 countries simultaneously',
    ],
    resultEn: 'The summit ran in full across two days without operational disruption. All 350 delegates from 12 countries attended and were fully engaged. Vertiv Singapore stated this was one of the best Asia Channel Summits they have ever held.',
    clientQuote: 'Coordinating across 12 countries in two days is no small task. The team handling us understood that complexity and executed it with calm and precision.',
  },
  {
    slug: 'mitra-ninja-award-2020',
    title: 'Mitra Ninja Award 2020',
    audience: '100 guests, top Mitra Ninja Xpress owners from across Indonesia.',
    outcome: 'The Mitra partners left the evening feeling proud and valued. Post-event feedback was the strongest in the history of the Mitra Ninja program.',
    challengeEn: 'Ninja Xpress wanted to honor their best partners from across Indonesia with an evening that felt worthy of those partners\' contributions. The challenge was that many guests were business owners from various regions who may have been attending a formal event at this level for the first time. The evening needed to feel special without feeling exclusive or uncomfortable.',
    approachEn: 'We built the evening around the campaign tagline, You Grow, We Grow Together, a statement about equal partnership. Every element was designed to make the Mitra partners feel valued as the protagonists of the evening, not simply as an audience. From the welcome reception through to the awarding ceremony, the focus was always on them.',
    executionEn: [
      'VIP Reception, a warm welcome for Mitra partners arriving from different regions across Indonesia',
      'Gala Dinner at Hotel Arya Duta Menteng in a warm and celebratory atmosphere',
      'Awarding Night, the ceremonial highlight ensuring every recipient received a spotlight moment worthy of being remembered',
      'Company Update from the Ninja Xpress Board of Directors, delivered in a format that was easy to understand and inspiring for the Mitra partners',
      'Performance by Nassar as the closing guest star of the evening',
    ],
    resultEn: 'One hundred Mitra partners from across Indonesia left the evening feeling proud and valued. The awarding ceremony moved at the right pace, unhurried, giving every recipient the spotlight they deserved. The Ninja Xpress Board of Directors reported that post-event feedback from the Mitra partners was overwhelmingly positive.',
    clientQuote: 'Our Mitra partners are the backbone of our business. That evening, we wanted them to feel that. And they did.',
  },
]

async function run() {
  console.log(`Patching EN fields for ${patches.length} case study documents...\n`)

  let succeeded = 0
  let failed = 0

  for (const p of patches) {
    try {
      const doc = await client.fetch(
        `*[_type == "caseStudy" && slug.current == $slug][0]{ _id }`,
        { slug: p.slug }
      )

      if (!doc?._id) {
        console.log(`  NOT FOUND   ${p.slug}`)
        failed++
        continue
      }

      await client.patch(doc._id).set({
        title:       p.title,
        audience:    p.audience,
        outcome:     p.outcome,
        challengeEn: p.challengeEn,
        approachEn:  p.approachEn,
        executionEn: p.executionEn,
        resultEn:    p.resultEn,
        clientQuote: p.clientQuote,
      }).commit()

      console.log(`  OK    ${p.slug}`)
      succeeded++
    } catch (err) {
      console.log(`  FAIL  ${p.slug}  --  ${err.message}`)
      failed++
    }
  }

  console.log(`\nDone. Succeeded: ${succeeded}  Failed: ${failed}`)
}

run()
