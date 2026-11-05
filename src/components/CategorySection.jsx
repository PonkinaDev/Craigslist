import { Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'

const headingClasses = 'flex w-64 items-center justify-between rounded-lg bg-chip px-4 py-2.5'

export default function CategorySection({ section }) {
  const { id, title, icon: Icon, items, to } = section

  const heading = (
    <>
      <h2 className="flex items-center gap-3 text-base font-medium">
        <Icon className="size-5" />
        {title}
      </h2>
      <LinkIcon className="size-4 -rotate-45" />
    </>
  )

  return (
    <section id={id} className="space-y-4">
      {to ? (
        <Link to={to} className={`${headingClasses} transition hover:brightness-95`}>
          {heading}
        </Link>
      ) : (
        <div className={headingClasses}>{heading}</div>
      )}

      <Carousel key={items.join('|')} items={items} to={to} />
    </section>
  )
}
