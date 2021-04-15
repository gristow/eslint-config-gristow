// See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md for tslint-eslint rule migration

const rules = require('./shared-rules');
const prettierRules = require('./prettier-rules');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  overrides: [
    {
      files: ['*.svelte'],
      plugins: ['svelte3', '@typescript-eslint', 'jsdoc'],
      processor: 'svelte3/svelte3',
      extends: ['airbnb-typescript'],
      rules: {
        ...rules,
        'import/first': 'off',
        'import/no-cycle': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
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
        'react/static-property-placement': 'off',
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
      },
      settings: {
        'svelte3/typescript': require('typescript'),
      },
    },
    {
      files: ['*.js', '*.jsx'],
      plugins: ['prettier', 'jsdoc'],
      extends: ['airbnb', 'prettier'],
      rules: {
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
        ...rules,
        ...prettierRules,
        'import/no-cycle': 'off',
      },
    },
    {
      files: ['*.ts'],
      plugins: ['prettier', 'eslint-plugin-tsdoc'],
      parser: '@typescript-eslint/parser',
      extends: ['airbnb-typescript', 'prettier'],
      rules: {
        'react/static-property-placement': 'off',
        '@typescript-eslint/indent': 'off',
        'import/no-cycle': 'off', // otherwise captures cycles by type inclusion
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        'import/no-unresolved': 0,
        'no-useless-constructor': 'off',
        // no-dupe-class-members should be removed when this PR lands:
        // https://github.com/typescript-eslint/typescript-eslint/pull/1492
        'no-dupe-class-members': 'off',
        // So we can allow overloading, and list of class props defined
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/no-useless-constructor': 'error',
        'tsdoc/syntax': 'warn',
        'no-shadow': 'off',
        ...rules,
        ...prettierRules,
      },
      settings: {
        jsdoc: {
          mode: 'typescript',
        },
      },
    },
  ],
};
