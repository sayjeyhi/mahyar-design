import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import preprocess from "svelte-preprocess"
import { resolve } from "path"
import netlify from "@sveltejs/adapter-netlify"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],

  kit: {
    adapter: netlify(),
    vite: {
      test: {
        environment: "jsdom",
        coverage: {
          reporter: ["text", "json", "html"],
        },
      },
      resolve: {
        alias: {
          $components: resolve("./src/components"),
          $stores: resolve("./src/stores"),
          $styles: resolve("./src/styles"),
          $utils: resolve("./src/utils"),
          $src: resolve("./src"),
        },
      },
    },
  },
}

export default config
