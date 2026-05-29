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
import LatestInsights from '@/components/home/LatestInsights'
import CTASection from '@/components/home/CTASection'
import { client } from '@/sanity/client'
import { latestInsightsQuery } from '@/lib/queries'
import type { Insight } from '@/lib/types'
import { faqItems } from '@/lib/data'

interface HomeProps {
  searchParams: Promise<{ lang?: string }>
}

export default async function Home({ searchParams }: HomeProps) {
  const { lang } = await searchParams
  const isEn = lang === 'en'

  const [insights, services] = await Promise.all([
    client.fetch<Insight[]>(latestInsightsQuery),
    client.fetch<{ title: string; titleId?: string; slug: string; description?: string; descriptionEn?: string }[]>(
      `*[_type == "service" && tier == "tier1"] | order(number asc) {
        title,
        titleId,
        "slug": slug.current,
        "description": descriptor,
        "descriptionEn": descriptorEn
      }`
    ),
  ])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation forceDark={true} />
      <main style={{ background: 'var(--ink)' }}>
        <Hero lang={lang} />
        <TrustBar />
        <WhatWeDo lang={lang} />
        <Services services={services} lang={lang} />
        <CaseStudy lang={lang} />
        <WhyElevent lang={lang} />
        <Testimonial />
        <FAQ lang={lang} />
        <LatestInsights insights={insights} lang={lang} />
        <CTASection lang={lang} showLabel={true} />
      </main>
      <Footer />
    </>
  )
}
