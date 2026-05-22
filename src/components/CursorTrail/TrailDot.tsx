import { motion, type MotionValue } from 'motion/react'

type TrailDotProps = {
  x: MotionValue<number>
  y: MotionValue<number>
  size: number
  opacity: number
}

export function TrailDot({ x, y, size, opacity }: TrailDotProps) {
  const offset = size / 2

  return (
    <motion.div
      className="cursorTrailDot"
      style={{
        x,
        y,
        width: size,
        height: size,
        marginLeft: -offset,
        marginTop: -offset,
        opacity,
      }}
      aria-hidden="true"
    />
  )
}
