import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'titleId',
      title: 'Title (ID)',
      type: 'string',
    }),
    defineField({
      name: 'headlineHero',
      title: 'Hero Headline (EN) — Homepage',
      type: 'text',
      description:
        'Narrative headline for homepage display. Use line breaks for dramatic effect. If empty, falls back to title.',
    }),
    defineField({
      name: 'headlineHeroId',
      title: 'Hero Headline (ID) — Homepage',
      type: 'text',
      description:
        'Bahasa Indonesia version of the hero headline. If empty, falls back to headlineHero.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      description: 'Can be anonymized (e.g. "Bank BUMN, Tier 1")',
    }),
    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
    }),
    defineField({
      name: 'audience',
      title: 'Audience (EN)',
      type: 'string',
    }),
    defineField({
      name: 'audienceId',
      title: 'Audience (ID)',
      type: 'string',
    }),
    defineField({
      name: 'cities',
      title: 'Cities',
      type: 'string',
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome (EN)',
      type: 'string',
    }),
    defineField({
      name: 'outcomeId',
      title: 'Outcome (ID)',
      type: 'string',
    }),
    defineField({
      name: 'outcomeNumber',
      title: 'Outcome Number',
      type: 'string',
      description: 'e.g. +38%, 12 Countries',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'brief',
      title: 'Brief (ID)',
      type: 'text',
    }),
    defineField({
      name: 'briefEn',
      title: 'Brief (EN)',
      type: 'text',
    }),
    // ── Extended body fields ──────────────────────────────────────────
    defineField({
      name: 'challenge',
      title: 'Challenge (ID)',
      type: 'text',
      description: 'The client challenge / problem statement in Bahasa Indonesia',
    }),
    defineField({
      name: 'challengeEn',
      title: 'Challenge (EN)',
      type: 'text',
    }),
    defineField({
      name: 'approach',
      title: 'Approach (ID)',
      type: 'text',
      description: 'How Elevent approached and framed the solution in Bahasa Indonesia',
    }),
    defineField({
      name: 'approachEn',
      title: 'Approach (EN)',
      type: 'text',
    }),
    defineField({
      name: 'execution',
      title: 'Execution (ID)',
      type: 'array',
      description: 'Bullet list of execution highlights in Bahasa Indonesia',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'executionEn',
      title: 'Execution (EN)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'result',
      title: 'Result (ID)',
      type: 'text',
      description: 'Outcomes and results in Bahasa Indonesia',
    }),
    defineField({
      name: 'resultEn',
      title: 'Result (EN)',
      type: 'text',
    }),
    defineField({
      name: 'clientQuote',
      title: 'Client Quote (EN)',
      type: 'text',
    }),
    defineField({
      name: 'clientQuoteId',
      title: 'Client Quote (ID)',
      type: 'text',
    }),
    defineField({
      name: 'clientQuoteName',
      title: 'Client Quote — Person Name',
      type: 'string',
      description: 'Optional. Full name of the person quoted.',
    }),
    defineField({
      name: 'clientQuoteAttribution',
      title: 'Client Quote Attribution',
      type: 'string',
      description: 'Format: "Role, Company" — will be split and styled separately.',
    }),
    // ── Meta ─────────────────────────────────────────────────────────
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video ID (highlight)',
      type: 'string',
      description:
        'Optional. YouTube video ID for a highlight embed, e.g. n-hYW2aMC7k. Renders a responsive 16:9 video section on the case study page.',
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'reference',
      to: [{ type: 'service' }],
    }),
  ],
})
