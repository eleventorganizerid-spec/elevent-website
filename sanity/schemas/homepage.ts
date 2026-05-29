import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline (EN)',
      type: 'string',
    }),
    defineField({
      name: 'heroHeadlineId',
      title: 'Hero Headline (ID)',
      type: 'string',
    }),
    defineField({
      name: 'heroSubcopy',
      title: 'Hero Subcopy (ID)',
      type: 'text',
    }),
    defineField({
      name: 'heroSubcopyEn',
      title: 'Hero Subcopy (EN)',
      type: 'text',
    }),
    defineField({
      name: 'trustBarHeadline',
      title: 'Trust Bar Headline',
      type: 'string',
    }),
    defineField({
      name: 'trustBarBrands',
      title: 'Trust Bar Brands',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'whatWeDoHeadline',
      title: 'What We Do Headline',
      type: 'string',
    }),
    defineField({
      name: 'whatWeDoBody',
      title: 'What We Do Body (ID)',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'whatWeDoBodyEn',
      title: 'What We Do Body (EN)',
      type: 'array',
      of: [{ type: 'text' }],
    }),
  ],
})
