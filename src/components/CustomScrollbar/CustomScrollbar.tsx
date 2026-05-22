import { useScrollMetrics } from '../../hooks/useScrollMetrics'
import './CustomScrollbar.css'

export function CustomScrollbar() {
  const { scrollable, thumbHeight, thumbOffset, trackHeight } = useScrollMetrics()

  if (!scrollable) {
    return null
  }

  return (
    <div
      className="customScrollbar"
      aria-hidden="true"
    >
      <div
        className="customScrollbarTrack"
        style={{ height: trackHeight }}
      >
        <div
          className="customScrollbarThumb"
          style={{
            height: thumbHeight,
            transform: `translateY(${thumbOffset}px)`,
          }}
        />
      </div>
    </div>
  )
}
