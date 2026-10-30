import { Award, GraduationCap } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import Section from './Section'

export default function Education() {
  const { t } = useLanguage()
  const { education, certifications } = t
  return (
    <Section
      id="education"
      eyebrow={t.ui.sections.education.eyebrow}
      title={t.ui.sections.education.title}
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <GraduationCap size={22} className="text-accent-500" /> {t.ui.educationLabels.education}
          </h3>
          <div className="space-y-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-bold text-slate-900 dark:text-white">{item.degree}</h4>
                  <span className="text-sm font-medium text-accent-600 dark:text-accent-400">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.institution}
                </p>
                {item.details && (
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <Award size={22} className="text-accent-500" /> {t.ui.educationLabels.certifications}
          </h3>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <h4 className="font-bold text-slate-900 dark:text-white">{cert.name}</h4>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
