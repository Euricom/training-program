const env = process.env.NODE_ENV || 'development';
const isEnvDevelopment = env === 'development';
const isEnvProduction = env === 'production';
const isEnvTest = env === 'test';

module.exports = {
  presets: ['airbnb'],
  plugins: [
    // Add ES stages 2
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-proposal-numeric-separator'),
    [
      // for MobX
      require('@babel/plugin-proposal-decorators'),
      {
        legacy: true,
      },
    ],

    // Alias support for build & jest
    [
      require('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          '@': './src',
          '@test': './test',
        },
      },
    ],

    // enable hot reload for react components
    isEnvDevelopment && require('react-hot-loader/babel'),

    // optional (but usefull)
  ].filter(Boolean), // remove empty plugins
  env: {},
};
