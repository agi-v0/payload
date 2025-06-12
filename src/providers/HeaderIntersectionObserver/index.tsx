'use client'

import type { Theme } from '@/providers/Theme/types'

import { useWindowInfo } from '@faceless-ui/window-info'
import { useTheme } from '@/providers/Theme/index'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import classes from './index.module.scss'

type ContextT = {
  addObservable: (el: HTMLElement, isAttached: boolean) => void
  debug?: boolean
  headerTheme?: null | Theme
  setHeaderTheme: (theme?: null | Theme) => void
}
const Context = React.createContext<ContextT>({
  addObservable: () => {},
  debug: false,
  headerTheme: null,
  setHeaderTheme: () => {},
})
export const useHeaderObserver = (): ContextT => React.use(Context)

type HeaderIntersectionObserverProps = {
  children: React.ReactNode
  debug?: boolean
}
export const HeaderIntersectionObserver: React.FC<HeaderIntersectionObserverProps> = ({
  children,
  debug = false,
}) => {
  const { height: windowHeight, width: windowWidth } = useWindowInfo()
  const { theme } = useTheme()
  const [headerTheme, setHeaderTheme] = React.useState<null | Theme | undefined>(theme)
  const [observer, setObserver] = React.useState<IntersectionObserver | undefined>(undefined)
  const pathname = usePathname()

  const addObservable = React.useCallback(
    (el: HTMLElement, isAttached: boolean) => {
      if (observer && isAttached) {
        observer.observe(el)
      } else {
        observer?.unobserve(el)
      }
    },
    [observer],
  )

  // Use a ref so the observer sees the latest theme without re-instantiation
  const headerThemeRef = React.useRef(headerTheme)
  React.useEffect(() => {
    headerThemeRef.current = headerTheme
  }, [headerTheme])

  React.useEffect(() => {
    if (!windowHeight) return

    const cssHeaderHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--header-height'),
      10,
    )
    if (!cssHeaderHeight) return

    const halfHeaderHeight = windowHeight - Math.ceil(cssHeaderHeight / 2)

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elTheme = entry.target.getAttribute('data-theme') as Theme | null
          const restoreOnExit = entry.target.getAttribute('data-restore-theme') === 'true'

          if (entry.isIntersecting && elTheme && elTheme !== headerThemeRef.current) {
            setHeaderTheme(elTheme) // section override
          } else if (!entry.isIntersecting && restoreOnExit) {
            setHeaderTheme(theme) // fall back to global theme
          }
        })
      },
      {
        rootMargin: `0px 0px -${halfHeaderHeight}px 0px`,
        threshold: 0,
      },
    )

    setObserver(obs)
  }, [windowWidth, windowHeight, theme])

  React.useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]')
    if (!meta) return

    meta.setAttribute('content', headerTheme === 'dark' ? '#000000' : '#fafafa')
  }, [headerTheme])

  React.useEffect(() => {
    setHeaderTheme(theme)
  }, [theme])

  React.useEffect(() => {
    setHeaderTheme(theme)
  }, [pathname])

  return (
    <Context
      value={{
        addObservable,
        debug,
        headerTheme,
        setHeaderTheme,
      }}
    >
      <>
        {debug && <div className={classes.intersectionObserverDebugger} />}
        {children}
      </>
    </Context>
  )
}
