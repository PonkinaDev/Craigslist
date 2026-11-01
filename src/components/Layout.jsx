import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const [isDark, toggleTheme] = useDarkMode()
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  const handleSearchSubmit = () => {
    if (!isHome) navigate('/')
  }

  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <Header
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
