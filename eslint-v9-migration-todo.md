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
| (new) | ✅ Created | `rules/airbnb-base-rules.js` |
| (new) | ✅ Created | `rules/airbnb-best-practices.js` |
| (new) | ✅ Created | `rules/airbnb-errors.js` |
| (new) | ✅ Created | `rules/airbnb-es6.js` |
| (new) | ✅ Created | `rules/airbnb-imports.js` |
| (new) | ✅ Created | `rules/airbnb-style.js` |
| (new) | ✅ Created | `rules/airbnb-variables.js` |

---

## Phase 1: Create Airbnb Rule Sets ✅ COMPLETED

Since `eslint-config-airbnb-base` hasn't been updated for ESLint 9, we need to extract and maintain the rules ourselves. These will be ESM modules exporting rule objects.

### 1.1 Create `rules/airbnb-best-practices.js` ✅
- [x] Extracted ~65 rules from Airbnb's best-practices config (9.2 KB)

### 1.2 Create `rules/airbnb-errors.js` ✅
- [x] Extracted ~45 rules from Airbnb's errors config (4.6 KB)

### 1.3 Create `rules/airbnb-es6.js` ✅
- [x] Extracted ~25 rules from Airbnb's ES6 config (3.5 KB)

### 1.4 Create `rules/airbnb-style.js` ✅
- [x] Extracted ~90 style rules (13.8 KB, many handled by Prettier)

### 1.5 Create `rules/airbnb-variables.js` ✅
- [x] Extracted ~12 variable-related rules (2.8 KB)
- [x] Includes confusing browser globals list

### 1.6 Create `rules/airbnb-imports.js` ✅
- [x] Extracted ~45 import plugin rules (6.1 KB)

### 1.7 Create `rules/airbnb-base-rules.js` ✅
- [x] Aggregator combining all rule sets (0.8 KB)
- [x] Exports both default combined object and named individual exports

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
- [x] Create Airbnb rule replacement files ✅
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
