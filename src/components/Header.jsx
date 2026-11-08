import { CircleUser, House, Star } from 'lucide-react'
import IconButton from './IconButton'
import Logo from './Logo'
import PublishButton from './PublishButton'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'

export default function Header({
  showSearch = true,
  searchPlaceholder,
  query,
  onQueryChange,
  onSearchSubmit,
  isDark,
  onToggleTheme,
}) {
  const themeToggle = <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

  return (
    <header className="flex flex-wrap items-center justify-between gap-3 bg-bar px-4 py-2.5 sm:px-8">
      <Logo />

      {showSearch && (
        <div className="order-last flex w-full items-center justify-center gap-2 sm:order-none sm:w-auto sm:flex-1">
          <SearchBar
            value={query}
            onChange={onQueryChange}
            onSubmit={onSearchSubmit}
            placeholder={searchPlaceholder}
          />
          {themeToggle}
        </div>
      )}

      <nav className="flex items-center gap-1">
        {!showSearch && (
          <>
            {themeToggle}
            <PublishButton className="mx-2" />
          </>
        )}
        <IconButton icon={House} label="Inicio" to="/" />
        <IconButton icon={Star} label="Favoritos" to="/favoritos" />
        <IconButton icon={CircleUser} label="Mi cuenta" />
      </nav>
    </header>
  )
}
