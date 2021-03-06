// See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md for tslint-eslint rule migration

const rules = require('./shared-rules');
const prettierRules = require('./prettier-rules');

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    project: ['./tsconfig.json'],
    allowAutomaticSingleRunInference: true,
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
    requireConfigFile: false,
  },
  overrides: [
    {
      files: ['*.svelte'],
      plugins: ['svelte3', '@typescript-eslint', 'eslint-plugin-tsdoc'],
      processor: 'svelte3/svelte3',
      extends: ['airbnb-typescript/base'],
      rules: {
        ...rules,
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
      settings: {
        'svelte3/typescript': require('typescript'),
      },
    },
    {
      files: ['*.js'],
      plugins: ['prettier', 'jsdoc'],
      extends: ['airbnb/base', 'prettier'],
      rules: {
        ...rules,
        ...prettierRules,
        '@typescript-eslint/indent': 'off',
        'jsdoc/check-alignment': 1, // Recommended
        'jsdoc/check-param-names': 1, // Recommended
        'jsdoc/check-tag-names': 1, // Recommended
        'jsdoc/check-types': 1, // Recommended
        'jsdoc/implements-on-classes': 1, // Recommended
        'jsdoc/newline-after-description': 1, // Recommended
        'jsdoc/no-undefined-types': 1, // Recommended
        'jsdoc/require-description': 'warn',
        'jsdoc/require-param': 1, // Recommended
        'jsdoc/require-param-description': 'warn', // Recommended
        'jsdoc/require-param-name': 1, // Recommended
        'jsdoc/require-param-type': 1, // Recommended
        'jsdoc/require-returns': 'warn', // Recommended
        'jsdoc/require-returns-check': 1, // Recommended
        'jsdoc/require-returns-description': 'warn', // Recommended
        'jsdoc/require-returns-type': 1, // Recommended
        'jsdoc/valid-types': 1, // Recommended
        'import/no-cycle': 'off',
      },
    },
    {
      files: ['*.ts'],
      plugins: ['prettier', 'eslint-plugin-tsdoc'],
      parser: '@typescript-eslint/parser',
      extends: ['airbnb-typescript/base', 'prettier'],
      rules: {
        ...rules,
        ...prettierRules,
        '@typescript-eslint/indent': 'off',
        'import/no-cycle': 'off', // otherwise captures cycles by type inclusion
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        'import/no-unresolved': 0,
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        // no-dupe-class-members should be removed when this PR lands:
        // https://github.com/typescript-eslint/typescript-eslint/pull/1492
        'no-dupe-class-members': 'off',
        // So we can allow overloading, and list of class props defined
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/no-useless-constructor': 'error',
        'tsdoc/syntax': 'warn',
        'no-shadow': 'off',
        // We get these via TS checking, and w/ import type we might have 2 entries,
        // one for named, one for default, one for actual import.
        'import/no-duplicates': 'off',
        'no-duplicate-imports': 'off',
      },
      settings: {
        jsdoc: {
          mode: 'typescript',
        },
      },
    },
  ],
};
