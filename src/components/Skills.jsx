import { useLanguage } from '../i18n/LanguageContext'
import Section from './Section'

export default function Skills() {
  const { t } = useLanguage()
  const { skills } = t
  return (
    <Section
      id="skills"
      eyebrow={t.ui.sections.skills.eyebrow}
      title={t.ui.sections.skills.title}
      subtitle={t.ui.sections.skills.subtitle}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
