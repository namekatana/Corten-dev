import { animate } from 'motion'
import { useEffect, useState } from 'react'
import { expoOut } from '../config/motionEase'

type UseCountUpOptions = {
  target: number
  play: boolean
  duration?: number
}

export function useCountUp({ target, play, duration = 1.5 }: UseCountUpOptions) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!play) {
      setValue(0)
      return
    }

    const controls = animate(0, target, {
      duration,
      ease: expoOut,
      onUpdate: (latest) => setValue(Math.round(latest)),
    })

    return () => controls.stop()
  }, [play, target, duration])

  return value
}
