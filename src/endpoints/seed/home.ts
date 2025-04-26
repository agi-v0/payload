import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
  image169: Media
  image43: Media
  imageSquare: Media
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
  image169,
  image43,
  imageSquare,
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
      media: image169.id,
      badge: {
        label: null,
        color: 'blue',
        icon: null,
        icon_position: null,
      },
    },

    layout: [
      {
        blockType: 'features',
        layout: '02',
        blockImage: image169.id,
        blockName: null,

        columns: [
          {
            size: 'full',
            appReference: null,
            icon: null,
            tabLabel: null,
            enableBadge: false,
            enableCta: false,
            image: image43.id,
            content: {
              title: 'استخدمه عند الكاونتر، أو كمحطة متنقلة في المحل—الكاشير يتكيف مع مشروعك',
              copy: 'توافق الأجهزة المتعددة يتيح لك أخذ الطلبات سواء أثناء التنقل أو من على الطاولة.',
            },
            badge: {
              label: null,
              color: 'blue',
              icon: null,
              icon_position: 'flex-row',
            },
            link: {
              type: 'custom',
              newTab: null,
              url: '/',
              label: 'معرفة المزيد',
            },
          },

          {
            size: 'half',
            appReference: null,
            image: image43.id,
            icon: null,
            tabLabel: null,
            enableBadge: false,
            enableCta: false,
            content: {
              title: 'الربط مع 20+ تطبيق يعزز عملياتك',
              copy: 'ادمج نظامنا مع تطبيقات التوصيل والأنظمة الأخرى لسهولة إدارة أعمالك وشحنها بإمكانيات إضافية.',
            },
            badge: {
              label: null,
              color: 'blue',
              icon: null,
              icon_position: 'flex-row',
            },
            link: {
              type: 'custom',
              newTab: null,
              url: '/',
              label: 'معرفة المزيد',
            },
          },

          {
            size: 'half',
            appReference: null,
            image: image43.id,
            icon: null,
            tabLabel: null,
            enableBadge: null,
            enableCta: null,
            content: {
              title: 'استقبال المدفوعات بطرق متعددة بسلاسة',
              copy: 'يقبل النقد أو البطاقات، ويحافظ على سرعة المعاملات بدون توقف.',
            },
            badge: {
              label: null,
              color: 'blue',
              icon: null,
              icon_position: 'flex-row',
            },
            link: {
              type: 'custom',
              newTab: null,
              url: '/',
              label: 'معرفة المزيد',
            },
          },

          {
            size: 'twoThirds',
            appReference: null,
            image: image43.id,
            icon: null,
            tabLabel: null,
            enableBadge: null,
            enableCta: null,
            content: {
              title: 'تابع مبيعاتك بدقة مع تقارير مفصلة وتحليلات',
              copy: 'كل بيعة أو استرداد أو خصم يُسجل لحظة حدوثه، لتعرف الحصيلة اليومية بدقة—لا تخمين، فقط أرقام واضحة.',
            },
            badge: {
              label: null,
              color: 'blue',
              icon: null,
              icon_position: 'flex-row',
            },
            link: {
              type: 'custom',
              newTab: null,
              url: '/',
              label: 'معرفة المزيد',
            },
          },

          {
            size: 'oneThird',
            appReference: null,
            image: image43.id,
            icon: null,
            tabLabel: null,
            enableBadge: null,
            enableCta: null,
            content: {
              title: 'تواصل ذكي مع العملاء',
              copy: 'اجمع معلومات قيمة عن عملائك لتعزيز استراتيجيات التسويق والعروض المخصصة.',
            },
            badge: {
              label: null,
              color: 'blue',
              icon: null,
              icon_position: 'flex-row',
            },
            link: {
              type: 'custom',
              newTab: null,
              url: '/',
              label: 'معرفة المزيد',
            },
          },
        ],

        blockHeader: {
          type: 'center',

          badge: {
            label: null,
            color: 'blue',
            icon: null,
            icon_position: 'flex-row',
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
                      text: 'منظومة مصممة لتلبية احتياجاتك',
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
                      text: 'نظام نقاط بيع وإدارة عمليات تشغيلية مصمم ليناسب احتياجات النوعية للمطاعم والأنشطة التجارية المختلفة.',
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
                url: '/',
                label: 'تواصل معنا',
                color: 'neutral',
                variant: 'primary',
              },
            },

            {
              link: {
                type: 'custom',
                newTab: null,
                url: '/',
                label: 'تعرف المزيد',
                color: 'neutral',
                variant: 'ghost',
              },
            },
          ],
        },
      },
    ],

    meta: {
      title: null,
      image: image169.id,
      description: null,
    },
    slug: 'home',
    _status: 'published',
  }
}
