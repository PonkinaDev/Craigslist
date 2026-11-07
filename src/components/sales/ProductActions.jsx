import { EyeOff, Flag, Reply, Share } from 'lucide-react'
import { Link } from 'react-router-dom'

const actionClasses =
  'flex items-center gap-1.5 rounded-md border border-brand bg-bar-soft px-3 py-1.5 text-xs text-brand transition hover:brightness-95'

const secondaryActions = [
  { label: 'Esconder', icon: EyeOff },
  { label: 'Marcar', icon: Flag },
  { label: 'Compartir', icon: Share },
]

function Divider() {
  return <span aria-hidden="true" className="h-6 w-px bg-ink/50" />
}

export default function ProductActions() {
  return (
    <div className="space-y-1">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className={actionClasses}>
            Responder
          </button>
          <Divider />
          {secondaryActions.map(({ label, icon: Icon }) => (
            <button key={label} type="button" className={actionClasses}>
              <Icon className="size-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button type="button" onClick={() => window.print()} className={actionClasses}>
            Imprimir
          </button>
          <Divider />
          <Link to="/en-venta" className={actionClasses}>
            <Reply className="size-4" />
            Regresar
          </Link>
        </div>
      </div>

      <p className="text-center text-xs text-ink">Publicado: hoy</p>
      <hr className="border-ink/50" />
    </div>
  )
}
