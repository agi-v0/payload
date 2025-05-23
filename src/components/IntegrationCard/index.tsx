import { CMSLink } from '@/components/Link'
import { Integration } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'
import { TypedLocale } from 'payload'

export type IntegrationsCardData = Pick<
  Integration,
  'slug' | 'icon' | 'tagline' | 'link' | 'name' | 'overview' | 'categories' | 'ecosystem'
>

export const IntegrationCard: React.FC<{
  integration: IntegrationsCardData
  locale?: TypedLocale
}> = ({ integration, locale }) => {
  const { icon, tagline, link, name, overview, categories, ecosystem } = integration

  console.log('integration card', link)

  return (
    // Use background variable and explicit rounding from Figma
    <div className="bg-background-neutral rounded-space-sm flex w-full flex-col overflow-hidden lg:flex-row">
      {/* Content Section */}
      <div className="p-md flex w-full flex-col justify-between text-start">
        <div className="gap-sm flex flex-col items-start justify-start">
          {/* Integration Badge (Icon + Name) */}
          <div className="gap-xs flex items-center justify-end">
            {icon && <Media resource={icon} className="size-16 overflow-hidden rounded-xl" />}
            <div className="flex flex-col gap-2">
              {name && <span className="text-body-lg text-base-secondary font-medium">{name}</span>}
              {categories && (
                <span className="flex flex-wrap gap-2">
                  {ecosystem &&
                    ecosystem.map(
                      (ecosystem) =>
                        ecosystem &&
                        typeof ecosystem === 'object' && (
                          <Badge
                            key={ecosystem.id}
                            type="label"
                            size="md"
                            label={ecosystem.title}
                            color="yellow"
                          />
                        ),
                    )}
                  {categories.map(
                    (category) =>
                      category &&
                      typeof category === 'object' && (
                        <Badge key={category.id} type="label" size="md" label={category.title} />
                      ),
                  )}
                </span>
              )}
            </div>
          </div>
          {/* Title and Description */}
          <div className="gap-xs flex flex-col">
            {/* {tagline && <h3 className="text-h3 text-base-primary font-medium">{tagline}</h3>} */}
            {/* Render overview using RichText component with `data` prop */}
            {overview && (
              <RichText
                data={overview}
                enableGutter={false}
                className="text-body-sm text-base-secondary font-normal"
              />
            )}
          </div>
        </div>
        {/* Link Button */}
        {link && (
          <CMSLink
            {...link}
            label={locale === 'ar' ? 'المزيد' : 'Learn More'}
            className="text-body-md text-base-tertiary hover:text-base-primary w-fit px-0 py-0 hover:bg-transparent"
            variant="link"
          />
        )}
      </div>
    </div>
  )
}
