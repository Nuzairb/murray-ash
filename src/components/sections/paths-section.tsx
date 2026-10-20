import Image from 'next/image'
import { Container, CtaButton, Reveal, Section, SectionHeader } from '@/components/shared'
import { LINKS } from '@/lib/site'

const PATHS = [
  {
    number: '01',
    kicker: 'For your life',
    title: '1:1 Somatic Therapy',
    summary:
      'A structured process to break emotional patterns, stabilise your nervous system, and understand yourself with clarity.',
    focusTitle: 'What we focus on',
    focus: [
      'Identifying emotional and behavioural patterns',
      'Regulating your nervous system in real time',
      'Working with triggers without overwhelm',
      'Healing past imprints with safety and precision',
      'Building a grounded, connected sense of self',
    ],
    image: { src: '/images/portrait-dark.jpg', alt: 'Murray Ash smiling in a dark studio' },
    cta: { label: 'Explore therapy', href: LINKS.therapy },
  },
  {
    number: '02',
    kicker: 'For your work',
    title: 'Science of Self Facilitator Certification',
    summary:
      'A 6-month, 300-hour professional training to lead sessions, groups, and retreats with confidence and ethical grounding.',
    focusTitle: 'You will learn to',
    focus: [
      'Read nervous-system signals and attachment patterns in real time',
      'Facilitate somatic and emotional processes safely and effectively',
      'Hold groups, workshops, and retreats with clarity',
      'Work within an ethical scope',
      'Use the Science of Self method in your own practice',
    ],
    image: { src: '/images/facilitating.jpg', alt: 'Murray Ash facilitating a group session' },
    cta: { label: 'Explore certification', href: LINKS.certification },
  },
] as const

function PathCard({ path, delay }: { path: (typeof PATHS)[number]; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[28px] bg-night-2 ring-1 ring-night-line">
        <div className="relative aspect-[16/10]">
          <Image
            src={path.image.src}
            alt={path.image.alt}
            fill
            sizes="(min-width: 1200px) 580px, 100vw"
            className="object-cover"
          />
          <span className="absolute top-5 left-5 rounded-[100px] bg-night/70 px-3.5 py-1.5 text-eyebrow font-medium text-canvas uppercase backdrop-blur-md">
            {path.number} &middot; {path.kicker}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-6 p-7 md:p-10">
          <h3 className="font-heading text-title md:text-title-lg">{path.title}</h3>
          <p className="text-body text-mist">{path.summary}</p>
          <div className="flex flex-col gap-3">
            <p className="text-eyebrow font-medium text-copper-bright uppercase">
              {path.focusTitle}
            </p>
            <ul className="flex flex-col">
              {path.focus.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-night-line py-3 text-body text-canvas/90 last:border-0"
                >
                  <span aria-hidden className="mt-[11px] size-1.5 shrink-0 rounded-full bg-copper-bright" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <CtaButton href={path.cta.href} variant="light" className="mt-auto self-start">
            {path.cta.label}
          </CtaButton>
        </div>
      </article>
    </Reveal>
  )
}

export function PathsSection() {
  return (
    <Section id="paths" tone="dark">
      <Container className="flex flex-col gap-14 md:gap-20">
        <SectionHeader
          tone="dark"
          label="Two ways to begin"
          heading="Two paths. *One method.*"
          intro="Whether you are here to change your own life or to guide others through theirs, both paths are built on the Science of Self."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {PATHS.map((path, index) => (
            <PathCard key={path.title} path={path} delay={index * 120} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
