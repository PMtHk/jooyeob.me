import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: '480px' },
        md: { min: '481px', max: '900px' },
        lg: { min: '901px' },
      },

      fontFamily: {
        pretendard: ['var(--font-pretendard)', 'sans'],
      },

      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)',

        primary: {
          DEFAULT: 'var(--blue-500)',
          50: 'var(--blue-50)',
          100: 'var(--blue-100)',
          200: 'var(--blue-200)',
          300: 'var(--blue-300)',
          400: 'var(--blue-400)',
          500: 'var(--blue-500)',
          600: 'var(--blue-600)',
          700: 'var(--blue-700)',
          800: 'var(--blue-800)',
          900: 'var(--blue-900)',
        },

        secondary: {
          DEFAULT: 'var(--green-500)',
          50: 'var(--green-50)',
          100: 'var(--green-100)',
          200: 'var(--green-200)',
          300: 'var(--green-300)',
          400: 'var(--green-400)',
          500: 'var(--green-500)',
          600: 'var(--green-600)',
          700: 'var(--green-700)',
          800: 'var(--green-800)',
          900: 'var(--green-900)',
        },

        warning: {
          DEFAULT: 'var(--yellow-500)',
          50: 'var(--yellow-50)',
          100: 'var(--yellow-100)',
          200: 'var(--yellow-200)',
          300: 'var(--yellow-300)',
          400: 'var(--yellow-400)',
          500: 'var(--yellow-500)',
          600: 'var(--yellow-600)',
          700: 'var(--yellow-700)',
          800: 'var(--yellow-800)',
          900: 'var(--yellow-900)',
        },

        danger: {
          DEFAULT: 'var(--red-500)',
          50: 'var(--red-50)',
          100: 'var(--red-100)',
          200: 'var(--red-200)',
          300: 'var(--red-300)',
          400: 'var(--red-400)',
          500: 'var(--red-500)',
          600: 'var(--red-600)',
          700: 'var(--red-700)',
          800: 'var(--red-800)',
          900: 'var(--red-900)',
        },
      },

      fontSize: {
        // Bold
        'display-sm': ['16px', { lineHeight: '1.4', fontWeight: '700' }],
        'display-md': ['20px', { lineHeight: '1.4', fontWeight: '700' }],
        'display-lg': ['24px', { lineHeight: '1.3', fontWeight: '700' }],

        // Bold (title in post)
        'title-sm': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'title-lg': ['40px', { lineHeight: '1.2', fontWeight: '700' }],

        // Semi-bold
        'text-strong-sm': ['13px', { lineHeight: '1.5', fontWeight: '600' }],
        'text-strong-md': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        'text-strong-lg': ['20px', { lineHeight: '1.4', fontWeight: '600' }],

        // Medium
        'text-xs': ['11px', { lineHeight: '1.6', fontWeight: '500' }],
        'text-sm': ['13px', { lineHeight: '1.6', fontWeight: '500' }],
        'text-md': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        'text-lg': ['15px', { lineHeight: '1.5', fontWeight: '500' }],
        'text-xl': ['17px', { lineHeight: '1.5', fontWeight: '500' }],

        // Regular
        'body-sm': ['13px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
} satisfies Config
