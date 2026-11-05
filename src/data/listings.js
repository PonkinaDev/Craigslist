export const listingsTitle = 'Lorem ipsum'

export const quickFilters = [
  { id: 'all', label: 'Todos los anuncios', count: 198 },
  { id: 'photo', label: 'con foto', count: 67 },
  { id: 'today', label: 'publicado hoy', count: 22 },
  { id: 'new', label: 'nuevos', count: 14 },
  { id: 'favorites', label: 'favoritos', count: 0 },
]

export const filterCheckboxes = ['Buscar solo títulos', 'Anuncio con foto', 'Publicado hoy', 'Ocultar duplicados']

export const filterSelects = [
  {
    label: 'Precio',
    options: [
      { value: '', label: 'Precio' },
      { value: 'asc', label: 'Menor a mayor' },
      { value: 'desc', label: 'Mayor a menor' },
    ],
  },
  {
    label: 'Condición',
    options: [
      { value: '', label: 'Condición' },
      { value: 'new', label: 'Nuevo' },
      { value: 'used', label: 'Usado' },
    ],
  },
  {
    label: 'Vendido por',
    options: [
      { value: '', label: 'Vendido por' },
      { value: 'person', label: 'Particular' },
      { value: 'business', label: 'Negocio' },
    ],
  },
]

export const listings = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  meta: ['Lorem ipsum', '0/0', 'hace 1h'],
}))

export const pageNumbers = [1, 2, 3, 4, 5, 10]
