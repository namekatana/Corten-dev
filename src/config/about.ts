export const aboutPointKeys = [
  'about.points.delivery',
  'about.points.handoff',
  'about.points.contact',
] as const

export const aboutParagraphKeys = [
  'about.paragraphs.one',
  'about.paragraphs.two',
  'about.paragraphs.three',
] as const

export type StackGroupKey = 'frontend' | 'backend' | 'tooling'

export type StackGroup = {
  key: StackGroupKey
  items: string[]
}

export const stackGroups: StackGroup[] = [
  {
    key: 'frontend',
    items: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
  },
  {
    key: 'backend',
    items: ['Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    key: 'tooling',
    items: ['Any LLM API', 'Git', 'Vercel', 'Docker'],
  },
]
