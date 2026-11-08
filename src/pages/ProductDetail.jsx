import { Tag } from 'lucide-react'
import { useParams } from 'react-router-dom'
import ProductActions from '../components/sales/ProductActions'
import ProductGallery from '../components/sales/ProductGallery'
import ProductInfo from '../components/sales/ProductInfo'
import { findSale } from '../data/sales'
import NotFound from './NotFound'

export default function ProductDetail() {
  const { saleId } = useParams()
  const sale = findSale(saleId)

  if (!sale) return <NotFound />

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 space-y-8 px-4 py-6 sm:px-8">
      <ProductActions />

      <div className="space-y-6 lg:px-11">
        <h1 className="flex items-center gap-3 text-xl">
          <Tag className="size-7 text-brand" />
          {sale.detailTitle}
        </h1>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_27rem]">
          <ProductGallery key={sale.id} sale={sale} />
          <ProductInfo sale={sale} />
        </div>
      </div>
    </main>
  )
}
