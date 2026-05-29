import type { MetadataRoute } from 'next'
import { client } from '@/sanity/client'

const BASE = 'https://elevent.id'

function urls(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}${path}`, priority, changeFrequency, lastModified: new Date() },
    { url: `${BASE}${path}?lang=en`, priority, changeFrequency, lastModified: new Date() },
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    ...urls('/', 1.0, 'weekly'),
    ...urls('/services', 0.8, 'monthly'),
    ...urls('/work', 0.8, 'monthly'),
    ...urls('/insights', 0.8, 'monthly'),
    ...urls('/about', 0.8, 'monthly'),
    ...urls('/contact', 0.8, 'monthly'),
    ...urls('/get-a-proposal', 0.8, 'monthly'),
  ]

  // Dynamic routes from Sanity
  let serviceSlugs: string[] = []
  let workSlugs: string[] = []
  let insightSlugs: string[] = []

  try {
    ;[serviceSlugs, workSlugs, insightSlugs] = await Promise.all([
      client.fetch<string[]>(`*[_type == "service"]{ "slug": slug.current }.slug`),
      client.fetch<string[]>(`*[_type == "caseStudy"]{ "slug": slug.current }.slug`),
      client.fetch<string[]>(`*[_type == "insight"]{ "slug": slug.current }.slug`),
    ])
  } catch {
    // Sanity unavailable — return static routes only
  }

  const dynamicRoutes: MetadataRoute.Sitemap = [
    ...serviceSlugs.flatMap(slug => urls(`/services/${slug}`, 0.7, 'monthly')),
    ...workSlugs.flatMap(slug => urls(`/work/${slug}`, 0.7, 'monthly')),
    ...insightSlugs.flatMap(slug => urls(`/insights/${slug}`, 0.7, 'monthly')),
  ]

  return [...staticRoutes, ...dynamicRoutes]
}
