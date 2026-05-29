// patch-service-faq-en.js
// Patches faqs[].question and faqs[].answer (EN fields) for all 16 service documents.
// Fetches the existing faqs array, merges EN values at the correct indexes,
// then writes the full array back. Does NOT touch questionId or answerId.

const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: '98jwav2j',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76ZOtO2mXzNG7V2iUNXSH2Xm7atO8kE3pWrVn5Ygc25qU90QN0UPM0yLmC1Ef710qreEYPkPFbzpyZwDTbnHLUS0NDoLiO84ttCmmIZKbX4UvvDJwslbQaIgweNub7FLaptfCXpcQFtXxuJa5RSETGbDNLIYg77DJXqpnKYSzLYfWDV4FJ',
  useCdn: false,
})

// EN FAQ values keyed by slug, ordered by index
const enFaqs = {
  'corporate-event': [
    {
      question: 'How far in advance should we book for a large corporate event?',
      answer: 'For events with 500 or more attendees, we recommend a minimum of 12 to 16 weeks before the event date. This allows enough time for venue contracts, speaker curation, and full production preparation. We have managed events on shorter timelines, but options and quality narrow quickly.',
    },
    {
      question: 'Does Elevent handle all vendors, or do we need to source some ourselves?',
      answer: 'We handle everything. One contact, one responsibility. You do not need to coordinate with any vendor separately. All vendors are selected and managed by our team.',
    },
  ],
  'corporate-gathering': [
    {
      question: 'What is the difference between a corporate gathering and a corporate event?',
      answer: 'Corporate events tend to be more strategically structured, with a clear business agenda and defined success indicators. Corporate gatherings focus more on human connection and internal culture, from family days to year-end celebrations. Both require serious planning to succeed.',
    },
    {
      question: 'Can Elevent run a gathering for a very large group of 1,000 or more employees?',
      answer: 'Yes. We have produced gatherings for groups of up to 5,000 people. Large gatherings require a different approach, combining large plenary sessions with more intimate small group experiences, so every person feels genuinely involved rather than merely present.',
    },
    {
      question: 'Can Elevent handle gatherings that involve employee families?',
      answer: 'Yes. Family days are one of the formats we work with most frequently. Programs are designed to engage both employees and their family members, with activities suitable for a range of ages. We manage all logistics, from children\'s play areas to organized meeting points.',
    },
  ],
  'product-launching': [
    {
      question: 'How does Elevent handle media and press invitations?',
      answer: 'We coordinate the full media invitation and accreditation process, working alongside your communications team or PR agency. We manage media registration, dedicated press zones, interview scheduling, and press material distribution, ensuring journalists have everything they need to file on time.',
    },
    {
      question: 'How does Elevent ensure product confidentiality before the launch?',
      answer: 'Confidentiality is part of how we work. Product details are shared strictly on a need-to-know basis within the team. We implement controlled venue access, separate briefing channels for crew, and strict protocols in the product reveal area.',
    },
    {
      question: 'How far in advance should product launch preparation begin?',
      answer: 'For a full media-scale launch, we recommend 10 to 14 weeks. This covers the teaser phase, media invitation coordination, venue design, and presenter rehearsals. For a more focused launch, 6 to 8 weeks can be sufficient, but the earlier we start, the more options remain open.',
    },
  ],
  'gala-dinner-award-night': [
    {
      question: 'How many award categories can Elevent manage in a single ceremony?',
      answer: 'We have produced ceremonies with anywhere from 4 to over 40 award categories. The key is rhythm. Each category needs enough time to feel meaningful without losing the momentum of the evening. We script and time every segment in advance, including a full rehearsal with the MC and all award presenters.',
    },
    {
      question: 'Can Elevent include live entertainment in the ceremony?',
      answer: 'Yes. We curate and direct all entertainment, from the opening performance through to the post-dinner show, ensuring every element serves the theme and emotional arc of the evening. Entertainment is integrated into the program, not added as an afterthought.',
    },
    {
      question: 'What are the minimum and maximum guest counts for a gala dinner?',
      answer: 'We have produced gala dinners for groups ranging from 80 to 1,500 guests. Below 80, a more intimate private venue approach makes more sense. Above 1,500, dining service logistics and stage acoustics require additional planning that we build in from the start.',
    },
  ],
  'conference-seminar': [
    {
      question: 'How far in advance should we engage Elevent for a large conference?',
      answer: 'For conferences with 300 or more attendees, we recommend reaching out at least 16 weeks before the event date. This provides enough time for venue contracts, speaker management, and production preparation. The earlier we are involved, the more we can optimize.',
    },
    {
      question: 'Can Elevent handle a multi-day conference across multiple cities?',
      answer: 'We have executed roadshows and multi-stage programs across Jakarta, Surabaya, Bali, Singapore, and Kuala Lumpur. Events like these require a dedicated operational lead in each city, and we build this into the team structure from the start.',
    },
    {
      question: 'Can Elevent help curate and recruit speakers for our conference?',
      answer: 'Yes. Speaker curation is one of the strongest capabilities we bring. We have a cross-industry speaker network and can assist with identification, initial outreach, honorarium negotiation, content briefing, and logistics coordination for all speakers, so you do not need to manage each relationship separately.',
    },
  ],
  'team-building': [
    {
      question: 'How does Elevent ensure activities feel relevant rather than forced?',
      answer: 'We start every project with an in-depth conversation with the commissioning leader. We want to understand the current team dynamics, what has been tried before, and what success looks like in practical terms. Activities are selected and sequenced for that specific context, not chosen from a catalog.',
    },
    {
      question: 'Can Elevent run a program for a very large team of 200 or more people?',
      answer: 'Yes. We have produced team programs for groups of up to 500 people without compromising the quality of experience, using parallel activity tracks and rotating activity stations across subgroups.',
    },
    {
      question: 'Does a team building program need to be held offsite, or can it be done in the office?',
      answer: 'Both are possible, and the choice depends on the program goals. Outdoor activities tend to build energy and reduce workplace fatigue. Indoor programs are easier to control and can be integrated into a working day agenda. We design for both formats and recommend whichever fits best after understanding your team\'s context.',
    },
  ],
  'mice-hospitality': [
    {
      question: 'Does Elevent manage MICE programs that span multiple countries?',
      answer: 'Yes. We have managed MICE programs across several Southeast Asian countries, coordinating cross-border logistics, local partners, and consistent service standards at every location. For programs spanning multiple countries, we place a dedicated operational lead in each market.',
    },
    {
      question: 'Can Elevent handle incentive programs for hundreds of delegates simultaneously?',
      answer: 'Yes. Large-scale incentive programs are one of our core areas of expertise. We have managed incentive programs for 50 to over 500 delegates simultaneously, with group logistics, experiences tailored to each achievement tier, and consistent quality standards maintained throughout.',
    },
    {
      question: 'How does Elevent maintain consistent service quality across all MICE program locations?',
      answer: 'We establish documented service standards for every program and train local teams before execution. One of our program directors follows the program from start to finish and is responsible for maintaining standards. All local partners go through a selection and briefing process before joining any client program.',
    },
  ],
  'hybrid-virtual-event': [
    {
      question: 'Which streaming platforms does Elevent support?',
      answer: 'We work across all major platforms including YouTube Live, Zoom Webinar, Hopin, Teams Live Events, and custom platforms. Platform selection is driven by the client\'s existing infrastructure, audience size, and the interactivity features required.',
    },
    {
      question: 'What happens if the connection drops during a live stream?',
      answer: 'We build full redundancy into every live broadcast. Primary and backup internet connections, encoder hardware with automatic failover, and a dedicated technical director monitoring the stream in real time. All emergency procedures are rehearsed in advance, not improvised when something goes wrong.',
    },
    {
      question: 'How long does it take to produce a quality hybrid event?',
      answer: 'For a hybrid event with full broadcast production, we recommend a minimum of 8 to 10 weeks of preparation. This covers platform selection, technical setup, multi-camera rehearsal, and presenter briefing. The technical rehearsal is a stage that cannot be skipped. It is where most technical issues are identified and resolved before the event day.',
    },
  ],
  'incentive-trip': [
    {
      question: 'What destinations does Elevent recommend for incentive trips?',
      answer: 'Bali, Singapore, Bangkok, and Japan are the most requested destinations. We have strong partner networks and local connections in each of these destinations to ensure experiences that exceed expectations. We can also run programs in other destinations with adequate preparation time.',
    },
    {
      question: 'Can Elevent manage tiered incentive experiences within the same program?',
      answer: 'Yes. We design differentiated experiences for different achievement levels within a single cohesive program, with separate accommodation, exclusive experiences for the top tier, and recognition that feels personal for each recipient, without any group feeling undervalued.',
    },
    {
      question: 'What is the minimum group size for an incentive trip program?',
      answer: 'We typically work with groups of at least 15 people. Below that, a regular trip through a premium travel agency is more efficient. For larger groups, the scale enables better negotiation with properties and local operators, delivering value that cannot be achieved individually.',
    },
  ],
  'corporate-meeting': [
    {
      question: 'Does Elevent handle venue sourcing or only on-site operations?',
      answer: 'Both. We source, negotiate, and manage the venue, including all on-site logistics. For high-stakes meetings, venue selection is not a small detail. The right room determines the quality of the conversations that happen inside it.',
    },
    {
      question: 'What types of meeting venues does Elevent typically recommend?',
      answer: 'It depends on the meeting objective. Strategic board meetings are usually best held in a private room at a five-star hotel with a layout that allows all participants to face each other. Off-site strategy sessions often benefit from a more informal setting such as a resort or private villa. We assess the context and recommend the option that best supports the quality of conversation you need.',
    },
    {
      question: 'Can Elevent document the outcomes and decisions from a meeting?',
      answer: 'Yes. We provide professional documentation services including structured minutes, decision summaries, and action item documents. For meetings requiring a high level of confidentiality, we adapt our documentation protocols accordingly, including options that do not involve digital devices.',
    },
  ],
  'corporate-anniversary': [
    {
      question: 'How does Elevent balance honoring the past while staying relevant to the future?',
      answer: 'We design the evening arc with intention. The first half honors the legacy, then shifts clearly toward vision in the second half. That transition moment, when the atmosphere moves from reflection to aspiration, is the part we prepare most carefully.',
    },
    {
      question: 'How far in advance should we start planning a corporate anniversary?',
      answer: 'For major anniversaries such as 25, 50, or 100 years, we recommend beginning planning 6 to 12 months in advance. A meaningful anniversary requires historical research, content curation, and time to build an honest narrative. An anniversary that feels rushed will show, and milestones like these deserve more than that.',
    },
    {
      question: 'Does Elevent help produce historical content such as books or documentary films?',
      answer: 'Yes. Heritage content production is an integral part of the anniversaries we design, from short documentary videos and interactive timeline installations to commemorative books and digital galleries. We work with creative teams and experienced journalists to turn a company\'s history into a story worth telling.',
    },
  ],
  'corporate-outing': [
    {
      question: 'What types of outing activities does Elevent offer?',
      answer: 'We curate activities based on the character and needs of your team, from outdoor adventures and culinary experiences to creative activities and local cultural experiences. There are no standard packages. Every outing starts with a conversation about who your team is and what you want to achieve.',
    },
    {
      question: 'Where does Elevent run corporate outings?',
      answer: 'Across Indonesia, from Puncak, Lembang, and Karawang for Jabodetabek groups, to Bali, Lombok, and Yogyakarta for multi-day outings. We also have networks for Southeast Asian destinations for companies that want an international outing.',
    },
    {
      question: 'What is the optimal group size for a corporate outing?',
      answer: 'We handle outings for groups of 20 to 500 people. Groups below 100 typically allow for more personal design and more intimate activities. For larger groups, we divide the program into smaller subgroups that rotate through activity stations, ensuring experience quality remains high across the entire group.',
    },
  ],
  'brand-activation': [
    {
      question: 'How does Elevent measure activation success?',
      answer: 'We agree on success metrics with the client before design begins, typically a combination of dwell time, interaction rate, content capture volume, and prospects generated. The measurement system is designed from the start, not added as an afterthought.',
    },
    {
      question: 'Does Elevent design the physical build or only the concept?',
      answer: 'Both, from concept through to construction, with Elevent as the single accountable party. We design the visitor experience, define the physical build specifications, and manage fabrication and installation with our production partners.',
    },
    {
      question: 'How far in advance should an activation be planned?',
      answer: 'For activations with complex physical builds, we recommend a minimum of 8 to 10 weeks. This covers design, client approval, fabrication, and installation. Simpler activations can be executed in 4 to 6 weeks. Reaching out earlier also opens access to premium venues and talent that are often booked well before the execution date.',
    },
  ],
  'exhibition-pameran': [
    {
      question: 'What booth sizes does Elevent typically handle?',
      answer: 'We work with booths ranging from 9 square meters to custom builds of 300 square meters and beyond. Size is not the most important factor. The visitor experience design within the available space is what determines whether your booth generates conversations or not.',
    },
    {
      question: 'Does Elevent also manage the registration process and coordination with exhibition organizers?',
      answer: 'Yes. We manage the entire coordination process with exhibition organizers, including booth registration, technical drawing submission, electrical and network coordination, and compliance with venue regulations. This is time-consuming work that is often overlooked until it is too late. We handle it from the start.',
    },
    {
      question: 'Can Elevent design a booth that can be used across multiple exhibitions?',
      answer: 'Yes. We design modular booth systems that can be reconfigured for different sizes and layouts at different exhibitions. This optimizes the construction investment and ensures consistent brand presence across all your exhibition appearances throughout the year.',
    },
  ],
  'roadshow': [
    {
      question: 'How many cities can a roadshow cover?',
      answer: 'We have run roadshows covering 3 to 15 cities across Indonesia and Southeast Asia. The key to a successful multi-city roadshow is rigorous production standardization and a reliable logistics system. Both are built in from the planning stage.',
    },
    {
      question: 'How does Elevent ensure consistent quality in every city?',
      answer: 'We develop a standard production guide for every roadshow, covering technical setup, scripts, team briefing guides, and quality checklists. Our core team travels with the program from city to city while local teams in each city are trained to the same standard. Every city receives a technical rehearsal before the event day, not last-minute fixes.',
    },
    {
      question: 'Can Elevent manage a roadshow that combines public and private events in the same city?',
      answer: 'Yes. Many of our enterprise roadshows combine formats, for example a dealer workshop in the morning at one venue followed by a public launch in the afternoon at a different venue, in the same city. We manage the logistical transitions between formats and ensure all teams and materials are in the right place at the right time.',
    },
  ],
  'corporate-event-organizer': [
    {
      question: 'What sets Elevent apart from other event organizers?',
      answer: 'We direct, not just execute. Every brief is matched with a specialist team that has run the same format many times before. One contact, full accountability from start to finish. We also bring a perspective that is willing to challenge your brief rather than simply agree with it.',
    },
    {
      question: 'Can Elevent manage our entire annual event calendar?',
      answer: 'Yes. We work with several clients as their dedicated long-term event partner, managing the full portfolio from large conferences to internal gatherings, with consistent standards and a deepening understanding of the brand and company culture that grows over time.',
    },
    {
      question: 'How does the onboarding process work if we want to make Elevent a long-term EO partner?',
      answer: 'We start with a discovery session to understand your event calendar, brand standards, internal stakeholders, and expectations. From there, we build a partnership plan covering team structure, communication approach, and approval processes tailored to how your organization works. Most of our long-term partnerships begin with a single pilot event first.',
    },
  ],
}

async function run() {
  const slugs = Object.keys(enFaqs)
  console.log(`Patching EN FAQ fields for ${slugs.length} service documents...\n`)

  let succeeded = 0
  let failed = 0

  for (const slug of slugs) {
    try {
      // Fetch _id and existing faqs array (preserving all existing fields)
      const doc = await client.fetch(
        `*[_type == "service" && slug.current == $slug][0]{ _id, faqs }`,
        { slug }
      )

      if (!doc?._id) {
        console.log(`  NOT FOUND   ${slug}`)
        failed++
        continue
      }

      const existingFaqs = doc.faqs ?? []
      const enEntries = enFaqs[slug]

      // Merge: keep all existing fields, overwrite only question + answer
      const mergedFaqs = enEntries.map((enFaq, i) => ({
        ...existingFaqs[i],   // preserves _key, questionId, answerId, etc.
        question: enFaq.question,
        answer:   enFaq.answer,
      }))

      // Sanity check: warn if lengths differ
      if (existingFaqs.length !== enEntries.length) {
        console.log(`  WARN  ${slug}: existing has ${existingFaqs.length} FAQs, EN patch has ${enEntries.length}. Writing ${mergedFaqs.length}.`)
      }

      await client.patch(doc._id).set({ faqs: mergedFaqs }).commit()
      console.log(`  OK    ${slug}  (${mergedFaqs.length} FAQs patched)`)
      succeeded++
    } catch (err) {
      console.log(`  FAIL  ${slug}  --  ${err.message}`)
      failed++
    }
  }

  console.log(`\nDone. Succeeded: ${succeeded}  Failed: ${failed}`)
}

run()
