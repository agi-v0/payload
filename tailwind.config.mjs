import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  // plugins: [typography],
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
    extend: {
      // typography: () => ({
      //   DEFAULT: {
      //     css: [
      //       {
      //         // '--tw-prose-body': 'var(--text)',
      //         // '--tw-prose-headings': 'var(--text)',
      //         headings: { fontWeight: 600 },
      //         h1: {
      //           marginBottom: '0.25em',
      //           fontSize: 'var(--text-h1)',
      //         },
      //         h2: {
      //           fontWeight: 600,
      //           fontSize: 'var(--text-h2)',
      //         },
      //         h3: {
      //           fontWeight: 600,
      //           fontSize: 'var(--text-h3)',
      //         },
      //         h4: {
      //           fontWeight: 600,
      //           fontSize: 'var(--text-h4)',
      //         },
      //         h5: {
      //           fontWeight: 600,
      //           fontSize: 'var(--text-h5)',
      //         },
      //         h6: {
      //           fontWeight: 600,
      //           fontSize: 'var(--text-h6)',
      //         },
      //         p: {
      //           fontSize: 'var(--text-body)',
      //         },
      //       },
      //     ],
      //   },
      // }),
    },
  },
}

export default config
