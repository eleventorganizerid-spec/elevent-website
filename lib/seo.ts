import type { Metadata } from 'next'

export const baseOpenGraph = {
  type: 'website',
  locale: 'id_ID',
  alternateLocale: 'en_US',
  siteName: 'Elevent',
  images: [
    {
      url: '/assets/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Elevent — Corporate Event Organizer Jakarta',
    },
  ],
} satisfies NonNullable<Metadata['openGraph']>
