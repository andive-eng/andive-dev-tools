import { TraceStep } from './types'
import { now, duration } from './timer'

export function startStep(label: string): TraceStep {
  return {
    label,
    start: now(),
  }
}

export function endStep(step: TraceStep): TraceStep {
  const end = now()
  return {
    ...step,
    end,
    duration: dur
