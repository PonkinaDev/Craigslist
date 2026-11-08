import { ChevronRight } from 'lucide-react'

export default function ForumToolbar({ isOldestFirst, onToggleOrder }) {
  return (
    <div className="flex items-center justify-between bg-sidebar px-6 py-4 text-sm">
      <h1>Tus Replicas</h1>

      <button
        type="button"
        onClick={onToggleOrder}
        className="flex items-center gap-1 transition hover:text-brand"
      >
        {isOldestFirst ? 'Mas Antiguo' : 'Mas Reciente'}
        <ChevronRight className="size-4" />
      </button>
    </div>
  )
}
