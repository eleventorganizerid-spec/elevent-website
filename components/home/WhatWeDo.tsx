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
                <>Elevent handles corporate events for enterprise companies: <Link href={`/services/gala-dinner-award-night${langParam}`}>gala dinners</Link>, <Link href={`/services/conference-seminar${langParam}`}>conferences</Link>, <Link href={`/services/team-building${langParam}`}>team building</Link>, <Link href={`/services/roadshow${langParam}`}>roadshows</Link>, and <Link href={`/services/incentive-trip${langParam}`}>incentive trips</Link>.</>
              ) : (
                <>Elevent menangani corporate event untuk perusahaan enterprise: <Link href={`/services/gala-dinner-award-night${langParam}`}>gala dinner</Link>, <Link href={`/services/conference-seminar${langParam}`}>conference</Link>, <Link href={`/services/team-building${langParam}`}>team building</Link>, <Link href={`/services/roadshow${langParam}`}>roadshow</Link>, hingga <Link href={`/services/incentive-trip${langParam}`}>incentive trip</Link>.</>
              )}
            </p>
            <p className={styles.bodyText}>
              {isEn ? (
                <>Every event has a business objective behind it. We start there. Not from a vendor checklist.</>
              ) : (
                <>Setiap event punya satu tujuan bisnis di baliknya. Kami mulai dari sana, bukan dari checklist vendor.</>
              )}
            </p>
            <p className={styles.bodyText}>
              {isEn ? (
                <>Elevent matches every brief with a specialist team that has run the same format multiple times before. <em>No generalists learning on your project.</em></>
              ) : (
                <>Elevent mencocokkan setiap brief dengan tim spesialis yang telah menjalankan format yang sama berulang kali. <em>Tidak ada generalis yang sedang belajar di proyek Anda.</em></>
              )}
            </p>
            <p className={styles.bodyText}>
              {isEn ? (
                <><span style={{color: 'var(--sienna)'}}>One contact. One standard.</span> Full accountability from the first brief to the last guest out the door.</>
              ) : (
                <><span style={{color: 'var(--sienna)'}}>Satu kontak. Satu standar.</span> Akuntabilitas penuh dari brief pertama hingga tamu terakhir pulang.</>
              )}
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
