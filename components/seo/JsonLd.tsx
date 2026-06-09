const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Elevent',
      url: 'https://elevent.id',
      description:
        'Platform event organizer enterprise Indonesia. Curated model — memasangkan setiap event dengan tim spesialis yang tepat.',
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
    },
    {
      '@type': 'LocalBusiness',
      name: 'Elevent',
      '@id': 'https://elevent.id',
      url: 'https://elevent.id',
      image: 'https://elevent.id/assets/og-image.jpg',
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
