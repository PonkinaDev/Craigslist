import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { helpLinks } from '../data/categories'
import useDismiss from '../hooks/useDismiss'
import PeaceIcon from './PeaceIcon'

export default function HelpMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  useDismiss(containerRef, () => setIsOpen(false), isOpen)

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex w-full items-center justify-between rounded-md bg-field px-2.5 py-1.5 text-xs text-ink shadow-sm"
      >
        Ayuda/Q&amp;A
        <ChevronDown className={`size-4 transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute inset-x-0 top-full z-20 mt-1 rounded-lg bg-field px-3 pb-3 pt-1 shadow-lg"
        >
          <ul>
            {helpLinks.map((label) => (
              <li key={label} className="border-b border-line last:border-b-0">
                <a href="#" role="menuitem" className="block py-3 text-xs text-ink hover:text-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <PeaceIcon className="ml-auto mt-2 size-6 text-brand" />
        </div>
      )}
    </div>
  )
}
