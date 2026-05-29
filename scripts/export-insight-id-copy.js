const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: '98jwav2j',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76ZOtO2mXzNG7V2iUNXSH2Xm7atO8kE3pWrVn5Ygc25qU90QN0UPM0yLmC1Ef710qreEYPkPFbzpyZwDTbnHLUS0NDoLiO84ttCmmIZKbX4UvvDJwslbQaIgweNub7FLaptfCXpcQFtXxuJa5RSETGbDNLIYg77DJXqpnKYSzLYfWDV4FJ',
  useCdn: false,
})

// Extract plain text from Sanity portable text (block array)
function blocksToText(blocks) {
  if (!blocks || !blocks.length) return '(empty)'
  return blocks
    .map(block => {
      if (block._type !== 'block') return `[${block._type}]`
      const text = (block.children || []).map(c => c.text || '').join('')
      const style = block.style || 'normal'
      const prefix = style.startsWith('h') ? `${'#'.repeat(parseInt(style[1]))} ` : ''
      return prefix + text
    })
    .filter(t => t.trim() !== '')
    .join('\n\n')
}

async function run() {
  const docs = await client.fetch(`
    *[_type == "insight"] | order(publishedAt desc) {
      slug, publishedAt, titleId,
      excerpt,
      body
    }
  `)

  for (const d of docs) {
    const slug = d.slug?.current ?? '(no slug)'
    const date = d.publishedAt ? d.publishedAt.slice(0, 10) : '--'
    console.log('='.repeat(72))
    console.log(`SLUG: ${slug}   DATE: ${date}`)
    console.log('='.repeat(72))

    console.log('\n— titleId —')
    console.log(d.titleId ?? '(empty)')

    console.log('\n— excerpt (ID) —')
    console.log(d.excerpt ?? '(empty)')

    console.log('\n— body (ID) plain text —')
    console.log(blocksToText(d.body))

    console.log('\n')
  }

  console.log(`Total: ${docs.length} insight documents exported.`)
}

run().catch(err => { console.error(err.message); process.exit(1) })
