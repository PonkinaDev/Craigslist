export default function IconButton({ icon: Icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full text-ink transition hover:bg-brand/15"
    >
      <Icon className="size-5" />
    </button>
  )
}
