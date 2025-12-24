/**
 * Airbnb Variables Rules
 * Extracted from eslint-config-airbnb-base for ESLint 9 compatibility
 * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js
 */

// List of confusing browser globals that should be explicitly referenced from window
const restrictedGlobals = [
  'addEventListener',
  'blur',
  'close',
  'closed',
  'confirm',
  'defaultStatus',
  'defaultstatus',
  'event',
  'external',
  'find',
  'focus',
  'frameElement',
  'frames',
  'history',
  'innerHeight',
  'innerWidth',
  'length',
  'location',
  'locationbar',
  'menubar',
  'moveBy',
  'moveTo',
  'name',
  'onblur',
  'onerror',
  'onfocus',
  'onload',
  'onresize',
  'onunload',
  'open',
  'opener',
  'opera',
  'outerHeight',
  'outerWidth',
  'pageXOffset',
  'pageYOffset',
  'parent',
  'print',
  'removeEventListener',
  'resizeBy',
  'resizeTo',
  'screen',
  'screenLeft',
  'screenTop',
  'screenX',
  'screenY',
  'scroll',
  'scrollbars',
  'scrollBy',
  'scrollTo',
  'scrollX',
  'scrollY',
  'self',
  'status',
  'statusbar',
  'stop',
  'toolbar',
  'top',
];

export default {
  // Enforce or disallow variable initializations at definition
  'init-declarations': 'off',

  // Disallow the catch clause parameter name being the same as a variable in the outer scope
  'no-catch-shadow': 'off',

  // Disallow deletion of variables
  'no-delete-var': 'error',

  // Disallow labels that share a name with a variable
  'no-label-var': 'error',

  // Disallow specific globals
  'no-restricted-globals': ['error',
    {
      name: 'isFinite',
      message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    },
    {
      name: 'isNaN',
      message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    },
    ...restrictedGlobals.map((g) => ({
      name: g,
      message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
    })),
  ],

  // Disallow declaration of variables already declared in the outer scope
  'no-shadow': 'error',

  // Disallow shadowing of names such as arguments
  'no-shadow-restricted-names': 'error',

  // Disallow use of undeclared variables unless mentioned in a /*global */ block
  'no-undef': 'error',

  // Disallow use of undefined when initializing variables
  'no-undef-init': 'error',

  // Disallow use of undefined variable
  'no-undefined': 'off',

  // Disallow declaration of variables that are not used in the code
  'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

  // Disallow use of variables before they are defined
  'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
};
