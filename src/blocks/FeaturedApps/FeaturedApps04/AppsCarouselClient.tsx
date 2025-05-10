import type { Integration, Media as MediaType } from '@/payload-types' // Import necessary types

import { Media } from '@/components/Media'

// Props for the client component
interface AppsCarouselClientProps {
  apps: Integration[]
}

const AppCard: React.FC<{ app: Integration }> = ({ app }) => {
  const { name, icon, tagline, overview, link, gallery } = app
  return <Media resource={icon as MediaType} imgClassName="rounded-3xl" className="size-16" />
}

// Main Client Component for the Carousel
export const AppsCarouselClient: React.FC<AppsCarouselClientProps> = ({ apps }) => {
  if (!apps || apps.length === 0) {
    return null // Or render an empty state
  }
  return (
    <div className="relative container w-full">
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
        {apps.map((app, index) => (
          <Media
            key={app.id || index}
            resource={app.icon as MediaType}
            imgClassName="rounded-3xl object-cover w-full h-auto"
            className="h-auto w-full"
          />
        ))}
      </div>
    </div>
  )
}
