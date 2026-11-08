export default function NewThreadBox() {
  return (
    <div className="sticky bottom-0 bg-page px-4 pb-4 pt-3 sm:px-6">
      <input
        type="text"
        placeholder="Empieza un nuevo Hilo"
        aria-label="Empieza un nuevo Hilo"
        className="w-full border border-ink/60 bg-field px-3 py-4 text-sm text-ink outline-none placeholder:text-ink-soft focus:border-brand"
      />
    </div>
  )
}
