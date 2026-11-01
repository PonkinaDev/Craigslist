import { Link } from 'lucide-react'
import Carousel from './Carousel'

export default function CategorySection({ section }) {
  const { id, title, icon: Icon, items } = section

  return (
    <section id={id} className="space-y-4">
      <div className="flex w-64 items-center justify-between rounded-lg bg-chip px-4 py-2.5">
        <h2 className="flex items-center gap-3 text-base font-medium">
          <Icon className="size-5" />
          {title}
        </h2>
        <a href={`#${id}`} aria-label={`Enlace a ${title}`} className="text-ink hover:text-brand">
          <Link className="size-4 -rotate-45" />
        </a>
      </div>

      <Carousel key={items.join('|')} items={items} />
    </section>
  )
}
