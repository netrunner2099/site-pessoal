import { FileDown, FileText, Mail, MapPin, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/resume'
import Section from './Section'

const items = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.social.linkedin,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'See my code',
    href: profile.social.github,
  },
  ...(profile.resumePdf
    ? [{ icon: FileDown, label: 'Résumé / CV', value: 'Download PDF', href: profile.resumePdf, download: true }]
    : []),
  ...(profile.coverLetterPdf
    ? [{ icon: FileText, label: 'Cover Letter', value: 'Download PDF', href: profile.coverLetterPdf, download: true }]
    : []),
]

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Let's Talk"
      title="Get In Touch"
      subtitle="I'm open to new opportunities and collaborations. Feel free to reach out!"
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
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
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
        <MapPin size={14} /> Based in {profile.location}
      </p>
    </Section>
  )
}
