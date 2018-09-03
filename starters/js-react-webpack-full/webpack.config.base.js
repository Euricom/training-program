/* eslint-disable */
const getClientEnvironment = require('./env');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getPublicPath() {
  if (process.env.PUBLIC_PATH) {
    return process.env.PUBLIC_PATH;
  }
  return '/';
}

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = getPublicPath();

// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
const publicUrl = publicPath.slice(0, -1);

// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl);

// Dump build environment
console.log('Build Environment');
console.log('  VERSION:    ', env.raw.BUILD_VERSION);
console.log('  NODE_ENV:   ', env.raw.NODE_ENV);
console.log('  PUBLIC_URL: ', publicPath);

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    process.env.NODE_ENV === 'development' ? require.resolve('style-loader') : MiniCssExtractPlugin.loader,
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        sourceMap: false,
        plugins: () => [
          autoprefixer({
            flexbox: 'no-2009',
          }),
        ],
      },
    },
  ];
  if (preProcessor) {
    loaders.push(require.resolve(preProcessor));
  }
  return loaders;
};

module.exports = {
  // Turn off performance processing because we utilize
  // our own hints via the FileSizeReporter
  performance: false,
  resolve: {
    // These are the reasonable defaults supported by the Node ecosystem.
    extensions: ['.mjs', '.js', '.json', '.jsx'],
  },
  output: {
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: 'static/js/bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'static/js/[name].chunk.js',
    // This is the URL that app is served from. We use "/" in development.
    publicPath,
  },
  optimization: {
    // Automatically split vendor and commons
    // https://twitter.com/wSokra/status/969633336732905474
    // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
    // Keep the runtime chunk seperated to enable long term caching
    // https://twitter.com/wSokra/status/969679223278505985
    runtimeChunk: true,
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          // "url" loader works like "file" loader except that it embeds assets
          // smaller than specified limit in bytes as data URLs to avoid requests.
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          // Process application JS with Babel.
          // The preset includes JSX, Flow, and some ESnext features.
          {
            test: /\.(js|jsx|mjs)$/,
            use: [
              {
                loader: require.resolve('cache-loader'),
              },
              {
                loader: require.resolve('babel-loader'),
                options: {
                  cacheDirectory: true,
                  highlightCode: true,
                  compact: process.env.NODE_ENV == 'development' ? false : true,
                },
              },
            ],
          },
          // "postcss" loader applies autoprefixer to our CSS.
          // "css" loader resolves paths in CSS and adds assets as dependencies.
          // "style" loader turns CSS into JS modules that inject <style> tags.
          // In production, we use a plugin to extract that CSS to a file, but
          // in development "style" loader enables hot editing of CSS.
          {
            test: /\.css$/,
            exclude: /\.module\.css$/,
            use: getStyleLoaders({
              importLoaders: 1,
            }),
          },
          // Opt-in support for SASS (using .scss or .sass extensions).
          // Chains the sass-loader with the css-loader and the style-loader
          // to immediately apply all styles to the DOM.
          // By default we support SASS Modules with the
          // extensions .module.scss or .module.sass
          {
            test: /\.(scss|sass)$/,
            exclude: /\.module\.(scss|sass)$/,
            use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader'),
          },
          // The GraphQL loader preprocesses GraphQL queries in .graphql files.
          // {
          //   test: /\.(graphql)$/,
          //   loader: 'graphql-tag/loader',
          // },
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise be processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      // ** STOP ** Are you adding a new loader?
      // Make sure to add the new loader(s) before the "file" loader.
    ],
  },
  // stats: 'normal',
  stats: {
    assets: true,
    modules: false,
    children: false,
  },

  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),

    // Makes some environment variables available in index.html.
    new InterpolateHtmlPlugin(env.raw),

    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
    new webpack.DefinePlugin(env.stringified),

    // Prevent mistype casing in a path
    new CaseSensitivePathsPlugin(),

    // Generate a manifest file which contains a mapping of all asset filenames
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath,
    }),

    // Cleanup build folder before running new build
    new CleanWebpackPlugin(['dist'], { verbose: false }),

    // copy public folder (except index.html)
    new CopyWebpackPlugin([{ from: 'public', ignore: ['index.html'] }]),

    // show progress during build
    new webpack.ProgressPlugin(),

    // show friendly build errors
    new FriendlyErrorsWebpackPlugin(),
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};
