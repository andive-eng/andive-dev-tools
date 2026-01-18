const contextMap = new Map<string, string[]>();

export function addToContext(sessionId: string, entry: string): void {
  if (!contextMap.has(sessionId)) contextMap.set(sessionId, []);
  contextMap.get(sessionId)!.push(entry);
}

export function getContext(sessionId: string): string[] {
  return contextMap.get(sessionId) || [];
}

export function clearContext(sessionId: string): void {
  contextMap.delete(sessionId);
}
