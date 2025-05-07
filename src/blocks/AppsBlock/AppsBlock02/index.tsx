import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { App, AppsBlock as AppsBlockProps } from '@/payload-types'
import { AppsCarouselClient } from './AppsCarouselClient'

interface Props extends AppsBlockProps {}

export const AppsBlock02: React.FC<Props> = async (props) => {
  const { reference, blockHeader } = props

  const payload = await getPayload({ config })

  let fetchedApps: App[] = []
  let fetchError: string | null = null

  const appIds = (
    Array.isArray(reference)
      ? reference?.map((ref) => {
          const id = typeof ref.value === 'object' ? ref.value?.id : ref.value
          return id ? String(id) : null
        })
      : []
  ).filter((id): id is string => id !== null)

  if (appIds.length > 0) {
    try {
      const result = await payload.find({
        collection: 'integrations',
        locale: 'ar',
        draft: false,
        limit: 10,
        depth: 2,
        sort: '-createdAt',
      })

      fetchedApps = result.docs || []

      if (fetchedApps.length > 0) {
        fetchedApps.sort((a, b) => appIds.indexOf(String(a.id)) - appIds.indexOf(String(b.id)))
      }
    } catch (error) {
      console.error('Error fetching referenced apps:', error)
      fetchError = 'Failed to load app data.'
    }
  } else {
    // If no apps are referenced, maybe fetch the latest ones as a fallback?
    const result = await payload.find({
      collection: 'integrations',
      locale: 'ar',
      draft: false,
      limit: 6,
      depth: 2,
      sort: '-createdAt',
    })

    fetchedApps = result.docs || []
  }

  return (
    <div className="py-lg">
      {fetchError && <p className="container text-center">{fetchError}</p>}
      {!fetchError && fetchedApps.length > 0 && <AppsCarouselClient apps={fetchedApps} />}
    </div>
  )
}
