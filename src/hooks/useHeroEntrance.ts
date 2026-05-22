import { useEffect, useState } from 'react'
import { useIntro } from '../context/IntroContext'

export function useHeroEntrance() {
  const { heroReady } = useIntro()
  const [play, setPlay] = useState(false)

  useEffect(() => {
    if (!heroReady) {
      setPlay(false)
      return
    }

    let innerFrame = 0
    const outerFrame = requestAnimationFrame(() => {
      innerFrame = requestAnimationFrame(() => setPlay(true))
    })

    return () => {
      cancelAnimationFrame(outerFrame)
      cancelAnimationFrame(innerFrame)
    }
  }, [heroReady])

  return play
}
