import Link from 'next/link'
import styles from './WhatWeDo.module.css'

interface Props {
  lang?: string
}

export default function WhatWeDo({ lang }: Props) {
  const isEn = lang === 'en'
  const langParam = isEn ? '?lang=en' : ''

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* Column 1 — Headline */}
        <div className={styles.colHeadline}>
          <p className={styles.label}>02 — WHAT WE DO</p>
          <h2 className={styles.headline}>
            <span className={styles.headlineNormal}>We don&apos;t execute briefs.</span>
            <em className={styles.headlineItalic}><span className={styles.headlineUnderline}>We direct outcomes.</span></em>
          </h2>
        </div>

        {/* Column 2 — Body */}
        <div className={styles.colBody}>
          <div className={styles.bodyTexts}>
            <p className={styles.bodyText}>
              {isEn ? (
                <>Elevent is an enterprise event organizer platform — from gala dinners to hybrid conferences, <span style={{color: 'var(--sienna)'}}>from 100 to 5,000 attendees.</span></>
              ) : (
                <>Elevent adalah platform event organizer untuk perusahaan enterprise, dari gala dinner hingga hybrid conference, <span style={{color: 'var(--sienna)'}}>dari 100 hingga 5.000 peserta.</span></>
              )}
            </p>
            <p className={styles.bodyText}>
              {isEn
                ? <>Elevent matches every brief with a specialist team that has run the same format multiple times. <em>No generalists learning on your project.</em></>
                : <>Elevent mencocokkan setiap brief dengan tim spesialis yang telah menjalankan format yang sama berulang kali. <em>Tidak ada generalis yang sedang belajar di proyek Anda.</em></>}
            </p>
            <p className={styles.bodyText}>
              {isEn
                ? 'One contact. One standard. Full accountability from the first brief to the last guest leaving.'
                : 'Satu kontak. Satu standar. Akuntabilitas penuh dari brief pertama hingga tamu terakhir pulang.'}
            </p>
          </div>
          <Link href={`/about${langParam}`} className={styles.cityLabel}>
            {isEn ? 'Learn how we work →' : 'Pelajari cara kerja kami →'}
          </Link>
        </div>
      </div>
    </section>
  )
}
