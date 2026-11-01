import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="grid flex-1 place-items-center p-8 text-center">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Página no encontrada</h1>
        <p className="text-sm text-ink-soft">La dirección que buscas no existe.</p>
        <Link
          to="/"
          className="inline-block rounded-md bg-brand px-6 py-2 text-sm font-medium text-page transition hover:brightness-110"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
