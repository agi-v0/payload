import type { StaticImageData } from 'next/image'
import type { ElementType, Ref } from 'react'

import type { Media as MediaType } from '@/payload-types'
// import type { AppIcon as AppIconType } from '@/payload-types'

export interface Props {
  alt?: string
  className?: React.HTMLAttributes<HTMLDivElement>['className']
  fill?: boolean // for NextImage only
  htmlElement?: ElementType | null
  imgClassName?: React.HTMLAttributes<HTMLImageElement>['className']
  onClick?: () => void
  onLoad?: () => void
  loading?: 'lazy' | 'eager' // for NextImage only
  priority?: boolean // for NextImage only
  ref?: Ref<HTMLImageElement | HTMLVideoElement | null>
  size?: string // for NextImage only
  src?: StaticImageData | string // for static media
  videoClassName?: string
  resource?: MediaType | string | number // for Payload media
  light?: MediaType | string | number // for Payload media
  dark?: MediaType | string | number // for Payload media
}
