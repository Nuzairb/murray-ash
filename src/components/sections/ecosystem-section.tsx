import Image from 'next/image'
import { Arrow, Container, Reveal, Section, SectionHeader } from '@/components/shared'
import { LINKS } from '@/lib/site'

const OFFERINGS = [
  {
    title: 'Self-Study Course',
    body: 'The complete 8-module Science of Self curriculum.',
    cta: 'Enrol now',
    href: LINKS.course,
    image: '/images/course.jpg',
  },
  {
    title: 'Retreats',
    body: 'Immersive, in-person experiences for rapid emotional and somatic reset.',
    cta: 'View dates',
    href: LINKS.retreat,
    image: '/images/retreat.jpg',
  },
  {
    title: 'NSC Community',
    body: 'Weekly practices, support, and guided integration.',
    cta: 'Join the community',
    href: LINKS.nsc,
    image: '/images/training-room.jpg',
  },
  {
    title: 'Intuition: The Science of Self',
    body: 'The book. A low-commitment introduction to the method.',
    cta: 'Get your copy',
    href: LINKS.book,
    image: '/images/book.jpg',
  },
  {
    title: 'Free Masterclass',
    body: 'A 20-minute introduction to nervous-system mapping and pattern change.',
    cta: 'Watch now',
    href: LINKS.masterclass,
    image: '/images/masterclass.jpg',
  },
  {
    title: 'Tools & Resources',
    body: 'Exercises, downloads, and practices.',
    cta: 'Get access',
    href: LINKS.resources,
    image: '/images/studio.jpg',
  },
] as const

export function EcosystemSection() {
  return (
    <Section id="ecosystem" className="bg-surface">
      <Container className="flex flex-col gap-14 md:gap-20">
        <SectionHeader
          label="The Science of Self ecosystem"
          heading="Go deeper, *at your own pace.*"
          intro="Six ways into the method — from a single book to a week away."
        />
        <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((offering, index) => (
            <li key={offering.title}>
              <Reveal delay={(index % 3) * 100}>
                <a href={offering.href} className="group flex flex-col gap-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-line">
                    <Image
                      src={offering.image}
                      alt=""
                      fill
                      sizes="(min-width: 1200px) 380px, (min-width: 810px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-title">{offering.title}</h3>
                    <p className="text-body text-muted">{offering.body}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-label font-medium text-copper underline decoration-current/30 underline-offset-[6px] group-hover:decoration-current">
                    {offering.cta}
                    <Arrow />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
