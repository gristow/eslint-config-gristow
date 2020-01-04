module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
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
      "files": ["*.ts"],
      "plugins": ["prettier"],
      "parser": "@typescript-eslint/parser",
      "extends": [
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "prettier",
        "prettier/react",
      ],
      "rules": {
        "@typescript-eslint/no-var-requires": "warn",
      }
    }
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 2
      }
    ],
    "no-debugger": 0,
    "no-restricted-syntax": [
      2,
      "LabeledStatement",
      "WithStatement"
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
      }
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "import/extensions": 0,
    "no-shadow": [
      2,
      {
        "hoist": "all",
        "allow": [
          "resolve",
          "reject",
          "done",
          "next",
          "err",
          "error"
        ]
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "func-names": 0,
    "prefer-destructuring": 0,
    "prefer-promise-reject-errors": 0,
    "wrap-iife": "off",
    "no-else-return": "warn",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "import/prefer-default-export": "off",
    "prefer-template": "warn",
    "no-plusplus" : "off",
    "no-confusing-arrow": "off",
    "no-console" : "off",
    "no-continue" : "warn",
    "no-nested-ternary" : "warn",
    "no-prototype-builtins" : "off",
    "no-bitwise" : "off",
    "no-underscore-dangle" : "off",
    "class-methods-use-this" : "warn",
    "no-param-reassign" : "off",
    "prefer-rest-params" : "warn",
    "default-case": "off",
    "no-mixed-operators": "off",
    "no-use-before-define": ["error", { "functions": false }],
    "no-lonely-if": "warn",
    "require-jsdoc": ["warn", {
        "require": {
            "FunctionDeclaration": false,
            "MethodDefinition": true,
            "ClassDeclaration": true
        }
    }],
    "valid-jsdoc": ["warn", {
      "requireReturn": false,
      "preferType": { "Boolean": "boolean", "Number": "number", "object": "Object", "String": "string", "function": "Function" },
      "requireParamDescription": false,
      "requireReturnDescription": false
    }]
  }
}