import { Container, CtaButton, Heading, Reveal, Section, SelfMark } from '@/components/shared'
import { LINKS } from '@/lib/site'

export function ClosingSection() {
  return (
    <Section id="begin" className="overflow-hidden">
      <SelfMark
        className="pointer-events-none absolute top-1/2 left-1/2 size-[720px] -translate-x-1/2 -translate-y-1/2 text-line/50"
        strokeWidth={0.25}
      />
      <Container max="max-w-[820px]" className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <SelfMark className="size-12 text-copper" strokeWidth={1.1} />
        </Reveal>
        <Reveal delay={80}>
          <Heading text="You’re one decision away from your *next chapter.*" />
        </Reveal>
        <Reveal delay={160} className="flex flex-col items-center gap-8">
          <p className="text-lead text-muted">Choose the path that matches where you are right now.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <CtaButton href={LINKS.therapy}>Explore therapy</CtaButton>
            <CtaButton href={LINKS.certification} variant="outline">
              Explore certification
            </CtaButton>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
