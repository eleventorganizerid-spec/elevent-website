const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: '98jwav2j',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk76ZOtO2mXzNG7V2iUNXSH2Xm7atO8kE3pWrVn5Ygc25qU90QN0UPM0yLmC1Ef710qreEYPkPFbzpyZwDTbnHLUS0NDoLiO84ttCmmIZKbX4UvvDJwslbQaIgweNub7FLaptfCXpcQFtXxuJa5RSETGbDNLIYg77DJXqpnKYSzLYfWDV4FJ',
  useCdn: false,
})

async function run() {
  const services = await client.fetch(`
    *[_type == "service"] | order(number asc) {
      slug,
      number,
      title,
      taglineId,
      problemId,
      approachId,
      includedId,
      idealForId,
      faqs[] {
        questionId,
        answerId
      }
    }
  `)

  for (const s of services) {
    const slug = s.slug?.current ?? '(no slug)'
    console.log('='.repeat(72))
    console.log(`SLUG: ${slug}   NUMBER: ${s.number ?? '—'}   TITLE: ${s.title}`)
    console.log('='.repeat(72))

    console.log('\n— taglineId —')
    console.log(s.taglineId ?? '(empty)')

    console.log('\n— problemId —')
    console.log(s.problemId ?? '(empty)')

    console.log('\n— approachId —')
    console.log(s.approachId ?? '(empty)')

    console.log('\n— includedId —')
    if (s.includedId?.length) {
      s.includedId.forEach((item, i) => console.log(`  [${i + 1}] ${item}`))
    } else {
      console.log('(empty)')
    }

    console.log('\n— idealForId —')
    console.log(s.idealForId ?? '(empty)')

    if (s.faqs?.length) {
      console.log('\n— faqs —')
      s.faqs.forEach((faq, i) => {
        console.log(`\n  FAQ ${i + 1}`)
        console.log(`  questionId: ${faq.questionId ?? '(empty)'}`)
        console.log(`  answerId:   ${faq.answerId ?? '(empty)'}`)
      })
    } else {
      console.log('\n— faqs — (none)')
    }

    console.log('\n')
  }

  console.log(`Total: ${services.length} services exported.`)
}

run().catch((err) => {
  console.error('Export failed:', err.message)
  process.exit(1)
})
