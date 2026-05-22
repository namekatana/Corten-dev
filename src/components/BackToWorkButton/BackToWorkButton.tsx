import { animate } from 'motion'
import { useRef, type MouseEvent } from 'react'
import { usePageTransition } from '../../context/TransitionContext'
import { useFinePointer } from '../../hooks/useFinePointer'
import './BackToWorkButton.css'

export function BackToWorkButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const { navigate } = usePageTransition()
  const finePointer = useFinePointer()

  const goHome = () => {
    navigate('/')
  }

  const onMove = (event: MouseEvent<HTMLButtonElement>) => {
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

  return (
    <button
      ref={ref}
      type="button"
      className="btnOutline backToWorkBtn"
      onClick={goHome}
      onMouseMove={finePointer ? onMove : undefined}
      onMouseLeave={finePointer ? onLeave : undefined}
    >
      <span className="backToWorkArrow" aria-hidden="true">
        ←
      </span>
      Back to work
    </button>
  )
}
