import { LayoutGrid, List, MapPin } from 'lucide-react'

const views = [
  { id: 'grid', label: 'Grid', icon: LayoutGrid },
  { id: 'list', label: 'List', icon: List },
  { id: 'map', label: 'Map', icon: MapPin },
]

export default function ViewSwitcher({ value, onChange }) {
  return (
    <div role="group" aria-label="Vista de resultados" className="flex gap-2">
      {views.map(({ id, label, icon: Icon }) => {
        const isActive = value === id

        return (
          <button
            key={id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(id)}
            className={`flex items-center gap-2 rounded-md border border-brand px-3 py-1.5 text-xs text-brand transition ${
              isActive ? 'bg-bar' : 'bg-bar-soft hover:brightness-95'
            }`}
          >
            <Icon className="size-4" />
            {label}
          </button>
        )
      })}
    </div>
  )
}
