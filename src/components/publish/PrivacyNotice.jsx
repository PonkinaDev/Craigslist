import { Lock } from 'lucide-react'

export default function PrivacyNotice() {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-chip px-5 py-4 text-xs text-ink">
      <Lock className="size-4 shrink-0" />
      <p>Tu ubicación exacta no se mostrará públicamente. Solo los usuarios que te contacten podrán verla.</p>
    </div>
  )
}
