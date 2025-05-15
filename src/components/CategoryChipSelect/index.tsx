'use client'

import React, { useEffect, useState } from 'react'
import { useConfig, useField, usePayloadAPI, useLocale } from '@payloadcms/ui'
import type { RelationshipFieldClientComponent, StaticDescription, StaticLabel } from 'payload'

import './index.scss'
import { Category } from '@/payload-types'

export const CategoryChipSelect: RelationshipFieldClientComponent = (props) => {
  const {
    field: { admin: { description } = {}, hasMany, label, name, required },
    path,
    readOnly,
    validate,
  } = props

  const locale = useLocale()

  const { value, setValue, showError, errorMessage } = useField<number[] | number | null>({
    path,
    validate,
  })
  const [selectedCategories, setSelectedCategories] = useState<number[]>(
    hasMany ? (Array.isArray(value) ? value : []) : value ? [value as number] : [],
  )

  const [{ data, isError, isLoading: categoriesLoading }] = usePayloadAPI('/api/categories', {
    initialParams: {
      depth: 1,
      where: {
        and: [{ parent: { exists: true } }, { 'parent.slug': { equals: 'media' } }],
      },
    },
  })

  const categories = data?.docs || []

  const handleChipClick = (categoryId: number) => {
    let newSelectedCategories: number[]
    if (hasMany) {
      newSelectedCategories = selectedCategories.includes(categoryId)
        ? selectedCategories.filter((id) => id !== categoryId)
        : [...selectedCategories, categoryId]
    } else {
      newSelectedCategories = selectedCategories.includes(categoryId) ? [] : [categoryId]
    }
    setSelectedCategories(newSelectedCategories)

    if (hasMany) {
      setValue(newSelectedCategories)
    } else {
      setValue(newSelectedCategories.length > 0 ? newSelectedCategories[0] : null)
    }
  }

  useEffect(() => {
    if (hasMany) {
      if (Array.isArray(value)) {
        setSelectedCategories(value)
      } else if (value === null || typeof value === 'undefined') {
        setSelectedCategories([])
      }
    } else {
      if (typeof value === 'number') {
        setSelectedCategories([value])
      } else if (value === null || typeof value === 'undefined') {
        setSelectedCategories([])
      }
    }
  }, [value, hasMany])

  if (categoriesLoading) {
    return <p>Loading categories...</p>
  }

  if (isError) {
    return <p style={{ color: 'red' }}>Error loading categories.</p> // Simplified error message
  }

  return (
    <div className="payload-custom-field category-chip-select">
      <label htmlFor={path} className="field-label">
        {label?.[locale as any] || label}
      </label>
      <div className="input-wrapper">
        <ul className="chip-group">
          {categories.map((category: Category) => {
            if (!category || typeof category.id === 'undefined') {
              return null
            }
            let isSelected: boolean
            if (hasMany) {
              isSelected = selectedCategories.includes(category.id)
            } else {
              isSelected = selectedCategories.includes(category.id) // For single select, check if it's in the array of (at most) one item
            }
            return (
              <li key={category.id}>
                <button
                  type="button"
                  className={`chip ${isSelected ? 'btn--style-primary selected' : ''}`}
                  onClick={() => handleChipClick(category.id)}
                  disabled={readOnly}
                >
                  {category.title}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      {showError && errorMessage && (
        <div className="field-error" style={{ color: 'red', marginTop: '5px' }}>
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default CategoryChipSelect
