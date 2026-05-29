/**
 * update-insight-dates.ts
 *
 * Updates publishedAt dates for all 10 insight articles.
 * Also updates titleId for mice-indonesia-2025-tren-destinasi (2025 → 2026).
 *
 * Run: npx tsx --env-file=.env.local scripts/update-insight-dates.ts
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('\n✗ SANITY_API_TOKEN is not set in .env.local\n')
  process.exit(1)
}

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ?? '98jwav2j',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET     ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token,
  useCdn: false,
})

// ── Updates ───────────────────────────────────────────────────────────────────

const UPDATES: Array<{ slug: string; publishedAt: string; titleId?: string }> = [
  {
    slug:        'panduan-corporate-townhall-indonesia-2025',
    publishedAt: '2025-03-15T08:00:00Z',
  },
  {
    slug:        'budget-corporate-event-enterprise-jakarta',
    publishedAt: '2025-04-01T08:00:00Z',
  },
  {
    slug:        'checklist-90-hari-annual-gathering',
    publishedAt: '2025-05-10T08:00:00Z',
  },
  {
    slug:        '5-kesalahan-fatal-corporate-event',
    publishedAt: '2025-07-22T08:00:00Z',
  },
  {
    slug:        'memilih-venue-corporate-event-jakarta',
    publishedAt: '2025-09-05T08:00:00Z',
  },
  {
    slug:        'hybrid-event-vs-virtual-event',
    publishedAt: '2026-01-14T08:00:00Z',
  },
  {
    slug:        'kpi-corporate-event-bukan-hanya-foto',
    publishedAt: '2026-02-20T08:00:00Z',
  },
  {
    slug:        'mice-indonesia-2025-tren-destinasi',
    publishedAt: '2026-03-10T08:00:00Z',
    titleId:     'MICE di Indonesia 2026: Tren, Destinasi, dan yang Perlu Diketahui Perusahaan',
  },
  {
    slug:        'annual-gathering-vs-team-building',
    publishedAt: '2026-04-08T08:00:00Z',
  },
  {
    slug:        'protokol-vip-corporate-event',
    publishedAt: '2026-05-15T08:00:00Z',
  },
]

// ── Run ───────────────────────────────────────────────────────────────────────

async function run() {
  console.log('\n─────────────────────────────────────────')
  console.log('  Updating insight dates')
  console.log('─────────────────────────────────────────\n')

  let success = 0

  for (const update of UPDATES) {
    try {
      const doc = await client.fetch<{ _id: string } | null>(
        `*[_type == "insight" && slug.current == $slug][0]{ _id }`,
        { slug: update.slug }
      )
      if (!doc) throw new Error(`Not found: ${update.slug}`)

      const patch: Record<string, string> = { publishedAt: update.publishedAt }
      if (update.titleId) patch.titleId = update.titleId

      await client.patch(doc._id).set(patch).commit()

      const extra = update.titleId ? '  + titleId updated' : ''
      console.log(`  ✓  ${update.slug}`)
      console.log(`       ${update.publishedAt}${extra}\n`)
      success++
    } catch (err) {
      console.error(`  ✗  ${update.slug}`)
      console.error(`     ${err instanceof Error ? err.message : err}\n`)
    }
  }

  console.log('─────────────────────────────────────────')
  console.log(`  ${success}/${UPDATES.length} articles updated successfully.\n`)

  if (success < UPDATES.length) process.exit(1)
}

run().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
