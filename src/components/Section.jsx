export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent-700 dark:text-accent-400">
              {'// '}
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-slate-500 dark:text-slate-400">{subtitle}</p>
          )}
          <div className="mt-4 h-1 w-16 rounded-full bg-accent-500 dark:bg-accent-400" />
        </div>
        {children}
      </div>
    </section>
  )
}
