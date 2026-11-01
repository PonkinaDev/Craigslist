import { MapPin } from 'lucide-react'
import { Field } from '../form/Field'
import { TextInput } from '../form/FormControls'
import FormSection from '../form/FormSection'

export default function LocationSection() {
  return (
    <FormSection step={4} title="Ubicación exacta">
      <div className="grid gap-5 md:grid-cols-3">
        <Field label="Calle" htmlFor="listing-street">
          <TextInput id="listing-street" name="street" placeholder="Ej: 123 Main ST" />
        </Field>
        <Field label="Entre calles (Opcional)" htmlFor="listing-cross-streets">
          <TextInput id="listing-cross-streets" name="crossStreets" placeholder="Ej: 2nd St y 3rd St" />
        </Field>
        <Field label="Ciudad" htmlFor="listing-city" required>
          <TextInput id="listing-city" name="city" icon={MapPin} placeholder="Ej: Roswell" required />
        </Field>
      </div>
    </FormSection>
  )
}
