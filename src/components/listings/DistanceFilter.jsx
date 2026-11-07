import { TextInput } from '../form/FormControls'

export default function DistanceFilter({ onOpenMap }) {
  return (
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
  )
}
