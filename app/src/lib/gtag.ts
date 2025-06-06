export const GA_MEASUREMENT_ID = "G-4FTMRPE9DY"
const isProd = process.env.NODE_ENV === "production"

// Trackea una vista de página (pageview)
export const pageview = (url: string) => {
  if (!isProd) return

  if (typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

export const event = (name: string, params?: Record<string, unknown>) => {
  if (!isProd) return

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params || {})
  }
}
