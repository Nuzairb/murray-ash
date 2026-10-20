import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type Align = 'start' | 'center'
type Tone = 'light' | 'dark'

/** A full-bleed band. `tone="dark"` switches the ground to night and text to canvas. */
export function Section({
  id,
  children,
  className,
  py = 'py-[96px] md:py-[128px]',
  tone = 'light',
}: {
  id?: string
  children: React.ReactNode
  className?: string
  py?: string
  tone?: Tone
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative px-5 md:px-10',
        py,
        tone === 'dark' && 'bg-night text-canvas',
        className,
      )}
    >
      {children}
    </section>
  )
}

export function Container({
  children,
  className,
  max = 'max-w-[1200px]',
}: {
  children: React.ReactNode
  className?: string
  max?: string
}) {
  return <div className={cn('mx-auto w-full', max, className)}>{children}</div>
}

/** Uppercase tracked label with a short copper rule in front of it. */
export function Eyebrow({
  children,
  tone = 'light',
  className,
}: {
  children: React.ReactNode
  tone?: Tone
  className?: string
}) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-3 text-eyebrow font-medium uppercase',
        tone === 'light' ? 'text-copper' : 'text-copper-bright',
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-current" />
      {children}
    </p>
  )
}

/**
 * The display heading. Wrap accent words in asterisks to set them in italic:
 * `Two paths, *one method*.`
 */
export function Heading({
  text,
  as: Tag = 'h2',
  className,
}: {
  text: string
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}) {
  const parts = text.split('*')
  return (
    <Tag
      className={cn(
        'font-heading text-display-sm text-balance md:text-display',
        className,
      )}
    >
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <em key={index} className="italic">
            {part}
          </em>
        ) : (
          part
        ),
      )}
    </Tag>
  )
}

export function SectionHeader({
  label,
  heading,
  intro,
  align = 'start',
  tone = 'light',
  className,
}: {
  label?: string
  heading: string
  intro?: React.ReactNode
  align?: Align
  tone?: Tone
  className?: string
}) {
  const isCentred = align === 'center'
  return (
    <Reveal
      className={cn('flex flex-col gap-6', isCentred && 'items-center text-center', className)}
    >
      {label ? <Eyebrow tone={tone}>{label}</Eyebrow> : null}
      <Heading text={heading} className="max-w-[760px]" />
      {intro ? (
        <p
          className={cn(
            'max-w-[560px] text-lead',
            tone === 'light' ? 'text-muted' : 'text-mist',
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  )
}
