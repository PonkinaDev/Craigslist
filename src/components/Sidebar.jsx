import { LocateFixed } from 'lucide-react'
import EventCalendar from './EventCalendar'
import HelpMenu from './HelpMenu'
import PublishButton from './PublishButton'

export default function Sidebar({ location, onOpenLocation }) {
  return (
    <aside className="flex shrink-0 flex-col gap-6 bg-sidebar p-5 lg:w-60">
      <button
        type="button"
        onClick={onOpenLocation}
        className="flex items-center gap-3 text-left"
        aria-label="Elegir ubicación"
      >
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
          <LocateFixed className="size-5" />
        </span>
        <span className="min-w-0 flex-1 border-b border-ink/60 pb-0.5">
          <span className="block text-[10px] text-ink-soft">Ingresa tu</span>
          <span className="block truncate text-sm">{location || 'Ubicación'}</span>
        </span>
      </button>

      <PublishButton />

      <EventCalendar />

      <HelpMenu />
    </aside>
  )
}
