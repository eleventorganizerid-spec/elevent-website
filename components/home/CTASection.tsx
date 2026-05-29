import Image from 'next/image'
import styles from './CTASection.module.css'

interface Props {
  lang?: string
  showLabel?: boolean
  size?: string
}

export default function CTASection({ lang, showLabel = false }: Props) {
  const isEn = lang === 'en'
  const langParam = isEn ? '?lang=en' : ''

  return (
    <section className={styles.section} id="proposal">
      {/* Photo background */}
      <div className={styles.photoBg}>
        <Image
          src="https://cdn.sanity.io/images/98jwav2j/production/531402bf1b1587e98c1d417d352ece151106151b-1920x1280.jpg"
          fill
          alt=""
          sizes="100vw"
          unoptimized
          style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.spacer} />

          <div className={styles.content}>
            {showLabel && <p className={styles.label}>09 — BEGIN</p>}

            <h2 className={styles.headline}>
              <span className={styles.line1}>Bring us a brief.</span>
              <span className={styles.line2}>
                We&apos;ll bring a{' '}
                <em>point of view.</em>
              </span>
            </h2>

            <p className={styles.subcopy}>
              {isEn
                ? "Send us your brief. We'll respond within one working day with a team that's been briefed and a perspective that's clear."
                : 'Kirimkan brief Anda. Kami akan merespons dalam satu hari kerja dengan tim yang telah dikurasi dan perspektif yang jelas.'}
            </p>

            <div className={styles.ctas}>
              <a href={`/get-a-proposal${langParam}`} className={styles.btnPrimary}>
                GET A PROPOSAL →
              </a>
              <a href={`/contact${langParam}`} className={styles.btnGhost}>
                {isEn ? 'TALK TO OUR TEAM' : 'HUBUNGI KAMI'}
              </a>
            </div>
          </div>

          <div className={styles.spacer} />
        </div>
      </div>
    </section>
  )
}
