/**
 * upload-casestudy-images.ts
 *
 * Downloads a verified Unsplash hero image for each case study,
 * uploads it to Sanity's asset pipeline, then patches the document's
 * heroImage field.
 *
 * Run: npx tsx --env-file=.env.local scripts/upload-casestudy-images.ts
 *
 * Note: All photo IDs were individually verified as HTTP 200 before
 * inclusion. IDs originally provided that returned 404 have been
 * replaced with confirmed working alternatives of the same subject.
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('\n❌  SANITY_API_TOKEN is not set.')
  console.error('    Run: npx tsx --env-file=.env.local scripts/upload-casestudy-images.ts\n')
  process.exit(1)
}

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ?? '98jwav2j',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET     ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token,
  useCdn: false,
})

/* ─── image mapping ──────────────────────────────────────────────────────────
   slug → verified Unsplash photo ID
   IDs marked [orig 404 → replaced] were substituted after verification.
─────────────────────────────────────────────────────────────────────────── */

const IMAGE_MAP: Record<string, string> = {
  // elegant corporate anniversary, formal
  // [orig 404: 1540575467537-6b33b6f8f7e0 → replaced]
  'shimizu-corporation-50th-anniversary':    '1653821355736-0c2598d0a63e',

  // large conference audience, crowd
  // [orig 404: 1540575373-d7d0d2dde9aa → replaced]
  'future-leader-fest-2023':                 '1594122230689-45899d9e6f69',

  // creative festival, colorful event backstage
  'hekrafnas-2023':                          '1492684223066-81342ee5ff30',

  // gala dinner, dark elegant table setting
  // [orig 404: 1519671282680-78b7c6c18cf7 → replaced]
  'milad-ke-11-askrindo-syariah':            '1767050190883-29d644fa5b99',

  // corporate anniversary celebration, confetti
  'mirae-asset-10th-anniversary':            '1527529482837-4698179dc6ce',

  // government / formal conference room
  // [orig 404: 1505373877741-8b39c74a3ad7 → replaced]
  'rakortek-direktorat-bandar-udara':        '1769667693426-6ce4b8732060',

  // digital technology presentation, screens
  'sosialisasi-tanda-tangan-digital-kominfo': '1587825140708-dfaf72ae4b04',

  // corporate summit, business conference
  'vertiv-asia-channel-summit-2023':         '1556742049-0cfed4f6a45d',

  // award night, dark stage with spotlights
  // [orig 404: 1511795409-d81343e23251 → replaced]
  'mitra-ninja-award-2020':                  '1478147427282-58a87a120781',
}

/* ─── helpers ────────────────────────────────────────────────────────────── */

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

/* ─── main ───────────────────────────────────────────────────────────────── */

async function run() {
  const entries = Object.entries(IMAGE_MAP)
  console.log(`\n🖼️   Uploading hero images for ${entries.length} case studies…\n`)

  let success = 0
  let failed  = 0

  for (const [slug, photoId] of entries) {
    console.log(`  ⬆️   ${slug}`)

    try {
      // 1. Resolve document _id from slug
      const doc = await client.fetch<{ _id: string } | null>(
        `*[_type == "caseStudy" && slug.current == $slug][0]{ _id }`,
        { slug }
      )
      if (!doc) throw new Error(`Case study not found in Sanity: ${slug}`)

      // 2. Download image from Unsplash
      const buffer = await fetchImageBuffer(photoId)

      // 3. Upload buffer to Sanity asset store
      const asset = await client.assets.upload('image', buffer, {
        filename:    `casestudy-${slug}.jpg`,
        contentType: 'image/jpeg',
      })

      // 4. Patch case study document with asset reference
      await client
        .patch(doc._id)
        .set({
          heroImage: {
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
