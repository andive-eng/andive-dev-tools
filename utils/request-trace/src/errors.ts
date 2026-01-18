export class TraceError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'TraceError'
  }
}
