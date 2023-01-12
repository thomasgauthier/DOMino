import { build } from "esbuild";
import { solidPlugin } from "esbuild-plugin-solid";
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

const args = process.argv.slice(2);

const watch = args[0] === '-w' || args[0] === '--watch' ? {
  watch: {
    onRebuild: (error, result) => {
      if (error) console.error('watch build failed:', error)
      else console.log('watch build succeeded:', result)
    }
  }
} : {}

build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  outfile: "dist/main.js",
  minify: false,
  sourcemap: true,
  loader: {
    ".svg": "dataurl",
    ".ttf": "file"
  },
  ...watch,
  logLevel: "info",
  plugins: [NodeModulesPolyfillPlugin(), solidPlugin()],
}).catch(() => process.exit(1));