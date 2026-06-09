import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import AnimateIn from '@/components/ui/AnimateIn'
import Footer from '@/components/layout/Footer'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { baseOpenGraph } from '@/lib/seo'
import { client } from '@/sanity/client'
import { servicesQuery } from '@/lib/queries'
import type { SanityService } from '@/lib/types'
import ServicesGrid from '@/components/services/ServicesGrid'
import CTASection from '@/components/home/CTASection'
import styles from './services.module.css'

export const metadata: Metadata = {
  title: 'Services — Elevent',
  description: 'Nine corporate event formats for enterprise companies in Indonesia. Gala dinners, conferences, team building, roadshows, incentive trips. One standard across all.',
  alternates: {
    canonical: 'https://elevent.id/services',
    languages: {
      'x-default': 'https://elevent.id/services',
      'id': 'https://elevent.id/services',
      'en': 'https://elevent.id/services?lang=en',
    },
  },
  openGraph: {
    ...baseOpenGraph,
    title: 'Services — Elevent',
    description: 'Nine corporate event formats for enterprise companies in Indonesia.',
    url: 'https://elevent.id/services',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630, alt: 'Elevent Services — Corporate Event Formats for Enterprise Companies' }],
  },
}

/* ─── cluster config (retained for reference) ───────────────────────── */
// prettier-ignore
const CLUSTERS = [
  { id: 'gatherings',  label: '01 — GATHERINGS & CELEBRATIONS', headline: 'Ruangan yang diingat. Bukan sekadar dihadiri.',                                                                             slugs: ['gala-dinner-award-night', 'corporate-event', 'corporate-gathering', 'corporate-anniversary'], layout: 'hero-left'  },
  { id: 'conference',  label: '02 — CONFERENCE & KNOWLEDGE',    headline: 'Di sinilah ide berhenti jadi slide dan mulai jadi arah.',                                                                   slugs: ['conference-seminar', 'corporate-meeting', 'hybrid-virtual-event'],                           layout: 'split-50'   },
  { id: 'activation',  label: '03 — ACTIVATION & PRESENCE',     headline: 'Bukan tentang seberapa besar booth-nya. Tapi apa yang terjadi setelah orang meninggalkannya.',                              slugs: ['product-launching', 'brand-activation', 'exhibition-pameran', 'roadshow'],                   layout: 'hero-left'  },
  { id: 'team',        label: '04 — TEAM & CULTURE',            headline: 'Yang tidak bisa dibangun lewat rapat. Kami yang kerjakan.',                                                                 slugs: ['team-building', 'corporate-outing'],                                                         layout: 'wide-right' },
  { id: 'hospitality', label: '05 — HOSPITALITY & TRAVEL',      headline: 'Penghargaan yang terasa seperti penghargaan — bukan sekadar perjalanan dinas dengan pemandangan lebih bagus.',             slugs: ['incentive-trip', 'mice-hospitality'],                                                         layout: 'split-50'   },
] as const
void CLUSTERS // retained for reference — rendering handled by ServicesGrid

/* ─── stats ─────────────────────────────────────────────────────────── */
function getStats(isEn: boolean) {
  return [
    { num: '16', label: isEn ? 'Event formats we master' : 'Format yang kami kuasai' },
    { num: '3',  label: isEn ? 'Primary cities' : 'Kota utama operasi' },
    { num: '1',  label: isEn ? 'Standard across all formats' : 'Standar di semua format' },
  ]
}

interface Props {
  searchParams: Promise<{ lang?: string }>
}

export default async function ServicesPage({ searchParams }: Props) {
  const { lang } = await searchParams
  const isEn = lang === 'en'
  let services: SanityService[] = []
  try {
    const data = await client.fetch<SanityService[]>(servicesQuery)
    if (data?.length) services = data
  } catch {
    /* Sanity unavailable — ServicesGrid will render empty state */
  }

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://elevent.id' },
        { name: 'Services', url: 'https://elevent.id/services' },
      ]} />
      <Navigation forceDark />
      <main className={styles.main}>

        {/* ── HEADER ─────────────────────────────────────────── */}
        <section className={styles.pageHeader}>
          <AnimateIn delay={0} className={styles.pageLabel}>OUR SERVICES</AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className={styles.pageHeadline}>
              <span>Every event type.</span>
              <em>One standard.</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2} className={styles.pageSub}>
            {isEn
              ? 'From corporate conferences to brand activations. We design every format with the same intensity.'
              : 'Dari konferensi korporat hingga aktivasi brand. Kami merancang setiap format dengan intensitas yang sama.'}
          </AnimateIn>
        </section>

        {/* ── FILTERABLE GRID (client component) ─────────────── */}
        <ServicesGrid services={services} lang={lang} />

        {/* ── STANDALONE ──────────────────────────────────────── */}
        <section className={styles.standalone}>
          <div className={styles.standaloneInner}>

            <div className={styles.standaloneLeft}>
              <p className={styles.standaloneLabel}>END-TO-END PRODUCTION</p>
              <h2 className={styles.standaloneHeadline}>
                {isEn ? 'Not sure which format fits?' : 'Tidak yakin format mana yang tepat?'}
              </h2>
              <p className={styles.standaloneBody}>
                {isEn
                  ? 'Start here. We help you define the format, scale, and approach that fits your business objective. Before a single budget line is written.'
                  : 'Mulai dari sini. Kami bantu Anda mendefinisikan format, skala, dan pendekatan yang paling sesuai dengan tujuan bisnis Anda. Sebelum satu rupiah pun dianggarkan.'}
              </p>
              <Link href="/services/corporate-event-organizer" className={styles.standaloneLink}>
                {isEn ? 'View Corporate Event Organizer →' : 'Lihat Corporate Event Organizer →'}
              </Link>
            </div>

            <div className={styles.standaloneRight}>
              {getStats(isEn).map((stat, i) => (
                <div
                  key={stat.num}
                  className={`${styles.statItem} ${i > 0 ? styles.statBorder : ''}`}
                >
                  <p className={styles.statNum}>{stat.num}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <CTASection lang={lang} />

      </main>
      <Footer />
    </>
  )
}
