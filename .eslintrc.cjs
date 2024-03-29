const rules = require('./rules/shared-rules.cjs');
const importRules = require('./rules/import-rules.js');
const typescriptOnlyRules = require('./rules/typescript-only-rules.cjs');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb/base',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  // plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    project: './tsconfig.json',
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
    ...rules,
    ...importRules,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: typescriptOnlyRules,
    },
  ],
};
