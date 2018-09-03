module.exports = {
  presets: [
    [
      require('@babel/preset-env'),
      {
        debug: true,
      },
    ],
    [
      require('@babel/preset-react'),
      {
        modules: false,
      },
    ],
    require('@babel/preset-flow'),
  ],
  plugins: [
    require('babel-plugin-react-require'),
    require('@babel/plugin-syntax-dynamic-import'),
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-proposal-object-rest-spread'),
    [
      require('@babel/plugin-transform-runtime'),
      {
        helpers: false,
        regenerator: true,
      },
    ],
    process.env.NODE_ENV === 'production' && require('babel-plugin-transform-react-remove-prop-types'),
    process.env.NODE_ENV === 'production' && require('react-hot-loader/babel'),
  ].filter(Boolean), // remove empty plugins
  env: {},
};
