import { Star } from 'lucide-react'
import SafetyCard from '../SafetyCard'
import FavoriteFilters from './FavoriteFilters'

export default function FavoritesSidebar() {
  return (
    <aside className="shrink-0 space-y-6 p-5 lg:w-64 lg:border-r-2 lg:border-ink/40">
      <h1 className="flex items-center justify-center gap-3 text-lg">
        <Star className="size-5 fill-current" />
        Favoritos
      </h1>

      <FavoriteFilters />
      <SafetyCard />
    </aside>
  )
}
