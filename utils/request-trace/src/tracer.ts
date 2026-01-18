import { TraceResult, TraceStep, TraceOptions } from './types'
import { startStep, endStep } from './step'
import { now, duration } from './timer'

export function createTracer(options: TraceOptions = {}) {
  const steps: TraceStep[] = []
  const startedAt = now()
  const enabled = options.enabled !== false

  function step(label: string) {
    if (!enabled) return () => {}

    const s = startStep(label)
    steps.push(s)

    return () => {
      const finished = endStep(s)
      Object.assign(s, finished)
    }
  }

  function finish(): TraceResult {
    const finishedAt = now()
    return {
      id: crypto.randomUUID(),
      steps,
      startedAt,
      finishedAt,
      totalDuration: duration(startedAt, finishedAt),
    }
  }

  return { step, finish }
}
