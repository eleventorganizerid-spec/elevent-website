import Link from 'next/link'
import styles from './Services.module.css'

interface ServiceItem {
  title: string
  titleId?: string
  slug: string
  description?: string
  descriptionEn?: string
}

interface Props {
  services: ServiceItem[]
  lang?: string
}

const serviceNameMap: Record<string, React.ReactNode> = {
  'Corporate Event':        <><span>Corporate </span><em>Event</em></>,
  'Product Launching':      <><span>Product </span><em>Launching</em></>,
  'Team Building':          <><span>Team </span><em>Building</em></>,
  'Hybrid & Virtual Event': <><span>Hybrid & </span><em>Virtual</em><span> Event</span></>,
}

export default function Services({ services, lang }: Props) {
  const isEn = lang === 'en'

  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.label}>03 — SERVICES</p>
          <h2 className={styles.headline}>
            Nine formats.{' '}
            <em>One standard.</em>
          </h2>
        </div>

        {/* Service list */}
        <div className={styles.list}>
          {services.map((service, i) => {
            const num = String(i + 1).padStart(2, '0') + '/' + String(services.length).padStart(2, '0')
            const desc = isEn
              ? (service.descriptionEn ?? service.description)
              : service.description
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={styles.row}
              >
                <span className={styles.rowNumber}>{num}</span>
                <span className={styles.rowName}>
                  {serviceNameMap[service.title] ?? service.title}
                </span>
                <span className={styles.rowDesc}>{desc}</span>
                <span className={styles.rowExplore}>EXPLORE →</span>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            {isEn
              ? 'Plus secondary formats — corporate meeting, anniversary, outing, exhibition & pameran, roadshow.'
              : 'Plus format sekunder — corporate meeting, anniversary, outing, exhibition & pameran, roadshow.'}
          </p>
          <Link href="/services" className={styles.footerLink}>
            ALL SERVICES →
          </Link>
        </div>
      </div>
    </section>
  )
}
