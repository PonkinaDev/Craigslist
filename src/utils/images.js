const FALLBACK_API = 'https://picsum.photos'
const TOPIC_API = 'https://pixabay.com/api/'
const TOPIC_API_KEY = import.meta.env.VITE_PIXABAY_API_KEY
const RESULTS_PER_TOPIC = 8
const CACHE_PREFIX = 'topic-images:'

const pendingTopics = new Map()

export const imageUrl = (seed, width = 640, height = 480) =>
  `${FALLBACK_API}/seed/${encodeURIComponent(seed)}/${width}/${height}`

const readCache = (topic) => {
  try {
    const stored = localStorage.getItem(`${CACHE_PREFIX}${topic}`)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

const writeCache = (topic, urls) => {
  try {
    localStorage.setItem(`${CACHE_PREFIX}${topic}`, JSON.stringify(urls))
  } catch {
    return
  }
}

const requestTopicImages = async (topic) => {
  const cached = readCache(topic)
  if (cached?.length) return cached

  const params = new URLSearchParams({
    key: TOPIC_API_KEY,
    q: topic,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: String(RESULTS_PER_TOPIC),
  })
  const response = await fetch(`${TOPIC_API}?${params}`)
  if (!response.ok) throw new Error(`Image search failed: ${response.status}`)

  const { hits } = await response.json()
  const urls = hits.map((hit) => hit.webformatURL)
  if (urls.length) writeCache(topic, urls)
  return urls
}

export const fetchTopicImages = (topic) => {
  if (!TOPIC_API_KEY) return Promise.resolve([])

  if (!pendingTopics.has(topic)) {
    const request = requestTopicImages(topic).catch(() => {
      pendingTopics.delete(topic)
      return []
    })
    pendingTopics.set(topic, request)
  }

  return pendingTopics.get(topic)
}
