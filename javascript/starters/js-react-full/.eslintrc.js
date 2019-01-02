module.exports = {
  extends: ['airbnb', 'plugin:jest/recommended', 'prettier'],
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
    // react
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],

    // only allowed in development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // reducing complexity
    // see https://wecodetheweb.com/2016/11/05/improving-code-quality-using-eslint/
    'complexity': [2, 5],
    'max-statements': [2, 9],
    'max-statements-per-line': [2, { max: 1 }],
    'max-nested-callbacks': [2, 3],
    'max-depth': [2, { max: 3 }],

    // Our taste
    'linebreak-style': 'off', // Don't play nicely with Windows.
    'consistent-return': 'off', // Not our taste?
    'no-plusplus': 'off', // Not our taste?

    // prettier
    'prettier/prettier': ['error'], // run prettier during --fix fase
  },
};
