import Image from 'next/image'
import { Container, Reveal, Section, SectionHeader } from '@/components/shared'

const STORIES = [
  {
    name: 'Nayara',
    theme: 'Experience & understanding',
    quote:
      'I barely recognise the person I used to be before working with Murray. I’m now able to connect with people in ways I never imagined possible.',
    image: '/images/client-3.jpg',
  },
  {
    name: 'Irene',
    theme: 'Felt safety',
    quote:
      'Murray is an extremely compassionate human. He’s intuitive and so insightful. I felt safe with him right from the start and I’m learning more about myself than I could have imagined.',
    image: '/images/client-4.jpg',
  },
  {
    name: 'Luis',
    theme: 'Experience & understanding',
    quote:
      'I have tried many modalities and psychological therapies. However, working with Murray and his multidisciplinary approach to the study of self and traumatic healing has taken me to the next level.',
    image: '/images/client-2.jpg',
  },
  {
    name: 'Alessandra',
    theme: 'A new form of love',
    quote:
      'Murray has been such an amazing conduit to my self-love, and has held a safe space for me to explore my past traumas and experience healing, and learn to hold a safe space for myself.',
    image: '/images/client-1.jpg',
  },
] as const

function StoryCard({ story, isFeatured }: { story: (typeof STORIES)[number]; isFeatured: boolean }) {
  return (
    <figure className="flex h-full flex-col justify-between gap-10 rounded-[28px] bg-white/60 p-7 ring-1 ring-line md:p-10">
      <div className="flex flex-col gap-5">
        <p className="text-eyebrow font-medium text-copper uppercase">{story.theme}</p>
        <blockquote
          className={
            isFeatured
              ? 'font-heading text-title md:text-title-lg'
              : 'font-heading text-[24px] leading-[30px]'
          }
        >
          &ldquo;{story.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="flex items-center gap-4">
        <span className="relative size-12 overflow-hidden rounded-full bg-surface">
          <Image src={story.image} alt="" fill sizes="48px" className="object-cover" />
        </span>
        <span className="text-label font-medium">{story.name}</span>
      </figcaption>
    </figure>
  )
}

export function StoriesSection() {
  return (
    <Section id="stories" className="bg-surface">
      <Container className="flex flex-col gap-14 md:gap-20">
        <SectionHeader
          label="Real stories"
          heading="In their *own words.*"
          intro="What changes when the nervous system finally feels steady."
        />
        <div className="grid gap-6 lg:grid-cols-12">
          {STORIES.map((story, index) => (
            <Reveal
              key={story.name}
              delay={(index % 2) * 120}
              className={index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}
            >
              <StoryCard story={story} isFeatured={index === 0 || index === 3} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
