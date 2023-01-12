import esbuild from 'esbuild'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { dtsPlugin } from "esbuild-plugin-d.ts";
import { promisify } from "util"
import g from "glob"

const glob = promisify(g);

; (async () => {
    const source = await glob('./src/**/*.ts')

    esbuild.build({
      entryPoints: source,
      outdir: 'dist/',
      format: 'esm',
      sourcemap: true,
      target: 'es2022',
      plugins: [NodeModulesPolyfillPlugin(), dtsPlugin()]
    }).catch(() => process.exit(1))
    

    esbuild.build({
      entryPoints: source,
      outdir: 'cjs/',
      format: 'cjs',
      bundle: true,
      sourcemap: true,
      target: 'es2015',
      plugins: [NodeModulesPolyfillPlugin(), dtsPlugin()]
    }).catch(() => process.exit(1))
    


})()



