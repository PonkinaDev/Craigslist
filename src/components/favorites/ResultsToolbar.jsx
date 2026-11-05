import { useState } from 'react'
import { PAGE_SIZE } from '../../data/favorites'
import ViewSwitcher from '../ViewSwitcher'
import SortSelect from './SortSelect'

const formatRange = (total) => (total === 0 ? '0 de 0' : `1-${Math.min(PAGE_SIZE, total)} de ${total}`)

export default function ResultsToolbar({ total }) {
  const [view, setView] = useState('grid')

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <ViewSwitcher value={view} onChange={setView} />
        <span className="h-6 w-px bg-ink/50" aria-hidden="true" />
        <SortSelect />
      </div>
      <p className="text-right text-xs text-ink">{formatRange(total)}</p>
    </div>
  )
}
