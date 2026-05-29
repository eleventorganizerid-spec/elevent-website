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
      slug, number, title,
      faqs[] { questionId, answerId }
    }
  `)

  for (const s of services) {
    const slug = s.slug?.current ?? '(no slug)'
    console.log('='.repeat(72))
    console.log(`${s.number ?? '--'}  ${slug}  (${s.title})`)
    console.log('='.repeat(72))
    if (!s.faqs?.length) { console.log('  (no FAQs)\n'); continue }
    s.faqs.forEach((faq, i) => {
      console.log(`\n  FAQ ${i + 1}`)
      console.log(`  Q: ${faq.questionId ?? '(empty)'}`)
      console.log(`  A: ${faq.answerId   ?? '(empty)'}`)
    })
    console.log()
  }

  console.log(`Total: ${services.length} services exported.`)
}

run().catch(err => { console.error(err.message); process.exit(1) })
