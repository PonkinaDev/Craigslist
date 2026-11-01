import cover from '../assets/card-cover.svg'

export default function CategoryCard({ label }) {
  return (
    <button
      type="button"
      className="group block w-full overflow-hidden rounded-lg text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <img src={cover} alt="" className="h-28 w-full object-cover sm:h-32" draggable="false" />
      <span className="block bg-card-label px-2 py-2 text-center text-sm text-ink">{label}</span>
    </button>
  )
}
