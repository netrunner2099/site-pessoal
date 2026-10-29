import { ExternalLink, Folder } from 'lucide-react'
import { projects } from '../data/resume'
import Section from './Section'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="What I've Built"
      title="Highlighted Work"
      subtitle="Selected projects and long-term deliveries."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const Wrapper = project.link ? 'a' : 'div'
          const linkProps = project.link
            ? { href: project.link, target: '_blank', rel: 'noreferrer' }
            : {}
          return (
            <Wrapper
              key={project.name}
              {...linkProps}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 flex items-center justify-between">
                <Folder size={26} className="text-accent-500" />
                {project.link && (
                  <ExternalLink
                    size={18}
                    className="text-slate-400 transition group-hover:text-accent-500"
                  />
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-justify text-sm leading-relaxed text-slate-600 hyphens-auto dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold text-slate-500 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Wrapper>
          )
        })}
      </div>
    </Section>
  )
}
