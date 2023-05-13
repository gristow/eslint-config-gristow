module.exports = {
  '@typescript-eslint/naming-convention': [
    'error',
    // By default, all should be camelCase
    {
      selector: 'default',
      format: ['camelCase'],
    },
    // Or, in the case of class names, type names, and interfaces, UpperCamelCase
    // Make sure types and interfaces are in PascalCase. (Also applies
    // to classes.)
    {
      selector: 'typeLike',
      format: ['PascalCase'],
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
      filter: {
        regex: '^[a-zA-Z]+(_[a-zA-Z\\d]+)*$',
        match: true,
      },
      format: null,
    },
  ],
};
