import Image from 'next/image'
import { Container, CtaButton, Eyebrow, Heading, Reveal, SelfMark } from '@/components/shared'
import { LINKS } from '@/lib/site'

const STATS = [
  { value: '20+', label: 'Years of practice' },
  { value: '300h', label: 'Facilitator certification' },
  { value: 'IPHM', label: 'Accredited training' },
] as const

const PAST_CLIENTS = ['Coachella', 'Red Bull', 'MedMen'] as const

function Portrait() {
  return (
    <Reveal delay={200} className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-surface">
        <Image
          src="/images/portrait-seated.jpg"
          alt="Murray Ash seated cross-legged in a white shirt"
          fill
          preload
          sizes="(min-width: 1200px) 480px, (min-width: 810px) 60vw, 100vw"
          className="object-cover object-[50%_30%]"
        />
      </div>
      <div className="absolute -bottom-6 left-5 flex max-w-[300px] items-center gap-3.5 rounded-[18px] bg-night p-4 pr-5 text-canvas shadow-[0_20px_40px_-20px_rgba(23,26,38,0.6)] md:-left-8">
        <SelfMark className="size-9 text-copper-bright" strokeWidth={1.3} />
        <p className="text-label text-canvas/90">
          Certified Compassionate Inquiry practitioner, trained under Dr Gabor Maté
        </p>
      </div>
    </Reveal>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pt-[132px] pb-20 md:px-10 lg:pt-[160px]">
      <SelfMark
        className="pointer-events-none absolute -top-56 -right-64 size-[760px] text-line/60"
        strokeWidth={0.3}
      />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal>
            <Eyebrow>Psychotherapy-informed somatic practice</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <Heading
              as="h1"
              text="Somatic therapy & training for people *serious* about change."
              className="text-display-sm md:text-display lg:text-display-xl"
            />
          </Reveal>
          <Reveal delay={160} className="flex flex-col gap-8">
            <p className="max-w-[520px] text-lead text-muted">
              Two ways to transform your life or your work — built on the Science of Self method.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton href={LINKS.therapy}>Explore therapy</CtaButton>
              <CtaButton href={LINKS.certification} variant="outline">
                Explore certification
              </CtaButton>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <dl className="mt-4 grid max-w-[560px] grid-cols-3 gap-6 border-t border-line pt-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <dt className="order-2 text-label text-muted">{stat.label}</dt>
                  <dd className="order-1 font-heading text-[36px] leading-[36px] md:text-stat">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Portrait />
      </Container>

      <Container className="relative mt-24 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-10">
        <p className="text-eyebrow font-medium text-faint uppercase">Past clients include</p>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {PAST_CLIENTS.map((client) => (
            <li key={client} className="font-heading text-title text-ink/55 italic">
              {client}
            </li>
          ))}
        </ul>
        <p className="text-label text-muted md:ml-auto">Trusted worldwide by private clients</p>
      </Container>
    </section>
  )
}
