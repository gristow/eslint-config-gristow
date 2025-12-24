/**
 * Airbnb Best Practices Rules
 * Extracted from eslint-config-airbnb-base for ESLint 9 compatibility
 * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
 */
export default {
  // Enforces getter/setter pairs in objects
  'accessor-pairs': 'off',

  // Enforces return statements in callbacks of array's methods
  'array-callback-return': ['error', { allowImplicit: true, checkForEach: false }],

  // Treat var statements as if they were block scoped
  'block-scoped-var': 'error',

  // Specify the maximum cyclomatic complexity allowed in a program
  'complexity': ['off', 20],

  // Enforce that class methods use "this"
  'class-methods-use-this': ['error', { exceptMethods: [] }],

  // Require return statements to either always or never specify values
  'consistent-return': 'error',

  // Specify curly brace conventions for all control statements
  'curly': ['error', 'multi-line'],

  // Require default case in switch statements
  'default-case': ['error', { commentPattern: '^no default$' }],

  // Enforce default clauses in switch statements to be last
  'default-case-last': 'error',

  // Enforce default parameters to be last
  'default-param-last': 'error',

  // Encourages use of dot notation whenever possible
  'dot-notation': ['error', { allowKeywords: true }],

  // Require the use of === and !==
  'eqeqeq': ['error', 'always', { null: 'ignore' }],

  // Require grouped accessor pairs in object literals and classes
  'grouped-accessor-pairs': 'error',

  // Make sure for-in loops have an if statement
  'guard-for-in': 'error',

  // Enforce a maximum number of classes per file
  'max-classes-per-file': ['error', 1],

  // Disallow the use of alert, confirm, and prompt
  'no-alert': 'warn',

  // Disallow use of arguments.caller or arguments.callee
  'no-caller': 'error',

  // Disallow lexical declarations in case/default clauses
  'no-case-declarations': 'error',

  // Disallow returning value in constructor
  'no-constructor-return': 'error',

  // Disallow division operators explicitly at beginning of regular expression
  'no-div-regex': 'off',

  // Disallow else after a return in an if
  'no-else-return': ['error', { allowElseIf: false }],

  // Disallow empty functions, except for standalone funcs/arrows
  'no-empty-function': ['error', {
    allow: [
      'arrowFunctions',
      'functions',
      'methods',
    ],
  }],

  // Disallow empty destructuring patterns
  'no-empty-pattern': 'error',

  // Disallow empty static blocks
  'no-empty-static-block': 'error',

  // Disallow comparisons to null without a type-checking operator
  'no-eq-null': 'off',

  // Disallow use of eval()
  'no-eval': 'error',

  // Disallow adding to native types
  'no-extend-native': 'error',

  // Disallow unnecessary function binding
  'no-extra-bind': 'error',

  // Disallow Unnecessary Labels
  'no-extra-label': 'error',

  // Disallow fallthrough of case statements
  'no-fallthrough': 'error',

  // Disallow reassignments of native objects or read-only globals
  'no-global-assign': ['error', { exceptions: [] }],

  // Disallow implicit type conversions
  'no-implicit-coercion': ['off', {
    boolean: false,
    number: true,
    string: true,
    allow: [],
  }],

  // Disallow var and named functions in global scope
  'no-implicit-globals': 'off',

  // Disallow use of eval()-like methods
  'no-implied-eval': 'error',

  // Disallow this keywords outside of classes or class-like objects
  'no-invalid-this': 'off',

  // Disallow usage of __iterator__ property
  'no-iterator': 'error',

  // Disallow use of labels for anything other than loops and switches
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

  // Disallow unnecessary nested blocks
  'no-lone-blocks': 'error',

  // Disallow creation of functions within loops
  'no-loop-func': 'error',

  // Disallow magic numbers
  'no-magic-numbers': ['off', {
    ignore: [],
    ignoreArrayIndexes: true,
    enforceConst: true,
    detectObjects: false,
  }],

  // Disallow use of multiple spaces
  'no-multi-spaces': ['error', { ignoreEOLComments: false }],

  // Disallow use of multiline strings
  'no-multi-str': 'error',

  // Disallow use of new operator when not part of the assignment or comparison
  'no-new': 'error',

  // Disallow use of new operator for Function object
  'no-new-func': 'error',

  // Disallows creating new instances of String, Number, and Boolean
  'no-new-wrappers': 'error',

  // Disallow \8 and \9 escape sequences in string literals
  'no-nonoctal-decimal-escape': 'error',

  // Disallow calls to the Object constructor without an argument
  'no-object-constructor': 'error',

  // Disallow use of (old style) octal literals
  'no-octal': 'error',

  // Disallow use of octal escape sequences in string literals
  'no-octal-escape': 'error',

  // Disallow reassignment of function parameters
  'no-param-reassign': ['error', {
    props: true,
    ignorePropertyModificationsFor: [
      'acc', // for reduce accumulators
      'accumulator', // for reduce accumulators
      'e', // for e.returnvalue
      'ctx', // for Koa routing
      'context', // for Koa routing
      'req', // for Express requests
      'request', // for Express requests
      'res', // for Express responses
      'response', // for Express responses
      '$scope', // for Angular 1 scopes
      'staticContext', // for ReactRouter context
    ],
  }],

  // Disallow usage of __proto__ property
  'no-proto': 'error',

  // Disallow declaring the same variable more than once
  'no-redeclare': 'error',

  // Disallow certain object properties
  'no-restricted-properties': ['error', {
    object: 'arguments',
    property: 'callee',
    message: 'arguments.callee is deprecated',
  }, {
    object: 'global',
    property: 'isFinite',
    message: 'Please use Number.isFinite instead',
  }, {
    object: 'self',
    property: 'isFinite',
    message: 'Please use Number.isFinite instead',
  }, {
    object: 'window',
    property: 'isFinite',
    message: 'Please use Number.isFinite instead',
  }, {
    object: 'global',
    property: 'isNaN',
    message: 'Please use Number.isNaN instead',
  }, {
    object: 'self',
    property: 'isNaN',
    message: 'Please use Number.isNaN instead',
  }, {
    object: 'window',
    property: 'isNaN',
    message: 'Please use Number.isNaN instead',
  }, {
    property: '__defineGetter__',
    message: 'Please use Object.defineProperty instead.',
  }, {
    property: '__defineSetter__',
    message: 'Please use Object.defineProperty instead.',
  }, {
    object: 'Math',
    property: 'pow',
    message: 'Use the exponentiation operator (**) instead.',
  }],

  // Disallow use of assignment in return statement
  'no-return-assign': ['error', 'always'],

  // Disallow use of `javascript:` urls.
  'no-script-url': 'error',

  // Disallow self assignment
  'no-self-assign': ['error', { props: true }],

  // Disallow comparisons where both sides are exactly the same
  'no-self-compare': 'error',

  // Disallow use of comma operator
  'no-sequences': 'error',

  // Restrict what can be thrown as an exception
  'no-throw-literal': 'error',

  // Disallow unmodified conditions of loops
  'no-unmodified-loop-condition': 'off',

  // Disallow usage of expressions in statement position
  'no-unused-expressions': ['error', {
    allowShortCircuit: false,
    allowTernary: false,
    allowTaggedTemplates: false,
  }],

  // Disallow unused labels
  'no-unused-labels': 'error',

  // Disallow unnecessary .call() and .apply()
  'no-useless-call': 'off',

  // Disallow unnecessary catch clauses
  'no-useless-catch': 'error',

  // Disallow useless string concatenation
  'no-useless-concat': 'error',

  // Disallow unnecessary string escaping
  'no-useless-escape': 'error',

  // Disallow redundant return; keywords
  'no-useless-return': 'error',

  // Disallow use of void operator
  'no-void': 'error',

  // Disallow usage of configurable warning terms in comments: e.g. todo
  'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

  // Disallow use of the with statement
  'no-with': 'error',

  // Require using Error objects as Promise rejection reasons
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  // Suggest using named capture group in regular expression
  'prefer-named-capture-group': 'off',

  // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
  'prefer-object-has-own': 'error',

  // Disallow use of the RegExp constructor in favor of regular expression literals
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

  // Require use of the second argument for parseInt()
  'radix': 'error',

  // Require `await` in `async function`
  'require-await': 'off',

  // Enforce the use of u or v flag on RegExp
  'require-unicode-regexp': 'off',

  // Requires to declare all vars on top of their containing scope
  'vars-on-top': 'error',

  // Require immediate function invocation to be wrapped in parentheses
  'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

  // Require or disallow Yoda conditions
  'yoda': 'error',
};
