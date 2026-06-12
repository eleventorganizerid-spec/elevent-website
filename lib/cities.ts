import type { Metadata } from 'next'
import { baseOpenGraph } from './seo'

export type CityKey = 'jakarta' | 'bali' | 'surabaya'

interface CityServiceLink {
  label: string
  slug: string
}

export interface CityData {
  slug: string
  cityName: string
  breadcrumbTitle: string
  geo: { lat: number; lng: number }
  metaTitle: string
  metaDescription: string
  ogDescription: string
  ogAlt: string
  hero: { labelEn: string; headlineEn: string; subId: string; subEn: string }
  why: { headingEn: string; bodyId: string; bodyEn: string }
  services: { headingEn: string; introId: string; introEn: string; items: CityServiceLink[] }
  venues: {
    headingEn: string
    introId: string
    introEn: string
    list: string[]
    disclaimerId: string
    disclaimerEn: string
  }
}

const VENUE_DISCLAIMER_ID =
  'Nama venue dicantumkan sebagai referensi konteks lokasi, bukan bentuk afiliasi atau endorsement.'
const VENUE_DISCLAIMER_EN =
  'Venue names are listed as location context, not as a form of affiliation or endorsement.'

export const cities: Record<CityKey, CityData> = {
  jakarta: {
    slug: 'corporate-event-jakarta',
    cityName: 'Jakarta',
    breadcrumbTitle: 'Corporate Event Organizer Jakarta',
    geo: { lat: -6.2088, lng: 106.8456 },
    metaTitle: 'Corporate Event Organizer Jakarta | Elevent',
    metaDescription:
      'Elevent merancang corporate event untuk perusahaan enterprise di Jakarta. Dari gala dinner, conference, corporate gathering, hingga product launch di pusat bisnis Indonesia.',
    ogDescription:
      'Corporate event untuk perusahaan enterprise di Jakarta. Gala dinner, conference, corporate gathering, product launch.',
    ogAlt: 'Corporate Event Organizer Jakarta | Elevent',
    hero: {
      labelEn: 'CORPORATE EVENT · JAKARTA',
      headlineEn: "Corporate events for Jakarta's enterprise.",
      subId:
        'Jakarta adalah pusat bisnis Indonesia, dan di sinilah sebagian besar klien enterprise menjalankan event paling penting mereka. Elevent merancang setiap detail agar event Anda bekerja sesuai tujuannya.',
      subEn:
        'Jakarta is the business center of Indonesia, and this is where most enterprise clients run their most important events. Elevent designs every detail so your event works toward its purpose.',
    },
    why: {
      headingEn: 'Why Jakarta for corporate events.',
      bodyId:
        'Sebagai pusat bisnis nasional, Jakarta menampung kantor pusat korporasi terbesar di Indonesia. Kebutuhan event di kota ini menuntut standar eksekusi yang konsisten, mulai dari gala dinner berskala besar hingga conference dengan ribuan peserta. Kami membangun setiap event di sekitar tujuan bisnisnya, bukan di sekitar daftar perlengkapan.',
      bodyEn:
        "As the national business center, Jakarta hosts the headquarters of Indonesia's largest corporations. Events here demand a consistent standard of execution, from large-scale gala dinners to conferences with thousands of attendees. We build every event around its business objective, not around a list of equipment.",
    },
    services: {
      headingEn: 'What we run in Jakarta.',
      introId: 'Format yang paling sering kami tangani untuk perusahaan di Jakarta:',
      introEn: 'The formats we handle most often for companies in Jakarta:',
      items: [
        { label: 'Gala Dinner & Award Night', slug: 'gala-dinner-award-night' },
        { label: 'Conference & Seminar', slug: 'conference-seminar' },
        { label: 'Corporate Gathering', slug: 'corporate-gathering' },
        { label: 'Product Launching', slug: 'product-launching' },
      ],
    },
    venues: {
      headingEn: 'Where it happens.',
      introId:
        'Beberapa venue yang sering digunakan untuk corporate event berskala enterprise di Jakarta:',
      introEn: 'A few venues commonly used for enterprise-scale corporate events in Jakarta:',
      list: [
        'Ritz-Carlton SCBD',
        'Grand Hyatt Jakarta',
        'JCC Senayan',
        'The Kasablanka Hall',
        'Balai Kartini',
      ],
      disclaimerId: VENUE_DISCLAIMER_ID,
      disclaimerEn: VENUE_DISCLAIMER_EN,
    },
  },

  bali: {
    slug: 'corporate-event-bali',
    cityName: 'Bali',
    breadcrumbTitle: 'Corporate Event Organizer Bali',
    geo: { lat: -8.4095, lng: 115.1889 },
    metaTitle: 'Corporate Event Organizer Bali | Elevent',
    metaDescription:
      'Elevent merancang incentive trip, MICE, corporate retreat, dan team building di Bali. Destinasi MICE internasional untuk program reward and recognition perusahaan enterprise.',
    ogDescription:
      'Incentive trip, MICE, corporate retreat, dan team building di Bali untuk perusahaan enterprise.',
    ogAlt: 'Corporate Event Organizer Bali | Elevent',
    hero: {
      labelEn: 'CORPORATE EVENT · BALI',
      headlineEn: 'Incentive trips and MICE in Bali.',
      subId:
        'Bali adalah destinasi MICE internasional, tempat perusahaan merancang program reward and recognition yang diingat oleh para penerimanya. Elevent menangani setiap detail agar pengalaman terasa utuh dari awal hingga akhir.',
      subEn:
        'Bali is an international MICE destination, where companies design reward and recognition programs that their recipients remember. Elevent handles every detail so the experience feels whole from start to finish.',
    },
    why: {
      headingEn: 'Why Bali for corporate events.',
      bodyId:
        'Sebagai destinasi MICE bertaraf internasional, Bali menawarkan kombinasi venue konvensi berskala besar dan lokasi retreat yang tenang. Ini menjadikannya pilihan utama untuk incentive trip, corporate retreat, dan program team building yang menggabungkan kerja dan apresiasi dalam satu perjalanan.',
      bodyEn:
        'As an international-standard MICE destination, Bali offers a combination of large convention venues and quiet retreat locations. That makes it a leading choice for incentive trips, corporate retreats, and team building programs that combine work and appreciation in a single trip.',
    },
    services: {
      headingEn: 'What we run in Bali.',
      introId: 'Format yang paling sering kami tangani untuk perusahaan di Bali:',
      introEn: 'The formats we handle most often for companies in Bali:',
      items: [
        { label: 'Incentive Trip', slug: 'incentive-trip' },
        { label: 'MICE & Hospitality', slug: 'mice-hospitality' },
        { label: 'Team Building', slug: 'team-building' },
        { label: 'Corporate Outing', slug: 'corporate-outing' },
      ],
    },
    venues: {
      headingEn: 'Where it happens.',
      introId: 'Beberapa venue dan area yang sering digunakan untuk corporate event di Bali:',
      introEn: 'A few venues and areas commonly used for corporate events in Bali:',
      list: [
        'BNDCC Nusa Dua',
        'BICC',
        'Grand Hyatt Bali Nusa Dua',
        'The Westin Nusa Dua',
        'Ubud untuk corporate retreat',
      ],
      disclaimerId: VENUE_DISCLAIMER_ID,
      disclaimerEn: VENUE_DISCLAIMER_EN,
    },
  },

  surabaya: {
    slug: 'corporate-event-surabaya',
    cityName: 'Surabaya',
    breadcrumbTitle: 'Corporate Event Organizer Surabaya',
    geo: { lat: -7.2575, lng: 112.7521 },
    metaTitle: 'Corporate Event Organizer Surabaya | Elevent',
    metaDescription:
      'Elevent merancang corporate gathering, conference, dan annual meeting di Surabaya. Kota bisnis terbesar kedua Indonesia dan gateway Jawa Timur untuk perusahaan enterprise.',
    ogDescription:
      'Corporate gathering, conference, dan annual meeting di Surabaya untuk perusahaan enterprise di Jawa Timur.',
    ogAlt: 'Corporate Event Organizer Surabaya | Elevent',
    hero: {
      labelEn: 'CORPORATE EVENT · SURABAYA',
      headlineEn: 'Corporate events across East Java.',
      subId:
        'Surabaya adalah kota bisnis terbesar kedua di Indonesia dan gerbang utama Jawa Timur. Elevent merancang corporate gathering, conference, dan annual meeting dengan standar eksekusi yang sama seperti di Jakarta.',
      subEn:
        'Surabaya is the second largest business city in Indonesia and the main gateway to East Java. Elevent designs corporate gatherings, conferences, and annual meetings with the same standard of execution as in Jakarta.',
    },
    why: {
      headingEn: 'Why Surabaya for corporate events.',
      bodyId:
        'Sebagai kota bisnis terbesar kedua di Indonesia, Surabaya menjadi gateway bagi perusahaan yang beroperasi di Jawa Timur. Banyak perusahaan regional menjalankan corporate gathering, conference, dan annual meeting di sini, dan kami menghadirkan kapasitas eksekusi yang setara dengan kota besar lainnya.',
      bodyEn:
        'As the second largest business city in Indonesia, Surabaya is the gateway for companies operating across East Java. Many regional companies run their corporate gatherings, conferences, and annual meetings here, and we bring execution capacity on par with the larger cities.',
    },
    services: {
      headingEn: 'What we run in Surabaya.',
      introId: 'Format yang paling sering kami tangani untuk perusahaan di Surabaya:',
      introEn: 'The formats we handle most often for companies in Surabaya:',
      items: [
        { label: 'Corporate Gathering', slug: 'corporate-gathering' },
        { label: 'Conference & Seminar', slug: 'conference-seminar' },
        { label: 'Corporate Meeting', slug: 'corporate-meeting' },
        { label: 'Corporate Anniversary', slug: 'corporate-anniversary' },
      ],
    },
    venues: {
      headingEn: 'Where it happens.',
      introId: 'Beberapa venue dan area yang sering digunakan untuk corporate event di Surabaya:',
      introEn: 'A few venues and areas commonly used for corporate events in Surabaya:',
      list: [
        'Grand City Convention & Exhibition',
        'The Westin Grand Ballroom Surabaya',
        'Area Pakuwon',
      ],
      disclaimerId: VENUE_DISCLAIMER_ID,
      disclaimerEn: VENUE_DISCLAIMER_EN,
    },
  },
}

export function buildCityMetadata(city: CityKey): Metadata {
  const d = cities[city]
  const url = `https://elevent.id/services/${d.slug}`
  return {
    title: { absolute: d.metaTitle },
    description: d.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        'x-default': url,
        'id': url,
        'en': `${url}?lang=en`,
      },
    },
    openGraph: {
      ...baseOpenGraph,
      title: d.metaTitle,
      description: d.ogDescription,
      url,
      images: [{ url: '/assets/og-image.png', width: 1200, height: 630, alt: d.ogAlt }],
    },
  }
}
