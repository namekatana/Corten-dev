import { useTranslation } from 'react-i18next'
import { aboutPointKeys } from '../../config/about'
import { AnimatedText } from '../AnimatedText/AnimatedText'
import './AboutPoints.css'

export function AboutPoints() {
  const { t } = useTranslation()

  return (
    <ul className="aboutPoints">
      {aboutPointKeys.map((key) => (
        <li key={key} className="aboutPoint">
          <span className="aboutPointMark" aria-hidden="true">
            →
          </span>
          <AnimatedText text={t(key)} />
        </li>
      ))}
    </ul>
  )
}
