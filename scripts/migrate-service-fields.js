// migrate-service-fields.js
// Copies existing ID content (tagline, problem, approach, included, idealFor)
// into the new *Id fields for all service documents.
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
  const services = await client.fetch(
    `*[_type == "service"] { _id, slug, tagline, taglineId, problem, problemId, approach, approachId, included, includedId, idealFor, idealForId }`
  )

  console.log(`Found ${services.length} service documents.\n`)

  let patched = 0
  let skipped = 0

  for (const svc of services) {
    const slug = svc.slug?.current ?? svc._id
    const patch = {}

    if (svc.tagline && !svc.taglineId)       patch.taglineId  = svc.tagline
    if (svc.problem && !svc.problemId)       patch.problemId  = svc.problem
    if (svc.approach && !svc.approachId)     patch.approachId = svc.approach
    if (svc.included?.length && !svc.includedId?.length) patch.includedId = svc.included
    if (svc.idealFor && !svc.idealForId)     patch.idealForId = svc.idealFor

    if (Object.keys(patch).length === 0) {
      console.log(`  SKIP  ${slug}`)
      skipped++
      continue
    }

    await client.patch(svc._id).set(patch).commit()
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
