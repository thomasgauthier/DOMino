import * as monaco from "monaco-editor/esm/vs/editor/editor.api"
import ILanguage = monaco.languages.IMonarchLanguage;

export const monarchLanguage = <ILanguage>{
    // Set defaultToken to invalid to see what you do not tokenize yet
    keywords: [

    ],
    tokenizer: {
        root: [
            [/(\[)([a-zA-Z_][a-zA-Z0-9_-]*)(\])/, ['delimiter.curly', 'componentselector', 'delimiter.curly']],
            [/[a-zA-Z_][a-zA-Z0-9_-]*/, {
                cases: {
                    '@keywords': 'keyword',
                    '@default': 'identifier'
                }
            }],
            {
                include: '@whitespace'
            },
            {
                include: '@comments'
            },
            {
                include: '@keywords'
            },
            {
                include: '@strings'
            },
            [/[0-9]+/,  'literal' ],
            [/[+-]?[0-9]*\.[0-9]+/,  'literal'],
            [/[+-]?[0-9]+/,  'literal'],
            [/[()\[\]:;,.+-/*=!\?$@"]/, { token: 'PUNCTUATION' }],
            [/[{}()\[\]]/, 'delimiter.curly'],
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white']
        ],
        comments: [
            [/\/\/.*$/, 'comment']
        ],
        keywords: [
            [/true/, 'TRUE'],
            [/false/, 'FALSE'],
            [/unset/, 'UNSET']
        ],
        strings: [
            [/"([^\\"]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string'],
            [/'([^\\']|\\.)*$/, 'string.invalid'],
            [/'/, 'string', '@string']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string', '@pop'],
            [/'/, 'string', '@pop']
        ]
    }
}