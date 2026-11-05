import { Star } from 'lucide-react'

export default function FavoriteButton({ isFavorite, onToggle, className = '' }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
      className={`grid size-9 shrink-0 place-items-center rounded-full transition hover:bg-brand/15 ${
        isFavorite ? 'text-brand' : 'text-ink-soft'
      } ${className}`}
    >
      <Star className={`size-5 ${isFavorite ? 'fill-current' : ''}`} />
    </button>
  )
}
