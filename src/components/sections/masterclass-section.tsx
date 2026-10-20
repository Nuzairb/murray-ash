import Image from 'next/image'
import { Container, CtaButton, Eyebrow, Heading, Reveal, Section } from '@/components/shared'
import { LINKS } from '@/lib/site'

const LEARNINGS = [
  'What triggers your patterns',
  'What your nervous system is doing behind the scenes',
  'One simple practice you can use today to feel calmer and more present',
] as const

export function MasterclassSection() {
  return (
    <Section id="masterclass" tone="dark">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[28px] ring-1 ring-night-line">
            <Image
              src="/images/masterclass.jpg"
              alt="Murray Ash teaching the Science of Self masterclass"
              fill
              sizes="(min-width: 1200px) 580px, 100vw"
              className="object-cover"
            />
          </div>
          <span className="absolute -top-4 right-6 rounded-[100px] bg-copper px-4 py-2 text-eyebrow font-medium text-canvas uppercase">
            Free &middot; 20 minutes
          </span>
        </Reveal>

        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow tone="dark">Free masterclass</Eyebrow>
            <Heading text="3 practices to stop repeating *old patterns.*" />
            <p className="max-w-[500px] text-lead text-mist">
              A concise, practical introduction to nervous-system mapping, emotional patterning and
              somatic regulation — taken directly from the Science of Self method.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mb-3 text-eyebrow font-medium text-copper-bright uppercase">
              In 20 minutes, you&rsquo;ll learn
            </p>
            <ol className="flex flex-col">
              {LEARNINGS.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-5 border-b border-night-line py-4 text-body text-canvas/90"
                >
                  <span className="font-heading text-[22px] leading-[26px] text-copper-bright italic">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={160}>
            <CtaButton href={LINKS.masterclass}>Get the free masterclass</CtaButton>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
