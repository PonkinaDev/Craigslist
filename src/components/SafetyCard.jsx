import { Shield } from 'lucide-react'

export default function SafetyCard() {
  return (
    <aside className="flex flex-col items-center gap-3 bg-sidebar px-4 py-5 text-center text-sm text-ink">
      <Shield className="size-8 text-brand" />
      <p>
        Consejos de seguridad
        <br />
        Evita estafas y transacciones riesgosas.
      </p>
      <a href="#" className="text-brand hover:underline">
        Ver consejos
      </a>
    </aside>
  )
}
