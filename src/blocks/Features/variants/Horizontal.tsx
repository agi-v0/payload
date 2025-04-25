'use client'

import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'
import { Card, CardContent } from '@/components/ui/card'

import { extractHeading, getContentWithoutHeading } from '@/utilities/extractRichTextContent'

export const HorizontalVariant: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns || columns.length === 0) return null
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-12">
      {columns.map((column, index) => {
        const { content, image, appReference, link, showFeatureList, features } = column

        const headingText = extractHeading(content)

        const contentWithoutHeading = getContentWithoutHeading(content)

        return (
          <div key={index} className={cn('col-span-4 lg:col-span-12 lg:gap-8 lg:p-8')}>
            {/* TODO: SHOW BADGE HERE */}
            {/* {showBadge && badgeConfig?.badge && <Badge {...badgeConfig.badge} />} */}
            {/* {appReference && (
              <div className="mb-6 overflow-hidden rounded-lg">
                <Media resource={appReference} className="h-auto w-full" />
              </div>
            )} */}
            <div className={'flex flex-col gap-4 lg:flex-row lg:gap-8'}>
              {content && (
                <div className={'flex flex-col gap-4 lg:basis-1/2'}>
                  {headingText && <h3 className="text-3xl font-medium">{headingText}</h3>}
                  {contentWithoutHeading && (
                    <RichText enableGutter={false} data={contentWithoutHeading} />
                  )}
                  {/* TODO: Add CMS LInk HERE */}
                </div>
              )}

              {column.image && (
                <div
                  className={`mb-6 overflow-hidden rounded-lg ${content ? 'lg:basis-1/2' : ''} `}
                >
                  <Media resource={column.image} className="h-[232.5px] w-full lg:h-[580px]" />
                </div>
              )}
            </div>
            <div key={index} className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
              {showFeatureList &&
                features &&
                features.map((featureGroup, index) => {
                  const feature = featureGroup.featureItem
                  const iconName = feature.icon as keyof typeof dynamicIconImports
                  const featuresheadingText = extractHeading(feature?.content)
                  const featurescontentWithoutHeading = getContentWithoutHeading(feature?.content)
                  return (
                    <Card key={feature.id || `feature-${index}`} className="border-0">
                      <CardContent
                        className={cn(
                          'flex flex-col justify-start gap-6 bg-transparent p-0 md:gap-8',
                        )}
                      >
                        {feature?.icon && (
                          <DynamicIcon
                            className="text-base-secondary m-4 h-6 w-6 md:h-8 md:w-8"
                            name={iconName}
                            color="currentColor"
                          />
                        )}
                        <div className="flex flex-col gap-2">
                          <h3 className={`text-primary text-xl font-medium no-underline`}>
                            {featuresheadingText || 'Untitled'}
                          </h3>
                          {featurescontentWithoutHeading && (
                            <RichText
                              className="text-base-secondary"
                              enableGutter={false}
                              data={featurescontentWithoutHeading}
                            />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
