import { defineConfig } from 'eslint/config';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import nPlugin from 'eslint-plugin-n';
import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export default defineConfig([
  // Игнорируемые файлы и папки
  {
    ignores: [
      'dist',
      'node_modules',
      'build',
      'package-lock.json',
      'package.json',
      'tsconfig*.json',
      'eslint.config.js'],
  },
  // Конфигурация для JS/TS/TSX
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      n: nPlugin,
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      // Prettier правило
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          useTabs: false,
          tabWidth: 2,
          printWidth: 80,
          trailingComma: 'es5',
          arrowParens: 'avoid',
          bracketSpacing: true,
          endOfLine: 'lf',
        },
      ],
      // Правила import
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/extensions': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', ['internal', 'unknown', 'parent', 'sibling', 'index', 'object']],
        },
      ],
      // Базовые правила ESLint
      indent: 'off',
      'no-shadow': 'off',
      'no-param-reassign': ['error', { props: false }],
      'no-unused-expressions': 'off',
      'no-use-before-define': 'off',
      'n/no-process-env': 'error',
      'max-len': ['error', { code: 120, ignoreComments: true }],
      'prefer-destructuring': 'warn',
      curly: ['error', 'all'],
      'class-methods-use-this': 'off',
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
      // TypeScript правила
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'array' }],
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'property',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
          leadingUnderscore: 'allow',
        },
        {
          selector: ['property', 'method'],
          format: null,
          modifiers: ['requiresQuotes'],
        },
        {
          selector: 'enum',
          format: ['PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'enumMember',
          format: ['PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
      ],
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: true,
          variables: true,
          ignoreTypeReferences: true,
          typedefs: false,
        },
      ],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      // React правила
      'react/jsx-boolean-value': 'error',
      'react/display-name': 'warn',
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never', propElementValues: 'always' }],
      'react/jsx-handler-names': ['warn', { checkLocalVariables: false, checkInlineFunction: true }],
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-sort-props': ['warn', { shorthandFirst: true, callbacksLast: true }],
      'react/prop-types': 'off',
      'react/self-closing-comp': ['error', { component: true, html: true }],
      // React Hooks правила
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // React Refresh правило
      'react-refresh/only-export-components': 'warn',
      // JSX-A11y правила
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/no-static-element-interactions': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
    },
  },
  {
    files: ['**/*.json', '**/*.jsonc', 'tsconfig*.json'],
    languageOptions: {
      parser: eslintPluginJsonc.parser,
    },
    plugins: {
      jsonc: eslintPluginJsonc,
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'].rules,
      ...eslintPluginJsonc.configs['flat/prettier'].rules,
      'prettier/prettier': 'error',
      'jsonc/sort-keys': 'error',
    },
  },
  {
    files: ['*.ts'],
    rules: {
        'no-empty-function': 0,
				'no-useless-constructor': 0,
				'no-unused-vars': 0,
				quotes: [2, 'single'],
			},
		},
		{
			files: ['**/config.{j,t}s', '**/*.config.{j,t}s', '**/environment.{j,t}s'],
			rules: {
				'node/no-process-env': 0,
			},
		},
]);