import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import AnimateIn from '@/components/ui/AnimateIn'
import Footer from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { allCaseStudiesQuery } from '@/lib/queries'
import type { SanityCaseStudy } from '@/lib/types'
import CTASection from '@/components/home/CTASection'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Our Work — Elevent',
  description: 'Case studies from enterprise events across Indonesia. See how Elevent has directed outcomes for corporate clients in Jakarta, Bali, and Surabaya.',
  alternates: {
    canonical: 'https://elevent.id/work',
    languages: {
      'x-default': 'https://elevent.id/work',
      'id': 'https://elevent.id/work',
      'en': 'https://elevent.id/work?lang=en',
    },
  },
  openGraph: {
    title: 'Our Work — Elevent',
    description: 'Case studies from enterprise events across Indonesia.',
    url: 'https://elevent.id/work',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
  },
}

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80'

export default async function WorkPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams
  const isEn = lang === 'en'
  const langParam = isEn ? '?lang=en' : ''
  let caseStudies: SanityCaseStudy[] = []

  try {
    const data = await client.fetch<SanityCaseStudy[]>(allCaseStudiesQuery)
    if (data && data.length > 0) caseStudies = data
  } catch {
    // Sanity unavailable
  }

  return (
    <>
      <Navigation />
      <main className={styles.main}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div className={styles.header}>
          <AnimateIn delay={0} className={styles.label}>OUR WORK</AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className={styles.headline}>
              Events that left the room <em>different.</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2} className={styles.subtext}>
            {isEn
              ? 'Every project starts with a brief. Every brief ends with a room that\'s been changed.'
              : 'Setiap proyek dimulai dengan brief. Setiap brief berakhir dengan ruangan yang berbeda.'}
          </AnimateIn>
        </div>

        {/* ── Case study list ─────────────────────────────────── */}
        {caseStudies.length > 0 ? (
          <div className={styles.list}>
            {caseStudies.map((cs) => {
              const imgSrc = cs.heroImage?.asset?.url ?? PLACEHOLDER_IMG

              return (
                <Link
                  key={cs._id}
                  href={`/work/${cs.slug.current}${langParam}`}
                  className={styles.row}
                >
                  <div className={styles.thumb}>
                    <Image
                      src={imgSrc}
                      fill
                      alt={cs.title}
                      sizes="280px"
                      style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
                    />
                  </div>

                  <div className={styles.details}>
                    <p className={styles.meta}>
                      {[cs.eventType?.title ?? cs.format, cs.year].filter(Boolean).join(' · ')}
                    </p>
                    <h2 className={styles.title}>
                      {isEn ? cs.title : (cs.titleId ?? cs.title)}
                    </h2>
                    {cs.client && <p className={styles.clientName}>{cs.client}</p>}
                    {cs.outcomeNumber && <p className={styles.outcome}>{cs.outcomeNumber}</p>}
                  </div>

                  <div className={styles.arrow}>EXPLORE →</div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>No case studies yet.</p>
          </div>
        )}

        {/* ── CTA ─────────────────────────────────────────────── */}
        <CTASection lang={lang} />

      </main>
      <Footer />
    </>
  )
}
