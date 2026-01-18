export function getErrorText(status: number): string {
  switch (status) {
    case 401:
      return 'Authentication failed.'
    case 403:
      return 'Access denied. Feature not enabled.'
    case 404:
      return 'Requested resource not found.'
    case 429:
      return 'Rate limit exceeded.'
    case 500:
      return 'Internal server error.'
    default:
      return 'An unknown error occurred.'
  }
}
