import type { Payload, PayloadRequest, RequiredDataFromCollectionSlug } from 'payload'
import type { Media, Integration } from '@/payload-types'

type IntegrationDataArgs = {
  imageSquare?: Media | number // Allow ID or full object
}

// Function to generate a single integration object
// This is based on the original `integrations` function but made more generic
const createIntegrationObject = (
  details: Partial<RequiredDataFromCollectionSlug<'integrations'>> & {
    slug: string
    title: string
    name: string
  },
  args: IntegrationDataArgs,
): RequiredDataFromCollectionSlug<'integrations'> => {
  const { imageSquare } = args
  return {
    icon: imageSquare, // This will be either Media object or ID
    tagline: details.tagline || `Tagline for ${details.title}`,
    overview: details.overview || {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: `Overview text for ${details.title}.`,
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: 'rtl',
            textStyle: '',
            textFormat: 0,
          },
        ],
        direction: 'rtl',
      },
    },
    link: details.link || {
      type: 'custom',
      newTab: null,
      url: `/integrations/${details.slug}`,
      label: details.name,
    },
    hero: details.hero || {
      type: 'hero01',
      richText: null,
      links: [],
      supportingText: null,
      logosHeadline: null,
      logos: [],
      media: null,
      badge: {
        label: null,
        color: 'blue',
        icon: null,
        icon_position: 'flex-row',
      },
    },
    gallery: details.gallery || [],
    content: details.content || {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: `Content for ${details.title}.`,
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: null,
            textStyle: '',
            textFormat: 0,
          },
        ],
        direction: null,
      },
    },
    companyName: details.companyName || `${details.title} Company`,
    docsLink: details.docsLink || {
      type: 'custom',
      url: `/docs/${details.slug}`,
      label: `Documentation for ${details.title}`,
    },
    email: details.email || `contact@${details.slug}.com`,
    categories: details.categories || [],
    ecosystem: details.ecosystem || ['sell'], // Default ecosystem
    phone: details.phone || undefined,
    // Spreading other potential details, including title, name, slug
    ...details,
  }
}

export const seedIntegrations = async (
  payload: Payload,
  req: PayloadRequest,
  { imageSquareId }: { imageSquareId?: number }, // Can be string from payload types
): Promise<Record<string, number>> => {
  const integrationsToSeed = [
    createIntegrationObject(
      {
        title: 'Jahez',
        name: 'جاهز',
        slug: 'jahez',
        tagline: 'إدارة رقمية للقسائم والخصومات',
        ecosystem: ['operate', 'sell'],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Bonat',
        name: 'بونات',
        slug: 'bonat',
        tagline: 'نظام نقاط بيع متكامل للمطاعم والمقاهي',
        ecosystem: ['sell', 'manage'],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Odoo',
        name: 'أودو',
        slug: 'odoo',
        tagline: 'مجموعة تطبيقات أعمال شاملة لتلبية جميع احتياجاتك',
        ecosystem: ['manage', 'operate'],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Zapier',
        name: 'زابير',
        slug: 'zapier',
        tagline: 'أتمتة سير العمل بين تطبيقاتك المختلفة',
        ecosystem: ['operate'],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Slack',
        name: 'سلاك',
        slug: 'slack',
        tagline: 'منصة تواصل وتعاون للفرق',
        ecosystem: ['manage'],
      },
      { imageSquare: imageSquareId },
    ),
  ]

  // In production, we might want to limit the number of integrations seeded
  const integrationCount = integrationsToSeed.length

  const createdIntegrationsPromises = integrationsToSeed
    .slice(0, integrationCount)
    .map((integrationData) =>
      payload.create({
        collection: 'integrations',
        depth: 0,
        data: integrationData,
        req,
      }),
    )

  const createdIntegrations = await Promise.all(createdIntegrationsPromises)

  const slugToIdMap: Record<string, number> = {}
  createdIntegrations.forEach((doc) => {
    const integrationDoc = doc as Integration // Cast to specific type
    if (integrationDoc.slug) {
      slugToIdMap[integrationDoc.slug] = integrationDoc.id
    }
  })

  payload.logger.info(`✓ Seeded ${createdIntegrations.length} integrations`)
  return slugToIdMap
}
