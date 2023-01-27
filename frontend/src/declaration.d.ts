

import Editor, { ECSSEditorEventMap } from "editor/dist/component"

declare module "solid-js" {
    namespace JSX {
        interface IntrinsicElements {
            "x-entity": JSX.IntrinsicElements["div"] & { [key: string]: any };
            "ecss-editor": JSX.IntrinsicElements["div"] & { [key: string]: any };
        }
    }
}

export type ECSSEditor = { imperativeHandle: Editor["imperativeHandle"] }

declare global {
    interface Editor { //adds definition to Document, but you can do the same with HTMLElement
        addEventListener<K extends keyof ECSSEditorEventMap>(type: K,
            listener: (this: Document, ev: ECSSEditorEventMap[K]) => void): void;
        dispatchEvent<K extends keyof ECSSEditorEventMap>(ev: ECSSEditorEventMap[K]): void;
    }
}

export { }; //keep that for TS compiler.