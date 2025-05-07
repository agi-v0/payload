import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { AppsBlock as AppsBlockProps } from '@/payload-types'
import { AppsListClientWrapper } from './AppsListClientWrapper'

interface Props extends AppsBlockProps {}

export const AppsBlock03: React.FC<Props> = async (props) => {
  const { reference, media } = props

  const payload = await getPayload({ config })

  const initialAppsData = await payload.find({
    collection: 'integrations',
    locale: 'ar',
    draft: false,
    limit: 6,
    page: 1,
    depth: 10,
    sort: '-createdAt',
    select: {
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

  return <AppsListClientWrapper initialData={initialAppsData as any} blockMedia={media} />
}
