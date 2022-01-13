import { sassPlugin } from 'esbuild-sass-plugin';
import { build } from 'esbuild';
import glob from 'glob';

for (const format of ['cjs', 'esm']) {
  await build({
    loader: {
      '.js': 'jsx',
    },
    entryPoints: ['src/index.js', ...(format === 'esm' ? glob.sync('src/**/index.js') : [])],
    bundle: true,
    format,
    outfile: format === 'cjs' ? 'build/g-components.js' : undefined,
    outdir: format === 'esm' ? 'build' : undefined,
    plugins: [
      sassPlugin({
        loadPaths: ['node_modules', 'node_modules/@financial-times'],
      }),
    ],
  }).catch(() => process.exit(1));
}
