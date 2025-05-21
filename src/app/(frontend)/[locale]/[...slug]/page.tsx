import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import type { Page as PageType } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export const dynamic = 'force-dynamic'

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale?: 'ar' | 'en' | undefined }
}) {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    locale: locale,
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      // Filter out the home page and any slugs that might be null/undefined
      return doc.slug && doc.slug !== 'home'
    })
    .map(({ slug }) => {
      // Split the full slug path into an array of segments
      // We've already filtered for non-null slugs, but TS might not know
      return { slug: (slug || '').split('/') }
    })

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
  const slugPath = slugSegments.join('/') || 'home'
  const url = `/${locale}/${slugPath === 'home' ? '' : slugPath}`

  let page: PageType | null

  page = await queryPageBySlug({
    slug: slugPath,
    locale,
    draft,
  })

  if (!page && slugPath === 'home') {
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
  const { isEnabled: draft } = await draftMode()
  const { slug: slugSegments = [], locale = 'ar' } = await paramsPromise
  const slugPath = slugSegments.join('/') || 'home'

  const page = await queryPageBySlug({
    slug: slugPath,
    locale,
    draft,
  })

  return generateMeta({ doc: page })
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
