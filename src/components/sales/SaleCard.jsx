import { useState } from 'react'
import FavoriteButton from '../listings/FavoriteButton'

export default function SaleCard({ sale }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <li className="overflow-hidden rounded-lg bg-chip shadow-sm">
      <div className="relative">
        <img src={sale.image} alt="" className="h-44 w-full object-cover" />
        <span className="absolute left-2 top-2 rounded bg-field px-2 py-0.5 text-xs text-ink shadow-sm">
          {sale.price}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 px-3 py-2">
        <div className="min-w-0 text-sm">
          <p className="truncate text-ink">{sale.title}</p>
          <p className="truncate text-ink-soft">{sale.subtitle}</p>
        </div>
        <FavoriteButton isFavorite={isFavorite} onToggle={() => setIsFavorite((current) => !current)} />
      </div>
    </li>
  )
}
