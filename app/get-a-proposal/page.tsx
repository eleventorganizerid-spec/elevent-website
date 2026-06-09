import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProposalForm from './ProposalForm'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { baseOpenGraph } from '@/lib/seo'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Get a Proposal — Elevent',
  description: 'Submit your event brief to Elevent. Tell us about your company, event format, audience size, and timeline. We will respond within one working day.',
  alternates: {
    canonical: 'https://elevent.id/get-a-proposal',
    languages: {
      'x-default': 'https://elevent.id/get-a-proposal',
      'id': 'https://elevent.id/get-a-proposal',
      'en': 'https://elevent.id/get-a-proposal?lang=en',
    },
  },
  openGraph: {
    ...baseOpenGraph,
    title: 'Get a Proposal — Elevent',
    description: 'Submit your event brief to Elevent. We respond within one working day.',
    url: 'https://elevent.id/get-a-proposal',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630, alt: 'Get a Proposal from Elevent — Corporate Event Organizer' }],
  },
}

export default function GetAProposalPage() {
  return (
    <div className={styles.page}>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://elevent.id' },
        { name: 'Get a Proposal', url: 'https://elevent.id/get-a-proposal' },
      ]} />
      {/* Minimal header — logo only */}
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/logo-dark.png"
            alt="Elevent"
            width={120}
            height={60}
            style={{ objectFit: 'contain', marginLeft: '-12px' }}
            priority
          />
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {/* Left column — form */}
          <div className={styles.formCol}>
            <div className={styles.formHeader}>
              <p className={styles.formLabel}>GET A PROPOSAL</p>
              <h1 className={styles.formHeadline}>Tell us about your event.</h1>
              <p className={styles.formSubcopy}>
                Kami akan merespons dalam satu hari kerja dengan tim yang tepat untuk kebutuhan Anda.
              </p>
            </div>
            <ProposalForm />
          </div>

          {/* Right column — trust signals */}
          <div className={styles.trustCol}>
            <div className={styles.trustInner}>
              <p className={styles.trustLabel}>DIPERCAYA OLEH</p>

              <div className={styles.trustClients}>
                <span className={styles.trustClient}>Shimizu Corporation Jakarta</span>
                <span className={styles.trustClient}>Vertiv Singapore Pte Ltd</span>
                <span className={styles.trustClient}>Mirae Asset Sekuritas Indonesia</span>
                <span className={styles.trustClient}>Kementerian Pariwisata & Ekonomi Kreatif RI</span>
                <span className={styles.trustClient}>Kementerian Perhubungan RI</span>
              </div>

              <div className={styles.trustQuote}>
                <p className={styles.trustQuoteMark}>&ldquo;</p>
                <blockquote className={styles.trustQuoteText}>
                  Kami tidak perlu mengawasi satu pun detail. Itu yang kami cari dari sebuah partner.
                </blockquote>
                <p className={styles.trustAttribution}>
                  Direktur
                  <br />
                  <em>Mirae Asset Sekuritas Indonesia</em>
                </p>
              </div>

              <div className={styles.trustMeta}>
                <div className={styles.trustMetaItem}>
                  <span className={styles.trustMetaNum}>48h</span>
                  <span className={styles.trustMetaDesc}>Response time average</span>
                </div>
                <div className={styles.trustMetaItem}>
                  <span className={styles.trustMetaNum}>16</span>
                  <span className={styles.trustMetaDesc}>Event formats</span>
                </div>
                <div className={styles.trustMetaItem}>
                  <span className={styles.trustMetaNum}>NDA</span>
                  <span className={styles.trustMetaDesc}>Available before proposal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
