type EnvRule =
  | 'string'
  | 'number'
  | readonly string[]

type EnvSchema = Record<string, EnvRule>

export function validateEnv(schema: EnvSchema) {
  const errors: string[] = []

  for (const key in schema) {
    const rule = schema[key]
    const value = process.env[key]

    if (value === undefined || value === '') {
      errors.push(`Missing environment variable: ${key}`)
      continue
    }

    if (rule === 'number' && isNaN(Number(value))) {
      errors.push(`Environment variable ${key} must be a number`)
    }

    if (Array.isArray(rule) && !rule.includes(value)) {
      errors.push(
        `Environment variable ${key} must be one of: ${rule.join(', ')}`
      )
    }
  }

  if (errors.length > 0) {
    throw new Error(
      `ENV validation failed:\n` + errors.map(e => `- ${e}`).join('\n')
    )
  }
}
