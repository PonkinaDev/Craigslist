import { useEffect, useMemo, useState } from 'react'
import { fetchTopicImages, imageUrl } from '../utils/images'

export default function useTopicImages(topic, count, fallbackSeed) {
  const [found, setFound] = useState([])

  useEffect(() => {
    let isActive = true
    fetchTopicImages(topic).then((urls) => {
      if (isActive) setFound(urls)
    })
    return () => {
      isActive = false
    }
  }, [topic])

  return useMemo(() => {
    if (found.length >= count) return found.slice(0, count)
    return Array.from({ length: count }, (_, index) => imageUrl(`${fallbackSeed}-${index + 1}`))
  }, [found, count, fallbackSeed])
}
