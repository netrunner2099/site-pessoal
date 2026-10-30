import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const copy = {
  en: {
    back: 'Back to home',
    eyebrow: '// Legal',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: October 29, 2026',
    whoTitle: 'Who we are',
    who: (site, name, email) => (
      <p>
        This website ({site}) is the personal résumé and portfolio of{' '}
        <strong className="text-slate-800 dark:text-slate-200">{name}</strong>, who is the data
        controller for any personal data processed here. For any privacy-related question or
        request, contact{' '}
        <a href={`mailto:${email}`} className="text-accent-700 underline dark:text-accent-400">
          {email}
        </a>
        .
      </p>
    ),
    whatTitle: 'What data we collect',
    whatIntro: 'This site collects a minimal amount of data, and only with your consent:',
    whatItems: [
      ['Preference cookies', 'theme, lang', '— remember your dark/light mode and language choices. Stored for up to 365 days.'],
      ['Consent cookie', 'cookie-consent', "— records whether you accepted or declined cookies, so we don't ask again. This is a strictly necessary cookie. Stored for up to 365 days."],
      ['Google Analytics cookies', '_ga, _ga_*', '— collect aggregated usage statistics: pages visited, approximate location (IP addresses are anonymized), device and browser type, and how you found this site.'],
    ],
    whatOutro: 'No data is collected through forms, and this site does not process sensitive personal data of any kind.',
    whyTitle: 'Why we collect it (purpose & legal basis)',
    whyItems: [
      ['Preferences', '— to improve your experience by remembering your choices. Legal basis: your consent.'],
      ['Analytics', '— to understand how visitors use the site and improve its content. Legal basis: your consent, given through the cookie banner.'],
    ],
    whyOutro: 'If you decline cookies, no analytics run and no preference cookies are stored — the site remains fully functional.',
    thirdTitle: 'Third parties',
    third: (
      <p>
        Usage statistics are processed by{' '}
        <strong className="text-slate-800 dark:text-slate-200">Google Analytics</strong> (Google
        LLC), which acts as a data processor. Data may be processed on servers outside Brazil / the
        EU. See{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-accent-700 underline dark:text-accent-400">
          Google's Privacy Policy
        </a>{' '}
        for details. We do not sell personal data or share it with any other third party.
      </p>
    ),
    rightsTitle: 'Your rights',
    rightsIntro:
      'Under the Brazilian LGPD (Lei nº 13.709/2018) and the EU GDPR, you have the right to access, correct, delete, or request portability of your personal data, and to withdraw consent at any time.',
    rightsItems: (email) => [
      <>To withdraw consent, simply delete this site's cookies in your browser settings — the consent banner will be shown again on your next visit.</>,
      <>
        You can also block cookies entirely through your browser or use extensions / the{' '}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" className="text-accent-700 underline dark:text-accent-400">
          Google Analytics opt-out add-on
        </a>
        .
      </>,
      <>
        For any other request, contact{' '}
        <a href={`mailto:${email}`} className="text-accent-700 underline dark:text-accent-400">
          {email}
        </a>
        . Requests are answered within 15 days.
      </>,
    ],
    retentionTitle: 'Data retention',
    retention:
      "Cookies set by this site expire after at most 365 days. Google Analytics data is retained for 14 months (the platform's standard retention period), after which it is automatically deleted.",
    changesTitle: 'Changes to this policy',
    changes:
      'This policy may be updated to reflect changes in the site. The "Last updated" date at the top indicates the latest revision.',
  },
  pt: {
    back: 'Voltar ao início',
    eyebrow: '// Legal',
    title: 'Política de Privacidade',
    lastUpdated: 'Última atualização: 29 de outubro de 2026',
    whoTitle: 'Quem somos',
    who: (site, name, email) => (
      <p>
        Este site ({site}) é o currículo e portfólio pessoal de{' '}
        <strong className="text-slate-800 dark:text-slate-200">{name}</strong>, que é o controlador
        dos dados pessoais aqui tratados. Para qualquer dúvida ou solicitação sobre privacidade,
        entre em contato pelo e-mail{' '}
        <a href={`mailto:${email}`} className="text-accent-700 underline dark:text-accent-400">
          {email}
        </a>
        .
      </p>
    ),
    whatTitle: 'Quais dados coletamos',
    whatIntro: 'Este site coleta uma quantidade mínima de dados, e somente com o seu consentimento:',
    whatItems: [
      ['Cookies de preferência', 'theme, lang', '— lembram sua escolha de tema (claro/escuro) e idioma. Armazenados por até 365 dias.'],
      ['Cookie de consentimento', 'cookie-consent', '— registra se você aceitou ou recusou os cookies, para não perguntarmos de novo. É um cookie estritamente necessário. Armazenado por até 365 dias.'],
      ['Cookies do Google Analytics', '_ga, _ga_*', '— coletam estatísticas agregadas de uso: páginas visitadas, localização aproximada (endereços IP são anonimizados), tipo de dispositivo e navegador, e como você encontrou este site.'],
    ],
    whatOutro: 'Nenhum dado é coletado por formulários, e este site não trata dados pessoais sensíveis de nenhum tipo.',
    whyTitle: 'Por que coletamos (finalidade e base legal)',
    whyItems: [
      ['Preferências', '— para melhorar sua experiência lembrando suas escolhas. Base legal: seu consentimento.'],
      ['Analytics', '— para entender como os visitantes usam o site e melhorar o conteúdo. Base legal: seu consentimento, dado através do banner de cookies.'],
    ],
    whyOutro: 'Se você recusar os cookies, nenhum analytics é executado e nenhum cookie de preferência é gravado — o site continua totalmente funcional.',
    thirdTitle: 'Terceiros',
    third: (
      <p>
        As estatísticas de uso são processadas pelo{' '}
        <strong className="text-slate-800 dark:text-slate-200">Google Analytics</strong> (Google
        LLC), que atua como operador de dados. Os dados podem ser processados em servidores fora do
        Brasil / da UE. Consulte a{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-accent-700 underline dark:text-accent-400">
          Política de Privacidade do Google
        </a>{' '}
        para mais detalhes. Não vendemos dados pessoais nem os compartilhamos com nenhum outro
        terceiro.
      </p>
    ),
    rightsTitle: 'Seus direitos',
    rightsIntro:
      'De acordo com a LGPD (Lei nº 13.709/2018) e o GDPR da UE, você tem o direito de acessar, corrigir, excluir ou solicitar a portabilidade dos seus dados pessoais, e de revogar o consentimento a qualquer momento.',
    rightsItems: (email) => [
      <>Para revogar o consentimento, basta excluir os cookies deste site nas configurações do seu navegador — o banner de consentimento será exibido novamente na próxima visita.</>,
      <>
        Você também pode bloquear cookies totalmente no navegador ou usar extensões / o{' '}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" className="text-accent-700 underline dark:text-accent-400">
          complemento de desativação do Google Analytics
        </a>
        .
      </>,
      <>
        Para qualquer outra solicitação, entre em contato pelo e-mail{' '}
        <a href={`mailto:${email}`} className="text-accent-700 underline dark:text-accent-400">
          {email}
        </a>
        . As solicitações são respondidas em até 15 dias.
      </>,
    ],
    retentionTitle: 'Retenção de dados',
    retention:
      'Os cookies definidos por este site expiram em no máximo 365 dias. Os dados do Google Analytics são retidos por 14 meses (período padrão da plataforma) e depois excluídos automaticamente.',
    changesTitle: 'Alterações nesta política',
    changes:
      'Esta política pode ser atualizada para refletir mudanças no site. A data de "Última atualização" no topo indica a revisão mais recente.',
  },
}

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
  const { lang, t } = useLanguage()
  const c = copy[lang]
  const { profile } = t
  const site = profile.website.replace('https://', '')

  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28">
      <a
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-700 transition hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-300"
      >
        <ArrowLeft size={14} /> {c.back}
      </a>

      <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent-700 dark:text-accent-400">
        {c.eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {c.title}
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{c.lastUpdated}</p>

      <Block title={c.whoTitle}>{c.who(site, profile.name, profile.email)}</Block>

      <Block title={c.whatTitle}>
        <p>{c.whatIntro}</p>
        <ul className="list-disc space-y-2 ps-5">
          {c.whatItems.map(([label, code, rest]) => (
            <li key={label}>
              <strong className="text-slate-800 dark:text-slate-200">{label}</strong>{' '}
              (<code className="font-mono text-xs">{code}</code>) {rest}
            </li>
          ))}
        </ul>
        <p>{c.whatOutro}</p>
      </Block>

      <Block title={c.whyTitle}>
        <ul className="list-disc space-y-2 ps-5">
          {c.whyItems.map(([label, rest]) => (
            <li key={label}>
              <strong className="text-slate-800 dark:text-slate-200">{label}</strong> {rest}
            </li>
          ))}
        </ul>
        <p>{c.whyOutro}</p>
      </Block>

      <Block title={c.thirdTitle}>{c.third}</Block>

      <Block title={c.rightsTitle}>
        <p>{c.rightsIntro}</p>
        <ul className="list-disc space-y-2 ps-5">
          {c.rightsItems(profile.email).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Block>

      <Block title={c.retentionTitle}>
        <p>{c.retention}</p>
      </Block>

      <Block title={c.changesTitle}>
        <p>{c.changes}</p>
      </Block>
    </main>
  )
}
