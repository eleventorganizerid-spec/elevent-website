/**
 * upload-service-images.ts
 *
 * Downloads a specific Unsplash image for each service,
 * uploads it to Sanity's asset pipeline, then patches the
 * service document to set heroImage.
 *
 * Run: npx tsx --env-file=.env.local scripts/upload-service-images.ts
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('\n❌  SANITY_API_TOKEN is not set.')
  console.error('    Run: npx tsx --env-file=.env.local scripts/upload-service-images.ts\n')
  process.exit(1)
}

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ?? '98jwav2j',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET     ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token,
  useCdn: false,
})

/* ─── image mapping ─────────────────────────────────────────────────── */

const IMAGE_MAP: Record<string, string> = {
  'corporate-event':            '1540575467063-178a50c2df87',  // crowd at conference hall
  'corporate-gathering':        '1566512410727-347595faf5a1',  // people cheering in a room
  'product-launching':          '1556742049-0cfed4f6a45d',     // product reveal, spotlight
  'gala-dinner-award-night':    '1515169067868-5387ec356754',  // elegant event, formal attire
  'conference-seminar':         '1505373877841-8d25f7d46678',  // speaker in front of large screen
  'team-building':              '1770240090990-0653176ee415',  // group activity in wooded area
  'mice-hospitality':           '1561501900-3701fa6a0864',     // infinity pool resort
  'hybrid-virtual-event':       '1587825140708-dfaf72ae4b04',  // video call screens setup
  'incentive-trip':             '1436491865332-7a61a109cc05',  // tropical beach aerial
  'corporate-meeting':          '1572021335469-31706a17aaef',  // executive boardroom
  'corporate-anniversary':      '1527529482837-4698179dc6ce',  // celebration confetti dark
  'corporate-outing':           '1597120590849-a1d5a743d155',  // group walking on trail
  'brand-activation':           '1558618666-fcd25c85cd64',     // brand event crowd engagement
  'exhibition-pameran':         '1632383380175-812d44ec112b',  // trade show booth
  'roadshow':                   '1469854523086-cc02fe5d8800',  // city highway aerial night
  'corporate-event-organizer':  '1492684223066-81342ee5ff30',  // event production backstage
}

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

// Only the 8 that failed in the first run — others are already uploaded
const RETRY_SLUGS = new Set([
  'corporate-event',
  'corporate-gathering',
  'gala-dinner-award-night',
  'conference-seminar',
  'team-building',
  'mice-hospitality',
  'corporate-outing',
  'exhibition-pameran',
])

async function run() {
  const entries = Object.entries(IMAGE_MAP).filter(([slug]) => RETRY_SLUGS.has(slug))
  console.log(`\n🖼️   Re-uploading images for ${entries.length} failed services…\n`)

  let success = 0
  let failed  = 0

  for (const [slug, photoId] of entries) {
    console.log(`  ⬆️   Uploading: ${slug}…`)

    try {
      // 1. Resolve document _id from slug
      const doc = await client.fetch<{ _id: string } | null>(
        `*[_type == "service" && slug.current == $slug][0]{ _id }`,
        { slug }
      )
      if (!doc) throw new Error(`Service not found in Sanity: ${slug}`)

      // 2. Download image from Unsplash
      const buffer = await fetchImageBuffer(photoId)

      // 3. Upload buffer to Sanity asset store
      const asset = await client.assets.upload('image', buffer, {
        filename:    `${slug}.jpg`,
        contentType: 'image/jpeg',
      })

      // 4. Patch service document with asset reference
      await client
        .patch(doc._id)
        .set({
          heroImage: {
            _type:  'image',
            asset:  { _type: 'reference', _ref: asset._id },
          },
        })
        .commit()

      console.log(`       ✅  Done: ${slug}  (asset: ${asset._id})`)
      success++
    } catch (err) {
      console.error(`       ❌  Failed: ${slug}:`, err)
      failed++
    }

    // 500 ms pause between uploads to avoid rate limits
    await sleep(500)
  }

  console.log(`\n✨  Done. ${success}/${entries.length} re-uploaded successfully, ${failed} failed.\n`)
}

run().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
