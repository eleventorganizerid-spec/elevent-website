import Image from 'next/image'
import styles from './Testimonial.module.css'

export default function Testimonial() {
  return (
    <section className={styles.section}>
      {/* Photo background */}
      <div className={styles.photoBg}>
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          fill
          alt=""
          sizes="100vw"
          style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.inner}>
        <p className={styles.label}>06 — IN THEIR WORDS</p>

        <div className={styles.grid}>
          <div className={styles.quoteMarkCol}>
            <span className={styles.quoteMark}>&ldquo;</span>
          </div>

          <div className={styles.quoteCol}>
            <blockquote className={styles.quoteText}>
              They didn&apos;t pitch us a vendor.
              <br />
              They pitched us a point of view —<br />
              and then they delivered it,
              <br />
              room by room.
            </blockquote>

            <div className={styles.attribution}>
              <div className={styles.attributionRule} />
              <p className={styles.attributionName}>Ryoko Ikeda</p>
              <p className={styles.attributionRole}>Senior Executive</p>
              <p className={styles.attributionCompany}>
                <em>Shimizu Corporation Jakarta · 2025</em>
              </p>
            </div>
          </div>

          <div className={styles.spacerCol} />
        </div>
      </div>
    </section>
  )
}
