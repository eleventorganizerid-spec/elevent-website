import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { articleBySlugQuery, relatedInsightsQuery, insightsQuery } from '@/lib/queries'
import type { Insight } from '@/lib/types'
import CTASection from '@/components/home/CTASection'
import styles from './article.module.css'

interface Props {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ lang?: string }>
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(dateString: string, isEn: boolean = false): string {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString(isEn ? 'en-US' : 'id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function estimateReadTime(body: any[]): number {
  if (!body) return 3
  const text = body
    .map((block: any) =>
      block.children?.map((c: any) => c.text).join(' ') || ''
    )
    .join(' ')
  const words = text.split(' ').filter(Boolean).length
  return Math.max(3, Math.ceil(words / 200))
}

// ── Static params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const insights = await client.fetch<{ slug: { current: string } }[]>(
      insightsQuery
    )
    return (insights ?? []).map((i) => ({ slug: i.slug.current }))
  } catch {
    return []
  }
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params
  const { lang } = await searchParams
  const isEn = lang === 'en'
  try {
    const article = await client.fetch<Insight | null>(articleBySlugQuery, { slug })
    if (!article) return {}
    const displayTitle = isEn ? (article.title ?? article.titleId) : (article.titleId ?? article.title)
    const displayExcerpt = isEn ? (article.excerptEn ?? article.excerpt) : (article.excerpt ?? article.excerptEn)
    return {
      title: `${displayTitle} — Elevent`,
      description: displayExcerpt,
      alternates: {
        canonical: `https://elevent.id/insights/${slug}`,
      },
      openGraph: {
        title: `${displayTitle} — Elevent`,
        description: displayExcerpt,
        url: `https://elevent.id/insights/${slug}`,
        images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
      },
    }
  } catch {
    return {}
  }
}

// ── Body renderer ─────────────────────────────────────────────────────────────

function renderBody(body: any[]) {
  return body.map((block: any, i: number) => {
    const text = (block.children ?? [])
      .map((c: any) => c.text ?? '')
      .join('')

    if (block.style === 'h2') {
      return (
        <h2 key={i} className={styles.bodyH2}>
          {text}
        </h2>
      )
    }
    if (block.style === 'h3') {
      return (
        <h3 key={i} className={styles.bodyH3}>
          {text}
        </h3>
      )
    }
    if (!text.trim()) return null
    return (
      <p key={i} className={styles.bodyP}>
        {text}
      </p>
    )
  })
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ArticlePage({ params, searchParams }: Props) {
  const { slug } = await params
  const { lang } = await searchParams
  const isEn = lang === 'en'

  let article: Insight | null = null
  let related: Insight[] = []

  try {
    ;[article, related] = await Promise.all([
      client.fetch<Insight | null>(articleBySlugQuery, { slug }),
      client.fetch<Insight[]>(relatedInsightsQuery, { slug }),
    ])
  } catch {
    // Sanity unavailable
  }

  if (!article) notFound()

  // Locale-aware field resolution
  const displayTitle   = isEn ? (article.title    ?? article.titleId)   : (article.titleId   ?? article.title)
  const displayExcerpt = isEn ? (article.excerptEn ?? article.excerpt)  : (article.excerpt   ?? article.excerptEn)
  const displayBody    = isEn ? (article.bodyEn?.length ? article.bodyEn : article.body) : (article.body?.length ? article.body : article.bodyEn)

  const readTime = estimateReadTime(displayBody ?? [])
  const langParam = isEn ? '?lang=en' : ''

  return (
    <>
      <Navigation forceDark={true} />
      <main className={styles.main}>

        {/* ── 1. ARTICLE HEADER ─────────────────────────────────────── */}
        <section className={styles.header}>
          <Link href={`/insights${langParam}`} className={styles.backLink}>
            {isEn ? '← All Articles' : '← Semua Artikel'}
          </Link>

          <div className={styles.metaRow}>
            {article.category && (
              <span className={styles.category}>{article.category}</span>
            )}
            {article.category && (
              <span className={styles.metaSep}>·</span>
            )}
            <span className={styles.readTime}>{isEn ? `${readTime} min read` : `${readTime} menit baca`}</span>
          </div>

          <h1 className={styles.headline}>
            {displayTitle}
          </h1>

          {displayExcerpt && (
            <p className={styles.excerpt}>{displayExcerpt}</p>
          )}

          <div className={styles.byline}>
            {article.publishedAt && (
              <span className={styles.bylineDate}>
                {formatDate(article.publishedAt, isEn)}
              </span>
            )}
            <div className={styles.bylineDivider} />
            <span className={styles.bylineAuthor}>Elevent Editorial</span>
          </div>
        </section>

        {/* ── 2. COVER IMAGE ────────────────────────────────────────── */}
        <div className={styles.coverWrap}>
          {article.coverImage?.asset?.url ? (
            <img
              src={article.coverImage.asset.url}
              alt={displayTitle}
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
            <div style={{ position: 'absolute', inset: 0, background: 'var(--ink)' }} />
          )}
        </div>

        {/* ── 3. ARTICLE BODY ───────────────────────────────────────── */}
        {displayBody && displayBody.length > 0 && (
          <section className={styles.bodySection}>
            <div className={styles.bodyInner}>
              {renderBody(displayBody)}
            </div>
          </section>
        )}

        {/* ── 4. ARTICLE FOOTER ─────────────────────────────────────── */}
        <div className={styles.articleFooter}>
          <div className={styles.articleFooterInner}>
            <span className={styles.shareLabel}>{isEn ? 'Share this article' : 'Bagikan artikel ini'}</span>
            <Link href={`/insights${langParam}`} className={styles.backLinkFooter}>
              {isEn ? '← Back to all articles' : '← Kembali ke semua artikel'}
            </Link>
          </div>
        </div>

        {/* ── 5. RELATED ARTICLES ───────────────────────────────────── */}
        {related.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.relatedHeader}>
              <span className={styles.relatedLabel}>{isEn ? 'MORE ARTICLES' : 'ARTIKEL LAINNYA'}</span>
              <Link href={`/insights${langParam}`} className={styles.relatedAll}>
                {isEn ? 'View all →' : 'Lihat semua →'}
              </Link>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <Link
                  key={item._id}
                  href={`/insights/${item.slug.current}${langParam}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedCardImage}>
                    {item.coverImage?.asset?.url && (
                      <img
                        src={item.coverImage.asset.url}
                        alt={isEn ? (item.title ?? item.titleId) : (item.titleId ?? item.title)}
                        className={styles.relatedCardImg}
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
                  <div className={styles.relatedCardBody}>
                    {item.category && (
                      <span className={styles.relatedCardCategory}>
                        {item.category}
                      </span>
                    )}
                    <p className={styles.relatedCardTitle}>
                      {isEn ? (item.title ?? item.titleId) : (item.titleId ?? item.title)}
                    </p>
                    {item.publishedAt && (
                      <span className={styles.relatedCardDate}>
                        {formatDate(item.publishedAt, isEn)}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── 6. BOTTOM CTA ─────────────────────────────────────────── */}
        <CTASection lang={lang} />

      </main>
      <Footer />
    </>
  )
}
