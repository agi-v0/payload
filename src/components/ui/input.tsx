import * as React from 'react'

import { cn } from '@/utilities/ui'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'border-input text-base-primary file:text-base-primary placeholder:text-base-quaternary selection:bg-base-quaternary selection:text-base-primary aria-invalid:outline-destructive/60 aria-invalid:ring-destructive/20 dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/50 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive flex h-12 w-full min-w-0 rounded-xl border bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] file:inline-flex file:h-12 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none dark:aria-invalid:focus-visible:ring-4',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
