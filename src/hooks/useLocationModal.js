import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

export default function useLocationModal() {
  const { location, setLocation } = useOutletContext()
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const confirm = (value) => {
    setLocation(value)
    setIsOpen(false)
  }

  return { location, isOpen, open, close, confirm }
}
