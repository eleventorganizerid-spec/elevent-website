import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import AnimateIn from '@/components/ui/AnimateIn'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/home/CTASection'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact — Elevent',
  description: 'Get in touch with Elevent. Submit a brief, visit our Jakarta office, or reach us via WhatsApp. We respond within one working day.',
  alternates: {
    canonical: 'https://elevent.id/contact',
    languages: {
      'x-default': 'https://elevent.id/contact',
      'id': 'https://elevent.id/contact',
      'en': 'https://elevent.id/contact?lang=en',
    },
  },
  openGraph: {
    title: 'Contact — Elevent',
    description: 'Submit a brief or get in touch with Elevent. We respond within one working day.',
    url: 'https://elevent.id/contact',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams
  const isEn = lang === 'en'

  return (
    <>
      <Navigation forceDark />
      <main className={styles.main}>

        {/* ── 1. HEADER ─────────────────────────────────────────────── */}
        <section className={styles.header}>
          <AnimateIn delay={0} className={styles.label}>CONTACT</AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className={styles.headline}>Let&apos;s talk.</h1>
          </AnimateIn>
          <AnimateIn delay={0.2} className={styles.subtext}>
            {isEn
              ? 'Contact us directly or visit our office in Jakarta. For event proposals, use the Get a Proposal form so we can respond more quickly and accurately.'
              : 'Hubungi kami langsung atau kunjungi kantor kami di Jakarta. Untuk proposal event, gunakan form Get a Proposal agar kami bisa merespons dengan lebih cepat dan tepat.'}
          </AnimateIn>
        </section>

        {/* ── 2. CONTACT INFO ───────────────────────────────────────── */}
        <section className={styles.infoSection}>
          <div className={styles.infoGrid}>

            {/* Column 1 — Office */}
            <div className={styles.infoCol}>
              <span className={styles.colLabel}>{isEn ? 'MAIN OFFICE' : 'KANTOR UTAMA'}</span>
              <address className={styles.address}>
                <span>AD Premier Office Park</span>
                <span>17th Floor, Suite 04B</span>
                <span>Jl. TB Simatupang No.5</span>
                <span>Ragunan, Pasar Minggu</span>
                <span>Jakarta Selatan 12550</span>
                <span>Indonesia</span>
              </address>
              <div className={styles.colRule} />
              <a
                href="https://maps.google.com/?q=AD+Premier+Office+Park+Jl+TB+Simatupang+Jakarta+Selatan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapsLink}
              >
                {isEn ? 'View on Google Maps →' : 'Lihat di Google Maps →'}
              </a>
            </div>

            {/* Column 2 — Direct contact */}
            <div className={styles.infoCol}>
              <span className={styles.colLabel}>{isEn ? 'CONTACT US' : 'HUBUNGI KAMI'}</span>

              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>WHATSAPP</span>
                <a
                  href="https://wa.me/6285199333039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactValue}
                >
                  +62 851 9933 3039
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>EMAIL</span>
                <a
                  href="mailto:brief@elevent.id"
                  className={styles.contactValue}
                >
                  brief@elevent.id
                </a>
              </div>
            </div>

            {/* Column 3 — Hours */}
            <div className={styles.infoCol}>
              <span className={styles.colLabel}>{isEn ? 'OFFICE HOURS' : 'JAM OPERASIONAL'}</span>

              <div className={styles.hoursBlock}>
                <p className={styles.hoursDay}>{isEn ? 'Monday — Friday' : 'Senin — Jumat'}</p>
                <p className={styles.hoursTime}>09.00 — 18.00 WIB</p>
              </div>

              <div className={styles.hoursBlock}>
                <p className={styles.hoursDay}>{isEn ? 'Saturday' : 'Sabtu'}</p>
                <p className={styles.hoursTime}>09.00 — 14.00 WIB</p>
              </div>

              <div className={styles.colRule} />

              <p className={styles.hoursNote}>
                {isEn
                  ? 'For urgent matters, WhatsApp is the fastest way to reach us.'
                  : 'Untuk urusan mendesak, WhatsApp adalah cara tercepat menghubungi kami.'}
              </p>
            </div>

          </div>
        </section>

        {/* ── 3. MAP ────────────────────────────────────────────────── */}
        <div className={styles.mapSection}>
          <iframe
            src="https://maps.google.com/maps?q=AD+Premier+Office+Park,+Jl.+TB+Simatupang+No.5,+Pasar+Minggu,+Jakarta+Selatan+12550&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="480"
            style={{ border: 0, display: 'block', filter: 'contrast(1.1) saturate(0.6)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AD Premier Office Park, Jakarta Selatan"
          />
        </div>

        {/* ── 4. CITIES ─────────────────────────────────────────────── */}
        <section className={styles.citiesSection}>
          <span className={styles.citiesLabel}>{isEn ? 'SERVICE AREAS' : 'AREA OPERASIONAL'}</span>
          <div className={styles.citiesGrid}>

            <div className={styles.cityBlock}>
              <span className={styles.cityTag}>PRIMARY MARKET · HQ OPERATIONS</span>
              <p className={styles.cityName}>Jakarta</p>
              <p className={styles.cityDesc}>
                {isEn
                  ? 'Our primary market — we know every enterprise venue and vendor in this city.'
                  : 'Pasar utama kami — kami mengenal setiap venue dan vendor enterprise di kota ini.'}
              </p>
            </div>

            <div className={styles.cityBlock}>
              <span className={styles.cityTag}>INTERNATIONAL MICE &amp; INCENTIVE HUB</span>
              <p className={styles.cityName}>Bali</p>
              <p className={styles.cityDesc}>
                {isEn
                  ? 'The preferred destination for incentive trips, international conferences, and MICE programs.'
                  : 'Destinasi pilihan untuk incentive trip, konferensi internasional, dan program MICE.'}
              </p>
            </div>

            <div className={styles.cityBlock}>
              <span className={styles.cityTag}>EAST JAVA ENTERPRISE MARKET</span>
              <p className={styles.cityName}>Surabaya</p>
              <p className={styles.cityDesc}>
                {isEn
                  ? "East Java's economic hub with a strong enterprise business community."
                  : 'Pusat ekonomi Jawa Timur dengan komunitas bisnis enterprise yang kuat.'}
              </p>
            </div>

          </div>
        </section>

        {/* ── 5. CTA ────────────────────────────────────────────────── */}
        <CTASection lang={lang} />

      </main>
      <Footer />
    </>
  )
}
