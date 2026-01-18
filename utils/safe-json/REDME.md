# SafeJSON

Utility to safely parse JSON without crashing your application.

## Usage
```ts
import { safeJsonParse } from "./safeJson"

const data = safeJsonParse(
  localStorage.getItem("user") ?? "",
  { name: "Guest" }
)
Returns fallback if JSON is invalid.

## License

MIT © 2026 EngageOffice
