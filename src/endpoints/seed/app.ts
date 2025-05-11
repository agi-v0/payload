import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type AppArgs = {
  imageSquare: Media
}

export const app: (args: AppArgs) => RequiredDataFromCollectionSlug<'integrations'> = ({
  imageSquare,
}) => {
  return {
    title: 'Jahez',
    icon: imageSquare,
    name: 'جاهز',
    tagline: 'إدارة رقمية للقسائم والخصومات',
    overview: {
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
                text: 'تابع جميع الطلبات في الوقت الفعلي مع نظام إدارة الطلبات السهل الاستخدام لدينا، مما يضمن الدقة والكفاءة في تلبية طلبات العملاء.',
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

    link: {
      type: 'custom',
      newTab: null,
      url: '/',
      label: 'جاهز',
    },

    hero: {
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

    gallery: [],

    content: {
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
                text: '000',
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
    companyName: 'Jahez Company',
    docsLink: {
      type: 'custom',
      url: '/jahez-docs',
      label: 'Documentation',
    },
    email: 'contact@jahez.com',
    slug: 'app-slug',
  }
}
