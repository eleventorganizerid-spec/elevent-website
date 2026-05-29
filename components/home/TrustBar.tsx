'use client'

import { trustBrands } from '@/lib/data'
import styles from './TrustBar.module.css'

const allBrands = [...trustBrands, ...trustBrands]

export default function TrustBar() {
  return (
    <section className={styles.section}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {allBrands.map((brand, i) => (
            <div key={`${brand.name}-${i}`} className={`${styles.brandItem} ${styles[brand.style]}`}>
              {brand.name}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
