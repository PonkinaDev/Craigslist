import { useRef, useState } from 'react'
import { Search } from 'lucide-react'
import useDismiss from '../hooks/useDismiss'
import ArrowButton from './ArrowButton'

const DEFAULT_LOCATION = 'Bogotá, Colombia'

const buildMapUrl = (query) => `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=11&output=embed`

export default function LocationModal({ initialLocation, onClose, onConfirm }) {
  const startingPoint = initialLocation || DEFAULT_LOCATION
  const [draft, setDraft] = useState(startingPoint)
  const [mapQuery, setMapQuery] = useState(startingPoint)
  const panelRef = useRef(null)

  useDismiss(panelRef, onClose)

  const handleSearch = (event) => {
    event.preventDefault()
    const value = draft.trim()
    if (value) setMapQuery(value)
  }

  const handleConfirm = () => onConfirm(draft.trim() || mapQuery)

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Buscar ubicación"
      className="fixed inset-0 z-50 grid place-items-center bg-black/45 p-4"
    >
      <div ref={panelRef} className="w-full max-w-md overflow-hidden rounded-2xl bg-bar-soft shadow-2xl">
        <header className="flex items-center gap-3 bg-bar px-4 py-3">
          <ArrowButton direction="prev" size="sm" label="Cerrar" onClick={onClose} />
          <h2 className="text-sm font-medium">Buscar ubicación</h2>
        </header>

        <form onSubmit={handleSearch} className="px-6 py-3">
          <label htmlFor="location-search" className="mb-1 block text-center text-xs text-ink">
            Mapa
          </label>
          <div className="flex items-center gap-2 rounded border border-brand bg-field px-2 py-1.5">
            <Search className="size-4 shrink-0 text-ink-soft" />
            <input
              id="location-search"
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ciudad o código postal"
              className="w-full bg-transparent text-xs text-ink outline-none placeholder:text-ink-soft"
            />
          </div>
        </form>

        <iframe
          title="Mapa"
          src={buildMapUrl(mapQuery)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-96 w-full border-0"
        />

        <footer className="flex justify-center bg-bar px-4 py-3">
          <button
            type="button"
            onClick={handleConfirm}
            className="rounded-md bg-bar-soft px-5 py-2 text-xs text-ink shadow-sm transition hover:brightness-95"
          >
            Elige esta area de busqueda
          </button>
        </footer>
      </div>
    </div>
  )
}
