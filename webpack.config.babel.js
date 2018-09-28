/**
 * @file
 * Custom Webpack config for Storybook.
 * This isn't used for any actual bundling; we use Rollup for that.
 */

import BowerResolvePlugin from 'bower-resolve-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

module.exports = (mode = 'production') => ({
  mode,
  output: {
    libraryTarget: 'commonjs2',
    path: __dirname,
    filename: 'dist/gcomponents.js',
    sourceMapFilename: 'dist/gcomponents.map',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  entry: ['./index.js'],
  resolve: {
    modules: ['bower_components', 'node_modules'],
    plugins: [new BowerResolvePlugin()],
    descriptionFiles: ['bower.json', 'package.json'],
    mainFields: ['browser', 'main'],
    alias: {
      ftdomdelegate: 'dom-delegate',
    },
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['babel-preset-env', 'babel-preset-react'],
          plugins: [
            'add-module-exports' /* <-- wtfits */,
            'transform-runtime',
            'transform-class-properties',
            'syntax-dynamic-import',
          ],
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ['bower_components'],
            },
          },
        ],
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
      },
    ],
  },
});
