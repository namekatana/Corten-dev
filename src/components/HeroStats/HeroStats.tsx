import { useTranslation } from 'react-i18next'
import type { HeroStat } from '../../config/heroStats'
import { heroStats } from '../../config/heroStats'
import { useCountUp } from '../../hooks/useCountUp'
import { AnimatedText } from '../AnimatedText/AnimatedText'
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
  const { t } = useTranslation()
  const display = useCountUp({ target: stat.value, play })

  return (
    <div className="heroStat">
      <span className="heroStatValue">
        {formatStatValue(display, stat.padLength, stat.suffix)}
      </span>
      <span className="heroStatLabel">
        <AnimatedText text={t(stat.labelKey)} />
      </span>
    </div>
  )
}

type HeroStatsProps = {
  play: boolean
}

export function HeroStats({ play }: HeroStatsProps) {
  const { t } = useTranslation()

  return (
    <div className="heroStats" aria-label={t('statsAria')}>
      {heroStats.map((stat) => (
        <HeroStatItem key={stat.labelKey} stat={stat} play={play} />
      ))}
    </div>
  )
}
