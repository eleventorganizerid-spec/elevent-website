/**
 * fix-faq-copy.ts
 *
 * Patches FAQ copy on 6 service documents.
 * For string replacements: fetches current value, applies replace(), then sets.
 * For full FAQ replacement: sets all four text fields directly.
 *
 * Run: npx tsx --env-file=.env.local scripts/fix-faq-copy.ts
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('\n❌  SANITY_API_TOKEN is not set.')
  console.error('    Run: npx tsx --env-file=.env.local scripts/fix-faq-copy.ts\n')
  process.exit(1)
}

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ?? '98jwav2j',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET     ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token,
  useCdn:     false,
})

/* ─── types ─────────────────────────────────────────────────────────── */

interface Faq {
  _key:        string
  question?:   string
  questionId?: string
  answer?:     string
  answerId?:   string
}

interface ServiceDoc {
  _id:   string
  faqs?: Faq[]
}

/* ─── helpers ───────────────────────────────────────────────────────── */

function r(value: string | undefined, from: string, to: string): string {
  if (!value) throw new Error(`Field is empty — cannot apply replacement`)
  if (!value.includes(from)) throw new Error(`String not found: "${from}"`)
  return value.split(from).join(to)
}

function rAll(value: string | undefined, from: string, to: string): string {
  if (!value) throw new Error(`Field is empty — cannot apply replacement`)
  return value.split(from).join(to) // split/join replaces all occurrences
}

async function fetchService(slug: string): Promise<ServiceDoc> {
  const doc = await client.fetch<ServiceDoc | null>(
    `*[_type == "service" && slug.current == $slug][0]{
      _id,
      faqs[]{ _key, question, questionId, answer, answerId }
    }`,
    { slug }
  )
  if (!doc) throw new Error(`Service not found: ${slug}`)
  return doc
}

/* ─── patch runner ──────────────────────────────────────────────────── */

type PatchMap = Record<string, string>

async function applyPatch(slug: string, changes: PatchMap): Promise<void> {
  const doc = await fetchService(slug)
  await client.patch(doc._id).set(changes).commit()
  const fields = Object.keys(changes)
  console.log(`  ✅  ${slug}`)
  fields.forEach(f => console.log(`       ${f}`))
}

/* ─── main ──────────────────────────────────────────────────────────── */

async function run() {
  console.log('\n🔧  Patching FAQ copy on 6 services…\n')
  let failed = 0

  /* 1. conference-seminar
        faqs[0].questionId: "ELEVENT" → "Elevent"                       */
  try {
    const doc = await fetchService('conference-seminar')
    const f0  = doc.faqs?.[0]
    if (!f0) throw new Error('faqs[0] missing')
    await applyPatch('conference-seminar', {
      'faqs[0].questionId': r(f0.questionId, 'melibatkan ELEVENT untuk', 'melibatkan Elevent untuk'),
    })
  } catch (e) { console.error(`  ❌  conference-seminar:`, e); failed++ }

  /* 2. brand-activation
        faqs[1].answerId: "ELEVENT" → "Elevent"                         */
  try {
    const doc = await fetchService('brand-activation')
    const f1  = doc.faqs?.[1]
    if (!f1) throw new Error('faqs[1] missing')
    await applyPatch('brand-activation', {
      'faqs[1].answerId': r(f1.answerId, 'dengan ELEVENT sebagai', 'dengan Elevent sebagai'),
    })
  } catch (e) { console.error(`  ❌  brand-activation:`, e); failed++ }

  /* 3. corporate-event-organizer
        faqs[0].answerId + faqs[1].answerId: all "ELEVENT" → "Elevent"  */
  try {
    const doc = await fetchService('corporate-event-organizer')
    const f0  = doc.faqs?.[0]
    const f1  = doc.faqs?.[1]
    if (!f0) throw new Error('faqs[0] missing')
    if (!f1) throw new Error('faqs[1] missing')
    await applyPatch('corporate-event-organizer', {
      'faqs[0].answerId': rAll(f0.answerId, 'ELEVENT', 'Elevent'),
      'faqs[1].answerId': rAll(f1.answerId, 'ELEVENT', 'Elevent'),
    })
  } catch (e) { console.error(`  ❌  corporate-event-organizer:`, e); failed++ }

  /* 4. corporate-anniversary
        faqs[1].questionId, faqs[1].answerId (×2), faqs[2].answerId     */
  try {
    const doc = await fetchService('corporate-anniversary')
    const f1  = doc.faqs?.[1]
    const f2  = doc.faqs?.[2]
    if (!f1) throw new Error('faqs[1] missing')
    if (!f2) throw new Error('faqs[2] missing')

    let a1 = f1.answerId
    a1 = r(a1, 'Untuk peringatan besar (25, 50, atau 100 tahun)', 'Untuk anniversary besar (25, 50, atau 100 tahun)')
    a1 = r(a1, 'Peringatan yang direncanakan terburu-buru', 'Anniversary yang direncanakan terburu-buru')

    await applyPatch('corporate-anniversary', {
      'faqs[1].questionId': r(f1.questionId, 'peringatan korporat', 'acara anniversary korporat'),
      'faqs[1].answerId':   a1,
      'faqs[2].answerId':   r(f2.answerId, 'buku peringatan', 'buku anniversary'),
    })
  } catch (e) { console.error(`  ❌  corporate-anniversary:`, e); failed++ }

  /* 5. gala-dinner-award-night
        faqs[0]: questionId + answerId
        faqs[1]: questionId + answerId (all "upacara" → "acara")        */
  try {
    const doc = await fetchService('gala-dinner-award-night')
    const f0  = doc.faqs?.[0]
    const f1  = doc.faqs?.[1]
    if (!f0) throw new Error('faqs[0] missing')
    if (!f1) throw new Error('faqs[1] missing')

    await applyPatch('gala-dinner-award-night', {
      'faqs[0].questionId': r(f0.questionId,  'dalam satu upacara',               'dalam satu malam penghargaan'),
      'faqs[0].answerId':   r(f0.answerId,    'Kami telah memproduksi upacara dengan', 'Kami telah mengelola malam penghargaan dengan'),
      'faqs[1].questionId': r(f1.questionId,  'dalam upacara',                    'dalam acara'),
      'faqs[1].answerId':   rAll(f1.answerId, 'upacara',                          'acara'),
    })
  } catch (e) { console.error(`  ❌  gala-dinner-award-night:`, e); failed++ }

  /* 6. corporate-event
        faqs[1] (key: faq-ce-2) — full replacement of all four fields   */
  try {
    await applyPatch('corporate-event', {
      'faqs[1].question':   'Can you work alongside our internal event team?',
      'faqs[1].answer':     'Yes. We integrate with internal teams on both sides — as the lead and as support. We adapt to your governance structure.',
      'faqs[1].questionId': 'Bisakah Anda bekerja bersama tim event internal kami?',
      'faqs[1].answerId':   'Ya. Kami bisa masuk sebagai lead atau sebagai support bagi tim internal Anda — tergantung kebutuhan dan struktur governance perusahaan. Yang penting, satu titik akuntabilitas tetap jelas dari awal.',
    })
  } catch (e) { console.error(`  ❌  corporate-event:`, e); failed++ }

  console.log(`\n✨  Done. ${6 - failed} patched, ${failed} failed.\n`)
}

run().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
