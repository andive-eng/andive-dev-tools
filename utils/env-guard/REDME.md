# env-guard

Small utility to validate required environment variables at app startup.

## Usage

```ts
import { validateEnv } from './env-guard'

validateEnv({
  DATABASE_URL: 'string',
  PORT: 'number',
  NODE_ENV: ['development', 'production']
})

If a variable is missing or invalid, the app will throw a clear error
before anything else runs.
Notes
Does not load .env files


No side effects


Works with Node, Next.js, TypeScript


## License

MIT © 2026 EngageOffice


