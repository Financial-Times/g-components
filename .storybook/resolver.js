const { create, getDefaultConfig } = require("enhanced-resolve-jest");
const path = require('path');

module.exports = create(jestConfig => {
    const baseConfig = getDefaultConfig(jestConfig);
    baseConfig.mainFields = ["browser", "main"];

    baseConfig.alias = {
      ...(baseConfig.alias || {}),
      'node-fetch': path.resolve(__dirname, '..', 'node_modules', 'node-fetch', 'lib', 'index.js')
    };
  
    return baseConfig;
  });