import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'

export default defineConfig({
	root: __dirname,
	cacheDir: '../../node_modules/.vite/libs/mylib',

	plugins: [
		nxViteTsPaths(),
		AutoImport({
			imports: [
				{ cesium: ['Cartesian2', 'Cartesian3', 'Color'] },
				{
					from: 'cesium',
					type: true,
					imports: [
						['Cartesian2', 'TCartesian2'],
						'Cartesian3',
					],
				},
			],
			dts: './auto-imports.d.ts',
			vueTemplate: true,
			eslintrc: {
				enabled: true,
				filepath: './libs/mylib/.eslintrc-auto-import.json',
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
})
