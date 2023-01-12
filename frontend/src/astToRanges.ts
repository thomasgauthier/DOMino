import { Position, Range } from "monaco-editor";
import { ASTNode, Program } from "ecss-parser/dist/ast-types";



export function getNextBracket(code: string, index: number) {
    let next = null;
    let last = null;
    for (let i = index; i >= 0; i--) {

        if (code[i] === '{') {
            last = '{'
        }

        if (code[i] === ']') {
            last = '['
        }
    }

    for (let i = index; i <= code.length - 1; i++) {

        if (code[i] === '{') {
            last = '{'
        }

        if (code[i] === ']') {
            last = '['
        }
    }

    return {
        last,
        next
    }
    // for()
}


export default (program: Program) => {
    const locs: [range: Range, node: ASTNode & { parent: ASTNode | null }][] = [];

    (() => {
        function visit(ast: ASTNode, parent: ASTNode | null = null) {


            // cachesonst 
            const keys = Object.keys(ast) as any as (keyof ASTNode)[];


            keys.forEach(key => {
                const property = ast[key];

                if (typeof property === 'object') {
                    if (property["start"] && property["end"]) {
                        locs.push([new Range(property["start"].line, property["start"].column, property["end"].line, property["end"].column + 1), { ...ast, parent }])
                    } else {
                        visit(property as any as ASTNode, ast)
                    }
                }
            })

        }

        visit(program);
    })();

    return {
        which: (pos: Position) => {
            let smallestRange: Range | null = null;
            let smallestRangeIndex = -1;
            locs.forEach(([range], i) => {
                if (range.containsPosition(pos)) {
                    if (!smallestRange || range.getEndPosition().isBefore(smallestRange.getEndPosition())) {
                        smallestRange = range;
                        smallestRangeIndex = i;
                    }
                }
            })

            return smallestRangeIndex < 0 ? null : locs[smallestRangeIndex][1];
        },
        locs
    }
}