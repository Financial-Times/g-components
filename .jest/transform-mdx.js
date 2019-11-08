const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const mdx = require('@mdx-js/mdx');
const babel = require('babel-jest');

const compilers = [createCompiler({})];

module.exports = {
  process(src, filename, config, options) {
    let result = mdx.sync(src, { compilers: compilers, filepath: filename });

    result = `/* @jsx mdx */
    import React from 'react'
    import { mdx } from '@mdx-js/react'
    ${result}
    `;

    return babel.process(result, filename, config, options);
  },
};
