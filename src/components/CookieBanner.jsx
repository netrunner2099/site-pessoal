import { Cookie } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function CookieBanner({ onAccept, onDecline }) {
  const { t } = useLanguage()
  const c = t.ui.cookie
  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:inset-x-6 dark:border-accent-400/30 dark:bg-slate-900 dark:shadow-[0_0_40px_rgb(0_230_118/0.1)]"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-900/40 dark:text-accent-400">
          <Cookie size={20} />
        </span>
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
            {c.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {c.text}{' '}
            <a
              href="/privacy"
              className="font-semibold text-accent-700 underline dark:text-accent-400"
            >
              {c.privacyLink}
            </a>
            . {c.question}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={onAccept}
              className="rounded-md bg-accent-700 px-5 py-2 text-sm font-bold text-white transition hover:bg-accent-800 dark:bg-accent-400 dark:text-slate-950 dark:hover:bg-accent-300"
            >
              {c.accept}
            </button>
            <button
              onClick={onDecline}
              className="rounded-md border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500"
            >
              {c.decline}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
