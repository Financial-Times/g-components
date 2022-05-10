import { sassPlugin } from 'esbuild-sass-plugin';
import { build } from 'esbuild';
import glob from 'glob';
import { basename, dirname } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const pkg = require('../package.json');

const baseConfig = {
  minify: false,
  sourcemap: true,
  target: 'es2016',
  loader: {
    '.js': 'jsx',
  },
  bundle: true,
  external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
  plugins: [
    sassPlugin({
      loadPaths: ['node_modules', 'node_modules/@financial-times'],
    }),
  ],
};
/* eslint-disable no-restricted-syntax,no-await-in-loop */
for (const format of ['cjs' /*, 'esm'*/]) {
  // Build monolith bundle
  await build({
    ...baseConfig,
    outfile: format === 'cjs' ? 'build/g-components.js' : 'build/g-components.mjs',
    entryPoints: ['src/index.js'],
    format,
  }).catch(() => process.exit(1));

  // Build individual bundles
  for (const componentPath of glob
    .sync('src/**/index.js')
    .filter((c) => !c.includes('src/index.js'))) {
    const component = basename(dirname(componentPath));

    await build({
      ...baseConfig,
      entryPoints: [componentPath],
      format,
      outfile: format === 'cjs' ? `build/${component}/index.js` : `build/${component}/index.mjs`,
    }).catch(() => process.exit(1));
  }
}
