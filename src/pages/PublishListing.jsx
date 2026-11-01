import PublishForm from '../components/publish/PublishForm'

export default function PublishListing() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-8">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold">Publica tu anuncio</h1>
          <p className="text-sm text-ink">
            Completa la información para que tu anuncio sea claro y fácil de encontrar.
          </p>
        </div>
        <p className="text-xs text-ink">
          <span className="text-required">*</span> Campos obligatorios
        </p>
      </header>

      <PublishForm />
    </main>
  )
}
