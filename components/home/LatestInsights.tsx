import Link from 'next/link'
import type { Insight } from '@/lib/types'
import styles from './LatestInsights.module.css'

interface LatestInsightsProps {
  insights: Insight[]
  lang?: string
}

function formatDate(dateString: string, isEn: boolean): string {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString(isEn ? 'en-US' : 'id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function LatestInsights({ insights, lang }: LatestInsightsProps) {
  if (!insights || insights.length === 0) return null

  const isEn = lang === 'en'
  const langParam = isEn ? '?lang=en' : ''

  return (
    <section className={styles.section}>

      {/* ── Header — label left, headline right ── */}
      <div className={styles.header}>
        <span className={styles.label}>08 — INSIGHTS</span>
        <h2 className={styles.headline}>From the director&apos;s <em>desk.</em></h2>
      </div>

      {/* ── Grid ────────────────────────────────── */}
      <div className={styles.grid}>
        {insights.map((insight) => (
          <Link
            key={insight._id}
            href={`/insights/${insight.slug.current}${langParam}`}
            className={styles.card}
          >
            {/* Image */}
            <div className={styles.cardImage}>
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

            {/* Body */}
            <div className={styles.cardBody}>
              <div className={styles.cardTopRow}>
                {insight.category && (
                  <span className={styles.cardCategory}>{insight.category}</span>
                )}
                {insight.publishedAt && (
                  <span className={styles.cardDate}>
                    {formatDate(insight.publishedAt, isEn)}
                  </span>
                )}
              </div>
              <p className={styles.cardTitle}>
                {isEn ? (insight.title ?? insight.titleId) : (insight.titleId ?? insight.title)}
              </p>
              {(isEn ? (insight.excerptEn ?? insight.excerpt) : (insight.excerpt ?? insight.excerptEn)) && (
                <p className={styles.cardExcerpt}>
                  {isEn ? (insight.excerptEn ?? insight.excerpt) : (insight.excerpt ?? insight.excerptEn)}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* ── View all link ────────────────────────── */}
      <div className={styles.viewAll}>
        <Link href={`/insights${langParam}`} className={styles.allLink}>
          {isEn ? 'View all articles →' : 'Lihat semua artikel →'}
        </Link>
      </div>

    </section>
  )
}
