import { useState } from 'react'
import FavoriteButton from '../listings/FavoriteButton'

export default function ProductInfo({ sale }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const details = [
    ['Condicion', sale.condition],
    ['Marca/Fabricante', sale.brand],
    ['Nombre/numero del Modelo', sale.model],
  ]

  return (
    <section aria-label="Detalles del producto" className="relative border border-ink/60 p-5 lg:min-h-[30rem]">
      <FavoriteButton
        isFavorite={isFavorite}
        onToggle={() => setIsFavorite((current) => !current)}
        className="absolute right-4 top-4"
      />

      <dl className="space-y-4 pr-10">
        {details.map(([label, value]) => (
          <div key={label} className="flex flex-wrap items-baseline gap-2">
            <dt className="text-base font-semibold text-ink-soft">{label}:</dt>
            <dd className="text-sm text-ink">{value}</dd>
          </div>
        ))}
      </dl>

      <hr className="my-5 mr-10 border-ink/60" />

      <h2 className="mb-4 text-base font-semibold text-ink-soft">Descripcion:</h2>
      <p className="text-xs leading-6 text-ink">{sale.description}</p>
    </section>
  )
}
