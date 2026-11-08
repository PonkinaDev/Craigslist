import { Link } from 'react-router-dom'
import { topicQueries } from '../data/categories'
import useTopicImages from '../hooks/useTopicImages'
import RemoteImage from './RemoteImage'

const cardClasses =
  'group block w-full overflow-hidden rounded-lg text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'

export default function CategoryCard({ label, to }) {
  const [cover] = useTopicImages(topicQueries[label] ?? label, 1, `categoria-${label}`)

  const content = (
    <>
      <RemoteImage
        src={cover}
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
