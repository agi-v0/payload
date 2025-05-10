import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'
import type {
  Header,
  MediaCategory,
  Category,
  User,
  Media,
  Post,
  Form,
  Page,
  Integration,
  Solution,
  CaseStudy,
} from '@/payload-types'

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
import { app } from './app'
import { seedSolutions } from './solutions'
import { seedFeaturesShowcasePage } from './features-showcase-page'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'integrations',
  'media-categories',
  'posts',
  'forms',
  'form-submissions',
  'search',
  'testimonials',
  'solutions',
  'case-studies',
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

  // 1. Clear globals & collections (can stay parallel)
  payload.logger.info(`— Clearing collections and globals...`)
  await Promise.all(
    globals.map((slug) =>
      payload.updateGlobal({ slug, data: {}, depth: 0, context: { disableRevalidate: true } }),
    ),
  )
  for (const collection of collections) {
    payload.logger.info(`Clearing data from collection: ${collection}`)
    await payload.db.deleteMany({ collection, req, where: {} })
  }

  const versionedCollections = collections.filter((collection) =>
    Boolean(payload.collections[collection].config.versions),
  )
  for (const collection of versionedCollections) {
    payload.logger.info(`Clearing versions from collection: ${collection}`)
    await payload.db.deleteVersions({ collection, req, where: {} })
  }

  payload.logger.info(`— Seeding demo author and user...`)
  // Clear existing demo user first
  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })
  const demoAuthor = (await payload.create({
    collection: 'users',
    data: {
      name: 'Demo Author',
      email: 'demo-author@example.com',
      password: 'password',
    },
    req,
    depth: 0,
  })) as User

  payload.logger.info('— Seeding categories sequentially...')

  // 2. Build an array of category create operations
  const categoryCreates = [
    // Media Categories
    { collection: 'media-categories', data: { title: 'App Icons', slug: 'app-icon' } },
    { collection: 'media-categories', data: { title: 'Hero Images' } },
    { collection: 'media-categories', data: { title: 'Feature Images' } },
    { collection: 'media-categories', data: { title: 'Blog Images' } },
    { collection: 'media-categories', data: { title: 'OG Images' } },
    { collection: 'media-categories', data: { title: 'Customer Logos' } },
    { collection: 'media-categories', data: { title: 'Team Photos' } },
    { collection: 'media-categories', data: { title: 'Background Textures' } },
    // Categories
    {
      collection: 'categories',
      data: {
        title: 'إدارة المطاعم',
        breadcrumbs: [{ label: 'إدارة المطاعم', url: '/restaurant-management' }],
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'إدارة المخزون',
        breadcrumbs: [{ label: 'إدارة المخزون', url: '/inventory-management' }],
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'تقارير المبيعات',
        breadcrumbs: [{ label: 'تقارير المبيعات', url: '/sales-reports' }],
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'إدارة الموظفين',
        breadcrumbs: [{ label: 'إدارة الموظفين', url: '/staff-management' }],
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'برامج نقاط البيع',
        breadcrumbs: [{ label: 'برامج نقاط البيع', url: '/pos-software' }],
      },
    },
    {
      collection: 'categories',
      data: {
        title: 'خدمة العملاء',
        breadcrumbs: [{ label: 'خدمة العملاء', url: '/customer-service' }],
      },
    },
  ]

  // 3. Run category creations one at a time and store results
  const createdCategories: (MediaCategory | Category)[] = []
  for (const op of categoryCreates) {
    payload.logger.info(
      `Creating ${op.collection} – ${op.data.title || op.data.slug || 'Untitled'}`,
    )
    if (op.collection === 'media-categories') {
      const createdDoc = await payload.create({
        collection: op.collection,
        data: op.data,
        req,
        depth: 0,
      })
      createdCategories.push(createdDoc)
    } else if (op.collection === 'categories') {
      const createdDoc = await payload.create({
        collection: op.collection,
        data: op.data,
        req,
        depth: 0,
      })
      createdCategories.push(createdDoc)
    }
  }
  // Find the 'App Icons' media category ID for later use
  const appIconsCategoryId = createdCategories.find(
    (cat) => 'slug' in cat && cat.slug === 'app-icon', // Use type guard
  )?.id

  payload.logger.info('— Seeding media sequentially...')

  // 4. Fetch files first (can be parallel)
  const mediaFileSources = [
    {
      url: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
      data: image1,
      key: 'image1',
    },
    {
      url: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
      data: image2,
      key: 'image2',
    },
    {
      url: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
      data: image2, // Using image2 data for post 3 as in original code
      key: 'image3',
    },
    { url: `${NEXT_PUBLIC_SERVER_URL}/marn-logo.png`, data: imageLogo, key: 'logo' },
    { url: `${NEXT_PUBLIC_SERVER_URL}/marn-placeholder.png`, data: imageHero1, key: 'hero1' },
    {
      url: `${NEXT_PUBLIC_SERVER_URL}/marn-placeholder-16x9.png`,
      data: image169,
      key: 'image169',
    },
    {
      url: `${NEXT_PUBLIC_SERVER_URL}/marn-placeholder-4x3.png`,
      data: image43,
      key: 'image43',
    },
    {
      url: `${NEXT_PUBLIC_SERVER_URL}/marn-placeholder-1x1.png`,
      data: imageSquare,
      key: 'imageSquare',
    },
  ]

  const fetchedFiles = await Promise.all(
    mediaFileSources.map((src) => fetchFileByURL(payload, src.url)), // Pass payload
  )

  // 5. Create media documents sequentially, storing results in a map
  const mediaDocs: { [key: string]: Media } = {}
  for (let i = 0; i < mediaFileSources.length; i++) {
    const source = mediaFileSources[i]
    const file = fetchedFiles[i]
    payload.logger.info(`Creating media – ${file.name}`)
    const createdMedia = await payload.create({
      collection: 'media',
      data: source.data,
      file: file,
      req,
      depth: 0,
    })
    mediaDocs[source.key] = createdMedia
  }

  // Update imageSquareDoc with its category
  if (mediaDocs.imageSquare && appIconsCategoryId) {
    await payload.update({
      id: mediaDocs.imageSquare.id,
      collection: 'media',
      data: {
        category: appIconsCategoryId,
      },
      req,
    })
    // Refresh the doc in our map if needed, though likely not necessary for seed script
    // mediaDocs.imageSquare = await payload.findByID({ collection: 'media', id: mediaDocs.imageSquare.id, req })
  }

  payload.logger.info('— Seeding solutions...')
  const solutionsSlugToIdMap = await seedSolutions(payload, { imageSquare: mediaDocs.imageSquare })

  payload.logger.info(`— Seeding apps sequentially...`)
  const appDataArray = Array.from({ length: 10 }).map((_, i) => {
    const appData = app({ imageSquare: mediaDocs.imageSquare })
    // Make each app unique
    appData.title = `App ${i + 1}`
    appData.name = `تطبيق ${i + 1}`
    appData.slug = `app-${i + 1}`
    appData.tagline = `${appData.tagline} - ${i + 1}`
    // Add new fields
    appData.companyName = `شركة ${i + 1}`
    appData.docsLink = {
      type: 'custom',
      newTab: false,
      url: `https://docs.example.com/app-${i + 1}`,
      label: `Documentation for App ${i + 1}`,
    }
    appData.email = `contact${i + 1}@example.com`
    appData.phone = `+1234567890${i}`
    appData.ecosystem = ['sell'] // Example value, can be randomized or set based on logic
    appData.categories = [] // Assuming no categories for simplicity, can be populated with actual category IDs
    return appData
  })

  const createdIntegrations: Integration[] = []
  for (const appData of appDataArray) {
    payload.logger.info(`Creating app – ${appData.title}`)
    const createdIntegration = (await payload.create({
      collection: 'integrations',
      depth: 0,
      data: appData,
      req,
    })) as Integration
    createdIntegrations.push(createdIntegration)
  }

  payload.logger.info('— Seeding case studies...')
  const caseStudiesDataArray = Array.from({ length: 6 }).map((_, i) => ({
    title: `دراسة حالة ${i + 1}: كيف حققنا النمو مع العميل`,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: `مقدمة تفصيلية حول دراسة الحالة رقم ${i + 1}. في هذا التحليل، نستعرض التحديات التي واجهها العميل وكيف ساهمت حلولنا المبتكرة في تحقيق نتائج ملموسة превосходя توقعاتهم الأولية. تم تطبيق استراتيجيات مخصصة لضمان أقصى استفادة من الموارد المتاحة وتحقيق نمو مستدام على المدى الطويل.`,
                format: '' as const,
                style: '',
              },
            ],
            direction: 'rtl' as const,
            format: '' as const,
            indent: 0,
          },
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: `القسم الثاني من المحتوى يشرح الخطوات العملية التي تم اتخاذها. وقد شمل ذلك تحليل البيانات، وتطوير المنتج، وإطلاق حملات تسويقية مستهدفة. كانت النتائج باهرة، حيث شهد العميل زيادة في المبيعات بنسبة ${(i + 1) * 7}% وتحسنًا ملحوظًا في تفاعل المستخدمين.`,
                format: '' as const,
                style: '',
              },
            ],
            direction: 'rtl' as const,
            format: '' as const,
            indent: 0,
          },
        ],
        direction: 'rtl' as const,
        format: '' as const,
        indent: 0,
        version: 1,
      },
    },
    industry: `صناعة التكنولوجيا والحلول الرقمية ${i + 1}`,
    useCase: `حالة استخدام متقدمة ${i + 1}`,
    featuredImage: mediaDocs.image169.id,
    stats: [
      {
        label: `زيادة في الإيرادات الفصلية رقم ${i + 1}`,
        value: (i + 1) * 12,
        isPercentage: true,
        isIncrease: true,
      },
      {
        label: `تحسين كفاءة التشغيل رقم ${i + 1}`,
        value: (i + 1) * 6,
        isPercentage: false,
        isIncrease: true,
      },
    ],
    featuredSolutions: Object.values(solutionsSlugToIdMap)
      .slice(i % 3, (i % 3) + (i % 2 === 0 ? 1 : 2))
      .map((id) => Number(id)),
    featuredIntegrations: createdIntegrations
      .slice(i % 5, (i % 5) + (i % 2 === 0 ? 1 : 2))
      .map((int) => Number(int.id)),
    layout: [],
    slug: `case-study-${i + 1}`,
  }))

  const createdCaseStudies: CaseStudy[] = []
  for (const caseStudyData of caseStudiesDataArray) {
    payload.logger.info(`Creating case study – ${caseStudyData.title}`)
    const caseStudy = (await payload.create({
      collection: 'case-studies',
      depth: 0,
      data: caseStudyData,
      req,
      locale: 'ar',
    })) as CaseStudy
    createdCaseStudies.push(caseStudy)
  }

  payload.logger.info(`— Seeding contact form...`)
  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
    req,
  })

  payload.logger.info(`— Seeding pages sequentially...`)
  const pagesData = [
    {
      locale: 'ar',
      data: home({
        heroImage: mediaDocs.hero1,
        metaImage: mediaDocs.image2,
        image169: mediaDocs.image169,
        image43: mediaDocs.image43,
        imageSquare: mediaDocs.imageSquare,
      }),
      key: 'home',
    },
    {
      locale: 'ar',
      data: contactPageData({ contactForm: contactForm }),
      key: 'contact',
    },
  ]

  const createdPages: { [key: string]: Page } = {}
  for (const pageInfo of pagesData) {
    payload.logger.info(`Creating page – ${pageInfo.key} (${pageInfo.locale})`)
    const page = await payload.create({
      collection: 'pages',
      depth: 0,
      locale: pageInfo.locale as 'ar' | 'en',
      data: pageInfo.data,
      req,
    })
    createdPages[pageInfo.key] = page
  }

  payload.logger.info(`— Seeding testimonials...`)
  const testimonialsDataArray = Array.from({ length: 10 }).map((_, i) => ({
    quote: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: `هذا هو اقتباس الشهادة للشركة ${i + 1}.`,
                format: '' as const,
                style: '',
              },
            ],
            direction: 'rtl' as const,
            format: '' as const,
            indent: 0,
          },
        ],
        direction: 'rtl' as const,
        format: '' as const,
        indent: 0,
        version: 1,
      },
    },
    company: `شركة ${i + 1}`,
    featuredImage: mediaDocs.image1.id, // Assuming image1 is suitable
    companyLogo: mediaDocs.logo.id, // Assuming logo is suitable
    authorInfo: {
      name: `المؤلف ${i + 1}`,
      title: `اللقب ${i + 1}`,
      avatar: mediaDocs.imageSquare.id, // Assuming imageSquare is suitable
    },
    caseStudy: {
      linkCaseStudy: createdCaseStudies[i % createdCaseStudies.length] ? true : false,
      linkedCaseStudy: createdCaseStudies[i % createdCaseStudies.length]?.id || null,
    },
    categories: [], // Assuming no categories for simplicity
    publishedAt: new Date().toISOString(),
  }))

  for (const testimonialData of testimonialsDataArray) {
    payload.logger.info(`Creating testimonial – ${testimonialData.company}`)
    await payload.create({
      collection: 'testimonials',
      depth: 0,
      data: testimonialData,
      req,
    })
  }

  payload.logger.info(`— Seeding changelog entries...`)
  const changelogDataArray = Array.from({ length: 10 }).map((_, i) => ({
    title: `Changelog Entry ${i + 1}`,
    date: new Date().toISOString(),
    version: `1.0.${i + 1}`,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [{ text: `This is a description for changelog entry ${i + 1}.` }],
          },
        ],
        direction: 'rtl' as const,
        format: '' as const,
        indent: 0,
        version: 1,
      },
    },
    categories: ['feature', 'improvement'] as (
      | 'bug-fix'
      | 'feature'
      | 'improvement'
      | 'security'
      | 'other'
    )[],
  }))

  for (const changelogData of changelogDataArray) {
    payload.logger.info(`Creating changelog entry – ${changelogData.title}`)
    await payload.create({
      collection: 'changelog',
      depth: 0,
      data: changelogData,
      req,
    })
  }

  payload.logger.info(`— Seeding globals sequentially...`)

  // Header Data (using solution IDs)
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
                { link: { type: 'reference', newTab: false, reference: { relationTo: 'solutions', value: solutionsSlugToIdMap['cashier'] as any }, label: 'الكاشير', description: 'تسجيل المبيعات بمرونة وسرعة على أي جهاز', icon: null } }, // prettier-ignore
                { link: { type: 'reference', newTab: false, reference: { relationTo: 'solutions', value: solutionsSlugToIdMap['paysync'] as any }, label: 'شاشة السداد', description: 'عرض الطلبات والدفع بشكل مباشر للعميل', icon: null } }, // prettier-ignore
                { link: { type: 'reference', newTab: false, reference: { relationTo: 'solutions', value: solutionsSlugToIdMap['kiosk'] as any }, label: 'الطلب الذاتي', description: 'خلي العملاء يطلبون بأنفسهم ويقل الضغط على الموظفين', icon: null } }, // prettier-ignore
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
  const footerData = {
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

  payload.logger.info('Updating global – header (ar)')
  await payload.updateGlobal({
    slug: 'header',
    locale: 'ar',
    data: headerData,
  })

  payload.logger.info('Updating global – footer')
  await payload.updateGlobal({
    slug: 'footer',
    data: footerData as any,
  })

  // Seed Features Showcase Page (New Addition)
  payload.logger.info('— Attempting to seed Features Showcase Page...')
  try {
    await seedFeaturesShowcasePage(
      payload,
      {
        image169: mediaDocs.image169,
        image43: mediaDocs.image43,
        imageSquare: mediaDocs.imageSquare,
        image1: mediaDocs.image1, // Assuming image1 is suitable for meta
        // Ensure all media needed by seedFeaturesShowcasePage is passed
      },
      demoAuthor,
    )
  } catch (error: any) {
    payload.logger.error(`Could not seed Features Showcase Page: ${error.message}`)
  }

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(payload: Payload, url: string): Promise<File> {
  payload.logger.info(`Fetching file from URL: ${url}`)
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    payload.logger.error(`Failed to fetch file from ${url}, status: ${res.status}`)
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()
  const filename = url.split('/').pop() || `file-${Date.now()}`
  const mimetype = `image/${url.split('.').pop()}`

  payload.logger.info(`Fetched file: ${filename} (${(data.byteLength / 1024).toFixed(2)} KB)`)

  return {
    name: filename,
    data: Buffer.from(data),
    mimetype: mimetype,
    size: data.byteLength,
  }
}
