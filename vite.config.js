/// <reference types="vitest" />
// https://vitejs.dev/config/
import glob from 'glob';
import { defineConfig } from 'vite';
import { resolve, dirname, basename } from 'path';
import react from '@vitejs/plugin-react';

const pkg = require('./package.json');
const entry = glob
  .sync('src/**/index.jsx')
  .filter((c) => !c.includes('src/index.js'))
  .reduce(
    (a, componentPath) => ({
      ...a,
      [basename(dirname(componentPath))]: resolve(__dirname, componentPath),
    }),
    { 'g-components': resolve(__dirname, 'src/index.js') },
  );

export default defineConfig({
  plugins: [react()],
  build: {
    // cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry,
      fileName: (format, component) => {
        if (component === 'g-components') {
          return format === 'cjs' ? `g-components.cjs` : `g-components.js`;
        } else {
          return format === 'cjs' ? `${component}/index.cjs` : `${component}/index.js`;
        }
      },
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
      // Only named exports
      output: {
        exports: 'named',
        // assetFileNames: (info) => {
        //   console.dir(info);
        //   console.log(rest);
        //   return 'assets/[name]-[hash][extname]';
        // },
      },
    },
  },
});
