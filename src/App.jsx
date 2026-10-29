import { useEffect } from 'react'
import { useCookieConsent } from './hooks/useCookieConsent'
import { useTheme } from './hooks/useTheme'
import { loadGoogleAnalytics } from './utils/analytics'
import { GA_MEASUREMENT_ID } from './config'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import PrivacyPolicy from './components/PrivacyPolicy'

export default function App() {
  const { consent, accept, decline } = useCookieConsent()
  const { theme, toggleTheme } = useTheme(consent === 'accepted')
  const isPrivacyPage = window.location.pathname.replace(/\/+$/, '') === '/privacy'

  useEffect(() => {
    if (consent === 'accepted') loadGoogleAnalytics(GA_MEASUREMENT_ID)
  }, [consent])

  useEffect(() => {
    if (isPrivacyPage) document.title = 'Privacy Policy — Rodrigo Miranda'
  }, [isPrivacyPage])

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {isPrivacyPage ? (
        <PrivacyPolicy />
      ) : (
        <main>
          <Hero />
          <About />
          <div className="bg-slate-50 dark:bg-slate-900/40">
            <Experience />
          </div>
          <Skills />
          <div className="bg-slate-50 dark:bg-slate-900/40">
            <Projects />
          </div>
          <Education />
          <div className="bg-slate-50 dark:bg-slate-900/40">
            <Contact />
          </div>
        </main>
      )}
      <Footer />
      {consent === null && <CookieBanner onAccept={accept} onDecline={decline} />}
    </>
  )
}
