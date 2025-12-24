// @ts-check
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

// Import our custom rule sets
import airbnbBaseRules from './rules/airbnb-base-rules.js';
import sharedRules from './rules/shared-rules.js';
import importRules from './rules/import-rules.js';
import typescriptOnlyRules from './rules/typescript-only-rules.js';

/**
 * ESLint flat config for eslint-config-gristow
 *
 * This configuration provides:
 * - ESLint recommended rules
 * - TypeScript-ESLint recommended rules
 * - Airbnb-style rules (custom implementation for ESLint 9)
 * - Prettier compatibility
 * - Import plugin rules
 */
export default defineConfig(
  // Global ignores
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.svelte-kit/**',
    ],
  },

  // Base ESLint recommended
  eslint.configs.recommended,

  // TypeScript recommended
  tseslint.configs.recommended,

  // Main configuration
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'import': importPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        projectService: {
          allowDefaultProject: ['test/sample.js', 'test/fixtures/*.js'],
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2017,
        ...globals.node,
      },
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: true,
      },
    },
    rules: {
      // Apply Airbnb base rules first
      ...airbnbBaseRules,
      // Then our shared rules (which override some Airbnb rules)
      ...sharedRules,
      // Then import-specific rules
      ...importRules,
    },
  },

  // TypeScript-specific overrides
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: typescriptOnlyRules,
  },

  // Prettier must be last to override formatting rules
  eslintConfigPrettier,

  // Re-enable curly after Prettier (we want this enforced for code safety)
  {
    rules: {
      curly: ['error', 'all'],
    },
  },
);
