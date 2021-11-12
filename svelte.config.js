import preprocess from "svelte-preprocess";
import { resolve } from "path";
import netlify from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: netlify(),
    vite: {
      resolve: {
        alias: {
          $components: resolve("./src/components"),
          $stores: resolve("./src/stores"),
        },
      },
    },
  },
};

export default config;
