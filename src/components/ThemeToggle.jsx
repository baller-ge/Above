import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { useTheme } from '@/contexts/ThemeContext.jsx'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative border-2 border-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] text-pink-600 transition-all duration-300 ${
        theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
      }`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] text-pink-600 transition-all duration-300 ${
        theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
      }`} />
    </Button>
  )
}

