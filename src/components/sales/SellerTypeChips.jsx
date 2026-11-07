import { sellerTypes } from '../../data/sales'

export default function SellerTypeChips({ value, onChange }) {
  return (
    <div role="group" aria-label="Tipo de vendedor" className="flex justify-center gap-2">
      {sellerTypes.map((type) => {
        const isActive = value === type

        return (
          <button
            key={type}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(type)}
            className={`rounded px-3 py-1 text-xs transition hover:brightness-95 ${
              isActive ? 'bg-bar text-brand' : 'bg-control text-ink'
            }`}
          >
            {type}
          </button>
        )
      })}
    </div>
  )
}
