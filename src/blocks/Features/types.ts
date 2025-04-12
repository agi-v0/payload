import type { Block } from 'payload'
import type { BlockHeaderType } from '@/types/blockHeader'
import type { Media } from '@/payload-types'

// Feature item inside a column
export interface FeatureItem {
  icon?: string
  content: {
    root: {
      type: string
      children: {
        type: string
        version: number
        [k: string]: unknown
      }[]
      direction: ('ltr' | 'rtl') | null
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
      indent: number
      version: number
    }
    [k: string]: unknown
  }
}

// Column in the features block
export interface FeatureColumn {
  title: string
  size?: 'oneThird' | 'half' | 'twoThirds' | 'full'
  icon?: string | null
  content?: {
    root: {
      type: string
      children: {
        type: string
        version: number
        [k: string]: unknown
      }[]
      direction: ('ltr' | 'rtl') | null
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
      indent: number
      version: number
    }
    [k: string]: unknown
  } | null
  image?: number | Media | null
  appReference?: number | Media | null
  showBadge?: boolean
  badgeConfig?: BadgeConfig
  showFeatureList?: boolean
  features?: FeatureItem[]
  enableCta?: boolean
  link?: {
    type?: ('reference' | 'custom') | null
    newTab?: boolean | null
    reference?:
      | {
          relationTo: 'pages'
          value: number
        }
      | {
          relationTo: 'posts'
          value: number
        }
    url?: string | null
    label: string
    color?: ('brand' | 'neutral') | null
    variant?: ('primary' | 'secondary' | 'tertiary' | 'ghost' | 'link') | null
  }
  id?: string
}

// Badge configuration
export interface BadgeConfig {
  badge?: {
    label?: string | null
    color?: ('blue' | 'red' | 'green' | 'yellow') | null
    icon?: string | null
    icon_dir?: ('flex-row' | 'flex-row-reverse') | null
  }
}

// Main Features block interface
export interface FeaturesBlock {
  blockType: 'features'
  blockName?: string
  blockHeader?: BlockHeaderType
  layout:
    | 'grid'
    | 'cards'
    | 'list'
    | 'timeline'
    | 'carousel'
    | 'compact'
    | 'iconGrid'
    | 'table'
    | 'horizontal'
    | 'masonry'
    | 'tabs'
    | 'accordion'
  showBadge?: boolean
  badgeConfig?: BadgeConfig
  columns?: FeatureColumn[]
  id?: string
}
