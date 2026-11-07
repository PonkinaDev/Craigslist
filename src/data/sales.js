import sample from '../assets/sale-sample.png'

export const salesTitle = 'En venta'

export const sellerTypes = ['All', 'Owner', 'dealer']

export const languageOptions = ['Español', 'English', 'Português']

export const sales = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  image: sample,
  price: '$ 9.99',
  title: 'Lorem Ipsum',
  subtitle: 'Lorem Ipsum',
}))
