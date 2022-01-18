process.env.SASS_PATH = 'node_modules:node_modules/@financial-times';

module.exports = {
  features: {
    postcss: false,
  },
  stories: ['../src/**/*.stories.@(mdx|js)'],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: { auto: true },
        },
      },
    },
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],

  // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need below:

    // Resolve "browser" field in package.json (Origami)
    config.resolve.aliasFields = ['browser'];
    config.resolve.mainFields = ['main', 'browser'];

    // Return the altered config
    return config;
  },
};
