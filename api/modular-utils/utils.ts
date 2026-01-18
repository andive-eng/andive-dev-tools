import { TokenizedInput, ChunkOptions, RateLimitStatus } from './types';

export function countTokens(text: string): number {
  return text.split(/\s+/).length;
}

export function splitIntoChunks(text: string, options: ChunkOptions = {}): TokenizedInput {
  const maxTokens = options.maxTokens || 300;
  const overlap = options.overlap || 0;
  const words = text.split(/\s+/);
  const chunks: string[] = [];

  for (let i = 0; i < words.length; i += maxTokens - overlap) {
    const chunk = words.slice(i, i + maxTokens).join(' ');
    chunks.push(chunk);
  }

  return {
    chunks,
    totalTokens: countTokens(text),
    chunkSize: maxTokens,
  };
}

export function distributeTokens(total: number, users: string[]): Record<string, number> {
  const perUser = Math.floor(total / users.length);
  return users.reduce((acc, user) => {
    acc[user] = perUser;
    return acc;
  }, {} as Record<string, number>);
}

export function parseRateLimit(headers: Record<string, string | undefined>): RateLimitStatus {
  const remaining = parseInt(headers['x-ratelimit-remaining'] || '0', 10);
  const reset = parseInt(headers['x-ratelimit-reset'] || '0', 10);
  return {
    remaining,
    resetInSeconds: reset,
  };
}
