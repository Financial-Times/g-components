import { sassPlugin } from 'esbuild-sass-plugin';
import { build } from 'esbuild';

await build({
  loader: {
    '.js': 'jsx',
  },
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'build/g-components.js',
  plugins: [
    sassPlugin({
      loadPaths: ['node_modules', 'node_modules/@financial-times'],
    }),
  ],
}).catch(() => process.exit(1));
