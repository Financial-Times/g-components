module.exports = {
  features: {
    postcss: false,
  },
  stories: ['../src/**/*.stories.@(mdx|js)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],

  // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need below:

    // console.log(config);

    // Resolve "browser" field in package.json (Origami)
    // config.resolve.mainFields = ['main', 'browser'];

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: { includePaths: ['node_modules', 'node_modules/@financial-times'] },
          },
        },
      ],
    });

    // Return the altered config
    return config;
  },
};
