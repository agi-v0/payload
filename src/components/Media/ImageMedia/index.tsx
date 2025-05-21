'use client'

import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import NextImage from 'next/image'
import { useTheme } from '@/providers/Theme'
import React from 'react'

import type { Props as MediaProps } from '../types'

import { cssVariables } from '@/cssVariables'
import { getClientSideURL } from '@/utilities/getURL'

const { breakpoints } = cssVariables

// A base64 encoded image to use as a placeholder while the image is loading
const placeholderBlur =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nGO4dfsuTRHDqAW3Ry24O2rBrUFlwYWLl4+fOI2MqGnBk6fP581frKCkoq6po66po6CkYufgdOHiZWpa0N07gZGVU1BYTFBYjJGVU1NLl2oWXLh4+d27D3mFxYLCYpJSspJSsoLCYiZmllQIoidPn0PQli3b1TV1hITF4Ra4eXg9efqcUguWrVjZ2taRlJyupKwGd76klCwzO29JaQWlFly4eFlH3xgS7nCj4Wj33v1UsMDQ1AzTdEZWzozMHIKmk2kBIyunm4cXwfRDtAVGptz8wpCkCbEpKTn94sWrRCY/wha4uXsqKKmYmFm4uXuWlFZs2bqTmJAhIRVdABcPFy5ehqfXoVzY3Rq14PaoBbdGLbhNsgUAf0Sx5YDnbO4AAAAASUVORK5CYII='

export const ImageMedia: React.FC<MediaProps> = (props) => {
  const {
    fill,
    imgClassName,
    priority,
    resource,
    light,
    dark,
    alt: altFromProps,
    size: sizeFromProps,
    src: srcFromProps,
    loading: loadingFromProps,
  } = props
  const { theme } = useTheme()

  let width: number | undefined
  let height: number | undefined
  let alt = altFromProps
  let src: StaticImageData | string = srcFromProps || ''
  let darkSrc: string = ''
  let blurhash: string = placeholderBlur

  if (!src && resource && typeof resource === 'object') {
    const {
      alt: altFromResource,
      filename: fullFilename,
      height: fullHeight,
      url,
      width: fullWidth,
      blurhash: blurhashFromResource,
    } = resource

    width = fullWidth!
    height = fullHeight!
    alt = altFromResource || ''
    blurhash = blurhashFromResource || placeholderBlur
    src = `${getClientSideURL()}${url}`
    darkSrc = `${getClientSideURL()}${url}`
  }

  if (!src && light && typeof light === 'object') {
    const {
      alt: altFromLight,
      filename: fullFilename,
      height: fullHeight,
      url,
      width: fullWidth,
      blurhash: blurhashFromLight,
    } = light

    width = fullWidth!
    height = fullHeight!
    alt = altFromLight || ''
    blurhash = blurhashFromLight || placeholderBlur
    src = `${getClientSideURL()}${url}`
    darkSrc = `${getClientSideURL()}${url}`
  }

  if (dark && typeof dark === 'object') {
    const {
      alt: altFromDark,
      filename: fullFilename,
      height: fullHeight,
      url,
      width: fullWidth,
      blurhash: blurhashFromDark,
    } = dark

    width = fullWidth!
    height = fullHeight!
    alt = altFromDark || ''
    blurhash = blurhashFromDark || placeholderBlur
    darkSrc = `${getClientSideURL()}${url}`
  }

  const loading = loadingFromProps || (!priority ? 'lazy' : undefined)

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = sizeFromProps
    ? sizeFromProps
    : Object.entries(breakpoints)
        .map(([, value]) => `(max-width: ${value}px) ${value * 2}w`)
        .join(', ')
  if (!src && !darkSrc) return null

  const isDark = theme === 'dark'
  const srcToUse = isDark && darkSrc ? darkSrc : src
  return (
    <picture>
      <NextImage
        alt={alt || altFromProps || ''}
        className={cn(imgClassName)}
        fill={fill}
        height={!fill ? height : undefined}
        placeholder={blurhash || placeholderBlur ? 'blur' : 'empty'}
        blurDataURL={blurhash || placeholderBlur}
        priority={priority}
        quality={100}
        loading={loading}
        sizes={sizes}
        src={srcToUse}
        width={!fill ? width : undefined}
      />
    </picture>
  )
}
