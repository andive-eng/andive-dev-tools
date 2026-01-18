type ClientOptions = {
  apiUrl?: string
  apiKey?: string
}

export class Client {
  private apiUrl: string
  private apiKey: string

  constructor(options?: ClientOptions) {
    this.apiUrl = options?.apiUrl || process.env.NEXT_PUBLIC_ANDIVE_API_URL || ''
    this.apiKey = options?.apiKey || process.env.NEXT_PUBLIC_ANDIVE_API_KEY || ''
  }

  async request(path: string, body: unknown) {
    const res = await fetch(`${this.apiUrl}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(body),
    })

    const data = await res.json()
    return { status: res.status, data }
  }
}
