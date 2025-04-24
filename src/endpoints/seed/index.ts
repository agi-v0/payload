import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'

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

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
  'testimonials',
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

    payload.create({
      collection: 'media-categories',
      data: {
        title: 'App Icons',
      },
    }),
    payload.create({
      collection: 'media-categories',
      data: {
        title: 'App Icons',
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
        title: 'App Icons',
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
  ])

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

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      locale: 'ar',
      data: {
        tabs: [
          {
            enableDirectLink: false,
            enableDropdown: true,
            descriptionLinks: [],
            navItems: [
              {
                style: 'list',
                defaultLink: {
                  link: {
                    type: 'custom',
                    newTab: false,

                    url: '/solutions/cashier',
                    label: 'الكاشير',
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
                        type: 'custom',
                        newTab: false,
                        url: '/solutions/cashier',
                        label: 'الكاشير',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/solutions/paysync',
                        label: 'شاشة السداد',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/solutions/kiosk',
                        label: 'الطلب الذاتي',
                      },
                    },
                  ],
                },
              },
              {
                style: 'list',
                defaultLink: {
                  link: {
                    type: 'custom',
                    newTab: false,

                    url: '/solutions/cashier',
                    label: 'الكاشير',
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
                        type: 'custom',
                        newTab: false,
                        url: '/solutions/orderstation',
                        label: 'محطة الطلبات',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/solutions/inventory',
                        label: 'المخزون',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/solutions/products',
                        label: 'المنتجات',
                      },
                    },
                  ],
                },
              },
              {
                style: 'list',

                defaultLink: {
                  link: {
                    type: 'custom',
                    newTab: false,

                    url: '/solutions/cashier',
                    label: 'الكاشير',
                  },
                  description: null,
                },

                listLinks: {
                  tag: 'إدارة',

                  links: [
                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/solutions/analytics',
                        label: 'التحليلات',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/solutions/branches',
                        label: 'الفروع',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/solutions/customers',
                        label: 'العملاء',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/solutions/accouting',
                        label: 'المحاسبة',
                      },
                    },
                  ],
                },
              },
            ],
            label: 'الحلول',
            description:
              'كل أدواتك في منظومة مرنة. استكشف حلول البيع، التشغيل، والإدارة المصممة لتلبية احتياجاتك.',
          },

          {
            enableDirectLink: false,
            enableDropdown: true,
            descriptionLinks: [],
            navItems: [
              {
                style: 'list',

                defaultLink: {
                  link: {
                    type: 'reference',
                    newTab: false,
                    url: null,
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
                        type: 'custom',
                        newTab: false,
                        url: '/restaurants',
                        label: 'للمطاعم',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/retail',
                        label: 'للبيع بالتجزئة',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/express-services',
                        label: 'للخدمات السريعة',
                      },
                    },
                  ],
                },
              },

              {
                style: 'list',

                defaultLink: {
                  link: {
                    type: 'reference',
                    newTab: false,
                    url: null,
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
                        type: 'custom',
                        newTab: false,
                        url: '/features/control',
                        label: 'للبساطة والتحكم',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/solutions/branches',
                        label: 'لتعدد الفروع',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/integrations',
                        label: 'للربط مع أدواتك',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/blog/increasing-profits-with-marnpos',
                        label: 'للزيادة أرباحك',
                      },
                    },
                  ],
                },
              },
            ],
            label: 'لماذا مرن',
            description:
              'ليش أصحاب المشاريع يختارون مرن؟ اكتشف قيمنا وكيف نسهّل عليك الشغل وتكبير مشروعك.',
          },

          {
            enableDirectLink: true,
            enableDropdown: true,
            descriptionLinks: [],
            navItems: [],
            label: 'التطبيقات',
            link: {
              type: 'custom',
              newTab: false,
              url: '/integrations',
            },
            description:
              'اربط مرن مع تطبيقات الدفع، التوصيل، والمحاسبة. سهّل شغلك وربط كل شيء ببعضه.',
          },
          {
            enableDirectLink: true,
            enableDropdown: true,
            descriptionLinks: [],
            navItems: [
              {
                style: 'list',

                defaultLink: {
                  link: {
                    type: 'reference',
                    newTab: false,
                    url: null,
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
                        type: 'custom',
                        newTab: false,
                        url: '/blog',
                        label: 'المدونة',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/customers',
                        label: 'قصص النجاح',
                      },
                    },
                  ],
                },
              },

              {
                style: 'list',

                defaultLink: {
                  link: {
                    type: 'reference',
                    newTab: false,
                    url: null,
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
                        type: 'custom',
                        newTab: false,
                        url: '/about',
                        label: 'عن مرن',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: '/contact-us',
                        label: 'تواصل معنا',
                      },
                    },

                    {
                      link: {
                        type: 'custom',
                        newTab: false,
                        url: 'https://marn.gitbook.io/marn-developers/',
                        label: 'المطورين',
                      },
                    },
                  ],
                },
              },
            ],
            label: 'الموارد',
            link: {
              type: 'custom',
              url: '/contact',
            },
            description:
              'كل ما تحتاج تعرفه عن مرن وأصحاب المشاريع اللي يستخدمونه—من مقالات ونصائح، إلى قصص وتجارب حقيقية، وحتى التواصل معنا',
          },
        ],
        cta: [
          {
            link: {
              type: 'custom',
              newTab: false,
              url: '/contact-us',
              label: 'تواصل معنا',
            },
          },
        ],
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        columns: [
          {
            label: 'Company',
            navItems: [
              {
                link: {
                  type: 'custom',
                  label: 'About Us',
                  url: '/about',
                },
              },
              {
                link: {
                  type: 'custom',
                  label: 'Blog',
                  url: '/posts',
                },
              },
              {
                link: {
                  type: 'custom',
                  label: 'Contact',
                  url: '/contact',
                },
              },
            ],
          },
          {
            label: 'Resources',
            navItems: [
              {
                link: {
                  type: 'custom',
                  label: 'Admin',
                  url: '/admin',
                },
              },
              {
                link: {
                  type: 'custom',
                  label: 'Source Code',
                  newTab: true,
                  url: 'https://github.com/payloadcms/payload/tree/main/templates/website',
                },
              },
              {
                link: {
                  type: 'custom',
                  label: 'Payload',
                  newTab: true,
                  url: 'https://payloadcms.com/',
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
