import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import ListingRow from '../components/listings/ListingRow'
import ListingsSidebar from '../components/listings/ListingsSidebar'
import ListingsToolbar from '../components/listings/ListingsToolbar'
import Pagination from '../components/listings/Pagination'
import LocationModal from '../components/LocationModal'
import PageSearch from '../components/PageSearch'
import { listings } from '../data/listings'

export default function Listings() {
  const { location, setLocation } = useOutletContext()
  const [isLocationOpen, setIsLocationOpen] = useState(false)

  const handleConfirmLocation = (value) => {
    setLocation(value)
    setIsLocationOpen(false)
  }

  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <ListingsSidebar onOpenMap={() => setIsLocationOpen(true)} />

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

      {isLocationOpen && (
        <LocationModal
          initialLocation={location}
          onClose={() => setIsLocationOpen(false)}
          onConfirm={handleConfirmLocation}
        />
      )}
    </div>
  )
}
