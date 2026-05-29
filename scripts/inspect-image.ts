import { createClient } from '@sanity/client'

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ?? '98jwav2j',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET     ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token:      process.env.SANITY_API_TOKEN,
  useCdn:     false,
})

async function run() {
  // Fetch one service that has a heroImage
  const doc = await client.fetch(
    `*[_type == "service" && defined(heroImage)][0]{ _id, title, slug, heroImage }`
  )

  if (!doc) {
    console.log('No service with heroImage found.')
    // Also print all services and whether they have heroImage
    const all = await client.fetch(
      `*[_type == "service"] | order(number asc){ _id, title, slug, "hasImage": defined(heroImage) }`
    )
    console.log('\nAll services:')
    console.log(JSON.stringify(all, null, 2))
    return
  }

  console.log('Service:', doc.title, '|', doc.slug?.current)
  console.log('\nFull heroImage field:')
  console.log(JSON.stringify(doc.heroImage, null, 2))
}

run().catch(console.error)
