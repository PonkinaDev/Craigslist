import goats from '../assets/goats.jpg'
import { imageUrl } from '../utils/images'

export const salesTitle = 'En venta'

export const sellerTypes = ['All', 'Owner', 'dealer']

export const languageOptions = ['Español', 'English', 'Português']

const GALLERY_SIZE = 4

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam cursus tellus pulvinar ornare. Pellentesque et ex sem. Sed ut sodales risus, tincidunt pretium ligula. Nunc in posuere sapien, id eleifend erat. Integer sagittis elit dolor. Suspendisse blandit augue quis enim iaculis varius. Aenean eu ipsum facilisis, tempus turpis sit amet, vehicula tellus.'

const apiGallery = (keyword, firstLock) =>
  Array.from({ length: GALLERY_SIZE }, (_, offset) => imageUrl(keyword, firstLock + offset))

const buildSale = (id, { images, brand, model }) => ({
  id,
  images,
  brand,
  model,
  description,
  price: '$ 9.99',
  title: 'Lorem Ipsum',
  subtitle: 'Lorem Ipsum',
  detailTitle: 'Titulo del Producto',
  condition: 'Excelente',
})

const sampleKeywords = ['car', 'gift', 'market', 'laptop', 'sofa', 'clothes', 'bicycle']

export const sales = [
  buildSale(0, { images: [goats, ...apiGallery('goat', 101).slice(1)], brand: 'Goat', model: 'Cabra' }),
  ...sampleKeywords.map((keyword, index) =>
    buildSale(index + 1, {
      images: apiGallery(keyword, (index + 2) * 100),
      brand: 'Lorem Ipsum',
      model: 'Lorem Ipsum',
    }),
  ),
]

export const findSale = (id) => sales.find((sale) => String(sale.id) === id)
