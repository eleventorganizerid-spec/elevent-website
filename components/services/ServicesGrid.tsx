'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { SanityService } from '@/lib/types'
import styles from './ServicesGrid.module.css'

/* ─── types ────────────────────────────────────────────────────────── */

type ClusterId = 'gatherings' | 'conference' | 'activation' | 'team' | 'hospitality'
type FilterId  = 'all' | ClusterId

/* ─── cluster config ────────────────────────────────────────────────── */

const CLUSTER_MAP: Record<ClusterId, { label: string; slugs: string[] }> = {
  gatherings: {
    label: 'Gatherings & Celebrations',
    slugs: ['gala-dinner-award-night', 'corporate-event', 'corporate-gathering', 'corporate-anniversary'],
  },
  conference: {
    label: 'Conference & Knowledge',
    slugs: ['conference-seminar', 'corporate-meeting', 'hybrid-virtual-event'],
  },
  activation: {
    label: 'Activation & Presence',
    slugs: ['product-launching', 'brand-activation', 'exhibition-pameran', 'roadshow'],
  },
  team: {
    label: 'Team & Culture',
    slugs: ['team-building', 'corporate-outing'],
  },
  hospitality: {
    label: 'Hospitality & Travel',
    slugs: ['incentive-trip', 'mice-hospitality'],
  },
}

/* ─── module-level static lookups (computed once) ───────────────────── */

const slugToLabel: Record<string, string> = {}
const allOrderedSlugs: string[] = []

for (const cluster of Object.values(CLUSTER_MAP)) {
  for (const slug of cluster.slugs) {
    slugToLabel[slug] = cluster.label
    allOrderedSlugs.push(slug)
  }
}

const STANDALONE_SLUG = 'corporate-event-organizer'

/* ─── component ─────────────────────────────────────────────────────── */

interface Props {
  services: SanityService[]
  lang?: string
}

export default function ServicesGrid({ services, lang }: Props) {
  const isEn = lang === 'en'

  const FILTER_OPTIONS: { id: FilterId; label: string }[] = isEn ? [
    { id: 'all',         label: 'All Formats' },
    { id: 'gatherings',  label: 'Gatherings & Celebrations' },
    { id: 'conference',  label: 'Conference & Knowledge' },
    { id: 'activation',  label: 'Activation & Presence' },
    { id: 'team',        label: 'Team & Culture' },
    { id: 'hospitality', label: 'Hospitality & Travel' },
  ] : [
    { id: 'all',         label: 'Semua Format' },
    { id: 'gatherings',  label: 'Gatherings & Celebrations' },
    { id: 'conference',  label: 'Conference & Knowledge' },
    { id: 'activation',  label: 'Activation & Presence' },
    { id: 'team',        label: 'Team & Culture' },
    { id: 'hospitality', label: 'Hospitality & Travel' },
  ]

  const [activeFilter, setActiveFilter] = useState<FilterId>('all')
  const [visible, setVisible] = useState(true)

  const handleFilter = (id: FilterId) => {
    if (id === activeFilter) return
    setVisible(false)
    setTimeout(() => {
      setActiveFilter(id)
      setVisible(true)
    }, 200)
  }

  const displayed = useMemo(() => {
    // Never show the standalone service in the grid
    const eligible = services.filter((s) => s.slug.current !== STANDALONE_SLUG)

    const filtered =
      activeFilter === 'all'
        ? eligible
        : eligible.filter((s) =>
            CLUSTER_MAP[activeFilter].slugs.includes(s.slug.current)
          )

    // Maintain cluster order across the full list
    return [...filtered].sort((a, b) => {
      const ai = allOrderedSlugs.indexOf(a.slug.current)
      const bi = allOrderedSlugs.indexOf(b.slug.current)
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi)
    })
  }, [services, activeFilter])

  return (
    <>
      {/* ── FILTER BAR ─────────────────────────────────────── */}
      <div className={styles.filterBar}>
        {FILTER_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            className={`${styles.filterBtn} ${
              activeFilter === opt.id ? styles.filterBtnActive : ''
            }`}
            onClick={() => handleFilter(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* ── GRID ───────────────────────────────────────────── */}
      <div className={styles.gridWrapper}>
        <div
          className={styles.grid}
          data-count={displayed.length}
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.25s ease' }}
        >
          {displayed.map((service) => {
            const imgSrc = service.heroImage?.asset?.url ?? null
            const clusterLabel = slugToLabel[service.slug.current]

            return (
              <Link
                key={service._id}
                href={`/services/${service.slug.current}`}
                className={styles.serviceCard}
              >
                <div className={styles.cardImage}>
                  {imgSrc && (
                    <img
                      src={imgSrc}
                      alt={service.title}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'saturate(0.85)',
                      }}
                    />
                  )}
                </div>
                <div className={styles.cardOverlay} />
                <div className={styles.cardContent}>
                  {clusterLabel && (
                    <span className={styles.cardClusterLabel}>{clusterLabel}</span>
                  )}
                  <p className={styles.cardTitle}>{service.title}</p>
                  {(isEn ? (service.tagline ?? service.taglineId) : (service.taglineId ?? service.tagline)) && (
                    <p className={styles.cardTagline}>
                      {isEn ? (service.tagline ?? service.taglineId) : (service.taglineId ?? service.tagline)}
                    </p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
