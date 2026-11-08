import useScrollEdges from '../../hooks/useScrollEdges'
import ArrowButton from '../ArrowButton'
import CategoryCard from '../CategoryCard'

export default function ForumSidebar({ forums }) {
  const { trackRef, edges, updateEdges, scrollByItem } = useScrollEdges()

  return (
    <aside className="shrink-0 space-y-4 bg-sidebar p-4 lg:w-72">
      <h2 className="text-center text-lg text-brand">Conoce mas Foros</h2>

      {forums.length === 0 ? (
        <p className="py-6 text-center text-sm text-ink-soft">No hay foros que coincidan.</p>
      ) : (
        <div className="flex items-center gap-3 lg:flex-col">
          <ArrowButton
            direction="prev"
            verticalOnLarge
            label="Foros anteriores"
            disabled={edges.atStart}
            onClick={() => scrollByItem(-1)}
          />

          <ul
            ref={trackRef}
            onScroll={updateEdges}
            className="no-scrollbar flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth lg:max-h-[32rem] lg:w-full lg:flex-none lg:snap-y lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden"
          >
            {forums.map((forum) => (
              <li key={forum} className="w-44 shrink-0 snap-start lg:w-full">
                <CategoryCard label={forum} compact />
              </li>
            ))}
          </ul>

          <ArrowButton
            direction="next"
            verticalOnLarge
            label="Foros siguientes"
            disabled={edges.atEnd}
            onClick={() => scrollByItem(1)}
          />
        </div>
      )}
    </aside>
  )
}
