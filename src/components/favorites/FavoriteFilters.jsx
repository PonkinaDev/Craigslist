import { ChoiceInput } from '../form/FormControls'

const secondaryButtonClasses = 'rounded bg-control px-3 py-1.5 text-xs text-ink transition hover:brightness-95'

export default function FavoriteFilters() {
  return (
    <form onSubmit={(event) => event.preventDefault()} className="space-y-6">
      <fieldset className="space-y-3 rounded-xl bg-chip p-4">
        <legend className="sr-only">Filtros</legend>
        <ChoiceInput name="withImage" label="Con imagen" />
        <ChoiceInput name="postedToday" label="Publicado hoy" />
      </fieldset>

      <hr className="border-ink/40" />

      <div className="flex justify-between">
        <button type="reset" className={secondaryButtonClasses}>
          Resetear
        </button>
        <button type="submit" className={secondaryButtonClasses}>
          Aplicar
        </button>
      </div>
    </form>
  )
}
