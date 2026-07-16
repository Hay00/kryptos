import globals from 'globals'; // if you want to define globals, install `globals` with `npm install -D globals`
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

import { defineConfig } from 'eslint/config';

export default defineConfig(
  // Global ignores (files that ESLint should never check)
  {
    ignores: ['dist', 'node_modules', 'coverage', '*.config.ts'],
  },

  // Base recommended rules for JavaScript/TypeScript
  ...tseslint.configs.recommended,

  // React specific settings
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node, // if you have Node scripts (vite.config, etc.)
      },
      parserOptions: {
        project: './tsconfig.json', // to enable type‑aware rules (optional)
      },
    },
    plugins: {
      'react-hooks': reactHooks as any,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Additional custom rules
      'no-unused-vars': 'off', // TypeScript handles this better
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Overrides for test files (if you use Vitest)
  {
    files: ['**/*.test.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }
);
