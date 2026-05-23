export type ProcessStep = {
  index: string
  title: string
  body: string
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Brief',
    body: 'You describe the task. I ask questions.',
  },
  {
    index: '02',
    title: 'Scope',
    body: 'I return with scope and price within 24 hours.',
  },
  {
    index: '03',
    title: 'Build',
    body: 'Iterations every 2–3 days. You stay in the loop.',
  },
  {
    index: '04',
    title: 'Ship',
    body: 'Live on schedule. The code stays yours.',
  },
]
