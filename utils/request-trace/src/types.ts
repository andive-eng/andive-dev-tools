export type TraceStep = {
  label: string
  start: number
  end?: number
  duration?: number
}

export type TraceResult = {
  id: string
  steps: TraceStep[]
  totalDuration: number
  startedAt: number
  finishedAt: number
}

export type TraceOptions = {
  enabled?: boolean
}
