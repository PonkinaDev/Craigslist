import { Moon, Sun } from 'lucide-react'
import IconButton from './IconButton'

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <IconButton
      icon={isDark ? Moon : Sun}
      label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      onClick={onToggle}
    />
  )
}
