import type { Payload, PayloadRequest, File } from 'payload'
import type { CaseStudy, Media, Solution } from '@/payload-types'

export const seedCaseStudies = async (
  payload: Payload,
  req: PayloadRequest,
  {
    image169Doc,
    solutionsSlugToIdMap,
    integrationsSlugToIdMap,
  }: {
    image169Doc?: Media // Assuming image169Doc is of type Media or can be undefined
    solutionsSlugToIdMap: Record<string, number>
    integrationsSlugToIdMap: Record<string, number>
  },
): Promise<{ [key: string]: number }> => {
  payload.logger.info('— Seeding case studies...')
  const caseStudyCount = 6
  const caseStudiesDataArray = Array.from({ length: caseStudyCount }).map((_, i) => {
    const caseStudyDataBase: Omit<
      CaseStudy,
      'id' | 'updatedAt' | 'createdAt' | 'sizes' | 'featuredImage' // sizes might not exist
    > = {
      title: `دراسة حالة ${i + 1}: كيف حققنا النمو مع العميل`,
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              version: 1,
              children: [{ type: 'text', text: `محتوى دراسة الحالة ${i + 1}` }],
            },
          ],
          direction: 'rtl' as 'rtl' | 'ltr' | null,
          format: '',
          indent: 0,
          version: 1,
        },
      }, // Simplified content
      industry: `صناعة التكنولوجيا والحلول الرقمية ${i + 1}`,
      useCase: `حالة استخدام متقدمة ${i + 1}`,
      stats: [
        {
          label: `النمو السنوي ${i + 1}`,
          value: 10 + i,
          isPercentage: true,
          isIncrease: true,
        },
        {
          label: `النمو الشهري ${i + 1}`,
          value: 5 + i,
          isPercentage: false,
          isIncrease: true,
        },
      ],
      featuredSolutions: [solutionsSlugToIdMap['cashier'], solutionsSlugToIdMap['paysync']],
      featuredIntegrations: [integrationsSlugToIdMap['odoo'], integrationsSlugToIdMap['bonat']],
      layout: [],
      slug: `case-study-${i + 1}`,
    }
    const caseStudyData: Partial<CaseStudy> = { ...caseStudyDataBase }
    if (image169Doc) {
      caseStudyData.featuredImage = image169Doc.id
    }
    // The final object should conform to what payload.create expects for 'case-studies'
    // Ensure all required fields (not auto-generated like id, timestamps) are present.
    return caseStudyData as Omit<CaseStudy, 'id' | 'updatedAt' | 'createdAt' | 'sizes'> // Adjust Omit as per CaseStudy type
  })

  const createdCaseStudies = await Promise.all(
    caseStudiesDataArray.map((caseStudy) =>
      payload.create({
        collection: 'case-studies',
        depth: 0,
        data: caseStudy,
      }),
    ),
  )

  const slugToIdMap: Record<string, number> = {}
  createdCaseStudies.forEach((doc) => {
    const caseStudyDoc = doc as CaseStudy
    if (caseStudyDoc.slug) {
      slugToIdMap[caseStudyDoc.slug] = caseStudyDoc.id
    }
  })

  payload.logger.info(`✓ Seeded case studies`)
  return slugToIdMap
}
