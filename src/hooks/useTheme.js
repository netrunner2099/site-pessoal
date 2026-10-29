import { useEffect, useState } from 'react'
import { deleteCookie, getCookie, setCookie } from '../utils/cookies'

const THEME_COOKIE = 'theme'

function getInitialTheme() {
  const stored = getCookie(THEME_COOKIE)
  if (stored === 'light' || stored === 'dark') return stored
  // Dark is the default theme for every new visitor
  return 'dark'
}

/**
 * Theme state persisted in a cookie — but only when the user has
 * accepted cookies (consentGiven). Without consent the preference
 * lives only for the current page view.
 */
export function useTheme(consentGiven) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    if (consentGiven) {
      setCookie(THEME_COOKIE, theme)
    } else {
      deleteCookie(THEME_COOKIE)
    }
  }, [theme, consentGiven])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
