const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const nested = require("postcss-nested")
const variables = require("postcss-simple-vars")

const mode = process.env.NODE_ENV
const dev = mode === "development"

const config = {
  plugins: [
    nested(),
    variables(),
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer(),
    !dev &&
      cssnano({
        preset: "default",
      }),
  ],
}

module.exports = config
