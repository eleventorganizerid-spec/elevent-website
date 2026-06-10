import { buildCityMetadata } from '@/lib/cities'
import CityLanding from '@/components/city/CityLanding'

export const metadata = buildCityMetadata('bali')

export default async function Page({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams
  return <CityLanding city="bali" lang={lang} />
}
