import Image from 'next/image'
import { Container, CtaButton, Eyebrow, Heading, Reveal, Section } from '@/components/shared'
import { LINKS } from '@/lib/site'

const CREDENTIALS = [
  {
    title: 'Compassionate Inquiry practitioner',
    body: 'Certified under Dr Gabor Maté and Sat Dharam Kaur, ND.',
  },
  {
    title: 'Author',
    body: 'Intuition: The Science of Self, and other works on self-inquiry and introspection.',
  },
  {
    title: 'Founder & educator',
    body: 'Two IPHM-accredited Science of Self facilitator certifications, offered twice a year.',
  },
  {
    title: 'Speaker & facilitator',
    body: 'Immersive group experiences, workshops, seminars and retreats worldwide.',
  },
] as const

export function AboutSection() {
  return (
    <Section id="about">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal className="relative self-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-surface">
            <Image
              src="/images/speaking.jpg"
              alt="Murray Ash speaking into a microphone to a seated group"
              fill
              sizes="(min-width: 1200px) 520px, 100vw"
              className="object-cover object-[60%_50%] grayscale"
            />
          </div>
          <p className="absolute right-5 bottom-5 left-5 rounded-[18px] bg-canvas/90 p-5 text-label text-muted backdrop-blur-md">
            <span className="font-heading text-title text-ink italic">20+ years </span>
            devoted to psychotherapy-informed work, self-discovery and healing.
          </p>
        </Reveal>

        <div className="flex flex-col gap-10">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>Meet Murray</Eyebrow>
            <Heading text="Therapist, author, educator and *founder of the Science of Self.*" />
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-5 text-body text-muted">
            <p>
              My work integrates evidence-based psychological understanding with lived,
              experiential insight into human behaviour — helping people recognise and gently
              address the root patterns shaping emotional, behavioural and relational suffering.
            </p>
            <p>
              A formal education in Psychology and Sociology, followed by extensive postgraduate
              training across communication, counselling and somatic disciplines. I favoured
              clinical experience and mentorship over scholarship — and now teach accredited
              courses doing just that.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <dl className="grid gap-x-8 gap-y-6 border-t border-line pt-8 md:grid-cols-2">
              {CREDENTIALS.map((item) => (
                <div key={item.title} className="flex flex-col gap-1.5">
                  <dt className="font-heading text-[22px] leading-[28px]">{item.title}</dt>
                  <dd className="text-label text-muted">{item.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={200} className="flex flex-wrap gap-3">
            <CtaButton href={LINKS.about} variant="outline">
              Read the full story
            </CtaButton>
            <CtaButton href={LINKS.contact} variant="outline">
              Speaking & events enquiries
            </CtaButton>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
