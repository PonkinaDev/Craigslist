import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange, onSubmit, placeholder = 'Busqueda de categoria' }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit?.()
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl items-center gap-3 rounded-md bg-field px-3 py-2 shadow-sm"
    >
      <Search className="size-5 shrink-0 text-ink-soft" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft"
      />
    </form>
  )
}
