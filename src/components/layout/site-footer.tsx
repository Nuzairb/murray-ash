import { Container, SelfMark, Wordmark } from '@/components/shared'
import { LINKS } from '@/lib/site'

const COLUMNS = [
  {
    title: 'Work with Murray',
    links: [
      { label: '1:1 Somatic Therapy', href: LINKS.therapy },
      { label: 'Facilitator Certification', href: LINKS.certification },
      { label: 'Retreats', href: LINKS.retreats },
      { label: 'Speaking & events', href: LINKS.contact },
    ],
  },
  {
    title: 'Science of Self',
    links: [
      { label: 'Self-Study Course', href: LINKS.course },
      { label: 'NSC Community', href: LINKS.nsc },
      { label: 'Free Masterclass', href: LINKS.masterclass },
      { label: 'Tools & Resources', href: LINKS.resources },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Books', href: LINKS.books },
      { label: 'About', href: LINKS.about },
      { label: 'Contact', href: LINKS.contact },
      { label: 'Log in', href: LINKS.login },
    ],
  },
] as const

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-night px-5 pt-20 pb-10 text-canvas md:px-10">
      <SelfMark
        className="pointer-events-none absolute -right-24 -bottom-40 size-[520px] text-night-line"
        strokeWidth={0.4}
      />
      <Container className="relative flex flex-col gap-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="flex flex-col gap-5">
            <Wordmark />
            <p className="max-w-[320px] text-body text-mist">
              Psychotherapy-informed somatic therapy and professional training, built on the Science
              of Self method.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            {COLUMNS.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <p className="text-eyebrow font-medium text-copper-bright uppercase">
                  {column.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-label text-canvas/80 transition-colors hover:text-canvas"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-night-line pt-8 text-label text-mist md:flex-row md:justify-between">
          <p>&copy; 2026 House Of EQ LLC</p>
          <p>Sessions are non-medical, non-diagnostic and talk-based.</p>
        </div>
      </Container>
    </footer>
  )
}
