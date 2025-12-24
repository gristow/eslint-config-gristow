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
| `.eslintrc.cjs` | ✅ Replaced | `eslint.config.js` |
| `index.js` | ✅ Updated | Export flat config |
| `svelte.js` | ❌ Removed | (Svelte handled by `sv create`) |
| `svelte/svelte.eslintrc.cjs` | ❌ Removed | (Svelte handled by `sv create`) |
| `rules/svelte-rules.js` | ❌ Removed | (Svelte handled by `sv create`) |
| `rules/shared-rules.cjs` | ✅ Converted | `rules/shared-rules.js` |
| `rules/import-rules.js` | ✅ Updated | `rules/import-rules.js` |
| `rules/naming-convention.cjs` | ✅ Converted | `rules/naming-convention.js` |
| `rules/typescript-only-rules.cjs` | ✅ Converted | `rules/typescript-only-rules.js` |
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

## Phase 2: Convert Existing Rule Files to ESM ✅ COMPLETED

### 2.1 Convert `rules/naming-convention.cjs` to `rules/naming-convention.js` ✅
- [x] Changed `module.exports` to `export default`

### 2.2 Convert `rules/shared-rules.cjs` to `rules/shared-rules.js` ✅
- [x] Changed `module.exports` to `export default`
- [x] Changed `require()` to `import`

### 2.3 Convert `rules/typescript-only-rules.cjs` to `rules/typescript-only-rules.js` ✅
- [x] Changed `module.exports` to `export default`

### 2.4 Convert `rules/svelte-rules.cjs` to `rules/svelte-rules.js` ✅
- [x] Changed `module.exports` to `export default`

### 2.5 Update `rules/import-rules.js` ✅
- [x] Changed `module.exports` to `export default`

---

## Phase 3: Create Main Flat Config ✅ COMPLETED

### 3.1 Create `eslint.config.js` ✅
- [x] Created flat config using `defineConfig`
- [x] ESLint recommended + TypeScript-ESLint recommended
- [x] Configured `languageOptions` with parser, parserOptions, globals
- [x] Configured plugins as objects
- [x] Applied Airbnb → shared → import rules in order
- [x] TypeScript-specific file overrides
- [x] Prettier config last
- [x] Global ignores for node_modules, dist, build, .svelte-kit

### 3.2 Update `index.js` entry point ✅
- [x] Re-exports flat config from `eslint.config.js`
- [x] Added usage documentation in JSDoc

---

## Phase 4: Remove Svelte Configuration ✅ COMPLETED

Svelte projects should use `sv create`'s recommended ESLint setup, which provides
better integration with SvelteKit and Svelte 5. This package will focus on
JavaScript/TypeScript linting only.

### 4.1 Remove Svelte-specific files ✅
- [x] Deleted `svelte.js` (entry point)
- [x] Deleted `svelte/svelte.eslintrc.cjs` (old config)
- [x] Deleted `svelte/` directory
- [x] Deleted `rules/svelte-rules.js`

### 4.2 Update documentation ✅
- [x] Updated README.md for ESLint 9 flat config usage
- [x] Added note that Svelte users should use `sv create` setup

### 4.3 Update package.json ✅
- [x] Removed `eslint-plugin-svelte` from dependencies
- [x] Removed `eslint-plugin-svelte` from peerDependencies

### 4.4 Update files table in this document ✅
- [x] Marked Svelte files as removed

---

## Phase 5: Update Dependencies ✅ COMPLETED

### 5.1 Update `package.json` ✅
- [x] Update `eslint` to `^9.0.0` (peer + dev dependency)
- [x] Use `typescript-eslint` ^8.0.0 (combines parser + plugin, replaces separate packages)
- [x] Update `eslint-config-prettier` to `^10.0.0` (v9-compatible)
- [x] Update `eslint-plugin-import` to `^2.31.0` (v9-compatible)
- [x] Add `eslint-import-resolver-typescript` ^3.6.0
- [x] Add `@eslint/js` ^9.0.0 for eslint.configs.recommended
- [x] Add `globals` ^16.0.0 for global definitions
- [x] Remove Airbnb configs (replaced with custom rule sets)
- [x] Remove Svelte plugin (handled by `sv create`)
- [x] Update peer dependencies (eslint ^9.0.0, typescript ^5.0.0)
- [x] Add `"type": "module"` to package.json
- [x] Add `exports` field for proper ESM support

### 5.2 Verify plugin compatibility ✅
- [x] `eslint-plugin-import` v2.31.0 - works with ESLint 9
- [x] `eslint-config-prettier` v10.0.0 - works with ESLint 9
- [x] `typescript-eslint` v8.x - designed for ESLint 9

---

## Phase 6: Clean Up ✅ COMPLETED

### 6.1 Remove legacy files ✅
- [x] Delete `.eslintrc.cjs`
- [x] Delete `.eslintrc.js.original.bak`, `.eslintrc.cjs.recent.bak`, `.eslintrc.cjs.working.bak`
- [x] Delete `svelte/svelte.eslintrc.cjs` (done in Phase 4)
- [x] Delete old `.cjs` rule files after converting to `.js` (done in Phase 2)

### 6.2 Update documentation ✅
- [x] Update `README.md` with new usage instructions (done in Phase 4)
- [x] Document flat config usage for consumers (done in Phase 4)
- [x] Create `CHANGELOG.md` with v3.0.0 breaking changes and migration guide

### 6.3 Update package metadata ✅
- [x] Bump major version to `3.0.0`
- [x] Update `main` field if needed (kept as `index.js`)
- [x] Add `exports` field for proper ESM support (done in Phase 5)
- [x] Update `type` to `"module"` in package.json (done in Phase 5)

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
- [x] Convert all rule files to ESM ✅
- [x] Create main `eslint.config.js` ✅
- [x] Remove Svelte configuration (use `sv create` instead) ✅
- [x] Update all dependencies ✅
- [x] Update entry points (`index.js`) ✅
- [ ] Test configuration
- [x] Bump to v3.0.0 ✅
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
