'use client'
import { useFormFields, useLocale, usePayloadAPI } from '@payloadcms/ui'
import './index.scss'

export const AppPreview: React.FC = () => {
  const locale = useLocale()

  // Try selecting the nested name field directly using dot notation
  const nameState = useFormFields(([fields]) => fields['name'])
  const iconState = useFormFields(([fields]) => fields['icon'])

  // Keep the title field state
  const titleState = useFormFields(([fields]) => fields.title)

  // console.log('--- Debugging AppPreview ---')
  // console.log('Raw nameState:', nameState)
  // console.log('Raw nameState.value:', nameState?.value)
  // console.log('Raw titleState:', titleState)
  // console.log('Raw titleState.value:', titleState?.value)

  // Extract values
  const name = nameState?.value as string | undefined
  const titleValue = titleState?.value as string | undefined
  const icon = iconState?.value as any | undefined

  // Fetch data from a collection item using its ID
  const [{ data, isError, isLoading }, { setParams }] = usePayloadAPI(`/api/app-icons/${icon}`, {
    initialParams: { depth: 1 },
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error occurred while fetching data.</p>

  // console.log('Extracted title:', titleValue)
  // console.log('Extracted name:', name)
  // console.log('Extracted icon:', data)
  console.log('Locale:', locale)

  return (
    <div className="app-preview-container" data-rtl={locale.rtl}>
      <img className="app-preview-container__icon" src={data?.url} alt={name} />
      <span className="app-preview-container__name">{name || 'App Name?'}</span>
    </div>
  )
}
