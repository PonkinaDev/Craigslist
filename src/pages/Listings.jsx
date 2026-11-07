import ListingRow from '../components/listings/ListingRow'
import ListingsSidebar from '../components/listings/ListingsSidebar'
import ListingsToolbar from '../components/listings/ListingsToolbar'
import Pagination from '../components/listings/Pagination'
import LocationModal from '../components/LocationModal'
import PageSearch from '../components/PageSearch'
import { listings } from '../data/listings'
import useLocationModal from '../hooks/useLocationModal'

export default function Listings() {
  const locationModal = useLocationModal()

  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <ListingsSidebar onOpenMap={locationModal.open} />

      <main className="min-w-0 flex-1 space-y-4 p-4 sm:p-6">
        <PageSearch placeholder="Busqueda de categoria" />
        <ListingsToolbar />

        <ul className="overflow-hidden rounded-lg border border-line">
          {listings.map((listing) => (
            <ListingRow key={listing.id} listing={listing} />
          ))}
        </ul>

        <Pagination />
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
