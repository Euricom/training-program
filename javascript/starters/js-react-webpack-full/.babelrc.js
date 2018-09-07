module.exports = {
  presets: [
    [require('@babel/preset-env'), { debug: true } ],
    [require('@babel/preset-react'), { modules: false} ],
    require('@babel/preset-flow'),
  ],
  plugins: [

    // Add ES stages 3 and 2
    require('@babel/plugin-syntax-dynamic-import'),
    require('@babel/plugin-proposal-object-rest-spread'),
    require('@babel/plugin-proposal-numeric-separator'),
    [require("@babel/plugin-proposal-class-properties"), { "loose": false }],
    [require('@babel/plugin-proposal-decorators'), { "legacy": true }]  // for MobX

    // Extract FormattedMessages
    require('babel-plugin-react-intl'),

    // Auto import react
    require('babel-plugin-react-require'),

    // Save on codesize
    [
      require('@babel/plugin-transform-runtime'),
      {
        helpers: false,
        regenerator: true,
      },
    ],

    // remove PropTypes for production
    process.env.NODE_ENV === 'production' && require('babel-plugin-transform-react-remove-prop-types'),

    // enable hot reload for react components
    process.env.NODE_ENV === 'production' && require('react-hot-loader/babel'),

    // optional (but usefull)
    // require('babel-plugin-jsx-remove-data-test-id')

  ].filter(Boolean), // remove empty plugins
  env: {},
};
