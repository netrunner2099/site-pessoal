import { useState } from 'react'
import { FileDown, Globe, Menu, Moon, Sun, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const linkIds = ['about', 'experience', 'skills', 'projects', 'contact']

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const { lang, toggleLang, t } = useLanguage()
  // On secondary pages (e.g. /privacy) anchors must navigate back to the home page
  const onHome = window.location.pathname.replace(/\/+$/, '') === ''
  const anchor = (href) => (onHome ? href : `/${href}`)

  const langButton = (extra = '') => (
    <button
      onClick={toggleLang}
      aria-label="Switch language"
      className={`flex items-center gap-1.5 rounded-md px-2 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-slate-600 transition hover:bg-slate-100 hover:text-accent-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-accent-400 ${extra}`}
    >
      <Globe size={15} /> {lang === 'en' ? 'PT' : 'EN'}
    </button>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href={anchor('#home')} className="flex items-center gap-3">
          <span className="h-4 w-4 rounded-[3px] bg-accent-700 shadow-[0_0_12px_rgb(0_230_118/0.6)] dark:bg-accent-400" />
          <span className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-slate-900 dark:text-white">
            {t.profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {linkIds.map((id) => (
            <a
              key={id}
              href={anchor(`#${id}`)}
              className="rounded-md px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:text-accent-700 dark:text-slate-300 dark:hover:text-accent-400"
            >
              {t.ui.nav[id]}
            </a>
          ))}
          {t.profile.resumePdf && (
            <a
              href={t.profile.resumePdf}
              download
              className="ml-3 flex items-center gap-2 rounded-md border border-accent-700 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-700 transition hover:bg-accent-700 hover:text-white dark:border-accent-400 dark:text-accent-400 dark:hover:bg-accent-400 dark:hover:text-slate-950"
            >
              <FileDown size={14} /> {t.ui.downloadCV}
            </a>
          )}
          {langButton('ml-2')}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-md p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {langButton()}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-md p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-md p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          {linkIds.map((id) => (
            <a
              key={id}
              href={anchor(`#${id}`)}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:bg-slate-100 hover:text-accent-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-accent-400"
            >
              {t.ui.nav[id]}
            </a>
          ))}
          {t.profile.resumePdf && (
            <a
              href={t.profile.resumePdf}
              download
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-md border border-accent-700 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-700 transition hover:bg-accent-700 hover:text-white dark:border-accent-400 dark:text-accent-400 dark:hover:bg-accent-400 dark:hover:text-slate-950"
            >
              <FileDown size={14} /> {t.ui.downloadCV}
            </a>
          )}
        </div>
      )}
    </header>
  )
}
