import type { HeroStat } from '../../config/heroStats'
import { heroStats } from '../../config/heroStats'
import { useCountUp } from '../../hooks/useCountUp'
import './HeroStats.css'

function formatStatValue(value: number, padLength: number, suffix: string) {
  const core =
    padLength > 0
      ? String(value).padStart(padLength, '0')
      : String(value)
  return `${core}${suffix}`
}

type HeroStatItemProps = {
  stat: HeroStat
  play: boolean
}

function HeroStatItem({ stat, play }: HeroStatItemProps) {
  const display = useCountUp({ target: stat.value, play })

  return (
    <div className="heroStat">
      <span className="heroStatValue">
        {formatStatValue(display, stat.padLength, stat.suffix)}
      </span>
      <span className="heroStatLabel">{stat.label}</span>
    </div>
  )
}

type HeroStatsProps = {
  play: boolean
}

export function HeroStats({ play }: HeroStatsProps) {
  return (
    <div className="heroStats" aria-label="Highlights">
      {heroStats.map((stat) => (
        <HeroStatItem key={stat.label} stat={stat} play={play} />
      ))}
    </div>
  )
}
