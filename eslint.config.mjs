import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

import tsParser from '@typescript-eslint/parser'
import tsEslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    // plugins
    plugins: {
      '@typescript-eslint': tsEslint,
      prettier: prettier,
    },
  },
  {
    // parser
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    //  custom rules
    rules: {},
  },
]

export default eslintConfig
