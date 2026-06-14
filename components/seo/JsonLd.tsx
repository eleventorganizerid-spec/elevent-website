const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Elevent',
      url: 'https://elevent.id',
      inLanguage: ['id-ID', 'en-US'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.google.com/search?q={search_term_string}+site:elevent.id',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://elevent.id/#organization',
      name: 'Elevent',
      url: 'https://elevent.id',
      description:
        'Platform event organizer enterprise Indonesia. Curated model — memasangkan setiap event dengan tim spesialis yang tepat.',
      inLanguage: ['id-ID', 'en-US'],
      knowsAbout: [
        'Corporate Events',
        'MICE',
        'Gala Dinner',
        'Team Building',
        'Incentive Trip',
        'Conference',
        'Corporate Event Organizer',
        'Indonesia',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'AD Premier Office Park, 17th Floor, Suite 04B, Jl. TB Simatupang No.5',
        addressLocality: 'Jakarta Selatan',
        addressRegion: 'DKI Jakarta',
        postalCode: '12550',
        addressCountry: 'ID',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+62-851-9933-3039',
        contactType: 'customer service',
        availableLanguage: ['Indonesian', 'English'],
      },
      areaServed: ['Jakarta', 'Bali', 'Surabaya', 'Indonesia'],
      sameAs: ['https://wa.me/6285199333039'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Corporate Event Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Event', url: 'https://elevent.id/services/corporate-event' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Gathering', url: 'https://elevent.id/services/corporate-gathering' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Launching', url: 'https://elevent.id/services/product-launching' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gala Dinner & Award Night', url: 'https://elevent.id/services/gala-dinner-award-night' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conference & Seminar', url: 'https://elevent.id/services/conference-seminar' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Team Building', url: 'https://elevent.id/services/team-building' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MICE & Hospitality', url: 'https://elevent.id/services/mice-hospitality' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hybrid & Virtual Event', url: 'https://elevent.id/services/hybrid-virtual-event' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Incentive Trip', url: 'https://elevent.id/services/incentive-trip' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Meeting', url: 'https://elevent.id/services/corporate-meeting' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Anniversary', url: 'https://elevent.id/services/corporate-anniversary' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Outing', url: 'https://elevent.id/services/corporate-outing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Activation', url: 'https://elevent.id/services/brand-activation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exhibition & Pameran', url: 'https://elevent.id/services/exhibition-pameran' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roadshow', url: 'https://elevent.id/services/roadshow' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Event Organizer', url: 'https://elevent.id/services/corporate-event-organizer' } },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      name: 'Elevent',
      '@id': 'https://elevent.id',
      url: 'https://elevent.id',
      image: 'https://elevent.id/assets/og-image.png',
      telephone: '+62-851-9933-3039',
      email: 'brief@elevent.id',
      priceRange: 'Rp100.000.000 - Rp5.000.000.000',
      openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-14:00'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'AD Premier Office Park, 17th Floor, Suite 04B, Jl. TB Simatupang No.5',
        addressLocality: 'Jakarta Selatan',
        addressRegion: 'DKI Jakarta',
        postalCode: '12550',
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -6.29497,
        longitude: 106.81265,
      },
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
