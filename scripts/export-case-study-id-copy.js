const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: '98jwav2j',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76ZOtO2mXzNG7V2iUNXSH2Xm7atO8kE3pWrVn5Ygc25qU90QN0UPM0yLmC1Ef710qreEYPkPFbzpyZwDTbnHLUS0NDoLiO84ttCmmIZKbX4UvvDJwslbQaIgweNub7FLaptfCXpcQFtXxuJa5RSETGbDNLIYg77DJXqpnKYSzLYfWDV4FJ',
  useCdn: false,
})

async function run() {
  const docs = await client.fetch(`
    *[_type == "caseStudy"] | order(year desc) {
      slug, year, title,
      titleId,
      audienceId,
      outcomeId,
      challenge,
      approach,
      execution,
      result,
      clientQuoteId
    }
  `)

  for (const d of docs) {
    const slug = d.slug?.current ?? '(no slug)'
    console.log('='.repeat(72))
    console.log(`SLUG: ${slug}   YEAR: ${d.year ?? '--'}   TITLE: ${d.title}`)
    console.log('='.repeat(72))

    console.log('\n— titleId —')
    console.log(d.titleId ?? '(empty)')

    console.log('\n— audienceId —')
    console.log(d.audienceId ?? '(empty)')

    console.log('\n— outcomeId —')
    console.log(d.outcomeId ?? '(empty)')

    console.log('\n— challenge (ID) —')
    console.log(d.challenge ?? '(empty)')

    console.log('\n— approach (ID) —')
    console.log(d.approach ?? '(empty)')

    console.log('\n— execution (ID) —')
    if (d.execution?.length) {
      d.execution.forEach((item, i) => console.log(`  [${i + 1}] ${item}`))
    } else {
      console.log('(empty)')
    }

    console.log('\n— result (ID) —')
    console.log(d.result ?? '(empty)')

    console.log('\n— clientQuoteId —')
    console.log(d.clientQuoteId ?? '(empty)')

    console.log('\n')
  }

  console.log(`Total: ${docs.length} case study documents exported.`)
}

run().catch(err => { console.error(err.message); process.exit(1) })
