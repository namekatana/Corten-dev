import { useEffect, useRef } from 'react'
import { useFinePointer } from '../../hooks/useFinePointer'
import './HeroGlow.css'

export function HeroGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const finePointer = useFinePointer()

  useEffect(() => {
    if (!finePointer) {
      return
    }

    const onMove = (event: MouseEvent) => {
      const el = glowRef.current
      if (!el) {
        return
      }
      const offsetX = (event.clientX / window.innerWidth - 0.5) * 28
      const offsetY = (event.clientY / window.innerHeight - 0.5) * 20
      el.style.transform = `translate(${offsetX}px, ${offsetY}px)`
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [finePointer])

  return <div ref={glowRef} className="heroGlow" aria-hidden="true" />
}
