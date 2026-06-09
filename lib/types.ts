// Shared TypeScript types for Sanity data

export interface SanitySlug {
  current: string
}

export interface SanityImageAsset {
  // Raw reference shape (when query does NOT dereference)
  _ref?: string
  _type?: 'reference'
  // Resolved-asset shape (when query uses `asset-> { _id, url }`)
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
  taglineId?: string
  heroImage?: SanityImage
  tier?: 'tier1' | 'tier2'
}

export interface SanityServiceFull extends SanityService {
  problem?: string
  problemId?: string
  approach?: string
  approachId?: string
  included?: string[]
  includedId?: string[]
  idealFor?: string
  idealForId?: string
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
  titleId?: string
  headlineHero?: string
  headlineHeroId?: string
  slug: SanitySlug
  client?: string
  format?: string
  audience?: string
  audienceId?: string
  cities?: string
  outcome?: string
  outcomeId?: string
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
  clientQuoteId?: string
  clientQuoteName?: string
  clientQuoteAttribution?: string
  year?: number
  featured?: boolean
  eventType?: {
    title: string
    slug: SanitySlug
  }
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
  _updatedAt?: string
  title: string
  titleId?: string
  slug: { current: string }
  publishedAt: string
  category?: string
  excerpt?: string
  excerptEn?: string
  coverImage?: {
    asset?: {
      _id: string
      url: string
    }
  }
  body?: any[]
  bodyEn?: any[]
}
