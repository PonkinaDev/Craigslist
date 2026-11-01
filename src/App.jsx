import { useMemo, useState } from 'react'
import CategorySection from './components/CategorySection'
import Footer from './components/Footer'
import Header from './components/Header'
import LocationModal from './components/LocationModal'
import Sidebar from './components/Sidebar'
import { sections } from './data/categories'
import useDarkMode from './hooks/useDarkMode'
import { normalizeText } from './utils/text'

export default function App() {
  const [isDark, toggleTheme] = useDarkMode()
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [isLocationOpen, setIsLocationOpen] = useState(false)

  const visibleSections = useMemo(() => {
    const term = normalizeText(query)
    if (!term) return sections

    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => normalizeText(item).includes(term)),
      }))
      .filter((section) => section.items.length > 0)
  }, [query])

  const handleConfirmLocation = (value) => {
    setLocation(value)
    setIsLocationOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <Header query={query} onQueryChange={setQuery} isDark={isDark} onToggleTheme={toggleTheme} />

      <div className="flex flex-1 flex-col lg:flex-row">
        <Sidebar location={location} onOpenLocation={() => setIsLocationOpen(true)} />

        <main className="min-w-0 flex-1 space-y-8 p-4 sm:p-8">
          {visibleSections.length > 0 ? (
            visibleSections.map((section) => <CategorySection key={section.id} section={section} />)
          ) : (
            <p className="py-16 text-center text-ink-soft">No hay categorías que coincidan con tu búsqueda.</p>
          )}
        </main>
      </div>

      <Footer />

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
