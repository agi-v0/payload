'use client'

import React, { useState } from 'react'
import { FeaturesBlock } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink, CMSLinkType } from '@/components/Link'
import { Media } from '@/components/Media'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'

export const TabsVariant: React.FC<FeaturesBlock> = ({ columns }) => {
  const [activeTab, setActiveTab] = useState(0)

  if (!columns || columns.length === 0) return null

  const activeColumn = columns[activeTab]

  return (
    <div className="py-12">
      {/* Tabs navigation */}
      <div className="mb-8 flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800">
        {columns.map((column, index) => (
          <button
            key={index}
            className={cn(
              '-mb-px rounded-t-lg px-4 py-2 text-sm font-medium',
              activeTab === index
                ? 'border-x border-t border-gray-200 border-b-white bg-white dark:border-gray-800 dark:border-b-gray-900 dark:bg-gray-900'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
            )}
            onClick={() => setActiveTab(index)}
          >
            {/* {column.title} */}

            {/* {showBadge && badgeConfig?.badge && index === activeTab && (
              <span className="ml-2">
                <Badge {...badgeConfig.badge} />
              </span>
            )} */}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="w-full md:w-1/2 lg:w-3/5">
          {activeColumn.content && (
            <div className="mb-6">
              <h3 className="mb-4 text-2xl font-bold">{activeColumn.title}</h3>
              <RichText data={activeColumn.content} />
            </div>
          )}

          {activeColumn.showFeatureList &&
            activeColumn.features &&
            activeColumn.features.length > 0 && (
              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {activeColumn.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                  >
                    {feature.icon && (
                      <span className="text-brand-600 dark:text-brand-400 mt-1 flex-shrink-0">
                        <i className={feature.icon} />
                      </span>
                    )}
                    <div>
                      <RichText data={feature.content} />
                    </div>
                  </div>
                ))}
              </div>
            )}

          {activeColumn.enableCta && activeColumn.link && (
            <div className="mt-4">
              <CMSLink {...(activeColumn.link as CMSLinkType)} />
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 lg:w-2/5">
          {activeColumn.image && (
            <div className="mb-6 overflow-hidden rounded-xl">
              <Media resource={activeColumn.image} className="h-auto w-full" />
            </div>
          )}

          {activeColumn.appReference && !activeColumn.image && (
            <div className="overflow-hidden rounded-xl bg-gray-100 p-8 dark:bg-gray-800">
              <Media resource={activeColumn.appReference} className="h-auto w-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
