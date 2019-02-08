module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "space-before-function-paren": "off",
    "no-unused-vars": "off",
    "no-extra-semi": "off",
    "semi": [2, "always", { "omitLastInOneLineBlock": true }]
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
