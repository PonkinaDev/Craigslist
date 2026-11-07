const actionClasses = 'flex-1 rounded bg-control px-3 py-1.5 text-xs text-ink transition hover:brightness-95'

export default function FilterActions() {
  return (
    <div className="flex gap-3">
      <button type="reset" className={actionClasses}>
        Resetear
      </button>
      <button type="submit" className={actionClasses}>
        Aplicar
      </button>
    </div>
  )
}
