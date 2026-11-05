import { filterCheckboxes } from '../../data/listings'
import { ChoiceInput, TextInput } from '../form/FormControls'

const actionClasses = 'flex-1 rounded bg-control px-3 py-1.5 text-xs text-ink transition hover:brightness-95'

export default function AdvancedFilters({ onOpenMap }) {
  return (
    <form onSubmit={(event) => event.preventDefault()} className="space-y-4">
      <h2 className="text-center text-base text-brand">Filtros</h2>

      <fieldset className="space-y-3 rounded-xl bg-chip p-4">
        <legend className="sr-only">Filtros de búsqueda</legend>
        {filterCheckboxes.map((label) => (
          <ChoiceInput key={label} name="filters" value={label} label={label} />
        ))}
      </fieldset>

      <hr className="border-ink/40" />

      <div className="space-y-2 text-center text-xs">
        <label htmlFor="listing-miles" className="block text-ink">
          Millas de la ubicación
        </label>
        <div className="mx-auto w-32">
          <TextInput
            id="listing-miles"
            name="miles"
            type="number"
            min="0"
            inputMode="numeric"
            placeholder="Millas"
            className="text-center"
          />
        </div>
        <button type="button" onClick={onOpenMap} className="text-brand hover:underline">
          Usar mapa...
        </button>
      </div>

      <div className="flex gap-3">
        <button type="reset" className={actionClasses}>
          Resetear
        </button>
        <button type="submit" className={actionClasses}>
          Aplicar
        </button>
      </div>
    </form>
  )
}
