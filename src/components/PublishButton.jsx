import { SquarePen } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PublishButton({ className = '' }) {
  return (
    <Link
      to="/publicar"
      className={`flex items-center justify-center gap-3 rounded-md border border-brand bg-bar-soft px-4 py-2 text-sm text-ink transition hover:brightness-95 ${className}`}
    >
      <SquarePen className="size-5" />
      Anunciate
    </Link>
  )
}
