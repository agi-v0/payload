import type { Payload, PayloadRequest } from 'payload'
import type { Media, CaseStudy } from '@/payload-types'

export interface TestimonialsResult {
  testimonials: any[]
}

export async function seedTestimonials({
  payload,
  image1,
  logo,
  imageSquare,
  caseStudies,
}: {
  payload: Payload
  image1: Media
  logo: Media
  imageSquare: Media
  caseStudies: Record<string, number>
}): Promise<TestimonialsResult> {
  // Reduce the number of testimonials in production to improve performance
  const testimonialCount = 10
  const testimonialsDataArray = Array.from({ length: testimonialCount }).map((_, i) => ({
    quote: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: `هذا هو اقتباس الشهادة للشركة ${i + 1}.`,
                format: '' as const,
                style: '',
              },
            ],
            direction: 'rtl' as const,
            format: '' as const,
            indent: 0,
          },
        ],
        direction: 'rtl' as const,
        format: '' as const,
        indent: 0,
        version: 1,
      },
    },
    companyName: `شركة ${i + 1}`,
    featuredImage: image1.id,
    companyLogo: logo.id,
    authorInfo: {
      name: `المؤلف ${i + 1}`,
      title: `اللقب ${i + 1}`,
      avatar: imageSquare.id,
    },
    caseStudy: {
      linkCaseStudy: caseStudies[`case-study-${i + 1}`] ? true : false,
      linkedCaseStudy: caseStudies[`case-study-${i + 1}`] || null,
    },
    categories: [],
    publishedAt: new Date().toISOString(),
  }))

  // Create testimonials in parallel
  const testimonialPromises = testimonialsDataArray.map(async (testimonialData) => {
    try {
      return await payload.create({
        collection: 'testimonials',
        depth: 0,
        data: testimonialData,
        // req,
      })
    } catch (error) {
      payload.logger.error(
        `Failed to create testimonial for ${testimonialData.companyName}: ${error instanceof Error ? error.message : String(error)}`,
      )
      return null
    }
  })

  const testimonialResults = await Promise.all(testimonialPromises)
  const testimonials = testimonialResults.filter(Boolean)

  return { testimonials }
}
