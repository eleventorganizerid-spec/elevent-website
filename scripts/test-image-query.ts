/**
 * test-image-query.ts
 *
 * Fetches a single service from Sanity and prints the raw
 * heroImage field structure so we can see exactly what
 * GROQ returns for that field.
 *
 * Run: npx tsx --env-file=.env.local scripts/test-image-query.ts
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ?? '98jwav2j',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET     ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token:      process.env.SANITY_API_TOKEN,
  useCdn:     false,
})

async function run() {
  console.log('\n─── Test 1: raw heroImage (current servicesQuery projection) ───\n')

  const raw = await client.fetch(
    `*[_type == "service" && slug.current == "corporate-event"][0] {
      _id,
      title,
      slug,
      heroImage
    }`
  )
  console.log(JSON.stringify(raw, null, 2))

  console.log('\n─── Test 2: heroImage with asset-> dereference ───\n')

  const dereffed = await client.fetch(
    `*[_type == "service" && slug.current == "corporate-event"][0] {
      _id,
      title,
      slug,
      heroImage {
        asset-> {
          _id,
          url
        }
      }
    }`
  )
  console.log(JSON.stringify(dereffed, null, 2))

  console.log('\n─── Test 3: count of services that have a heroImage ───\n')

  const counts = await client.fetch<{ total: number; withImage: number }>(
    `{
      "total":     count(*[_type == "service"]),
      "withImage": count(*[_type == "service" && defined(heroImage.asset)])
    }`
  )
  console.log(JSON.stringify(counts, null, 2))
}

run().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
