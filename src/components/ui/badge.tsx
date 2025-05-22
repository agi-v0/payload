import * as React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities/ui'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'
import { Solution, Integration, Media as MediaType } from '@/payload-types'
import { Media } from '../Media'

const badgeVariants = cva(
  'focus:ring-ring inline-flex max-w-max items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium transition-colors select-none focus:ring-2 focus:ring-offset-2 focus:outline-none',
  {
    variants: {
      color: {
        blue: 'text-marn-500 dark:text-marn-400 bg-blue-100 disabled:bg-blue-50 disabled:text-blue-500/70 dark:bg-blue-950',
        red: 'bg-tomato-100 text-tomato-600 disabled:bg-tomato-50 disabled:text-tomato-500/70 dark:bg-tomato-950',
        green:
          'bg-lime-200 text-lime-600 disabled:bg-lime-50 disabled:text-lime-500/70 dark:bg-lime-950',
        yellow:
          'bg-yellow-100 text-yellow-600 disabled:bg-yellow-50 disabled:text-yellow-500/70 dark:bg-yellow-950',
        gray: 'bg-neutral-100 text-neutral-600 disabled:bg-neutral-50 disabled:text-neutral-500/70 dark:bg-neutral-700 dark:text-neutral-400',
        inverted: 'bg-background-inverted text-inverted-secondary',
      },
      size: {
        sm: 'text-sm',
        md: 'text-(length:--text-body-md)',
        lg: 'text-(length:--text-body-lg)',
      },
    },
    defaultVariants: {
      color: 'blue',
      size: 'sm',
    },
  },
)

export interface BadgeProps {
  type?: ('label' | 'reference') | null
  label?: string | null
  color?: ('blue' | 'red' | 'green' | 'yellow' | 'gray' | 'inverted') | null
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
  size?: 'sm' | 'md' | 'lg' | null
}

function Badge({
  type,
  className,
  icon,
  icon_position,
  label,
  reference,
  color,
  size,
  ...props
}: BadgeProps) {
  const iconName = icon ? (icon as keyof typeof dynamicIconImports) : undefined
  const referenceValue = reference?.value as Solution | Integration

  if (type === 'label') {
    return (
      <div className={cn(badgeVariants({ color }), icon_position, className)} {...props}>
        {iconName && <DynamicIcon name={iconName} color="currentColor" size={16} />}
        <p>{label}</p>
      </div>
    )
  }

  return (
    <div
      className={cn(
        badgeVariants({ size }),
        'gap-2 rounded-none bg-transparent p-0 text-(color:--color-base-tertiary)',
        className,
      )}
      {...props}
    >
      <Media
        className={cn(
          'overflow-hidden rounded-lg',
          size === 'sm' && 'size-6',
          size === 'md' && 'size-8',
          size === 'lg' && 'size-10',
        )}
        resource={referenceValue?.icon as MediaType}
        priority
      />
      <p className="">{referenceValue?.name}</p>
    </div>
  )
}

export { Badge, badgeVariants }
