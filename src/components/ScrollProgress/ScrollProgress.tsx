import { useScrollProgress } from '../../hooks/useScrollProgress'
import './ScrollProgress.css'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="scrollProgress"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-label="Reading progress"
    >
      <div
        className="scrollProgressBar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
