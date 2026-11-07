import { useState } from 'react'
import RemoteImage from '../RemoteImage'

export default function ProductGallery({ images, title }) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="space-y-4">
      <RemoteImage
        key={images[selected]}
        src={images[selected]}
        alt={title}
        className="aspect-[8/5] w-full bg-chip object-cover"
      />

      <ul className="flex flex-wrap gap-5">
        {images.map((image, index) => {
          const isSelected = index === selected

          return (
            <li key={image}>
              <button
                type="button"
                aria-label={`Ver imagen ${index + 1}`}
                aria-pressed={isSelected}
                onClick={() => setSelected(index)}
                className={`block overflow-hidden transition ${
                  isSelected ? 'ring-2 ring-brand' : 'opacity-90 hover:opacity-100'
                }`}
              >
                <RemoteImage src={image} className="size-[68px] bg-chip object-cover" />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
