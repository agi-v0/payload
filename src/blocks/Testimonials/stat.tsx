import { ArrowDown } from 'lucide-react'

import { CaseStudy } from '@/payload-types'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/utilities/ui'

export const Stat: React.FC<{
  stat: NonNullable<CaseStudy['stats']>[number]
  index: number
  className?: string
}> = ({ stat, index, className }) => (
  <div
    key={stat.id || index}
    className={cn(
      'bg-background-neutral rounded-space-sm flex flex-col justify-center p-(length:--spacing-md)',
      className,
    )}
  >
    <span className="text-h3 text-base-primary font-medium">
      {stat.value}
      {stat.isPercentage ? '%' : ''}
    </span>
    <div className="flex items-center gap-1">
      {stat.isIncrease ? (
        <ArrowUp className="text-base-tertiary size-4 flex-none" />
      ) : (
        <ArrowDown className="text-base-tertiary size-4 flex-none" />
      )}
      <span className="text-base-tertiary text-body-sm font-normal">{stat.label}</span>
    </div>
  </div>
)
