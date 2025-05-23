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
import { IntegrationCard } from '@/components/IntegrationCard'

export const dynamic = 'force-static'
export const revalidate = 600

type Args = {
  params: Promise<{
    slug?: string[]
    locale?: 'ar' | 'en' | undefined
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug: slugSegments = [], locale = 'ar' } = await paramsPromise
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

  const integrations = await payload.find({
    collection: 'integrations',
    depth: 1,
    // limit: 12,
    overrideAccess: false,
    locale: locale,
    draft,
    pagination: false,
    select: {
      icon: true,
      tagline: true,
      link: true,
      name: true,
      title: true,
      overview: true,
      categories: true,
      ecosystem: true,
    },
  })

  return (
    <article className="bg-background overflow-x-clip">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderHero {...hero} />
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {integrations.docs?.map((integration) => (
            <IntegrationCard key={integration.id} integration={integration} locale={locale} />
          ))}
        </div>
      </div>
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
