import { CircleCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PublishSuccess() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-20 text-center">
      <CircleCheck className="size-14 text-brand" />
      <h1 className="text-2xl font-bold">Tu anuncio fue enviado</h1>
      <p className="text-sm text-ink-soft">Gracias por publicar. Ya puedes volver al inicio.</p>
      <Link
        to="/"
        className="rounded-md bg-brand px-8 py-2 text-sm font-medium text-page transition hover:brightness-110"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
