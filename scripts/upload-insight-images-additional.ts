/**
 * upload-insight-images-additional.ts
 *
 * Creates stub insight documents (if they don't yet exist) for 2 new
 * articles, downloads their Unsplash cover images, and patches each
 * document with a resolved Sanity asset reference.
 *
 * Run: npx tsx --env-file=.env.local scripts/upload-insight-images-additional.ts
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('\n❌  SANITY_API_TOKEN is not set.')
  console.error('    Run: npx tsx --env-file=.env.local scripts/upload-insight-images-additional.ts\n')
  process.exit(1)
}

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ?? '98jwav2j',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET     ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token,
  useCdn: false,
})

/* ─── stub definitions ──────────────────────────────────────────────── */

interface InsightStub {
  _id: string
  _type: 'insight'
  title: string
  titleId: string
  slug: { _type: 'slug'; current: string }
  publishedAt: string
  category: string
  excerpt: string
  photoId: string
}

const STUBS: InsightStub[] = [
  {
    _id:         'insight-annual-gathering-vs-team-building',
    _type:       'insight',
    title:       'Annual Gathering vs Team Building: What\'s the Difference and When to Choose Each',
    titleId:     'Annual Gathering vs Team Building: Apa Bedanya dan Kapan Memilih Yang Mana?',
    slug:        { _type: 'slug', current: 'annual-gathering-vs-team-building' },
    publishedAt: '2025-07-15T08:00:00Z',
    category:    'Planning & Preparation',
    excerpt:
      'Banyak perusahaan menyamakan annual gathering dengan team building — padahal keduanya punya tujuan, format, dan ukuran keberhasilan yang berbeda. Memahami perbedaan ini adalah langkah pertama untuk memilih format yang tepat.',
    photoId: '1606170750739-460f27c2d30d',  // group team-building outdoor activity
  },
  {
    _id:         'insight-protokol-vip-corporate-event',
    _type:       'insight',
    title:       'VIP Protocol in Corporate Events: A Complete Guide for Priority Guests',
    titleId:     'Protokol VIP dalam Corporate Event: Panduan Lengkap untuk Tamu Prioritas',
    slug:        { _type: 'slug', current: 'protokol-vip-corporate-event' },
    publishedAt: '2025-08-01T08:00:00Z',
    category:    'Venue & Execution',
    excerpt:
      'Menangani tamu VIP — pejabat pemerintah, direksi grup, atau mitra bisnis senior — dalam corporate event bukan sekadar soal kursi terdepan. Protokol yang tepat adalah detail yang membedakan event yang berkesan dari yang sekadar terlaksana.',
    photoId: '1700514077430-3659e38eb5e7',  // elegant formal gala dinner, dark
  },
]

/* ─── helpers ───────────────────────────────────────────────────────── */

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchImageBuffer(photoId: string): Promise<Buffer> {
  const url = `https://images.unsplash.com/photo-${photoId}?w=1200&q=80`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`)
  const arrayBuffer = await res.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

/* ─── main ──────────────────────────────────────────────────────────── */

async function run() {
  console.log(`\n🖼️   Processing ${STUBS.length} insight stubs + images…\n`)

  let success = 0
  let failed  = 0

  for (const stub of STUBS) {
    const { photoId, ...doc } = stub
    console.log(`  📄  ${stub.titleId}`)

    try {
      // 1. Create stub document if it doesn't already exist
      const existing = await client.fetch<{ _id: string } | null>(
        `*[_type == "insight" && _id == $id][0]{ _id }`,
        { id: stub._id }
      )

      if (existing) {
        console.log(`       ↩️   Document already exists — skipping create`)
      } else {
        await client.createOrReplace(doc)
        console.log(`       ✓   Stub created`)
      }

      // 2. Download image from Unsplash
      console.log(`       ⬆️   Downloading photo-${photoId}…`)
      const buffer = await fetchImageBuffer(photoId)

      // 3. Upload buffer to Sanity asset store
      const asset = await client.assets.upload('image', buffer, {
        filename:    `insight-${stub.slug.current}.jpg`,
        contentType: 'image/jpeg',
      })

      // 4. Patch document with asset reference
      await client
        .patch(stub._id)
        .set({
          coverImage: {
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id },
          },
        })
        .commit()

      console.log(`       ✅  Image patched  (asset: ${asset._id})\n`)
      success++
    } catch (err) {
      console.error(`       ❌  Failed:`, err)
      console.log()
      failed++
    }

    await sleep(500)
  }

  console.log(`─────────────────────────────────────────`)
  console.log(`  ${success}/${STUBS.length} completed successfully, ${failed} failed.\n`)

  for (const s of STUBS) {
    console.log(`  • ${s.titleId}`)
    console.log(`    slug: ${s.slug.current}`)
  }

  console.log()

  if (failed > 0) process.exit(1)
}

run().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
