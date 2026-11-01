import { NavLink } from 'react-router-dom'

const baseClasses = 'grid size-9 place-items-center rounded-full text-ink transition hover:bg-brand/15'

export default function IconButton({ icon: Icon, label, onClick, to }) {
  if (to) {
    return (
      <NavLink
        to={to}
        end
        aria-label={label}
        title={label}
        className={({ isActive }) => `${baseClasses} ${isActive ? 'bg-brand/15' : ''}`}
      >
        <Icon className="size-5" />
      </NavLink>
    )
  }

  return (
    <button type="button" onClick={onClick} aria-label={label} title={label} className={baseClasses}>
      <Icon className="size-5" />
    </button>
  )
}
