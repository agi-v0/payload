'use client'

import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useField } from '@payloadcms/ui'
// import LucideIcon from '@/src/components/ui/LucideIcon'
import { DynamicIcon } from 'lucide-react/dynamic'
import { cn } from '@/utilities/ui'
import type { IconType } from '@/components/LucideIconSelect/LucideIconSelect'

type Option = {
  label: string
  value: string
}

type ClientLucideIconSelectProps = {
  path: string
  options: Option[]
}

const LucideIconSelectClient: React.FC<ClientLucideIconSelectProps> = ({ path, options }) => {
  const { value, setValue } = useField<string>({ path })
  const [filterText, setFilterText] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Filter options based on input text
  const filteredOptions = useMemo(() => {
    if (!filterText) return options
    return options.filter((option) => option.label.toLowerCase().includes(filterText.toLowerCase()))
  }, [options, filterText])

  // Handle icon selection
  const handleSelectIcon = (iconValue: string) => {
    setValue(iconValue)
    setIsOpen(false)
    setFilterText('')
    // Blur input after selection
    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        setFilterText('')
        if (inputRef.current) {
          inputRef.current.blur()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setFilterText('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Get selected icon details
  const selectedIcon = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  )

  // Handle input focus
  const handleInputFocus = () => {
    setIsOpen(true)
    setFilterText('')
  }

  // Handle input blur
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Only close if not clicking inside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget as Node)) {
      // Small delay to allow for button clicks within the dropdown
      setTimeout(() => {
        if (!containerRef.current?.contains(document.activeElement)) {
          setIsOpen(false)
          setFilterText('')
        }
      }, 100)
    }
  }

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value)
    setIsOpen(true)
  }

  // Clear selected icon
  const handleClearIcon = () => {
    setValue('')
    setFilterText('')
  }

  // Close dropdown
  const handleCloseDropdown = () => {
    setIsOpen(false)
    setFilterText('')
    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  return (
    <div className="mb-[var(--spacing-field)]" ref={containerRef}>
      <label className="field-label">Icon</label>

      {/* Combined input field and selected icon display */}
      <div className="relative">
        <div className="field-type text flex items-center gap-2">
          <div className="relative flex flex-grow items-center">
            {value && selectedIcon && (
              <div className="pointer-events-none absolute left-3 flex items-center">
                <DynamicIcon name={value as any} className="h-5 w-5 shrink-0" />
              </div>
            )}
            <input
              ref={inputRef}
              type="text"
              value={isOpen ? filterText : selectedIcon?.label || ''}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder={isOpen ? selectedIcon?.label || 'Select an icon' : 'Select an icon'}
              className={`text-input w-full cursor-default pr-16 ${value && 'pl-12'} `}
            />
            {/* Indicators container - with flex layout like the provided code */}
            <div className="absolute right-3 flex items-center gap-2">
              {/* Clear button (X) */}
              {value && (
                <div
                  className="clear-indicator flex cursor-pointer items-center justify-center"
                  aria-hidden="true"
                  role="button"
                  tabIndex={0}
                  onClick={handleClearIcon}
                >
                  <svg
                    className="clear-indicator__icon icon icon--x"
                    height="20"
                    viewBox="0 0 20 20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path className="stroke" d="M14 6L6 14M6 6L14 14" strokeLinecap="square"></path>
                  </svg>
                </div>
              )}

              {/* Dropdown indicator */}
              <button
                className="dropdown-indicator flex items-center justify-center"
                aria-hidden="true"
                type="button"
                onClick={handleInputFocus}
              >
                <svg
                  className="icon icon--chevron dropdown-indicator__icon"
                  height="100%"
                  viewBox="0 0 22 12"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="stroke"
                    d="M1 1.12109L11 11.1211L21 1.12109"
                    strokeLinecap="square"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown container - absolutely positioned */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute left-0 z-10 mt-1 w-auto min-w-[400px] rounded-md border border-gray-300 bg-white p-3 shadow-lg"
            style={{ maxWidth: 'max-content' }}
          >
            {/* Close button - improved styling */}
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={handleCloseDropdown}
                className={`flex cursor-pointer items-center justify-center border-none bg-transparent p-1.5`}
                title="Close"
              >
                <DynamicIcon name="X" className="h-5 w-5" />
              </button>
            </div>

            {/* Icons scrollable grid */}
            <div
              className="grid grid-cols-10 gap-2"
              style={{
                maxHeight: '400px', // Approximately 10 rows
                overflowY: 'auto',
              }}
            >
              {filteredOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelectIcon(option.value)}
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-sm border transition-colors',
                    'hover:bg-slate-300',
                    value === option.value
                      ? 'border-slate-300 bg-slate-300'
                      : 'border-slate-200 bg-white',
                  )}
                  type="button"
                  title={option.label}
                >
                  <DynamicIcon name={option.value as IconType} className="h-6 w-6" />
                </button>
              ))}
            </div>

            {/* Empty state */}
            {filteredOptions.length === 0 && (
              <div className="mt-2 rounded py-4 text-center">
                {`No icons found matching ${filterText}`}
              </div>
            )}
          </div>
        )}
      </div>

      <p className="field-description mt-1 inline">
        Select an icon from the Lucide icon set. You can preview all available icons at{' '}
        <a
          href="https://lucide.dev/icons/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-text-primary no-underline hover:underline`}
        >
          https://lucide.dev/icons/
        </a>
      </p>
    </div>
  )
}

export default LucideIconSelectClient
