/**
 * fix-service-copy.ts
 *
 * Patches specific fields on 6 service documents in Sanity.
 * Only the fields listed below are touched — all other data is preserved.
 *
 * Run: npx tsx --env-file=.env.local scripts/fix-service-copy.ts
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('\n❌  SANITY_API_TOKEN is not set.')
  console.error('    Run: npx tsx --env-file=.env.local scripts/fix-service-copy.ts\n')
  process.exit(1)
}

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ?? '98jwav2j',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET     ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token,
  useCdn:     false,
})

/* ─── patch definitions ─────────────────────────────────────────────── */

interface PatchDef {
  slug:    string
  changes: Record<string, string>
}

const PATCHES: PatchDef[] = [
  // 1. Gala Dinner & Award Night — two included[] items
  {
    slug: 'gala-dinner-award-night',
    changes: {
      'included[2]': 'Produksi urutan penghargaan dan momen puncak acara',
      'included[6]': 'Souvenir dan touchpoint branded untuk tamu',
    },
  },

  // 2. Corporate Anniversary — three included[] items
  {
    slug: 'corporate-anniversary',
    changes: {
      'included[0]': 'Konsep tema dan identitas visual acara',
      'included[1]': 'Program malam dan urutan acara',
      'included[6]': 'Souvenir dan kolateral eksklusif acara',
    },
  },

  // 3. Roadshow — descriptor
  {
    slug: 'roadshow',
    changes: {
      descriptor: 'Satu program, banyak kota — pesan yang sama kuatnya dari titik pertama hingga terakhir.',
    },
  },

  // 4. Brand Activation — descriptor
  {
    slug: 'brand-activation',
    changes: {
      descriptor: 'Pengunjung bukan penonton — setiap interaksi dirancang untuk menciptakan ingatan yang milik brand.',
    },
  },

  // 5. Exhibition & Pameran — descriptor
  {
    slug: 'exhibition-pameran',
    changes: {
      descriptor: 'Booth yang memulai percakapan yang tepat — bukan sekadar display tiga dimensi.',
    },
  },

  // 6. Corporate Event Organizer — included[6] capitalisation fix
  {
    slug: 'corporate-event-organizer',
    changes: {
      'included[6]': 'Akses ke jaringan venue dan vendor terverifikasi Elevent',
    },
  },
]

/* ─── runner ────────────────────────────────────────────────────────── */

async function run() {
  console.log(`\n🔧  Patching ${PATCHES.length} service documents…\n`)

  let success = 0
  let failed  = 0

  for (const patch of PATCHES) {
    // Resolve _id from slug
    const doc = await client.fetch<{ _id: string } | null>(
      `*[_type == "service" && slug.current == $slug][0]{ _id }`,
      { slug: patch.slug }
    )

    if (!doc) {
      console.error(`  ❌  Not found in Sanity: ${patch.slug}`)
      failed++
      continue
    }

    try {
      await client.patch(doc._id).set(patch.changes).commit()

      const fieldList = Object.keys(patch.changes).join(', ')
      console.log(`  ✅  ${patch.slug}`)
      console.log(`       fields: ${fieldList}`)
      success++
    } catch (err) {
      console.error(`  ❌  ${patch.slug}:`, err)
      failed++
    }
  }

  console.log(`\n✨  Done. ${success} patched, ${failed} failed.\n`)
}

run().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
