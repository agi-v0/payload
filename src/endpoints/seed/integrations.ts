import type { Payload, PayloadRequest, RequiredDataFromCollectionSlug } from 'payload'
import type { Media, Integration, Category } from '@/payload-types'

type IntegrationDataArgs = {
  imageSquare?: Media | number // Allow ID or full object

  ecosystems?: Category[]
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
    company: details.company || {
      name: details.title,
      email: `contact@${details.slug}.com`,
      phone: undefined,
    },
    docsLink: details.docsLink || {
      type: 'custom',
      url: `/docs/${details.slug}`,
      label: `Documentation for ${details.title}`,
    },
    categories: details.categories || [],
    layout: [],
    // Spreading other potential details, including title, name, slug
    ...details,
  }
}

export const seedIntegrations = async (
  payload: Payload,
  req: PayloadRequest,
  imageSquareId: number,
  ecosystems: Category[],
): Promise<Record<string, number>> => {
  const integrationsToSeed = [
    createIntegrationObject(
      {
        title: 'Jahez',
        name: 'جاهز',
        slug: 'jahez',
        tagline: 'إدارة رقمية للقسائم والخصومات',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Bonat',
        name: 'بونات',
        slug: 'bonat',
        tagline: 'نظام نقاط بيع متكامل للمطاعم والمقاهي',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Odoo',
        name: 'أودو',
        slug: 'odoo',
        tagline: 'مجموعة تطبيقات أعمال شاملة لتلبية جميع احتياجاتك',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Zapier',
        name: 'زابير',
        slug: 'zapier',
        tagline: 'أتمتة سير العمل بين تطبيقاتك المختلفة',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Slack',
        name: 'سلاك',
        slug: 'slack',
        tagline: 'منصة تواصل وتعاون للفرق',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Jahez',
        name: 'جاهز',
        slug: 'jahez',
        tagline: 'إدارة رقمية للقسائم والخصومات',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Bonat',
        name: 'بونات',
        slug: 'bonat',
        tagline: 'نظام نقاط بيع متكامل للمطاعم والمقاهي',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Odoo',
        name: 'أودو',
        slug: 'odoo',
        tagline: 'مجموعة تطبيقات أعمال شاملة لتلبية جميع احتياجاتك',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Zapier',
        name: 'زابير',
        slug: 'zapier',
        tagline: 'أتمتة سير العمل بين تطبيقاتك المختلفة',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Slack',
        name: 'سلاك',
        slug: 'slack',
        tagline: 'منصة تواصل وتعاون للفرق',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Jahez',
        name: 'جاهز',
        slug: 'jahez',
        tagline: 'إدارة رقمية للقسائم والخصومات',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Bonat',
        name: 'بونات',
        slug: 'bonat',
        tagline: 'نظام نقاط بيع متكامل للمطاعم والمقاهي',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Odoo',
        name: 'أودو',
        slug: 'odoo',
        tagline: 'مجموعة تطبيقات أعمال شاملة لتلبية جميع احتياجاتك',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Zapier',
        name: 'زابير',
        slug: 'zapier',
        tagline: 'أتمتة سير العمل بين تطبيقاتك المختلفة',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
    createIntegrationObject(
      {
        title: 'Slack',
        name: 'سلاك',
        slug: 'slack',
        tagline: 'منصة تواصل وتعاون للفرق',
        ecosystem: ecosystems?.slice(0, 2).map((cat) => cat.id) || [],
      },
      { imageSquare: imageSquareId },
    ),
  ]

  // In production, we might want to limit the number of integrations seeded
  const integrationCount = integrationsToSeed.length

  // Create integrations one by one
  for (const integrationData of integrationsToSeed.slice(0, integrationCount)) {
    await payload.create({
      collection: 'integrations',
      depth: 0,
      data: integrationData,
      // locale: 'ar', // Consider if locale is needed
      // req, // Consider if req is needed
    })
  }

  // Fetch the created integrations to build the slugToIdMap
  const { docs: createdIntegrations } = await payload.find({
    collection: 'integrations',
    // Ensure we only fetch the integrations we just tried to seed
    where: {
      slug: {
        in: integrationsToSeed.slice(0, integrationCount).map((int) => int.slug),
      },
    },
    limit: integrationCount, // Optimization: limit to the number we expect
    depth: 0, // We only need slug and id
  })

  const slugToIdMap: Record<string, number> = {}
  createdIntegrations.forEach((doc) => {
    const integrationDoc = doc as Integration // Cast to specific type
    if (integrationDoc.slug && integrationDoc.id) {
      // Ensure id is present
      slugToIdMap[integrationDoc.slug] = integrationDoc.id
    }
  })

  payload.logger.info(`✓ Seeded ${createdIntegrations.length} integrations`)
  return slugToIdMap
}
