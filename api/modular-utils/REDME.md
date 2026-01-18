# modular-utils

Developer utilities for modular knowledge APIs.

## Contents

- Token-based text chunking
- Token distribution across users
- Rate limit parsing from response headers

## Functions

### splitIntoChunks(text, options?)

Splits a long input string into token-based chunks.

**Options:**
- `maxTokens` – max tokens per chunk (default: 300)
- `overlap` – number of overlapping tokens between chunks (default: 0)

**Returns:**
```ts
{
  chunks: string[];
  totalTokens: number;
  chunkSize: number;
}
distributeTokens(total, users)

Distributes a total token budget equally across multiple user IDs.

Example:
distributeTokens(1000, ['a', 'b', 'c'])
// ➜ { a: 333, b: 333, c: 333 }

parseRateLimit(headers)

Parses rate limit information from API response headers.

Expected headers:

x-ratelimit-remaining

x-ratelimit-reset

Returns:
{
  remaining: number;
  resetInSeconds: number;
}

Usage
import {
  splitIntoChunks,
  distributeTokens,
  parseRateLimit
} from './utils';


## License

MIT © 2026 EngageOffice
