import type { Payload } from 'payload'
import type { Media, Solution } from '@/payload-types'

export const seedSolutions = async (
  payload: Payload,
  { imageSquare }: { imageSquare: Media },
): Promise<Record<string, string | number>> => {
  payload.logger.info(`— Seeding solutions...`)

  const solutionsData = [
    {
      title: 'Cashier',
      icon: imageSquare.id,
      name: 'الكاشير',
      tagline: 'تسجيل المبيعات بمرونة وسرعة على أي جهاز',
      link: {
        type: 'custom' as const,
        newTab: null,
        url: '/solutions/cashier',
        label: 'الكاشير',
      },
      ecosystem: 'sell' as const,
      slug: 'cashier',
    },
    {
      title: 'PaySync',
      icon: imageSquare.id,
      name: 'شاشة السداد',
      tagline: 'عرض الطلبات والدفع بشكل مباشر للعميل',
      link: {
        type: 'custom' as const,
        newTab: null,
        url: '/solutions/paysync',
        label: 'شاشة السداد',
      },
      ecosystem: 'sell' as const,
      slug: 'paysync',
    },
    {
      title: 'Kiosk',
      icon: imageSquare.id,
      name: 'الطلب الذاتي',
      tagline: 'خلي العملاء يطلبون بأنفسهم ويقل الضغط على الموظفين',
      link: {
        type: 'custom' as const,
        newTab: null,
        url: '/solutions/kiosk',
        label: 'الطلب الذاتي',
      },
      ecosystem: 'sell' as const,
      slug: 'kiosk',
    },
    {
      title: 'OrderStation',
      icon: imageSquare.id,
      name: 'محطة الطلبات',
      tagline: 'إدارة جميع الطلبات من مكان واحد – حضوري وتوصيل',
      link: {
        type: 'custom' as const,
        newTab: null,
        url: '/solutions/orderstation',
        label: 'محطة الطلبات',
      },
      ecosystem: 'operate' as const,
      slug: 'orderstation',
    },
    {
      title: 'Products',
      icon: imageSquare.id,
      name: 'المنتجات',
      tagline: 'نظّم منتجاتك، الأسعار، والعروض بسهولة',
      link: {
        type: 'custom' as const,
        newTab: null,
        url: '/solutions/products',
        label: 'المنتجات',
      },
      ecosystem: 'operate' as const,
      slug: 'products',
    },
    {
      title: 'Inventory',
      icon: imageSquare.id,
      name: 'المخزون',
      tagline: 'تابع الكميات وتفادى النقص أو الهدر تلقائيًا',
      link: {
        type: 'custom' as const,
        newTab: null,
        url: '/solutions/inventory',
        label: 'المخزون',
      },
      ecosystem: 'operate' as const,
      slug: 'inventory',
    },
    {
      title: 'Analytics',
      icon: imageSquare.id,
      name: 'التحليلات',
      tagline: 'تقارير فورية عن المبيعات والأرباح تساعدك تتخذ قرارات',
      link: {
        type: 'custom' as const,
        newTab: null,
        url: '/solutions/analytics',
        label: 'التحليلات',
      },
      ecosystem: 'manage' as const,
      slug: 'analytics',
    },
    {
      title: 'Branches',
      icon: imageSquare.id,
      name: 'الفروع',
      tagline: 'راقب كل فروعك وتقاريرها من نفس اللوحة',
      link: {
        type: 'custom' as const,
        newTab: null,
        url: '/solutions/branches',
        label: 'الفروع',
      },
      ecosystem: 'manage' as const,
      slug: 'branches',
    },
    {
      title: 'Customers',
      icon: imageSquare.id,
      name: 'العملاء',
      tagline: 'احفظ بيانات عملاءك وفعّل برامج الولاء',
      link: {
        type: 'custom' as const,
        newTab: null,
        url: '/solutions/customers',
        label: 'العملاء',
      },
      ecosystem: 'manage' as const,
      slug: 'customers',
    },
    {
      title: 'Accounting',
      icon: imageSquare.id,
      name: 'المالية',
      tagline: 'تتبّع المصاريف، الضرائب، والتدفق المالي بسهولة',
      link: {
        type: 'custom' as const,
        newTab: null,
        url: '/solutions/accouting',
        label: 'المالية',
      },
      ecosystem: 'manage' as const,
      slug: 'accouting',
    },
  ]

  const createdSolutions = await Promise.all(
    solutionsData.map((solution) =>
      payload.create({
        collection: 'solutions',
        depth: 0,
        data: solution,
      }),
    ),
  )

  const slugToIdMap: Record<string, string | number> = {}
  createdSolutions.forEach((doc) => {
    const solutionDoc = doc as Solution
    if (solutionDoc.slug) {
      slugToIdMap[solutionDoc.slug] = solutionDoc.id
    }
  })

  payload.logger.info(`✓ Seeded solutions`)
  return slugToIdMap
}
