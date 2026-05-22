import { useEffect, useRef, type RefObject } from 'react'

const lagFactor = 0.18
const linkSelector = 'a, button, [role="button"], .contactCta, .projectCard, .backToWorkBtn'

export function useCustomCursor(
  enabled: boolean,
  dotRef: RefObject<HTMLDivElement | null>,
) {
  const positionRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const hoveringRef = useRef(false)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove('customCursorOn')
      return
    }

    document.body.classList.add('customCursorOn')

    const onMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY }
    }

    const onOver = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) {
        return
      }
      const nextHover = Boolean(target.closest(linkSelector))
      if (nextHover === hoveringRef.current) {
        return
      }
      hoveringRef.current = nextHover
      const dot = dotRef.current
      if (dot) {
        dot.classList.toggle('customCursorDotHover', nextHover)
      }
    }

    const tick = () => {
      const pos = positionRef.current
      const tgt = targetRef.current
      pos.x += (tgt.x - pos.x) * lagFactor
      pos.y += (tgt.y - pos.y) * lagFactor
      const dot = dotRef.current
      if (dot) {
        dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }
      frameRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    frameRef.current = requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove('customCursorOn')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [enabled, dotRef])
}
