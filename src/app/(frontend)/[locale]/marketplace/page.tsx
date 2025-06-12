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

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const locales = ['en', 'ar']
  const params: { slug: string[]; locale: 'ar' | 'en' }[] = []
  for (const locale of locales) {
    const pages = await payload.find({
      collection: 'integrations',
      locale: locale as 'ar' | 'en',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    })
    pages.docs
      ?.filter((doc) => {
        return doc.slug && doc.slug !== 'home'
      })
      .map((doc) => {
        params.push({
          slug: doc.slug?.split('/') || [],
          locale: locale as 'ar' | 'en',
        })
      })
  }

  return params
}

type Args = {
  params: Promise<{
    slug?: string[]
    locale?: 'ar' | 'en' | undefined
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug: slugSegments = [], locale = 'ar' } = await paramsPromise
  const slugPath = slugSegments.join('/') || 'marketplace'
  const url = `/${locale}/${slugPath === 'marketplace' ? '' : slugPath}`

  let page: PageType | null

  page = await queryPageBySlug({
    slug: slugPath,
    locale,
  })

  if (!page && slugPath === 'marketplace') {
    page = null
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article className="bg-background overflow-x-clip">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout as any} locale={locale} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug: slugSegments = [], locale = 'ar' } = await paramsPromise
  const slugPath = slugSegments.join('/') || 'home'

  const page = await queryPageBySlug({
    slug: slugPath,
    locale,
  })

  return generateMeta({ doc: page })
}

// async function getFilteredIntegrations({
//   search,
//   category,
//   ecosystem,
//   sort,
//   locale,
//   draft,
// }: {
//   search?: string
//   category?: string
//   ecosystem?: string
//   sort?: string
//   locale: 'ar' | 'en'
//   draft: boolean
// }) {
//   const payload = await getPayload({ config: configPromise })

//   // Build where clause for filtering
//   const where: any = {}

//   if (search) {
//     where.or = [
//       {
//         name: {
//           contains: search,
//         },
//       },
//       {
//         tagline: {
//           contains: search,
//         },
//       },
//       {
//         title: {
//           contains: search,
//         },
//       },
//     ]
//   }

//   // ✅ Fixed category filtering
//   if (category) {
//     where['categories.slug'] = {
//       equals: category, // Remove array wrapper
//     }
//   }

//   // ✅ Ecosystem filtering (adjust based on your schema)
//   if (ecosystem) {
//     // If ecosystem is a relationship field
//     where['ecosystem.slug'] = {
//       equals: ecosystem,
//     }
//     // OR if ecosystem is a select field with multiple values
//     // where.ecosystem = {
//     //   in: [ecosystem],
//     // }
//   }

//   // Build sort clause
//   let sortClause: any = 'name'
//   switch (sort) {
//     case 'name':
//       sortClause = 'name'
//       break
//     case 'newest':
//       sortClause = '-createdAt'
//       break
//     case 'oldest':
//       sortClause = 'createdAt'
//       break
//     default:
//       sortClause = 'name'
//   }

//   return payload.find({
//     collection: 'integrations',
//     depth: 1,
//     locale,
//     draft,
//     limit: 50, // ✅ Add pagination for better performance
//     pagination: true, // ✅ Enable pagination
//     where: Object.keys(where).length > 0 ? where : undefined,
//     sort: sortClause,
//     select: {
//       id: true,
//       icon: true,
//       tagline: true,
//       link: true,
//       name: true,
//       title: true,
//       summary: true,
//       categories: true,
//       ecosystem: true,
//       slug: true,
//     },
//   })
// }

const queryPageBySlug = cache(async ({ slug, locale }: { slug: string; locale?: 'ar' | 'en' | undefined }) => {
  const payload = await getPayload({ config: configPromise })
  const { isEnabled: draft } = await draftMode()
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
})
