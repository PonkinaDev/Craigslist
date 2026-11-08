import { useState } from 'react'
import Comment from './Comment'

const VISIBLE_BY_DEFAULT = 1

const branchClasses =
  'relative pt-3 before:absolute before:-left-[30px] before:top-0 before:h-[30px] before:w-[30px] before:rounded-bl-xl before:border-b before:border-l before:border-dashed before:border-ink/60 not-last:after:absolute not-last:after:-left-[30px] not-last:after:top-0 not-last:after:h-full not-last:after:border-l not-last:after:border-dashed not-last:after:border-ink/60'

export default function Replies({ replies }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hiddenCount = replies.length - VISIBLE_BY_DEFAULT
  const visibleReplies = isExpanded ? replies : replies.slice(0, VISIBLE_BY_DEFAULT)

  return (
    <div className="col-start-2">
      <ul>
        {visibleReplies.map((reply) => (
          <li key={reply.id} className={branchClasses}>
            <Comment comment={reply} />
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          aria-expanded={isExpanded}
          className="mt-3 text-sm text-brand transition hover:underline"
        >
          {isExpanded
            ? 'Ocultar respuestas'
            : `Ver ${hiddenCount} ${hiddenCount === 1 ? 'respuesta más' : 'respuestas más'}`}
        </button>
      )}
    </div>
  )
}
