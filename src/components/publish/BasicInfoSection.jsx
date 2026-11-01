import { MapPin } from 'lucide-react'
import { MAX_DESCRIPTION_LENGTH, MAX_TITLE_LENGTH } from '../../data/listingForm'
import { Field } from '../form/Field'
import { CharCounter, TextArea, TextInput } from '../form/FormControls'
import FormSection from '../form/FormSection'

export default function BasicInfoSection({ title, onTitleChange, description, onDescriptionChange }) {
  return (
    <FormSection step={1} title="Información básica">
      <div className="grid gap-5 md:grid-cols-[1fr_14rem_9rem]">
        <div className="space-y-1">
          <Field label="Título del anuncio" htmlFor="listing-title" required hint="Resume tu anuncio en pocas palabras">
            <TextInput
              id="listing-title"
              name="title"
              value={title}
              onChange={(event) => onTitleChange(event.target.value)}
              maxLength={MAX_TITLE_LENGTH}
              placeholder="Bicicleta de montaña en excelente estado"
              required
            />
          </Field>
          <CharCounter current={title.length} max={MAX_TITLE_LENGTH} />
        </div>

        <Field label="Ciudad o vecindario" htmlFor="listing-neighborhood" required>
          <TextInput
            id="listing-neighborhood"
            name="neighborhood"
            icon={MapPin}
            placeholder="Ej: Roswell, NM"
            required
          />
        </Field>

        <Field label="Código postal" htmlFor="listing-postal-code">
          <TextInput id="listing-postal-code" name="postalCode" placeholder="Ej: 88207" />
        </Field>
      </div>

      <div className="space-y-1">
        <Field label="Descripción" htmlFor="listing-description" required hint="Cuanto más detalle, mejor">
          <TextArea
            id="listing-description"
            name="description"
            value={description}
            onChange={(event) => onDescriptionChange(event.target.value)}
            maxLength={MAX_DESCRIPTION_LENGTH}
            rows={5}
            placeholder="Describe tu artículo, servicio o evento. Incluye detalles importantes como condición, características, etc."
            required
          />
        </Field>
        <CharCounter current={description.length} max={MAX_DESCRIPTION_LENGTH} />
      </div>
    </FormSection>
  )
}
