const env = process.env.NODE_ENV || 'development';
const isEnvDevelopment = env === 'development';
const isEnvProduction = env === 'production';
const isEnvTest = env === 'test';

module.exports = {
  presets: [
    [
      require('@babel/preset-env'),
      {
        debug: false,
      },
    ],
    [
      require('@babel/preset-react'),
      {
        // Adds component stack to warning messages
        // Adds __self attribute to JSX which React will use for some warnings
        development: isEnvDevelopment || isEnvTest,
        // Will use the native built-in instead of trying to polyfill
        // behavior for any plugins that require one.
        useBuiltIns: true,
        modules: false,
      },
    ],
    // add flow support
    require('@babel/preset-flow'),
    // add typescript support
    require('@babel/preset-typescript'),
  ],
  plugins: [
    require('babel-plugin-macros'),

    // Add ES stages 3 and 2
    require('@babel/plugin-syntax-dynamic-import'),
    require('@babel/plugin-proposal-object-rest-spread'),
    require('@babel/plugin-proposal-numeric-separator'),
    [
      require('@babel/plugin-proposal-class-properties'),
      {
        loose: false,
      },
    ],
    [
      require('@babel/plugin-proposal-decorators'),
      {
        legacy: true,
      },
    ], // for MobX

    // Extract FormattedMessages
    require('babel-plugin-react-intl'),

    // Polyfills the runtime needed for async/await, generators, and friends
    [
      require('@babel/plugin-transform-runtime'),
      {
        corejs: false,
        helpers: false,
        regenerator: true,
      },
    ],

    // remove PropTypes for production
    isEnvProduction && require('babel-plugin-transform-react-remove-prop-types'),

    // enable hot reload for react components
    isEnvDevelopment && require('react-hot-loader/babel'),

    // Transform dynamic import to require
    isEnvTest && require('babel-plugin-dynamic-import-node'),

    // optional (but usefull)
    // require('babel-plugin-jsx-remove-data-test-id')
  ].filter(Boolean), // remove empty plugins
  env: {},
};
