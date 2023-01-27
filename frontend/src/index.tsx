import "editor"
import { createEffect, createSignal, onMount } from "solid-js";
import { render } from "solid-js/web"
import createEngine from "engine"
import debounce from "lodash.debounce"
import { createElementSize } from "@solid-primitives/resize-observer";

import "./styles/main.css"
import Editor from "editor/dist/component";
import snippet from "./snippet.ecss"
import { Components } from "editor";

function Main() {
    let ref: HTMLCanvasElement | undefined;
    let editorRef: HTMLDivElement | undefined;

    const [code, rawSetCode] = createSignal<string>('')

    const setCode = debounce((code: string) => {
        rawSetCode(code)
    }, 300)

    const [imperativeHandle, setImperativeHandle] = createSignal<{ setComponents?: (components: Components) => void, clearHighlights?: () => void, setValue?: (code: string) => void, highlight?: (locations: [offsetstart: number, offsetend: number][], timeout: number | null) => void } | null>(null);
    const [engine, setEngine] = createSignal<ReturnType<typeof createEngine> | null>(null)

    createEffect(() => {
        const e = engine();
        const editor = imperativeHandle();

        if (e && editor?.setComponents) {
            editor.setComponents(e.components)
        }
    })

    createEffect(() => {
        const saved = localStorage.getItem('codevalue');

        const handle = imperativeHandle();

        if (handle && handle.setValue) {

            if (saved) {
                handle.setValue(saved)
            } else {
                handle.setValue(snippet)
            }
        }
    })

    let outofsync = false;

    onMount(() => {
        const size = createElementSize(ref!);

        createEffect(() => {
            const { width, height } = size;


            if (ref) {
                ref.width = width;
                ref.height = height;
            }
        })

        const engine = createEngine(ref as HTMLCanvasElement, {
            highlightCode(locs, timeout) {
                const handle = imperativeHandle();

                if (handle?.highlight && !outofsync) {
                    const l = locs.map(e => {
                        return [
                            e!.start.offset,
                            e!.end.offset
                        ] as [number, number]
                    })

                    handle.highlight(l, timeout || null);
                }
            },
            clearHighlights: () => {
                const handle = imperativeHandle()
                if (handle?.clearHighlights) {
                    handle.clearHighlights();
                }
            }
        });

        const handle = imperativeHandle()
        if (handle?.setComponents) {
            handle.setComponents(engine.components)
        }

        setEngine(engine);

        if (editorRef) {
            const editor = editorRef as any as Editor;

            editor.addEventListener('load', () => {
                mergeSetImperativeHangle(editor.imperativeHandle)
            })

            editor.addEventListener('codechanged', ({ detail: code }) => {
                onCodeChange(code);
            })
        }
    })

    function onCodeChange(newCode: string) {
        setTimeout(() => {
            localStorage.setItem('codevalue', newCode)

        }, 0)


        setTimeout(() => {
            const handle = imperativeHandle()
            if (handle && handle.clearHighlights) {
                handle.clearHighlights()
            }

        }, 0)

        setCode(newCode);
    }

    createEffect(() => {
        const e = engine();
        const c = code();

        if (e) {
            try {
                e.update(c);
            } catch (e) {
                console.error(e);
            }
        }
    })

    const mergeSetImperativeHangle = (value: ReturnType<typeof imperativeHandle>) => {
        if (value) {
            setImperativeHandle({ ...imperativeHandle(), ...value });
        }
    }


    return <div class="main">

        <div id="game" style="width:0;height:0;">
            <x-entity position='{"x":0,"y":400}' dimension='{"width":500,"height":100}' rigidbody='{"static": 1}'
                floor='{"is":true}' velocity='{}' scale='{"scale": 1}' sprite='{"stringmapid":"sprites/floor.png"}' sprite-repeat='{"stringmapid":"sprites/brick.png"}' >
            </x-entity>

            <x-entity position='{"x":231,"y":384}' dimension='{"width":32,"height":16}'
                scale='{"scale": 1}' sprite='{"stringmapid":"sprites/bush.png"}'   >
            </x-entity>

            <x-entity position='{"x":391,"y":384}' dimension='{"width":32,"height":16}'
                scale='{"scale": 1}' sprite='{"stringmapid":"sprites/bush.png"}'   >
            </x-entity>

            <x-entity position='{"x":270,"y":336}' dimension='{"width":16,"height":16}'
                scale='{"scale": 1}' sprite='{"stringmapid":"sprites/questioncube.png"}' rigidbody='{"static": 1}' velocity='{}'  >
            </x-entity>

            <x-entity position='{"x":335,"y":336}' dimension='{"width":16,"height":16}'
                scale='{"scale": 1}' sprite='{"stringmapid":"sprites/brick.png"}' rigidbody='{"static": 1}' velocity='{}'  >
            </x-entity>

            <x-entity position='{"x":351,"y":336}' dimension='{"width":16,"height":16}'
                scale='{"scale": 1}' sprite='{"stringmapid":"sprites/questioncube.png"}' rigidbody='{"static": 1}' velocity='{}'  >
            </x-entity>

            <x-entity position='{"x":366,"y":336}' dimension='{"width":16,"height":16}'
                scale='{"scale": 1}' sprite='{"stringmapid":"sprites/brick.png"}' rigidbody='{"static": 1}' velocity='{}'  >
            </x-entity>

            <x-entity position='{"x":382,"y":336}' dimension='{"width":16,"height":16}'
                scale='{"scale": 1}' sprite='{"stringmapid":"sprites/questioncube.png"}' rigidbody='{"static": 1}' velocity='{}'  >
            </x-entity>

            <x-entity position='{"x":398,"y":336}' dimension='{"width":16,"height":16}'
                scale='{"scale": 1}' sprite='{"stringmapid":"sprites/brick.png"}' rigidbody='{"static": 1}' velocity='{}'  >
            </x-entity>

            <x-entity position='{"x":366,"y":272}' dimension='{"width":16,"height":16}'
                scale='{"scale": 1}' sprite='{"stringmapid":"sprites/questioncube.png"}' rigidbody='{"static": 1}' velocity='{}'  >
            </x-entity>

            <x-entity position='{"x":183,"y":240}' dimension='{"width":32,"height":24}'
                scale='{"scale": 1}' sprite='{"stringmapid":"sprites/cloud.png"}'  >
            </x-entity>

            <x-entity position='{"x":327,"y":224}' dimension='{"width":32,"height":24}'
                scale='{"scale": 1}' sprite='{"stringmapid":"sprites/cloud.png"}'  >
            </x-entity>

            <x-entity sprite='{"stringmapid":"sprites/mountain.png"}' position='{"x":0,"y":365}' scale='{"scale": 1}' dimension='{"width":80,"height":35}'>
            </x-entity>

            <x-entity sprite='{"stringmapid":"sprites/thwomp.png"}' speed='{"value":0.5}' scale='{"scale": 1}'
                controller='{}' position='{"x":0,"y":0}' dimension='{"width":16,"height":16}' mario='{"is":true}' rigidbody='{}' velocity='{}'>
            </x-entity>

            <x-entity global='{}'></x-entity>

        </div>

        <canvas ref={ref} class="game" />
        <ecss-editor ref={editorRef!}></ecss-editor>
    </div>;
}

render(() => <Main />, document.getElementById('app')!)
