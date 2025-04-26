'use client'

import React, { useState, useCallback } from 'react'
import type { App, Media as MediaType } from '@/payload-types'
import { CMSLink } from '../../../components/Link'
import { Media } from '@/components/Media'
import { PaginationControls } from './PaginationControls'

type PopulatedApp = Partial<App>

interface AppListData {
  docs: PopulatedApp[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

interface AppsListClientWrapperProps {
  initialData: AppListData
  blockMedia?: MediaType | string | number | null
}

export const AppsListClientWrapper: React.FC<AppsListClientWrapperProps> = ({
  initialData,
  blockMedia,
}) => {
  const [appsData, setAppsData] = useState<AppListData>(initialData)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(initialData.page ?? 1)

  const fetchApps = useCallback(async (page: number) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/next/apps?page=${page}&locale=ar`)
      if (!response.ok) {
        throw new Error('Failed to fetch apps')
      }
      const data: AppListData = await response.json()
      setAppsData(data)
      setCurrentPage(data.page ?? 1)
    } catch (error) {
      console.error('Error fetching apps client-side:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handlePageChange = (newPage: number) => {
    if (newPage !== currentPage) {
      setCurrentPage(newPage)
      fetchApps(newPage)
    }
  }

  const AppList = () => (
    <>
      {appsData.docs.map(({ name, tagline, icon, link }, index) => (
        <CMSLink
          {...link}
          key={name}
          label={null}
          className="px-space-xs hover:bg-background-light flex h-fit w-full flex-row items-center justify-start gap-4 rounded-3xl whitespace-normal transition-colors"
        >
          {/* Pass resource directly if it matches MediaProps resource type */}
          {icon && typeof icon === 'object' && (
            <Media
              priority
              resource={icon as MediaType}
              className="size-12 flex-none overflow-hidden rounded-lg"
            /> // Cast icon
          )}
          <div className="flex w-full flex-col py-4">
            <p className="text-body-lg text-base-primary font-medium">{name}</p>
            <p className="text-body-md text-base-secondary font-normal">{tagline}</p>
          </div>
        </CMSLink>
      ))}
    </>
  )

  return (
    <div className="py-space-xl container">
      <div className="grid grid-cols-2">
        <div className="md:pe-space-xl flex flex-col">
          <PaginationControls
            totalPages={appsData.totalPages ?? 1}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          {/* Basic loading indicator */}
          {isLoading && <p>Loading...</p>}
          {!isLoading && <AppList />}
          {!isLoading && appsData.docs.length === 0 && <p>No apps found.</p>}
        </div>

        <div className="aspect-square h-auto w-full select-none">
          {blockMedia && typeof blockMedia === 'object' && (
            <Media imgClassName="rounded-3xl object-cover" priority resource={blockMedia} />
          )}
        </div>
      </div>
    </div>
  )
}
