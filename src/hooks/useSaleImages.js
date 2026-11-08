import { useMemo } from 'react'
import useTopicImages from './useTopicImages'

const GALLERY_SIZE = 4

export default function useSaleImages(sale) {
  const images = useTopicImages(sale.topic, GALLERY_SIZE, `venta-${sale.id}`)

  return useMemo(() => (sale.cover ? [sale.cover, ...images.slice(1)] : images), [sale.cover, images])
}
