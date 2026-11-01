import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

const readStoredTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'dark'
  } catch (error) {
    return false
  }
}

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(readStoredTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light')
    } catch (error) {
      return
    }
  }, [isDark])

  const toggle = useCallback(() => setIsDark((current) => !current), [])

  return [isDark, toggle]
}
