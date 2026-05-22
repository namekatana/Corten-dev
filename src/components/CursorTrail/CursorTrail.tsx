import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'motion/react'
import { useFinePointer } from '../../hooks/useFinePointer'
import { TrailDot } from './TrailDot'
import './CursorTrail.css'

const trailLayers = [
  { size: 5, opacity: 0.38, spring: { stiffness: 280, damping: 28 } },
  { size: 4.5, opacity: 0.3, spring: { stiffness: 220, damping: 26 } },
  { size: 4, opacity: 0.24, spring: { stiffness: 170, damping: 24 } },
  { size: 3.5, opacity: 0.18, spring: { stiffness: 130, damping: 22 } },
  { size: 3, opacity: 0.12, spring: { stiffness: 90, damping: 20 } },
  { size: 2.5, opacity: 0.07, spring: { stiffness: 60, damping: 18 } },
]

export function CursorTrail() {
  const finePointer = useFinePointer()
  const targetX = useMotionValue(0)
  const targetY = useMotionValue(0)

  const x0 = useSpring(targetX, trailLayers[0].spring)
  const y0 = useSpring(targetY, trailLayers[0].spring)
  const x1 = useSpring(x0, trailLayers[1].spring)
  const y1 = useSpring(y0, trailLayers[1].spring)
  const x2 = useSpring(x1, trailLayers[2].spring)
  const y2 = useSpring(y1, trailLayers[2].spring)
  const x3 = useSpring(x2, trailLayers[3].spring)
  const y3 = useSpring(y2, trailLayers[3].spring)
  const x4 = useSpring(x3, trailLayers[4].spring)
  const y4 = useSpring(y3, trailLayers[4].spring)
  const x5 = useSpring(x4, trailLayers[5].spring)
  const y5 = useSpring(y4, trailLayers[5].spring)

  const chain = [
    { x: x5, y: y5, ...trailLayers[5] },
    { x: x4, y: y4, ...trailLayers[4] },
    { x: x3, y: y3, ...trailLayers[3] },
    { x: x2, y: y2, ...trailLayers[2] },
    { x: x1, y: y1, ...trailLayers[1] },
    { x: x0, y: y0, ...trailLayers[0] },
  ]

  useEffect(() => {
    if (!finePointer) {
      return
    }

    const onMove = (event: MouseEvent) => {
      targetX.set(event.clientX)
      targetY.set(event.clientY)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [finePointer, targetX, targetY])

  if (!finePointer) {
    return null
  }

  return (
    <>
      {chain.map((layer, index) => (
        <TrailDot
          key={index}
          x={layer.x}
          y={layer.y}
          size={layer.size}
          opacity={layer.opacity}
        />
      ))}
    </>
  )
}
