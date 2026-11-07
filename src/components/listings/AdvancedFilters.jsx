import CheckboxPanel from './CheckboxPanel'
import DistanceFilter from './DistanceFilter'
import FilterActions from './FilterActions'

export default function AdvancedFilters({ onOpenMap }) {
  return (
    <form onSubmit={(event) => event.preventDefault()} className="space-y-4">
      <h2 className="text-center text-base text-brand">Filtros</h2>
      <CheckboxPanel />
      <hr className="border-ink/40" />
      <DistanceFilter onOpenMap={onOpenMap} />
      <FilterActions />
    </form>
  )
}
