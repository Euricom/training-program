module.exports = {
  presets: [
    require('@babel/preset-env'),
    require('@babel/preset-react'),
    require('@babel/preset-flow'),
  ],
  plugins: [
    // Add ES stages 3 and 2
    require('@babel/plugin-syntax-dynamic-import'),
    require('@babel/plugin-proposal-object-rest-spread'),
    require('@babel/plugin-proposal-numeric-separator'),
    [require('@babel/plugin-proposal-class-properties'), { loose: false }],
    [require('@babel/plugin-proposal-decorators'), { legacy: true }], // for MobX

    require('react-hot-loader/babel'),
    require('@babel/plugin-transform-runtime'),
  ].filter(Boolean), // remove empty plugins
  env: {},
};
