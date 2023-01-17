import { ANTLRInputStream, CommonTokenStream, RecognitionException, Recognizer } from "antlr4ts";
import { visitProgram } from "./AstBuilder"

import { ecssLexer } from "./antlr/ecssLexer"
import { ecssParser, ProgramContext } from "./antlr/ecssParser"
import { createErr, Err, Ok } from "option-t/cjs/PlainResult"
import { Program } from "./ast-types";
import lineColumn from "line-column"

interface LineColumnInfo {
    line: number;
    col: number;
}

export default (code: string): Ok<Program> | Err<[LineColumnInfo, LineColumnInfo][]> => {
    let inputStream = new ANTLRInputStream(code);
    let lexer = new ecssLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ecssParser(tokenStream);

    let errors: [LineColumnInfo, LineColumnInfo][] = []

    lexer.removeErrorListeners()
    lexer.addErrorListener({
        syntaxError: <T>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void => {

            const pos = { line: line, col: charPositionInLine };

            const ln = lineColumn(code);
            const index = lineColumn(code).toIndex({ line: line, col: charPositionInLine });


            const next = lineColumn(code).fromIndex(lineColumn(code).toIndex(pos) + 1)

            errors.push([ln.fromIndex(index + 1), ln.fromIndex(index + 2)])
        },
    })

    parser.removeErrorListeners()
    parser.addErrorListener({
        syntaxError: <T>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void => {
            const pos = { line: line, col: charPositionInLine };

            const next = lineColumn(code).fromIndex(lineColumn(code).toIndex(pos) + 1)
        },
    })

    try {
        const result = visitProgram(parser.program());
        if (errors.length) {
            return createErr(errors)
        }

        return result;
    } catch (e) {
        console.warn(e);
        return createErr(errors)
    }
}
