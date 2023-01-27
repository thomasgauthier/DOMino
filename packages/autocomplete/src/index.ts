import { ANTLRErrorListener, ANTLRInputStream, CommonTokenStream, ParserRuleContext, RecognitionException, Recognizer } from "antlr4ts";
import { Range } from "monaco-editor/esm/vs/editor/common/core/range.js"
import { Position } from "monaco-editor/esm/vs/editor/common/core/position.js"
import { ecssLexer } from "ecss-parser/src/antlr/ecssLexer"
import { ecssParser } from "ecss-parser/src/antlr/ecssParser"
import lineColumn from "line-column";

type NodeName = 'StatementPlaceHolderContext' | 'ArgumentContext' | 'ArgumentsContext' | 'AtRuleContext' | 'AtRuleHeaderContext' | 'BoolvalContext' | 'ComponentAsContext' | 'ComponentAttributeComparatorContext' | 'ComponentAttributeContext' | 'ComponentAttributeValueContext' | 'ComponentAttributesContext' | 'ComponentIdContext' | 'ComponentPropertyIdContext' | 'ComponentSelectorContext' | 'ComponentStatementContext' | 'ComponentStatementsContext' | 'DefineContext' | 'DefineDeclarationContext' | 'DefineDeclarationsContext' | 'DefineHeaderContext' | 'EventHandlerBodyContext' | 'EventHandlerContext' | 'EventHandlerHeaderContext' | 'ExpressionContext' | 'FactorContext' | 'FunctionContext' | 'FunctionNameContext' | 'FunctionParametersContext' | 'IntersectionQueryContext' | 'LiteralContext' | 'MathoperatoradditionsContext' | 'MathoperatorfactorsContext' | 'ProgramContext' | 'QueryContext' | 'QueryExpressionContext' | 'QueryHeaderContext' | 'QueryOperationParametersContext' | 'QueryvarContext' | 'RgbContext' | 'RgbaContext' | 'SetOperatorAnyContext' | 'SetOperatorNotContext' | 'SetoperatorContext' | 'StringLiteralContext' | 'SystemBodyContext' | 'SystemContext' | 'SystemHeaderContext' | 'TermContext' | 'TypeContext' | 'VarContext' | 'VariableAssignmentContext' | 'VariableAssignmentValueContext'

type Node = {
    name: NodeName,
    children: Node[],
    text: string,
    loc: {
        start: {
            line: number
            column: number
            offset: number
        },
        end: {
            line: number
            column: number
            offset: number
        }
    }
}


const variableContexts = new Map<Node, {
    vars: () => string[]
}>()

const makeLocs = (code: string, root: Node) => {
    const ln = lineColumn(code);

    const locs: [range: Range, node: Node & { parent: Node | null }, level: number, vars: () => string[]][] = [];


    let currentSystem: Node | null = null;

    (() => {
        function visit(node: Node, parent: Node | null, depth: number): string[] {
            if (node.name == 'ComponentAttributeValueContext' && node.text.startsWith('?')) {
                return [node.text]
            }

            if (node.name === 'SystemContext' || node.name === 'QueryContext') {
                currentSystem = node;
            }

            const atLoc = { ...node, parent };
            delete atLoc["children"];

            const start = ln.fromIndex(node.loc.start.offset)
            const end = ln.fromIndex(node.loc.end.offset)

            if (start && end) {
                const capture = currentSystem
                locs.push([new Range(start.line, start.col + 1, end.line, end.col + 1), atLoc, depth, () => {
                    return variableContexts.get(capture)?.vars() || []
                }])
            }

            if (node.children?.length == 0) {
                return []
            }

            const childEval = node.children.reduce((acc, c) => {
                return [...acc, visit(c, node, depth + 1)].flat();
            }, [])

            if (node.name === 'QueryExpressionContext') {
                const capture = currentSystem;
                const actual = variableContexts.get(capture)?.vars();

                variableContexts.set(capture, {
                    vars: () => {
                        return [...childEval, ...(actual || [])]
                    }
                })

            }

            return childEval
        }

        return visit(root, null, 0);
    })();


    return {
        locs,
        which: (pos: Position) => {
            let smallestRange: Range | null = null;
            let smallestRangeIndex = -1;
            let smallestSize = Infinity;

            let smallestDepth = -Infinity;
            locs.forEach(([range, node, depth], i) => {
                if (range.containsPosition(pos)) {
                    if (!smallestRange) {
                        smallestRange = range;
                        smallestRangeIndex = i;
                    } else {
                        if (depth > smallestDepth) {
                            smallestDepth = depth;
                            smallestRangeIndex = i;
                            smallestRange = range;
                        }
                    }
                }
            })

            return smallestRangeIndex < 0 ? null : locs[smallestRangeIndex];
        },
    };
}

const visit = (node: ParserRuleContext) => {
    const ret: Node = {
        name: node.constructor.name as NodeName,
        children: [],
        text: node.text,
        loc: {
            start: {
                line: node.start.line,
                column: node.start.charPositionInLine + 1,
                offset: node.start.startIndex
            },
            end: {
                line: node.stop!.line,
                column: node.stop!.charPositionInLine + 2,
                offset: node.stop!.stopIndex + 1
            }
        }
    };
    if (node.childCount) {
        ret.children = node.children
            .filter(c => {
                return Object.getPrototypeOf(c.constructor) == ParserRuleContext
            })
            .map(c => visit(c as ParserRuleContext))
    }

    return ret;
}


export enum CompletionItemKind {
    Method = 0,
    Function = 1,
    Constructor = 2,
    Field = 3,
    Variable = 4,
    Class = 5,
    Struct = 6,
    Interface = 7,
    Module = 8,
    Property = 9,
    Event = 10,
    Operator = 11,
    Unit = 12,
    Value = 13,
    Constant = 14,
    Enum = 15,
    EnumMember = 16,
    Keyword = 17,
    Text = 18,
    Color = 19,
    File = 20,
    Reference = 21,
    Customcolor = 22,
    Folder = 23,
    TypeParameter = 24,
    User = 25,
    Issue = 26,
    Snippet = 27
}

type Components = {
    [key: string]: {
        [key: string]: 'number' | 'boolean';
    }
}

export default function (code: string, components: Components) {
    const keys: string[] = []

    Object.keys(components).forEach(key => {
        keys.push(key)


        const subkeys = Object.keys(components[key]);
        subkeys.length > 1 && subkeys.forEach(subkey => {
            keys.push(`${key}-${subkey}`)
        })
    })

    const completionItems = keys;

    let inputStream = new ANTLRInputStream(code);
    let lexer = new ecssLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ecssParser(tokenStream);

    const lexerExpected: {
        [key: number]: {
            [key: number]: {
                result: string,
                kind: CompletionItemKind,
                detail: string
            }[]
        }
    } = {}

    class MYListener implements ANTLRErrorListener<any> {
        public static readonly INSTANCE: MYListener = new MYListener();

        public syntaxError<T>(
            recognizer: Recognizer<T, any>,
            offendingSymbol: T,
            line: number,
            charPositionInLine: number,
            msg: string,
            e: RecognitionException | undefined): void {

            if (!lexerExpected[line]) {
                lexerExpected[line] = {

                }
            }

            if (e) {
                lexerExpected[line][charPositionInLine] =
                    e.expectedTokens.toArray().map(i => {

                        return {
                            result: recognizer.vocabulary.getDisplayName(i),
                            kind: CompletionItemKind.Keyword,
                            detail: ''
                        }
                    }).filter(dn => !dn.result.match(/^[A-Z]/))
            }
        }
    }

    lexer.removeErrorListeners()
    lexer.addErrorListener(MYListener.INSTANCE);

    parser.removeErrorListeners()
    parser.addErrorListener(MYListener.INSTANCE);


    function getLexerPossibilities(pos: Position, offset: number) {
        return lexerExpected[pos.lineNumber]?.[pos.column - 1 + offset] || [];
    }

    const program = parser.program();

    const tree = visit(program);

    const locs = makeLocs(code, tree);

    return () => {
        const api = {
            which: (pos: Position) => {
                return locs.which(pos);
            },
            possibleAt(pos: Position, word: string, offset = 0) {
                const fromLexer = getLexerPossibilities(pos, offset)

                const which = api.which(pos);

                const astNode = which[1]

                const suggestions: {
                    result: string,
                    kind: CompletionItemKind,
                    detail: string,
                }[] = []

                if (astNode.name == 'StatementPlaceHolderContext') {
                    suggestions.push({
                        result: "true",
                        kind: CompletionItemKind.Keyword,
                        detail: ''
                    })
                }

                if ((astNode.name === 'ComponentIdContext' && (parent && parent.name !== 'ComponentSelectorContext'))
                    || astNode.name == 'SystemBodyContext'
                    || (astNode.name == 'ComponentStatementContext' && astNode.text === word)) {
                    suggestions.push(...completionItems.map(key => {
                        return {
                            result: key,
                            kind: CompletionItemKind.Field,
                            detail: ''
                        }
                    }))
                }

                return [...fromLexer, ...suggestions]
            },
        }

        return api;
    }
}