import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480',
      md: '640px',
      lg: '900px',
      xl: '1200px',
    },

    container: {
      center: true,
      padding: '1rem',
    },

    extend: {
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

        alt: {
          DEFAULT: 'var(--grey-500)',
          50: 'var(--grey-50)',
          100: 'var(--grey-100)',
          200: 'var(--grey-200)',
          300: 'var(--grey-300)',
          400: 'var(--grey-400)',
          500: 'var(--grey-500)',
          600: 'var(--grey-600)',
          700: 'var(--grey-700)',
          800: 'var(--grey-800)',
          900: 'var(--grey-900)',
        },
      },

      borderColor: {
        DEFAULT: 'var(--border)',
      },

      fontSize: {
        'display-xs': ['16px', { lineHeight: '1.4', fontWeight: '600' }],
        'display-sm': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'display-md': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'display-lg': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'display-xl': ['48px', { lineHeight: '1.3', fontWeight: '600' }],

        'strong-sm': ['13px', { lineHeight: '1.5', fontWeight: '500' }],
        'strong-md': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'strong-lg': ['20px', { lineHeight: '1.4', fontWeight: '500' }],

        'default-xs': ['11px', { lineHeight: '1.6', fontWeight: '400' }],
        'default-sm': ['13px', { lineHeight: '1.6', fontWeight: '400' }],
        'default-md': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'default-lg': ['15px', { lineHeight: '1.5', fontWeight: '400' }],
        'default-xl': ['17px', { lineHeight: '1.5', fontWeight: '400' }],

        'body-sm': ['13px', { lineHeight: '1.6', fontWeight: '300' }],
        'body-md': ['15px', { lineHeight: '1.6', fontWeight: '300' }],
      },
    },
  },
  plugins: [],
} satisfies Config
