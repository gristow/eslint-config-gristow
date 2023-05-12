/**
 * These rules are shared by both .js and .ts
 */
module.exports = {
  // We disable eslint's no-unused vars, and enable typescript's because
  // otherwise local vars listed in function overloads are flagged.
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'error',

  // We disable eslint's no-unused vars, and enable typescript's because
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 'error',

  'no-unreachable': 'error',
  'no-use-before-define': ['error', { functions: false }],
  // '@-define': ['error', { functions: false }],
  'no-duplicate-imports': 'error',
  'no-debugger': 'off',
  'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
  'prefer-arrow-callback': 'off',
  'prefer-const': [
    'error',
    {
      destructuring: 'all',
    },
  ],
  'arrow-body-style': ['error', 'as-needed'],
  'no-shadow': [
    'error',
    {
      hoist: 'all',
      allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
    },
  ],
  quotes: [
    'error',
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],
  'func-names': ['error', 'as-needed'],
  'prefer-destructuring': 'off',
  'prefer-promise-reject-errors': 'off',
  'wrap-iife': 'off',
  'no-else-return': 'warn',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
  ],
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
  '@typescript-eslint/no-var-requires': 'warn',
  'no-dupe-class-members': 'off',
  // So we can allow overloading, and list of class props defined
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',
  // Enabled by airbnb -- but we use literal throws extensively, and intentionally, in /backend
  'no-throw-literal': 'off',
  '@typescript-eslint/no-throw-literal': 'off',
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',
  'tsdoc/syntax': 'off',
  // Conflicts w/ prettier:
  'object-curly-newline': 'off',
  'operator-linebreak': 'off',
  'implicit-arrow-linebreak': 'off',
  'function-paren-newline': 'off',
  // Snake case often comes in via external libraries
  // camelcase: ['error', {
  //   properties: 'always',
  //   ignoreDestructuring: true,
  //   ignoreImports: true,
  // }],
  camelcase: 'off',
  '@typescript-eslint/naming-convention': [
    'error',
    // By default, all should be camelCase
    {
      selector: 'default',
      format: ['camelCase'],
    },
    // But, when we're destructuring, allow whatever it was:
    {
      selector: 'variable',
      modifiers: ['destructured'],
      format: null,
    },
    // And, if the property requires quotes, allow anything:
    {
      selector: [
        'classProperty',
        'objectLiteralProperty',
        'typeProperty',
        'classMethod',
        'objectLiteralMethod',
        'typeMethod',
        'accessor',
        'enumMember',
      ],
      format: null,
      modifiers: ['requiresQuotes'],
    },
    // But require variables to be in camelCase or UPPER_SNAKE
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE'],
    },
    // Allow leading underscores in function params
    {
      selector: 'parameter',
      format: ['camelCase'],
      leadingUnderscore: 'allow',
    },
    // Allow leading underscores in class private members
    {
      selector: 'memberLike',
      modifiers: ['private'],
      format: ['camelCase'],
      leadingUnderscore: 'allow',
    },
    // And allow snake_case in object literals -- which simplifies
    // our interaction with external libraries where options objects
    // often require these.
    {
      selector: 'objectLiteralProperty',
      format: ['camelCase', 'snake_case'],
    },
    // Make sure types and interfaces are in PascalCase. (Also applies
    // to classes.)
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],
};
