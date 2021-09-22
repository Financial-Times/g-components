process.env.SASS_PATH = 'node_modules:node_modules/@financial-times';

module.exports = {
  stories: ['../src/**/*.stories.@(mdx|js)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need below:

    // Resolve "browser" field in package.json (Origami)
    config.resolve.aliasFields = ['browser'];
    config.resolve.mainFields = ['main', 'browser'];

    // Return the altered config
    return config;
  },
};
