import { CircleUser, House, Star } from 'lucide-react'
import IconButton from './IconButton'
import Logo from './Logo'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'

export default function Header({ query, onQueryChange, onSearchSubmit, isDark, onToggleTheme }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 bg-bar px-4 py-2.5 sm:px-8">
      <Logo />

      <div className="order-last flex w-full items-center justify-center gap-2 sm:order-none sm:w-auto sm:flex-1">
        <SearchBar value={query} onChange={onQueryChange} onSubmit={onSearchSubmit} />
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </div>

      <nav className="flex items-center gap-1">
        <IconButton icon={House} label="Inicio" />
        <IconButton icon={Star} label="Favoritos" />
        <IconButton icon={CircleUser} label="Mi cuenta" />
      </nav>
    </header>
  )
}
