import { Play } from 'lucide-react'

const sizes = {
  md: 'size-11',
  sm: 'size-9',
}

export default function ArrowButton({
  direction,
  onClick,
  disabled = false,
  label,
  size = 'md',
  verticalOnLarge = false,
}) {
  const isPrev = direction === 'prev'
  const defaultLabel = isPrev ? 'Anterior' : 'Siguiente'
  const rotation = isPrev
    ? `rotate-180 ${verticalOnLarge ? 'lg:-rotate-90' : ''}`
    : verticalOnLarge
      ? 'lg:rotate-90'
      : ''

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label ?? defaultLabel}
      className={`${sizes[size]} grid shrink-0 place-items-center rounded-full bg-control text-brand shadow-sm transition hover:brightness-95 disabled:cursor-default disabled:opacity-40`}
    >
      <Play className={`size-4 fill-current ${rotation}`} />
    </button>
  )
}
