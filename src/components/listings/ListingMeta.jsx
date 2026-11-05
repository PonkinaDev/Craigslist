import { Fragment } from 'react'

export default function ListingMeta({ items }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 text-xs text-ink">
      {items.map((item, index) => (
        <Fragment key={index}>
          {index > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-ink-soft" />}
          <span>{item}</span>
        </Fragment>
      ))}
    </p>
  )
}
