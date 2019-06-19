module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'standard/computed-property-even-spacing': 'off',
    'prefer-const': 'off',
    'vue/no-unused-components': 'off',
    'no-unused-vars': 'off'
  }
}
