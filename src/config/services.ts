export type ServiceItem = {
  index: string
  title: string
  description: string
}

export const serviceItems: ServiceItem[] = [
  {
    index: '01',
    title: 'AI Integrations',
    description: 'Any LLM API, chatbots, automation',
  },
  {
    index: '02',
    title: 'Web Applications',
    description: 'React · TypeScript · FastAPI backend',
  },
  {
    index: '03',
    title: 'Landing Pages',
    description: 'Fast, deployed, no fluff',
  },
  {
    index: '04',
    title: 'Ongoing support',
    description: 'Monthly retainer, from $150/mo',
  },
]

export const serviceAsideLines = [
  'Currently available',
  'Response within 24h',
  'Based in Ukraine · Works globally',
]
