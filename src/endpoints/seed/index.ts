import type {
  CollectionSlug,
  GlobalSlug,
  Payload,
  PayloadRequest,
  File,
  TypedLocale,
} from 'payload'
import type { Header, Form, Footer, Category } from '@/payload-types'

import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { home } from './home'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageLogo } from './image-logo'
import { imageHero1 } from './image-hero-1'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'
import { seedTestimonials } from './testimonials'
import { image169 } from './image-16-9'
import { image43 } from './image-4-3'
import { imageSquare } from './image-square'
import { seedIntegrations } from './integrations'
import { seedSolutions } from './solutions'
import { seedFeaturesShowcasePage } from './features-showcase-page'
import { image3 } from './image-3'
import { seedChangelog } from './changelog'
import { seedCaseStudies } from './case-studies'
import { seedFAQs } from './faq'

const collections: CollectionSlug[] = [
  'pages',
  'posts',
  'users',
  'case-studies',
  'categories',
  'changelog',
  'faq',
  'integrations',
  // 'logos',
  'media',
  'solutions',
  'testimonials',
]
const globals: GlobalSlug[] = ['header', 'footer']

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

console.log('NEXT_PUBLIC_SERVER_URL', NEXT_PUBLIC_SERVER_URL)

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`

export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        tabs: [],
        cta: [],
      },
      depth: 0,
      context: {
        disableRevalidate: true,
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        columns: [],
      },
      depth: 0,
      context: {
        disableRevalidate: true,
      },
    }),
  ])
  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })

  payload.logger.info('— Seeding categories...')

  //Parent Categories
  const parentCategoriesData = [
    { collection: 'categories', data: { title: 'Ecosystems', slug: 'ecosystems' } },
    { collection: 'categories', data: { title: 'Integrations', slug: 'integrations' } },
    { collection: 'categories', data: { title: 'Media', slug: 'media' } },
    { collection: 'categories', data: { title: 'Blog', slug: 'blog' } },
    { collection: 'categories', data: { title: 'Other', slug: 'other' } },
  ]

  await Promise.all(
    parentCategoriesData.map(async (op) => {
      return await payload.create({
        collection: op.collection as CollectionSlug,
        data: op.data,
        depth: 0,
      })
    }),
  )
  const parentCategories = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        in: ['ecosystems', 'integrations', 'media', 'blog', 'other'],
      },
    },
  })
  const parentCategoriesMap = parentCategories.docs.reduce(
    (acc, category) => {
      acc[category?.slug ?? ''] = category
      return acc
    },
    {} as Record<string, Category>,
  )

  const ecosystems = parentCategoriesMap['ecosystems']
  const integrations = parentCategoriesMap['integrations']
  const media = parentCategoriesMap['media']
  const blog = parentCategoriesMap['blog']
  const other = parentCategoriesMap['other']

  payload.logger.info('✓ Seeded parent categories...')

  //Child categories
  const childCategoriesData = [
    // Media Categories
    {
      collection: 'categories',
      data: {
        title: 'App Icons',
        breadcrumbs: [
          {
            label: 'App Icons',
            url: '/media/app-icons',
          },
          {
            label: 'Media',
            url: '/media',
          },
        ],
        slug: 'app-icons',
        parent: media.id,
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'Hero Images',
        slug: 'hero-images',
        breadcrumbs: [
          {
            label: 'App Icons',
            url: '/media/app-icons',
          },
          {
            label: 'Media',
            url: '/media',
          },
        ],
        parent: media.id,
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'Feature Images',
        slug: 'feature-images',
        breadcrumbs: [
          {
            label: 'Feature Images',
            url: '/media/feature-images',
          },
          {
            label: 'Media',
            url: '/media',
          },
        ],
        parent: media.id,
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'Blog Images',
        slug: 'blog-images',
        breadcrumbs: [
          {
            label: 'Blog Images',
            url: '/media/blog-images',
          },
          {
            label: 'Media',
            url: '/media',
          },
        ],
        parent: media.id,
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'OG Images',
        slug: 'og-images',
        breadcrumbs: [
          {
            label: 'OG Images',
            url: '/media/og-images',
          },
          {
            label: 'Media',
            url: '/media',
          },
        ],
        parent: media.id,
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'Customer Logos',
        slug: 'customer-logos',
        breadcrumbs: [
          {
            label: 'Customer Logos',
            url: '/media/customer-logos',
          },
          {
            label: 'Media',
            url: '/media',
          },
        ],
        parent: media.id,
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'Team Photos',
        slug: 'team-photos',
        breadcrumbs: [
          {
            label: 'Team Photos',
            url: '/media/team-photos',
          },
          {
            label: 'Media',
            url: '/media',
          },
        ],
        parent: media.id,
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'Backgrounds',
        slug: 'backgrounds',
        breadcrumbs: [
          {
            label: 'Backgrounds',
            url: '/media/backgrounds',
          },
          {
            label: 'Media',
            url: '/media',
          },
        ],
        parent: media.id,
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'Lottie',
        slug: 'lottie',
        breadcrumbs: [
          {
            label: 'Lottie',
            url: '/media/lottie',
          },
          {
            label: 'Media',
            url: '/media',
          },
        ],
        parent: media.id,
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'Videos',
        slug: 'videos',
        breadcrumbs: [
          {
            label: 'Videos',
            url: '/media/videos',
          },
          {
            label: 'Media',
            url: '/media',
          },
        ],
        parent: media.id,
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'Illustrations',
        slug: 'illustrations',
        breadcrumbs: [
          {
            label: 'Illustrations',
            url: '/media/illustrations',
          },
          {
            label: 'Media',
            url: '/media',
          },
        ],
        parent: media.id,
      },
    },
    // Integrations Categories
    // {
    //   collection: 'categories',
    //   data: {
    //     title: 'إدارة المطاعم',
    //     // slug: '',
    //     parent: integrations.id,
    //   },
    // },
    // {
    //   collection: 'categories',
    //   data: {
    //     title: 'إدارة المخزون',
    //     // slug: '',
    //     parent: integrations.id,
    //   },
    // },
    // {
    //   collection: 'categories',
    //   data: {
    //     title: 'تقارير المبيعات',
    //     // slug: '',
    //     parent: integrations.id,
    //   },
    // },
    // {
    //   collection: 'categories',
    //   data: {
    //     title: 'إدارة الموظفين',
    //     // slug: '',
    //     parent: integrations.id,
    //   },
    // },
    // {
    //   collection: 'categories',
    //   data: {
    //     title: 'برامج نقاط البيع',
    //     // slug: '',
    //     parent: integrations.id,
    //   },
    // },

    // {
    //   collection: 'categories',
    //   data: {
    //     title: 'خدمة العملاء',
    //     // slug: '',
    //     parent: integrations.id,
    //   },
    // },
    // Ecosystems Categories
    {
      collection: 'categories',
      data: {
        title: 'البيع',
        breadcrumbs: [
          { label: 'sell', url: '/ecosystems/sell' },
          { label: 'Ecosystems', url: '/ecosystems' },
        ],
        slug: 'sell',

        parent: ecosystems.id,
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'التشغيل',
        breadcrumbs: [
          { label: 'operate', url: '/ecosystems/operate' },
          { label: 'Ecosystems', url: '/ecosystems' },
        ],
        slug: 'operate',

        parent: ecosystems.id,
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'الإدارة',
        breadcrumbs: [
          { label: 'manage', url: '/ecosystems/manage' },
          { label: 'Ecosystems', url: '/ecosystems' },
        ],
        slug: 'manage',
        parent: ecosystems.id,
      },
    },
  ]

  // await Promise.all(
  //   childCategoriesData.map(async (op) => {
  //     return await payload.create({
  //       collection: op.collection as CollectionSlug,
  //       data: op.data,
  //       depth: 0,
  //       locale: 'ar',
  //     })
  //   }),
  // )
  for (const op of childCategoriesData) {
    await payload.create({
      collection: op.collection as CollectionSlug,
      data: op.data,
      depth: 0,
      // locale: 'ar',
      // context: {
      //   locale: 'ar',
      // },
    })
  }

  payload.logger.info('✓ Seeded child categories...')

  const categories = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        in: ['app-icons', 'sell', 'operate', 'manage'],
      },
    },
  })
  const categoriesMap = categories.docs.reduce(
    (acc, category) => {
      acc[category?.slug ?? ''] = category
      return acc
    },
    {} as Record<string, Category>,
  )

  const appIconsCategory = categoriesMap['app-icons']
  const sellCategory = categoriesMap['sell']
  const operateCategory = categoriesMap['operate']
  const manageCategory = categoriesMap['manage']

  payload.logger.info('— Seeding media...')

  const [
    // image1Buffer,
    // image2Buffer,
    // image3Buffer,
    logoBuffer,
    hero1Buffer,
    image169Buffer,
    image43Buffer,
    imageSquareBuffer,
  ] = await Promise.all([
    // fetchFileByURL(
    //   'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    // ),
    // fetchFileByURL(
    //   'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    // ),
    // fetchFileByURL(
    //   'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    // ),
    fetchFileByURL(`${NEXT_PUBLIC_SERVER_URL}/marn-logo.png`),
    fetchFileByURL(`${NEXT_PUBLIC_SERVER_URL}/marn-placeholder.png`),
    fetchFileByURL(`${NEXT_PUBLIC_SERVER_URL}/marn-placeholder-16x9.png`),
    fetchFileByURL(`${NEXT_PUBLIC_SERVER_URL}/marn-placeholder-4x3.png`),
    fetchFileByURL(`${NEXT_PUBLIC_SERVER_URL}/marn-placeholder-1x1.png`),
  ])

  const [
    // image1Doc,
    // image2Doc,
    // image3Doc,
    logoDoc,
    hero1Doc,
    image169Doc,
    image43Doc,
    imageSquareDoc,
  ] = await Promise.all([
    // payload.create({
    //   collection: 'media',
    //   data: image1,
    //   file: image1Buffer,
    // }),
    // payload.create({
    //   collection: 'media',
    //   data: image2,
    //   file: image2Buffer,
    // }),
    // payload.create({
    //   collection: 'media',
    //   data: image3,
    //   file: image3Buffer,
    // }),
    payload.create({
      collection: 'media',
      data: imageLogo,
      file: logoBuffer,
    }),
    payload.create({
      collection: 'media',
      data: imageHero1,
      file: hero1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image169,
      file: image169Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image43,
      file: image43Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageSquare,
      file: imageSquareBuffer,
    }),
  ])

  await payload.update({
    id: imageSquareDoc.id,
    collection: 'media',
    data: {
      category: [appIconsCategory.id],
    },
    // locale: 'ar',
  })

  if (sellCategory?.id == null || operateCategory?.id == null || manageCategory?.id == null) {
    throw new Error('One or more required category IDs are missing')
  }

  payload.logger.info('— Seeding solutions...')
  const solutionsSlugToIdMap = await seedSolutions(
    payload,
    req,
    { imageSquareId: imageSquareDoc?.id },
    {
      sellCategoryId: sellCategory?.id,
      operateCategoryId: operateCategory?.id,
      manageCategoryId: manageCategory?.id,
    },
  )

  payload.logger.info(`— Seeding integrations...`)
  const integrationsSlugToIdMap = await seedIntegrations(payload, req, imageSquareDoc?.id, [
    sellCategory,
    operateCategory,
    manageCategory,
  ])

  payload.logger.info(`— Seeding contact form...`)
  const contactForm = (await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
    // locale: 'ar',
    req,
  })) as Form

  payload.logger.info(`— Seeding pages...`)
  const featuresShowcasePageData = seedFeaturesShowcasePage({
    image169: image169Doc,
    image43: image43Doc,
    imageSquare: imageSquareDoc,
  })
  const pagesData = [
    {
      // locale: 'ar' as TypedLocale,
      data: home({
        heroImage: hero1Doc,
        metaImage: image169Doc,
        image169: image169Doc,
        image43: image43Doc,
        imageSquare: imageSquareDoc,
      }),
      key: 'home',
    },
    {
      // locale: 'ar' as TypedLocale,
      data: contactPageData({ contactForm }),
      key: 'contact',
    },
    {
      // locale: 'ar' as TypedLocale,
      data: featuresShowcasePageData,
      key: 'features',
    },
  ]

  await Promise.all(
    pagesData.map(async (page) => {
      return await payload.create({
        collection: 'pages',
        depth: 0,
        data: page.data,
        // locale: page.locale,
      })
    }),
  )

  // Seed Case Studies using the new function and get the map
  const caseStudiesSlugToIdMap = await seedCaseStudies(payload, {
    image169Doc,
    solutionsSlugToIdMap, // Pass the solutions map
    integrationsSlugToIdMap, // Pass the integrations map
  })

  payload.logger.info(`— Seeding testimonials...`)
  await seedTestimonials({
    payload,
    image1: image43Doc,
    logo: logoDoc,
    imageSquare: imageSquareDoc,
    caseStudies: caseStudiesSlugToIdMap, // Pass the fetched case studies
  })

  payload.logger.info(`— Seeding changelog...`)
  await seedChangelog(payload, req)

  payload.logger.info(`— Seeding FAQs...`)
  await seedFAQs(payload, req, {
    sellCategory,
    operateCategory,
    manageCategory,
    otherCategory: other,
  })

  payload.logger.info(`— Seeding globals...`)

  const headerData: Partial<Header> = {
    tabs: [
      {
        enableDirectLink: false,
        enableDropdown: true,
        descriptionLinks: [],
        navItems: [
          {
            style: 'list' as const,
            defaultLink: { link: { type: 'reference', newTab: false, url: null, icon: null, label: '' }, description: null }, // prettier-ignore
            featuredLink: { tag: null, label: null, links: [] },
            listLinks: {
              tag: 'بيع',
              links: [
                {
                  link: {
                    type: 'reference',
                    newTab: false,
                    reference: {
                      relationTo: 'solutions',
                      value: solutionsSlugToIdMap['cashier'] as any,
                    },
                    label: 'الكاشير',
                    description: 'تسجيل المبيعات بمرونة وسرعة على أي جهاز',
                    icon: null,
                  },
                },
                {
                  link: {
                    type: 'reference',
                    newTab: false,
                    reference: {
                      relationTo: 'solutions',
                      value: solutionsSlugToIdMap['paysync'] as any,
                    },
                    label: 'شاشة السداد',
                    description: 'عرض الطلبات والدفع بشكل مباشر للعميل',
                    icon: null,
                  },
                },
                {
                  link: {
                    type: 'reference',
                    newTab: false,
                    reference: {
                      relationTo: 'solutions',
                      value: solutionsSlugToIdMap['kiosk'] as any,
                    },
                    label: 'الطلب الذاتي',
                    description: 'خلي العملاء يطلبون بأنفسهم ويقل الضغط على الموظفين',
                    icon: null,
                  },
                },
              ],
            },
          },
          {
            style: 'list' as const,
            defaultLink: { link: { type: 'reference', newTab: false, url: null, icon: null, label: '' }, description: null }, // prettier-ignore
            featuredLink: { tag: null, label: null, links: [] },
            listLinks: {
              tag: 'تشغيل',
              links: [
                { link: { type: 'reference', newTab: false, reference: { relationTo: 'solutions', value: solutionsSlugToIdMap['orderstation'] as any }, label: 'محطة الطلبات', description: ' إدارة جميع الطلبات من مكان واحد – حضوري وتوصيل', icon: null } }, // prettier-ignore
                { link: { type: 'reference', newTab: false, reference: { relationTo: 'solutions', value: solutionsSlugToIdMap['products'] as any }, label: 'المنتجات', description: 'نظّم منتجاتك، الأسعار، والعروض بسهولة', icon: null } }, // prettier-ignore
                { link: { type: 'reference', newTab: false, reference: { relationTo: 'solutions', value: solutionsSlugToIdMap['inventory'] as any }, label: 'المخزون', description: 'تابع الكميات وتفادى النقص أو الهدر تلقائيًا', icon: null } }, // prettier-ignore
              ],
            },
          },
          {
            style: 'list' as const,
            defaultLink: { link: { type: 'reference', newTab: false, url: null, icon: null, label: '' }, description: null }, // prettier-ignore
            featuredLink: { tag: null, label: null, links: [] },
            listLinks: {
              tag: 'إدارة',
              links: [
                { link: { type: 'reference', newTab: false, reference: { relationTo: 'solutions', value: solutionsSlugToIdMap['analytics'] as any }, label: 'التحليلات', description: 'تقارير فورية عن المبيعات والأرباح تساعدك تتخذ قرارات', icon: null } }, // prettier-ignore
                { link: { type: 'reference', newTab: false, reference: { relationTo: 'solutions', value: solutionsSlugToIdMap['branches'] as any }, label: 'الفروع', description: 'راقب كل فروعك وتقاريرها من نفس اللوحة', icon: null } }, // prettier-ignore
                { link: { type: 'reference', newTab: false, reference: { relationTo: 'solutions', value: solutionsSlugToIdMap['customers'] as any }, label: 'العملاء', description: 'احفظ بيانات عملاءك وفعّل برامج الولاء', icon: null } }, // prettier-ignore
                { link: { type: 'reference', newTab: false, reference: { relationTo: 'solutions', value: solutionsSlugToIdMap['accouting'] as any }, label: 'المالية', description: 'تتبّع المصاريف، الضرائب، والتدفق المالي بسهولة', icon: null } }, // prettier-ignore
              ],
            },
          },
        ],
        label: 'الحلول',
        link: { type: 'reference', newTab: null, url: null },
        description:
          'كل أدواتك في منظومة مرنة. استكشف حلول البيع، التشغيل، والإدارة المصممة لتلبية احتياجاتك.',
      },
      {
        enableDirectLink: false,
        enableDropdown: true,
        descriptionLinks: [],
        navItems: [
          {
            style: 'list' as const,
            defaultLink: { link: { type: 'reference', newTab: false, url: null, icon: null, label: '' }, description: null }, // prettier-ignore
            featuredLink: { tag: null, label: null, links: [] },
            listLinks: {
              tag: 'الأنشطة',
              links: [
                { link: { type: 'custom', newTab: false, url: '/restaurants', label: 'للمطاعم', description: null, icon: 'utensils' } }, // prettier-ignore
                { link: { type: 'custom', newTab: false, url: '/retail', label: 'للبيع بالتجزئة', description: null, icon: 'scan-barcode' } }, // prettier-ignore
                { link: { type: 'custom', newTab: false, url: '/express-services', label: 'للخدمات السريعة', description: null, icon: 'fuel' } }, // prettier-ignore
              ],
            },
          },
          {
            style: 'list' as const,
            defaultLink: { link: { type: 'reference', newTab: false, url: null, icon: null, label: '' }, description: null }, // prettier-ignore
            featuredLink: { tag: null, label: null, links: [] },
            listLinks: {
              tag: 'الميزات',
              links: [
                { link: { type: 'custom', newTab: false, url: '/features/control', label: 'للبساطة والتحكم', description: null, icon: 'package-open' } }, // prettier-ignore
                { link: { type: 'custom', newTab: false, url: '/solutions/branches', label: 'لتعدد الفروع', description: null, icon: 'map-pin' } }, // prettier-ignore
                { link: { type: 'custom', newTab: false, url: '/integrations', label: 'للربط مع أدواتك', description: null, icon: 'puzzle' } }, // prettier-ignore
                { link: { type: 'custom', newTab: false, url: '/blog/increasing-profits-with-marnpos', label: 'للزيادة أرباحك', description: null, icon: 'bar-chart-big' } }, // prettier-ignore
              ],
            },
          },
        ],
        label: 'لماذا مرن',
        link: { type: 'reference', newTab: null, url: null },
        description:
          'ليش أصحاب المشاريع يختارون مرن؟ اكتشف قيمنا وكيف نسهّل عليك الشغل وتكبير مشروعك.',
      },
      {
        enableDirectLink: true,
        enableDropdown: false,
        descriptionLinks: [],
        navItems: [],
        label: 'التطبيقات',
        link: { type: 'custom', newTab: false, url: '/integrations' },
        description: 'اربط مرن مع تطبيقات الدفع، التوصيل، والمحاسبة. سهّل شغلك وربط كل شيء ببعضه.',
      },
      {
        enableDirectLink: true, // Changed from false in original to true based on structure
        enableDropdown: true,
        descriptionLinks: [],
        navItems: [
          {
            style: 'list' as const,
            defaultLink: { link: { type: 'reference', newTab: false, url: null, icon: null, label: '' }, description: null }, // prettier-ignore
            featuredLink: { tag: null, label: null, links: [] },
            listLinks: {
              tag: 'منشوراتنا',
              links: [
                { link: { type: 'custom', newTab: false, url: '/blog', label: 'المدونة', description: null, icon: 'newspaper' } }, // prettier-ignore
                { link: { type: 'custom', newTab: false, url: '/customers', label: 'قصص النجاح', description: null, icon: 'trophy' } }, // prettier-ignore
              ],
            },
          },
          {
            style: 'list' as const,
            defaultLink: { link: { type: 'reference', newTab: false, url: null, icon: null, label: '' }, description: null }, // prettier-ignore
            featuredLink: { tag: null, label: null, links: [] },
            listLinks: {
              tag: 'عن مرن',
              links: [
                { link: { type: 'custom', newTab: false, url: '/about', label: 'عن مرن', description: null, icon: 'marn-icon' } }, // prettier-ignore
                { link: { type: 'custom', newTab: false, url: '/contact-us', label: 'تواصل معنا', description: null, icon: 'phone' } }, // prettier-ignore
                { link: { type: 'custom', newTab: false, url: 'https://marn.gitbook.io/marn-developers/', label: 'المطورين', description: null, icon: 'code' } }, // prettier-ignore
              ],
            },
          },
        ],
        label: 'الموارد',
        link: { type: 'custom', newTab: false, url: '/resources' }, // Changed from /contact based on label
        description:
          'كل ما تحتاج تعرفه عن مرن وأصحاب المشاريع اللي يستخدمونه—من مقالات ونصائح، إلى قصص وتجارب حقيقية، وحتى التواصل معنا',
      },
    ],
    cta: [
      { link: { type: 'custom', newTab: null, url: '/', label: 'دخول التاجر', color: 'neutral', variant: 'secondary' } }, // prettier-ignore
      { link: { type: 'custom', newTab: false, url: '/contact-us', label: 'تواصل معنا', color: 'neutral', variant: 'primary' } }, // prettier-ignore
    ],
  }
  // Footer Data
  const footerData: Partial<Footer> = {
    columns: [
      {
        label: 'الحلول',
        navItems: [
          { link: { type: 'custom', newTab: false, url: '/solutions/cashier', label: 'الكاشير' } }, // prettier-ignore
          { link: { type: 'custom', newTab: false, url: '/solutions/paysync', label: 'شاشة السداد' } }, // prettier-ignore
          { link: { type: 'custom', newTab: false, url: '/solutions/kiosk', label: 'الطلب الذاتي' } }, // prettier-ignore
          { link: { type: 'custom', newTab: false, url: '/solutions/orderstation', label: 'محطة الطلبات' } }, // prettier-ignore
          { link: { type: 'custom', newTab: false, url: '/solutions/products', label: 'المنتجات' } }, // prettier-ignore
          { link: { type: 'custom', newTab: false, url: '/solutions/inventory', label: 'المخزون' } }, // prettier-ignore
          { link: { type: 'custom', newTab: false, url: '/solutions/analytics', label: 'التحليلات' } }, // prettier-ignore
          { link: { type: 'custom', newTab: false, url: '/solutions/branches', label: 'الفروع' } }, // prettier-ignore
          { link: { type: 'custom', newTab: false, url: '/solutions/customers', label: 'العملاء' } }, // prettier-ignore
          { link: { type: 'custom', newTab: false, url: '/solutions/accouting', label: 'المالية' } }, // prettier-ignore
        ],
      },
      // ... Add other footer columns if needed, based on original Footer global structure
    ],
  }

  await Promise.all([
    payload.logger.info('Updating global – header (ar)'),
    payload.updateGlobal({
      slug: 'header',
      data: headerData,
      req,
      // locale: 'ar',
    }),
    payload.logger.info('Updating global – footer'),
    payload.updateGlobal({
      slug: 'footer',
      data: footerData,
      req,
      // locale: 'ar',
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
