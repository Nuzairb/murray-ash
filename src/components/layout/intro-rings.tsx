'use client'

import { useEffect, useRef } from 'react'

export type Phase = 'scatter' | 'breathe' | 'ground' | 'named' | 'reveal' | 'done'

export const isLoose = (phase: Phase) => phase === 'scatter' || phase === 'breathe'

// `depth` is how hard the cursor pulls each ring while the self is unsettled: the innermost
// ring is the most reactive. `drift` staggers the idle wander so the rings never move as one.
const RINGS = [
  { cy: 16, r: 14, depth: 1.5, drift: 0 },
  { cy: 20.5, r: 9.5, depth: 2.5, drift: 2.1 },
  { cy: 25, r: 5, depth: 3.5, drift: 4.2 },
] as const

/**
 * Drift, breath and cursor pull are all continuous, so they run in one rAF loop and ease to
 * zero once the rings ground; CSS keyframes would snap back when the phase changes.
 */
export function useRingMotion(phase: Phase, isReduced: boolean) {
  const ringRefs = useRef<(SVGGElement | null)[]>([])
  const breathRef = useRef<SVGGElement>(null)
  const phaseRef = useRef(phase)

  useEffect(() => {
    phaseRef.current = phase
  }, [phase])

  useEffect(() => {
    if (isReduced) return
    const hasFinePointer = matchMedia('(pointer: fine)').matches
    const pointer = { x: 0, y: 0 }
    const pull = { x: 0, y: 0 }
    let looseness = 1
    let breath = 0
    let frame = 0

    const onMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / innerWidth) * 2 - 1
      pointer.y = (event.clientY / innerHeight) * 2 - 1
    }

    const tick = (time: number) => {
      const current = phaseRef.current
      const seconds = time / 1000
      looseness += ((isLoose(current) ? 1 : 0) - looseness) * 0.06
      breath += ((current === 'breathe' ? 1 : 0) - breath) * 0.05
      const target = hasFinePointer && isLoose(current) ? pointer : { x: 0, y: 0 }
      pull.x += (target.x - pull.x) * 0.08
      pull.y += (target.y - pull.y) * 0.08

      RINGS.forEach((ring, index) => {
        const el = ringRefs.current[index]
        if (!el) return
        const driftX = Math.sin(seconds * 1.3 + ring.drift) * 0.9 * looseness
        const driftY = Math.cos(seconds * 1.1 + ring.drift) * 0.7 * looseness
        const x = pull.x * ring.depth * looseness + driftX
        const y = pull.y * ring.depth * looseness + driftY
        el.style.transform = `translate(${x}px, ${y}px)`
      })

      const scale = 1 + Math.sin(seconds * (Math.PI / 1.3)) * 0.04 * breath
      breathRef.current?.style.setProperty('transform', `scale(${scale})`)
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    frame = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [isReduced])

  return { ringRefs, breathRef }
}

export function Rings({
  ringRefs,
  breathRef,
}: ReturnType<typeof useRingMotion>) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className="size-[200px] overflow-visible md:size-[240px]">
      <line
        x1="-64"
        x2="96"
        y1="30"
        y2="30"
        vectorEffect="non-scaling-stroke"
        className="intro-ground stroke-line"
        strokeWidth="1.5"
      />
      <g ref={breathRef} className="intro-breath">
        {RINGS.map((ring, index) => (
          <g
            key={ring.r}
            ref={(el) => {
              ringRefs.current[index] = el
            }}
          >
            <g className={`intro-ring intro-ring-${index}`}>
              <circle
                cx="16"
                cy={ring.cy}
                r={ring.r}
                pathLength={1}
                className="intro-ring-stroke fill-none stroke-ink"
                strokeWidth="0.2"
                strokeLinecap="round"
                style={{ animationDelay: `${index * 150}ms` }}
              />
            </g>
          </g>
        ))}
      </g>
      <circle cx="16" cy="30" r="0.9" className="intro-dot fill-copper" />
    </svg>
  )
}
