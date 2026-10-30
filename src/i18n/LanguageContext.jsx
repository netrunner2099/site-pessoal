import { createContext, useContext, useEffect, useState } from 'react'
import { deleteCookie, getCookie, setCookie } from '../utils/cookies'
import en from '../data/resume.en'
import pt from '../data/resume.pt'

const translations = { en, pt }
const LanguageContext = createContext(null)

function getInitialLang() {
  const stored = getCookie('lang')
  if (stored === 'en' || stored === 'pt') return stored
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

/**
 * Language state persisted in a cookie — but only when the user has
 * accepted cookies (consentGiven), mirroring the theme behavior.
 */
export function LanguageProvider({ consentGiven, children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    if (consentGiven) {
      setCookie('lang', lang)
    } else {
      deleteCookie('lang')
    }
  }, [lang, consentGiven])

  const toggleLang = () => setLang((l) => (l === 'en' ? 'pt' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
