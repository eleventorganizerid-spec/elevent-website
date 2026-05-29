import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/client'
import { urlFor } from '@/sanity/image'
import type { SanityCaseStudy } from '@/lib/types'
import styles from './CaseStudy.module.css'

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80'

const query = `
  *[_type == "caseStudy" && slug.current == "shimizu-corporation-50th-anniversary"][0] {
    _id, title, client, format, audience, audienceId, cities,
    outcome, outcomeId, outcomeNumber, heroImage,
    brief, briefEn, clientQuote, year, featured
  }
`

interface Props {
  lang?: string
}

export default async function CaseStudy({ lang }: Props) {
  const isEn = lang === 'en'
  const langParam = isEn ? '?lang=en' : ''

  const data: SanityCaseStudy | null = await client.fetch(query)

  const imageUrl = data?.heroImage
    ? urlFor(data.heroImage).width(1920).quality(85).url()
    : FALLBACK_IMAGE

  const displayAudience = isEn
    ? (data?.audience ?? data?.audienceId)
    : (data?.audienceId ?? data?.audience)

  const displayOutcome = isEn
    ? (data?.outcome ?? data?.outcomeId)
    : (data?.outcomeId ?? data?.outcome)

  return (
    <section className={styles.section} id="work">
      <div className={styles.inner}>
        <p className={styles.label}>04 — FEATURED WORK</p>

        <h2 className={styles.headline}>
          Fifty years. One night. <em>Five hundred witnesses.</em>
        </h2>

        {/* 2-col: photo left / details right */}
        <div className={styles.contentGrid}>

          {/* Left — photo */}
          <div className={styles.photoCol}>
            <Image
              src={imageUrl}
              fill
              alt="Shimizu Corporation 50th Anniversary Gala Dinner"
              sizes="(max-width: 767px) 100vw, 60vw"
              unoptimized
              style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
            />
            <div className={styles.photoOverlay} />
            <div className={styles.photoCaption}>
              <span className={styles.captionLeft}>FIG. 01 GALA NIGHT · HOTEL KEMPINSKI</span>
              <span className={styles.captionRight}>PHOTOGRAPHY — ELEVENT ARCHIVE</span>
            </div>
          </div>

          {/* Right — data + quote + CTA */}
          <div className={styles.rightCol}>
            <div className={styles.dataTable}>
              <div className={styles.dataRow}>
                <span className={styles.dataKey}>{isEn ? 'CLIENT' : 'KLIEN'}</span>
                <span className={styles.dataVal}>{data?.client ?? 'Shimizu Corporation Jakarta'}</span>
              </div>
              <div className={styles.dataRow}>
                <span className={styles.dataKey}>FORMAT</span>
                <span className={styles.dataVal}>{data?.format ?? 'Gala Dinner & Award Night'}</span>
              </div>
              <div className={styles.dataRow}>
                <span className={styles.dataKey}>{isEn ? 'AUDIENCE' : 'AUDIENS'}</span>
                <span className={styles.dataVal}>
                  {displayAudience ?? '500 tamu — direksi Tokyo, mitra lokal, perwakilan pemerintah.'}
                </span>
              </div>
              <div className={styles.dataRow}>
                <span className={styles.dataKey}>{isEn ? 'CITIES' : 'KOTA'}</span>
                <span className={styles.dataVal}>{data?.cities ?? 'Jakarta — Hotel Kempinski'}</span>
              </div>
              <div className={styles.dataRow}>
                <span className={styles.dataKey}>{isEn ? 'OUTCOME' : 'HASIL'}</span>
                <span className={styles.dataVal}>
                  <span className={styles.highlight}>
                    {displayOutcome ?? 'Standing ovation spontan — momen yang tidak direncanakan, menjadi momen paling diingat malam itu.'}
                  </span>
                </span>
              </div>
            </div>

            <blockquote className={styles.quote}>
              {isEn
                ? 'Brief that arrived: mark fifty years of Shimizu in Indonesia with a night that senior leadership would speak about for the next fifty.'
                : 'Brief yang datang: tandai lima puluh tahun Shimizu di Indonesia dengan satu malam yang akan dibicarakan pimpinan senior selama lima puluh tahun ke depan.'}
            </blockquote>

            <div className={styles.ctaWrap}>
              <Link href={`/work/shimizu-corporation-50th-anniversary${langParam}`} className={styles.cta}>
                {isEn ? 'READ THE CASE STUDY →' : 'BACA CASE STUDY →'}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
