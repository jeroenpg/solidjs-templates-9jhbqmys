import { defineConfig } from '@tanstack/solid-start/config'

export default defineConfig({
	server: {
		esbuild: {
			options: {
				supported: {
					'top-level-await': true,
				},
			},
		},
	},
  tsr: {
    appDirectory: "src",
    routeFileIgnorePattern: ".(spec|test).ts",
  }
});
//