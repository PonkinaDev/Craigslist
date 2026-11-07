import ListingsToolbar from '../components/listings/ListingsToolbar'
import LocationModal from '../components/LocationModal'
import PageSearch from '../components/PageSearch'
import SaleCard from '../components/sales/SaleCard'
import SalesSidebar from '../components/sales/SalesSidebar'
import { sales } from '../data/sales'
import useLocationModal from '../hooks/useLocationModal'

export default function ForSale() {
  const locationModal = useLocationModal()

  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <SalesSidebar onOpenMap={locationModal.open} />

      <main className="min-w-0 flex-1 space-y-4 p-4 sm:p-6">
        <PageSearch placeholder="Busqueda de categoria" />
        <ListingsToolbar defaultView="grid" />
        <hr className="border-ink/40" />

        <ul className="grid gap-6 pt-4 sm:grid-cols-2 xl:grid-cols-4">
          {sales.map((sale) => (
            <SaleCard key={sale.id} sale={sale} />
          ))}
        </ul>
      </main>

      {locationModal.isOpen && (
        <LocationModal
          initialLocation={locationModal.location}
          onClose={locationModal.close}
          onConfirm={locationModal.confirm}
        />
      )}
    </div>
  )
}
