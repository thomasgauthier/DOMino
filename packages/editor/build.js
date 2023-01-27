import { build } from "esbuild";
import { promisify } from "util"
import { dtsPlugin } from "esbuild-plugin-d.ts";
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import alias from 'esbuild-plugin-alias';
import { resolve } from 'import-meta-resolve'

import g from "glob"

const glob = promisify(g);

const args = process.argv.slice(2);

const watch = (args[0] === '-w' || args[0] === '--watch') ? {
  watch: {
    onRebuild: (error, result) => {
      if (error) console.error('watch build failed:', error)
      else console.log('watch build succeeded:', result)
    }
  }
} : {}

  ; (async () => {
    const js = await glob('./src/**/*.ts')
    const source = [...js];
    build({
      entryPoints: source,
      bundle: true,
      outdir: "dist/",
      minify: false,
      sourcemap: true,
      loader: {
        ".svg": "dataurl",
        ".ttf": "file",
        ".html": "base64"
      },
      ...watch,
      logLevel: "info",
      platform: 'browser',
      plugins: [
        NodeModulesPolyfillPlugin(),
        dtsPlugin(),
        alias({
          'assert': await resolve('./node_modules/assert/build/assert.js', import.meta.url),
        })
      ]
    }).catch(() => process.exit(1));
  })()