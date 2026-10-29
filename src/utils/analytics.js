let loaded = false

/**
 * Injects Google Analytics 4 (gtag.js).
 * Must only be called after the user has accepted cookies.
 * Does nothing if the measurement ID is missing or still the placeholder.
 */
export function loadGoogleAnalytics(measurementId) {
  if (loaded || !measurementId || measurementId === 'G-XXXXXXXXXX') return
  loaded = true

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  gtag('js', new Date())
  gtag('config', measurementId, { anonymize_ip: true })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)
}
