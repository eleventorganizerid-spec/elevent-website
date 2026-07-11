// GROQ queries for Sanity CMS

export const homepageQuery = `
  *[_type == "homepage"][0] {
    heroHeadline,
    heroHeadlineId,
    heroSubcopy,
    heroSubcopyEn,
    trustBarHeadline,
    trustBarBrands,
    whatWeDoHeadline,
    whatWeDoBody,
    whatWeDoBodyEn,
  }
`

export const servicesQuery = `
  *[_type == "service"] | order(tier asc, number asc) {
    _id,
    title,
    titleId,
    slug,
    number,
    descriptor,
    descriptorEn,
    tagline,
    taglineId,
    heroImage {
      asset-> {
        _id,
        url
      }
    },
    tier,
  }
`

export const serviceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    titleId,
    slug,
    number,
    descriptor,
    descriptorEn,
    tagline,
    taglineId,
    problem,
    problemId,
    approach,
    approachId,
    included,
    includedId,
    idealFor,
    idealForId,
    heroImage {
      asset-> {
        _id,
        url
      }
    },
    tier,
    faqs[] {
      question,
      questionId,
      answer,
      answerId,
    },
    seoTitle,
    seoDescription,
  }
`

export const featuredCaseStudyQuery = `
  *[_type == "caseStudy" && featured == true][0] {
    _id,
    title,
    titleId,
    headlineHero,
    headlineHeroId,
    slug,
    client,
    format,
    audience,
    audienceId,
    cities,
    outcome,
    outcomeId,
    outcomeNumber,
    heroImage {
      asset-> {
        _id,
        url
      }
    },
    brief,
    briefEn,
    year,
    eventType-> {
      title,
      slug,
    },
  }
`

export const latestInsightsQuery = `
  *[_type == "insight"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    titleId,
    slug,
    publishedAt,
    category,
    excerpt,
    excerptEn,
    coverImage {
      asset-> {
        _id,
        url
      }
    }
  }
`

export const insightsQuery = `
  *[_type == "insight"] | order(publishedAt desc) {
    _id,
    title,
    titleId,
    slug,
    publishedAt,
    category,
    excerpt,
    excerptEn,
    coverImage {
      asset-> {
        _id,
        url
      }
    }
  }
`

export const articleBySlugQuery = `
  *[_type == "insight" && slug.current == $slug][0] {
    _id,
    _updatedAt,
    title,
    titleId,
    slug,
    publishedAt,
    category,
    excerpt,
    excerptEn,
    coverImage {
      asset-> {
        _id,
        url
      }
    },
    body,
    bodyEn
  }
`

export const relatedInsightsQuery = `
  *[_type == "insight" && slug.current != $slug]
  | order(select(category == $category => 0, 1) asc, publishedAt desc) [0...3] {
    _id,
    title,
    titleId,
    slug,
    publishedAt,
    category,
    excerpt,
    coverImage {
      asset-> {
        _id,
        url
      }
    }
  }
`

export const insightsByCategoryQuery = `
  *[_type == "insight" && category == $category] | order(publishedAt desc) [0...3] {
    _id,
    title,
    titleId,
    slug
  }
`

export const allCaseStudiesQuery = `
  *[_type == "caseStudy"] | order(year desc) {
    _id,
    title,
    titleId,
    slug,
    client,
    format,
    audience,
    outcome,
    outcomeNumber,
    heroImage {
      asset-> {
        _id,
        url
      }
    },
    year,
    featured,
    eventType-> {
      title,
      slug,
    },
  }
`

export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    titleId,
    slug,
    client,
    format,
    audience,
    audienceId,
    cities,
    outcome,
    outcomeId,
    outcomeNumber,
    youtubeId,
    heroImage {
      asset-> {
        _id,
        url
      }
    },
    galleryImages[] {
      asset-> {
        _id,
        url
      }
    },
    brief,
    briefEn,
    challenge,
    challengeEn,
    approach,
    approachEn,
    execution,
    executionEn,
    result,
    resultEn,
    clientQuote,
    clientQuoteId,
    headlineHero,
    headlineHeroId,
    clientQuoteName,
    clientQuoteAttribution,
    year,
    featured,
    eventType-> {
      title,
      slug,
    },
  }
`

export const relatedCaseStudiesQuery = `
  *[_type == "caseStudy" && slug.current != $slug]
  | order(select(eventType->slug.current == $eventType => 0, 1) asc, year desc)[0...2] {
    _id,
    title,
    titleId,
    slug,
    client,
    format,
    year,
    outcomeNumber,
    heroImage {
      asset-> {
        _id,
        url
      }
    },
  }
`
