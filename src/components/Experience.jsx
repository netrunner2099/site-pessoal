import { Briefcase, MapPin } from 'lucide-react'
import { techLinks } from '../data/techLinks'
import { useLanguage } from '../i18n/LanguageContext'
import Section from './Section'

export default function Experience() {
  const { t } = useLanguage()
  const { experience } = t
  return (
    <Section
      id="experience"
      eyebrow={t.ui.sections.experience.eyebrow}
      title={t.ui.sections.experience.title}
      subtitle={t.ui.sections.experience.subtitle}
    >
      <ol className="relative space-y-10 border-s-2 border-slate-200 ps-8 dark:border-slate-800">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span className="absolute -start-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 ring-4 ring-white dark:ring-slate-950">
              <Briefcase size={10} className="text-white" />
            </span>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h3>
                <span className="text-sm font-medium text-accent-600 dark:text-accent-400">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-2 transition hover:text-accent-700 hover:underline dark:hover:text-accent-400"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span>{job.company}</span>
                )}
                <span className="flex items-center gap-1">
                  <MapPin size={13} /> {job.location}
                </span>
              </p>
              <p className="mt-3 text-justify text-sm leading-relaxed text-slate-600 hyphens-auto dark:text-slate-400">
                {job.description}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 ps-5 text-justify text-sm text-slate-600 hyphens-auto dark:text-slate-400">
                {job.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((tech) =>
                  techLinks[tech] ? (
                    <a
                      key={tech}
                      href={techLinks[tech]}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700 underline-offset-2 transition hover:underline dark:bg-accent-900/40 dark:text-accent-300"
                    >
                      {tech}
                    </a>
                  ) : (
                    <span
                      key={tech}
                      className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-900/40 dark:text-accent-300"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
