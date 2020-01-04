const rules = require('./shared-rules');

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
        "plugin:import/typescript",
        "airbnb",
        "prettier",
        "prettier/react",
      ],
      "rules": {
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/no-use-before-define": ["error", {functions: false}],
        "import/no-unresolved": 0,
        ...rules
      }
    }
  ],
  rules,
}