/**
 * Airbnb Style Rules
 * Extracted from eslint-config-airbnb-base for ESLint 9 compatibility
 *
 * NOTE: Formatting rules are disabled as they are handled by Prettier.
 * Only semantic/code-quality rules are enabled.
 *
 * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
 */
export default {
  // ============================================================
  // DISABLED - Handled by Prettier
  // ============================================================

  // Enforce line breaks after opening and before closing array brackets
  'array-bracket-newline': 'off',

  // Enforce line breaks between array elements
  'array-element-newline': 'off',

  // Enforce spacing inside array brackets
  'array-bracket-spacing': 'off',

  // Enforce spacing inside single-line blocks
  'block-spacing': 'off',

  // Enforce one true brace style
  'brace-style': 'off',

  // Require trailing commas in multiline object literals
  'comma-dangle': 'off',

  // Enforce spacing before and after comma
  'comma-spacing': 'off',

  // Enforce one true comma style
  'comma-style': 'off',

  // Disallow padding inside computed properties
  'computed-property-spacing': 'off',

  // Enforce newline at the end of file, with no multiple empty lines
  'eol-last': 'off',

  // Enforce line breaks between arguments of a function call
  'function-call-argument-newline': 'off',

  // Enforce spacing between functions and their invocations
  'func-call-spacing': 'off',

  // Enforce consistent line breaks inside function parentheses
  'function-paren-newline': 'off',

  // Enforce the location of arrow function bodies with implicit returns
  'implicit-arrow-linebreak': 'off',

  // This option sets a specific tab width for your code
  'indent': 'off',

  // Specify whether double or single quotes should be used in JSX attributes
  'jsx-quotes': 'off',

  // Enforces spacing between keys and values in object literal properties
  'key-spacing': 'off',

  // Require a space before & after certain keywords
  'keyword-spacing': 'off',

  // Disallow mixed 'LF' and 'CRLF' as linebreaks
  'linebreak-style': 'off',

  // Specify the maximum length of a line in your program
  'max-len': 'off',

  // Require multiline ternary
  'multiline-ternary': 'off',

  // Disallow the omission of parentheses when invoking a constructor with no arguments
  'new-parens': 'off',

  // Enforces new line after each method call in the chain to make it more readable
  'newline-per-chained-call': 'off',

  // Disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 'off',

  // Disallow multiple empty lines, only one newline at the end
  'no-multiple-empty-lines': 'off',

  // Disallow use of tabs
  'no-tabs': 'off',

  // Disallow trailing whitespace at the end of lines
  'no-trailing-spaces': 'off',

  // Disallow whitespace before properties
  'no-whitespace-before-property': 'off',

  // Enforce the location of single-line statements
  'nonblock-statement-body-position': 'off',

  // Require padding inside curly braces
  'object-curly-spacing': 'off',

  // Enforce line breaks between braces
  'object-curly-newline': 'off',

  // Enforce "same line" or "multiple line" on object properties
  'object-property-newline': 'off',

  // Require a newline around variable declaration
  'one-var-declaration-per-line': 'off',

  // Requires operator at the beginning of the line in multiline statements
  'operator-linebreak': 'off',

  // Disallow padding within blocks
  'padded-blocks': 'off',

  // Require quotes around object literal property names
  'quote-props': 'off',

  // Specify whether double or single quotes should be used
  'quotes': 'off',

  // Require or disallow use of semicolons instead of ASI
  'semi': 'off',

  // Enforce spacing before and after semicolons
  'semi-spacing': 'off',

  // Enforce location of semicolons
  'semi-style': 'off',

  // Require or disallow space before blocks
  'space-before-blocks': 'off',

  // Require or disallow space before function opening parenthesis
  'space-before-function-paren': 'off',

  // Require or disallow spaces inside parentheses
  'space-in-parens': 'off',

  // Require spaces around operators
  'space-infix-ops': 'off',

  // Require or disallow spaces before/after unary operators
  'space-unary-ops': 'off',

  // Enforce spacing around colons of switch statements
  'switch-colon-spacing': 'off',

  // Require or disallow spacing between template tags and their literals
  'template-tag-spacing': 'off',

  // Require regex literals to be wrapped in parentheses
  'wrap-regex': 'off',

  // ============================================================
  // ENABLED - Semantic/Code Quality Rules
  // ============================================================

  // Require camel case names
  'camelcase': ['error', { properties: 'never', ignoreDestructuring: false }],

  // Enforce or disallow capitalization of the first letter of a comment
  'capitalized-comments': 'off',

  // Enforces consistent naming when capturing the current execution context
  'consistent-this': 'off',

  // Requires function names to match the name of the variable or property
  'func-name-matching': 'off',

  // Require function expressions to have a name
  'func-names': 'warn',

  // Enforces use of function declarations or expressions
  'func-style': 'off',

  // Disallow specified identifiers
  'id-denylist': 'off',

  // This option enforces minimum and maximum identifier lengths
  'id-length': 'off',

  // Require identifiers to match the provided regular expression
  'id-match': 'off',

  // Enforce position of line comments
  'line-comment-position': 'off',

  // Require or disallow an empty line between class members
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

  // Enforces empty lines around comments
  'lines-around-comment': 'off',

  // Require or disallow logical assignment logical operator shorthand
  'logical-assignment-operators': 'off',

  // Specify the maximum depth that blocks can be nested
  'max-depth': 'off',

  // Specify the max number of lines in a file
  'max-lines': 'off',

  // Enforce a maximum function length
  'max-lines-per-function': 'off',

  // Specify the maximum depth callbacks can be nested
  'max-nested-callbacks': 'off',

  // Limits the number of parameters that can be used in the function declaration
  'max-params': 'off',

  // Specify the maximum number of statement allowed in a function
  'max-statements': 'off',

  // Restrict the number of statements per line
  'max-statements-per-line': 'off',

  // Enforce a particular style for multiline comments
  'multiline-comment-style': 'off',

  // Require a capital letter for constructors
  'new-cap': ['error', {
    newIsCap: true,
    newIsCapExceptions: [],
    capIsNew: false,
    capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
  }],

  // Disallow use of the Array constructor
  'no-array-constructor': 'error',

  // Disallow use of bitwise operators
  'no-bitwise': 'error',

  // Disallow use of the continue statement
  'no-continue': 'error',

  // Disallow comments inline after code
  'no-inline-comments': 'off',

  // Disallow if as the only statement in an else block
  'no-lonely-if': 'error',

  // Disallow un-paren'd mixes of different operators
  'no-mixed-operators': ['error', {
    groups: [
      ['%', '**'],
      ['%', '+'],
      ['%', '-'],
      ['%', '*'],
      ['%', '/'],
      ['/', '*'],
      ['&', '|', '<<', '>>', '>>>'],
      ['==', '!=', '===', '!=='],
      ['&&', '||'],
    ],
    allowSamePrecedence: false,
  }],

  // Disallow use of chained assignment expressions
  'no-multi-assign': ['error'],

  // Disallow negated conditions
  'no-negated-condition': 'off',

  // Disallow nested ternary expressions
  'no-nested-ternary': 'error',

  // Disallow use of the Object constructor
  'no-new-object': 'error',

  // Disallow use of unary operators, ++ and --
  'no-plusplus': 'error',

  // Disallow certain syntax forms
  'no-restricted-syntax': ['error',
    {
      selector: 'ForInStatement',
      message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    },
    {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],

  // Disallow the use of ternary operators
  'no-ternary': 'off',

  // Disallow dangling underscores in identifiers
  'no-underscore-dangle': ['error', {
    allow: [],
    allowAfterThis: false,
    allowAfterSuper: false,
    enforceInMethodNames: true,
  }],

  // Disallow the use of Boolean literals in conditional expressions
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  // Allow just one var statement per function
  'one-var': ['error', 'never'],

  // Require assignment operator shorthand where possible or prohibit it entirely
  'operator-assignment': ['error', 'always'],

  // Require or disallow padding lines between statements
  'padding-line-between-statements': 'off',

  // Prefer use of an exponentiation operator over Math.pow
  'prefer-exponentiation-operator': 'error',

  // Prefer use of an object spread over Object.assign
  'prefer-object-spread': 'error',

  // Requires object keys to be sorted
  'sort-keys': 'off',

  // Sort variables within the same declaration block
  'sort-vars': 'off',

  // Require or disallow a space immediately following the // or /* in a comment
  'spaced-comment': ['error', 'always', {
    line: {
      exceptions: ['-', '+'],
      markers: ['=', '!', '/'],
    },
    block: {
      exceptions: ['-', '+'],
      markers: ['=', '!', ':', '::'],
      balanced: true,
    },
  }],

  // Require or disallow the Unicode Byte Order Mark
  'unicode-bom': ['error', 'never'],
};
