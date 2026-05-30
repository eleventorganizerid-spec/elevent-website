import Image from 'next/image'
import styles from './Hero.module.css'

interface Props {
  lang?: string
}

export default function Hero({ lang }: Props) {
  const isEn = lang === 'en'
  const langParam = isEn ? '?lang=en' : ''

  return (
    <section className={styles.hero}>
      {/* Media layer */}
      <div className={styles.media}>
        <Image
          src="https://cdn.sanity.io/images/98jwav2j/production/b0c31b65b6e53858972903ab3d6a151e629ebed0-1920x1280.jpg"
          fill
          alt=""
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
          className={styles.heroImage}
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroVideo}
          style={{ filter: 'saturate(0.85)' }}
        >
          <source src="/hero-reel.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      {/* Content layer */}
      <div className={styles.content}>
        <p className={styles.label}>01 — THE BRIEF</p>

        <h1 className={styles.headline}>
          <span className={styles.line1}>Most corporate events</span>
          <span className={styles.line2}>are forgotten by Monday.</span>
          <em className={styles.line3}>Yours won&apos;t be.</em>
        </h1>

        <p className={styles.subcopy}>
          {isEn
            ? 'Elevent designs corporate events the way a director makes a film — every decision intentional, every detail load-bearing, every room transformed.'
            : 'Elevent merancang corporate event seperti sutradara merancang film — setiap keputusan direncanakan, setiap detail punya fungsi, setiap ruangan ditransformasi.'}
        </p>

        <div className={styles.ctas}>
          <a href={`/get-a-proposal${langParam}`} className={styles.btnPrimary}>
            Bring Your Brief →
          </a>
          <a href={`/work${langParam}`} className={styles.btnText}>
            View The Work
          </a>
        </div>
      </div>

    </section>
  )
}
