import * as Comlink from 'comlink';
import * as monaco from "monaco-editor";
import autocomplete, { CompletionItemKind } from "autocomplete"
import { IframeEventListener } from './component';
import { monarchLanguage } from "./lang/monarchLanguage";
import "./styles/iframe.css"
import { Components } from '.';

let completer: ReturnType<ReturnType<typeof autocomplete>> | null = null;
const root = document.createElement('div');
root.classList.add('editor-parent')

const editorNode = document.createElement('div');
editorNode.style.height = '100%';
root.append(editorNode)

const style = document.createElement('link')
style.rel = "stylesheet";
style.href = "iframe.css";

document.head.append(style);

document.body.append(root)

monaco.editor.defineTheme('myCustomTheme', {
    base: 'vs-dark',
    inherit: true,
    colors: {},
    rules: [
        { token: 'identifier', foreground: /*'4EC9B0' */ '9CDCFE' },
        { token: 'componentselector', foreground: 'E4632F' },
        { token: 'literal', foreground: 'B5CEA8' }
    ]
});

monaco.languages.register({ id: "custom" })

monaco.languages.setMonarchTokensProvider('custom', monarchLanguage);
monaco.languages.setLanguageConfiguration('custom', {
    brackets: [['[', ']'], ['(', ')'], ['{', '}']],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
    ],
    surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
    ],
    autoCloseBefore: ";:.,=}])>` \n\t"
});

const cursorState: {
    position?: monaco.Position,
    currentASTContext?: ReturnType<ReturnType<ReturnType<typeof autocomplete>>["which"]>,
    previousCharUnderCursor?: string,
    charUnderCursor?: string,
    possibilitiesJustBeforeCursor?: {
        result: string,
        kind: CompletionItemKind
    }[],
    possibilitiesAtCursor?: {
        result: string,
        kind: CompletionItemKind
    }[]
} = {}

const editor = monaco.editor.create(editorNode, {
    value: '',
    language: 'custom',
    theme: 'myCustomTheme',
    contextmenu: true,
    autoClosingBrackets: 'always'
});


window.addEventListener('resize', () => {
    editor.layout({
        width: root.clientWidth,
        height: root.clientHeight
    });
})

const decorationsToClear: monaco.editor.IEditorDecorationsCollection[] = []

let comps: Components | null = null;
const imperativeHandle = {
    setValue(code: string) {
        editor.getModel()?.setValue(code);
    },
    highlight: (locations: [offsetstart: number, offsetend: number][], timeout: number | null = null) => {
        const model = editor.getModel()!;


        const decorationsContent = locations.map(([offsetstart, offsetend]): monaco.editor.IModelDeltaDecoration => {

            const start = model.getPositionAt(offsetstart);
            const end = model.getPositionAt(offsetend);

            const range = new monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column);

            return {
                range: range,
                options: {
                    className: 'yellow-highlight',
                    minimap: {
                        position: 1,
                        color: "#ffff00"
                    }
                }
            }
        });

        const decorations = editor.createDecorationsCollection();
        decorations.set(decorationsContent);

        decorationsToClear.push(decorations);

        if (timeout !== null) {
            setTimeout(() => {
                decorations.clear();
            }, timeout)
        }
    },
    clearHighlights: () => {
        decorationsToClear.forEach(d => d.clear())
        decorationsToClear.splice(0, decorationsToClear.length);
    },
    setComponents: (components: Components) => {
        comps = components;
    }
};

export type API = typeof imperativeHandle;

Comlink.expose(imperativeHandle);

const remote = Comlink.wrap<IframeEventListener>(Comlink.windowEndpoint(self.parent));

editor.onDidChangeCursorPosition((e) => {
    cursorState.position = e.position;
    cursorState.charUnderCursor = editor.getModel()?.getValue()[editor.getModel()!.getOffsetAt(e.position)] || '';
    cursorState.previousCharUnderCursor = editor.getModel()?.getValue()[editor.getModel()!.getOffsetAt(e.position) - 1] || '';

    if (completer) {
        const which = completer.which(e.position);

        if (which) {
            cursorState.currentASTContext = which;
        }
    }
})

const onChange = () => {
    const code = editor.getModel()?.getValue()!;
    if (comps) {
        completer = autocomplete(code, comps)();
    }

    try {
        remote.onChange(code);
    } catch {

    }
}

editor.getModel()?.onDidChangeContent(() => {
    onChange();
});


remote.load();
onChange();