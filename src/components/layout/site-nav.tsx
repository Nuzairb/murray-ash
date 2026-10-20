'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CtaButton, Wordmark } from '@/components/shared'
import { LINKS, NAV } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 px-5 transition-colors duration-500 md:px-10',
        (isScrolled || isOpen) && 'bg-canvas/90 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-6">
        <Link href="/" aria-label="Murray Ash home">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-label text-ink/75 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={LINKS.login} className="text-label text-ink/75 hover:text-ink">
            Log in
          </a>
          <CtaButton href={LINKS.contact} className="h-11 px-5">
            Book a consultation
          </CtaButton>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
          className="relative flex size-11 items-center justify-center lg:hidden"
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          <span
            aria-hidden
            className={cn(
              'absolute h-px w-6 bg-ink transition-transform duration-300',
              isOpen ? 'rotate-45' : '-translate-y-1',
            )}
          />
          <span
            aria-hidden
            className={cn(
              'absolute h-px w-6 bg-ink transition-transform duration-300',
              isOpen ? '-rotate-45' : 'translate-y-1',
            )}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="mx-auto max-w-[1200px] pt-4 pb-8 lg:hidden"
      >
        <ul className="flex flex-col">
          {NAV.map((item) => (
            <li key={item.label} className="border-b border-line">
              <a href={item.href} className="block py-3.5 font-heading text-title">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3">
          <CtaButton href={LINKS.contact}>Book a consultation</CtaButton>
          <CtaButton href={LINKS.login} variant="outline">
            Log in
          </CtaButton>
        </div>
      </div>
    </header>
  )
}
