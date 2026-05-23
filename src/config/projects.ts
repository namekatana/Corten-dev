export type ProjectSize = 'large' | 'small' | 'wide'

export type ProjectPattern = 'grid' | 'lines' | 'dots' | 'cross'

export type ProjectAccentShape = 'circle' | 'line' | 'arc' | 'ring'

export type Project = {
  id: string
  size: ProjectSize
  tech: string
  title: string
  description: string
  outcome: string
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
    description: 'Full-stack product shell with auth, billing, and admin.',
    outcome: 'Launched in 12 days · In production',
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
    description: 'Realtime metrics gateway for ops dashboards.',
    outcome: 'Shipped in 3 weeks · 40k events/day',
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
    description: 'Document workflows with RAG and tool routing.',
    outcome: 'MVP in 10 days · Used by 3 teams',
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
    description: 'Headless storefront with edge caching and CMS sync.',
    outcome: 'Live in 5 weeks · Processing orders',
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
    description: 'Tokens, primitives, and docs for multi-brand delivery.',
    outcome: 'Adopted across 4 products · In daily use',
    year: '2024',
    href: '#',
    pattern: 'grid',
    accentShape: 'circle',
  },
]
