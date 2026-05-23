import { useCountUp } from '../../hooks/useCountUp'
import { heroShipCounts } from '../../config/heroShip'
import './HeroShipLine.css'

type HeroShipLineProps = {
  play: boolean
}

export function HeroShipLine({ play }: HeroShipLineProps) {
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
    <p className="heroShipLine" aria-live="polite">
      I&apos;ve shipped{' '}
      <span className="heroShipCount">{projects}</span> projects for{' '}
      <span className="heroShipCount">
        {clients}
        {heroShipCounts.clientSuffix}
      </span>{' '}
      clients across Ukraine and Europe.
    </p>
  )
}
