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
      "plugins": ["prettier", "jsdoc"],
      "extends": [
        "airbnb-typescript",
        "prettier",
        "prettier/react",
      ],
      rules: {
        "@typescript-eslint/indent": "off",
        "jsdoc/check-alignment": 1, // Recommended
        "jsdoc/check-param-names": 1, // Recommended
        "jsdoc/check-tag-names": 1, // Recommended
        "jsdoc/check-types": 1, // Recommended
        "jsdoc/implements-on-classes": 1, // Recommended
        "jsdoc/newline-after-description": 1, // Recommended
        "jsdoc/no-undefined-types": 1, // Recommended
        "jsdoc/require-description": "warn",
        "jsdoc/require-param": 1, // Recommended
        "jsdoc/require-param-description": "warn", // Recommended
        "jsdoc/require-param-name": 1, // Recommended
        "jsdoc/require-param-type": 1, // Recommended
        "jsdoc/require-returns": "warn", // Recommended
        "jsdoc/require-returns-check": 1, // Recommended
        "jsdoc/require-returns-description": "warn", // Recommended
        "jsdoc/require-returns-type": 1, // Recommended
        "jsdoc/valid-types": 1, // Recommended
        ...rules,
      },
    },
    {
      "files": ["*.ts"],
      "plugins": ["prettier", "eslint-plugin-tsdoc"],
      "parser": "@typescript-eslint/parser",
      "extends": [
        "airbnb-typescript",
        "prettier",
        "prettier/react",
      ],
      "rules": {
        "react/static-property-placement": "off",
        "@typescript-eslint/indent": "off",
        "import/no-cycle": "off", // otherwise captures cycles by type inclusion
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