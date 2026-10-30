import { FileDown, FileText, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './BrandIcons'
import { useLanguage } from '../i18n/LanguageContext'
import Section from './Section'

export default function Contact() {
  const { t } = useLanguage()
  const { profile } = t
  const labels = t.ui.contact

  const items = [
    {
      icon: Mail,
      label: labels.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: WhatsappIcon,
      label: labels.whatsapp,
      value: profile.phone,
      href: `https://wa.me/${profile.phone.replace(/\D/g, '')}`,
    },
    {
      icon: LinkedinIcon,
      label: labels.linkedin,
      value: labels.linkedinValue,
      href: profile.social.linkedin,
    },
    {
      icon: GithubIcon,
      label: labels.github,
      value: labels.githubValue,
      href: profile.social.github,
    },
    ...(profile.resumePdf
      ? [{ icon: FileDown, label: labels.resume, value: labels.downloadPdf, href: profile.resumePdf, download: true }]
      : []),
    ...(profile.coverLetterPdf
      ? [{ icon: FileText, label: labels.coverLetter, value: labels.downloadPdf, href: profile.coverLetterPdf, download: true }]
      : []),
  ]

  return (
    <Section
      id="contact"
      eyebrow={t.ui.sections.contact.eyebrow}
      title={t.ui.sections.contact.title}
      subtitle={t.ui.sections.contact.subtitle}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            download={item.download}
            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-accent-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-accent-500"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition group-hover:bg-accent-600 group-hover:text-white dark:bg-accent-900/40 dark:text-accent-300">
              <item.icon size={20} />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {item.label}
              </span>
              <span className="block font-medium text-slate-800 dark:text-slate-200">
                {item.value}
              </span>
            </span>
          </a>
        ))}
      </div>
      <p className="mt-8 flex items-center justify-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
        <MapPin size={14} /> {labels.basedIn} {profile.location}
      </p>
    </Section>
  )
}
