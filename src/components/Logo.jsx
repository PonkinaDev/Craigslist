import { Link } from 'react-router-dom'
import PeaceIcon from './PeaceIcon'

const sizes = {
  md: { icon: 'size-7', text: 'text-2xl' },
  lg: { icon: 'size-10', text: 'text-4xl' },
}

export default function Logo({ size = 'md' }) {
  const { icon, text } = sizes[size]

  return (
    <Link to="/" className="flex items-center gap-1.5 text-brand" aria-label="craigslist">
      <PeaceIcon className={icon} />
      <span className={`${text} font-semibold tracking-tight`}>craigslist</span>
    </Link>
  )
}
