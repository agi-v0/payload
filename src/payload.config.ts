import { s3Storage } from '@payloadcms/storage-s3'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { resendAdapter } from '@payloadcms/email-resend'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

//collections
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { AppIcons } from './collections/AppIcons'
import { Pages } from './collections/Pages'
import { Solutions } from './collections/Solutions'
import { Integrations } from './collections/Integrations'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { MediaCategories } from './collections/MediaCategories'
import { Testimonials } from './collections/Testimonials'
import { Changelog } from './collections/Changelog'
import { FAQ } from './collections/FAQ'
import { CaseStudies } from './collections/CaseStudies'

//blocks
import { Archive } from '@/blocks/ArchiveBlock/config'
import { FeaturedAppsBlock } from '@/blocks/FeaturedApps/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { Content } from '@/blocks/Content/config'
import { FeaturesBlock } from '@/blocks/Features/config'
import { FormBlock } from '@/blocks/Form/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { StyledList } from '@/blocks/StyledList/config'
import { TestimonialsBlock } from '@/blocks/Testimonials/config'
import { GalleryBlock } from '@/blocks/Gallery/config'
import { FaqBlock } from '@/blocks/FAQ/config'
import { en } from '@payloadcms/translations/languages/en'
import { ar } from '@payloadcms/translations/languages/ar'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: ['@/components/BeforeDashboard'],
      graphics: {
        Icon: '@/components/Graphics/Icon',
        Logo: '@/components/Graphics/Logo',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },

    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
    meta: {
      titleSuffix: 'Marn POS',
      title: 'Marn POS Admin Panel',
      description:
        'Easily manage your Marn POS website with our user-friendly admin panel, developed by Studio Valence.',
      openGraph: {
        title: 'Marn POS Admin Panel',
        description:
          'Easily manage your Marn POS website with our user-friendly admin panel, developed by Studio Valence.',
        siteName: 'Marn POS Admin Panel',
        images: [
          {
            url: '',
          },
        ],
      },
      icons: [
        {
          url: `/admin-favicon.png`,
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16 32x32 64x64',
          fetchPriority: 'high',
        },
        {
          url: `/admin-favicon.png`,
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16 32x32 64x64',
          fetchPriority: 'high',
          media: '(prefers-color-scheme: dark)',
        },
      ],
    },
    user: Users.slug,
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    // push: false, // disable push mode
  }),
  blocks: [
    Archive,
    CallToAction,
    // Content,
    FaqBlock,
    FeaturesBlock,
    FeaturedAppsBlock,
    GalleryBlock,
    FormBlock,
    TestimonialsBlock,

    MediaBlock,
    StyledList,
  ],
  collections: [
    Pages,
    Posts,
    Solutions,
    Integrations,
    Media,
    Testimonials,
    CaseStudies,
    Categories,
    MediaCategories,
    FAQ,
    AppIcons,
    Changelog,
    Users,
  ],
  cors: [getServerSideURL()].filter(Boolean),
  editor: defaultLexical,
  email: resendAdapter({
    defaultFromAddress: process.env.RESEND_EMAIL || '',
    defaultFromName: 'Payload CMS',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  i18n: {
    supportedLanguages: { en, ar },
  },
  localization: {
    locales: [
      {
        label: {
          en: 'English',
          ar: 'الإنجليزية',
        },
        code: 'en',
      },
      {
        label: {
          en: 'Arabic',
          ar: 'العربية',
        },
        code: 'ar',
        // opt-in to setting default text-alignment on Input fields to rtl (right-to-left)
        // when current locale is rtl
        rtl: true,
      },
    ],
    defaultLocale: 'ar', // required
    fallback: true, // defaults to true
  },
  globals: [Header, Footer],
  plugins: [
    ...plugins,
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        },
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        forcePathStyle: true, // Important for using Supabase
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
      // enabled: true,
      enabled: process.env.NODE_ENV === 'production', // Use in production only
    }),
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
