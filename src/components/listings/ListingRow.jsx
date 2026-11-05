import { useState } from 'react'
import FavoriteButton from './FavoriteButton'
import ListingMeta from './ListingMeta'

export default function ListingRow({ listing }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <li className="flex items-center justify-between gap-4 border-b border-line px-6 py-3 last:border-b-0">
      <div className="min-w-0 space-y-0.5">
        <a href="#" className="block truncate text-base text-blue-700 hover:underline dark:text-blue-300">
          {listing.title}
        </a>
        <ListingMeta items={listing.meta} />
      </div>
      <FavoriteButton isFavorite={isFavorite} onToggle={() => setIsFavorite((current) => !current)} />
    </li>
  )
}
