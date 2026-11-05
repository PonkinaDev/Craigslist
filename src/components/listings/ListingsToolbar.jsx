import { useState } from 'react'
import { filterSelects } from '../../data/listings'
import PillSelect from '../PillSelect'
import ViewSwitcher from '../ViewSwitcher'

export default function ListingsToolbar() {
  const [view, setView] = useState('list')

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <ViewSwitcher value={view} onChange={setView} />
        <span className="h-6 w-px bg-ink/50" aria-hidden="true" />
        {filterSelects.map(({ label, options }) => (
          <PillSelect key={label} label={label} options={options} />
        ))}
      </div>
      <p className="text-right text-xs text-ink">1-10 de 60</p>
    </div>
  )
}
