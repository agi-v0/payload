'use client'

import { cn } from '@/utilities/ui'
import React, { useEffect, useRef } from 'react'

import type { Props as MediaProps } from '../types'

import { getClientSideURL } from '@/utilities/getURL'
import { Media } from '@/payload-types'
import { useTheme } from '@/providers/Theme'

export const VideoMedia: React.FC<MediaProps> = (props) => {
  const { onClick, resource, media, videoClassName } = props
  const { light: lightFromDesktop, dark: darkFromDesktop } = media?.desktop || {}
  const { light: lightFromMobile, dark: darkFromMobile } = media?.mobile || {}

  const videoRef = useRef<HTMLVideoElement>(null)
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef
    if (video) {
      video.addEventListener('suspend', () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      })
    }
  }, [])

  let src = ''
  let darkSrc = ''
  let mobileSrc = ''
  let mobileDarkSrc = ''

  if (!src && resource && typeof resource === 'object') {
    const { filename } = resource

    src = `${getClientSideURL()}/media/${filename}`
    darkSrc = `${getClientSideURL()}/media/${filename}`
  }

  if (!src && lightFromDesktop && typeof lightFromDesktop === 'object') {
    const { filename } = lightFromDesktop

    src = `${getClientSideURL()}/media/${filename}`
    darkSrc = `${getClientSideURL()}/media/${filename}`
    mobileSrc = `${getClientSideURL()}/media/${filename}`
    mobileDarkSrc = `${getClientSideURL()}/media/${filename}`
  }

  if (darkFromDesktop && typeof darkFromDesktop === 'object') {
    const { filename } = darkFromDesktop

    if (!src) src = `${getClientSideURL()}/media/${filename}`
    darkSrc = `${getClientSideURL()}/media/${filename}`
    mobileSrc = `${getClientSideURL()}/media/${filename}`
    mobileDarkSrc = `${getClientSideURL()}/media/${filename}`
  }

  if (lightFromMobile && typeof lightFromMobile === 'object') {
    const { filename } = lightFromMobile

    mobileSrc = `${getClientSideURL()}/media/${filename}`
    mobileDarkSrc = `${getClientSideURL()}/media/${filename}`
  }

  if (darkFromMobile && typeof darkFromMobile === 'object') {
    const { filename } = darkFromMobile

    mobileDarkSrc = `${getClientSideURL()}/media/${filename}`
  }

  const { theme } = useTheme()

  if (!src && !darkSrc) return null

  const isDark = theme === 'dark'

  const srcToUse = isDark && darkSrc ? darkSrc : src
  const mobileSrcToUse = isDark && mobileDarkSrc ? mobileDarkSrc : mobileSrc

  return (
    <video
      autoPlay
      className={cn('h-full w-full object-cover', videoClassName)}
      controls={false}
      loop
      muted
      onClick={onClick}
      playsInline
      ref={videoRef}
    >
      <source src={mobileSrcToUse} media="(max-width: 768px)" />
      <source src={srcToUse} />
    </video>
  )
}
