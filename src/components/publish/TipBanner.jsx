import { ChevronRight, Lightbulb } from 'lucide-react'

export default function TipBanner() {
  return (
    <aside className="space-y-1 rounded-lg bg-chip px-5 py-3 text-xs text-ink">
      <p className="flex items-center gap-2">
        <Lightbulb className="size-4" />
        Consejo
      </p>
      <div className="flex flex-wrap items-center justify-between gap-2 pl-6">
        <p>Un buen título y una descripción detallada ayuda a que tu anuncio tenga más respuestas.</p>
        <a href="#" className="flex items-center gap-1 hover:text-brand">
          Ver consejos de seguridad
          <ChevronRight className="size-4" />
        </a>
      </div>
    </aside>
  )
}
