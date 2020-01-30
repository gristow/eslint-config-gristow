// See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md for tslint-eslint rule migration

const rules = require('./shared-rules');

module.exports = {
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
      files: ["*.js", "*.jsx"],
      "extends": [
        "prettier",
        "prettier/react",
        "plugin:jsdoc/recommended",
        // "airbnb",
        "airbnb-typescript",
      ],
      rules: {
        ...rules,
      },
    },
    {
      "files": ["*.ts"],
      "plugins": ["prettier", "eslint-plugin-tsdoc"],
      "parser": "@typescript-eslint/parser",
      "extends": [
        "prettier",
        "prettier/react",
        // "plugin:@typescript-eslint/recommended",
        // "plugin:import/typescript",
        // "airbnb",
        "airbnb-typescript",
      ],
      "rules": {
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/no-use-before-define": ["error", {functions: false}],
        "import/no-unresolved": 0,
        "no-useless-constructor": "off",
        // no-dupe-class-members should be removed when this PR lands:
        // https://github.com/typescript-eslint/typescript-eslint/pull/1492
        "no-dupe-class-members": "off",
        // So we can allow overloading, and list of class props defined
        "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
        "@typescript-eslint/no-useless-constructor": "error",
        "valid-jsdoc": "off",
        "tsdoc/syntax": "warn",
        ...rules,
      },
      settings: {
        jsdoc: {
          mode: 'typescript'
        }
      }
    }
  ],

}