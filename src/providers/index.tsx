import React from 'react'

import { ThemeProvider } from './Theme'
import type { Theme } from './Theme/types'
import { HeaderIntersectionObserver } from './HeaderIntersectionObserver'
import { WindowInfoProvider } from '@faceless-ui/window-info'
import { NextIntlClientProvider, useMessages } from 'next-intl'

export const Providers: React.FC<{
  children: React.ReactNode
  initialTheme?: Theme
}> = ({ children, initialTheme }) => {
  const messages = useMessages()

  return (
    <WindowInfoProvider
      breakpoints={{
        s: '(max-width: 768px)',
        m: '(max-width: 1024px)',
        l: '(max-width: 1680px)',
        xl: '(max-width: 1920px)',
      }}
    >
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider initialTheme={initialTheme}>
          <HeaderIntersectionObserver>{children}</HeaderIntersectionObserver>
        </ThemeProvider>
      </NextIntlClientProvider>
    </WindowInfoProvider>
  )
}
