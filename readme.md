# eslint-config-gristow

An opinionated ESLint configuration for JavaScript and TypeScript projects.

**Version 3.x** - ESLint 9 flat config. For ESLint 8, use version 2.x.

## Installation

```bash
npm install --save-dev eslint-config-gristow eslint
```

## Usage

Create an `eslint.config.js` (or `eslint.config.mjs`) in your project root:

```javascript
import { defineConfig } from 'eslint/config';
import gristowConfig from 'eslint-config-gristow';

export default defineConfig(
  gristowConfig,
  // Add your project-specific overrides here
);
```

### With TypeScript Path Aliases

If your project uses TypeScript path aliases, configure the import resolver:

```javascript
import { defineConfig } from 'eslint/config';
import gristowConfig from 'eslint-config-gristow';

export default defineConfig(
  gristowConfig,
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
);
```

## Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## VS Code Setup

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Add to your VS Code settings (`.vscode/settings.json`):

```json
{
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  },
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  },
  "eslint.validate": ["javascript", "typescript"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## What's Included

This config extends:
- ESLint recommended rules
- TypeScript-ESLint recommended rules
- Airbnb-style rules (custom ESLint 9 implementation)
- Prettier compatibility

## Svelte Projects

For Svelte/SvelteKit projects, use the ESLint configuration provided by `sv create`
or `npx sv add eslint`, which provides better integration with Svelte 5 and SvelteKit.

## License

ISC
