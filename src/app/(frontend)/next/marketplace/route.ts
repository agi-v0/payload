import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const payload = await getPayload({ config: configPromise })

  const filters = {
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    ecosystem: searchParams.get('ecosystem') || '',
    sort: searchParams.get('sort') || 'newest',
    locale: (searchParams.get('locale') as 'ar' | 'en') || 'ar',
  }

  const integrations = await getFilteredIntegrations({
    ...filters,
    draft: false, // Client-side should only fetch published content
  })

  return Response.json(integrations)
}

async function getFilteredIntegrations({
  search,
  category,
  ecosystem,
  sort,
  locale,
  draft,
}: {
  search?: string
  category?: string
  ecosystem?: string
  sort?: string
  locale: 'ar' | 'en'
  draft?: boolean
}) {
  const payload = await getPayload({ config: configPromise })

  // Build where clause for filtering
  const where: any = {}

  if (search) {
    where.or = [
      {
        name: {
          contains: search,
        },
      },
      {
        tagline: {
          contains: search,
        },
      },
      {
        title: {
          contains: search,
        },
      },
    ]
  }
  if (category) {
    where['categories.slug'] = {
      equals: category,
    }
  }
  if (ecosystem) {
    // If ecosystem is a relationship field
    where['ecosystem.slug'] = {
      equals: ecosystem,
    }
    // OR if ecosystem is a select field with multiple values
    // where.ecosystem = {
    //   in: [ecosystem],
    // }
  }

  // Build sort clause
  let sortClause: any = 'name'
  switch (sort) {
    case 'name':
      sortClause = 'name'
      break
    case 'newest':
      sortClause = '-createdAt'
      break
    case 'oldest':
      sortClause = 'createdAt'
      break
    default:
      sortClause = 'name'
  }

  return payload.find({
    collection: 'integrations',
    depth: 1,
    locale,
    draft,
    limit: 50, // ✅ Add pagination for better performance
    pagination: true, // ✅ Enable pagination
    where: Object.keys(where).length > 0 ? where : undefined,
    sort: sortClause,
    select: {
      id: true,
      icon: true,
      tagline: true,
      link: true,
      name: true,
      title: true,
      summary: true,
      categories: true,
      ecosystem: true,
      slug: true,
    },
  })
}
