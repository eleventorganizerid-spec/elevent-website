/**
 * One-shot script: patch all homepage copy in Sanity.
 * Run with: npx ts-node --skip-project scripts/update-homepage-copy.ts
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '98jwav2j',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function main() {
  // ── 1. Homepage doc — heroSubcopy + whatWeDoBody ─────────────────────────
  const homepage = await client.fetch(`*[_type == "homepage"][0]{ _id }`)

  if (homepage?._id) {
    await client
      .patch(homepage._id)
      .set({
        heroSubcopy:
          'Elevent merancang corporate event seperti sutradara merancang film — setiap keputusan direncakan, setiap detail punya fungsi, setiap ruangan ditransformasi.',
        whatWeDoBody: [
          'Setiap event punya satu tujuan bisnis di baliknya. Kami mulai dari sana — bukan dari checklist vendor.',
          'Elevent mencocokkan setiap brief dengan tim spesialis yang telah menjalankan format yang sama berulang kali. Tidak ada generalis yang sedang belajar di proyek Anda.',
          'Satu kontak. Satu standar. Akuntabilitas penuh dari brief hingga ruangan terakhir ditutup.',
        ],
      })
      .commit()
    console.log('✓ Homepage doc updated')
  } else {
    // Create it if it doesn't exist
    await client.create({
      _type: 'homepage',
      heroSubcopy:
        'Elevent merancang corporate event seperti sutradara merancang film — setiap keputusan direncakan, setiap detail punya fungsi, setiap ruangan ditransformasi.',
      whatWeDoBody: [
        'Setiap event punya satu tujuan bisnis di baliknya. Kami mulai dari sana — bukan dari checklist vendor.',
        'Elevent mencocokkan setiap brief dengan tim spesialis yang telah menjalankan format yang sama berulang kali. Tidak ada generalis yang sedang belajar di proyek Anda.',
        'Satu kontak. Satu standar. Akuntabilitas penuh dari brief hingga ruangan terakhir ditutup.',
      ],
    })
    console.log('✓ Homepage doc created')
  }

  // ── 2. Services — patch descriptor by slug ───────────────────────────────
  const servicePatches: Record<string, string> = {
    'corporate-event':
      'Event skala besar — annual leadership, kick-off, dan perayaan korporat enterprise.',
    'product-launching':
      'Momen perkenalan — strategi narasi, panggung, dan media dalam satu eksekusi.',
    'gala-dinner-award-night':
      'Malam selebrasi — rangkaian penghargaan, hiburan, dan hospitality kelas eksekutif.',
    'conference-seminar':
      'Agenda terstruktur — kurasi pembicara, alur sesi, dan ritme yang menjaga perhatian.',
    'incentive-trip':
      'Perjalanan penghargaan eksklusif — naratif, lokasi, dan pengalaman yang diingat bertahun-tahun.',
  }

  for (const [slug, descriptor] of Object.entries(servicePatches)) {
    const doc = await client.fetch(
      `*[_type == "service" && slug.current == $slug][0]{ _id }`,
      { slug }
    )
    if (doc?._id) {
      await client.patch(doc._id).set({ descriptor }).commit()
      console.log(`✓ Service [${slug}] descriptor updated`)
    } else {
      console.warn(`⚠  Service [${slug}] not found in Sanity`)
    }
  }

  // ── 3. Featured case study (Shimizu) — audience + outcome ────────────────
  const shimizu = await client.fetch(
    `*[_type == "caseStudy" && featured == true][0]{ _id, title }`
  )

  if (shimizu?._id) {
    await client
      .patch(shimizu._id)
      .set({
        audience: '500 delegates — direksi Tokyo, mitra lokal, perwakilan pemerintah.',
        outcome:
          'Standing ovation spontan — momen yang tidak direncanakan, menjadi puncak emosional malam itu.',
      })
      .commit()
    console.log(`✓ Case study [${shimizu.title}] audience + outcome updated`)
  } else {
    console.warn('⚠  No featured case study found in Sanity')
  }

  console.log('\nAll Sanity patches complete.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
