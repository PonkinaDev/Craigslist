import { MAX_FEATURES, durationOptions, featureOptions } from '../../data/listingForm'
import { Field, FieldGroup } from '../form/Field'
import { ChoiceInput, SelectInput, TextInput } from '../form/FormControls'
import FormSection from '../form/FormSection'

export default function DetailsSection({ features, onToggleFeature }) {
  const limitReached = features.length >= MAX_FEATURES

  return (
    <FormSection step={2} title="Detalles del anuncio">
      <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
        <div className="space-y-5">
          <Field label="Lugar / Ubicación" htmlFor="listing-place">
            <TextInput id="listing-place" name="place" placeholder="Ej: Centro Comunitario de Roswell" />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Fecha de inicio del evento" htmlFor="listing-start-date">
              <TextInput id="listing-start-date" name="startDate" type="date" />
            </Field>
            <Field label="Duración" htmlFor="listing-duration">
              <SelectInput id="listing-duration" name="duration" options={durationOptions} />
            </Field>
          </div>
        </div>

        <FieldGroup label="Características (elige hasta 3)" hint="Selecciona hasta 3 características">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
            {featureOptions.map((feature) => {
              const isChecked = features.includes(feature)

              return (
                <ChoiceInput
                  key={feature}
                  label={feature}
                  name="features"
                  value={feature}
                  checked={isChecked}
                  disabled={limitReached && !isChecked}
                  onChange={() => onToggleFeature(feature)}
                />
              )
            })}
          </div>
        </FieldGroup>
      </div>
    </FormSection>
  )
}
