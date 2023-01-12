import { ASTNode } from "ecss-parser/dist/ast-types";
import lineColumn from "line-column"

export interface LineColumnInfo {
    line: number;
    col: number;
}

export const getMarkedTextLocFromAstNode = (code: string, loc: ASTNode["loc"]): [{ line: number; ch: number }, { line: number; ch: number }] => {
    const ln = lineColumn(code);
    const from = ln.fromIndex(loc!.start.offset)!
    const to = ln.fromIndex(loc!.end.offset)!

    return [{ line: from.line - 1, ch: from.col - 1 }, { line: to.line - 1, ch: to.col - 1 }]

}
