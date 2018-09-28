/**
 * @file
 * Custom Webpack config for Storybook.
 * This isn't used for any actual bundling; we use Rollup for that.
 */

const path = require('path');
const BowerResolvePlugin = require('bower-resolve-webpack-plugin');
const webpackMerge = require('webpack-merge');

module.exports = (baseConfig, env, defaultConfig) => {
  const overrides = {
    resolve: {
      modules: ['bower_components'],
      plugins: [new BowerResolvePlugin()],
      descriptionFiles: ['bower.json', 'package.json'],
      mainFields: ['browser', 'main'],
      alias: {
        ftdomdelegate: 'dom-delegate',
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
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
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: ['bower_components'],
              },
            },
          ],
          include: path.resolve(__dirname, '../'),
        },
        {
          test: /\.txt/,
          loader: 'raw-loader',
        },
      ],
    },
  };

  return webpackMerge.smart(defaultConfig, overrides);
};
