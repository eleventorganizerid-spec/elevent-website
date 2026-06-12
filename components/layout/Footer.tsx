'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import styles from './Footer.module.css'

const footerServices = [
  { label: 'Corporate Event',      slug: 'corporate-event'         },
  { label: 'Corporate Gathering',  slug: 'corporate-gathering'     },
  { label: 'Product Launching',    slug: 'product-launching'       },
  { label: 'Gala & Award Night',   slug: 'gala-dinner-award-night' },
  { label: 'Conference & Seminar', slug: 'conference-seminar'      },
]

const footerCities = ['Jakarta', 'Bali', 'Surabaya', 'Bandung', 'Medan', 'Makassar']

const footerCityServices = [
  { label: 'Jakarta Events',  slug: 'corporate-event-jakarta'  },
  { label: 'Bali Events',     slug: 'corporate-event-bali'     },
  { label: 'Surabaya Events', slug: 'corporate-event-surabaya' },
]

const footerElsewhere = [
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/elevent-id' },
  { label: 'YouTube',   href: 'https://youtube.com/@elevent'            },
  { label: 'WhatsApp',  href: 'https://wa.me/6285199333039'              },
]

export default function Footer() {
  const searchParams = useSearchParams()
  const isEn = searchParams.get('lang') === 'en'

  return (
    <footer className={styles.footer}>
      <button
        className={styles.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑ TOP
      </button>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image
                src="/assets/logo-light.png"
                alt="Elevent"
                width={120}
                height={60}
                style={{ objectFit: 'contain', marginLeft: '-12px' }}
              />
            </div>
            <p className={styles.brandDesc}>
              {isEn
                ? 'Strategic event partner for enterprise companies in Indonesia. A curated platform model — matching every event with the right specialist team.'
                : 'Mitra event strategis untuk perusahaan enterprise di Indonesia. Model platform terkurasi — memasangkan setiap event dengan tim spesialis yang tepat.'}
            </p>
          </div>

          <div className={styles.col}>
            <p className={styles.colLabel}>Services</p>
            <ul className={styles.colList}>
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={styles.colLink}>
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className={`${styles.colLink} ${styles.colLinkAccent}`}>
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colLabel}>Cities</p>
            <ul className={styles.colList}>
              {footerCities.map((c) => (
                <li key={c}>
                  <span className={styles.colText}>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colLabel}>Services by City</p>
            <ul className={styles.colList}>
              {footerCityServices.map((c) => (
                <li key={c.slug}>
                  <Link href={`/services/${c.slug}`} className={styles.colLink}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colLabel}>Contact</p>
            <ul className={styles.colList}>
              <li>
                <a href="mailto:brief@elevent.id" className={styles.colLink}>
                  brief@elevent.id
                </a>
              </li>
              <li>
                <a href="tel:+6285199333039" className={styles.colLink}>
                  +62 851 9933 3039
                </a>
              </li>
              <li>
                <span className={styles.colText}>Jakarta · ID</span>
              </li>
              <li>
                <Link href="/get-a-proposal" className={`${styles.colLink} ${styles.colLinkAccent}`}>
                  Bring Your Brief →
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colLabel}>Elsewhere</p>
            <ul className={styles.colList}>
              {footerElsewhere.map((e) => (
                <li key={e.label}>
                  <a
                    href={e.href}
                    className={styles.colLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {e.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© MMXXVI ELEVENT · ALL RIGHTS RESERVED</span>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>
              Privacy
            </Link>
            <Link href="/terms" className={styles.bottomLink}>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
