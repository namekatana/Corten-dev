import { animate } from 'motion'
import type { MouseEvent, ReactNode } from 'react'
import { useRef } from 'react'
import { useFinePointer } from '../../hooks/useFinePointer'

type MagneticButtonProps = {
  href: string
  className?: string
  children: ReactNode
}

export function MagneticButton({ href, className = '', children }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const finePointer = useFinePointer()

  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) {
      return
    }
    const rect = el.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2
    animate(el, { x: offsetX * 0.3, y: offsetY * 0.3 }, { duration: 0.2 })
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) {
      return
    }
    animate(el, { x: 0, y: 0 }, { type: 'spring', stiffness: 300, damping: 22 })
  }

  if (!finePointer) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  )
}
