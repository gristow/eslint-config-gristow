// @ts-check
/**
 * eslint-config-gristow
 *
 * ESLint 9 flat config for JavaScript and TypeScript projects.
 *
 * Usage in your eslint.config.js:
 *
 * ```javascript
 * import { defineConfig } from 'eslint/config';
 * import gristowConfig from 'eslint-config-gristow';
 *
 * export default defineConfig(
 *   gristowConfig,
 *   // your additional config...
 * );
 * ```
 */
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
          // Allow common config files to be linted without being in tsconfig
          allowDefaultProject: [
            '*.config.js',
            '*.config.cjs',
            '*.config.mjs',
            '*.config.ts',
            '.*.js',
            '.*.cjs',
            '.*.mjs',
          ],
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

  // Svelte-specific overrides
  {
    files: ['**/*.svelte'],
    rules: {
      // Svelte 5 $props() requires 'let' for reactive destructuring
      'prefer-const': 'off',
      // Disable import/no-duplicates - same issue as TS files with .d.ts resolution
      'import/no-duplicates': 'off',
    },
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
