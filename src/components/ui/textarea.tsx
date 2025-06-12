import * as React from 'react'

import { cn } from '@/utilities/ui'

function Textarea({
  className,
  ...props
}: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-input placeholder:text-base-quaternary ring-ring outline-ring/50 flex field-sizing-content min-h-16 w-full rounded-xl border bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow]',
        'hover:ring-3 focus-visible:ring-3 focus-visible:outline-none',
        'aria-invalid:outline-destructive/60 aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60 aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
