import FavoritesSearch from '../components/favorites/FavoritesSearch'
import FavoritesSidebar from '../components/favorites/FavoritesSidebar'
import ResultsToolbar from '../components/favorites/ResultsToolbar'
import { favorites } from '../data/favorites'

export default function Favorites() {
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <FavoritesSidebar />

      <main className="min-w-0 flex-1 space-y-4 p-4 sm:p-6">
        <FavoritesSearch />
        <ResultsToolbar total={favorites.length} />
        <hr className="border-ink/40" />
        {favorites.length === 0 && <p className="text-xs text-ink-soft">No hay nada guardado</p>}
      </main>
    </div>
  )
}
