import { createEffect, createSignal, onMount } from "solid-js";
import { render } from "solid-js/web"
import Monaco, { Components } from "./components/Monaco";
import createEngine from "engine"

import { Range } from "monaco-editor";
import { createElementSize } from "@solid-primitives/resize-observer";

import "./styles/main.css"

function Main() {
    let ref: HTMLCanvasElement | undefined;


    const [imperativeHandle, setImperativeHandle] = createSignal<{ setComponents?: (components: Components) => void, clearHighlights?: () => void, setValue?: (code: string) => void, highlight?: (range: Range, timeout: number | null) => void } | null>(null);
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

        if (saved && handle?.setValue) {
            handle.setValue(saved)
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
            highlightCode(loc, timeout) {

                const handle = imperativeHandle();
                if (handle?.highlight && !outofsync) {
                    handle.highlight(new Range(loc!.start.line, loc!.start.column, loc!.end.line, loc!.end.column + 1), timeout || null)
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
    })

    function onCodeChange(code: string) {
        localStorage.setItem('codevalue', code)
        const handle = imperativeHandle()
        if (handle && handle.clearHighlights) {
            handle.clearHighlights()
        }

        const e = engine();

        if (e) {
            e.update(code);
        }
    }

    const mergeSetImperativeHangle = (value: ReturnType<typeof imperativeHandle>) => {
        if (value) {
            setImperativeHandle({ ...imperativeHandle(),  ...value });
        }
    }


    return <div class="main">

        <div id="game" style="width:0;height:0;">

            <x-entity position='{"x":0,"y":400}' dimension='{"width":500,"height":100}' rigidbody='{"static": 1}'
                floor='{"is":true}' velocity='{}' color='{"stringmapid":"blue"}'>
            </x-entity>

            <x-entity position='{"x":500,"y":0}' dimension='{"width":100,"height":500}' rigidbody='{"static": 1}'
                wall='{"is":true}' velocity='{}' color='{"stringmapid":"orange"}'>
            </x-entity>

            <x-entity sprite='{"stringmapid":"sprites/thwomp.png"}' speed='{"value":0.5}' scale='{"scale": 1}'
               controller='{}' position='{"x":0,"y":0}' dimension='{"width":32,"height":32}' mario='{"is":true}' rigidbody='{}' velocity='{}'>
            </x-entity>


            <x-entity global='{}'></x-entity>


        </div>

        <canvas ref={ref} class="game" />
        <Monaco setImperativeHandle={mergeSetImperativeHangle} onChange={onCodeChange} />
    </div>;
}

render(() => <Main />, document.getElementById('app')!)
