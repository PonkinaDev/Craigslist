import { CircleHelp } from 'lucide-react'

export default function HelpHint({ text }) {
  return (
    <span title={text} className="inline-flex text-ink-soft">
      <CircleHelp className="size-4" aria-label={text} />
    </span>
  )
}
