'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

export const LanguageSwitcher: React.FC = () => {
  const locale = useLocale()
  const router = useRouter()
  const [value, setValue] = useState(locale) // Set initial value to the current locale

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
  ]

  const onLanguageChange = (newLocale: string) => {
    const currentPath = window.location.pathname
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
    setValue(newLocale)
  }

  useEffect(() => {
    setValue(locale) // Ensure the selected value stays updated when the locale changes
  }, [locale])

  return (
    <Select onValueChange={onLanguageChange} value={value}>
      <SelectTrigger
        aria-label="Select a language"
        className="w-auto bg-transparent gap-2 pl-0 md:pl-3 border-none"
      >
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
