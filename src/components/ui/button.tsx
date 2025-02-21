import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities/ui'

const buttonVariants = cva(
  "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md text-(length:--text-body) font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-button-brand hover:bg-button-brand/90 text-white',
        primary: 'bg-button-neutral text-neutral-primary hover:bg-button-neutral/90',
        secondary:
          'border-input bg-button-neutral/0 hover:bg-button-neutral/10 text-neutral-primary border',
        outline:
          'border-input bg-button-neutral/0 hover:bg-button-neutral/10 text-neutral-primary border',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        tertiary: 'bg-button-neutral/10 hover:bg-button-neutral-20 text-neutral-primary',
        ghost: 'hover:bg-button-neutral/10 bg-button-neutral/0 text-neutral-primary',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-(length:--text-body) py-3 has-[>svg]:px-3',
        sm: 'h-8 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-12 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
}
export { Button, buttonVariants }
