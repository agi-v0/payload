import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities/ui'

const appearances = {
  brand: {
    primary:
      'bg-button-brand-primary text-base-static-white-primary hover:bg-button-brand-primary/90',
    secondary:
      'bg-button-brand-secondary border border-border-action-normal hover:border-border-action-hover text-button-brand-secondary hover:bg-button-brand-secondary/90',
    tertiary:
      'bg-button-brand-tertiary/10 text-base-static-white hover:bg-button-brand-tertiary/20',
    ghost:
      'bg-button-brand-ghost/0 text-button-brand-primary hover:bg-button-brand-ghost/10 text-2xl',
    link: 'text-primary items-start justify-start underline-offset-4 hover:underline',
  },
  neutral: {
    primary:
      'bg-button-neutral-primary text-base-static-black-primary hover:bg-button-neutral-primary/90',
    secondary:
      'bg-button-neutral-secondary border border-border-neutral-normal hover:border-border-neutral-hover text-button-neutral-secondary hover:bg-button-neutral-secondary/90',
    tertiary:
      'bg-button-neutral-tertiary/10 text-base-static-black hover:bg-button-neutral-tertiary/20',
    ghost:
      'bg-button-neutral-ghost/0 text-button-neutral-primary hover:bg-button-neutral-ghost/10 text-2xl',
    link: 'text-neutral items-start justify-start underline-offset-4 hover:underline',
  },
}

const buttonVariants = cva(
  "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md text-(length:--text-body) font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    defaultVariants: {
      size: 'default',
      buttonStyle: 'brand',
    },
    variants: {
      size: {
        default: 'px-(length:--text-body) py-3 has-[>svg]:px-3',
        sm: 'h-8 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-12 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        clear: '',
      },
      buttonStyle: {
        brand: 'brand',
        neutral: 'neutral',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
  variant?: keyof (typeof appearances)['brand'] | null
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  buttonStyle,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'

  const selectedStyle =
    buttonStyle && variant && appearances[buttonStyle]?.[variant]
      ? appearances[buttonStyle][variant]
      : ''

  return (
    <Comp className={cn(buttonVariants({ className, size }), selectedStyle)} ref={ref} {...props} />
  )
}

export { Button, buttonVariants }
