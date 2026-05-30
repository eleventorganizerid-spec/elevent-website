import type { Metadata } from 'next'
import { Instrument_Serif, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import CookieBanner from '@/components/ui/CookieBanner'
import JsonLd from '@/components/seo/JsonLd'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://elevent.id'),
  title: {
    default: 'Elevent — Corporate Event Organizer Jakarta | Enterprise Events Indonesia',
    template: '%s | Elevent',
  },
  description:
    'Platform event organizer enterprise Indonesia. Dari gala dinner hingga hybrid conference, 100–5.000 peserta. Jakarta, Bali, Surabaya.',
  keywords: [
    'corporate event organizer jakarta',
    'event organizer enterprise indonesia',
    'gala dinner jakarta',
    'hybrid event indonesia',
    'conference organizer jakarta',
    'team building jakarta',
    'incentive trip indonesia',
    'MICE jakarta',
  ],
  openGraph: {
    title: 'Elevent — Corporate Event Organizer Jakarta | Enterprise Events Indonesia',
    description:
      'Platform event organizer enterprise Indonesia. Dari gala dinner hingga hybrid conference, 100–5.000 peserta. Jakarta, Bali, Surabaya.',
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    url: 'https://elevent.id',
    siteName: 'Elevent',
    images: [{ url: '/assets/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevent — Corporate Event Organizer Jakarta',
    description:
      'Platform event organizer enterprise Indonesia. Dari gala dinner hingga hybrid conference, 100–5.000 peserta.',
  },
  alternates: {
    canonical: 'https://elevent.id',
    languages: {
      id: 'https://elevent.id',
      en: 'https://elevent.id/?lang=en',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${instrumentSerif.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <JsonLd />
        {children}
        <WhatsAppButton />
        <CookieBanner />
        <GoogleAnalytics gaId="G-ESWHLBLEN3" />
      </body>
    </html>
  )
}
