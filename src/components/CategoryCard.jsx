import { Link } from 'react-router-dom'
import { imageUrl } from '../utils/images'
import RemoteImage from './RemoteImage'

const cardClasses =
  'group block w-full overflow-hidden rounded-lg text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'

export default function CategoryCard({ label, to }) {
  const content = (
    <>
      <RemoteImage
        src={imageUrl(`categoria-${label}`, 520, 260)}
        className="h-28 w-full bg-card-label object-cover sm:h-32"
      />
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
