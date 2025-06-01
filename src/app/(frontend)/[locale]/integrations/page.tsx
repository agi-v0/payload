import type { Metadata } from 'next/types'
import type { Integration, Page as PageType } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import PageClient from './page.client'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { RenderHero } from '@/heros/RenderHero'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { draftMode } from 'next/headers'
import { generateMeta } from '@/utilities/generateMeta'
import { SearchableIntegrationsGrid } from '@/components/IntegrationsGrid/SearchableGrid'

export const revalidate = 600

type Args = {
  params: Promise<{
    slug?: string[]
    locale?: 'ar' | 'en' | undefined
  }>
  searchParams: Promise<{
    q?: string
    category?: string
    ecosystem?: string
    sort?: string
  }>
}

export default async function Page({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug: slugSegments = [], locale = 'ar' } = await paramsPromise
  const searchParams = await searchParamsPromise
  const slugPath = slugSegments.join('/') || 'integrations'
  const url = `/${locale}/${slugPath === 'integrations' ? '' : slugPath}`

  const payload = await getPayload({ config: configPromise })
  let page: PageType | null

  page = await queryPageBySlug({
    slug: slugPath,
    locale,
    draft,
  })

  if (!page && slugPath === 'integrations') {
    page = null
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  // Get all integrations and categories/ecosystems for filtering
  const [integrations, categories, ecosystems] = await Promise.all([
    getFilteredIntegrations({
      search: searchParams.q,
      category: searchParams.category,
      ecosystem: searchParams.ecosystem,
      sort: searchParams.sort,
      locale,
      draft,
    }),
    payload.find({
      collection: 'categories',
      limit: 100,
      locale,
      draft,
      pagination: false,
      where: {
        'parent.slug': {
          equals: 'integrations',
        },
      },
      select: {
        id: true,
        title: true,
        slug: true,
      },
    }),
    payload.find({
      collection: 'categories',
      limit: 100,
      locale,
      draft,
      pagination: false,
      where: {
        'parent.slug': {
          equals: 'ecosystems',
        },
      },
      select: {
        id: true,
        title: true,
        slug: true,
      },
    }),
  ])

  return (
    <article className="bg-background overflow-x-clip">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderHero {...hero} />
      <SearchableIntegrationsGrid
        integrations={integrations.docs || []}
        categories={categories.docs || []}
        ecosystems={ecosystems.docs || []}
        locale={locale}
        initialFilters={{
          search: searchParams.q || '',
          category: searchParams.category || '',
          ecosystem: searchParams.ecosystem || '',
          sort: searchParams.sort || 'newest',
        }}
      />
      <RenderBlocks blocks={layout as any} locale={locale} />
    </article>
  )
}

// ... existing generateMetadata and queryPageBySlug functions ...

// ✅ Improved filtering function
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
  draft: boolean
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

  // ✅ Fixed category filtering
  if (category) {
    where['categories.slug'] = {
      equals: category, // Remove array wrapper
    }
  }

  // ✅ Ecosystem filtering (adjust based on your schema)
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

const queryPageBySlug = cache(
  async ({
    slug,
    locale,
    draft,
  }: {
    slug: string
    locale?: 'ar' | 'en' | undefined
    draft: boolean
  }) => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'pages',
      locale: locale,
      draft,
      limit: 1,
      pagination: false,
      overrideAccess: draft,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  },
)
