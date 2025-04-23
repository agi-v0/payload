import React from 'react'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import { AppReference as AppReferenceType } from '@/blocks/Features/types'
import { cn } from '@/utilities/ui'

interface AppReferenceProps {
  appReference: AppReferenceType
  className?: string
}

export const AppReference: React.FC<AppReferenceProps> = ({ appReference, className }) => {
  if (!appReference) return null

  return (
    <div className={cn('flex justify-between gap-4 lg:gap-0', className)}>
      <div className="flex items-center gap-4">
        {appReference.icon && (
          <Media
            resource={appReference.icon}
            className="h-14.5 w-14.5"
            imgClassName="w-full h-full aspect-square"
          />
        )}
        <div>
          {/* TODO: CHECK Why i dont get the name */}
          {appReference.name && (
            <p className="text-body-lg text-base-primary font-medium">{appReference.name}</p>
          )}
          {appReference.tagline && (
            <p className="text-body-sm text-base-secondary">{appReference.tagline}</p>
          )}
        </div>
      </div>

      {appReference.link && <div>{appReference.link && <CMSLink {...appReference.link} />}</div>}
    </div>
  )
}
