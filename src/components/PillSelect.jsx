import { ChevronDown } from 'lucide-react'

export default function PillSelect({ label, options, ...props }) {
  return (
    <div className="relative">
      <select
        aria-label={label}
        className="appearance-none rounded-md border border-brand bg-bar-soft py-1.5 pl-3 pr-9 text-xs text-brand outline-none focus:ring-1 focus:ring-brand"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-brand" />
    </div>
  )
}
