const svelteRules = require('../rules/svelte-rules.cjs');

module.exports = {
  extends: ['gristow', 'plugin:svelte/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.svelte'],
    },
    'import/resolver': {
      typescript: true,
    },
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: svelteRules,
    },
  ],
};
