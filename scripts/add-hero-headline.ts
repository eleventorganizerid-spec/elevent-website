/**
 * add-hero-headline.ts
 *
 * Patches the Shimizu case study with a headlineHero value
 * for use in the homepage featured case study component.
 *
 * Run: npx tsx --env-file=.env.local scripts/add-hero-headline.ts
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('\n❌  SANITY_API_TOKEN is not set.')
  console.error('    Run: npx tsx --env-file=.env.local scripts/add-hero-headline.ts\n')
  process.exit(1)
}

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ?? '98jwav2j',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET     ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token,
  useCdn: false,
})

const SLUG    = 'shimizu-corporation-50th-anniversary'
const HEADLINE = 'Fifty years.\nOne night.\nFive hundred witnesses.'

async function run() {
  console.log(`\n🖊️   Patching headlineHero for: ${SLUG}\n`)

  const doc = await client.fetch<{ _id: string } | null>(
    `*[_type == "caseStudy" && slug.current == $slug][0]{ _id }`,
    { slug: SLUG }
  )

  if (!doc) {
    console.error(`❌  Case study not found in Sanity: ${SLUG}`)
    process.exit(1)
  }

  await client
    .patch(doc._id)
    .set({ headlineHero: HEADLINE })
    .commit()

  console.log(`✅  headlineHero set on ${doc._id}`)
  console.log(`\n    Preview:\n`)
  HEADLINE.split('\n').forEach(line => console.log(`    ${line}`))
  console.log()
}

run().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
