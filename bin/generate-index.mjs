/**
 * @file
 * Generates the index.js omnibus file from all named exports
 * in src/
 */

import { join, basename, dirname } from 'path';
import { writeFile } from 'fs/promises';
import glob from 'glob';
import camelcase from 'camelcase';

const srcBase = join(process.cwd(), 'src/');

// Get list of all component indices
const components = glob
  .sync(join(srcBase, '**/index.js'))
  .filter((d) => d !== srcBase)
  .map((d) => [
    dirname(d).replace(srcBase, ''),
    camelcase(basename(dirname(d)), { pascalCase: true }),
  ]);

writeFile(
  join(srcBase, 'index.js'),
  `/**
  * @file
  * Entry point (automatically generated)
  */

${components
  .map(([path, identifier]) => `export * as ${identifier} from './${path}';`)
  .join('\n')}`,
);
