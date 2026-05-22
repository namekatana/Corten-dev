import { aboutPoints } from '../../config/about'
import './AboutPoints.css'

export function AboutPoints() {
  return (
    <ul className="aboutPoints">
      {aboutPoints.map((point) => (
        <li key={point} className="aboutPoint">
          <span className="aboutPointMark" aria-hidden="true">
            →
          </span>
          {point}
        </li>
      ))}
    </ul>
  )
}
