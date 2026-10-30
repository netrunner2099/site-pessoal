import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {t.profile.name}. {t.ui.footer.builtWith}
        </p>
        <a
          href="/privacy"
          className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 transition hover:text-accent-700 dark:text-slate-400 dark:hover:text-accent-400"
        >
          {t.ui.footer.privacy}
        </a>
      </div>
    </footer>
  )
}
