import { itemLinks } from '../data/categories'
import useScrollEdges from '../hooks/useScrollEdges'
import ArrowButton from './ArrowButton'
import CategoryCard from './CategoryCard'

export default function Carousel({ items, to }) {
  const { trackRef, edges, updateEdges, scrollByItem } = useScrollEdges()

  return (
    <div className="flex items-center gap-3">
      <ArrowButton direction="prev" disabled={edges.atStart} onClick={() => scrollByItem(-1)} />

      <ul
        ref={trackRef}
        onScroll={updateEdges}
        className="no-scrollbar flex flex-1 snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth py-1"
      >
        {items.map((item) => (
          <li
            key={item}
            className="shrink-0 basis-[calc((100%-1.5rem)/2)] snap-start md:basis-[calc((100%-4.5rem)/4)]"
          >
            <CategoryCard label={item} to={itemLinks[item] ?? to} />
          </li>
        ))}
      </ul>

      <ArrowButton direction="next" disabled={edges.atEnd} onClick={() => scrollByItem(1)} />
    </div>
  )
}
