const memoryStore = new Map<string, any>();

export function setMemory(key: string, value: any): void {
  memoryStore.set(key, value);
}

export function getMemory(key: string): any {
  return memoryStore.get(key);
}

export function clearMemory(key: string): void {
  memoryStore.delete(key);
}
