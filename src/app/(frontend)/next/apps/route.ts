import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1', 10)
  const limit = 6 // Keep consistent with block

  // Validate locale
  const localeParam = searchParams.get('locale')
  const validLocales = ['ar', 'en'] // Define valid locales as strings
  // Use type assertion carefully or check against config if possible
  const locale = validLocales.includes(localeParam ?? '') ? localeParam : 'ar'

  try {
    const payload = await getPayload({ config })

    const appsData = await payload.find({
      collection: 'integrations',
      // Ensure the final locale value is compatible with Payload's expected type
      locale: locale as 'ar' | 'en', // Cast to expected union type
      draft: false,
      limit: limit,
      page: page, // Add the page parameter

      depth: 10, // Ensure relationships are populated
      sort: '-createdAt',
      select: {
        // Ensure we select the same fields as the block needs
        name: true,
        tagline: true,
        icon: true,
        link: {
          type: true,
          reference: true,
          url: true,
          label: true,
          newTab: true,
        },
      },
    })

    return NextResponse.json(appsData)
  } catch (error) {
    console.error('Error fetching apps:', error)
    return NextResponse.json({ message: 'Error fetching apps' }, { status: 500 })
  }
}
