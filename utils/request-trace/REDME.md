# Request Trace Helper

Lightweight utility to trace execution steps and measure durations.

## Install
Copy the folder into your project.

## Usage
```ts
import { createTracer, formatTrace } from './request-trace'

const tracer = createTracer()

const endDb = tracer.step('db')
await queryDb()
endDb()

const endLogic = tracer.step('logic')
runLogic()
endLogic()

const result = tracer.finish()
console.log(formatTrace(result))

What it does
Tracks named execution steps


Measures durations per step


Outputs structured trace data


No dependencies




## License

MIT © 2026 EngageOffice
