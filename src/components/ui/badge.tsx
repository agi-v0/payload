import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities/ui'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'
import type { LucideIcon } from 'lucide-react'

const badgeVariants = cva(
  'focus:ring-ring inline-flex max-w-max items-center gap-1 rounded-md px-1.5 py-1 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none',
  {
    variants: {
      variant: {
        blue: 'bg-blue-100 text-blue-600 disabled:bg-blue-50 disabled:text-blue-500/70',
        red: 'bg-red-100 text-red-600 disabled:bg-red-50 disabled:text-red-500/70',
        green: 'bg-green-100 text-green-600 disabled:bg-green-50 disabled:text-green-500/70',
        yellow: 'bg-yellow-100 text-yellow-600 disabled:bg-yellow-50 disabled:text-yellow-500/70',
      },
    },
    defaultVariants: {
      variant: 'blue',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  icon,
  icon_position,
  label,
  ...props
}: BadgeProps & {
  icon?: string | null
  icon_position?: string | null
  label?: string | null
}) {
  const iconName = icon ? (icon as keyof typeof dynamicIconImports) : undefined

  return (
    <div className={cn(badgeVariants({ variant }), icon_position, className)} {...props}>
      <p>{label}</p>
      {iconName && <DynamicIcon name={iconName} color="currentColor" size={16} />}
    </div>
  )
}

export { Badge, badgeVariants }
