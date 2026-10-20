import { cn } from '@/lib/utils'

/**
 * The "grounded self" mark: three rings resting on one point. Layers of self, settling onto
 * the same ground, read as both a ripple through the nervous system and a body at rest.
 */
export function SelfMark({ className, strokeWidth = 1.4 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className={cn('size-8 shrink-0', className)}>
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
        <circle cx="16" cy="16" r="14" />
        <circle cx="16" cy="20.5" r="9.5" />
        <circle cx="16" cy="25" r="5" />
      </g>
    </svg>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <SelfMark className="size-7 text-copper" />
      <span className="font-heading text-[26px] leading-none tracking-[-0.3px]">Murray Ash</span>
    </span>
  )
}

/** The course lockup. `tone="dark"` is for night grounds. */
export function SosLockup({
  className,
  tone = 'light',
}: {
  className?: string
  tone?: 'light' | 'dark'
}) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <SelfMark
        className={cn('size-10', tone === 'light' ? 'text-copper' : 'text-copper-bright')}
        strokeWidth={1.2}
      />
      <span className="flex flex-col">
        <span className="text-eyebrow font-semibold uppercase">SOS Method</span>
        <span className="font-heading text-[22px] leading-[24px] italic">The Science of Self</span>
      </span>
    </span>
  )
}
