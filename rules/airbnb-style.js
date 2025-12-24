/**
 * Airbnb Style Rules
 * Extracted from eslint-config-airbnb-base for ESLint 9 compatibility
 * Note: Many formatting rules are handled by Prettier and may be overridden
 * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
 */
export default {
  // Enforce line breaks after opening and before closing array brackets
  'array-bracket-newline': ['off', 'consistent'],

  // Enforce line breaks between array elements
  'array-element-newline': ['off', { multiline: true, minItems: 3 }],

  // Enforce spacing inside array brackets
  'array-bracket-spacing': ['error', 'never'],

  // Enforce spacing inside single-line blocks
  'block-spacing': ['error', 'always'],

  // Enforce one true brace style
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],

  // Require camel case names
  'camelcase': ['error', { properties: 'never', ignoreDestructuring: false }],

  // Enforce or disallow capitalization of the first letter of a comment
  'capitalized-comments': ['off', 'never', {
    line: {
      ignorePattern: '.*',
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    },
    block: {
      ignorePattern: '.*',
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    },
  }],

  // Require trailing commas in multiline object literals
  'comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'always-multiline',
  }],

  // Enforce spacing before and after comma
  'comma-spacing': ['error', { before: false, after: true }],

  // Enforce one true comma style
  'comma-style': ['error', 'last', {
    exceptions: {
      ArrayExpression: false,
      ArrayPattern: false,
      ArrowFunctionExpression: false,
      CallExpression: false,
      FunctionDeclaration: false,
      FunctionExpression: false,
      ImportDeclaration: false,
      ObjectExpression: false,
      ObjectPattern: false,
      VariableDeclaration: false,
      NewExpression: false,
    },
  }],

  // Disallow padding inside computed properties
  'computed-property-spacing': ['error', 'never'],

  // Enforces consistent naming when capturing the current execution context
  'consistent-this': 'off',

  // Enforce newline at the end of file, with no multiple empty lines
  'eol-last': ['error', 'always'],

  // Enforce line breaks between arguments of a function call
  'function-call-argument-newline': ['error', 'consistent'],

  // Enforce spacing between functions and their invocations
  'func-call-spacing': ['error', 'never'],

  // Requires function names to match the name of the variable or property to which they are assigned
  'func-name-matching': ['off', 'always', {
    includeCommonJSModuleExports: false,
    considerPropertyDescriptor: true,
  }],

  // Require function expressions to have a name
  'func-names': 'warn',

  // Enforces use of function declarations or expressions
  'func-style': ['off', 'expression'],

  // Enforce consistent line breaks inside function parentheses
  'function-paren-newline': ['error', 'multiline-arguments'],

  // Disallow specified identifiers
  'id-denylist': 'off',

  // This option enforces minimum and maximum identifier lengths
  'id-length': 'off',

  // Require identifiers to match the provided regular expression
  'id-match': 'off',

  // Enforce the location of arrow function bodies with implicit returns
  'implicit-arrow-linebreak': ['error', 'beside'],

  // This option sets a specific tab width for your code
  'indent': ['error', 2, {
    SwitchCase: 1,
    VariableDeclarator: 1,
    outerIIFEBody: 1,
    FunctionDeclaration: {
      parameters: 1,
      body: 1,
    },
    FunctionExpression: {
      parameters: 1,
      body: 1,
    },
    CallExpression: {
      arguments: 1,
    },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
    ignoreComments: false,
  }],

  // Specify whether double or single quotes should be used in JSX attributes
  'jsx-quotes': ['off', 'prefer-double'],

  // Enforces spacing between keys and values in object literal properties
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],

  // Require a space before & after certain keywords
  'keyword-spacing': ['error', {
    before: true,
    after: true,
    overrides: {
      return: { after: true },
      throw: { after: true },
      case: { after: true },
    },
  }],

  // Enforce position of line comments
  'line-comment-position': ['off', {
    position: 'above',
    ignorePattern: '',
    applyDefaultPatterns: true,
  }],

  // Disallow mixed 'LF' and 'CRLF' as linebreaks
  'linebreak-style': ['error', 'unix'],

  // Require or disallow an empty line between class members
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

  // Enforces empty lines around comments
  'lines-around-comment': 'off',

  // Require or disallow logical assignment logical operator shorthand
  'logical-assignment-operators': ['off', 'always', { enforceForIfStatements: true }],

  // Specify the maximum depth that blocks can be nested
  'max-depth': ['off', 4],

  // Specify the maximum length of a line in your program
  'max-len': ['error', 100, 2, {
    ignoreUrls: true,
    ignoreComments: false,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
  }],

  // Specify the max number of lines in a file
  'max-lines': ['off', {
    max: 300,
    skipBlankLines: true,
    skipComments: true,
  }],

  // Enforce a maximum function length
  'max-lines-per-function': ['off', {
    max: 50,
    skipBlankLines: true,
    skipComments: true,
    IIFEs: true,
  }],

  // Specify the maximum depth callbacks can be nested
  'max-nested-callbacks': 'off',

  // Limits the number of parameters that can be used in the function declaration
  'max-params': ['off', 3],

  // Specify the maximum number of statement allowed in a function
  'max-statements': ['off', 10],

  // Restrict the number of statements per line
  'max-statements-per-line': ['off', { max: 1 }],

  // Enforce a particular style for multiline comments
  'multiline-comment-style': ['off', 'starred-block'],

  // Require multiline ternary
  'multiline-ternary': ['off', 'never'],

  // Require a capital letter for constructors
  'new-cap': ['error', {
    newIsCap: true,
    newIsCapExceptions: [],
    capIsNew: false,
    capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
  }],

  // Disallow the omission of parentheses when invoking a constructor with no arguments
  'new-parens': 'error',

  // Enforces new line after each method call in the chain to make it more readable
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

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

  // Disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 'error',

  // Disallow use of chained assignment expressions
  'no-multi-assign': ['error'],

  // Disallow multiple empty lines, only one newline at the end
  'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

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

  // Disallow use of tabs
  'no-tabs': 'error',

  // Disallow the use of ternary operators
  'no-ternary': 'off',

  // Disallow trailing whitespace at the end of lines
  'no-trailing-spaces': ['error', {
    skipBlankLines: false,
    ignoreComments: false,
  }],

  // Disallow dangling underscores in identifiers
  'no-underscore-dangle': ['error', {
    allow: [],
    allowAfterThis: false,
    allowAfterSuper: false,
    enforceInMethodNames: true,
  }],

  // Disallow the use of Boolean literals in conditional expressions
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  // Disallow whitespace before properties
  'no-whitespace-before-property': 'error',

  // Enforce the location of single-line statements
  'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

  // Require padding inside curly braces
  'object-curly-spacing': ['error', 'always'],

  // Enforce line breaks between braces
  'object-curly-newline': ['error', {
    ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
    ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
    ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
  }],

  // Enforce "same line" or "multiple line" on object properties
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

  // Allow just one var statement per function
  'one-var': ['error', 'never'],

  // Require a newline around variable declaration
  'one-var-declaration-per-line': ['error', 'always'],

  // Require assignment operator shorthand where possible or prohibit it entirely
  'operator-assignment': ['error', 'always'],

  // Requires operator at the beginning of the line in multiline statements
  'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

  // Disallow padding within blocks
  'padded-blocks': ['error', {
    blocks: 'never',
    classes: 'never',
    switches: 'never',
  }, {
    allowSingleLineBlocks: true,
  }],

  // Require or disallow padding lines between statements
  'padding-line-between-statements': 'off',

  // Prefer use of an object spread over Object.assign
  'prefer-exponentiation-operator': 'error',

  // Prefer use of an object spread over Object.assign
  'prefer-object-spread': 'error',

  // Require quotes around object literal property names
  'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

  // Specify whether double or single quotes should be used
  'quotes': ['error', 'single', { avoidEscape: true }],

  // Require or disallow use of semicolons instead of ASI
  'semi': ['error', 'always'],

  // Enforce spacing before and after semicolons
  'semi-spacing': ['error', { before: false, after: true }],

  // Enforce location of semicolons
  'semi-style': ['error', 'last'],

  // Requires object keys to be sorted
  'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

  // Sort variables within the same declaration block
  'sort-vars': 'off',

  // Require or disallow space before blocks
  'space-before-blocks': 'error',

  // Require or disallow space before function opening parenthesis
  'space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  }],

  // Require or disallow spaces inside parentheses
  'space-in-parens': ['error', 'never'],

  // Require spaces around operators
  'space-infix-ops': 'error',

  // Require or disallow spaces before/after unary operators
  'space-unary-ops': ['error', {
    words: true,
    nonwords: false,
    overrides: {},
  }],

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

  // Enforce spacing around colons of switch statements
  'switch-colon-spacing': ['error', { after: true, before: false }],

  // Require or disallow spacing between template tags and their literals
  'template-tag-spacing': ['error', 'never'],

  // Require or disallow the Unicode Byte Order Mark
  'unicode-bom': ['error', 'never'],

  // Require regex literals to be wrapped in parentheses
  'wrap-regex': 'off',
};
