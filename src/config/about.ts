export const aboutParagraphs = [
  'I build web products — interfaces, APIs, and the glue between them. Not pitch decks, not slideware. Stuff people actually click and pay for.',
  'AI integrations are a big part of what I do. Not because it is trendy, but because a good bot or automation saves real hours when the backend and data are done right.',
  'What sets me apart is straight talk and tight scope. I ship in small slices, keep you in the loop, and leave code that the next person can read without a map.',
]

export const aboutPoints = [
  'Weekly delivery with a fixed scope',
  'Readable handoff for the next developer',
  'Direct contact — no account managers',
]

export type StackGroup = {
  label: string
  items: string[]
}

export const stackGroups: StackGroup[] = [
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
  },
  {
    label: 'Backend',
    items: ['Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    label: 'Tooling',
    items: ['Claude API', 'Git', 'Vercel', 'Docker'],
  },
]
