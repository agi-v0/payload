/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: {
          DEFAULT: 'hsla(var(--border))',
          action: {
            normal: 'hsl(var(--color-border-action-normal))',
            hover: 'hsl(var(--color-border-action-hover))',
            focus: 'hsl(var(--color-border-action-focus))',
            'focus-light': 'hsl(var(--color-border-action-focus-light))',
            'focus-destructive': 'hsl(var(--color-border-action-focus-destructive))',
            'focus-destructive-light': 'hsl(var(--color-border-action-focus-destructive-light))',
          },
          base: {
            neutral: 'hsl(var(--color-border-base-neutral))',
            'neutral-subtle': 'hsl(var(--color-border-base-neutral-subtle))',
            divider: 'hsl(var(--color-border-base-divider))',
            alpha: 'hsl(var(--color-neutral-950))',
          },
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--color-brand-500))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',
        surface: {
          DEFAULT: 'var(--color-surface-default)',
          inverted: 'var(--color-surface-inverted)',
          neutral: 'var(--color-surface-neutral)',
          'neutral-subtle': 'var(--color-surface-neutral-subtle)',
        },
        button: {
          brand: {
            primary: 'hsl(var(--color-button-brand-primary))',
            secondary: 'hsl(var(--color-button-brand-secondary))',
            tertiary: 'hsl(var(--color-button-brand-tertiary))',
            ghost: 'hsl(var(--color-button-brand-ghost))',
          },
          neutral: {
            primary: 'var(--color-button-neutral-primary)',
            secondary: 'var(--color-button-neutral-secondary)',
            tertiary: 'var(--color-button-neutral-tertiary)',
            ghost: 'var(--color-button-neutral-ghost)',
          },
          destructive: {
            primary: 'var(--color-button-destructive-primary)',
            secondary: 'var(--color-button-destructive-secondary)',
            tertiary: 'var(--color-button-destructive-tertiary)',
            ghost: 'var(--color-button-destructive-ghost)',
          },
        },
        base: {
          primary: 'hsl(var(--color-neutral-950)/1)',
          secondary: 'hsl(var(--color-neutral-950)/0.7)',
          tertiary: 'hsl(var(--color-neutral-950)/0.5)',
          quaternary: 'hsl(var(--color-neutral-950)/0.3)',
          inverted: {
            primary: 'hsl(var(--color-inverted-950))',
            secondary: 'hsl(var(--color-inverted-950)/0.7)',
            tertiary: 'hsl(var(--color-inverted-950)/0.5)',
            quaternary: 'hsl(var(--color-inverted-950)/0.3)',
          },
          'static-dark': {
            primary: 'hsla(224, 71%, 4%, 1)',
            secondary: 'hsla(224, 71%, 4%, 0.7)',
            tertiary: 'hsla(224, 71%, 4%, 0.5)',
            quaternary: 'hsla(224, 71%, 4%, 0.3)',
          },
          'static-white': {
            primary: 'hsla(0, 20%, 100%, 1)',
            secondary: 'hsla(0, 20%, 100%, 0.7)',
            tertiary: 'hsla(0, 20%, 100%, 0.5)',
            quaternary: 'hsla(0, 20%, 100%, 0.3)',
          },
        },
        accent: {
          brand: {
            DEFAULT: 'hsla(var(--color-accent-brand))',
            inverted: 'hsla(var(--color-accent-brand-inverted))',
            secondary: 'hsla(var(--color-accent-brand-secondary)/0.7)',
            tertiary: 'hsla(var(--color-accent-brand-tertiary)/0.5)',
          },
        },
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['var(--font-geist-sans)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
    },
  },
}
