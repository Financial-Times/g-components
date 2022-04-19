import { sassPlugin } from 'esbuild-sass-plugin';
import { build } from 'esbuild';
import glob from 'glob';
import { basename, dirname } from 'path';

const baseConfig = {
  minify: true,
  sourcemap: true,
  loader: {
    '.js': 'jsx',
  },
  bundle: true,
  external: ['react', 'react-dom'],
  plugins: [
    sassPlugin({
      loadPaths: ['node_modules', 'node_modules/@financial-times'],
    }),
  ],
};

for (const format of ['cjs', 'esm']) {
  // Build monolith bundle
  await build({
    ...baseConfig,
    outfile: format === 'cjs' ? 'build/g-components.js' : 'build/g-components.mjs',
    entryPoints: ['src/index.js'],
  }).catch(() => process.exit(1));

  // Build individual bundles
  for (const componentPath of glob
    .sync('src/**/index.js')
    .filter((c) => !c.includes('src/index.js'))) {
    const component = basename(dirname(componentPath));

    await build({
      ...baseConfig,
      entryPoints: [componentPath],
      outfile: format === 'cjs' ? `build/${component}/index.js` : `build/${component}/index.mjs`,
    }).catch(() => process.exit(1));
  }
}
