
import * as Comlink from 'comlink';
import { API } from './iframe';
import { Components } from '.';

export interface ECSSEditorEventMap {
    'codechanged': CustomEvent<string>;
    'load': Event;
}

export default class ECSSEditor extends HTMLElement {
    public addEventListener<T extends keyof ECSSEditorEventMap>(
        // the event name, a key of MyEventMap
        type: T,

        // the listener, using a value of MyEventMap
        listener: (this: ECSSEditor, ev: ECSSEditorEventMap[T]) => any,

        // any options
        options?: boolean | AddEventListenerOptions
    ): void;

    // the fallback for any event names not in our map
    public addEventListener(
        type: string,
        listener: (this: ECSSEditor, ev: Event) => any,
        options?: boolean | AddEventListenerOptions
    ): void {
        super.addEventListener(type, listener, options);
    }

    root: HTMLElement | null = null;

    imperativeHandle: API | null = null;

    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: "open" });

        const root = document.createElement('iframe')
        root.style.backgroundColor = "#1e1e1e"
        root.setAttribute('frameBorder', "0");
        root.srcdoc = ""
        root.id = "editor-iframe"
        root.style.width = '100%';
        root.style.height = '100%';

        const style = document.createElement("style");
        style.textContent = `iframe {
width: 100%;
height: 100%;
}
`;

        const div = document.createElement('div')
        div.style.width = '100%';
        div.style.height = '100%';

        div.append(style, root)

        this.shadowRoot!.append(div);

        const iframe = this.shadowRoot!.querySelector('iframe');
        iframe?.addEventListener('load', () => {
            const iframeDocument = iframe!.contentDocument!;
            const head = document.createElement('head');
            const body = document.createElement('body');
            const library = document.createElement('script');

            library.src = './iframe.js';

            const stylel = document.createElement('link')
            stylel.rel = "stylesheet";
            stylel.href = "iframe.css";

            head.append(style, stylel, library)

            iframeDocument.head.parentNode!.replaceChild(head, iframeDocument.head);
            iframeDocument.body.parentNode!.replaceChild(body, iframeDocument.body);

            const imperativeHandle = Comlink.wrap<API>(Comlink.windowEndpoint(iframe.contentWindow!));

            const elem = this;

            const iframeEventListener: IframeEventListener = {
                onChange(code: string) {
                    elem.dispatchEvent(new CustomEvent('codechanged', { detail: code }));
                },
                load: () => {
                    this.imperativeHandle = {
                        setValue: (code: string) => {
                            imperativeHandle.setValue(code)
                        },
                        highlight: (locations: [offsetstart: number, offsetend: number][], timeout: number | null = null) => {
                            imperativeHandle.highlight(locations, timeout);
                        },
                        clearHighlights: () => {
                            imperativeHandle.clearHighlights();
                        },
                        setComponents(components: Components) {
                            imperativeHandle.setComponents(components);
                        }
                    }

                    elem.dispatchEvent(new Event('load'));
                }
            };

            Comlink.expose(iframeEventListener);
        })
    }
}

customElements.define("ecss-editor", ECSSEditor);

export type IframeEventListener = {
    onChange(code: string): void;
    load: () => void;
}
