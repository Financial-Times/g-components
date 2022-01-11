/**
 * @file
 * Generates the index.js omnibus file from all named exports
 * in src/
 */

const { join, basename, dirname } = require('path');
const { writeFile } = require('fs/promises');
const glob = require('glob');
const camelcase = require('camelcase');

const srcBase = join(__dirname, '..', 'src/')

// Get list of all component indices
const components = glob
  .sync(join(srcBase, '**/index.js'))
  .map((d) => [dirname(d).replace(srcBase, ''), camelcase(basename(dirname(d)), { pascalCase: true })]);

writeFile(join(srcBase, 'index.js'),
`/**
  * @file
  * Entry point (automatically generated)
  */

${components.map(([path, identifier]) => `export * as ${identifier} from './${path}';`).join("\n")}`
);
