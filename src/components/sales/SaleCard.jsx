import { useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteButton from '../listings/FavoriteButton'
import RemoteImage from '../RemoteImage'

export default function SaleCard({ sale }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <li className="relative overflow-hidden rounded-lg bg-chip shadow-sm">
      <Link to={`/en-venta/${sale.id}`} className="block">
        <div className="relative">
          <RemoteImage src={sale.images[0]} className="h-44 w-full object-cover" />
          <span className="absolute left-2 top-2 rounded bg-field px-2 py-0.5 text-xs text-ink shadow-sm">
            {sale.price}
          </span>
        </div>

        <div className="min-w-0 px-3 py-2 pr-14 text-sm">
          <p className="truncate text-ink">{sale.title}</p>
          <p className="truncate text-ink-soft">{sale.subtitle}</p>
        </div>
      </Link>

      <FavoriteButton
        isFavorite={isFavorite}
        onToggle={() => setIsFavorite((current) => !current)}
        className="absolute bottom-2 right-2"
      />
    </li>
  )
}
