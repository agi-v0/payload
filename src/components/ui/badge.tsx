import * as React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities/ui'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'
import { Solution, Integration } from '@/payload-types'

const badgeVariants = cva(
  'focus:ring-ring inline-flex max-w-max items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none',
  {
    variants: {
      color: {
        blue: 'bg-sky-100 text-sky-500 disabled:bg-sky-50 disabled:text-sky-500/70 dark:bg-sky-500/20',
        red: 'bg-red-100 text-red-600 disabled:bg-red-50 disabled:text-red-500/70 dark:bg-red-900',
        green: 'bg-green-100 text-green-600 disabled:bg-green-50 disabled:text-green-500/70',
        yellow: 'bg-yellow-100 text-yellow-600 disabled:bg-yellow-50 disabled:text-yellow-500/70',
      },
    },
    defaultVariants: {
      color: 'blue',
    },
  },
)

export interface BadgeProps {
  type?: ('label' | 'reference') | null
  label?: string | null
  color?: ('blue' | 'red' | 'green' | 'yellow') | null
  reference?:
    | ({
        relationTo: 'solutions'
        value: number | Solution
      } | null)
    | ({
        relationTo: 'integrations'
        value: number | Integration
      } | null)
  icon?: string | null
  icon_position?: ('flex-row' | 'flex-row-reverse') | null
  className?: string | null
}

function Badge({ className, icon, icon_position, label, color, ...props }: BadgeProps) {
  const iconName = icon ? (icon as keyof typeof dynamicIconImports) : undefined

  return (
    <div className={cn(badgeVariants({ color }), icon_position, className)} {...props}>
      <p>{label}</p>
      {iconName && <DynamicIcon name={iconName} color="currentColor" size={16} />}
    </div>
  )
}

export { Badge, badgeVariants }
