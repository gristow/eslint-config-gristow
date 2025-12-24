# ESLint 9 Migration Plan

This document outlines the migration from ESLint 8 (legacy `.eslintrc.cjs` format) to ESLint 9 (flat config with `defineConfig`).

## Overview

### Key Changes
- Move from `.eslintrc.cjs` to `eslint.config.js` (flat config)
- Use `defineConfig()` from `eslint/config` for type-safe configuration
- Replace Airbnb base config with custom rule sets (Airbnb hasn't upgraded to v9)
- Update all dependencies to ESLint 9-compatible versions
- Convert `env` to `languageOptions.globals`
- Convert `parserOptions` to `languageOptions.parserOptions`

### Files to Create/Modify

| Current File | Action | New File |
|--------------|--------|----------|
| `.eslintrc.cjs` | Replace | `eslint.config.js` |
| `index.js` | Update | Export flat config |
| `svelte.js` | Update | Export flat Svelte config |
| `svelte/svelte.eslintrc.cjs` | Replace | `svelte/svelte.config.js` |
| `rules/shared-rules.cjs` | Keep | Convert to ESM |
| `rules/import-rules.js` | Keep | Convert to ESM |
| `rules/naming-convention.cjs` | Keep | Convert to ESM |
| `rules/typescript-only-rules.cjs` | Keep | Convert to ESM |
| `rules/svelte-rules.cjs` | Keep | Convert to ESM |
| (new) | Create | `rules/airbnb-base-rules.js` |
| (new) | Create | `rules/airbnb-best-practices.js` |
| (new) | Create | `rules/airbnb-errors.js` |
| (new) | Create | `rules/airbnb-es6.js` |
| (new) | Create | `rules/airbnb-imports.js` |
| (new) | Create | `rules/airbnb-style.js` |
| (new) | Create | `rules/airbnb-variables.js` |

---

## Phase 1: Create Airbnb Rule Sets

Since `eslint-config-airbnb-base` hasn't been updated for ESLint 9, we need to extract and maintain the rules ourselves. These will be ESM modules exporting rule objects.

### 1.1 Create `rules/airbnb-best-practices.js`
Extract ~85 rules from Airbnb's best-practices config:
- [ ] `accessor-pairs: 'off'`
- [ ] `array-callback-return: ['error', { allowImplicit: true }]`
- [ ] `block-scoped-var: 'error'`
- [ ] `class-methods-use-this: ['error', { exceptMethods: [] }]`
- [ ] `consistent-return: 'error'`
- [ ] `curly: ['error', 'multi-line']` (note: we override to `['error', 'all']`)
- [ ] `default-case: ['error', { commentPattern: '^no default$' }]`
- [ ] `default-case-last: 'error'`
- [ ] `default-param-last: 'error'`
- [ ] `dot-notation: ['error', { allowKeywords: true }]`
- [ ] `eqeqeq: ['error', 'always', { null: 'ignore' }]`
- [ ] `grouped-accessor-pairs: 'error'`
- [ ] `guard-for-in: 'error'`
- [ ] `max-classes-per-file: ['error', 1]`
- [ ] `no-alert: 'warn'`
- [ ] `no-caller: 'error'`
- [ ] `no-case-declarations: 'error'`
- [ ] `no-constructor-return: 'error'`
- [ ] `no-else-return: ['error', { allowElseIf: false }]`
- [ ] `no-empty-function: ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }]`
- [ ] `no-empty-pattern: 'error'`
- [ ] `no-eval: 'error'`
- [ ] `no-extend-native: 'error'`
- [ ] `no-extra-bind: 'error'`
- [ ] `no-extra-label: 'error'`
- [ ] `no-fallthrough: 'error'`
- [ ] `no-global-assign: 'error'`
- [ ] `no-implied-eval: 'error'`
- [ ] `no-iterator: 'error'`
- [ ] `no-labels: ['error', { allowLoop: false, allowSwitch: false }]`
- [ ] `no-lone-blocks: 'error'`
- [ ] `no-loop-func: 'error'`
- [ ] `no-multi-str: 'error'`
- [ ] `no-new: 'error'`
- [ ] `no-new-func: 'error'`
- [ ] `no-new-wrappers: 'error'`
- [ ] `no-nonoctal-decimal-escape: 'error'`
- [ ] `no-octal: 'error'`
- [ ] `no-octal-escape: 'error'`
- [ ] `no-param-reassign: ['error', { props: true, ignorePropertyModificationsFor: [...] }]`
- [ ] `no-proto: 'error'`
- [ ] `no-redeclare: 'error'`
- [ ] `no-restricted-properties: ['error', ...]`
- [ ] `no-return-assign: ['error', 'always']`
- [ ] `no-script-url: 'error'`
- [ ] `no-self-assign: ['error', { props: true }]`
- [ ] `no-self-compare: 'error'`
- [ ] `no-sequences: 'error'`
- [ ] `no-throw-literal: 'error'`
- [ ] `no-unused-expressions: ['error', ...]`
- [ ] `no-unused-labels: 'error'`
- [ ] `no-useless-catch: 'error'`
- [ ] `no-useless-concat: 'error'`
- [ ] `no-useless-escape: 'error'`
- [ ] `no-useless-return: 'error'`
- [ ] `no-void: 'error'`
- [ ] `no-with: 'error'`
- [ ] `prefer-promise-reject-errors: ['error', { allowEmptyReject: true }]`
- [ ] `prefer-regex-literals: ['error', { disallowRedundantWrapping: true }]`
- [ ] `radix: 'error'`
- [ ] `vars-on-top: 'error'`
- [ ] `wrap-iife: ['error', 'outside', { functionPrototypeMethods: false }]`
- [ ] `yoda: 'error'`

### 1.2 Create `rules/airbnb-errors.js`
Extract ~50 rules from Airbnb's errors config:
- [ ] `for-direction: 'error'`
- [ ] `getter-return: ['error', { allowImplicit: true }]`
- [ ] `no-async-promise-executor: 'error'`
- [ ] `no-await-in-loop: 'error'`
- [ ] `no-compare-neg-zero: 'error'`
- [ ] `no-cond-assign: ['error', 'always']`
- [ ] `no-console: 'warn'` (note: we override to `'off'`)
- [ ] `no-constant-condition: 'warn'`
- [ ] `no-control-regex: 'error'`
- [ ] `no-debugger: 'error'` (note: we override to `'off'`)
- [ ] `no-dupe-args: 'error'`
- [ ] `no-dupe-else-if: 'error'`
- [ ] `no-dupe-keys: 'error'`
- [ ] `no-duplicate-case: 'error'`
- [ ] `no-empty: 'error'`
- [ ] `no-empty-character-class: 'error'`
- [ ] `no-ex-assign: 'error'`
- [ ] `no-extra-boolean-cast: 'error'`
- [ ] `no-func-assign: 'error'`
- [ ] `no-import-assign: 'error'`
- [ ] `no-inner-declarations: 'error'`
- [ ] `no-invalid-regexp: 'error'`
- [ ] `no-irregular-whitespace: 'error'`
- [ ] `no-loss-of-precision: 'error'`
- [ ] `no-misleading-character-class: 'error'`
- [ ] `no-obj-calls: 'error'`
- [ ] `no-promise-executor-return: 'error'`
- [ ] `no-prototype-builtins: 'error'`
- [ ] `no-regex-spaces: 'error'`
- [ ] `no-setter-return: 'error'`
- [ ] `no-sparse-arrays: 'error'`
- [ ] `no-template-curly-in-string: 'error'`
- [ ] `no-unexpected-multiline: 'error'`
- [ ] `no-unreachable: 'error'`
- [ ] `no-unreachable-loop: 'error'`
- [ ] `no-unsafe-finally: 'error'`
- [ ] `no-unsafe-negation: 'error'`
- [ ] `no-unsafe-optional-chaining: ['error', { disallowArithmeticOperators: true }]`
- [ ] `no-useless-backreference: 'error'`
- [ ] `use-isnan: 'error'`
- [ ] `valid-typeof: ['error', { requireStringLiterals: true }]`

### 1.3 Create `rules/airbnb-es6.js`
Extract ~35 rules from Airbnb's ES6 config:
- [ ] `arrow-body-style: ['error', 'as-needed', { requireReturnForObjectLiteral: false }]`
- [ ] `constructor-super: 'error'`
- [ ] `no-class-assign: 'error'`
- [ ] `no-confusing-arrow: ['error', { allowParens: true }]` (note: we override to `'off'`)
- [ ] `no-const-assign: 'error'`
- [ ] `no-dupe-class-members: 'error'`
- [ ] `no-duplicate-imports: 'off'`
- [ ] `no-new-symbol: 'error'`
- [ ] `no-restricted-exports: ['error', { restrictedNamedExports: ['default', 'then'] }]`
- [ ] `no-this-before-super: 'error'`
- [ ] `no-useless-computed-key: 'error'`
- [ ] `no-useless-constructor: 'error'`
- [ ] `no-useless-rename: 'error'`
- [ ] `no-var: 'error'`
- [ ] `object-shorthand: ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }]`
- [ ] `prefer-arrow-callback: ['error', { allowNamedFunctions: false, allowUnboundThis: true }]` (note: we override to `'off'`)
- [ ] `prefer-const: ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }]`
- [ ] `prefer-destructuring: ['error', ...]` (note: we override to `'off'`)
- [ ] `prefer-numeric-literals: 'error'`
- [ ] `prefer-rest-params: 'error'`
- [ ] `prefer-spread: 'error'`
- [ ] `prefer-template: 'error'`
- [ ] `require-yield: 'error'`
- [ ] `symbol-description: 'error'`

### 1.4 Create `rules/airbnb-style.js`
Extract style rules (many are formatting-related; Prettier handles most):
- [ ] `camelcase: 'error'` (note: we override to `'off'` and use naming-convention)
- [ ] `func-names: 'warn'` (note: we override to `['error', 'as-needed']`)
- [ ] `lines-between-class-members: ['error', 'always', { exceptAfterSingleLine: false }]`
- [ ] `new-cap: 'error'`
- [ ] `no-array-constructor: 'error'`
- [ ] `no-bitwise: 'error'` (note: we override to `'off'`)
- [ ] `no-continue: 'error'` (note: we override to `'warn'`)
- [ ] `no-lonely-if: 'error'`
- [ ] `no-multi-assign: 'error'`
- [ ] `no-nested-ternary: 'error'` (note: we override to `'warn'`)
- [ ] `no-new-object: 'error'`
- [ ] `no-plusplus: 'error'` (note: we override to `'off'`)
- [ ] `no-restricted-syntax: ['error', ...]`
- [ ] `no-underscore-dangle: 'error'` (note: we override to `'off'`)
- [ ] `no-unneeded-ternary: ['error', { defaultAssignment: false }]`
- [ ] `one-var: ['error', 'never']`
- [ ] `operator-assignment: ['error', 'always']`
- [ ] `prefer-exponentiation-operator: 'error'`
- [ ] `prefer-object-spread: 'error'`
- [ ] `quotes: ['error', 'single', { avoidEscape: true }]`
- [ ] `spaced-comment: ['error', 'always', ...]`
- [ ] `unicode-bom: ['error', 'never']`

### 1.5 Create `rules/airbnb-variables.js`
Extract ~12 variable-related rules:
- [ ] `no-delete-var: 'error'`
- [ ] `no-label-var: 'error'`
- [ ] `no-restricted-globals: ['error', ...]`
- [ ] `no-shadow: 'error'`
- [ ] `no-shadow-restricted-names: 'error'`
- [ ] `no-undef: 'error'`
- [ ] `no-undef-init: 'error'`
- [ ] `no-unused-vars: ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }]`
- [ ] `no-use-before-define: ['error', { functions: true, classes: true, variables: true }]`

### 1.6 Create `rules/airbnb-imports.js`
Extract import-related rules (already partially in `import-rules.js`):
- [ ] `import/export: 'error'`
- [ ] `import/first: 'error'`
- [ ] `import/no-absolute-path: 'error'`
- [ ] `import/no-amd: 'error'`
- [ ] `import/no-cycle: ['error', { maxDepth: '∞' }]`
- [ ] `import/no-duplicates: 'error'`
- [ ] `import/no-dynamic-require: 'error'`
- [ ] `import/no-extraneous-dependencies: ['error', ...]`
- [ ] `import/no-import-module-exports: 'error'`
- [ ] `import/no-mutable-exports: 'error'`
- [ ] `import/no-named-as-default: 'error'`
- [ ] `import/no-named-as-default-member: 'error'`
- [ ] `import/no-named-default: 'error'`
- [ ] `import/no-relative-packages: 'error'`
- [ ] `import/no-self-import: 'error'`
- [ ] `import/no-unresolved: ['error', { commonjs: true, caseSensitive: true }]`
- [ ] `import/no-useless-path-segments: ['error', { commonjs: true }]`
- [ ] `import/no-webpack-loader-syntax: 'error'`
- [ ] `import/order: ['error', { groups: [...] }]`
- [ ] `import/newline-after-import: 'error'`
- [ ] `import/prefer-default-export: 'error'`

### 1.7 Create `rules/airbnb-base-rules.js`
Main aggregator file that combines all Airbnb rules:
- [ ] Import and spread all sub-rule files
- [ ] Export as a single rules object

---

## Phase 2: Convert Existing Rule Files to ESM

### 2.1 Convert `rules/shared-rules.cjs` to `rules/shared-rules.js`
- [ ] Change `module.exports` to `export default`
- [ ] Change `require()` to `import`
- [ ] Update naming-convention import

### 2.2 Convert `rules/naming-convention.cjs` to `rules/naming-convention.js`
- [ ] Change `module.exports` to `export default`

### 2.3 Convert `rules/typescript-only-rules.cjs` to `rules/typescript-only-rules.js`
- [ ] Change `module.exports` to `export default`

### 2.4 Convert `rules/svelte-rules.cjs` to `rules/svelte-rules.js`
- [ ] Change `module.exports` to `export default`

### 2.5 Keep `rules/import-rules.js`
- [ ] Already ESM-compatible (uses `module.exports` but in `.js`)
- [ ] Update to proper ESM syntax if needed

---

## Phase 3: Create Main Flat Config

### 3.1 Create `eslint.config.js`
Replace `.eslintrc.cjs` with flat config using `defineConfig`:

```javascript
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

export default defineConfig(
  // Global ignores
  { ignores: ['**/node_modules/**', '**/dist/**'] },

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
        projectService: true,
      },
      globals: {
        ...globals.browser,
        ...globals.es2017,
        ...globals.node,
      },
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },
      'import/resolver': {
        typescript: true,
      },
    },
    rules: {
      ...airbnbBaseRules,
      ...sharedRules,
      ...importRules,
    },
  },

  // TypeScript-specific overrides
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: typescriptOnlyRules,
  },

  // Prettier must be last
  eslintConfigPrettier,
);
```

Tasks:
- [ ] Create the file structure above
- [ ] Import all rule sets
- [ ] Configure `languageOptions` (replaces `parser`, `parserOptions`, `env`)
- [ ] Configure `plugins` as objects (not arrays)
- [ ] Configure `settings` for import resolver
- [ ] Apply rules from custom rule sets
- [ ] Add file-specific overrides
- [ ] Ensure Prettier config is last

### 3.2 Update `index.js` entry point
- [ ] Export the flat config from `eslint.config.js`
- [ ] Ensure consumers can use `extends: ['gristow']` or import directly

---

## Phase 4: Create Svelte Flat Config

### 4.1 Create `svelte/svelte.config.js`
Replace `svelte/svelte.eslintrc.cjs`:

```javascript
// @ts-check
import { defineConfig } from 'eslint/config';
import baseConfig from '../eslint.config.js';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import tseslint from 'typescript-eslint';
import svelteRules from '../rules/svelte-rules.js';

export default defineConfig(
  // Extend base config
  ...baseConfig,

  // Svelte plugin recommended
  ...sveltePlugin.configs['flat/recommended'],

  // Svelte-specific configuration
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.svelte'],
      },
    },
    rules: svelteRules,
  },
);
```

Tasks:
- [ ] Create the flat config file
- [ ] Import and spread base config
- [ ] Add Svelte plugin configuration
- [ ] Configure Svelte parser with TypeScript
- [ ] Apply Svelte-specific rules

### 4.2 Update `svelte.js` entry point
- [ ] Export the flat config from `svelte/svelte.config.js`

---

## Phase 5: Update Dependencies

### 5.1 Update `package.json`
- [ ] Update `eslint` to `^9.0.0` or latest
- [ ] Update `@typescript-eslint/eslint-plugin` to `^8.0.0` (v9-compatible)
- [ ] Update `@typescript-eslint/parser` to `^8.0.0`
- [ ] Update `eslint-config-prettier` to latest v9-compatible version
- [ ] Update `eslint-plugin-import` to v9-compatible version (or use `eslint-plugin-import-x`)
- [ ] Update `eslint-plugin-svelte` to latest v9-compatible version
- [ ] Add `globals` package for global definitions
- [ ] Add `typescript-eslint` package (combines parser + plugin)
- [ ] Remove Airbnb configs (`eslint-config-airbnb`, `eslint-config-airbnb-base`, `eslint-config-airbnb-typescript`)
- [ ] Update peer dependencies accordingly

### 5.2 Verify plugin compatibility
- [ ] Check `eslint-plugin-import` v9 support (may need `eslint-plugin-import-x`)
- [ ] Check `eslint-plugin-svelte` v9 support
- [ ] Check `eslint-plugin-jsdoc` v9 support
- [ ] Check `eslint-plugin-tsdoc` v9 support
- [ ] Check `eslint-plugin-prettier` v9 support

---

## Phase 6: Clean Up

### 6.1 Remove legacy files
- [ ] Delete `.eslintrc.cjs`
- [ ] Delete `svelte/svelte.eslintrc.cjs`
- [ ] Delete old `.cjs` rule files after converting to `.js`

### 6.2 Update documentation
- [ ] Update `README.md` with new usage instructions
- [ ] Document flat config usage for consumers
- [ ] Note breaking changes from v2.x to v3.x

### 6.3 Update package metadata
- [ ] Bump major version to `3.0.0`
- [ ] Update `main` field if needed
- [ ] Add `exports` field for proper ESM support
- [ ] Update `type` to `"module"` in package.json

---

## Phase 7: Testing

### 7.1 Test configuration locally
- [ ] Run `npm run lint` on test files
- [ ] Verify all rules work as expected
- [ ] Test TypeScript file linting
- [ ] Test JavaScript file linting
- [ ] Test Svelte file linting

### 7.2 Test as a dependency
- [ ] Create a test project that uses this config
- [ ] Verify flat config extends correctly
- [ ] Test both base and Svelte configurations

### 7.3 Verify rule parity
- [ ] Compare linting output before/after migration
- [ ] Ensure no unintended rule changes
- [ ] Document any intentional changes

---

## Phase 8: Version Upgrade and Deploy

### 8.1 Prepare release
- [ ] Ensure all tests pass
- [ ] Review all changes one final time
- [ ] Update `CHANGELOG.md` (create if doesn't exist) with v3.0.0 changes
- [ ] List breaking changes clearly
- [ ] List new features (flat config, custom Airbnb rules)
- [ ] List removed dependencies

### 8.2 Version bump
- [ ] Run `npm version major` to bump to 3.0.0 (or manually update package.json)
- [ ] Ensure version is updated in package.json
- [ ] Commit version bump: `git commit -m "chore: bump version to 3.0.0"`
- [ ] Create git tag: `git tag v3.0.0`

### 8.3 Publish to npm
- [ ] Ensure you're logged in: `npm whoami`
- [ ] Run `npm publish --dry-run` to verify package contents
- [ ] Review files that will be published (check `.npmignore` or `files` field)
- [ ] Publish: `npm publish`
- [ ] Verify package on npmjs.com

### 8.4 Push to git remote
- [ ] Push commits: `git push origin master`
- [ ] Push tags: `git push origin --tags`
- [ ] Create GitHub release (if applicable) with changelog notes

### 8.5 Post-deployment verification
- [ ] Install package in a fresh project: `npm install eslint-config-gristow@3.0.0`
- [ ] Verify flat config works correctly
- [ ] Test both base and Svelte configurations in real project
- [ ] Check for any console errors or warnings

### 8.6 Notify consumers (optional)
- [ ] Update any dependent projects to use v3.0.0
- [ ] Document migration steps for consumers upgrading from v2.x
- [ ] Consider publishing a migration guide or blog post

---

## Summary Checklist

### Must Complete
- [ ] Create Airbnb rule replacement files
- [ ] Convert all rule files to ESM
- [ ] Create main `eslint.config.js`
- [ ] Create Svelte `svelte.config.js`
- [ ] Update all dependencies
- [ ] Update entry points (`index.js`, `svelte.js`)
- [ ] Test configuration
- [ ] Bump to v3.0.0
- [ ] Publish to npm
- [ ] Push to git with tags

### Nice to Have
- [ ] Add JSDoc types to config files
- [ ] Add `// @ts-check` to all config files
- [ ] Create migration guide for consumers
- [ ] Add automated tests for rule coverage
- [ ] Create GitHub release with changelog
- [ ] Notify dependent projects of upgrade

---

## References

- [ESLint 9 Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide)
- [ESLint Flat Config with defineConfig](https://eslint.org/blog/2025/03/flat-config-extends-define-config-global-ignores/)
- [typescript-eslint Getting Started](https://typescript-eslint.io/getting-started/)
- [Airbnb ESLint Config Source](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
