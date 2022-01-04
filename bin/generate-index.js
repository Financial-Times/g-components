/**
 * @file
 * Generates the index.js omnibus file from all named exports
 * in src/
 */

const { join, basename, dirname } = require('path');
const { writeFile } = require('fs/promises');
const glob = require('glob');
const camelcase = require('camelcase');

// Get list of all component indices
const components = glob
  .sync(join(__dirname, '..', 'src/**/index.js'))
  .map((d) => [basename(dirname(d)), camelcase(basename(dirname(d)), { pascalCase: true })]);

writeFile(join(__dirname, '..', 'src', 'index.js'),
`/**
  * @file
  * Entry point (automatically generated)
  */

${components.map(([path, identifier]) => `export * as ${identifier} from './${path}';`).join("\n")}`
);
