import { Tag } from 'lucide-react'
import { salesTitle } from '../../data/sales'
import SafetyCard from '../SafetyCard'
import SalesFilters from './SalesFilters'

export default function SalesSidebar({ onOpenMap }) {
  return (
    <aside className="shrink-0 space-y-5 p-5 lg:w-64 lg:border-r-2 lg:border-ink/40">
      <h1 className="flex items-center justify-center gap-3 text-lg">
        <Tag className="size-6 text-brand" />
        {salesTitle}
      </h1>

      <SalesFilters onOpenMap={onOpenMap} />
      <SafetyCard />
    </aside>
  )
}
