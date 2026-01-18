# session-helper

Developer utility for managing sessions, memory, and TTL in modular knowledge API integrations.

## Contents

- Session ID generation
- In-memory context storage per session
- Temporary memory store
- TTL (time-to-live) value storage

---

## Structure

session-helper/
├── session/
│ ├── id.ts
│ ├── context.ts
│ └── memory.ts
├── time/
│ └── ttl.ts
├── index.ts


---

## Functions

### generateSessionId()

Returns a random unique session ID string.

---

### addToContext(sessionId, entry)

Adds a message or string to a session-specific context list.

### getContext(sessionId)

Returns the full context array for the given session.

### clearContext(sessionId)

Deletes all context entries for the session.

---

### setMemory(key, value)

Stores a value in temporary memory.

### getMemory(key)

Retrieves a value from memory by key.

### clearMemory(key)

Deletes a memory value by key.

---

### setWithTTL(key, value, ttlMs)

Stores a value with time-to-live (in milliseconds).

### getWithTTL(key)

Returns the stored value if it's still valid. Returns `null` if expired.

---

## Example

```ts
import {
  generateSessionId,
  addToContext,
  getContext,
  setWithTTL,
  getWithTTL
} from 'session-helper';

const sessionId = generateSessionId();

addToContext(sessionId, 'User asked about GDPR');
addToContext(sessionId, 'System replied with summary');

const context = getContext(sessionId);

setWithTTL(sessionId, context, 60000);

const cached = getWithTTL(sessionId);

License

MIT