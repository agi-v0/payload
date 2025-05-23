import { Page, Post, Solution } from '@/payload-types'

export interface BlockHeaderType {
  className?: string | null
  badgeClassName?: string | null
  richTextClassName?: string | null
  linksClassName?: string | null
  type: 'center' | 'split' | 'start'
  badge?: {
    label?: string | null
    color?: ('blue' | 'red' | 'green' | 'yellow') | null
    icon?: string | null
    icon_position?: ('flex-row' | 'flex-row-reverse') | null
  }
  headerText?: {
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
  links?:
    | {
        link: {
          type?: ('reference' | 'custom') | null
          newTab?: boolean | null
          reference?:
            | ({
                relationTo: 'pages'
                value: number | Page
              } | null)
            | ({
                relationTo: 'posts'
                value: number | Post
              } | null)
            | ({
                relationTo: 'solutions'
                value: number | Solution
              } | null)
          url?: string | null
          label: string

          color?: ('brand' | 'neutral') | null

          variant?: ('primary' | 'secondary' | 'tertiary' | 'ghost' | 'link') | null
        }
        id?: string | null
      }[]
    | null
}
