import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Comment from '../components/forum/Comment'
import ForumSidebar from '../components/forum/ForumSidebar'
import ForumToolbar from '../components/forum/ForumToolbar'
import NewThreadBox from '../components/forum/NewThreadBox'
import { forums, INITIAL_THREADS, THREADS_PER_LOAD, threads } from '../data/forums'
import { normalizeText } from '../utils/text'

export default function Forums() {
  const { query } = useOutletContext()
  const [isOldestFirst, setIsOldestFirst] = useState(true)
  const [visibleCount, setVisibleCount] = useState(INITIAL_THREADS)

  const matchingForums = useMemo(() => {
    const term = normalizeText(query)
    return forums.filter((forum) => normalizeText(forum).includes(term))
  }, [query])

  const orderedThreads = isOldestFirst ? threads : [...threads].reverse()
  const visibleThreads = orderedThreads.slice(0, visibleCount)
  const hasMoreThreads = visibleCount < threads.length

  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <ForumSidebar key={matchingForums.join('|')} forums={matchingForums} />

      <div className="flex min-w-0 flex-1 flex-col">
        <ForumToolbar
          isOldestFirst={isOldestFirst}
          onToggleOrder={() => setIsOldestFirst((current) => !current)}
        />

        <main className="flex-1 space-y-8 px-4 py-6 sm:px-6">
          {visibleThreads.map((thread) => (
            <Comment key={thread.id} comment={thread} />
          ))}

          {hasMoreThreads && (
            <button
              type="button"
              onClick={() => setVisibleCount((current) => current + THREADS_PER_LOAD)}
              className="text-sm text-brand transition hover:underline"
            >
              Ver más comentarios
            </button>
          )}
        </main>

        <NewThreadBox />
      </div>
    </div>
  )
}
