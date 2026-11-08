import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode'
import Footer from './Footer'
import Header from './Header'

const FORUMS_PATH = '/foros'
const PAGES_WITHOUT_HEADER_SEARCH = ['/favoritos', '/anuncios', '/en-venta']

export default function Layout() {
  const [isDark, toggleTheme] = useDarkMode()
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'
  const isForums = pathname === FORUMS_PATH
  const showSearch = !PAGES_WITHOUT_HEADER_SEARCH.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  )

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    setQuery('')
  }, [isForums])

  const handleSearchSubmit = () => {
    if (!isHome && !isForums) navigate('/')
  }

  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <Header
        showSearch={showSearch}
        searchPlaceholder={isForums ? 'Busca en el foro' : undefined}
        query={query}
        onQueryChange={setQuery}
        onSearchSubmit={handleSearchSubmit}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <div className="flex flex-1 flex-col">
        <Outlet context={{ query, location, setLocation }} />
      </div>

      <Footer compact={!isHome} />
    </div>
  )
}
