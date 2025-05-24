'use client'

import React, { useEffect, useRef } from 'react'
import { getClientSideURL } from '@/utilities/getURL'
import { cn } from '@/utilities/ui'
import { useTheme } from '@/providers/Theme'
import type { Props as MediaProps } from '../types'
import { getMediaUrl } from '@/utilities/getMediaURL'

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
    const { filename, url, updatedAt } = resource

    const cacheTag = updatedAt

    src = getMediaUrl(url, cacheTag)

    src = getMediaUrl(`/media/${filename}`, cacheTag)
    darkSrc = getMediaUrl(`/media/${filename}`, cacheTag)
  }

  if (!src && lightFromDesktop && typeof lightFromDesktop === 'object') {
    const { filename, url, updatedAt } = lightFromDesktop

    const cacheTag = updatedAt

    src = getMediaUrl(`/media/${filename}`, cacheTag)
    darkSrc = getMediaUrl(`/media/${filename}`, cacheTag)
    src = getMediaUrl(`/media/${filename}`, cacheTag)
    darkSrc = getMediaUrl(`/media/${filename}`, cacheTag)
  }

  if (darkFromDesktop && typeof darkFromDesktop === 'object') {
    const { filename, url, updatedAt } = darkFromDesktop
    const cacheTag = updatedAt

    if (!src) src = getMediaUrl(`/media/${filename}`, cacheTag)
    darkSrc = getMediaUrl(`/media/${filename}`, cacheTag)
    mobileSrc = getMediaUrl(`/media/${filename}`, cacheTag)
    mobileDarkSrc = getMediaUrl(`/media/${filename}`, cacheTag)
  }

  if (lightFromMobile && typeof lightFromMobile === 'object') {
    const { filename, url, updatedAt } = lightFromMobile
    const cacheTag = updatedAt

    mobileSrc = getMediaUrl(`/media/${filename}`, cacheTag)
    mobileDarkSrc = getMediaUrl(`/media/${filename}`, cacheTag)
  }

  if (darkFromMobile && typeof darkFromMobile === 'object') {
    const { filename, url, updatedAt } = darkFromMobile
    const cacheTag = updatedAt

    mobileDarkSrc = getMediaUrl(`/media/${filename}`, cacheTag)
  }

  const { theme } = useTheme()

  const isDark = theme === 'dark'

  const srcToUse = isDark && darkSrc ? darkSrc : src
  const mobileSrcToUse = isDark && mobileDarkSrc ? mobileDarkSrc : mobileSrc

  if (!srcToUse && !mobileSrcToUse) return null

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
      <source src={srcToUse} />
      <source src={mobileSrcToUse} media="(max-width: 768px)" />
    </video>
  )
}
