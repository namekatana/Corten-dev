import { useEffect, useState } from 'react'

export type ScrollMetrics = {
  scrollable: boolean
  thumbHeight: number
  thumbOffset: number
  trackHeight: number
}

export function useScrollMetrics() {
  const [metrics, setMetrics] = useState<ScrollMetrics>({
    scrollable: false,
    thumbHeight: 0,
    thumbOffset: 0,
    trackHeight: 0,
  })

  useEffect(() => {
    const update = () => {
      const viewport = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const maxScroll = documentHeight - viewport
      const trackHeight = viewport * 0.3
      const scrollable = maxScroll > 0

      if (!scrollable) {
        setMetrics({
          scrollable: false,
          thumbHeight: 0,
          thumbOffset: 0,
          trackHeight,
        })
        return
      }

      const thumbHeight = Math.max(
        (viewport / documentHeight) * trackHeight,
        24,
      )
      const travel = trackHeight - thumbHeight
      const thumbOffset = (window.scrollY / maxScroll) * travel

      setMetrics({
        scrollable: true,
        thumbHeight,
        thumbOffset,
        trackHeight,
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return metrics
}
