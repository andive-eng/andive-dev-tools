export interface TokenizedInput {
  chunks: string[];
  totalTokens: number;
  chunkSize: number;
}

export interface ChunkOptions {
  maxTokens?: number;
  overlap?: number;
}

export interface RateLimitStatus {
  remaining: number;
  resetInSeconds: number;
}
