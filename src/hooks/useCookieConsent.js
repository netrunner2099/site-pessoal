import { useCallback, useState } from 'react'
import { getCookie, setCookie } from '../utils/cookies'

const CONSENT_COOKIE = 'cookie-consent'

/**
 * Cookie consent state: 'accepted' | 'declined' | null (not answered yet).
 * The consent choice itself is stored in a strictly-necessary cookie.
 */
export function useCookieConsent() {
  const [consent, setConsent] = useState(() => getCookie(CONSENT_COOKIE))

  const accept = useCallback(() => {
    setCookie(CONSENT_COOKIE, 'accepted')
    setConsent('accepted')
  }, [])

  const decline = useCallback(() => {
    setCookie(CONSENT_COOKIE, 'declined')
    setConsent('declined')
  }, [])

  return { consent, accept, decline }
}
