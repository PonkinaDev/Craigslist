import { MapPin, SquarePen } from 'lucide-react'
import { Link } from 'react-router-dom'
import EventCalendar from './EventCalendar'
import HelpMenu from './HelpMenu'

export default function Sidebar({ location, onOpenLocation }) {
  return (
    <aside className="flex shrink-0 flex-col gap-6 bg-sidebar p-5 lg:w-60">
      <button
        type="button"
        onClick={onOpenLocation}
        className="flex items-center gap-3 text-left"
        aria-label="Elegir ubicación"
      >
        <MapPin className="size-6 shrink-0 fill-current" />
        <span className="min-w-0 flex-1 border-b border-ink/60 pb-0.5">
          <span className="block text-[10px] text-ink-soft">Ingresa tu</span>
          <span className="block truncate text-sm">{location || 'Ubicación'}</span>
        </span>
      </button>

      <Link
        to="/publicar"
        className="flex items-center justify-center gap-3 rounded-md border border-brand bg-bar-soft px-3 py-2 text-sm text-ink transition hover:brightness-95"
      >
        <SquarePen className="size-5 text-ink" />
        Anunciate
      </Link>

      <EventCalendar />

      <HelpMenu />
    </aside>
  )
}
