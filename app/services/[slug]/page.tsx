import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { client } from '@/sanity/client'
import { serviceBySlugQuery } from '@/lib/queries'
import type { SanityServiceFull, SanityCaseStudy } from '@/lib/types'
import ServiceFAQ from './ServiceFAQ'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { baseOpenGraph } from '@/lib/seo'
import CTASection from '@/components/home/CTASection'
import styles from './page.module.css'

interface Props {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ lang?: string }>
}

function ServiceJsonLd({ service, slug, isEn }: {
  service: SanityServiceFull
  slug: string
  isEn: boolean
}) {
  const description = isEn
    ? (service.descriptorEn ?? service.descriptor)
    : (service.descriptor ?? service.descriptorEn)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description,
    url: `https://elevent.id/services/${slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Elevent',
      url: 'https://elevent.id',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    serviceType: 'Corporate Event Organization',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://elevent.id/services/${slug}`,
      availableLanguage: ['Indonesian', 'English'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function FaqJsonLd({ faqs, isEn }: {
  faqs: NonNullable<SanityServiceFull['faqs']>
  isEn: boolean
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: isEn ? (f.question ?? f.questionId) : (f.questionId ?? f.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: isEn ? (f.answer ?? f.answerId) : (f.answerId ?? f.answer),
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

const PLACEHOLDER_HERO = 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80'
const PLACEHOLDER_CARD = 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80'

const relatedCaseStudiesForService = `
  *[_type == "caseStudy"] | order(year desc)[0...2] {
    _id,
    title,
    slug,
    client,
    format,
    year,
    heroImage {
      asset-> {
        _id,
        url
      }
    },
  }
`

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const service = await client.fetch<SanityServiceFull | null>(serviceBySlugQuery, { slug })
    if (!service) return {}
    const description = service.descriptorEn ?? service.descriptor ?? service.tagline ?? service.taglineId
    return {
      title: `${service.title} — Elevent`,
      description,
      alternates: {
        canonical: `https://elevent.id/services/${slug}`,
        languages: {
          'x-default': `https://elevent.id/services/${slug}`,
          'id': `https://elevent.id/services/${slug}`,
          'en': `https://elevent.id/services/${slug}?lang=en`,
        },
      },
      openGraph: {
        ...baseOpenGraph,
        title: `${service.title} — Elevent`,
        description,
        url: `https://elevent.id/services/${slug}`,
        images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630, alt: `${service.title} — Elevent Corporate Event Services` }],
      },
    }
  } catch {
    return {}
  }
}

export default async function ServiceDetailPage({ params, searchParams }: Props) {
  const { slug } = await params
  const { lang } = await searchParams
  const isEn = lang === 'en'

  let service: SanityServiceFull | null = null
  let related: SanityCaseStudy[] = []

  try {
    ;[service, related] = await Promise.all([
      client.fetch<SanityServiceFull | null>(serviceBySlugQuery, { slug }),
      client.fetch<SanityCaseStudy[]>(relatedCaseStudiesForService),
    ])
  } catch {
    // Sanity unavailable
  }

  if (!service) notFound()

  const heroSrc = service.heroImage?.asset?.url ?? PLACEHOLDER_HERO

  return (
    <>
      <Navigation forceDark={true} />
      <ServiceJsonLd service={service} slug={slug} isEn={isEn} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://elevent.id' },
        { name: 'Services', url: 'https://elevent.id/services' },
        { name: service.title, url: `https://elevent.id/services/${slug}` },
      ]} />
      {service.faqs && service.faqs.length > 0 && (
        <FaqJsonLd faqs={service.faqs} isEn={isEn} />
      )}
      <main className={styles.main}>

        {/* ── 1. HERO ──────────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <img
            src={heroSrc}
            alt={service.title}
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
          <div className={styles.heroContent}>
            <div className={styles.heroNumber}>
              <Link href="/services" className={styles.heroBack}>← All Services</Link>
              {service.number && (
                <>
                  <span className={styles.heroSep}>·</span>
                  <span>{service.number}</span>
                </>
              )}
            </div>
            <h1 className={styles.heroTitle}>{service.title}</h1>
            {(isEn ? (service.tagline ?? service.taglineId) : (service.taglineId ?? service.tagline)) && (
              <p className={styles.heroTagline}>
                {isEn ? (service.tagline ?? service.taglineId) : (service.taglineId ?? service.tagline)}
              </p>
            )}
          </div>
        </section>

        {/* ── 2. THE PROBLEM ───────────────────────────────────────────── */}
        {(isEn ? (service.problem ?? service.problemId) : (service.problemId ?? service.problem)) && (
          <section className={styles.problemSection}>
            <div className={styles.inner}>
              <div className={styles.rule} />
              <p className={styles.sectionLabel}>01 — THE PROBLEM</p>
              <h2 className={styles.narrativeHeadline}>What most get wrong.</h2>
              <p className={styles.narrativeBody}>
                {isEn ? (service.problem ?? service.problemId) : (service.problemId ?? service.problem)}
              </p>
            </div>
          </section>
        )}

        {/* ── 3. OUR APPROACH ──────────────────────────────────────────── */}
        {(isEn ? (service.approach ?? service.approachId) : (service.approachId ?? service.approach)) && (
          <section className={styles.approachSection}>
            <div className={styles.inner}>
              <div className={styles.rule} />
              <p className={styles.sectionLabel}>02 — OUR APPROACH</p>
              <h2 className={styles.narrativeHeadline}>How we think about it.</h2>
              <p className={styles.narrativeBody}>
                {isEn ? (service.approach ?? service.approachId) : (service.approachId ?? service.approach)}
              </p>
            </div>
          </section>
        )}

        {/* ── 4. WHAT'S INCLUDED (dark) ─────────────────────────────────── */}
        {(() => {
          const displayIncluded = isEn
            ? (service.included?.length ? service.included : service.includedId)
            : (service.includedId?.length ? service.includedId : service.included)
          return displayIncluded && displayIncluded.length > 0 ? (
            <section className={styles.includedSection}>
              <div className={styles.inner}>
                <p className={`${styles.sectionLabel} ${styles.sectionLabelLight}`}>
                  03 — WHAT&apos;S INCLUDED
                </p>
                <h2 className={styles.includedHeadline}>What we build together.</h2>
                <div className={styles.includedList}>
                  {displayIncluded.map((item, i) => (
                    <div key={i} className={styles.includedItem}>
                      <div className={styles.includedRule} />
                      <p className={styles.includedText}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null
        })()}

        {/* ── 5. IDEAL FOR ─────────────────────────────────────────────── */}
        {(isEn ? (service.idealFor ?? service.idealForId) : (service.idealForId ?? service.idealFor)) && (
          <section className={styles.idealSection}>
            <div className={styles.inner}>
              <p className={styles.sectionLabel}>04 — IDEAL FOR</p>
              <p className={styles.idealText}>
                {isEn ? (service.idealFor ?? service.idealForId) : (service.idealForId ?? service.idealFor)}
              </p>
            </div>
          </section>
        )}

        {/* ── 6. RELATED CASE STUDIES ──────────────────────────────────── */}
        {related.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.inner}>
              <p className={styles.sectionLabel}>WORK</p>
              <div className={styles.relatedGrid}>
                {related.map((cs) => {
                  const cardSrc = cs.heroImage?.asset?.url ?? PLACEHOLDER_CARD
                  return (
                    <Link
                      key={cs._id}
                      href={`/work/${cs.slug.current}`}
                      className={styles.relatedCard}
                    >
                      <div className={styles.relatedCardImage}>
                        <img
                          src={cardSrc}
                          alt={cs.title}
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
                        <div className={styles.relatedCardOverlay} />
                      </div>
                      <div className={styles.relatedCardBody}>
                        <div className={styles.relatedCardMeta}>
                          {cs.format && <span>{cs.format}</span>}
                          {cs.year && (
                            <>
                              <span className={styles.relatedCardSep}>·</span>
                              <span>{cs.year}</span>
                            </>
                          )}
                        </div>
                        <p className={styles.relatedCardTitle}>{cs.title}</p>
                        {cs.client && (
                          <p className={styles.relatedCardClient}>{cs.client}</p>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
              <Link href="/work" className={styles.allWorkLink}>
                View All Work →
              </Link>
            </div>
          </section>
        )}

        {/* ── 7. FAQ ───────────────────────────────────────────────────── */}
        {service.faqs && service.faqs.length > 0 && (
          <section className={styles.faqSection}>
            <div className={styles.inner}>
              <p className={styles.sectionLabel}>FAQ</p>
              <ServiceFAQ faqs={service.faqs} lang={lang} />
            </div>
          </section>
        )}

        {/* ── 8. CTA ───────────────────────────────────────────────────── */}
        <CTASection lang={lang} />

      </main>
      <Footer />
    </>
  )
}
