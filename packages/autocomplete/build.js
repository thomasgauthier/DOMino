import esbuild from 'esbuild'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { dtsPlugin } from "esbuild-plugin-d.ts";
import { promisify } from "util"
import { URL } from 'url';
import fs from "fs/promises"
import path from "path"
import g from "glob"

const __dirname = new URL('.', import.meta.url).pathname;

const glob = promisify(g);


const fixFile = async (file) => {
  const content = await fs.readFile(file, 'utf-8');
  const fixed = content.replace(/import\s+{\s+Position\s+}\s+from\s+("|')monaco-editor\/esm\/vs\/editor\/common\/core\/position\.js('|")/g, "import { Position } from 'monaco-editor'")

  await fs.writeFile(file, fixed)
}

/** 
 *  @function 
 *  @returns esbuild.Plugin 
*/
const monacaPlugin = () => ({
  name: 'rename-monaco-imports',
  setup(build) {
    build.onEnd(async (result) => {
      const dir = path.join(__dirname, build.initialOptions.outdir);
      const declarationFiles = await glob(path.join(dir, '**', '**.d.ts'))

      await Promise.all(declarationFiles.map(file => fixFile(file)))
    })
  },
});


; (async () => {
  const source = await glob('./src/**/*.ts')

  esbuild.build({
    entryPoints: source,
    outdir: 'dist/',
    format: 'esm',
    bundle: true,
    sourcemap: true,
    loader: {
      ".css": "empty",
    },
    target: 'es2022',
    platform: 'node',
    plugins: [NodeModulesPolyfillPlugin(), dtsPlugin(), monacaPlugin()]
  }).catch(() => process.exit(1))


  esbuild.build({
    entryPoints: source,
    outdir: 'cjs/',
    format: 'cjs',
    bundle: true,
    sourcemap: true,
    loader: {
      ".css": "empty",
    },
    target: 'es2015',
    platform: 'node',
    plugins: [dtsPlugin(), monacaPlugin(), /*NodeModulesPolyfillPlugin(), *//* dtsPlugin()*/]
  }).catch(() => process.exit(1))



})()



