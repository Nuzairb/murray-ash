import { Container, Reveal, Section, SectionHeader, SelfMark, SosLockup } from '@/components/shared'

const ELEMENTS = [
  'Nervous-system mapping',
  'Attachment & relational patterns',
  'Somatic emotional processing',
  'Behavioural rewiring',
  'Practical integration',
] as const

export function MethodSection() {
  return (
    <Section id="method" className="overflow-hidden">
      <SelfMark
        className="pointer-events-none absolute top-1/2 -right-56 hidden size-[560px] -translate-y-1/2 text-line lg:block"
        strokeWidth={0.3}
      />
      <Container className="relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-10 lg:sticky lg:top-32 lg:self-start">
          <SectionHeader
            label="Why this method works"
            heading="A clear structure for *lasting* change."
            intro="The Science of Self blends somatics, attachment theory, trauma work, and 20 years of global experiential study."
          />
          <Reveal delay={120} className="flex flex-col gap-8">
            <p className="max-w-[480px] text-body text-muted">
              It gives you a clear, structured way to understand the patterns driving behaviour —
              so change is facilitated, not forced.
            </p>
            <SosLockup />
          </Reveal>
        </div>

        <Reveal delay={80}>
          <p className="mb-4 text-eyebrow font-medium text-faint uppercase">Core elements</p>
          <ol className="border-t border-line">
            {ELEMENTS.map((element, index) => (
              <li
                key={element}
                className="group flex items-baseline gap-6 border-b border-line py-7 md:gap-10"
              >
                <span className="w-8 shrink-0 text-label font-medium text-copper tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-heading text-title transition-transform duration-500 group-hover:translate-x-2 md:text-title-lg">
                  {element}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </Section>
  )
}
