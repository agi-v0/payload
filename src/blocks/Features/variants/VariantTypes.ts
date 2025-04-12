import { FeatureColumn, BadgeConfig } from '../types'

export interface VariantProps {
  columns: FeatureColumn[]
  showBadge?: boolean
  badgeConfig?: BadgeConfig
}

export const colsSpanClasses = {
  full: 'col-span-12',
  half: 'col-span-6',
  oneThird: 'col-span-4',
  twoThirds: 'col-span-8',
}
