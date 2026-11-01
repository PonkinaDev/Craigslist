const controlClasses =
  'w-full rounded border border-line bg-control px-3 py-2 text-xs text-ink outline-none placeholder:text-ink-soft focus:border-brand focus:ring-1 focus:ring-brand'

export function TextInput({ icon: Icon, className = '', ...props }) {
  if (!Icon) return <input className={`${controlClasses} ${className}`} {...props} />

  return (
    <div className="relative">
      <input className={`${controlClasses} pr-9 ${className}`} {...props} />
      <Icon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-ink" />
    </div>
  )
}

export function TextArea({ className = '', ...props }) {
  return <textarea className={`${controlClasses} resize-y ${className}`} {...props} />
}

export function SelectInput({ options, className = '', ...props }) {
  return (
    <select className={`${controlClasses} ${className}`} {...props}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export function ChoiceInput({ type = 'checkbox', label, description, className = '', ...props }) {
  return (
    <label className={`flex items-start gap-2 text-xs text-ink ${className}`}>
      <input type={type} className="mt-0.5 size-4 shrink-0 accent-brand disabled:opacity-40" {...props} />
      <span>
        {label}
        {description && <span className="block text-ink-soft">{description}</span>}
      </span>
    </label>
  )
}

export function CharCounter({ current, max }) {
  return (
    <p className="text-right text-[11px] text-ink-soft">
      {current} / {max}
    </p>
  )
}
