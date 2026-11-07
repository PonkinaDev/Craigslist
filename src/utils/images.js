const IMAGE_API = 'https://loremflickr.com'

export const imageUrl = (keyword, lock, width = 640, height = 480) =>
  `${IMAGE_API}/${width}/${height}/${keyword}?lock=${lock}`
