import { whyEleventBlocks } from '@/lib/data'
import styles from './WhyElevent.module.css'

interface Props {
  lang?: string
}

export default function WhyElevent({ lang }: Props) {
  const isEn = lang === 'en'

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>05 — WHY ELEVENT</p>
          <h2 className={styles.headline}>
            The difference.<br className={styles.mobileBreak} />{' '}
            <em>Is in the standard.</em>
          </h2>
        </div>

        <div className={styles.blocks}>
          {whyEleventBlocks.map((block, i) => (
            <div key={block.numeral} className={styles.block}>
              <span className={styles.numeral}>{block.numeral}</span>

              <div className={styles.colTitle}>
                {i === 0 && (
                  <h3 className={styles.blockTitle}>
                    We have opinions about your event.{' '}
                    <em>Strong ones.</em>
                  </h3>
                )}
                {i === 1 && (
                  <h3 className={styles.blockTitle}>
                    <em>Execution</em> without direction is just logistics.
                  </h3>
                )}
                {i === 2 && (
                  <h3 className={styles.blockTitle}>
                    The best corporate events don&apos;t{' '}
                    <em>feel</em> like corporate events.
                  </h3>
                )}
              </div>

              <p className={styles.blockBody}>
                {isEn ? (block.bodyEn ?? block.body) : block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
