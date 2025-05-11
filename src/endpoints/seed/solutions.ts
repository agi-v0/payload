import type { Payload } from 'payload'
import type { Media, Solution } from '@/payload-types'

export const seedSolutions = async (
  payload: Payload,
  { imageSquareId }: { imageSquareId?: number },
): Promise<Record<string, number>> => {
  const solutionsData = [
    {
      title: 'Cashier',
      ...(imageSquareId && imageSquareId > 0 && { icon: imageSquareId }),
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
      ...(imageSquareId && imageSquareId > 0 && { icon: imageSquareId }),
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
      ...(imageSquareId && imageSquareId > 0 && { icon: imageSquareId }),
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
      ...(imageSquareId && imageSquareId > 0 && { icon: imageSquareId }),
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
      ...(imageSquareId && imageSquareId > 0 && { icon: imageSquareId }),
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
      ...(imageSquareId && imageSquareId > 0 && { icon: imageSquareId }),
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
      ...(imageSquareId && imageSquareId > 0 && { icon: imageSquareId }),
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
      ...(imageSquareId && imageSquareId > 0 && { icon: imageSquareId }),
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
      ...(imageSquareId && imageSquareId > 0 && { icon: imageSquareId }),
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
      ...(imageSquareId && imageSquareId > 0 && { icon: imageSquareId }),
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

  const slugToIdMap: Record<string, number> = {}
  createdSolutions.forEach((doc) => {
    const solutionDoc = doc as Solution
    if (solutionDoc.slug) {
      slugToIdMap[solutionDoc.slug] = solutionDoc.id
    }
  })

  payload.logger.info(`✓ Seeded solutions`)
  return slugToIdMap
}
