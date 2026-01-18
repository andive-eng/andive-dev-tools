import { TraceResult } from './types'

export function formatTrace(trace: TraceResult) {
  return {
    id: trace.id,
    totalMs: trace.totalDuration,
    steps: trace.steps.map(s => ({
      label: s.label,
      ms: s.duration ?? 0,
    })),
  }
}
