export function now(): number {
  return Date.now()
}

export function duration(start: number, end: number): number {
  return end - start
}
