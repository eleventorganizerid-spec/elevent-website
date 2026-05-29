# ELEVENT WEBSITE — COMPLETE PROJECT SNAPSHOT
Generated: 2026-05-25

---

## 1. GIT LOG

```
1991112 Initial commit from Create Next App
```

Only one commit. All subsequent work was done without additional commits.

---

## 2. FILE TREE

```
elevent-website/
├── app/
│   ├── about/
│   │   ├── about.module.css
│   │   └── page.tsx
│   ├── contact/
│   │   ├── contact.module.css
│   │   └── page.tsx
│   ├── get-a-proposal/
│   │   ├── ProposalForm.tsx          ← 'use client' controlled form
│   │   ├── page.module.css
│   │   └── page.tsx
│   ├── insights/
│   │   ├── [slug]/
│   │   │   ├── article.module.css
│   │   │   └── page.tsx
│   │   ├── insights.module.css
│   │   └── page.tsx
│   ├── services/
│   │   ├── [slug]/
│   │   │   ├── ServiceFAQ.module.css
│   │   │   ├── ServiceFAQ.tsx        ← 'use client' accordion
│   │   │   ├── page.module.css
│   │   │   └── page.tsx
│   │   ├── page.module.css
│   │   ├── page.tsx
│   │   └── services.module.css
│   ├── work/
│   │   ├── [slug]/
│   │   │   ├── page.module.css
│   │   │   └── page.tsx
│   │   ├── page.module.css
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.module.css
│   └── page.tsx
├── components/
│   ├── home/
│   │   ├── CTASection.module.css
│   │   ├── CTASection.tsx
│   │   ├── CaseStudy.module.css
│   │   ├── CaseStudy.tsx             ← uses Sanity data (featured case study)
│   │   ├── FAQ.module.css
│   │   ├── FAQ.tsx                   ← 'use client' accordion
│   │   ├── Gallery.module.css
│   │   ├── Gallery.tsx               ← built but NOT used in homepage
│   │   ├── Hero.module.css
│   │   ├── Hero.tsx
│   │   ├── LatestInsights.module.css
│   │   ├── LatestInsights.tsx        ← uses Sanity data (insights[])
│   │   ├── Services.module.css
│   │   ├── Services.tsx              ← uses Sanity data (services[])
│   │   ├── Testimonial.module.css
│   │   ├── Testimonial.tsx
│   │   ├── TrustBar.module.css
│   │   ├── TrustBar.tsx
│   │   ├── WhatWeDo.module.css
│   │   ├── WhatWeDo.tsx
│   │   ├── WhyElevent.module.css
│   │   └── WhyElevent.tsx
│   ├── layout/
│   │   ├── Footer.module.css
│   │   ├── Footer.tsx
│   │   ├── Navigation.module.css
│   │   └── Navigation.tsx            ← 'use client', scroll-aware, forceDark prop
│   ├── services/
│   │   ├── ServicesGrid.module.css
│   │   └── ServicesGrid.tsx          ← 'use client', filter bar + grid
│   └── ui/
│       ├── Button.module.css
│       ├── Button.tsx
│       ├── WhatsAppButton.module.css
│       └── WhatsAppButton.tsx
├── lib/
│   ├── data.ts                       ← static fallback data (services, faq, whyElevent, trustBrands)
│   ├── queries.ts                    ← all GROQ queries
│   └── types.ts                      ← TypeScript interfaces
├── sanity/
│   ├── schemas/
│   │   ├── caseStudy.ts
│   │   ├── homepage.ts
│   │   ├── index.ts
│   │   ├── insight.ts
│   │   ├── service.ts
│   │   ├── siteSettings.ts
│   │   └── teamMember.ts
│   ├── client.ts
│   ├── config.ts
│   ├── image.ts
│   └── (sanity.config.ts, sanity.cli.ts at root)
├── scripts/                          ← Sanity data management scripts (run with npx tsx)
│   ├── add-hero-headline.ts
│   ├── audit-faqs.ts
│   ├── audit-services.ts
│   ├── fix-faq-copy.ts
│   ├── fix-service-copy.ts
│   ├── import-case-studies.ts
│   ├── import-insights.ts
│   ├── import-missing-services.ts
│   ├── import-services.ts
│   ├── inspect-image.ts
│   ├── patch-missing-body.ts
│   ├── test-image-query.ts
│   ├── update-insight-dates.ts
│   ├── upload-casestudy-images.ts
│   ├── upload-insight-images.ts
│   ├── upload-insight-images-additional.ts
│   └── upload-service-images.ts
├── public/
├── .env.local                        ← NEXT_PUBLIC_SANITY_PROJECT_ID, etc.
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 3. PAGE COMPLETION STATUS

| Page | Route | Status | Notes |
|------|-------|--------|-------|
| Homepage | `/` | ✅ Complete | All 9 sections, Sanity data live |
| About | `/about` | ✅ Complete | 7 sections, static copy |
| Contact | `/contact` | ✅ Complete | Static — address, map placeholder, cities, CTA |
| Get a Proposal | `/get-a-proposal` | ✅ Complete | Form + trust signals, 'use client' |
| Services list | `/services` | ✅ Complete | ServicesGrid with filter bar, Sanity data |
| Service detail | `/services/[slug]` | ✅ Complete | 8 sections, Sanity data |
| Work list | `/work` | ✅ Complete | Card grid, Sanity data |
| Work detail | `/work/[slug]` | ✅ Complete | 9 sections, Sanity data |
| Insights list | `/insights` | ✅ Complete | Featured + grid, Sanity data |
| Insight detail | `/insights/[slug]` | ✅ Complete | Full article, portable text, related |

**Gallery component** (`components/home/Gallery.tsx`) — built but currently NOT included in homepage render. Can be inserted between any sections if needed.

---

## 4. DESIGN TOKENS (app/globals.css)

```css
:root {
  --chalk: #F7F4EF;
  --ink: #1C1C1E;
  --sienna: #C4622D;
  --sage: #8A9E8C;
  --stone: #7A7065;
  --rule: rgba(28, 28, 30, 0.14);
  --rule-dark: rgba(247, 244, 239, 0.16);
  --page-pad: clamp(20px, 4vw, 72px);
  --section-pad-y: clamp(72px, 8vw, 140px);
}
```

**Fonts** (loaded in `app/layout.tsx` via next/font/google):
- `--font-instrument-serif` → Instrument Serif (400, normal + italic)
- `--font-hanken-grotesk` → Hanken Grotesk (body)
- `--font-jetbrains-mono` → JetBrains Mono (labels, metadata)

---

## 5. KEY PATTERNS

### Image pattern (ALL images use this — no next/image except Hero + Testimonial + CTASection + Gallery)
```tsx
<div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
  <img
    src={url}
    alt={alt}
    style={{
      position: 'absolute', inset: 0,
      width: '100%', height: '100%',
      objectFit: 'cover',
      filter: 'saturate(0.85)',
    }}
  />
</div>
```

### Split header pattern (label left / headline right)
```tsx
<div className={styles.header}>
  <p className={styles.label}>04 — SERVICES</p>
  <h2 className={styles.headline}>Nine formats. <em>One standard.</em></h2>
</div>
```
```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 48px;
}
.label { font-family: var(--font-jetbrains-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--stone); }
.headline { font-family: var(--font-instrument-serif); font-size: clamp(28px, 3vw, 42px); font-weight: 400; color: var(--ink); max-width: 60%; text-align: right; }
```
**Used in:** Services, WhyElevent, FAQ, LatestInsights

### Grayscale hover (PENDING — not yet implemented)
Intended: `filter: grayscale(1)` default → `grayscale(0)` on hover, `transition: filter 0.6s ease`.
Currently all images still use `filter: saturate(0.85)` inline.

---

## 6. FULL FILE CONTENTS

---

### app/layout.tsx

```tsx
import type { Metadata } from 'next'
import { Instrument_Serif, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ELEVENT — Strategic Event Partner for Enterprise Indonesia',
  description: 'Elevent adalah mitra event strategis untuk perusahaan enterprise di Indonesia. Corporate event, gala dinner, conference, team building — Jakarta, Bali, Surabaya.',
  openGraph: {
    title: 'ELEVENT — Strategic Event Partner for Enterprise Indonesia',
    description: 'Elevent adalah mitra event strategis untuk perusahaan enterprise di Indonesia. Corporate event, gala dinner, conference, team building — Jakarta, Bali, Surabaya.',
    images: [{ url: '/assets/og-image.jpg' }],
  },
  alternates: { canonical: 'https://elevent.id' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${instrumentSerif.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

---

### app/page.tsx (Homepage)

```tsx
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import WhatWeDo from '@/components/home/WhatWeDo'
import Services from '@/components/home/Services'
import CaseStudy from '@/components/home/CaseStudy'
import WhyElevent from '@/components/home/WhyElevent'
import Testimonial from '@/components/home/Testimonial'
import FAQ from '@/components/home/FAQ'
import CTASection from '@/components/home/CTASection'
import LatestInsights from '@/components/home/LatestInsights'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { client } from '@/sanity/client'
import { servicesQuery, latestInsightsQuery, featuredCaseStudyQuery } from '@/lib/queries'
import type { SanityService, Insight, SanityCaseStudy } from '@/lib/types'

export default async function Home() {
  let sanityServices: SanityService[] | null = null
  let latestInsights: Insight[] = []
  let featuredCaseStudy: SanityCaseStudy | null = null

  try {
    ;[sanityServices, latestInsights, featuredCaseStudy] = await Promise.all([
      client.fetch<SanityService[]>(servicesQuery),
      client.fetch<Insight[]>(latestInsightsQuery),
      client.fetch<SanityCaseStudy | null>(featuredCaseStudyQuery),
    ])
  } catch {
    // Sanity unavailable — static fallback used in components
  }

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <WhatWeDo />
        <Services sanityServices={sanityServices ?? undefined} />
        <CaseStudy caseStudy={featuredCaseStudy} />
        <WhyElevent />
        <Testimonial />
        <FAQ />
        <LatestInsights insights={latestInsights} />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
```

Homepage section order:
1. Hero — `01 — THE BRIEF`
2. TrustBar — `02 — TRUSTED BY`
3. WhatWeDo — `03 — WHAT WE DO`
4. Services — `04 — SERVICES`
5. CaseStudy — `05 — FEATURED WORK`
6. WhyElevent — `06 — WHY ELEVENT`
7. Testimonial — `07 — IN THEIR WORDS`
8. FAQ — `08 — QUESTIONS`
9. LatestInsights (no number label — uses "INSIGHTS")
10. CTASection — `09 — BEGIN`

---

### app/globals.css

```css
:root {
  --chalk: #F7F4EF;
  --ink: #1C1C1E;
  --sienna: #C4622D;
  --sage: #8A9E8C;
  --stone: #7A7065;
  --rule: rgba(28, 28, 30, 0.14);
  --rule-dark: rgba(247, 244, 244, 0.16);
  --page-pad: clamp(20px, 4vw, 72px);
  --section-pad-y: clamp(72px, 8vw, 140px);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; overflow-x: hidden; }
body { background-color: var(--chalk); color: var(--ink); font-family: var(--font-hanken-grotesk), system-ui, sans-serif; font-size: 17px; line-height: 1.55; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
img, video { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { cursor: pointer; border: none; background: none; font: inherit; }
ul, ol { list-style: none; }
```

---

### sanity/client.ts

```ts
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '98jwav2j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  useCdn: false,
})
```

---

### next.config.ts

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

export default nextConfig
```

---

### lib/types.ts

```ts
export interface SanitySlug { current: string }

export interface SanityImageAsset {
  _ref?: string
  _type?: 'reference'
  _id?: string
  url?: string
}

export interface SanityImage {
  _type: 'image'
  asset: SanityImageAsset
  hotspot?: { x: number; y: number; height: number; width: number }
}

export interface SanityService {
  _id: string
  title: string
  titleId?: string
  slug: SanitySlug
  number: string
  descriptor?: string
  descriptorEn?: string
  tagline?: string
  heroImage?: SanityImage
  tier?: 'tier1' | 'tier2'
}

export interface SanityServiceFull extends SanityService {
  problem?: string
  approach?: string
  included?: string[]
  idealFor?: string
  faqs?: Array<{
    question?: string
    questionId?: string
    answer?: string
    answerId?: string
  }>
  seoTitle?: string
  seoDescription?: string
}

export interface SanityCaseStudy {
  _id: string
  title: string
  headlineHero?: string
  slug: SanitySlug
  client?: string
  format?: string
  audience?: string
  cities?: string
  outcome?: string
  outcomeNumber?: string
  heroImage?: SanityImage
  galleryImages?: SanityImage[]
  brief?: string
  briefEn?: string
  challenge?: string
  challengeEn?: string
  approach?: string
  approachEn?: string
  execution?: string[]
  executionEn?: string[]
  result?: string
  resultEn?: string
  clientQuote?: string
  clientQuoteName?: string
  clientQuoteAttribution?: string
  year?: number
  featured?: boolean
  eventType?: { title: string; slug: SanitySlug }
}

export interface SanityInsight {
  _id: string
  title: string
  titleId?: string
  slug: SanitySlug
  publishedAt?: string
  category?: string
  coverImage?: SanityImage
  excerpt?: string
  excerptEn?: string
}

export interface Insight {
  _id: string
  title: string
  titleId?: string
  slug: { current: string }
  publishedAt: string
  category?: string
  excerpt?: string
  coverImage?: { asset?: { _id: string; url: string } }
  body?: any[]
}
```

---

### lib/queries.ts

```ts
export const homepageQuery = `*[_type == "homepage"][0] { heroHeadline, heroHeadlineId, heroSubcopy, heroSubcopyEn, trustBarHeadline, trustBarBrands, whatWeDoHeadline, whatWeDoBody, whatWeDoBodyEn }`

export const servicesQuery = `
  *[_type == "service"] | order(tier asc, number asc) {
    _id, title, titleId, slug, number, descriptor, descriptorEn, tagline,
    heroImage { asset-> { _id, url } }, tier,
  }
`

export const serviceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id, title, titleId, slug, number, descriptor, descriptorEn, tagline,
    problem, approach, included, idealFor,
    heroImage { asset-> { _id, url } }, tier,
    faqs[] { question, questionId, answer, answerId },
    seoTitle, seoDescription,
  }
`

export const featuredCaseStudyQuery = `
  *[_type == "caseStudy" && featured == true][0] {
    _id, title, headlineHero, slug, client, format, audience, cities, outcome, outcomeNumber,
    heroImage { asset-> { _id, url } },
    brief, briefEn, year,
    eventType-> { title, slug },
  }
`

export const latestInsightsQuery = `
  *[_type == "insight"] | order(publishedAt desc) [0...3] {
    _id, title, titleId, slug, publishedAt, category, excerpt,
    coverImage { asset-> { _id, url } }
  }
`

export const insightsQuery = `
  *[_type == "insight"] | order(publishedAt desc) {
    _id, title, titleId, slug, publishedAt, category, excerpt,
    coverImage { asset-> { _id, url } }
  }
`

export const articleBySlugQuery = `
  *[_type == "insight" && slug.current == $slug][0] {
    _id, title, titleId, slug, publishedAt, category, excerpt,
    coverImage { asset-> { _id, url } }, body
  }
`

export const relatedInsightsQuery = `
  *[_type == "insight" && slug.current != $slug] | order(publishedAt desc) [0...3] {
    _id, title, titleId, slug, publishedAt, category, excerpt,
    coverImage { asset-> { _id, url } }
  }
`

export const allCaseStudiesQuery = `
  *[_type == "caseStudy"] | order(year desc) {
    _id, title, slug, client, format, audience, outcome, outcomeNumber,
    heroImage { asset-> { _id, url } },
    year, featured, eventType-> { title, slug },
  }
`

export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id, title, slug, client, format, audience, cities, outcome, outcomeNumber,
    heroImage { asset-> { _id, url } },
    galleryImages[] { asset-> { _id, url } },
    brief, briefEn, challenge, challengeEn, approach, approachEn,
    execution, executionEn, result, resultEn,
    clientQuote, clientQuoteName, clientQuoteAttribution,
    year, featured, eventType-> { title, slug },
  }
`

export const relatedCaseStudiesQuery = `
  *[_type == "caseStudy" && slug.current != $slug] | order(year desc)[0...2] {
    _id, title, slug, client, format, year, outcomeNumber,
    heroImage { asset-> { _id, url } },
  }
`
```

---

### lib/data.ts (static fallback data)

```ts
export const services = [
  { number: '01/09', name: 'Corporate Event', slug: 'corporate-event', ... },
  { number: '02/09', name: 'Corporate Gathering', slug: 'corporate-gathering', ... },
  { number: '03/09', name: 'Product Launching', slug: 'product-launching', ... },
  { number: '04/09', name: 'Gala Dinner & Award Night', slug: 'gala-dinner-award-night', ... },
  { number: '05/09', name: 'Conference & Seminar', slug: 'conference-seminar', ... },
  { number: '06/09', name: 'Team Building', slug: 'team-building', ... },
  { number: '07/09', name: 'MICE & Hospitality', slug: 'mice-hospitality', ... },
  { number: '08/09', name: 'Hybrid & Virtual Event', slug: 'hybrid-virtual-event', ... },
  { number: '09/09', name: 'Incentive Trip', slug: 'incentive-trip', ... },
]

export const faqItems = [
  { number: 'i.', question: 'Apa yang membedakan Elevent dari EO lain?', answer: '...' },
  { number: 'ii.', question: 'Berapa budget untuk corporate event enterprise di Jakarta?', answer: '...' },
  { number: 'iii.', question: 'Berapa lama persiapan ideal untuk 1.000+ peserta?', answer: '...' },
  { number: 'iv.', question: 'Apakah Elevent menangani hybrid dan virtual event?', answer: '...' },
  { number: 'v.', question: 'Di kota mana Elevent beroperasi?', answer: '...' },
  { number: 'vi.', question: 'Bagaimana proses dari brief ke eksekusi?', answer: '...' },
  { number: 'vii.', question: 'Apakah Elevent bisa NDA sebelum proposal?', answer: '...' },
]

export const whyEleventBlocks = [
  { numeral: 'I', title: 'We have opinions about your event.', titleSuffix: 'Strong ones.', body: '...' },
  { numeral: 'II', titlePrefix: 'Execution', title: 'without direction is just logistics.', body: '...' },
  { numeral: 'III', title: "The best corporate events don't feel like corporate events.", body: '...' },
]

export const trustBrands = [
  { name: 'Garuda Capital', style: 'serifItalic' },
  { name: 'Bank Nusantara', style: 'sansUpper' },
  { name: 'PT Astra Group', style: 'mono' },
  // ... 9 more
]
```

---

## 7. HOMEPAGE COMPONENTS

### components/home/Hero.tsx
- **Layout:** Full-viewport dark section with background image (`next/image` fill) + video overlay
- **Data:** 100% static copy
- **Key:** Video hidden on mobile. `filter: saturate(0.85)` on all media.
- **Headline:** "Most corporate events / are forgotten by Monday. / *Yours won't be.*" (3 staggered lines)
- **Meta bar:** MODEL · TIER · SCOPE at bottom

### components/home/Hero.module.css
```css
.hero { position: relative; min-height: 100vh; background: var(--ink); display: flex; flex-direction: column; justify-content: center; overflow: hidden; }
.overlay { position: absolute; inset: 0; background: rgba(28,28,30, 0.62); z-index: 2; }
.content { position: relative; z-index: 3; padding: 0 var(--page-pad); padding-top: 120px; padding-bottom: 120px; max-width: 1400px; }
.headline { display: flex; flex-direction: column; font-family: var(--font-instrument-serif); font-size: clamp(42px, 6.5vw, 96px); font-weight: 400; line-height: 1.06; color: var(--chalk); }
.line2 { margin-left: 6vw; }
.line3 { margin-left: 2vw; font-style: italic; }
.btnPrimary { font-family: var(--font-jetbrains-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; background: var(--sienna); color: var(--chalk); padding: 16px 32px; }
.meta { position: relative; z-index: 3; display: flex; align-items: stretch; border-top: 1px solid var(--rule-dark); padding: 0 var(--page-pad); }
```

---

### components/home/TrustBar.tsx
- **Layout:** Split header + logo grid (12 brand names styled as serif/mono/sans-upper)
- **Data:** `trustBrands` from `lib/data.ts` — static placeholder names

### components/home/WhatWeDo.tsx
- **Layout:** Two-column split — left: label + headline, right: 3 body paragraphs
- **Data:** Static copy (Indonesian)

### components/home/WhatWeDo.module.css
```css
.section { background: var(--chalk); overflow: hidden; }
.grid { display: grid; grid-template-columns: 4fr 5fr; min-height: clamp(360px, 44vw, 580px); }
.colHeadline { padding: var(--section-pad-y) var(--page-pad); display: flex; flex-direction: column; justify-content: center; gap: 32px; border-right: 1px solid var(--rule); }
.headline { font-family: var(--font-instrument-serif); font-size: clamp(40px, 5vw, 72px); font-weight: 400; line-height: 1.15; color: var(--ink); }
.colBody { padding: var(--section-pad-y) clamp(24px, 3vw, 56px); display: flex; flex-direction: column; justify-content: center; gap: 24px; }
.bodyText { font-family: var(--font-hanken-grotesk); font-size: 16px; line-height: 1.7; color: var(--stone); }
@media (max-width: 767px) { .grid { grid-template-columns: 1fr; } .colHeadline { border-right: none; border-bottom: 1px solid var(--rule); } }
```

---

### components/home/Services.tsx
- **Layout:** Split header + list rows (number | service name | EXPLORE →)
- **Data:** Sanity `servicesQuery` → fallback to `lib/data.ts` static services
- **Key:** Last word of service name wrapped in `<em>`. Numbers formatted `01 / 09`.

### components/home/Services.module.css
```css
.section { background: var(--chalk); padding: var(--section-pad-y) var(--page-pad) 0; }
.header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 48px; }
.headline { font-family: var(--font-instrument-serif); font-size: clamp(28px, 3vw, 42px); font-weight: 400; color: var(--ink); max-width: 60%; text-align: right; }
.row { display: grid; grid-template-columns: 100px 1fr auto; align-items: center; gap: 32px; padding: 28px 0; border-bottom: 1px solid var(--rule); text-decoration: none; color: inherit; }
.row:first-child { border-top: 1px solid var(--rule); }
.rowNumber { font-family: var(--font-jetbrains-mono); font-size: 11px; letter-spacing: 0.12em; color: var(--stone); white-space: nowrap; }
.rowName { font-family: var(--font-instrument-serif); font-size: clamp(24px, 2.5vw, 36px); font-weight: 400; color: var(--ink); line-height: 1.2; transition: color 0.2s ease; }
.rowArrow { font-family: var(--font-jetbrains-mono); font-size: 11px; color: var(--stone); text-align: right; transition: color 0.2s ease; }
.row:hover .rowArrow { color: var(--sienna); }
.footer { display: flex; justify-content: flex-end; padding: clamp(32px, 4vw, 48px) 0; }
.footerLink { font-family: var(--font-jetbrains-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink); text-decoration: underline; text-underline-offset: 4px; }
.footerLink:hover { color: var(--sienna); }
@media (max-width: 767px) { .row { grid-template-columns: 56px 1fr; gap: 16px; } .rowArrow { display: none; } }
```

---

### components/home/CaseStudy.tsx
- **Layout:** Dark section — inner text (label + headline + meta), full-bleed photo, inner body (quote + data table + CTA)
- **Data:** Sanity `featuredCaseStudyQuery` — passes `SanityCaseStudy | null` from `app/page.tsx`
- **Key:** `headlineHero` field — multi-line narrative headline split on `\n` into `<span style={{display:'block'}}>`; falls back to `title`

### components/home/CaseStudy.module.css
```css
.section { background: var(--ink); padding-top: var(--section-pad-y); padding-bottom: var(--section-pad-y); }
.inner { padding-left: var(--page-pad); padding-right: var(--page-pad); }
.label { font-family: var(--font-jetbrains-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(247,244,239, 0.35); margin-bottom: 36px; }
.headline { font-family: var(--font-instrument-serif); font-size: clamp(40px, 6vw, 88px); font-weight: 400; line-height: 1.07; color: var(--chalk); display: flex; flex-direction: column; margin-bottom: 32px; }
.line2 { margin-left: 8vw; }
.photoWrap { position: relative; width: 100%; height: clamp(360px, 56vw, 720px); margin-bottom: clamp(48px, 6vw, 80px); }
.caseBody { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 6vw, 100px); margin-bottom: 48px; }
.quote { font-family: var(--font-instrument-serif); font-style: italic; font-size: clamp(20px, 2.2vw, 30px); line-height: 1.5; color: rgba(247,244,239, 0.85); }
.dataTable { display: flex; flex-direction: column; gap: 0; border-top: 1px solid var(--rule-dark); }
.dataRow { display: grid; grid-template-columns: 100px 1fr; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--rule-dark); }
.dataKey { font-family: var(--font-jetbrains-mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(247,244,239, 0.4); }
.dataVal { font-size: 14px; color: rgba(247,244,239, 0.75); }
.cta { font-family: var(--font-jetbrains-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--chalk); border: 1.5px solid rgba(247,244,239, 0.45); padding: 16px 32px; }
.cta:hover { border-color: var(--chalk); background: rgba(247,244,239, 0.06); }
@media (max-width: 767px) { .caseBody { grid-template-columns: 1fr; } }
```

---

### components/home/WhyElevent.tsx
- **Layout:** Split header + 3 blocks, each with `grid: numeral col | title col | body col`
- **Data:** `whyEleventBlocks` from `lib/data.ts`
- **Key:** Numeral = large italic Instrument Serif (`clamp(80px, 10vw, 140px)`), `color: var(--sage)`

### components/home/WhyElevent.module.css
```css
.section { background: var(--chalk); padding-top: var(--section-pad-y); padding-bottom: var(--section-pad-y); }
.inner { padding-left: var(--page-pad); padding-right: var(--page-pad); }
.header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: clamp(56px, 7vw, 100px); }
.headline { font-family: var(--font-instrument-serif); font-size: clamp(28px, 3.5vw, 48px); font-weight: 400; color: var(--ink); max-width: 60%; text-align: right; }
.headline em { font-style: italic; }
.blockGrid { display: grid; grid-template-columns: clamp(100px, 14vw, 200px) 1fr 1fr; gap: clamp(24px, 3vw, 48px); align-items: start; }
.numeral { display: block; font-family: var(--font-instrument-serif); font-style: italic; font-size: clamp(80px, 10vw, 140px); line-height: 1; color: var(--sage); margin-bottom: 16px; list-style: none; }
.blockTitle { font-family: var(--font-instrument-serif); font-size: clamp(20px, 2.2vw, 30px); font-weight: 400; line-height: 1.3; color: var(--ink); }
.blockBody { font-size: 16px; line-height: 1.7; color: var(--stone); }
@media (max-width: 767px) { .blockGrid { grid-template-columns: 1fr; } .numeral { font-size: clamp(72px, 20vw, 120px); } }
```

---

### components/home/Testimonial.tsx
- **Layout:** Full-bleed dark photo bg + 3-col grid (spacer | quote + attribution | spacer)
- **Data:** Static — "Sari Wijayanti, Director, Corporate Communications, Bank Nusantara · 2025"

### components/home/FAQ.tsx (`'use client'`)
- **Layout:** Split header + accordion (number | question | +/− toggle)
- **Data:** `faqItems` from `lib/data.ts` — 7 items in Indonesian

### components/home/FAQ.module.css
```css
.section { background: var(--chalk); padding-top: var(--section-pad-y); padding-bottom: var(--section-pad-y); }
.inner { padding-left: var(--page-pad); padding-right: var(--page-pad); }
.header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: clamp(48px, 6vw, 80px); }
.headline { font-family: var(--font-instrument-serif); font-size: clamp(28px, 3.5vw, 48px); font-weight: 400; color: var(--ink); max-width: 60%; text-align: right; }
.headline em { font-style: italic; }
.trigger { width: 100%; display: grid; grid-template-columns: 48px 1fr 32px; align-items: center; gap: 20px; padding: 22px 0; background: none; border: none; cursor: pointer; }
.triggerQuestion { font-family: var(--font-instrument-serif); font-size: clamp(20px, 2vw, 28px); color: var(--stone); line-height: 1.35; transition: color 0.2s ease; }
.itemOpen .triggerQuestion { color: var(--ink); }
.triggerToggle { font-size: 20px; color: var(--stone); transition: transform 0.3s ease, color 0.2s ease; display: flex; align-items: center; justify-content: center; }
.triggerToggleOpen { transform: rotate(45deg); color: var(--sienna); }
.answer { overflow: hidden; transition: max-height 0.35s ease; }
.answerInner { padding: 0 0 24px 68px; font-size: 16px; line-height: 1.7; color: var(--stone); max-width: 680px; }
```

---

### components/home/LatestInsights.tsx
- **Layout:** Split header + 3-col card grid + "view all" link below grid
- **Data:** Sanity `latestInsightsQuery` → `Insight[]` passed from `app/page.tsx`
- **Returns null** if no insights

### components/home/LatestInsights.module.css
```css
.section { background: var(--chalk); border-top: 1px solid var(--rule); padding: 120px 80px; }
.header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 64px; }
.label { font-family: var(--font-jetbrains-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--stone); white-space: nowrap; flex-shrink: 0; }
.headline { font-family: var(--font-instrument-serif); font-size: clamp(36px, 4vw, 56px); font-weight: 400; color: var(--ink); margin: 0; line-height: 1.05; max-width: 60%; text-align: right; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
.cardImage { position: relative; width: 100%; height: 240px; overflow: hidden; background: var(--ink); }
.cardImg { transition: transform 0.5s ease; }
.card:hover .cardImg { transform: scale(1.04); }
.cardTitle { font-family: var(--font-instrument-serif); font-size: clamp(18px, 1.8vw, 22px); font-weight: 400; color: var(--ink); line-height: 1.2; }
.cardCategory { font-family: var(--font-jetbrains-mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sienna); }
.viewAll { display: flex; justify-content: flex-end; margin-top: 32px; }
.allLink { font-family: var(--font-jetbrains-mono); font-size: 11px; color: var(--sienna); text-decoration: none; }
@media (max-width: 768px) { .section { padding: 80px 24px; } .grid { grid-template-columns: 1fr; } }
```

---

### components/home/CTASection.tsx
- **Layout:** Full-bleed photo bg + centered content — headline, subcopy, 2 CTAs
- **Data:** Static copy (Indonesian)
- **⚠ Note:** CTA buttons link to `#` — need to be wired to `/get-a-proposal` and `/contact`

---

## 8. LAYOUT COMPONENTS

### components/layout/Navigation.tsx (`'use client'`)
- **Behavior:** Transparent over Hero (dark bg), transitions to `var(--chalk)` after 60px scroll
- **Prop:** `forceDark?: boolean` — use on non-Hero pages
- **Logo:** "ELE**V**ENT" with the V in `var(--sienna)`
- **Links:** Services · Work · Contact · Insights · About
- **Right:** EN/ID language switcher (non-functional) + "Get a Proposal" CTA button

### components/layout/Navigation.module.css
```css
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 50; background: transparent; transition: background 0.35s ease; border-bottom: 1px solid transparent; }
.scrolled { background: var(--chalk); border-bottom-color: var(--rule); }
.inner { display: flex; align-items: center; justify-content: space-between; padding: 0 var(--page-pad); height: 72px; }
.logoText { font-family: var(--font-instrument-serif); font-size: 22px; letter-spacing: 0.18em; color: var(--chalk); transition: color 0.35s ease; }
.scrolled .logoText { color: var(--ink); }
.navLink { font-family: var(--font-jetbrains-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(247,244,239, 0.8); }
.scrolled .navLink { color: var(--stone); }
.navLink:hover, .scrolled .navLink:hover { color: var(--sienna); }
.ctaBtn { font-family: var(--font-jetbrains-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; background: var(--sienna); color: var(--chalk); padding: 10px 20px; }
@media (max-width: 899px) { .nav { display: none; } .langSwitcher { display: none; } }
```

### components/layout/Footer.tsx
- **Layout:** Dark, 5-col grid — brand description | services | cities | contact | elsewhere
- **Data:** Static (placeholder phone/email, social links to `#`)
- **Bottom:** "© MMXXVI ELEVENT · ALL RIGHTS RESERVED"

---

## 9. APP PAGES

### app/about/page.tsx
- **Sections:** Hero (dark photo) → Mission statement → Approach (3 pillars) → Why ELEVENT (list) → Team placeholder → Cities → Final CTA
- **Data:** 100% static copy (Indonesian/English mix)
- **`forceDark`** on Navigation

### app/contact/page.tsx
- **Sections:** Header → Contact grid (address + map placeholder) → Cities list → CTA strip
- **Data:** Static — Jakarta address placeholder, phone/email
- **`forceDark`** on Navigation

### app/get-a-proposal/page.tsx
- **Layout:** 2-col split — left: trust signals + copy, right: `<ProposalForm />`
- **`forceDark`** on Navigation

### app/get-a-proposal/ProposalForm.tsx (`'use client'`)
- Controlled form: name, company, email, phone, event type (select), estimated guests, budget, message
- On submit: shows success state with thank-you message
- No backend integration — needs API route or form service

### app/services/page.tsx
- **Sections:** Header → `<ServicesGrid />` (Sanity data) → Standalone service card (corporate-event-organizer) → CTA strip
- Fetches all services from Sanity, filters out `corporate-event-organizer` slug from grid

### app/services/[slug]/page.tsx
- **Sections:** 1. Hero · 2. The Problem · 3. Our Approach · 4. What's Included (dark) · 5. Ideal For · 6. Related Case Studies · 7. FAQ (`<ServiceFAQ />`) · 8. CTA
- Fetches `serviceBySlugQuery` + latest 2 case studies
- Uses `notFound()` if slug not in Sanity

### app/services/[slug]/ServiceFAQ.tsx (`'use client'`)
- Simple accordion, shows `questionId ?? question` and `answerId ?? answer`

### app/work/page.tsx
- **Sections:** Header → card grid (all case studies from Sanity, ordered by year desc)
- Empty state shown if no case studies
- `forceDark` on Navigation

### app/work/[slug]/page.tsx
- **Sections:** 1. Hero · 2. Intro (headline + data table + brief blockquote) · 3. The Challenge · 4. The Approach · 5. The Execution (dark, bullet list) · 6. The Result (with `outcomeNumber`) · 7. Client Quote · 8. More Work (2-col grid) · 9. CTA
- `generateMetadata` from Sanity data
- `clientQuoteAttribution` split on comma → role (mono) / company (serif italic)

### app/insights/page.tsx
- **Sections:** Header → featured insight (first article, large card) → grid (remaining articles)
- Fetches `insightsQuery` (all, desc by date)

### app/insights/[slug]/page.tsx
- **Sections:** Hero image → Article header (category, date, title, excerpt) → Body (portable text via `renderBody()`) → Related articles grid
- `renderBody()` handles block types: `h2`, `h3`, `normal` (paragraph)

---

## 10. SERVICES GRID COMPONENT

### components/services/ServicesGrid.tsx (`'use client'`)
- Filter bar: All · Gatherings & Celebrations · Conference & Knowledge · Activation & Presence · Team & Culture · Hospitality & Travel
- Grid of service cards with image (grayscale filter), overlay, cluster label, title, tagline
- `STANDALONE_SLUG = 'corporate-event-organizer'` always excluded from grid
- Cluster map defines which slugs belong to which filter:
  - `gatherings`: gala-dinner-award-night, corporate-event, corporate-gathering, corporate-anniversary
  - `conference`: conference-seminar, corporate-meeting, hybrid-virtual-event
  - `activation`: product-launching, brand-activation, exhibition-pameran, roadshow
  - `team`: team-building, corporate-outing
  - `hospitality`: incentive-trip, mice-hospitality
- Filter transition: 200ms opacity fade

---

## 11. SANITY SCHEMAS

### sanity/schemas/index.ts
```ts
export const schemas = [siteSettings, homepage, service, caseStudy, insight, teamMember]
```

### sanity/schemas/caseStudy.ts — Fields:
`title`, `headlineHero` (text, for homepage dramatic headline), `slug`, `client`, `format`, `audience`, `cities`, `outcome`, `outcomeNumber`, `heroImage`, `galleryImages[]`, `brief` (ID), `briefEn`, `challenge` (ID), `challengeEn`, `approach` (ID), `approachEn`, `execution[]` (ID), `executionEn[]`, `result` (ID), `resultEn`, `clientQuote`, `clientQuoteName`, `clientQuoteAttribution` ("Role, Company" format), `featured` (boolean, default false), `year`, `eventType` (reference → service)

### sanity/schemas/service.ts — Fields:
`title` (EN), `titleId`, `slug`, `number` (e.g. "01/09"), `descriptor` (ID), `descriptorEn`, `heroImage`, `tier` (tier1|tier2), `tagline`, `problem`, `approach`, `included[]`, `idealFor`, `seoTitle`, `seoDescription`, `faqs[]` (question/questionId/answer/answerId), `body[]` (ID portable text), `bodyEn[]`

### sanity/schemas/insight.ts — Fields:
`title` (EN), `titleId`, `slug`, `publishedAt`, `category`, `coverImage`, `excerpt` (ID), `excerptEn`, `body[]` (portable text, ID), `bodyEn[]`, `seoTitle`, `seoDescription`

### sanity/schemas/siteSettings.ts — Fields:
`title`, `description`, `ogImage`, `whatsappNumber`, `email`, `phone`, `instagramUrl`, `linkedinUrl`

### sanity/schemas/teamMember.ts — Fields:
`name`, `role` (EN), `roleId`, `photo`, `bio` (ID), `bioEn`, `order`

### sanity/schemas/homepage.ts — Fields:
`heroHeadline` (EN), `heroHeadlineId`, `heroSubcopy` (ID), `heroSubcopyEn`, `trustBarHeadline`, `trustBarBrands[]`, `whatWeDoHeadline`, `whatWeDoBody[]` (ID), `whatWeDoBodyEn[]`
⚠ **Note:** Homepage Sanity data is NOT used yet — all homepage components use static copy. `homepageQuery` exists in lib/queries.ts but is not fetched in app/page.tsx.

---

## 12. SCRIPTS (scripts/)

All run with: `npx tsx --env-file=.env.local scripts/<name>.ts`

| Script | Purpose |
|--------|---------|
| `add-hero-headline.ts` | Patches Shimizu case study with `headlineHero: "Fifty years.\nOne night.\nFive hundred witnesses."` |
| `audit-faqs.ts` | Audits FAQ content in Sanity |
| `audit-services.ts` | Audits service content in Sanity |
| `fix-faq-copy.ts` | Fixes FAQ copy in Sanity |
| `fix-service-copy.ts` | Fixes service copy in Sanity |
| `import-case-studies.ts` | Imports case study documents |
| `import-insights.ts` | Imports insight articles |
| `import-missing-services.ts` | Adds any services not yet in Sanity |
| `import-services.ts` | Initial services import |
| `inspect-image.ts` | Debug image asset inspection |
| `patch-missing-body.ts` | Patches missing body fields on documents |
| `test-image-query.ts` | Tests image URL resolution |
| `update-insight-dates.ts` | Updates publishedAt dates on insights |
| `upload-casestudy-images.ts` | Uploads hero images for case studies |
| `upload-insight-images.ts` | Uploads cover images for insights |
| `upload-insight-images-additional.ts` | Additional insight image uploads |
| `upload-service-images.ts` | Uploads hero images for services |

---

## 13. ENVIRONMENT VARIABLES (.env.local — not committed)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=98jwav2j
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=<write token for scripts>
```

---

## 14. OUTSTANDING TASKS / KNOWN GAPS

### 🔴 High Priority
1. **Grayscale hover effect** — Intended `filter: grayscale(1)` default, `grayscale(0)` on hover across all images. Currently all images use `filter: saturate(0.85)` inline. **Not yet implemented.**
2. **CTASection buttons** — Both link to `#`. Need: "GET A PROPOSAL" → `/get-a-proposal`, "TALK TO OUR TEAM" → `/contact`.
3. **ProposalForm** — No backend. Needs API route (`/api/proposal`) or integration with a form service (Resend, Formspree, etc.).
4. **Footer social links** — All link to `#`. Need real Instagram/LinkedIn/YouTube/WhatsApp URLs.
5. **WhatsApp button** — `href="https://wa.me/6221000000"` is placeholder.

### 🟡 Medium Priority
6. **Navigation mobile menu** — Nav links hidden at ≤899px, no hamburger menu exists. Mobile users can only access the "Get a Proposal" CTA.
7. **Language switcher** — EN/ID toggle is visual only, no i18n wired up.
8. **Gallery component** — `components/home/Gallery.tsx` is built and styled but NOT rendered on homepage. Insert after CaseStudy or WhyElevent if needed.
9. **Homepage Sanity copy** — `homepageQuery` fields (`heroHeadline`, `whatWeDoBody`, etc.) exist in schema but are not fetched. All homepage text is static.
10. **OG image** — `metadata.openGraph.images` references `/assets/og-image.jpg` which doesn't exist in `/public`.

### 🟢 Low Priority
11. **Footer phone/email** — `halo@elevent.id` and `+62 21 0000 0000` are placeholders.
12. **Contact page map** — Map area is a styled placeholder div, no actual map embedded.
13. **Team section (About)** — Designed for Sanity `teamMember` data but uses static placeholder content.
14. **`generateStaticParams`** — Not implemented on any dynamic route. All pages are server-rendered on demand (fine for now, add for production).

---

## 15. THINGS NOT IN THE ORIGINAL HANDOFF

- `headlineHero` field on `caseStudy` schema (added in this session)
- `scripts/add-hero-headline.ts` (added in this session)  
- `components/home/Gallery.tsx` + `Gallery.module.css` — exists, not used
- `sanity/schemas/teamMember.ts` — schema exists, UI uses static copy
- `app/services/services.module.css` — separate CSS file alongside `page.module.css` (likely unused duplicate, worth auditing)
- `components/ui/Button.tsx` + `Button.module.css` — exists but not imported anywhere
- `sanity/image.ts` — Sanity image URL builder helper (may not be used; all images use `asset->url` in GROQ)
- `sanity/config.ts` — Sanity studio config
- `scripts/faq-copy-audit.txt` and `scripts/service-copy-audit.txt` — audit output text files

---

*End of snapshot.*
