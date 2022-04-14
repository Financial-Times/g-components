import { sassPlugin } from 'esbuild-sass-plugin';
import { build } from 'esbuild';
import glob from 'glob';
import { basename, dirname } from 'path';

for (const format of ['cjs', 'esm']) {
  // Build monolith bundle
  await build({
    minify: format === 'cjs',
    loader: {
      '.js': 'jsx',
    },
    entryPoints: ['src/index.js'],
    bundle: true,
    external: ['react', 'react-dom'],
    format,
    outfile: format === 'cjs' ? 'build/g-components.js' : 'build/g-components.mjs',
    plugins: [
      sassPlugin({
        loadPaths: ['node_modules', 'node_modules/@financial-times'],
      }),
    ],
  }).catch(() => process.exit(1));

  // Build individual bundles
  for (const componentPath of glob
    .sync('src/**/index.js')
    .filter((c) => !c.includes('src/index.js'))) {
    const component = basename(dirname(componentPath));
    await build({
      minify: format === 'cjs',
      loader: {
        '.js': 'jsx',
      },
      entryPoints: [componentPath],
      bundle: true,
      external: ['react', 'react-dom'],
      format,
      outfile: format === 'cjs' ? `build/${component}/index.js` : `build/${component}/index.mjs`,
      plugins: [
        sassPlugin({
          loadPaths: ['node_modules', 'node_modules/@financial-times'],
        }),
      ],
    }).catch(() => process.exit(1));
  }
}
