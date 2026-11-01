import { useCallback, useEffect, useRef, useState } from 'react'
import ArrowButton from './ArrowButton'
import CategoryCard from './CategoryCard'

export default function Carousel({ items }) {
  const trackRef = useRef(null)
  const [edges, setEdges] = useState({ atStart: true, atEnd: false })

  const updateEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setEdges({
      atStart: track.scrollLeft <= 1,
      atEnd: track.scrollLeft + track.clientWidth >= track.scrollWidth - 1,
    })
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  const scrollByCard = (direction) => {
    const track = trackRef.current
    const firstCard = track?.firstElementChild
    if (!firstCard) return

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <div className="flex items-center gap-3">
      <ArrowButton direction="prev" disabled={edges.atStart} onClick={() => scrollByCard(-1)} />

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
            <CategoryCard label={item} />
          </li>
        ))}
      </ul>

      <ArrowButton direction="next" disabled={edges.atEnd} onClick={() => scrollByCard(1)} />
    </div>
  )
}
