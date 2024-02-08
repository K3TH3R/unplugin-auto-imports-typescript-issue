/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/mylib',

  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
		AutoImport({
			imports: [
				{ cesium: ['Cartesian2'] },
				{ from: 'cesium', imports: [
          ['Cartesian2', 'TCartesian2'],
          'Cartesian3',
        ],
          type: true
        },
			],
			dts: './auto-imports.d.ts',
			vueTemplate: true,
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './libs/mylib/.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true,
      },
		}),
  ],
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/libs/mylib',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'mylib',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['cesium'],
    },
  },
});
