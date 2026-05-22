import { useRef } from 'react'
import { useCustomCursor } from '../../hooks/useCustomCursor'
import { useFinePointer } from '../../hooks/useFinePointer'
import './CustomCursor.css'

export function CustomCursor() {
  const finePointer = useFinePointer()
  const dotRef = useRef<HTMLDivElement>(null)
  useCustomCursor(finePointer, dotRef)

  if (!finePointer) {
    return null
  }

  return (
    <div
      ref={dotRef}
      className="customCursorDot"
      aria-hidden="true"
    />
  )
}
