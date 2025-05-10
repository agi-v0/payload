import type { Payload } from 'payload'
import type {
  Page,
  FeaturesBlock,
  Media,
  User,
  // RichText, // Removed as it's not a direct export
  Solution,
  Integration,
  Post,
} from '@/payload-types'

// Helper to generate basic Lexical content that matches RichText field type
// Now accepts an array of text elements with types (h2, p)
interface TextElement {
  type: 'h2' | 'h3' | 'h4' | 'p' // Add other heading levels or types if needed
  text: string
  direction?: 'ltr' | 'rtl' | null | undefined
}

const generateLexicalContent = (elements: TextElement[]): any => {
  const children = elements.map((element) => {
    const textNode = {
      detail: 0,
      format: 0,
      mode: 'normal',
      style: '',
      text: element.text,
      type: 'text',
      version: 1,
    }

    let nodeType = 'paragraph'
    let headingTag: string | undefined

    switch (element.type) {
      case 'h2':
        nodeType = 'heading'
        headingTag = 'h2'
        break
      case 'h3':
        nodeType = 'heading'
        headingTag = 'h3'
        break
      case 'h4':
        nodeType = 'heading'
        headingTag = 'h4'
        break
      case 'p':
      default:
        nodeType = 'paragraph'
        break
    }

    const paragraphNode: any = {
      children: [textNode],
      direction: element.direction || 'rtl', // Default to RTL, can be overridden
      format: '',
      indent: 0,
      type: nodeType,
      version: 1,
    }
    if (headingTag) {
      paragraphNode.tag = headingTag
    }
    return paragraphNode
  })

  return {
    root: {
      type: 'root',
      children,
      direction: elements[0]?.direction || 'rtl', // Default root direction to RTL or first element's direction
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

// Helper to pick an icon
let iconIndex = 0
const sampleIcons = [
  'activity',
  'atom',
  'audio-lines',
  'archive',
  'airplay',
  'banknote',
  'book-check',
]
const getNextIcon = (): string => {
  const icon = sampleIcons[iconIndex % sampleIcons.length]
  iconIndex++
  return icon
}

// More precise link type based on typical Payload structure
// This will likely need to be identical to the Link type used in payload-types.ts
// For now, using a structure that is common. If errors persist, this needs to match payload-types.ts Link exactly.
type CommonPayloadLink = {
  type?: ('reference' | 'custom') | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts' | 'solutions' | 'integrations' // Add all valid relationTo targets
    value: string | number | Page | Post | Solution | Integration // Or the actual related document type
  } | null
  url?: string | null
  label: string // Label is often required
  icon?: string | null
  appearance?: string | null // if your link field has appearance
  variant?: string | null // if your link field has variants
  color?: string | null // if your link field has colors
}

export const seedFeaturesShowcasePage = async (
  payload: Payload,
  media: {
    image169: Media
    image43: Media
    imageSquare: Media
    image1: Media // Used for meta image
  },
  demoAuthor: User,
): Promise<Page | null> => {
  payload.logger.info('— Seeding Features Showcase Page (Arabic)')

  const layouts: FeaturesBlock['layout'][] = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
  ]

  const featuresBlocks: Partial<FeaturesBlock>[] = []

  const arabicFeatureTitles = [
    'إدارة المخزون بكفاءة',
    'تقارير مبيعات مفصلة',
    'واجهة سهلة الاستخدام',
    'دعم فني سريع ومتجاوب',
    'التكامل مع الأنظمة الأخرى',
    'أمان عالي للبيانات',
    'برامج ولاء العملاء',
    'الوصول السحابي للنظام',
  ]

  const arabicFeatureSubtitles = [
    'تابع مخزونك بدقة وتجنب النقص أو الفائض.',
    'احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.',
    'تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.',
    'فريق دعمنا جاهز لمساعدتك في أي وقت.',
    'اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.',
    'نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.',
    'عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.',
    'أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.',
  ]

  const arabicFeatureLongSubtitlesForLayout04 = [
    'تابع مخزونك بدقة وتجنب النقص أو الفائض. يوفر نظامنا تحديثات آنية لمستويات المخزون عبر جميع الفروع، مع تنبيهات ذكية للمنتجات منخفضة المخزون وإمكانية إجراء جرد شامل بسهولة فائقة، مما يمكنك من اتخاذ قرارات شراء مستنيرة وتحسين دورة رأس المال بشكل فعال.',
    'احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل. يقدم النظام لوحات معلومات تفاعلية وتقارير قابلة للتخصيص بالكامل، تغطي كل جانب من جوانب عمليات البيع، بما في ذلك أداء المنتجات، سلوك العملاء، وكفاءة الموظفين، مما يساعدك على تحديد الاتجاهات واستغلال الفرص الجديدة.',
    'تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا. تم تصميم واجهة المستخدم بعناية لتكون بديهية وسريعة الاستجابة، مما يقلل من وقت تدريب الموظفين الجدد ويزيد من كفاءتهم التشغيلية. يدعم النظام تخصيص الواجهة لتناسب احتياجات عملك الفريدة.',
    'فريق دعمنا الفني المتخصص جاهز لمساعدتك في أي وقت، على مدار الساعة. سواء كنت بحاجة إلى مساعدة في الإعداد الأولي، أو لديك استفسارات تشغيلية، أو واجهت تحديًا تقنيًا، يمكنك الاعتماد على خبرائنا لتقديم حلول سريعة وفعالة لضمان استمرارية أعمالك دون انقطاع.',
  ]

  const sizesForLayout02: Array<NonNullable<FeaturesBlock['columns']>[0]['size']> = [
    'full',
    'half',
    'half',
    'oneThird',
    'twoThirds',
    'oneThird',
    'oneThird',
    'oneThird',
  ]

  for (const layout of layouts) {
    const headerTitleText = `ميزات النظام (${layout}) - ${arabicFeatureTitles[featuresBlocks.length % arabicFeatureTitles.length]}`
    const headerDescriptionText =
      arabicFeatureSubtitles[featuresBlocks.length % arabicFeatureSubtitles.length]

    const blockHeaderData: FeaturesBlock['blockHeader'] = {
      type: 'center',
      badge: { type: 'label', label: `Features ${layout}` } as any,
      headerText: generateLexicalContent([
        { type: 'h2', text: headerTitleText, direction: 'rtl' },
        { type: 'p', text: headerDescriptionText, direction: 'rtl' },
      ]),
      links: [],
    }

    const block: Partial<FeaturesBlock> = {
      blockType: 'features',
      layout: layout,
      blockHeader: blockHeaderData,
      blockImage: ['04', '06', '07'].includes(layout) ? media.image169.id : undefined,
      columns: [],
    }

    if (['14', '15', '16', '17'].includes(layout)) {
      block.CTALabel = `اكتشف المزيد عن الميزة ${layout}`
      block.link = {
        type: 'custom',
        url: `/learn-more/${layout}`,
        label: `تفاصيل الميزة ${layout}`,
        newTab: false,
      } as any
    }

    let numCols = 1
    if (layout === '02') {
      numCols = sizesForLayout02.length
    } else if (['01', '08', '09', '10', '11', '12', '13'].includes(layout)) {
      numCols = 3
    } else if (layout === '03') {
      numCols = 3
    } else if (layout === '04') {
      numCols = 4
    } else if (layout === '05') {
      numCols = 2
    } else if (['06', '07'].includes(layout)) {
      numCols = 4
    } else if (['14', '15'].includes(layout)) {
      numCols = 3
    } else if (['16', '17'].includes(layout)) {
      numCols = 4
    }

    const currentBlockColumns: NonNullable<FeaturesBlock['columns']> = []

    for (let i = 0; i < numCols; i++) {
      const colTitle =
        arabicFeatureTitles[(featuresBlocks.length * numCols + i) % arabicFeatureTitles.length]
      const colSubtitle =
        layout === '04'
          ? arabicFeatureLongSubtitlesForLayout04[i % arabicFeatureLongSubtitlesForLayout04.length]
          : arabicFeatureSubtitles[
              (featuresBlocks.length * numCols + i) % arabicFeatureSubtitles.length
            ]

      let columnSize: NonNullable<FeaturesBlock['columns']>[0]['size'] = undefined
      if (layout === '02') {
        columnSize = sizesForLayout02[i]
      } else if (layout === '03') {
        if (i === 0) {
          columnSize = 'full'
        } else {
          columnSize = 'half'
        }
      } else if (layout === '04') {
        columnSize = 'half'
      } else if (['01', '05'].includes(layout)) {
        columnSize = 'half'
      }

      const column: Partial<NonNullable<FeaturesBlock['columns']>[0]> = {
        id: `col-${layout}-${i}`,
        size: columnSize,
        appReference: layout === '01' ? undefined : undefined,
        image: [
          '01',
          '02',
          '03',
          '04',
          '05',
          '08',
          '09',
          '10',
          '11',
          '14',
          '15',
          '16',
          '17',
        ].includes(layout)
          ? media.image43.id
          : undefined,
        tabLabel: layout === '08' ? `تبويب ${i + 1}` : undefined,
        icon: ['06', '07', '09', '11', '12', '13'].includes(layout) ? getNextIcon() : undefined,
        content: !['01', '03', '04', '05'].includes(layout)
          ? {
              title: colTitle,
              subtitle: colSubtitle,
            }
          : undefined,
        richTextContent: ['01', '03', '04', '05', '11'].includes(layout)
          ? generateLexicalContent([
              { type: 'h3', text: colTitle, direction: 'rtl' },
              { type: 'p', text: colSubtitle, direction: 'rtl' },
            ])
          : undefined,
        enableBadge: ['02', '03', '04', '05', '08'].includes(layout) ? true : undefined,
        enableCta: ['02', '03', '04', '05', '08'].includes(layout) ? true : undefined,
        reverseOrder: layout === '04' && i % 2 !== 0 ? true : undefined,
      }

      if (column.enableBadge) {
        column.badge = {
          label: layout === '02' ? `ميزات${layout}` : `ميزة ${i + 1}`,
          type: 'label',
        } as any
      }
      if (column.enableCta) {
        column.link = {
          type: 'custom',
          url: `/column-cta/${layout}-${i}`,
          label: `إجراء ${i + 1}`,
          newTab: false,
        } as any
      } else {
        column.link = undefined
      }
      currentBlockColumns.push(column as NonNullable<FeaturesBlock['columns']>[0])
    }
    block.columns = currentBlockColumns
    featuresBlocks.push(block as FeaturesBlock)
  }

  const pageTitle = 'features' // Arabic Page Title
  const pageSlug = 'features' // Can keep slug in English or change

  try {
    const existingPage = await payload.find({
      collection: 'pages',
      where: { slug: { equals: pageSlug } },
      locale: 'ar', // Changed to AR
      depth: 0,
    })
    if (existingPage.docs.length > 0) {
      payload.logger.info(`— Deleting existing '${pageTitle}' page (ar)...`)
      await payload.delete({
        collection: 'pages',
        id: existingPage.docs[0].id,
      })
    }
  } catch (e: any) {
    payload.logger.error(`Error deleting existing page '${pageTitle}' (ar): ${e.message}`)
  }

  const heroData: Page['hero'] = {
    type: 'hero01',
    // title: 'نظام نقاط بيع حديث ومرن لمشروعك', // Arabic Hero Title
    richText: generateLexicalContent([
      { type: 'h2', text: 'نظام نقاط بيع حديث ومرن لمشروعك', direction: 'rtl' },
      {
        type: 'p',
        text: 'اكتشف كيف يمكن لنظام نقاط البيع المتطور لدينا أن يساعدك في إدارة أعمالك بكفاءة وزيادة أرباحك. نقدم لك حلولاً متكاملة تناسب جميع احتياجاتك.',
        direction: 'rtl',
      },
    ]),
    media: undefined,
    links: [
      {
        link: {
          type: 'custom',
          url: '/', // Link to Arabic homepage
          label: 'العودة إلى الرئيسية',
          newTab: false,
        } as any,
        id: 'hero-link-1-ar',
      },
    ],
  }

  try {
    const showcasePageData: Omit<Page, 'id' | 'updatedAt' | 'createdAt' | 'sizes'> & {
      author?: User | string
    } = {
      title: pageTitle,
      slug: pageSlug,
      _status: 'published',
      hero: heroData,
      layout: featuresBlocks as FeaturesBlock[],
      author: demoAuthor,
      breadcrumbs: [{ label: pageTitle, url: `/${pageSlug}`, id: `bc-ar-${pageSlug}` }], // Arabic breadcrumb
      meta: {
        title: `ميتا: ${pageTitle}`,
        description:
          'استكشف مجموعة متنوعة من تصميمات بلوكات الميزات وكيف يمكنها عرض خصائص نظام نقاط البيع بفعالية باللغة العربية.',
        image: media.image1.id,
      },
      publishedAt: new Date().toISOString(),
    }

    const showcasePage = await payload.create({
      collection: 'pages',
      locale: 'ar', // Changed to AR
      data: showcasePageData as any,
      depth: 0,
      context: { disableRevalidate: true },
    })

    payload.logger.info(
      `✔ Seeded Features Showcase Page (Arabic, improved rich text in columns) successfully at /${pageSlug} (ar)`,
    )
    return showcasePage as Page
  } catch (e: any) {
    payload.logger.error(
      `Error seeding Features Showcase Page (Arabic, improved rich text in columns): ${e.message}`,
    )
    if (e.data?.errors) {
      e.data.errors.forEach((err: any) =>
        payload.logger.error(`Payload error (ar): ${JSON.stringify(err)}`),
      )
    }
    if (e.response?.data?.errors) {
      e.response.data.errors.forEach((err: any) =>
        payload.logger.error(`Payload API error (ar): ${JSON.stringify(err)}`),
      )
    }
    return null
  }
}
