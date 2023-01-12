import { createEffect, createMemo, createSignal, onMount } from "solid-js";
import * as monaco from "monaco-editor";
import { Range } from "monaco-editor";
import { monarchLanguage } from "../lang/monarchLanguage";
import { createElementSize } from "@solid-primitives/resize-observer";
import parser from "ecss-parser"
import astToRanges from "../astToRanges";
import { ASTNode } from "ecss-parser/dist/ast-types";

export type Components = {
    [key: string]: {
        [key: string]: 'number' | 'boolean';
    }
}

export default function Monaco({ setImperativeHandle, onChange }: {
    setImperativeHandle: (value: {
        setComponents?: ((components: Components) => void) | undefined;
        clearHighlights?: (() => void) | undefined;
        setValue?: ((code: string) => void) | undefined;
        highlight?: ((range: Range, timeout: number | null) => void) | undefined;
    } | null) => void,
    onChange: (e: string) => void
}) {
    const [editorRef, setEditor] = createSignal<monaco.editor.IStandaloneCodeEditor | null>(null)
    const [components, setComponents] = createSignal<Components>({})

    const completionItems = createMemo(() => {


        const keys: string[] = []

        const comps = components();

        Object.keys(comps).forEach(key => {
            keys.push(key)


            const subkeys = Object.keys(comps[key]);
            subkeys.length > 1 && subkeys.forEach(subkey => {
                keys.push(`${key}-${subkey}`)
            })
        })

        return keys;
    })




    let ref: HTMLDivElement | undefined;
    let parentRef: HTMLDivElement | undefined;

    let astRanges: ReturnType<typeof astToRanges> | null = null;

    onMount(async () => {
        const size = createElementSize(parentRef!);

        createEffect(() => {
            if (editorRef()) {
                editorRef()!.layout({
                    width: size.width + 1,
                    height: size.height + 1
                });
            }

        });


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


        let currentASTContext: ASTNode & { parent: ASTNode | null } | null = null;

        const completionItemProvider: monaco.languages.CompletionItemProvider = {
            provideCompletionItems(model, position) {
                const word = model.getWordUntilPosition(position);

                const o: monaco.languages.CompletionItem[] = []

                const endOfWord = editor.getModel()!.getOffsetAt(position);
                const startOfWord = editor.getModel()!.getPositionAt(endOfWord - word.word.length);

                if (currentASTContext?.type === 'Literal' || currentASTContext?.type === 'Declaration') {
                    o.push({
                        label: "true",
                        insertText: "true",
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        detail: 'This is the Bar keyword.',
                        range: new Range(startOfWord.lineNumber, startOfWord.column, position.lineNumber, position.column),
                    })
                }


                if (currentASTContext?.type === 'ComponentSelector') {
                    o.push(...completionItems().map((key) => {
                        return {
                            label: key,
                            insertText: key,
                            kind: monaco.languages.CompletionItemKind.Field,
                            detail: 'This is the Bar keyword.',
                            range: new Range(startOfWord.lineNumber, startOfWord.column, position.lineNumber, position.column),
                        }
                    }))
                }

                if (currentASTContext?.type === 'Block') {
                    o.push(...completionItems().map((key) => {
                        return {
                            label: key,
                            insertText: key + ': ;',
                            kind: monaco.languages.CompletionItemKind.Field,
                            detail: 'This is the Bar keyword.',
                            range: new Range(startOfWord.lineNumber, startOfWord.column, position.lineNumber, startOfWord.column + (key + ': ;').length),
                            command: { id: 'cursorLeft', title: 'LOOL' }
                        }
                    }))
                }


                const completionItes: monaco.languages.CompletionItem[] = o;

                return { suggestions: completionItes };
            }
        };

        monaco.languages.registerCompletionItemProvider('custom', completionItemProvider);




        const editor = monaco.editor.create((ref as HTMLElement)!,
            {
                value: `[comp1][comp2] {
velocity-y -10;
}`,
                language: 'custom',
                theme: 'myCustomTheme',
                contextmenu: true,
            }
        );


        editor.updateOptions({
            lineNumbersMinChars: 2
        });

        editor.getModel()?.onDidChangeContent(() => {
            onChange(editor.getModel()!.getValue())

            const { val } = parser(editor.getModel()!.getValue())

            if (val) {
                astRanges = astToRanges(val);
            }

        })

        editor.onDidChangeCursorPosition((e) => {
            if (astRanges) {
                currentASTContext = astRanges.which(e.position);
            }
        })

        setEditor(editor);

        setImperativeHandle({
            setValue: (code: string) => {
                editor.getModel()?.setValue(code);
            }
        });

        const decorationsToClear: monaco.editor.IEditorDecorationsCollection[] = []

        setImperativeHandle({
            highlight: (range: Range, timeout: number | null = null) => {
                const decoration = {
                    range: range,
                    options: {
                        className: 'yellow-highlight'
                    }
                };

                const decorations = editor.createDecorationsCollection();
                decorations.set([decoration]);

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
            }
        });

        setImperativeHandle({
            setComponents: (components: Components) => {
                setComponents(components);
            }
        })
    });


    return (
        <div ref={parentRef} class="editor-parent">
            <div ref={ref} style="height: 100%"></div>
        </div>
    );
}
