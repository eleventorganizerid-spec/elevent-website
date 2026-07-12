import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { caseStudyBySlugQuery, relatedCaseStudiesQuery } from '@/lib/queries'
import type { SanityCaseStudy } from '@/lib/types'
import CTASection from '@/components/home/CTASection'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { baseOpenGraph } from '@/lib/seo'
import styles from './page.module.css'

interface Props {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ lang?: string }>
}

const PLACEHOLDER_HERO = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80'
const PLACEHOLDER_CARD = 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80'

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params
  const { lang } = await searchParams
  const isEn = lang === 'en'
  let cs: SanityCaseStudy | null = null
  try {
    cs = await client.fetch<SanityCaseStudy | null>(caseStudyBySlugQuery, { slug })
  } catch {
    // Sanity unavailable
  }
  if (!cs) return { title: 'Case Study — Elevent' }
  const description = isEn
    ? [cs.format, cs.client ? `for ${cs.client}` : null, cs.year].filter(Boolean).join(', ')
    : [cs.format, cs.client ? `untuk ${cs.client}` : null, cs.year].filter(Boolean).join(' — ')
  return {
    title: `${cs.title} — Elevent`,
    description,
    alternates: {
      canonical: `https://elevent.id/work/${slug}`,
      languages: {
        'x-default': `https://elevent.id/work/${slug}`,
        'id': `https://elevent.id/work/${slug}`,
        'en': `https://elevent.id/work/${slug}?lang=en`,
      },
    },
    openGraph: {
      ...baseOpenGraph,
      title: `${cs.title} — Elevent`,
      description,
      url: `https://elevent.id/work/${slug}`,
      images: [{ url: '/assets/og-image.png', width: 1200, height: 630, alt: `${cs.title} — Elevent Case Study` }],
    },
  }
}

export default async function CaseStudyPage({ params, searchParams }: Props) {
  const { slug } = await params
  const { lang } = await searchParams
  const isEn = lang === 'en'

  let caseStudy: SanityCaseStudy | null = null
  let related: SanityCaseStudy[] = []

  try {
    caseStudy = await client.fetch<SanityCaseStudy | null>(caseStudyBySlugQuery, { slug })
    related = await client.fetch<SanityCaseStudy[]>(relatedCaseStudiesQuery, {
      slug,
      eventType: caseStudy?.eventType?.slug?.current ?? null,
    })
  } catch {
    // Sanity unavailable
  }

  if (!caseStudy) notFound()

  const heroSrc = caseStudy.heroImage?.asset?.url ?? PLACEHOLDER_HERO

  // Locale-aware field resolution
  const displayTitle    = caseStudy.title
  const displayAudience = isEn ? (caseStudy.audience ?? caseStudy.audienceId) : (caseStudy.audienceId ?? caseStudy.audience)
  const displayOutcome  = isEn ? (caseStudy.outcome  ?? caseStudy.outcomeId)  : (caseStudy.outcomeId  ?? caseStudy.outcome)
  const displayQuote     = isEn ? (caseStudy.clientQuote ?? caseStudy.clientQuoteId) : (caseStudy.clientQuoteId ?? caseStudy.clientQuote)
  const displayExecution = isEn
    ? (caseStudy.executionEn?.length ? caseStudy.executionEn : caseStudy.execution)
    : (caseStudy.execution?.length   ? caseStudy.execution   : caseStudy.executionEn)

  // Split "Role, Company" attribution string
  const attrParts = caseStudy.clientQuoteAttribution
    ? caseStudy.clientQuoteAttribution.split(',')
    : []
  const attrRole = attrParts[0]?.trim() ?? ''
  const attrCompany = attrParts.slice(1).join(',').trim()

  // VideoObject structured data — built only when a video exists; empty fields are omitted
  const videoUploadDate =
    caseStudy.videoUploadDate ?? (caseStudy.year ? `${caseStudy.year}-01-01` : undefined)
  const videoSchema: Record<string, unknown> | null = caseStudy.youtubeId
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: caseStudy.videoTitle || `${displayTitle} — Highlight`,
        thumbnailUrl: `https://img.youtube.com/vi/${caseStudy.youtubeId}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${caseStudy.youtubeId}`,
        url: `https://www.youtube.com/watch?v=${caseStudy.youtubeId}`,
        ...(caseStudy.videoDescription ? { description: caseStudy.videoDescription } : {}),
        ...(videoUploadDate ? { uploadDate: videoUploadDate } : {}),
        ...(caseStudy.videoDuration ? { duration: caseStudy.videoDuration } : {}),
      }
    : null

  return (
    <>
      <Navigation forceDark={true} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://elevent.id' },
        { name: 'Our Work', url: 'https://elevent.id/work' },
        { name: displayTitle, url: `https://elevent.id/work/${slug}` },
      ]} />

      <main className={styles.main}>

        {/* ── 1. HERO ───────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <img
            src={heroSrc}
            alt={caseStudy.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'saturate(0.85)',
            }}
          />
          <div className={styles.heroOverlay} />

          {/* ← ALL WORK — top of hero */}
          <div className={styles.heroTop}>
            <Link href="/work" className={styles.heroBack}>{isEn ? '← ALL WORK' : '← SEMUA KARYA'}</Link>
          </div>

          {/* Client · Format · Year — bottom of hero */}
          <div className={styles.heroBottom}>
            <div className={styles.heroMeta}>
              {caseStudy.client && <span>{caseStudy.client}</span>}
              {caseStudy.format && (
                <>
                  <span className={styles.heroMetaSep}>·</span>
                  <span>{caseStudy.format}</span>
                </>
              )}
              {caseStudy.year && (
                <>
                  <span className={styles.heroMetaSep}>·</span>
                  <span>{caseStudy.year}</span>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── 2. HEADLINE + METADATA + BRIEF ───────────────────────── */}
        <section className={styles.introSection}>
          <div className={styles.inner}>
            <p className={styles.sectionLabel}>{isEn ? 'CASE STUDY' : 'STUDI KASUS'}</p>
            <h1 className={styles.caseTitle}>{displayTitle}</h1>

            <div className={styles.introGrid}>
              {/* Metadata table */}
              <div className={styles.dataTable}>
                {caseStudy.client && (
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>{isEn ? 'CLIENT' : 'KLIEN'}</span>
                    <span className={styles.dataVal}>{caseStudy.client}</span>
                  </div>
                )}
                {caseStudy.format && (
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>FORMAT</span>
                    <span className={styles.dataVal}>{caseStudy.format}</span>
                  </div>
                )}
                {displayAudience && (
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>{isEn ? 'AUDIENCE' : 'AUDIENS'}</span>
                    <span className={styles.dataVal}>{displayAudience}</span>
                  </div>
                )}
                {caseStudy.cities && (
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>{isEn ? 'CITIES' : 'KOTA'}</span>
                    <span className={styles.dataVal}>{caseStudy.cities}</span>
                  </div>
                )}
                {/* OUTCOME: description text only — outcomeNumber belongs in Section 04 */}
                {displayOutcome && (
                  <div className={styles.dataRow}>
                    <span className={styles.dataKey}>{isEn ? 'OUTCOME' : 'HASIL'}</span>
                    <span className={styles.dataVal}>{displayOutcome}</span>
                  </div>
                )}
              </div>

              {/* Brief / intro */}
              {(caseStudy.brief || caseStudy.briefEn) && (
                <blockquote className={styles.briefText}>
                  {isEn ? (caseStudy.briefEn ?? caseStudy.brief) : (caseStudy.brief ?? caseStudy.briefEn)}
                </blockquote>
              )}
            </div>
          </div>
        </section>

        {/* ── 3. THE CHALLENGE ─────────────────────────────────────── */}
        {(caseStudy.challenge || caseStudy.challengeEn) && (
          <section className={styles.narrativeSection}>
            <div className={styles.inner}>
              <div className={styles.rule} />
              <p className={styles.sectionLabel}>{isEn ? '01 — THE CHALLENGE' : '01 — TANTANGAN'}</p>
              <h2 className={styles.narrativeHeadline}>The brief.</h2>
              <p className={styles.narrativeBody}>
                {isEn ? (caseStudy.challengeEn ?? caseStudy.challenge) : (caseStudy.challenge ?? caseStudy.challengeEn)}
              </p>
            </div>
          </section>
        )}

        {/* ── 4. OUR APPROACH ──────────────────────────────────────── */}
        {(caseStudy.approach || caseStudy.approachEn) && (
          <section className={styles.narrativeSection}>
            <div className={styles.inner}>
              <div className={styles.rule} />
              <p className={styles.sectionLabel}>{isEn ? '02 — THE APPROACH' : '02 — PENDEKATAN'}</p>
              <h2 className={styles.narrativeHeadline}>How we thought about it.</h2>
              <p className={styles.narrativeBody}>
                {isEn ? (caseStudy.approachEn ?? caseStudy.approach) : (caseStudy.approach ?? caseStudy.approachEn)}
              </p>
            </div>
          </section>
        )}

        {/* ── 5. THE EXECUTION ─────────────────────────────────────── */}
        {displayExecution && displayExecution.length > 0 && (
          <section className={styles.executionSection}>
            <div className={styles.inner}>
              <p className={`${styles.sectionLabel} ${styles.sectionLabelLight}`}>
                {isEn ? '03 — THE EXECUTION' : '03 — EKSEKUSI'}
              </p>
              <h2 className={styles.narrativeHeadlineDark}>What we built.</h2>
              <div className={styles.executionList}>
                {displayExecution.map((item, i) => (
                  <div key={i} className={styles.executionItem}>
                    <div className={styles.executionRule} />
                    <p className={styles.executionText}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 6. THE RESULT ────────────────────────────────────────── */}
        {(caseStudy.result || caseStudy.resultEn) && (
          <section className={styles.resultSection}>
            <div className={styles.inner}>
              <div className={styles.rule} />
              <p className={styles.sectionLabel}>{isEn ? '04 — THE RESULT' : '04 — HASIL'}</p>
              <h2 className={styles.narrativeHeadline}>The result.</h2>
              {/* outcomeNumber: large sienna Instrument Serif italic */}
              {caseStudy.outcomeNumber && (
                <p className={styles.resultNumber}>{caseStudy.outcomeNumber}</p>
              )}
              <p className={styles.narrativeBody}>
                {isEn ? (caseStudy.resultEn ?? caseStudy.result) : (caseStudy.result ?? caseStudy.resultEn)}
              </p>
            </div>
          </section>
        )}

        {/* ── 6b. VIDEO HIGHLIGHT (optional, per case study) ────────── */}
        {caseStudy.youtubeId && (
          <section className={styles.videoSection}>
            <div className={styles.inner}>
              <div className={styles.rule} />
              <p className={styles.sectionLabel}>{isEn ? 'HIGHLIGHT' : 'HIGHLIGHT'}</p>
              <div className={styles.videoWrap}>
                <iframe
                  className={styles.videoFrame}
                  src={`https://www.youtube-nocookie.com/embed/${caseStudy.youtubeId}`}
                  title={`${displayTitle} highlight`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {videoSchema && (
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
                />
              )}
            </div>
          </section>
        )}

        {/* ── 7. CLIENT QUOTE ──────────────────────────────────────── */}
        {displayQuote && (
          <section className={styles.quoteSection}>
            <div className={styles.inner}>
              <div className={styles.quoteInner}>
                {/* Oversized sienna quote mark */}
                <p className={styles.quoteMark} aria-hidden="true">&ldquo;</p>
                <div className={styles.quoteContent}>
                  <blockquote className={styles.quoteText}>
                    {displayQuote}
                  </blockquote>
                  {(caseStudy.clientQuoteName || caseStudy.clientQuoteAttribution) && (
                    <div className={styles.quoteAttribution}>
                      <div className={styles.quoteRule} />
                      {/* Name — Instrument Serif upright */}
                      {caseStudy.clientQuoteName && (
                        <p className={styles.quoteAttribName}>
                          {caseStudy.clientQuoteName}
                        </p>
                      )}
                      {/* Role — mono, stone */}
                      {attrRole && (
                        <p className={styles.quoteAttribRole}>{attrRole}</p>
                      )}
                      {/* Company — serif italic */}
                      {attrCompany && (
                        <p className={styles.quoteAttribCompany}>{attrCompany}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 8. MORE WORK ─────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className={styles.moreWorkSection}>
            <div className={styles.inner}>
              <p className={styles.sectionLabel}>{isEn ? 'MORE WORK' : 'CASE STUDY LAINNYA'}</p>
              <div className={styles.moreWorkGrid}>
                {related.map((cs) => {
                  const cardSrc = cs.heroImage?.asset?.url ?? PLACEHOLDER_CARD
                  return (
                    <Link
                      key={cs._id}
                      href={`/work/${cs.slug.current}`}
                      className={styles.moreCard}
                    >
                      <div className={styles.moreCardImage}>
                        <img
                          src={cardSrc}
                          alt={cs.title}
                          className={styles.moreCardImg}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'saturate(0.85)',
                          }}
                        />
                        <div className={styles.moreCardOverlay} />
                      </div>
                      <div className={styles.moreCardBody}>
                        <div className={styles.moreCardMeta}>
                          {cs.format && <span>{cs.format}</span>}
                          {cs.year && (
                            <>
                              <span className={styles.moreCardSep}>·</span>
                              <span>{cs.year}</span>
                            </>
                          )}
                        </div>
                        <p className={styles.moreCardTitle}>{isEn ? cs.title : (cs.titleId ?? cs.title)}</p>
                        {cs.client && (
                          <p className={styles.moreCardClient}>{cs.client}</p>
                        )}
                        {/* outcomeNumber: hidden, revealed on card hover */}
                        {cs.outcomeNumber && (
                          <p className={styles.moreCardOutcome}>{cs.outcomeNumber}</p>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
              <div className={styles.moreWorkFooter}>
                <Link href="/work" className={styles.allWorkLink}>
                  {isEn ? 'View All Work →' : 'Lihat Semua Case Study →'}
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── 9. CTA ───────────────────────────────────────────────── */}
        <CTASection lang={lang} />

      </main>
      <Footer />
    </>
  )
}
