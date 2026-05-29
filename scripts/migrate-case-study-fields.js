// migrate-case-study-fields.js
// Copies existing EN content (title, headlineHero, audience, outcome, clientQuote)
// into the new *Id fields for all caseStudy documents.
// Safe to re-run: only patches documents where *Id field is missing/empty.

const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: '98jwav2j',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76ZOtO2mXzNG7V2iUNXSH2Xm7atO8kE3pWrVn5Ygc25qU90QN0UPM0yLmC1Ef710qreEYPkPFbzpyZwDTbnHLUS0NDoLiO84ttCmmIZKbX4UvvDJwslbQaIgweNub7FLaptfCXpcQFtXxuJa5RSETGbDNLIYg77DJXqpnKYSzLYfWDV4FJ',
  useCdn: false,
})

async function run() {
  const docs = await client.fetch(
    `*[_type == "caseStudy"] {
      _id,
      slug,
      title, titleId,
      headlineHero, headlineHeroId,
      audience, audienceId,
      outcome, outcomeId,
      clientQuote, clientQuoteId
    }`
  )

  console.log(`Found ${docs.length} caseStudy documents.\n`)

  let patched = 0
  let skipped = 0

  for (const doc of docs) {
    const slug = doc.slug?.current ?? doc._id
    const patch = {}

    if (doc.title        && !doc.titleId)        patch.titleId        = doc.title
    if (doc.headlineHero && !doc.headlineHeroId) patch.headlineHeroId = doc.headlineHero
    if (doc.audience     && !doc.audienceId)     patch.audienceId     = doc.audience
    if (doc.outcome      && !doc.outcomeId)      patch.outcomeId      = doc.outcome
    if (doc.clientQuote  && !doc.clientQuoteId)  patch.clientQuoteId  = doc.clientQuote

    if (Object.keys(patch).length === 0) {
      console.log(`  SKIP  ${slug}`)
      skipped++
      continue
    }

    await client.patch(doc._id).set(patch).commit()
    const fields = Object.keys(patch).join(', ')
    console.log(`  ✓     ${slug}  →  set: ${fields}`)
    patched++
  }

  console.log(`\nDone. Patched: ${patched}  Skipped: ${skipped}`)
}

run().catch((err) => {
  console.error('Migration failed:', err.message)
  process.exit(1)
})
