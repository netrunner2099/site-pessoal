import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <a
          href="/privacy"
          className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 transition hover:text-accent-700 dark:text-slate-400 dark:hover:text-accent-400"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}
