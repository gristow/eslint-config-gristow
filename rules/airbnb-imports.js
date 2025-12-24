/**
 * Airbnb Import Rules
 * Extracted from eslint-config-airbnb-base for ESLint 9 compatibility
 * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js
 */
export default {
  // Ensure imports point to files/modules that can be resolved
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

  // Ensure named imports coupled with named exports
  'import/named': 'error',

  // Ensure default import coupled with default export
  'import/default': 'off',

  // Ensure imported namespaces contain dereferenced properties as they are dereferenced
  'import/namespace': 'off',

  // Report any invalid exports, i.e. re-export of the same name
  'import/export': 'error',

  // Do not allow a default import name to match a named export
  'import/no-named-as-default': 'error',

  // Warn on accessing default export property names that are also named exports
  'import/no-named-as-default-member': 'error',

  // Disallow use of jsdoc-marked-deprecated imports
  'import/no-deprecated': 'off',

  // Forbid the use of extraneous packages
  'import/no-extraneous-dependencies': ['error', {
    devDependencies: [
      'test/**', // tape, common npm pattern
      'tests/**', // also common npm pattern
      'spec/**', // mocha, rspec-like pattern
      '**/__tests__/**', // jest pattern
      '**/__mocks__/**', // jest pattern
      'test.{js,jsx}', // repos with a single test file
      'test-*.{js,jsx}', // repos with multiple top-level test files
      '**/*{.,_}{test,spec}.{js,jsx}', // tests where the weights is suffixed
      '**/jest.config.js', // jest config
      '**/jest.setup.js', // jest setup
      '**/vue.config.js', // vue-cli config
      '**/webpack.config.js', // webpack config
      '**/webpack.config.*.js', // webpack config
      '**/rollup.config.js', // rollup config
      '**/rollup.config.*.js', // rollup config
      '**/gulpfile.js', // gulp config
      '**/gulpfile.*.js', // gulp config
      '**/Gruntfile{,.js}', // grunt config
      '**/protractor.conf.js', // protractor config
      '**/protractor.conf.*.js', // protractor config
      '**/karma.conf.js', // karma config
      '**/.eslintrc.js', // eslint config
    ],
    optionalDependencies: false,
  }],

  // Forbid mutable exports
  'import/no-mutable-exports': 'error',

  // Disallow require()
  'import/no-commonjs': 'off',

  // Disallow AMD require/define
  'import/no-amd': 'error',

  // Disallow Node.js builtin modules
  'import/no-nodejs-modules': 'off',

  // Ensure all imports appear before other statements
  'import/first': 'error',

  // Disallow non-import statements appearing before import statements
  'import/imports-first': 'off',

  // Disallow duplicate imports
  'import/no-duplicates': 'error',

  // Disallow namespace imports
  'import/no-namespace': 'off',

  // Ensure consistent use of file extension within the import path
  'import/extensions': ['error', 'ignorePackages', {
    js: 'never',
    mjs: 'never',
    jsx: 'never',
  }],

  // Ensure absolute imports are above relative imports
  'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],

  // Require a newline after the last import/require in a group
  'import/newline-after-import': 'error',

  // Prefer a default export if module exports a single name
  'import/prefer-default-export': 'error',

  // Restrict which files can be imported in a given folder
  'import/no-restricted-paths': 'off',

  // Limit the maximum number of dependencies a module can have
  'import/max-dependencies': ['off', { max: 10 }],

  // Forbid import of modules using absolute paths
  'import/no-absolute-path': 'error',

  // Forbid require() calls with expressions
  'import/no-dynamic-require': 'error',

  // Prevent importing the submodules of other modules
  'import/no-internal-modules': ['off', { allow: [] }],

  // Warn if a module could be mistakenly parsed as a script by a consumer
  'import/unambiguous': 'off',

  // Forbid Webpack loader syntax in imports
  'import/no-webpack-loader-syntax': 'error',

  // Prevent unassigned imports
  'import/no-unassigned-import': 'off',

  // Prevent importing the default as if it were named
  'import/no-named-default': 'error',

  // Reports if a module's default export is unnamed
  'import/no-anonymous-default-export': ['off', {
    allowArray: false,
    allowArrowFunction: false,
    allowAnonymousClass: false,
    allowAnonymousFunction: false,
    allowLiteral: false,
    allowObject: false,
  }],

  // Prefer named exports to be grouped together in a single export declaration
  'import/exports-last': 'off',

  // Reports when named exports are not grouped together
  'import/group-exports': 'off',

  // Forbid default exports
  'import/no-default-export': 'off',

  // Forbid named exports
  'import/no-named-export': 'off',

  // Forbid a module from importing itself
  'import/no-self-import': 'error',

  // Forbid cyclical dependencies between modules
  'import/no-cycle': ['error', { maxDepth: '∞', ignoreExternal: true }],

  // Ensures that there are no useless path segments
  'import/no-useless-path-segments': ['error', { commonjs: true }],

  // Enforce a leading comment with the webpackChunkName for dynamic imports
  'import/dynamic-import-chunkname': ['off', {
    importFunctions: [],
    webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
  }],

  // Forbid importing modules from parent directories
  'import/no-relative-parent-imports': 'off',

  // Reports modules without any exports, or with unused exports
  'import/no-unused-modules': ['off', {
    ignoreExports: [],
    missingExports: true,
    unusedExports: true,
  }],

  // Reports the use of import declarations with CommonJS exports
  'import/no-import-module-exports': ['error', { exceptions: [] }],

  // Forbid importing packages through relative paths
  'import/no-relative-packages': 'error',

  // Enforce a consistent style for type specifiers (inline vs top-level)
  'import/consistent-type-specifier-style': ['off', 'prefer-inline'],

  // Forbid empty named import blocks
  'import/no-empty-named-blocks': 'off',
};
