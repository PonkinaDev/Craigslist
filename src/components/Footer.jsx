import { Briefcase, Heart, Info } from 'lucide-react'
import Logo from './Logo'

const mainLinks = [
  { label: 'Acerca de', icon: Info, href: '#' },
  { label: 'Craigslist busca personal', icon: Briefcase, href: '#' },
  { label: 'Craigslist found', icon: Heart, href: 'https://www.craigslistfund.org', external: true },
]

const legalLinks = ['Privacidad', 'Preferencias de cookies', 'Términos de uso']

function LegalLinks() {
  return (
    <ul className="flex gap-6">
      {legalLinks.map((label) => (
        <li key={label}>
          <a href="#" className="hover:text-brand">
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Footer({ compact = false }) {
  if (compact) {
    return (
      <footer className="flex flex-wrap items-center justify-between gap-2 bg-bar px-4 py-3 text-[11px] text-ink-soft sm:px-8">
        <span>© 2026 craigslist</span>
        <LegalLinks />
      </footer>
    )
  }

  return (
    <footer className="bg-bar px-4 py-5 sm:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 space-y-3">
          <nav className="flex flex-wrap gap-x-10 gap-y-2 border-b border-brand pb-2 text-ink">
            {mainLinks.map(({ label, icon: Icon, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="flex items-center gap-2 text-lg hover:text-brand"
              >
                <Icon className="size-5" />
                {label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-ink-soft">
            <span>© 2026 craigslist</span>
            <LegalLinks />
          </div>
        </div>

        <div className="md:pl-10">
          <Logo size="lg" />
        </div>
      </div>
    </footer>
  )
}
