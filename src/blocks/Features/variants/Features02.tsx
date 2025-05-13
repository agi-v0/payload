'use client'
import { FeaturesBlock } from '@/payload-types'
import { Badge } from '@/components/ui/badge'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

import { CMSLink } from '@/components/Link'
import { CaretLeft } from '@/icons/caret-left-filled'
import * as motion from 'motion/react-client'
import { itemVariants } from '@/utilities/motion'

const colSpanClass = {
  full: 'md:col-span-4 lg:col-span-12',
  half: 'md:col-span-2 lg:col-span-6',
  oneThird: 'md:col-span-2 lg:col-span-4',
  twoThirds: 'md:col-span-2 lg:col-span-8',
}

type ColumnsType = NonNullable<FeaturesBlock['columns']>

type Features02Props = FeaturesBlock & {
  readMoreLabel?: string
}

export const Features02: React.FC<Features02Props> = ({ columns, readMoreLabel }) => {
  const safeColumns: ColumnsType = columns ?? []
  if (!safeColumns.length) return null

  return (
    <div className="gap-sm py-xl container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12">
      {safeColumns.map((column, index) => {
        const { content, image, size } = column
        const lgColSpanClass = colSpanClass[size || 'full']
        return (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className={cn(
              'gap-md group rounded-space-sm bg-background-neutral p-md col-span-4 flex flex-col',
              lgColSpanClass,
              {
                'lg:flex-row': size === 'full',
                'hover:shadow-border': column.enableCta && column.link?.label,
              },
            )}
          >
            {column.enableCta && column.link?.label ? (
              <CMSLink
                {...column.link}
                label={null}
                variant="inline"
                className="contents hover:no-underline"
              >
                <FeatureCardContent column={column} readMoreLabel={readMoreLabel} />
              </CMSLink>
            ) : (
              <FeatureCardContent column={column} readMoreLabel={readMoreLabel} />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

function FeatureCardContent({
  column,
  readMoreLabel,
}: {
  column: ColumnsType[number]
  readMoreLabel?: string
}) {
  const { content, image, size } = column
  return (
    <>
      <div
        className={cn('gap-sm flex w-full flex-col', {
          'lg:pe-md lg:basis-1/2': size === 'full',
        })}
      >
        {column.enableBadge && column.badge && <Badge {...column.badge} />}
        {content && (
          <div className="gap-xs flex flex-col">
            {content.title && (
              <h3 className="text-h3 text-base-primary font-medium">{content.title}</h3>
            )}
            {content.subtitle && (
              <p className="text-body-md text-base-tertiary">{content.subtitle}</p>
            )}
          </div>
        )}
        {column.enableCta && column.link?.label && (
          <span className="mt-auto flex w-fit flex-row items-center gap-2">
            {readMoreLabel}
            <CaretLeft className="size-3 translate-x-1 transition-all duration-300 group-hover:translate-x-0 ltr:-translate-x-1 ltr:rotate-180" />
          </span>
        )}
      </div>
      {image && (
        <Media
          resource={image}
          className={cn(
            'group rounded-space-sm bg-background-neutral-subtle w-full flex-1 overflow-hidden',
            {
              'flex-auto lg:basis-1/2': size === 'full',
            },
          )}
          imgClassName="w-full group-hover:scale-102 transition-all duration-300 h-full object-cover"
        />
      )}
    </>
  )
}
