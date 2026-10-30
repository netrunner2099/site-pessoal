import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import Section from './Section'

export default function About() {
  const { t } = useLanguage()
  const { about, profile } = t
  return (
    <Section id="about" eyebrow={t.ui.sections.about.eyebrow} title={t.ui.sections.about.title}>
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 md:col-span-3">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-justify leading-relaxed text-slate-600 hyphens-auto dark:text-slate-400"
            >
              {paragraph}
            </p>
          ))}
          <ul className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            {about.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-sm font-medium">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-500" />
                <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg dark:border-accent-400/25 dark:shadow-[0_0_40px_rgb(0_230_118/0.08)]">
            <img
              src="/about-photo.webp"
              alt={`${profile.name} at the Netrunner Tecnologia office`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </Section>
  )
}
