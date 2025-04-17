import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    title: 'Home',
    hero: {
      type: 'hero01',
      richText: {
        root: {
          type: 'root',
          format: '',
          indent: 0,
          version: 1,

          children: [
            {
              tag: 'h1',
              type: 'heading',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'زهقت من فوضى الطلبات؟',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'rtl',
            },

            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'نظام كاشير حديث يرتب عملك بسهولة وبسعر يناسبك—مصمم للمطاعم ومحلات التجزئة في السعودية',
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
      links: [
        {
          link: {
            type: 'custom',
            newTab: null,
            url: 'google.com',
            label: 'تواصل معنا',
            color: 'brand',
            variant: 'primary',
          },
          id: '6800e854462e705cdaf2a9ce',
        },
      ],
      supportingText: null,
      logosHeadline: null,
      logos: [],
      media: heroImage.id,
      badge: {
        label: null,
        color: 'blue',
        icon: null,
        icon_dir: null,
      },
    },

    layout: [
      {
        id: '6800e695462e705cdaf2a9c6',
        blockName: null,

        columns: [
          {
            id: '6800e6a8462e705cdaf2a9c8',
            size: 'oneThird',

            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    tag: 'h4',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'سهل زي السلام',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'rtl',
                  },

                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'تتعلم عليه بسرعة وتستخدمه بدون تعقيد',
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
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: null,
              color: 'brand',
              variant: 'primary',
            },
          },

          {
            id: '6800e6d9462e705cdaf2a9ca',
            size: 'oneThird',

            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    tag: 'h4',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'يركب على كيفك',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'rtl',
                  },

                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'يتكيف مع مطعمك أو محلك مهما كان شغلك',
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
            enableLink: null,

            links: [
              {
                link: {
                  type: 'custom',
                  newTab: null,
                  url: 'google.com',
                  label: 'تواصل معنا',
                  color: 'brand',
                  variant: 'primary',
                },
              },
            ],
          },

          {
            id: '6800e6f2462e705cdaf2a9cc',
            size: 'oneThird',

            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    tag: 'h4',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'سعره زين',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'rtl',
                  },

                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'ما يكسر ميزانيتك ويعطيك قيمة حقيقية',
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
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: null,
              color: 'brand',
              variant: 'primary',
            },
          },
        ],
        blockType: 'content',

        blockHeader: {
          type: 'start',

          badge: {
            label: null,
            color: 'blue',
            icon: null,
            icon_dir: null,
          },

          headerText: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  tag: 'h2',
                  type: 'heading',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'ليش تختار مرن؟',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'rtl',
                },
              ],
              direction: 'rtl',
            },
          },

          links: [],
        },
      },
    ],

    meta: {
      title: null,
      image: null,
      description: null,
    },
    slug: 'home',
    _status: 'published',
  }
}
