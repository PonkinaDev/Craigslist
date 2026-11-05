import { useState } from 'react'
import { quickFilters } from '../../data/listings'

export default function QuickFilterList() {
  const [active, setActive] = useState('all')

  return (
    <section aria-label="Resumen de anuncios" className="space-y-3">
      <ul className="space-y-1">
        {quickFilters.map(({ id, label, count }) => {
          const isActive = active === id

          return (
            <li key={id}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(id)}
                className={`flex w-full items-center justify-between rounded px-3 py-2 text-xs text-ink transition hover:bg-brand/10 ${
                  isActive ? 'bg-bar' : ''
                }`}
              >
                <span>{label}</span>
                <span className={isActive ? 'rounded bg-brand px-2 py-0.5 text-page' : ''}>{count}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <hr className="border-ink/40" />

      <button
        type="button"
        onClick={() => setActive('all')}
        className="block w-full text-center text-xs text-brand hover:underline"
      >
        restablecer
      </button>
    </section>
  )
}
