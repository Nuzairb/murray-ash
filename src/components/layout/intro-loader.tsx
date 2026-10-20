'use client'

import { useLenis } from 'lenis/react'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { INTRO_SEEN_KEY } from '@/lib/site'
import { isLoose, Rings, useRingMotion, type Phase } from './intro-rings'

const HOLD_MS = 1200
const NAME = 'Murray Ash'

const CHAPTERS = [
  { phase: 'scatter', text: 'A life, scattered by old patterns.' },
  { phase: 'breathe', text: 'Pause. Breathe. Notice.' },
  { phase: 'ground', text: 'Return to the ground beneath you.' },
] as const

const TIMELINE: Partial<Record<Phase, [Phase, number]>> = {
  scatter: ['breathe', 1800],
  breathe: ['ground', 2600],
  ground: ['named', 1300],
  named: ['reveal', 1500],
  reveal: ['done', 900],
}
const REDUCED_TIMELINE: Partial<Record<Phase, [Phase, number]>> = {
  named: ['reveal', 1400],
  reveal: ['done', 400],
}

// Storage throws when blocked (private modes, strict settings). Treat that as already seen so
// the site is never held behind an intro that can't remember it played.
function hasSeenIntro(): boolean {
  try {
    return sessionStorage.getItem(INTRO_SEEN_KEY) !== null
  } catch {
    return true
  }
}

function markIntroSeen() {
  try {
    sessionStorage.setItem(INTRO_SEEN_KEY, '1')
  } catch {
    // Nothing to persist to; hasSeenIntro already skips the intro in this case.
  }
}

function useHold(onComplete: () => void) {
  const [isHolding, setIsHolding] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const start = () => {
    setIsHolding(true)
    timer.current = setTimeout(onComplete, HOLD_MS)
  }
  const end = () => {
    setIsHolding(false)
    clearTimeout(timer.current)
  }

  useEffect(() => () => clearTimeout(timer.current), [])
  return { isHolding, start, end }
}

const subscribeNever = () => () => {}
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)'

function subscribeReducedMotion(onChange: () => void) {
  const query = matchMedia(REDUCED_QUERY)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

/** Seen visitors skip the story; reduced motion skips straight to the name. */
function resolvePhase(
  storyPhase: Phase,
  { isSeen, isReduced }: { isSeen: boolean; isReduced: boolean },
): Phase {
  if (isSeen) return 'done'
  if (isReduced && isLoose(storyPhase)) return 'named'
  return storyPhase
}

export function IntroLoader() {
  const [storyPhase, setPhase] = useState<Phase>('scatter')
  // Both are browser-only facts; the server snapshot plays the intro and the inline script in
  // layout.tsx hides it before paint when it has already been seen.
  const isSeen = useSyncExternalStore(subscribeNever, hasSeenIntro, () => false)
  const isReduced = useSyncExternalStore(
    subscribeReducedMotion,
    () => matchMedia(REDUCED_QUERY).matches,
    () => false,
  )
  const phase = resolvePhase(storyPhase, { isSeen, isReduced })
  const lenis = useLenis()
  const motion = useRingMotion(phase, isReduced)
  const ground = () => setPhase((current) => (isLoose(current) ? 'ground' : current))
  const hold = useHold(ground)

  useEffect(() => {
    const step = (isReduced ? REDUCED_TIMELINE : TIMELINE)[phase]
    if (!step) return
    const id = setTimeout(() => setPhase(step[0]), step[1])
    return () => clearTimeout(id)
  }, [phase, isReduced])

  useEffect(() => {
    if (phase === 'done') markIntroSeen()
    const isLocked = phase !== 'done' && phase !== 'reveal'
    document.documentElement.style.overflow = isLocked ? 'hidden' : ''
    if (isLocked) lenis?.stop()
    else lenis?.start()
  }, [phase, lenis])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPhase((current) => (current === 'done' ? current : 'reveal'))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (phase === 'done') return null

  return (
    <div
      data-phase={phase}
      data-holding={hold.isHolding}
      onPointerDown={hold.start}
      onPointerUp={hold.end}
      onPointerLeave={hold.end}
      onPointerCancel={hold.end}
      className="intro-loader fixed inset-0 z-[100] flex touch-none flex-col items-center justify-center bg-canvas select-none"
    >
      <button
        type="button"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={() => setPhase('reveal')}
        className="absolute top-6 right-5 text-label text-muted underline-offset-4 hover:underline md:right-10"
      >
        Skip intro
      </button>

      <Rings {...motion} />

      <div aria-live="polite" className="relative mt-14 h-[72px] w-full max-w-[520px] px-5 text-center">
        {CHAPTERS.map((chapter) => (
          <p
            key={chapter.phase}
            data-active={chapter.phase === phase}
            className="intro-chapter absolute inset-x-5 top-0 font-heading text-title italic md:text-title-lg"
          >
            {chapter.text}
          </p>
        ))}
        <div className="intro-name absolute inset-x-0 top-0 flex flex-col items-center gap-2">
          <p aria-label={NAME} className="font-heading text-display-sm md:text-display">
            {NAME.split('').map((letter, index) => (
              <span
                key={index}
                aria-hidden
                className="intro-letter inline-block whitespace-pre"
                style={{ '--i': index } as React.CSSProperties}
              >
                {letter}
              </span>
            ))}
          </p>
          <p className="intro-tagline text-eyebrow font-medium text-copper uppercase">
            The Science of Self
          </p>
        </div>
      </div>

      <button
        type="button"
        onKeyDown={(event) => {
          if ((event.key === ' ' || event.key === 'Enter') && !event.repeat) hold.start()
        }}
        onKeyUp={hold.end}
        className="intro-hint absolute bottom-10 flex items-center gap-3 text-label text-muted"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="size-6 -rotate-90">
          <circle cx="12" cy="12" r="10" className="fill-none stroke-line" strokeWidth="1.5" />
          <circle
            cx="12"
            cy="12"
            r="10"
            pathLength={1}
            className="intro-hold fill-none stroke-copper"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="2.5" className="fill-copper" />
        </svg>
        Press and hold to ground yourself
      </button>
    </div>
  )
}
