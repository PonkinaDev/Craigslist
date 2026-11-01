import { Mail } from 'lucide-react'
import { emailOptions } from '../../data/listingForm'
import { Field, FieldGroup } from '../form/Field'
import { ChoiceInput, TextInput } from '../form/FormControls'
import FormSection from '../form/FormSection'

export default function ContactSection() {
  return (
    <FormSection step={3} title="Información de contacto">
      <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
        <div className="space-y-5">
          <Field label="Correo electronico" htmlFor="listing-email" required>
            <TextInput
              id="listing-email"
              name="email"
              type="email"
              icon={Mail}
              placeholder="tu@email.com"
              required
            />
          </Field>

          <FieldGroup label="Opciones de correo" hint="Elige cómo recibirás las respuestas">
            {emailOptions.map(({ value, label, description }, index) => (
              <ChoiceInput
                key={value}
                type="radio"
                name="emailOption"
                value={value}
                label={label}
                description={description}
                defaultChecked={index === 0}
              />
            ))}
          </FieldGroup>
        </div>

        <div className="space-y-5">
          <FieldGroup label="Teléfono / Texto">
            <ChoiceInput name="showPhone" label="Mostrar mi número de teléfono" />
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <ChoiceInput name="callsOk" label="Llamadas OK" />
              <ChoiceInput name="textsOk" label="Mensajes de texto OK" />
            </div>
          </FieldGroup>

          <div className="grid grid-cols-[1fr_9rem] gap-4">
            <Field label="Número de teléfono" htmlFor="listing-phone">
              <TextInput id="listing-phone" name="phone" type="tel" placeholder="Ej: 575-555-1234" />
            </Field>
            <Field label="Extensión (Opcional)" htmlFor="listing-extension">
              <TextInput id="listing-extension" name="extension" />
            </Field>
          </div>

          <Field label="Nombre de contacto (Opcional)" htmlFor="listing-contact-name">
            <TextInput id="listing-contact-name" name="contactName" placeholder="Ej: Juan Pérez" />
          </Field>
        </div>
      </div>
    </FormSection>
  )
}
