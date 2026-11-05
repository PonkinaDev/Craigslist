import { Link } from 'react-router-dom'
import cover from '../assets/card-cover.svg'

const cardClasses =
  'group block w-full overflow-hidden rounded-lg text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'

export default function CategoryCard({ label, to }) {
  const content = (
    <>
      <img src={cover} alt="" className="h-28 w-full object-cover sm:h-32" draggable="false" />
      <span className="block bg-card-label px-2 py-2 text-center text-sm text-ink">{label}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} draggable="false" className={cardClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={cardClasses}>
      {content}
    </button>
  )
}
