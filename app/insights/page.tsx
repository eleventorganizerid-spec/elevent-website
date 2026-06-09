import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import AnimateIn from '@/components/ui/AnimateIn'
import Footer from '@/components/layout/Footer'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { client } from '@/sanity/client'
import { insightsQuery } from '@/lib/queries'
import type { Insight } from '@/lib/types'
import CTASection from '@/components/home/CTASection'
import styles from './insights.module.css'

export const metadata: Metadata = {
  title: 'Insights — Elevent',
  description: 'Guides, analysis, and perspectives on corporate events for GA Managers, CorpComm teams, and anyone responsible for their company event calendar.',
  alternates: {
    canonical: 'https://elevent.id/insights',
    languages: {
      'x-default': 'https://elevent.id/insights',
      'id': 'https://elevent.id/insights',
      'en': 'https://elevent.id/insights?lang=en',
    },
  },
  openGraph: {
    title: 'Insights — Elevent',
    description: 'Guides and perspectives on corporate events for enterprise teams in Indonesia.',
    url: 'https://elevent.id/insights',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
  },
}

function formatDate(dateString: string, isEn: boolean): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString(isEn ? 'en-US' : 'id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

interface Props {
  searchParams: Promise<{ lang?: string }>
}

export default async function InsightsPage({ searchParams }: Props) {
  const { lang } = await searchParams
  const isEn = lang === 'en'

  let insights: Insight[] = []

  try {
    const data = await client.fetch<Insight[]>(insightsQuery)
    if (data && data.length > 0) insights = data
  } catch {
    // Sanity unavailable — render with empty array
  }

  const featuredInsight = insights[0] ?? null
  const gridInsights = insights.slice(1)

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://elevent.id' },
        { name: 'Insights', url: 'https://elevent.id/insights' },
      ]} />
      <Navigation />
      <main className={styles.main}>

        {/* ── 1. HEADER ─────────────────────────────────────────────── */}
        <section className={styles.header}>
          <AnimateIn delay={0} className={styles.label}>INSIGHTS</AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className={styles.headline}>Our perspective.</h1>
          </AnimateIn>
          <AnimateIn delay={0.2} className={styles.subtext}>
            {isEn
              ? 'Guides, analysis, and perspectives on corporate events — for GA Managers, CorpComm, and anyone responsible for the company event calendar.'
              : 'Panduan, analisis, dan sudut pandang tentang corporate event — untuk GA Manager, CorpComm, dan siapapun yang bertanggung jawab atas kalender event perusahaan.'}
          </AnimateIn>
        </section>

        {/* ── 2. FEATURED ARTICLE ───────────────────────────────────── */}
        {featuredInsight && (
          <section className={styles.featuredSection}>
            <div className={styles.featuredGrid}>
              {/* Left — image */}
              <div className={styles.featuredImageCol}>
                {featuredInsight.coverImage?.asset?.url ? (
                  <img
                    src={featuredInsight.coverImage.asset.url}
                    alt={isEn ? (featuredInsight.title ?? featuredInsight.titleId) : (featuredInsight.titleId ?? featuredInsight.title)}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'saturate(0.85)',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'var(--ink)',
                    }}
                  />
                )}
              </div>

              {/* Right — content */}
              <div className={styles.featuredContent}>
                <div className={styles.featuredTop}>
                  <span className={styles.featuredCategory}>
                    {featuredInsight.category ?? 'Insights'}
                  </span>
                  <h2 className={styles.featuredTitle}>
                    {isEn ? (featuredInsight.title ?? featuredInsight.titleId) : (featuredInsight.titleId ?? featuredInsight.title)}
                  </h2>
                  {(isEn ? (featuredInsight.excerptEn ?? featuredInsight.excerpt) : (featuredInsight.excerpt ?? featuredInsight.excerptEn)) && (
                    <p className={styles.featuredExcerpt}>
                      {isEn ? (featuredInsight.excerptEn ?? featuredInsight.excerpt) : (featuredInsight.excerpt ?? featuredInsight.excerptEn)}
                    </p>
                  )}
                </div>
                <div className={styles.featuredBottom}>
                  {featuredInsight.publishedAt && (
                    <span className={styles.featuredDate}>
                      {formatDate(featuredInsight.publishedAt, isEn)}
                    </span>
                  )}
                  <Link
                    href={`/insights/${featuredInsight.slug.current}`}
                    className={styles.featuredLink}
                  >
                    {isEn ? 'Read article →' : 'Baca artikel →'}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 3. ARTICLE GRID ───────────────────────────────────────── */}
        {gridInsights.length > 0 && (
          <section className={styles.gridSection}>
            <div className={styles.grid}>
              {gridInsights.map((insight) => (
                <Link
                  key={insight._id}
                  href={`/insights/${insight.slug.current}`}
                  className={styles.card}
                >
                  <div className={styles.cardImageWrap}>
                    {insight.coverImage?.asset?.url && (
                      <img
                        src={insight.coverImage.asset.url}
                        alt={isEn ? (insight.title ?? insight.titleId) : (insight.titleId ?? insight.title)}
                        className={styles.cardImg}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'saturate(0.85)',
                        }}
                      />
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    {insight.category && (
                      <span className={styles.cardCategory}>{insight.category}</span>
                    )}
                    <p className={styles.cardTitle}>
                      {isEn ? (insight.title ?? insight.titleId) : (insight.titleId ?? insight.title)}
                    </p>
                    {(isEn ? (insight.excerptEn ?? insight.excerpt) : (insight.excerpt ?? insight.excerptEn)) && (
                      <p className={styles.cardExcerpt}>
                        {isEn ? (insight.excerptEn ?? insight.excerpt) : (insight.excerpt ?? insight.excerptEn)}
                      </p>
                    )}
                    {insight.publishedAt && (
                      <span className={styles.cardDate}>
                        {formatDate(insight.publishedAt, isEn)}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── 4. EMPTY STATE ────────────────────────────────────────── */}
        {insights.length === 0 && (
          <section className={styles.emptyState}>
            <p className={styles.emptyText}>{isEn ? 'Articles coming soon.' : 'Artikel segera hadir.'}</p>
          </section>
        )}

        {/* ── 5. CTA ────────────────────────────────────────────────── */}
        <CTASection lang={lang} />

      </main>
      <Footer />
    </>
  )
}
