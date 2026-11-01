import { PAGE_SIZE } from '../../data/favorites'
import SortSelect from './SortSelect'
import ViewSwitcher from './ViewSwitcher'

const formatRange = (total) => (total === 0 ? '0 de 0' : `1-${Math.min(PAGE_SIZE, total)} de ${total}`)

export default function ResultsToolbar({ total }) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <ViewSwitcher />
        <span className="h-6 w-px bg-ink/50" aria-hidden="true" />
        <SortSelect />
      </div>
      <p className="text-right text-xs text-ink">{formatRange(total)}</p>
    </div>
  )
}
