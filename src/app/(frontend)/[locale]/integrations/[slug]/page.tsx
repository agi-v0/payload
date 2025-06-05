import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const locales = ['en', 'ar']
  const params: { slug: string[]; locale: 'ar' | 'en' }[] = []
  for (const locale of locales) {
    const pages = await payload.find({
      collection: 'pages',
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
    slug?: string
    locale?: 'ar' | 'en' | undefined
  }>
}

export default async function Integration({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '', locale = 'ar' } = await paramsPromise
  const url = `/${locale}/integrations/` + slug
  const integration = await queryIntegrationBySlug({ slug, locale })

  if (!integration) return <PayloadRedirects url={url} />

  return (
    <article className="pt-16 pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      {/* <PostHero post={post} /> */}

      {/* <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container">
          <RichText className="mx-auto max-w-[48rem]" data={post.content} enableGutter={false} />
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <RelatedPosts
              className="col-span-3 col-start-1 mt-12 max-w-[52rem] grid-rows-[2fr] lg:grid lg:grid-cols-subgrid"
              docs={post.relatedPosts.filter((post) => typeof post === 'object')}
            />
          )}
        </div>
      </div> */}
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale = 'ar' } = await paramsPromise
  const integration = await queryIntegrationBySlug({ slug, locale })
  return generateMeta({ doc: integration })
}

const queryIntegrationBySlug = cache(
  async ({ slug, locale }: { slug: string; locale?: 'ar' | 'en' | undefined }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'integrations',
      locale: locale,
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  },
)
