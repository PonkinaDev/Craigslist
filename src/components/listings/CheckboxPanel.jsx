import { filterCheckboxes } from '../../data/listings'
import { ChoiceInput } from '../form/FormControls'

export default function CheckboxPanel() {
  return (
    <fieldset className="space-y-3 rounded-xl bg-chip p-4">
      <legend className="sr-only">Filtros de búsqueda</legend>
      {filterCheckboxes.map((label) => (
        <ChoiceInput key={label} name="filters" value={label} label={label} />
      ))}
    </fieldset>
  )
}
