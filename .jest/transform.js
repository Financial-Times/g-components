module.exports = require('babel-jest').createTransformer({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'usage',
        corejs: 3,
        modules: 'auto'
      },
    ],
    '@babel/preset-react',
  ],
});
