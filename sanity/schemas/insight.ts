import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'insight',
  title: 'Insight',
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
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt (ID)',
      type: 'text',
    }),
    defineField({
      name: 'excerptEn',
      title: 'Excerpt (EN)',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Body (ID)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'bodyEn',
      title: 'Body (EN)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
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
  ],
})
