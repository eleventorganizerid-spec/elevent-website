// Curated bridge maps for internal linking. There is no shared taxonomy
// between services and insight categories in Sanity, so these are kept in code.

export interface ServiceRef {
  slug: string
  label: string
}

// Service slug -> primary insight category (drives "Related Insights" on service pages)
export const serviceToCategory: Record<string, string> = {
  'corporate-event': 'Budget & Strategy',
  'corporate-event-organizer': 'Budget & Strategy',
  'incentive-trip': 'Budget & Strategy',
  'mice-hospitality': 'Budget & Strategy',
  'conference-seminar': 'Format & Technology',
  'hybrid-virtual-event': 'Format & Technology',
  'product-launching': 'Format & Technology',
  'brand-activation': 'Format & Technology',
  'roadshow': 'Format & Technology',
  'corporate-gathering': 'Planning & Preparation',
  'corporate-meeting': 'Planning & Preparation',
  'team-building': 'Planning & Preparation',
  'corporate-outing': 'Planning & Preparation',
  'gala-dinner-award-night': 'Venue & Execution',
  'corporate-anniversary': 'Venue & Execution',
  'exhibition-pameran': 'Venue & Execution',
}

// Insight category -> relevant services (drives "Related Services" on insight pages)
export const categoryToServices: Record<string, ServiceRef[]> = {
  'Budget & Strategy': [
    { slug: 'corporate-event', label: 'Corporate Event' },
    { slug: 'gala-dinner-award-night', label: 'Gala Dinner & Award Night' },
    { slug: 'incentive-trip', label: 'Incentive Trip' },
  ],
  'Format & Technology': [
    { slug: 'hybrid-virtual-event', label: 'Hybrid & Virtual Event' },
    { slug: 'conference-seminar', label: 'Conference & Seminar' },
    { slug: 'product-launching', label: 'Product Launching' },
  ],
  'Planning & Preparation': [
    { slug: 'corporate-gathering', label: 'Corporate Gathering' },
    { slug: 'team-building', label: 'Team Building' },
    { slug: 'corporate-meeting', label: 'Corporate Meeting' },
  ],
  'Venue & Execution': [
    { slug: 'gala-dinner-award-night', label: 'Gala Dinner & Award Night' },
    { slug: 'exhibition-pameran', label: 'Exhibition & Pameran' },
    { slug: 'corporate-anniversary', label: 'Corporate Anniversary' },
  ],
}

// Service slug -> relevant city landing pages (contextual city links)
export const serviceToCities: Record<string, ServiceRef[]> = {
  'gala-dinner-award-night': [{ slug: 'corporate-event-jakarta', label: 'Jakarta' }],
  'conference-seminar': [{ slug: 'corporate-event-jakarta', label: 'Jakarta' }],
  'corporate-gathering': [{ slug: 'corporate-event-surabaya', label: 'Surabaya' }],
  'incentive-trip': [{ slug: 'corporate-event-bali', label: 'Bali' }],
  'mice-hospitality': [{ slug: 'corporate-event-bali', label: 'Bali' }],
}
