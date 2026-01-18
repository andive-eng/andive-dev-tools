const ttlStore = new Map<string, { value: any; expires: number }>();

export function setWithTTL(key: string, value: any, ttlMs: number): void {
  const expires = Date.now() + ttlMs;
  ttlStore.set(key, { value, expires });
}

export function getWithTTL(key: string): any {
  const entry = ttlStore.get(key);
  if (!entry || Date.now() > entry.expires) {
    ttlStore.delete(key);
    return null;
  }
  return entry.value;
}
