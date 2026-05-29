/**
 * upload-insight-images.ts
 *
 * Downloads a verified Unsplash cover image for each insight article,
 * uploads it to Sanity's asset pipeline, then patches the document's
 * coverImage field.
 *
 * Run: npx tsx --env-file=.env.local scripts/upload-insight-images.ts
 *
 * Note: All photo IDs were individually verified as HTTP 200 before
 * inclusion. IDs originally provided that returned 404 have been
 * replaced with confirmed working alternatives of the same subject.
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('\n❌  SANITY_API_TOKEN is not set.')
  console.error('    Run: npx tsx --env-file=.env.local scripts/upload-insight-images.ts\n')
  process.exit(1)
}

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ?? '98jwav2j',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET     ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token,
  useCdn: false,
})

/* ─── image mapping ─────────────────────────────────────────────────────────
   slug → verified Unsplash photo ID
   IDs marked [orig 404 → replaced] were substituted after verification.
────────────────────────────────────────────────────────────────────────── */

const IMAGE_MAP: Record<string, string> = {
  // conference room, audience listening
  // [orig 404: 1573166953048-a69d7f3ebde6 → replaced]
  'panduan-corporate-townhall-indonesia-2025': '1573167507387-6b4b98cb7c13',

  // budget planning, documents on desk
  'budget-corporate-event-enterprise-jakarta': '1554224155-6726b3ff858f',

  // checklist, planning notebook
  'checklist-90-hari-annual-gathering':        '1484480974693-6ca0a78fb36b',

  // screens, video call / hybrid setup
  'hybrid-event-vs-virtual-event':             '1587825140708-dfaf72ae4b04',

  // empty event chairs, low-energy mood
  '5-kesalahan-fatal-corporate-event':         '1515187029135-18ee286d815b',

  // elegant hotel ballroom / grand venue
  // [orig 404: 1519167758481-83f550bb8d7a → replaced]
  'memilih-venue-corporate-event-jakarta':     '1776671069226-24e6d422a61b',

  // data analytics, graphs on screen
  'kpi-corporate-event-bukan-hanya-foto':      '1551288049-bebda4e38f71',

  // tropical resort, Bali-like pool
  // [orig 404: 1551882045-572d5e41f77c → replaced]
  'mice-indonesia-2025-tren-destinasi':        '1589632732202-bd154e6e116d',

  // group team-building outdoor activity
  // [orig 404: 1528605248644-14c1deba7a3a → replaced]
  'annual-gathering-vs-team-building':         '1606170750739-460f27c2d30d',

  // elegant formal gala dinner, dark
  // [orig 404: 1540575373-d7d0d2dde9aa → replaced]
  'protokol-vip-corporate-event':              '1700514077430-3659e38eb5e7',
}

/* ─── helpers ───────────────────────────────────────────────────────────── */

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

/* ─── main ──────────────────────────────────────────────────────────────── */

async function run() {
  const entries = Object.entries(IMAGE_MAP)
  console.log(`\n🖼️   Uploading cover images for ${entries.length} insights…\n`)

  let success = 0
  let failed  = 0

  for (const [slug, photoId] of entries) {
    console.log(`  ⬆️   ${slug}`)

    try {
      // 1. Resolve document _id from slug
      const doc = await client.fetch<{ _id: string } | null>(
        `*[_type == "insight" && slug.current == $slug][0]{ _id }`,
        { slug }
      )
      if (!doc) throw new Error(`Insight not found in Sanity: ${slug}`)

      // 2. Download image from Unsplash
      const buffer = await fetchImageBuffer(photoId)

      // 3. Upload buffer to Sanity asset store
      const asset = await client.assets.upload('image', buffer, {
        filename:    `insight-${slug}.jpg`,
        contentType: 'image/jpeg',
      })

      // 4. Patch insight document with asset reference
      await client
        .patch(doc._id)
        .set({
          coverImage: {
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id },
          },
        })
        .commit()

      console.log(`       ✅  Done  (asset: ${asset._id})`)
      success++
    } catch (err) {
      console.error(`       ❌  Failed:`, err instanceof Error ? err.message : err)
      failed++
    }

    await sleep(500)
  }

  console.log(`\n─────────────────────────────────────────`)
  console.log(`  ${success}/${entries.length} uploaded successfully, ${failed} failed.\n`)

  for (const [slug] of entries) {
    console.log(`  • ${slug}`)
  }

  console.log()

  if (failed > 0) process.exit(1)
}

run().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
