---

### ✅ `estimateTokens.ts`
```ts
type EstimateInput = {
  text: string
  warningThreshold?: number
}

type EstimateResult = {
  tokens: number
  warning: boolean
  message: string
}

export function estimateTokens(input: EstimateInput): EstimateResult {
  const { text, warningThreshold = 100_000 } = input

  if (!text || typeof text !== 'string') {
    return {
      tokens: 0,
      warning: false,
      message: 'No text provided for token estimation.',
    }
  }

  // Simple heuristic:
  // ~4 characters per token (common approximation)
  const estimatedTokens = Math.ceil(text.length / 4)

  const warning = estimatedTokens >= warningThreshold

  return {
    tokens: estimatedTokens,
    warning,
    message: warning
      ? 'High token usage detected. Consider splitting the request.'
      : 'Token usage is within a normal range.',
  }
}
