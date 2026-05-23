export type ProcessStepKey = 'brief' | 'scope' | 'build' | 'ship'

export type ProcessStep = {
  index: string
  key: ProcessStepKey
}

export const processSteps: ProcessStep[] = [
  { index: '01', key: 'brief' },
  { index: '02', key: 'scope' },
  { index: '03', key: 'build' },
  { index: '04', key: 'ship' },
]
