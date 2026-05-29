/**
 * audit-faqs.ts
 * Fetches FAQ data for all 16 services and writes to
 * scripts/faq-copy-audit.txt
 *
 * Run: npx tsx --env-file=.env.local scripts/audit-faqs.ts
 */

import { createClient } from '@sanity/client'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ?? '98jwav2j',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET     ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token:      process.env.SANITY_API_TOKEN,
  useCdn:     false,
})

interface Faq {
  _key:        string
  question?:   string
  questionId?: string
  answer?:     string
  answerId?:   string
}

interface ServiceFaqs {
  _id:    string
  title:  string
  number: string
  slug:   { current: string }
  faqs?:  Faq[]
}

const query = `
  *[_type == "service"] | order(number asc) {
    _id,
    title,
    number,
    slug,
    faqs[] {
      _key,
      question,
      questionId,
      answer,
      answerId
    }
  }
`

function hr(char = '─', width = 72) { return char.repeat(width) }

function wrap(text: string, indent = '    ', width = 80): string {
  const words = text.trim().split(' ')
  const lines: string[] = []
  let line = indent

  for (const word of words) {
    if (line.length + word.length + 1 > width) {
      lines.push(line.trimEnd())
      line = indent + word + ' '
    } else {
      line += word + ' '
    }
  }
  if (line.trim()) lines.push(line.trimEnd())
  return lines.join('\n')
}

async function run() {
  console.log('Fetching FAQ data from Sanity…')
  const services = await client.fetch<ServiceFaqs[]>(query)

  const lines: string[] = []

  lines.push('FAQ COPY AUDIT')
  lines.push(`Generated: ${new Date().toISOString()}`)
  lines.push(`Services: ${services.length}`)
  lines.push(hr('═'))
  lines.push('')

  for (const s of services) {
    const faqCount = s.faqs?.length ?? 0

    lines.push(`${s.number}  ${s.title}`)
    lines.push(`  slug: ${s.slug.current}  ·  ${faqCount} FAQ${faqCount !== 1 ? 's' : ''}`)
    lines.push(hr())

    if (!faqCount) {
      lines.push('  (no FAQs)')
      lines.push('')
      lines.push(hr('═'))
      lines.push('')
      continue
    }

    for (const [i, faq] of (s.faqs ?? []).entries()) {
      lines.push(`  FAQ ${i + 1}  [key: ${faq._key}]`)
      lines.push('')

      // English
      if (faq.question) {
        lines.push('  Q (EN):')
        lines.push(wrap(faq.question))
      } else {
        lines.push('  Q (EN): (empty)')
      }

      if (faq.answer) {
        lines.push('  A (EN):')
        lines.push(wrap(faq.answer))
      } else {
        lines.push('  A (EN): (empty)')
      }

      lines.push('')

      // Indonesian
      if (faq.questionId) {
        lines.push('  Q (ID):')
        lines.push(wrap(faq.questionId))
      } else {
        lines.push('  Q (ID): (empty)')
      }

      if (faq.answerId) {
        lines.push('  A (ID):')
        lines.push(wrap(faq.answerId))
      } else {
        lines.push('  A (ID): (empty)')
      }

      if (i < faqCount - 1) {
        lines.push('')
        lines.push('  ' + '·'.repeat(36))
      }
      lines.push('')
    }

    lines.push(hr('═'))
    lines.push('')
  }

  const output = lines.join('\n')
  const outPath = resolve('scripts/faq-copy-audit.txt')
  writeFileSync(outPath, output, 'utf8')

  console.log(`\n✅  ${services.length} services written to scripts/faq-copy-audit.txt\n`)
  console.log(output)
}

run().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
