export type HeroStat = {
  value: number
  suffix: string
  label: string
  padLength: number
}

export const heroStats: HeroStat[] = [
  { value: 12, suffix: '', label: 'Projects', padLength: 3 },
  { value: 10, suffix: '+', label: 'Clients', padLength: 3 },
  { value: 48, suffix: 'h', label: 'Avg. response', padLength: 0 },
]
