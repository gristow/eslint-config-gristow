const rules = require('./shared-rules');

module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    // Can I remove these now?
    "ecmaFeatures": {
      "impliedStrict": true,
      "classes": true
    }
  },
  "plugins": ["prettier"],
  "overrides": [
    {
      files: ["*.js"],
      "extends": [
        "airbnb",
        "prettier",
        "prettier/react",
        "plugin:jsdoc/recommended",
      ]
    },
    {
      "files": ["*.ts"],
      "plugins": ["prettier", "eslint-plugin-tsdoc"],
      "parser": "@typescript-eslint/parser",
      "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "airbnb",
        "prettier",
        "prettier/react",
      ],
      "rules": {
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/no-use-before-define": ["error", {functions: false}],
        "import/no-unresolved": 0,
        "no-useless-constructor": "off",
        // no-dupe-class-members should be removed when this PR lands:
        // https://github.com/typescript-eslint/typescript-eslint/pull/1492
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "valid-jsdoc": "off",
        "tsdoc/syntax": "warn",
        ...rules
      },
      settings: {
        jsdoc: {
          mode: 'typescript'
        }
      }
    }
  ],
  rules: {
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: true,
          ClassDeclaration: true,
        },
      },
    ],
    'valid-jsdoc': [
      'warn',
      {
        requireReturn: false,
        preferType: {
          Boolean: 'boolean',
          Number: 'number',
          object: 'Object',
          String: 'string',
          function: 'Function',
        },
        requireParamDescription: false,
        requireReturnDescription: false,
      },
    ],
    ...rules
  },
}