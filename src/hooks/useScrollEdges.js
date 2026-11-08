import { useCallback, useEffect, useRef, useState } from 'react'

export default function useScrollEdges() {
  const trackRef = useRef(null)
  const [edges, setEdges] = useState({ atStart: true, atEnd: false })

  const updateEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setEdges({
      atStart: track.scrollLeft <= 1 && track.scrollTop <= 1,
      atEnd:
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 1 &&
        track.scrollTop + track.clientHeight >= track.scrollHeight - 1,
    })
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  const scrollByItem = (direction) => {
    const track = trackRef.current
    const firstItem = track?.firstElementChild
    if (!firstItem) return

    const styles = getComputedStyle(track)
    track.scrollBy({
      left: direction * (firstItem.offsetWidth + (parseFloat(styles.columnGap) || 0)),
      top: direction * (firstItem.offsetHeight + (parseFloat(styles.rowGap) || 0)),
      behavior: 'smooth',
    })
  }

  return { trackRef, edges, updateEdges, scrollByItem }
}
