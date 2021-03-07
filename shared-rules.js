/**
 * These rules are shared by both .js and .ts
 */
module.exports = {
  'no-use-before-define': ['error', { functions: false }],
  '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  'prettier/prettier': [
    'error',
    {
      trailingComma: 'es5',
      singleQuote: true,
      printWidth: 100,
      tabWidth: 2,
    },
  ],
  'no-duplicate-imports': 'error',
  'no-debugger': 0,
  'no-restricted-syntax': [2, 'LabeledStatement', 'WithStatement'],
  'prefer-const': [
    'error',
    {
      destructuring: 'all',
    },
  ],
  'arrow-body-style': [2, 'as-needed'],
  'import/extensions': 0,
  'no-shadow': [
    2,
    {
      hoist: 'all',
      allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
    },
  ],
  quotes: [
    2,
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],
  'func-names': ['error', 'as-needed'],
  'prefer-destructuring': 0,
  'prefer-promise-reject-errors': 0,
  'wrap-iife': 'off',
  'no-else-return': 'warn',
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  'import/prefer-default-export': 'off',
  'prefer-template': 'warn',
  'no-plusplus': 'off',
  'no-confusing-arrow': 'off',
  'no-console': 'off',
  'no-continue': 'warn',
  'no-nested-ternary': 'warn',
  'no-prototype-builtins': 'warn',
  'no-bitwise': 'off',
  'no-underscore-dangle': 'off',
  'class-methods-use-this': 'warn',
  'no-param-reassign': 'off',
  'prefer-rest-params': 'warn',
  'default-case': 'off',
  'no-mixed-operators': 'off',
  'no-lonely-if': 'warn',
  'guard-for-in': 'warn',
};
