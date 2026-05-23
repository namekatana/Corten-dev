export type ServiceItem = {
  index: string
  key: 'ai' | 'web' | 'landing' | 'support'
}

export const serviceItems: ServiceItem[] = [
  { index: '01', key: 'ai' },
  { index: '02', key: 'web' },
  { index: '03', key: 'landing' },
  { index: '04', key: 'support' },
]

export const serviceAsideKeys = [
  'services.aside.available',
  'services.aside.response',
  'services.aside.location',
] as const
