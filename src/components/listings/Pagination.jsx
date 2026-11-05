import { Fragment, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { pageNumbers } from '../../data/listings'

const stepClasses =
  'flex items-center gap-1 rounded-md border border-brand bg-bar-soft px-4 py-2 text-sm text-brand transition hover:brightness-95 disabled:cursor-default disabled:border-line disabled:bg-transparent disabled:text-ink-soft disabled:hover:brightness-100'

const lastPosition = pageNumbers.length - 1

export default function Pagination() {
  const [position, setPosition] = useState(0)

  return (
    <nav aria-label="Paginación" className="flex flex-wrap items-center justify-center gap-3 pt-2">
      <button
        type="button"
        onClick={() => setPosition((current) => current - 1)}
        disabled={position === 0}
        className={stepClasses}
      >
        <ChevronLeft className="size-4" />
        Anterior
      </button>

      {pageNumbers.map((number, index) => (
        <Fragment key={number}>
          {index === lastPosition && (
            <span aria-hidden="true" className="text-ink-soft">
              ...
            </span>
          )}
          <button
            type="button"
            onClick={() => setPosition(index)}
            aria-current={index === position ? 'page' : undefined}
            className={`size-10 rounded-md border text-sm transition ${
              index === position
                ? 'border-brand bg-brand font-medium text-page'
                : 'border-line text-ink hover:bg-brand/10'
            }`}
          >
            {number}
          </button>
        </Fragment>
      ))}

      <button
        type="button"
        onClick={() => setPosition((current) => current + 1)}
        disabled={position === lastPosition}
        className={stepClasses}
      >
        Siguiente
        <ChevronRight className="size-4" />
      </button>
    </nav>
  )
}
