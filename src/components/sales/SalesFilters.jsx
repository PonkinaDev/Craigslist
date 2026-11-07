import { useState } from 'react'
import { languageOptions, sellerTypes } from '../../data/sales'
import { SelectInput, TextInput } from '../form/FormControls'
import CheckboxPanel from '../listings/CheckboxPanel'
import DistanceFilter from '../listings/DistanceFilter'
import FilterActions from '../listings/FilterActions'
import SellerTypeChips from './SellerTypeChips'

export default function SalesFilters({ onOpenMap }) {
  const [sellerType, setSellerType] = useState(sellerTypes[0])

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      onReset={() => setSellerType(sellerTypes[0])}
      className="space-y-4"
    >
      <SellerTypeChips value={sellerType} onChange={setSellerType} />
      <CheckboxPanel />

      <hr className="border-ink/40" />
      <DistanceFilter onOpenMap={onOpenMap} />

      <hr className="border-ink/40" />
      <div className="space-y-2 text-center text-xs">
        <p className="text-ink">Precio</p>
        <div className="grid grid-cols-2 gap-3">
          <TextInput
            name="minPrice"
            type="number"
            min="0"
            inputMode="numeric"
            placeholder="Min: 0"
            aria-label="Precio mínimo"
          />
          <TextInput
            name="maxPrice"
            type="number"
            min="0"
            inputMode="numeric"
            placeholder="Max: 0"
            aria-label="Precio máximo"
          />
        </div>
      </div>

      <hr className="border-ink/40" />
      <div className="space-y-2 text-center text-xs">
        <label htmlFor="sale-language" className="block text-ink">
          Idioma de publicación
        </label>
        <SelectInput id="sale-language" name="language" options={languageOptions} />
      </div>

      <hr className="border-ink/40" />
      <FilterActions />
    </form>
  )
}
