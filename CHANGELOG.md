# Changelog

All notable changes to this project will be documented in this file.

## [3.0.0] - 2025-12-24

### Breaking Changes

- **ESLint 9 Required**: This version requires ESLint 9.x and uses the new flat config format
- **Flat Config Only**: The legacy `.eslintrc.*` format is no longer supported
- **Node.js 18+**: Minimum Node.js version is now 18.0.0
- **ES Modules**: Package is now ESM-only (`"type": "module"`)
- **Svelte Removed**: Svelte configuration has been removed; use `sv create` or `npx sv add eslint` for Svelte projects

### Added

- ESLint 9 flat config with `defineConfig()` support
- Custom Airbnb-style rule sets (replacing `eslint-config-airbnb-base` which hasn't updated for ESLint 9):
  - `airbnb-best-practices.js` - ~65 best practice rules
  - `airbnb-errors.js` - ~45 error prevention rules
  - `airbnb-es6.js` - ~25 ES6+ rules
  - `airbnb-style.js` - Style rules (formatting rules disabled for Prettier compatibility)
  - `airbnb-variables.js` - ~12 variable-related rules
  - `airbnb-imports.js` - ~45 import plugin rules
- `typescript-eslint` v8 integration (combines parser and plugin)
- `@eslint/js` for ESLint recommended rules
- `globals` package for environment global definitions
- Proper `exports` field in package.json
- Automated test suite with comprehensive rule detection tests
- `curly` rule re-enabled after Prettier config (enforces braces for all control statements)

### Changed

- All rule files converted from CommonJS to ES Modules
- Configuration now uses `languageOptions` instead of `parser`/`parserOptions`/`env`
- TypeScript project service enabled by default (`projectService: true`)

### Removed

- Legacy `.eslintrc.cjs` configuration
- Svelte support (use `sv create` instead)
- `eslint-config-airbnb-base` dependency
- `eslint-config-airbnb-typescript` dependency
- `@typescript-eslint/parser` (replaced by `typescript-eslint`)
- `@typescript-eslint/eslint-plugin` (replaced by `typescript-eslint`)

### Migration Guide

1. Update your ESLint config file from `.eslintrc.*` to `eslint.config.js`:

```javascript
import { defineConfig } from 'eslint/config';
import gristowConfig from 'eslint-config-gristow';

export default defineConfig(
  gristowConfig,
  // Add your project-specific overrides here
);
```

2. Update your `package.json` scripts:
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

3. For Svelte projects, use the ESLint setup from `sv create` or `npx sv add eslint` instead.

## [2.x] - Previous Versions

See git history for changes in version 2.x and earlier.
