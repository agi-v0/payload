import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'
import type { Header } from '@/payload-types'

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

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'apps',
  'media-categories',
  'posts',
  'forms',
  'form-submissions',
  'search',
  'testimonials',
  'solutions',
]
const globals: GlobalSlug[] = ['header', 'footer']

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
  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: {},
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

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

  payload.logger.info(`— Seeding categories...`)

  const categories = await Promise.all([
    payload.create({
      collection: 'media-categories',
      data: {
        title: 'App Icons',
        slug: 'app-icon',
      },
    }),
    payload.create({
      collection: 'media-categories',
      data: {
        title: 'Hero Images',
      },
    }),
    payload.create({
      collection: 'media-categories',
      data: {
        title: 'Feature Images',
      },
    }),
    payload.create({
      collection: 'media-categories',
      data: {
        title: 'Blog Images',
      },
    }),
    payload.create({
      collection: 'media-categories',
      data: {
        title: 'OG Images',
      },
    }),
    payload.create({
      collection: 'media-categories',
      data: {
        title: 'Customer Logos',
      },
    }),
    payload.create({
      collection: 'media-categories',
      data: {
        title: 'Team Photos',
      },
    }),
    payload.create({
      collection: 'media-categories',
      data: {
        title: 'Background Textures',
      },
    }),
    payload.create({
      collection: 'categories',
      data: {
        title: 'إدارة المطاعم',
        breadcrumbs: [
          {
            label: 'إدارة المطاعم',
            url: '/restaurant-management',
          },
        ],
      },
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'إدارة المخزون',
        breadcrumbs: [
          {
            label: 'إدارة المخزون',
            url: '/inventory-management',
          },
        ],
      },
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'تقارير المبيعات',
        breadcrumbs: [
          {
            label: 'تقارير المبيعات',
            url: '/sales-reports',
          },
        ],
      },
    }),
    payload.create({
      collection: 'categories',
      data: {
        title: 'إدارة الموظفين',
        breadcrumbs: [
          {
            label: 'إدارة الموظفين',
            url: '/staff-management',
          },
        ],
      },
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'برامج نقاط البيع',
        breadcrumbs: [
          {
            label: 'برامج نقاط البيع',
            url: '/pos-software',
          },
        ],
      },
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'خدمة العملاء',
        breadcrumbs: [
          {
            label: 'خدمة العملاء',
            url: '/customer-service',
          },
        ],
      },
    }),
  ])

  payload.logger.info(`— Seeding media...`)

  const [
    image1Buffer,
    image2Buffer,
    image3Buffer,
    logoBuffer,
    hero1Buffer,
    image169Buffer,
    image43Buffer,
    imageSquareBuffer,
  ] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    ),
    fetchFileByURL('http://localhost:3000/media/marn-logo.png'),
    fetchFileByURL('http://localhost:3000/media/marn-placeholder.png'),
    fetchFileByURL('http://localhost:3000/media/marn-placeholder-16x9.png'),
    fetchFileByURL('http://localhost:3000/media/marn-placeholder-4x3.png'),
    fetchFileByURL('http://localhost:3000/media/marn-placeholder-1x1.png'),
  ])

  const [
    demoAuthor,
    image1Doc,
    image2Doc,
    image3Doc,
    imageLogoDoc,
    imageHomeDoc,
    image169Doc,
    image43Doc,
    imageSquareDoc,
  ] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        email: 'demo-author@example.com',
        password: 'password',
      },
    }),
    payload.create({
      collection: 'media',
      data: image1,
      file: image1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image3Buffer,
    }),
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

  // Update imageSquareDoc with its category after creation
  await payload.update({
    id: imageSquareDoc.id,
    collection: 'media',
    data: {
      category: categories[0].id,
    },
  })

  payload.logger.info(`— Seeding posts...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedAt` and they will be in the expected order
  const post1Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post1({ heroImage: image1Doc, blockImage: image2Doc, author: demoAuthor }),
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post2({ heroImage: image2Doc, blockImage: image3Doc, author: demoAuthor }),
  })

  const post3Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post3({ heroImage: image3Doc, blockImage: image1Doc, author: demoAuthor }),
  })

  // update each post with related posts
  await payload.update({
    id: post1Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post2Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post2Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post3Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post2Doc.id],
    },
  })

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Seeding apps...`)

  const appPromises = Array.from({ length: 10 }).map((_, i) => {
    const appData = app({ imageSquare: imageSquareDoc })
    // Make each app unique
    appData.title = `App ${i + 1}`
    appData.name = `تطبيق ${i + 1}`
    appData.slug = `app-${i + 1}`
    // Optionally, slightly vary other fields like tagline or overview if needed
    appData.tagline = `${appData.tagline} - ${i + 1}`

    return payload.create({
      collection: 'apps',
      depth: 0,
      data: appData,
    })
  })

  await Promise.all(appPromises)

  payload.logger.info(`— Seeding solutions...`)
  const solutionsSlugToIdMap = await seedSolutions(payload, { imageSquare: imageSquareDoc })

  payload.logger.info(`— Seeding pages...`)

  const [_, contactPage] = await Promise.all([
    payload.create({
      collection: 'pages',
      depth: 0,
      data: home({
        heroImage: imageHomeDoc,
        metaImage: image2Doc,
        image169: image169Doc,
        image43: image43Doc,
        imageSquare: imageSquareDoc,
      }),
      locale: 'ar',
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: contactPageData({ contactForm: contactForm }),
      locale: 'ar',
    }),
  ])

  payload.logger.info(`— Seeding testimonials...`)

  await seedTestimonials(payload, { placeholder: imageHomeDoc, logo: imageLogoDoc })

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

            defaultLink: {
              link: {
                type: 'reference' as const,
                newTab: false,
                url: null,
                icon: null,
                label: '',
              },
              description: null,
            },

            featuredLink: {
              tag: null,
              label: null,

              links: [],
            },

            listLinks: {
              tag: 'بيع',

              links: [
                {
                  link: {
                    type: 'reference' as const,
                    newTab: false,
                    reference: {
                      relationTo: 'solutions' as const,
                      value: solutionsSlugToIdMap['cashier'] as any,
                    },
                    label: 'الكاشير',
                    description: 'تسجيل المبيعات بمرونة وسرعة على أي جهاز',
                    icon: null,
                  },
                },

                {
                  link: {
                    type: 'reference' as const,
                    newTab: false,
                    reference: {
                      relationTo: 'solutions' as const,
                      value: solutionsSlugToIdMap['paysync'] as any,
                    },
                    label: 'شاشة السداد',
                    description: 'عرض الطلبات والدفع بشكل مباشر للعميل',
                    icon: null,
                  },
                },

                {
                  link: {
                    type: 'reference' as const,
                    newTab: false,
                    reference: {
                      relationTo: 'solutions' as const,
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

            defaultLink: {
              link: {
                type: 'reference' as const,
                newTab: false,
                url: null,
                icon: null,
                label: '',
              },
              description: null,
            },

            featuredLink: {
              tag: null,
              label: null,

              links: [],
            },

            listLinks: {
              tag: 'تشغيل',

              links: [
                {
                  link: {
                    type: 'reference' as const,
                    newTab: false,
                    reference: {
                      relationTo: 'solutions' as const,
                      value: solutionsSlugToIdMap['orderstation'] as any,
                    },
                    label: 'محطة الطلبات',
                    description: ' إدارة جميع الطلبات من مكان واحد – حضوري وتوصيل',
                    icon: null,
                  },
                },

                {
                  link: {
                    type: 'reference' as const,
                    newTab: false,
                    reference: {
                      relationTo: 'solutions' as const,
                      value: solutionsSlugToIdMap['products'] as any,
                    },
                    label: 'المنتجات',
                    description: 'نظّم منتجاتك، الأسعار، والعروض بسهولة',
                    icon: null,
                  },
                },

                {
                  link: {
                    type: 'reference' as const,
                    newTab: false,
                    reference: {
                      relationTo: 'solutions' as const,
                      value: solutionsSlugToIdMap['inventory'] as any,
                    },
                    label: 'المخزون',
                    description: 'تابع الكميات وتفادى النقص أو الهدر تلقائيًا',
                    icon: null,
                  },
                },
              ],
            },
          },

          {
            style: 'list' as const,

            defaultLink: {
              link: {
                type: 'reference' as const,
                newTab: false,
                url: null,
                icon: null,
                label: '',
              },
              description: null,
            },

            featuredLink: {
              tag: null,
              label: null,

              links: [],
            },

            listLinks: {
              tag: 'إدارة',

              links: [
                {
                  link: {
                    type: 'reference' as const,
                    newTab: false,
                    reference: {
                      relationTo: 'solutions' as const,
                      value: solutionsSlugToIdMap['analytics'] as any,
                    },
                    label: 'التحليلات',
                    description: 'تقارير فورية عن المبيعات والأرباح تساعدك تتخذ قرارات',
                    icon: null,
                  },
                },

                {
                  link: {
                    type: 'reference' as const,
                    newTab: false,
                    reference: {
                      relationTo: 'solutions' as const,
                      value: solutionsSlugToIdMap['branches'] as any,
                    },
                    label: 'الفروع',
                    description: 'راقب كل فروعك وتقاريرها من نفس اللوحة',
                    icon: null,
                  },
                },

                {
                  link: {
                    type: 'reference' as const,
                    newTab: false,
                    reference: {
                      relationTo: 'solutions' as const,
                      value: solutionsSlugToIdMap['customers'] as any,
                    },
                    label: 'العملاء',
                    description: 'احفظ بيانات عملاءك وفعّل برامج الولاء',
                    icon: null,
                  },
                },

                {
                  link: {
                    type: 'reference' as const,
                    newTab: false,
                    reference: {
                      relationTo: 'solutions' as const,
                      value: solutionsSlugToIdMap['accouting'] as any,
                    },
                    label: 'المالية',
                    description: 'تتبّع المصاريف، الضرائب، والتدفق المالي بسهولة',
                    icon: null,
                  },
                },
              ],
            },
          },
        ],
        label: 'الحلول',

        link: {
          type: 'reference' as const,
          newTab: null,
          url: null,
        },
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

            defaultLink: {
              link: {
                type: 'reference' as const,
                newTab: false,
                url: null,
                icon: null,
                label: '',
              },
              description: null,
            },

            featuredLink: {
              tag: null,
              label: null,

              links: [],
            },

            listLinks: {
              tag: 'الأنشطة',

              links: [
                {
                  link: {
                    type: 'custom' as const,
                    newTab: false,
                    url: '/restaurants',
                    label: 'للمطاعم',
                    description: null,
                    icon: 'utensils',
                  },
                },

                {
                  link: {
                    type: 'custom' as const,
                    newTab: false,
                    url: '/retail',
                    label: 'للبيع بالتجزئة',
                    description: null,
                    icon: 'scan-barcode',
                  },
                },

                {
                  link: {
                    type: 'custom' as const,
                    newTab: false,
                    url: '/express-services',
                    label: 'للخدمات السريعة',
                    description: null,
                    icon: 'fuel',
                  },
                },
              ],
            },
          },

          {
            style: 'list' as const,

            defaultLink: {
              link: {
                type: 'reference' as const,
                newTab: false,
                url: null,
                icon: null,
                label: '',
              },
              description: null,
            },

            featuredLink: {
              tag: null,
              label: null,

              links: [],
            },

            listLinks: {
              tag: 'الميزات',

              links: [
                {
                  link: {
                    type: 'custom' as const,
                    newTab: false,
                    url: '/features/control',
                    label: 'للبساطة والتحكم',
                    description: null,
                    icon: 'package-open',
                  },
                },

                {
                  link: {
                    type: 'custom' as const,
                    newTab: false,
                    url: '/solutions/branches',
                    label: 'لتعدد الفروع',
                    description: null,
                    icon: 'map-pin',
                  },
                },

                {
                  link: {
                    type: 'custom' as const,
                    newTab: false,
                    url: '/integrations',
                    label: 'للربط مع أدواتك',
                    description: null,
                    icon: 'puzzle',
                  },
                },

                {
                  link: {
                    type: 'custom' as const,
                    newTab: false,
                    url: '/blog/increasing-profits-with-marnpos',
                    label: 'للزيادة أرباحك',
                    description: null,
                    icon: 'bar-chart-big',
                  },
                },
              ],
            },
          },
        ],
        label: 'لماذا مرن',

        link: {
          type: 'reference' as const,
          newTab: null,
          url: null,
        },
        description:
          'ليش أصحاب المشاريع يختارون مرن؟ اكتشف قيمنا وكيف نسهّل عليك الشغل وتكبير مشروعك.',
      },

      {
        enableDirectLink: true,
        enableDropdown: false,

        descriptionLinks: [],

        navItems: [],
        label: 'التطبيقات',

        link: {
          type: 'custom' as const,
          newTab: false,
          url: '/integrations',
        },
        description: 'اربط مرن مع تطبيقات الدفع، التوصيل، والمحاسبة. سهّل شغلك وربط كل شيء ببعضه.',
      },

      {
        enableDirectLink: true,
        enableDropdown: true,

        descriptionLinks: [],

        navItems: [
          {
            style: 'list' as const,

            defaultLink: {
              link: {
                type: 'reference' as const,
                newTab: false,
                url: null,
                icon: null,
                label: '',
              },
              description: null,
            },

            featuredLink: {
              tag: null,
              label: null,

              links: [],
            },

            listLinks: {
              tag: 'منشوراتنا',

              links: [
                {
                  link: {
                    type: 'custom' as const,
                    newTab: false,
                    url: '/blog',
                    label: 'المدونة',
                    description: null,
                    icon: 'newspaper',
                  },
                },

                {
                  link: {
                    type: 'custom' as const,
                    newTab: false,
                    url: '/customers',
                    label: 'قصص النجاح',
                    description: null,
                    icon: 'trophy',
                  },
                },
              ],
            },
          },

          {
            style: 'list' as const,

            defaultLink: {
              link: {
                type: 'reference' as const,
                newTab: false,
                url: null,
                icon: null,
                label: '',
              },
              description: null,
            },

            featuredLink: {
              tag: null,
              label: null,

              links: [],
            },

            listLinks: {
              tag: 'عن مرن',

              links: [
                {
                  link: {
                    type: 'custom' as const,
                    newTab: false,
                    url: '/about',
                    label: 'عن مرن',
                    description: null,
                    icon: 'marn-icon',
                  },
                },

                {
                  link: {
                    type: 'custom' as const,
                    newTab: false,
                    url: '/contact-us',
                    label: 'تواصل معنا',
                    description: null,
                    icon: 'phone',
                  },
                },

                {
                  link: {
                    type: 'custom' as const,
                    newTab: false,
                    url: 'https://marn.gitbook.io/marn-developers/',
                    label: 'المطورين',
                    description: null,
                    icon: 'code',
                  },
                },
              ],
            },
          },
        ],
        label: 'الموارد',

        link: {
          type: 'custom' as const,
          newTab: null,
          url: '/contact',
        },
        description:
          'كل ما تحتاج تعرفه عن مرن وأصحاب المشاريع اللي يستخدمونه—من مقالات ونصائح، إلى قصص وتجارب حقيقية، وحتى التواصل معنا',
      },
    ],

    cta: [
      {
        link: {
          type: 'custom' as const,
          newTab: null,
          url: '/',
          label: 'دخول التاجر',
          color: 'neutral',
          variant: 'secondary',
        },
      },

      {
        link: {
          type: 'custom' as const,
          newTab: false,
          url: '/contact-us',
          label: 'تواصل معنا',
          color: 'neutral',
          variant: 'primary',
        },
      },
    ],
  }

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      locale: 'ar',
      data: headerData,
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        columns: [
          {
            label: 'الحلول',
            navItems: [
              {
                link: {
                  type: 'custom' as const,
                  newTab: false,
                  url: '/solutions/cashier',
                  label: 'الكاشير',
                },
              },
              {
                link: {
                  type: 'custom' as const,
                  newTab: false,
                  url: '/solutions/paysync',
                  label: 'شاشة السداد',
                },
              },
              {
                link: {
                  type: 'custom' as const,
                  newTab: false,
                  url: '/solutions/kiosk',
                  label: 'الطلب الذاتي',
                },
              },
              {
                link: {
                  type: 'custom' as const,
                  newTab: false,
                  url: '/solutions/orderstation',
                  label: 'محطة الطلبات',
                },
              },

              {
                link: {
                  type: 'custom' as const,
                  newTab: false,
                  url: '/solutions/products',
                  label: 'المنتجات',
                },
              },

              {
                link: {
                  type: 'custom' as const,
                  newTab: false,
                  url: '/solutions/inventory',
                  label: 'المخزون',
                },
              },
              {
                link: {
                  type: 'custom' as const,
                  newTab: false,
                  url: '/solutions/analytics',
                  label: 'التحليلات',
                },
              },

              {
                link: {
                  type: 'custom' as const,
                  newTab: false,
                  url: '/solutions/branches',
                  label: 'الفروع',
                },
              },

              {
                link: {
                  type: 'custom' as const,
                  newTab: false,
                  url: '/solutions/customers',
                  label: 'العملاء',
                },
              },

              {
                link: {
                  type: 'custom' as const,
                  newTab: false,
                  url: '/solutions/accouting',
                  label: 'المالية',
                },
              },
            ],
          },
        ],
      },
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
