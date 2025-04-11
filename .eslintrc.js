// New VSCode extension eslint config

module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "root": true,
  "parser": "@typescript-eslint/parser",
  "files": ["**/*.ts"], // We use TS config only for TS files
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint/eslint-plugin"
  ],
  "rules": {
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        "accessibility": "explicit"
      }
    ],
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/quotes": [
      "off",
      "single"
    ],
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "error",
    "camelcase": "off",
    "constructor-super": "error",
    "curly": "error",
    "dot-notation": "off",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "id-blacklist": "off",
    "id-match": "off",
    "max-len": [
      "off",
      {
        "code": 140
      }
    ],
    // "no-bitwise": "error",
    "no-bitwise": 0,
    "no-caller": "error",
    "no-console": [
      "error",
      {
        "allow": [
          "log",
          "dirxml",
          "warn",
          "error",
          "dir",
          "debug",
          "info",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupCollapsed",
          "groupEnd",
          "table",
          "Console",
          "markTimeline",
          "profile",
          "profileEnd",
          "timeline",
          "timelineEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-debugger": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-new-wrappers": "error",
    "no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "prefer-const": "off",
    "radix": "error",
    "spaced-comment": "off"
  }
};

const originalConfig = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
      "@typescript-eslint/naming-convention": "warn",
      "@typescript-eslint/semi": "warn",
      "curly": "warn",
      "eqeqeq": "warn",
      "no-throw-literal": "warn",
      "semi": "off"
  }
}
