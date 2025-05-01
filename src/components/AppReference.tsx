import React from 'react'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import { Solution, App } from '@/payload-types'
import { cn } from '@/utilities/ui'

interface AppReferenceProps {
  appReference:
    | ({
        relationTo: 'solutions'
        value: number | Solution
      } | null)
    | ({
        relationTo: 'apps'
        value: number | App
      } | null)
  className?: string
}

export const AppReference: React.FC<AppReferenceProps> = ({ appReference, className }) => {
  if (!appReference) return null
  // Check if appReference.value is an object
  if (typeof appReference.value !== 'object') return null

  return (
    <div className={cn('flex justify-between gap-4 lg:gap-0', className)}>
      <div className="flex items-center gap-4">
        {appReference.value.icon && (
          <Media
            resource={appReference.value.icon}
            className="size-15"
            imgClassName="w-full h-full rounded-xl aspect-square"
          />
        )}
        <div>
          {/* TODO: CHECK Why i dont get the name */}
          {appReference.value.name && (
            <p className="text-body-lg text-base-primary font-medium">{appReference.value.name}</p>
          )}
          {appReference.value.tagline && (
            <p className="text-body-sm text-base-secondary">{appReference.value.tagline}</p>
          )}
        </div>
      </div>

      {appReference.value.link && (
        <div>
          {appReference.value.link && (
            <CMSLink
              label="تعرف المزيد"
              url={appReference.value.link.url}
              size="sm"
              variant="tertiary"
              color="neutral"
            />
          )}
        </div>
      )}
    </div>
  )
}
