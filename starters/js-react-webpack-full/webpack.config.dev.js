// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

/* eslint-disable */
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
  // cheap-module-eval-source-map is faster for development
  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  // See the discussion in https://github.com/facebook/create-react-app/issues/343.
  devtool: '#cheap-module-eval-source-map',
  mode: 'development',
  entry: [
    // Add the polyfills:
    require.resolve('./polyfills'),
    './src/index.jsx',
  ],
  plugins: [
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    // Enable gzip compression of generated files.
    compress: true,
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // It will still show compile warnings and errors with this setting.
    clientLogLevel: 'none',
    // Enable hot reloading server. It will provide /sockjs-node/ endpoint
    // for the WebpackDevServer client so it can learn when the files were
    // updated. The WebpackDevServer client is included as an entry point
    // in the Webpack development configuration. Note that only changes
    // to CSS are currently hot reloaded. JS changes will refresh the browser.
    hot: true,
    // WebpackDevServer is noisy by default so we emit custom message instead
    // by listening to the compiler events with `compiler.hooks[...].tap` calls above.
    quiet: false,
    // Enable/disable HTTPS
    https: false,
    // WebPackDev server serves physical files from
    contentBase: './public',
    // It is important to tell WebpackDevServer to use the same "root" path
    // as we specified in the config. In development, we always serve from /.
    publicPath: '/',
  },
});
