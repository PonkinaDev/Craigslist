import { listingsTitle } from '../../data/listings'
import SafetyCard from '../SafetyCard'
import AdvancedFilters from './AdvancedFilters'
import QuickFilterList from './QuickFilterList'

export default function ListingsSidebar({ onOpenMap }) {
  return (
    <aside className="shrink-0 space-y-5 p-5 lg:w-64 lg:border-r-2 lg:border-ink/40">
      <h1 className="text-center text-lg text-brand">{listingsTitle}</h1>
      <QuickFilterList />
      <AdvancedFilters onOpenMap={onOpenMap} />
      <SafetyCard />
    </aside>
  )
}
