import goats from '../assets/goats.jpg'

export const salesTitle = 'En venta'

export const sellerTypes = ['All', 'Owner', 'dealer']

export const languageOptions = ['Español', 'English', 'Português']

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam cursus tellus pulvinar ornare. Pellentesque et ex sem. Sed ut sodales risus, tincidunt pretium ligula. Nunc in posuere sapien, id eleifend erat. Integer sagittis elit dolor. Suspendisse blandit augue quis enim iaculis varius. Aenean eu ipsum facilisis, tempus turpis sit amet, vehicula tellus.'

const buildSale = (id, { topic, cover, brand = 'Lorem Ipsum', model = 'Lorem Ipsum' }) => ({
  id,
  topic,
  cover,
  brand,
  model,
  description,
  price: '$ 9.99',
  title: 'Lorem Ipsum',
  subtitle: 'Lorem Ipsum',
  detailTitle: 'Titulo del Producto',
  condition: 'Excelente',
})

export const sales = [
  buildSale(0, { topic: 'goat', cover: goats, brand: 'Goat', model: 'Cabra' }),
  buildSale(1, { topic: 'bicycle' }),
  buildSale(2, { topic: 'sofa living room' }),
  buildSale(3, { topic: 'laptop' }),
  buildSale(4, { topic: 'car' }),
  buildSale(5, { topic: 'clothes' }),
  buildSale(6, { topic: 'acoustic guitar' }),
  buildSale(7, { topic: 'smartphone' }),
]

export const findSale = (id) => sales.find((sale) => String(sale.id) === id)
