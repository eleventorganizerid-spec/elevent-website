import Image from 'next/image'
import styles from './Gallery.module.css'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    alt: 'Corporate event plenary',
    position: 'row1-a',
  },
  {
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    alt: 'Gala dinner evening',
    position: 'row1-b',
  },
  {
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    alt: 'Conference audience',
    position: 'row2-a',
  },
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
    alt: 'Corporate gathering',
    position: 'row2-b',
  },
]

export default function Gallery() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.row}>
          <div className={styles.itemLarge}>
            <Image
              src={photos[0].src}
              fill
              alt={photos[0].alt}
              sizes="60vw"
              style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
              className={styles.img}
            />
          </div>
          <div className={styles.itemSmall}>
            <Image
              src={photos[1].src}
              fill
              alt={photos[1].alt}
              sizes="40vw"
              style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
              className={styles.img}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.itemSmall}>
            <Image
              src={photos[2].src}
              fill
              alt={photos[2].alt}
              sizes="40vw"
              style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
              className={styles.img}
            />
          </div>
          <div className={styles.itemLarge}>
            <Image
              src={photos[3].src}
              fill
              alt={photos[3].alt}
              sizes="60vw"
              style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
