'use client'
import { useFormFields, useLocale, usePayloadAPI } from '@payloadcms/ui'
import './index.scss'

export const AppPreview: React.FC = () => {
  const locale = useLocale()

  const nameState = useFormFields(([fields]) => fields['name'])
  const iconState = useFormFields(([fields]) => fields['icon'])
  // Fetch tagline field state
  const taglineState = useFormFields(([fields]) => fields['tagline'])
  const titleState = useFormFields(([fields]) => fields.title)

  // console.log('--- Debugging AppPreview ---')
  // console.log('Raw nameState:', nameState)
  // console.log('Raw nameState.value:', nameState?.value)
  // console.log('Raw titleState:', titleState)
  // console.log('Raw titleState.value:', titleState?.value)
  // console.log('Raw taglineState:', taglineState)
  // console.log('Raw taglineState.value:', taglineState?.value)

  // Extract values
  const name = nameState?.value as string | undefined
  const titleValue = titleState?.value as string | undefined
  // Extract tagline value
  const tagline = taglineState?.value as string | undefined
  const icon = iconState?.value as any | undefined

  // Fetch data from a collection item using its ID
  const [{ data, isError, isLoading }, { setParams }] = usePayloadAPI(`/api/media/${icon}`, {
    initialParams: { depth: 1 },
  })

  // console.log('Extracted title:', titleValue)
  // console.log('Extracted name:', name)
  // console.log('Extracted icon:', data)
  // console.log('Extracted tagline:', tagline)
  // console.log('Locale:', locale)

  return (
    <div className="app-preview-container" data-rtl={locale.rtl}>
      {data?.url ? (
        <img className="app-preview-container__icon" src={data.url} alt={name || 'App Icon'} />
      ) : (
        // Optional: Placeholder if no icon is selected/uploaded yet
        <div className="app-preview-container__icon--placeholder"></div>
      )}
      <div className="app-preview-container__content">
        <span className="app-preview-container__name">{name || 'App Name'}</span>
        <p className="app-preview-container__tagline">{tagline || 'App Tagline'}</p>
      </div>
    </div>
  )
}
