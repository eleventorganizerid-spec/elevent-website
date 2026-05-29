'use client'

import AnimateIn from '@/components/ui/AnimateIn'
import styles from './Stats.module.css'

const stats = [
  {
    stat: '1 working day',
    desc: 'Dari brief masuk ke proposal keluar.',
  },
  {
    stat: '500 — 5,000',
    desc: 'Peserta event, skala intimate hingga massal.',
  },
  {
    stat: '15+ formats',
    desc: 'Dari gala dinner hingga hybrid conference.',
  },
  {
    stat: '1 standard',
    desc: 'Setiap brief. Setiap klien. Tanpa kompromi.',
  },
]

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.accentRule} />
        <p className={styles.sectionLabel}>06 — TRACK RECORD</p>
        <div className={styles.grid}>
          {stats.map((item, index) => (
            <AnimateIn
              key={item.stat}
              scroll
              delay={0.1 * index}
              className={`${styles.col} ${index < stats.length - 1 ? styles.colBorder : ''}`}
            >
              <p className={styles.stat}>{item.stat}</p>
              <p className={styles.desc}>{item.desc}</p>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
