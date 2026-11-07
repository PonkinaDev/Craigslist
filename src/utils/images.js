const IMAGE_API = 'https://picsum.photos'

export const imageUrl = (seed, width = 640, height = 480) =>
  `${IMAGE_API}/seed/${encodeURIComponent(seed)}/${width}/${height}`
