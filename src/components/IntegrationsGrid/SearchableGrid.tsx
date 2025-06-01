import React from 'react'
import { IntegrationsGrid, type IntegrationWithId } from './index'
import { SearchFilters } from './SearchFilters'
import type { Category } from '@/payload-types'

interface SearchableIntegrationsGridProps {
  integrations: IntegrationWithId[]
  categories: Pick<Category, 'id' | 'title'>[]
  ecosystems: Pick<Category, 'id' | 'title'>[]
  locale: 'ar' | 'en'
  initialFilters: {
    search: string
    category: string
    ecosystem: string
    sort: string
  }
}

export const SearchableIntegrationsGrid: React.FC<SearchableIntegrationsGridProps> = ({
  integrations,
  categories,
  ecosystems,
  locale,
  initialFilters,
}) => {
  return (
    <div className="py-xl space-y-md container">
      <SearchFilters
        categories={categories}
        ecosystems={ecosystems}
        locale={locale}
        initialFilters={initialFilters}
      />
      <IntegrationsGrid integrations={integrations} locale={locale} />
    </div>
  )
}
