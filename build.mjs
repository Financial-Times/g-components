import { sassPlugin } from 'esbuild-sass-plugin';
import { build } from 'esbuild';

for (const format of ['cjs', 'esm']) {
  await build({
    minify: format === 'cjs',
    loader: {
      '.js': 'jsx',
    },
    entryPoints: ['src/index.js'],
    bundle: true,
    format,
    outfile: format === 'cjs' ? 'build/g-components.js' : 'build/g-components.esm.js',
    plugins: [
      sassPlugin({
        loadPaths: ['node_modules', 'node_modules/@financial-times'],
      }),
    ],
  }).catch(() => process.exit(1));
}
