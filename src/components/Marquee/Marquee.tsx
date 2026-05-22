import { marqueeLabel } from '../../config/marquee'
import './Marquee.css'

const marqueeCopies = 4

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marqueeTrack">
        {Array.from({ length: marqueeCopies }, (_, index) => (
          <span key={index} className="marqueeContent">
            {marqueeLabel}
          </span>
        ))}
      </div>
    </div>
  )
}
