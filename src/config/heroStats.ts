export type HeroStat = {
  value: number
  suffix: string
  labelKey: string
  padLength: number
}

export const heroStats: HeroStat[] = [
  { value: 12, suffix: '', labelKey: 'hero.stats.projects', padLength: 3 },
  { value: 10, suffix: '+', labelKey: 'hero.stats.clients', padLength: 3 },
  { value: 48, suffix: 'h', labelKey: 'hero.stats.response', padLength: 0 },
]
