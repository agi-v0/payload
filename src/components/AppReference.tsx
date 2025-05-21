import React from 'react'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import { Solution, Integration } from '@/payload-types'
import { cn } from '@/utilities/ui'

interface AppReferenceProps {
  appReference:
    | ({
        relationTo: 'solutions'
        value: number | Solution
      } | null)
    | ({
        relationTo: 'integrations'
        value: number | Integration
      } | null)
  className?: string
}

export const AppReference: React.FC<AppReferenceProps> = ({ appReference, className }) => {
  if (!appReference) return null
  // Check if appReference.value is an object
  if (typeof appReference.value !== 'object') return null

  return (
    <div
      className={cn('group flex flex-row items-center justify-between gap-4 lg:gap-0', className)}
    >
      <div className="flex items-center gap-4">
        {appReference.value.icon && (
          <Media
            resource={appReference.value.icon}
            className="size-15 shrink-0"
            imgClassName="w-full h-full rounded-xl aspect-square"
          />
        )}
        <div>
          {appReference.value.name && (
            <p className="text-body-md text-base-primary font-medium">{appReference.value.name}</p>
          )}
          {appReference.value.tagline && (
            <p className="text-base-secondary text-sm">{appReference.value.tagline}</p>
          )}
        </div>
      </div>

      {appReference.value.link && (
        <CMSLink
          label="المزيد"
          url={appReference.value.link.url}
          size="sm"
          variant="tertiary"
          color="neutral"
        />
      )}
    </div>
  )
}
