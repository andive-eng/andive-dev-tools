# API Client & Error Helper

Minimal helper for API communication and unified error handling.

---

## Folder Structure
/client
client.ts
/error
errorText.ts
---

## Environment Variables
NEXT_PUBLIC_API_URL=your_api_base_url
NEXT_PUBLIC_API_KEY=your_public_api_key
---

## Purpose

- Central API request wrapper  
- Automatic API key injection  
- Unified error handling  
- Easy to swap or extend  

---

## Scope

This helper does **not** include:
- Business logic
- Token calculation
- Add-on checks
- State management

---

## Usage

Intended as a base layer for:
- API calls
- SDKs
- Developer tooling
- Internal or external projects

---

## License

MIT © 2026 EngageOffice

