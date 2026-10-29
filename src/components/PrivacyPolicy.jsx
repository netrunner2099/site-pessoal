import { ArrowLeft } from 'lucide-react'
import { profile } from '../data/resume'

const LAST_UPDATED = 'October 29, 2026'

function Block({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-justify text-sm leading-relaxed text-slate-600 hyphens-auto dark:text-slate-400">
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28">
      <a
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-700 transition hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-300"
      >
        <ArrowLeft size={14} /> Back to home
      </a>

      <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent-700 dark:text-accent-400">
        {'// Legal'}
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: {LAST_UPDATED}</p>

      <Block title="Who we are">
        <p>
          This website ({profile.website.replace('https://', '')}) is the personal résumé and
          portfolio of <strong className="text-slate-800 dark:text-slate-200">{profile.name}</strong>,
          who is the data controller for any personal data processed here. For any privacy-related
          question or request, contact{' '}
          <a href={`mailto:${profile.email}`} className="text-accent-700 underline dark:text-accent-400">
            {profile.email}
          </a>
          .
        </p>
      </Block>

      <Block title="What data we collect">
        <p>This site collects a minimal amount of data, and only with your consent:</p>
        <ul className="list-disc space-y-2 ps-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Theme preference cookie</strong>{' '}
            (<code className="font-mono text-xs">theme</code>) — remembers your dark/light mode
            choice. Stored for up to 365 days.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Consent cookie</strong>{' '}
            (<code className="font-mono text-xs">cookie-consent</code>) — records whether you
            accepted or declined cookies, so we don't ask again. This is a strictly necessary
            cookie. Stored for up to 365 days.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Google Analytics cookies</strong>{' '}
            (<code className="font-mono text-xs">_ga</code>,{' '}
            <code className="font-mono text-xs">_ga_*</code>) — collect aggregated usage statistics:
            pages visited, approximate location (IP addresses are anonymized), device and browser
            type, and how you found this site.
          </li>
        </ul>
        <p>
          No data is collected through forms, and this site does not process sensitive personal
          data of any kind.
        </p>
      </Block>

      <Block title="Why we collect it (purpose & legal basis)">
        <ul className="list-disc space-y-2 ps-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Theme preference</strong> — to
            improve your experience by remembering your choice. Legal basis: your consent.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Analytics</strong> — to
            understand how visitors use the site and improve its content. Legal basis: your
            consent, given through the cookie banner.
          </li>
        </ul>
        <p>
          If you decline cookies, no analytics run and no preference cookie is stored — the site
          remains fully functional.
        </p>
      </Block>

      <Block title="Third parties">
        <p>
          Usage statistics are processed by{' '}
          <strong className="text-slate-800 dark:text-slate-200">Google Analytics</strong> (Google
          LLC), which acts as a data processor. Data may be processed on servers outside Brazil /
          the EU. See{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
            className="text-accent-700 underline dark:text-accent-400"
          >
            Google's Privacy Policy
          </a>{' '}
          for details. We do not sell personal data or share it with any other third party.
        </p>
      </Block>

      <Block title="Your rights">
        <p>
          Under the Brazilian LGPD (Lei nº 13.709/2018) and the EU GDPR, you have the right to
          access, correct, delete, or request portability of your personal data, and to withdraw
          consent at any time.
        </p>
        <ul className="list-disc space-y-2 ps-5">
          <li>
            To withdraw consent, simply delete this site's cookies in your browser settings — the
            consent banner will be shown again on your next visit.
          </li>
          <li>
            You can also block cookies entirely through your browser or use extensions / the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noreferrer"
              className="text-accent-700 underline dark:text-accent-400"
            >
              Google Analytics opt-out add-on
            </a>
            .
          </li>
          <li>
            For any other request, contact{' '}
            <a href={`mailto:${profile.email}`} className="text-accent-700 underline dark:text-accent-400">
              {profile.email}
            </a>
            . Requests are answered within 15 days.
          </li>
        </ul>
      </Block>

      <Block title="Data retention">
        <p>
          Cookies set by this site expire after at most 365 days. Google Analytics data is retained
          for 14 months (the platform's standard retention period), after which it is automatically
          deleted.
        </p>
      </Block>

      <Block title="Changes to this policy">
        <p>
          This policy may be updated to reflect changes in the site. The "Last updated" date at the
          top indicates the latest revision.
        </p>
      </Block>
    </main>
  )
}
