'use client'

import React, { createContext, use, useCallback, useContext, useEffect, useState } from 'react'

import type { Theme, ThemeContextType } from './types'

import canUseDOM from '@/utilities/canUseDOM'
import { defaultTheme, getImplicitPreference, themeLocalStorageKey } from './shared'
import { themeIsValid } from './types'

const initialContext: ThemeContextType = {
  setTheme: () => null,
  theme: undefined,
}

const ThemeContext = createContext(initialContext)

export const ThemeProvider = ({
  children,
  initialTheme,
}: {
  children: React.ReactNode
  initialTheme?: Theme
}) => {
  const [theme, setThemeState] = useState<Theme | undefined>(
    canUseDOM ? (document.documentElement.getAttribute('data-theme') as Theme) : initialTheme,
  )

  const setTheme = useCallback((themeToSet: Theme | null) => {
    if (themeToSet === null) {
      window.localStorage.removeItem(themeLocalStorageKey)
      const implicitPreference = getImplicitPreference()
      const newAppliedTheme = implicitPreference || defaultTheme
      document.documentElement.setAttribute('data-theme', newAppliedTheme)
      setThemeState(newAppliedTheme)
      document.cookie = `theme=${newAppliedTheme}; path=/; max-age=31536000`
    } else {
      setThemeState(themeToSet)
      window.localStorage.setItem(themeLocalStorageKey, themeToSet)
      document.cookie = `theme=${themeToSet}; path=/; max-age=31536000`
      document.documentElement.setAttribute('data-theme', themeToSet)
    }
  }, [])

  useEffect(() => {
    /* set theme on client */
    if (!canUseDOM) {
      return
    }

    let themeToSet: Theme = defaultTheme
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    const cookieTheme = document.cookie
      .split('; ')
      .find((row) => row.startsWith('theme='))
      ?.split('=')[1]

    if (themeIsValid(preference)) {
      themeToSet = preference
    } else if (cookieTheme && themeIsValid(cookieTheme)) {
      themeToSet = cookieTheme as Theme
      window.localStorage.setItem(themeLocalStorageKey, themeToSet)
    } else {
      const implicitPreference = getImplicitPreference()

      if (implicitPreference) {
        themeToSet = implicitPreference
      }
    }

    document.documentElement.setAttribute('data-theme', themeToSet)
    document.cookie = `theme=${themeToSet}; path=/; max-age=31536000`
    setThemeState(themeToSet)

    /* watch system theme change */
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleSystemThemeChange = () => {
      if (!window.localStorage.getItem(themeLocalStorageKey)) {
        const newImplicitPreference = getImplicitPreference()
        const themeToSet = newImplicitPreference || defaultTheme
        document.documentElement.setAttribute('data-theme', themeToSet)
        document.cookie = `theme=; path=/; max-age=0`
        setThemeState(themeToSet)
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  return <ThemeContext.Provider value={{ setTheme, theme }}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext)
