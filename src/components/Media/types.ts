import type { StaticImageData } from 'next/image'
import type { ElementType, Ref } from 'react'

import type { Media as MediaType } from '@/payload-types'
import type { AppIcon as AppIconType } from '@/payload-types'

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
  resource?: MediaType | AppIconType | string | number // for Payload media
  size?: string // for NextImage only
  src?: StaticImageData // for static media
  videoClassName?: string
  blurhash?: string
}
