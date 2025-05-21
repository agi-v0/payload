import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import type { Theme } from './Theme/types'

export const Providers: React.FC<{
  children: React.ReactNode
  initialTheme?: Theme
}> = ({ children, initialTheme }) => {
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <HeaderThemeProvider>{children}</HeaderThemeProvider>
    </ThemeProvider>
  )
}
