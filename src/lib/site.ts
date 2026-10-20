const BASE = 'https://www.murrayash.com'
const landing = (id: string) => `${BASE}/resource_redirect/landing_pages/${id}`

export const LINKS = {
  therapy: `${BASE}/therapy`,
  certification: `${BASE}/certification`,
  courses: `${BASE}/courses`,
  retreats: `${BASE}/retreats`,
  community: `${BASE}/community`,
  books: `${BASE}/books`,
  about: `${BASE}/about`,
  contact: `${BASE}/contact`,
  login: `${BASE}/login`,
  course: landing('2151466379'),
  retreat: landing('2151452970'),
  nsc: landing('2151452969'),
  masterclass: landing('2151528256'),
  resources: `${BASE}/resource_redirect/offers/4yoMmDZE`,
  book: 'https://www.amazon.com/dp/B0D9Y3Y581',
} as const

export const NAV = [
  { label: 'Therapy', href: LINKS.therapy },
  { label: 'Certification', href: LINKS.certification },
  { label: 'Courses', href: LINKS.courses },
  { label: 'Retreats', href: LINKS.retreats },
  { label: 'Community', href: LINKS.community },
  { label: 'Books', href: LINKS.books },
  { label: 'About', href: LINKS.about },
] as const

export const INTRO_SEEN_KEY = 'ma-intro-seen'
