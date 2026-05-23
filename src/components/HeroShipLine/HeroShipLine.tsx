import { useTranslation } from 'react-i18next'
import { useCountUp } from '../../hooks/useCountUp'
import { heroShipCounts } from '../../config/heroShip'
import './HeroShipLine.css'

type HeroShipLineProps = {
  play: boolean
}

export function HeroShipLine({ play }: HeroShipLineProps) {
  const { t, i18n } = useTranslation()
  const projects = useCountUp({
    target: heroShipCounts.projects,
    play,
    duration: 1.4,
  })
  const clients = useCountUp({
    target: heroShipCounts.clients,
    play,
    duration: 1.4,
  })

  return (
    <p className="heroShipLine" aria-live="polite" key={i18n.language}>
      {t('hero.shipBefore')}{' '}
      <span className="heroShipCount">{projects}</span> {t('hero.shipMid')}{' '}
      <span className="heroShipCount">
        {clients}
        {heroShipCounts.clientSuffix}
      </span>{' '}
      {t('hero.shipAfter')}
    </p>
  )
}
