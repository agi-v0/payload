import type { Theme } from '@/providers/Theme/types'

import { useHeaderObserver } from '@/providers/HeaderIntersectionObserver/index'
import * as React from 'react'

import classes from './index.module.scss'

type ThemeHeaderProps = {
  children?: React.ReactNode
  theme: Theme
  restoreThemeOnExit?: boolean
}
export const ChangeHeaderTheme: React.FC<ThemeHeaderProps> = ({
  children,
  theme,
  restoreThemeOnExit = false,
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null)
  const { addObservable, debug } = useHeaderObserver()

  React.useEffect(() => {
    const contentElement = contentRef?.current

    console.log('🎯 ChangeHeaderTheme trying to register:', {
      element: contentElement,
      theme,
      contentElementId: contentElement?.id,
      hasElement: !!contentElement,
      restoreThemeOnExit,
    })

    if (contentElement) {
      // Set the theme and restoration behavior on the content element
      contentElement.setAttribute('data-theme', theme)
      if (restoreThemeOnExit) {
        contentElement.setAttribute('data-restore-theme', 'true')
      }
      addObservable(contentElement, true)
    }
  }, [addObservable, theme, restoreThemeOnExit])

  return (
    <div
      className={[classes.headerObserver, debug && classes.debug].filter(Boolean).join(' ')}
      ref={contentRef}
      id={`header-observer-${theme}-${Math.random().toString(36).substr(2, 9)}`}
    >
      {children}
    </div>
  )
}
