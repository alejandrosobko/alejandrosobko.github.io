export {}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    _waEmbed: (...args: unknown[]) => void
  }
}
