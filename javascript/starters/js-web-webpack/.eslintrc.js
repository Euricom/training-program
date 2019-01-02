module.exports = {
  extends: ['airbnb-base', 'plugin:jest/recommended', 'prettier'],
  plugins: ['babel', 'import', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {},
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'linebreak-style': 'off', // Don't play nicely with Windows.

    'no-console': 'off', // Good for debugging, bad for production
    'consistent-return': 'off', // Not our taste?
    'no-plusplus': 'off', // Not our taste?

    'prettier/prettier': ['error'], // run prettier during --fix fase
  },
};
