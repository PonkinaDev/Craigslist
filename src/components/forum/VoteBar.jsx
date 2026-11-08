import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { useState } from 'react'

const voteClasses = (isActive) =>
  `flex items-center gap-2 transition hover:text-brand ${isActive ? 'text-brand' : 'text-ink'}`

export default function VoteBar({ likes }) {
  const [vote, setVote] = useState(null)

  const toggleVote = (next) => setVote((current) => (current === next ? null : next))

  return (
    <div className="flex items-center gap-8 pt-2 text-sm">
      <button
        type="button"
        onClick={() => toggleVote('up')}
        aria-pressed={vote === 'up'}
        aria-label="Me gusta"
        className={voteClasses(vote === 'up')}
      >
        <ThumbsUp className={`size-4 ${vote === 'up' ? 'fill-current' : ''}`} />
        <span className="text-xs">{likes + (vote === 'up' ? 1 : 0)}</span>
      </button>

      <button
        type="button"
        onClick={() => toggleVote('down')}
        aria-pressed={vote === 'down'}
        aria-label="No me gusta"
        className={voteClasses(vote === 'down')}
      >
        <ThumbsDown className={`size-4 ${vote === 'down' ? 'fill-current' : ''}`} />
      </button>

      <button type="button" className="transition hover:text-brand">
        Responder
      </button>
    </div>
  )
}
