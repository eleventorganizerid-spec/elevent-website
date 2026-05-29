/**
 * audit-services.ts
 * Reads all 16 services from Sanity and writes a copy audit to
 * scripts/service-copy-audit.txt
 *
 * Run: npx tsx --env-file=.env.local scripts/audit-services.ts
 */

import { createClient } from '@sanity/client'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '98jwav2j',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
})

interface ServiceFull {
  _id:        string
  title:      string
  slug:       { current: string }
  number:     string
  tier:       string
  tagline?:   string
  descriptor?: string
  problem?:   string
  approach?:  string
  included?:  string[]
  idealFor?:  string
}

const query = `
  *[_type == "service"] | order(number asc) {
    _id,
    title,
    slug,
    number,
    tier,
    tagline,
    descriptor,
    problem,
    approach,
    included,
    idealFor
  }
`

function hr(char = '─', width = 72) {
  return char.repeat(width)
}

function section(label: string, value: string | undefined) {
  if (!value?.trim()) return `  ${label}: (empty)\n`
  return `  ${label}:\n    ${value.trim().replace(/\n/g, '\n    ')}\n`
}

async function run() {
  console.log('Fetching services from Sanity…')
  const services = await client.fetch<ServiceFull[]>(query)

  const lines: string[] = []

  lines.push('SERVICE COPY AUDIT')
  lines.push(`Generated: ${new Date().toISOString()}`)
  lines.push(`Total services fetched: ${services.length}`)
  lines.push(hr('═'))
  lines.push('')

  for (const s of services) {
    lines.push(`${s.number}  ${s.title}`)
    lines.push(`  slug:   ${s.slug.current}`)
    lines.push(`  tier:   ${s.tier ?? '—'}`)
    lines.push(hr())
    lines.push(section('TAGLINE',    s.tagline))
    lines.push(section('DESCRIPTOR', s.descriptor))
    lines.push(section('PROBLEM',    s.problem))
    lines.push(section('APPROACH',   s.approach))

    if (s.included?.length) {
      lines.push('  INCLUDED:')
      s.included.forEach((item, i) => {
        lines.push(`    ${String(i + 1).padStart(2, '0')}. ${item}`)
      })
      lines.push('')
    } else {
      lines.push('  INCLUDED: (empty)\n')
    }

    lines.push(section('IDEAL FOR',  s.idealFor))
    lines.push(hr('═'))
    lines.push('')
  }

  const output = lines.join('\n')
  const outPath = resolve('scripts/service-copy-audit.txt')
  writeFileSync(outPath, output, 'utf8')

  console.log(`\n✅  ${services.length} services written to scripts/service-copy-audit.txt\n`)

  // Also print to terminal
  console.log(output)
}

run().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
