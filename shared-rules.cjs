/**
 * These rules are shared by both .js and .ts
 */
module.exports = {
  'no-unused-vars': 'error',
  'no-unreachable': 'error',
  'no-use-before-define': ['error', { functions: false }],
  '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  'no-duplicate-imports': 'error',
  'no-debugger': 0,
  'no-restricted-syntax': [2, 'LabeledStatement', 'WithStatement'],
  'prefer-arrow-callback': 'off',
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
  // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
  ],
  'import/no-deprecated': 'error',
  'import/export': 'error',
  'import/no-empty-named-blocks': 'error',
  'import/order': [
    'warn',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
    },
  ],
  'import/newline-after-import': 'warn',
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
