import { cn } from '@/lib/utils'

const VARIANTS = {
  primary: 'bg-copper text-canvas hover:bg-copper-deep',
  outline: 'text-ink ring-1 ring-inset ring-ink/25 hover:bg-ink hover:text-canvas',
  light: 'bg-canvas text-ink hover:bg-white',
  ghost: 'text-canvas ring-1 ring-inset ring-canvas/30 hover:bg-canvas hover:text-night',
} as const

export function Arrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
    >
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function CtaButton({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: keyof typeof VARIANTS
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex h-12 items-center justify-center gap-2.5 rounded-[100px] px-6 text-label font-medium transition-colors duration-300',
        VARIANTS[variant],
        className,
      )}
    >
      {children}
      <Arrow />
    </a>
  )
}

/** An underlined inline link with a trailing arrow, used on cards. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 text-label font-medium underline decoration-current/30 underline-offset-[6px] transition-colors hover:decoration-current',
        className,
      )}
    >
      {children}
      <Arrow />
    </a>
  )
}
