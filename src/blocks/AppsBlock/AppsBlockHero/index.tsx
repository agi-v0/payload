import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { App, AppsBlock as AppsBlockProps } from '@/payload-types'
import { AppsBlockGrid } from './AppsBlockGrid'

export const AppsBlockHero: React.FC<AppsBlockProps> = async (props) => {
  const { reference, blockHeader, body } = props

  const payload = await getPayload({ config })

  let fetchedApps: App[] = []
  let fetchError: string | null = null

  const appIds = Array.isArray(reference)
    ? reference?.map((ref) => {
        const id = typeof ref.value === 'object' ? ref.value?.id : ref.value
        return id
      })
    : []

  if (appIds.length > 0) {
    try {
      const result = await payload.find({
        collection: 'apps',
        locale: 'ar',
        draft: false,
        depth: 2,
        where: {
          id: {
            in: appIds,
          },
        },
      })

      fetchedApps = result.docs || []
      // if (fetchedApps.length > 0) {
      //   fetchedApps.sort((a, b) => appIds.indexOf(String(a.id)) - appIds.indexOf(String(b.id)))
      // }
    } catch (error) {
      console.error('Error fetching referenced apps:', error)
      fetchError = 'Failed to load app data.'
    }
  } else {
    // If no apps are referenced, fetch the latest ones as a fallback
    const result = await payload.find({
      collection: 'apps',
      locale: 'ar',
      draft: false,
      depth: 2,
      limit: 10,
      sort: '-updatedAt',
    })

    fetchedApps = result.docs || []
  }

  return (
    <div className="py-lg w-full">
      {fetchError && <p className="container text-center">{fetchError}</p>}
      {!fetchError && fetchedApps.length > 0 && <AppsBlockGrid apps={fetchedApps} body={body} />}
    </div>
  )
}
