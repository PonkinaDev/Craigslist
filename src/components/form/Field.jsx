import HelpHint from './HelpHint'

function LabelContent({ label, required, hint }) {
  return (
    <>
      {label}
      {required && (
        <span className="text-required" aria-hidden="true">
          *
        </span>
      )}
      {hint && <HelpHint text={hint} />}
    </>
  )
}

export function Field({ label, htmlFor, required = false, hint, className = '', children }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={htmlFor} className="flex items-center gap-1.5 text-xs text-ink">
        <LabelContent label={label} required={required} hint={hint} />
      </label>
      {children}
    </div>
  )
}

export function FieldGroup({ label, required = false, hint, className = '', children }) {
  return (
    <fieldset className={`flex flex-col gap-2 ${className}`}>
      <legend className="mb-2 flex items-center gap-1.5 text-xs text-ink">
        <LabelContent label={label} required={required} hint={hint} />
      </legend>
      {children}
    </fieldset>
  )
}
