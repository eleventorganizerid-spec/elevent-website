import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnimateIn from '@/components/ui/AnimateIn'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import CTASection from '@/components/home/CTASection'
import { cities, type CityKey, type CityData } from '@/lib/cities'
import styles from './CityLanding.module.css'

function CityLocalBusinessJsonLd({ data }: { data: CityData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Elevent Corporate Event Organizer ${data.cityName}`,
    url: `https://elevent.id/services/${data.slug}`,
    image: 'https://elevent.id/assets/og-image.png',
    telephone: '+62-851-9933-3039',
    email: 'brief@elevent.id',
    areaServed: { '@type': 'City', name: data.cityName },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'AD Premier Office Park, 17th Floor, Suite 04B, Jl. TB Simatupang No.5',
      addressLocality: 'Jakarta Selatan',
      addressRegion: 'DKI Jakarta',
      postalCode: '12550',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.geo.lat,
      longitude: data.geo.lng,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function CityLanding({ city, lang }: { city: CityKey; lang?: string }) {
  const data = cities[city]
  const isEn = lang === 'en'
  const langParam = isEn ? '?lang=en' : ''

  return (
    <>
      <CityLocalBusinessJsonLd data={data} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://elevent.id' },
        { name: 'Services', url: 'https://elevent.id/services' },
        { name: data.breadcrumbTitle, url: `https://elevent.id/services/${data.slug}` },
      ]} />
      <Navigation forceDark={true} />

      <main className={styles.main}>

        {/* ── 1. HERO ──────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <AnimateIn delay={0} className={styles.heroLabel}>{data.hero.labelEn}</AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className={styles.heroTitle}>{data.hero.headlineEn}</h1>
            </AnimateIn>
            <AnimateIn delay={0.2} className={styles.heroSub}>{isEn ? data.hero.subEn : data.hero.subId}</AnimateIn>
          </div>
        </section>

        {/* ── 2. WHY [CITY] ────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.sectionLabel}>WHY {data.cityName.toUpperCase()}</p>
            <h2 className={styles.heading}>{data.why.headingEn}</h2>
            <p className={styles.body}>{isEn ? data.why.bodyEn : data.why.bodyId}</p>
          </div>
        </section>

        {/* ── 3. OUR SERVICES ──────────────────────────────────────── */}
        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.inner}>
            <p className={styles.sectionLabel}>OUR SERVICES</p>
            <h2 className={styles.heading}>{data.services.headingEn}</h2>
            <p className={`${styles.body} ${styles.servicesIntro}`}>{isEn ? data.services.introEn : data.services.introId}</p>
            <div className={styles.servicesList}>
              {data.services.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}${langParam}`}
                  className={styles.serviceLink}
                >
                  <span>{item.label}</span>
                  <span className={styles.serviceArrow}>EXPLORE →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. VENUE REFERENCES ──────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.sectionLabel}>VENUE REFERENCES</p>
            <h2 className={styles.heading}>{data.venues.headingEn}</h2>
            <p className={`${styles.body} ${styles.servicesIntro}`}>{isEn ? data.venues.introEn : data.venues.introId}</p>
            <ul className={styles.venueList}>
              {data.venues.list.map((v) => (
                <li key={v} className={styles.venueItem}>{v}</li>
              ))}
            </ul>
            <p className={styles.venueDisclaimer}>{isEn ? data.venues.disclaimerEn : data.venues.disclaimerId}</p>
          </div>
        </section>

        {/* ── 5. CTA ───────────────────────────────────────────────── */}
        <CTASection lang={lang} />

      </main>
      <Footer />
    </>
  )
}
