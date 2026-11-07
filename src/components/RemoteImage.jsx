import { useState } from 'react'
import fallback from '../assets/card-cover.svg'

export default function RemoteImage({ src, alt = '', className }) {
  const [hasFailed, setHasFailed] = useState(false)

  return (
    <img
      src={hasFailed ? fallback : src}
      alt={alt}
      loading="lazy"
      draggable="false"
      onError={() => setHasFailed(true)}
      className={className}
    />
  )
}
