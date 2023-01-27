import { build } from "esbuild";
import { solidPlugin } from "esbuild-plugin-solid";
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import path from "path"
import fs from "fs/promises"
import { URL } from 'url';
import { promisify } from "util"
import g from "glob"

const glob = promisify(g);

const __dirname = new URL('.', import.meta.url).pathname;

const args = process.argv.slice(2);

/** 
 *  @function 
 *  @returns esbuild.Plugin 
*/
const ecssEditorPlugin = () => {
  /** @type esbuild.Plugin */
  const plugin = {
    name: 'ecss-editor-plugin',

    /** 
     * @function
     * @param {esbuild.PluginBuild} build
     */
    setup(build) {
      build.onEnd(async (result) => {
        const outPath = build.initialOptions.outdir ? path.join(__dirname, build.initialOptions.outdir) : path.dirname(path.join(__dirname, build.initialOptions.outfile))
        const iframePath = new URL(await import.meta.resolve('editor/dist/iframe.js')).pathname;

        const editorDistFolder = path.dirname(iframePath);

        const files = [...await glob(`${editorDistFolder}/*.ttf`), ...await glob(`${editorDistFolder}/iframe.css*`), ...await glob(`${editorDistFolder}/iframe.js*`)]

        for (const file of files) {
          await fs.copyFile(file, path.join(outPath, path.basename(file)))

          if (build.initialOptions.sourcemap && file.endsWith('.map') || !file.endsWith('.map')) {
            await fs.copyFile(iframePath + '.map', path.join(outPath, path.basename(iframePath) + '.map'))
          }
        }
      })
    }
  }


  return plugin
}


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
    ".ttf": "file",
    ".ecss": "text"
  },
  ...watch,
  logLevel: "info",
  plugins: [NodeModulesPolyfillPlugin(), solidPlugin(), ecssEditorPlugin()],
}).catch(() => process.exit(1));