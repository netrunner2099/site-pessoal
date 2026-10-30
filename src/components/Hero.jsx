import { Boxes, CheckCircle2, Cloud, Container, Database, FolderGit2, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { useLanguage } from '../i18n/LanguageContext'

function CodeWindow() {
  return (
    <div className="relative hidden lg:block" aria-hidden="true">
      {/* editor window */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-2xl dark:border-accent-400/25 dark:bg-slate-900 dark:shadow-[0_0_60px_rgb(0_230_118/0.08)]">
        <div className="flex items-center gap-1.5 rounded-t-xl border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/60">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>
        <div className="flex">
          <div className="hidden w-40 shrink-0 space-y-2 border-r border-slate-200 p-4 font-mono text-xs text-slate-500 xl:block dark:border-slate-800 dark:text-slate-400">
            <p className="flex items-center gap-2 font-semibold text-accent-700 dark:text-accent-400">
              <FolderGit2 size={13} /> src
            </p>
            {['Controllers', 'Services', 'Models', 'Infrastructure', 'Tests'].map((folder) => (
              <p key={folder} className="ps-5">
                {folder}
              </p>
            ))}
          </div>
          <pre className="overflow-hidden p-5 font-mono text-[13px] leading-6">
            <code>
              <span className="text-accent-600 dark:text-accent-400">public async</span>{' '}
              <span className="text-slate-500 dark:text-slate-400">Task&lt;IActionResult&gt;</span>
              {'\n'}
              <span className="text-slate-800 dark:text-slate-200">GetProducts()</span>
              {'\n'}
              <span className="text-slate-800 dark:text-slate-200">{'{'}</span>
              {'\n  '}
              <span className="text-accent-600 dark:text-accent-400">var</span>{' '}
              <span className="text-slate-800 dark:text-slate-200">products = </span>
              <span className="text-accent-600 dark:text-accent-400">await</span>{' '}
              <span className="text-slate-800 dark:text-slate-200">_productService</span>
              {'\n    '}
              <span className="text-slate-800 dark:text-slate-200">.GetAllAsync();</span>
              {'\n\n  '}
              <span className="text-accent-600 dark:text-accent-400">return</span>{' '}
              <span className="text-slate-800 dark:text-slate-200">Ok(products);</span>
              {'\n'}
              <span className="text-slate-800 dark:text-slate-200">{'}'}</span>
            </code>
          </pre>
        </div>
      </div>

      {/* build status card */}
      <div className="absolute -bottom-10 -right-4 w-64 rounded-xl border border-slate-200 bg-white p-4 shadow-xl dark:border-accent-400/25 dark:bg-slate-900">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>
        {['Build succeeded', 'Tests passed', 'Deployment ready'].map((status) => (
          <p
            key={status}
            className="flex items-center gap-2 py-1 font-mono text-xs text-slate-600 dark:text-slate-300"
          >
            <CheckCircle2 size={14} className="text-accent-600 dark:text-accent-400" /> {status}
          </p>
        ))}
      </div>

      {/* floating tech chips */}
      <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
        {[Database, Boxes, Container, Cloud].map((Icon, index) => (
          <span
            key={index}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-accent-600 shadow-lg dark:border-accent-400/30 dark:bg-slate-900 dark:text-accent-400"
          >
            <Icon size={20} />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const { profile, stats, heroTech } = t
  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-200 pt-16 dark:border-slate-800">
      <div className="circuit-bg pointer-events-none absolute inset-0 opacity-0 dark:opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgb(37_85_42/0.08),_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgb(0_230_118/0.07),_transparent_55%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          {profile.avatar && (
            <img
              src={profile.avatar}
              alt={profile.name}
              className="mb-8 h-28 w-28 rounded-full border-2 border-accent-700 object-cover shadow-lg sm:h-32 sm:w-32 dark:border-accent-400 dark:shadow-[0_0_30px_rgb(0_230_118/0.25)]"
            />
          )}
          <p className="mb-5 font-mono text-sm font-bold uppercase tracking-[0.3em] text-accent-700 dark:text-accent-400">
            {profile.role}
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
            {profile.name.split(' ')[0]}{' '}
            <span className="border-b-4 border-accent-500 pb-1 dark:border-accent-400">
              {profile.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-accent-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-accent-800 dark:bg-accent-400 dark:text-slate-950 dark:shadow-[0_0_24px_rgb(0_230_118/0.35)] dark:hover:bg-accent-300"
            >
              {t.ui.hero.getInTouch}
            </a>
            <a
              href="#projects"
              className="rounded-md border border-accent-700 px-6 py-3 text-sm font-bold text-accent-700 transition hover:bg-accent-700/10 dark:border-accent-400 dark:text-accent-400 dark:hover:bg-accent-400/10"
            >
              {t.ui.hero.viewProjects}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition hover:text-accent-700 dark:text-slate-400 dark:hover:text-accent-400"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition hover:text-accent-700 dark:text-slate-400 dark:hover:text-accent-400"
            >
              <LinkedinIcon size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-slate-500 transition hover:text-accent-700 dark:text-slate-400 dark:hover:text-accent-400"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <CodeWindow />
      </div>

      {/* stats bar */}
      <div className="relative border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-slate-200 px-6 sm:grid-cols-4 sm:divide-x dark:divide-slate-800">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center">
              <p className="text-3xl font-extrabold text-accent-700 dark:text-accent-400">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* tech badges */}
      <div className="relative border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6 py-8">
          {heroTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent-700/40 px-4 py-1.5 font-mono text-xs font-semibold text-slate-700 transition hover:border-accent-700 dark:border-accent-400/40 dark:text-slate-200 dark:hover:border-accent-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
