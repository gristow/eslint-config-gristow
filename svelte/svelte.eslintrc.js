// See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md for tslint-eslint rule migration

const rules = require('../shared-rules.cjs');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
    allowAutomaticSingleRunInference: true,
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
    requireConfigFile: false,
  },
  extends: ['gristow'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc', 'eslint-plugin-svelte'],
      extends: ['airbnb-typescript/base', 'gristow', 'plugin:svelte/recommended'],
      rules: {
        ...rules,
        '@typescript-eslint/no-throw-literal': 'error',
        /**
         * eslint-plugin-svelte3 has issues, basically, with any eslint fix that creates a
         * multi-line fix. So, lots has to be disabled... even so, I'm sure I've missed some
         * see https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md
         */
        'import/first': 'off',
        'import/no-cycle': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
        'import/no-useless-path-segments': 'off',
        // Prettier will add an empty line before end of </script> so this has to be off.
        'no-multiple-empty-lines': 'off',
        // Prettier will sometimes add a new line after =, so disable this:
        'operator-linebreak': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        'no-useless-constructor': 'off',
        // no-dupe-class-members should be removed when this PR lands:
        // https://github.com/typescript-eslint/typescript-eslint/pull/1492
        'no-dupe-class-members': 'off',
        // So we can allow overloading, and list of class props defined
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/no-useless-constructor': 'error',
        'tsdoc/syntax': 'warn',
        // We get these via TS checking, and w/ import type we might have 2 entries,
        // one for named, one for default, one for actual import.
        'no-duplicate-imports': 'off',
      },
    },
  ],
};
