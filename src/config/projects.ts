export type ProjectSize = 'large' | 'small' | 'wide'

export type ProjectPattern = 'grid' | 'lines' | 'dots' | 'cross'

export type ProjectAccentShape = 'circle' | 'line' | 'arc' | 'ring'

export type Project = {
  id: string
  size: ProjectSize
  tech: string
  title: string
  year: string
  href: string
  image?: string
  pattern: ProjectPattern
  accentShape: ProjectAccentShape
}

export const projects: Project[] = [
  {
    id: 'corten-platform',
    size: 'large',
    tech: 'React · FastAPI',
    title: 'Corten Platform',
    year: '2026',
    href: '#',
    pattern: 'grid',
    accentShape: 'circle',
  },
  {
    id: 'signal-api',
    size: 'small',
    tech: 'TypeScript · FastAPI',
    title: 'Signal API',
    year: '2025',
    href: '#',
    pattern: 'dots',
    accentShape: 'line',
  },
  {
    id: 'forge-ai',
    size: 'small',
    tech: 'React · OpenAI',
    title: 'Forge AI',
    year: '2025',
    href: '#',
    pattern: 'lines',
    accentShape: 'arc',
  },
  {
    id: 'atlas-commerce',
    size: 'large',
    tech: 'React · Stripe',
    title: 'Atlas Commerce',
    year: '2024',
    href: '#',
    pattern: 'cross',
    accentShape: 'ring',
  },
  {
    id: 'mono-system',
    size: 'wide',
    tech: 'React · Storybook',
    title: 'Mono Design System',
    year: '2024',
    href: '#',
    pattern: 'grid',
    accentShape: 'circle',
  },
]
