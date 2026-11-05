import { Bell, Search } from 'lucide-react'

export default function PageSearch({ placeholder, value, onChange, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit?.()
  }

  return (
    <form role="search" onSubmit={handleSubmit} className="flex items-center gap-3">
      <div className="flex flex-1 items-stretch overflow-hidden rounded-md shadow-sm">
        <label className="flex flex-1 items-center gap-3 bg-field px-3 py-2.5">
          <Search className="size-5 shrink-0 text-ink-soft" />
          <input
            type="search"
            name="term"
            value={value}
            onChange={onChange && ((event) => onChange(event.target.value))}
            placeholder={placeholder}
            aria-label={placeholder}
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft"
          />
        </label>
        <button
          type="submit"
          className="bg-brand px-6 text-lg font-medium text-page transition hover:brightness-110"
        >
          Buscar
        </button>
      </div>

      <button
        type="button"
        aria-label="Alertas de búsqueda"
        title="Alertas de búsqueda"
        className="grid size-9 shrink-0 place-items-center rounded-md bg-bar text-brand transition hover:brightness-95"
      >
        <Bell className="size-5" />
      </button>
    </form>
  )
}
