import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'number',
      title: 'Number',
      type: 'string',
      description: 'e.g. 01/09',
    }),
    defineField({
      name: 'descriptor',
      title: 'Descriptor (ID)',
      type: 'text',
    }),
    defineField({
      name: 'descriptorEn',
      title: 'Descriptor (EN)',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Tier 1', value: 'tier1' },
          { title: 'Tier 2', value: 'tier2' },
        ],
      },
    }),
    defineField({ name: 'tagline',    title: 'Tagline (EN)',           type: 'string' }),
    defineField({ name: 'taglineId',  title: 'Tagline (ID)',           type: 'string' }),
    defineField({ name: 'problem',    title: 'Problem (EN)',           type: 'text'   }),
    defineField({ name: 'problemId',  title: 'Problem (ID)',           type: 'text'   }),
    defineField({ name: 'approach',   title: 'Approach (EN)',          type: 'text'   }),
    defineField({ name: 'approachId', title: 'Approach (ID)',          type: 'text'   }),
    defineField({ name: 'included',   title: "What's Included (EN)",   type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'includedId', title: "What's Included (ID)",   type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'idealFor',   title: 'Ideal For (EN)',         type: 'text'   }),
    defineField({ name: 'idealForId', title: 'Ideal For (ID)',         type: 'text'   }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question (EN)', type: 'string' }),
            defineField({ name: 'questionId', title: 'Question (ID)', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer (EN)', type: 'text' }),
            defineField({ name: 'answerId', title: 'Answer (ID)', type: 'text' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body Content (ID)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'bodyEn',
      title: 'Body Content (EN)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
