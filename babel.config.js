// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-react-jsx'],
  env: {
    production: {
      presets: ['@emotion/babel-preset-css-prop'],
    },
    test: {
      plugins: ['require-context-hook'],
    },
  },
};
