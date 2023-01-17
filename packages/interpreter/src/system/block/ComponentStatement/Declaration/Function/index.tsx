import { ComponentStatement as ASTComponentStatement, Function as ASTFunction } from "ecss-parser/dist/ast-types";
import { EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../../../node";
import { useMemo, useState } from "../../../../../reactive";
import BinaryExpression from "../BinaryExpression";
import Function from "../Function";
import Identifier from "../BinaryExpression/Identifier";
import Literal from "../BinaryExpression/Literal";
import StringLiteral from "../BinaryExpression/StringLiteral";
import { map } from "../../../../../utils";

type Props = EntityNodeEvaluatorProps<{ node: ASTFunction }>

const ASTFunction: EntityNodeEvaluator<Props> = ({ node: fn, setEvaluate }) => {

    const childrenEvalutes = fn.arguments.arguments.map(() => useState<() => (eid: number) => number | boolean | string>(() => (eid: number) => 0))

    if (setEvaluate) {
        const evaluate = useMemo(() => {

            const evChilds = childrenEvalutes.map(([e]) => e()())

            return (eid: number) => {

                const results = evChilds.map(e => e(eid))


                if (fn.functionName === 'max') {
                    return Math.max(...results as any[]);
                }

                if (fn.functionName === 'min') {
                    return Math.min(...results as any[]);
                }

                if (fn.functionName === 'sin') {
                    return Math.sin(results[0] as any)
                }

                if (fn.functionName === 'map') {
                    /* @ts-ignore */
                    return map(...results as any[]);
                }


                if (fn.functionName === 'abs') {
                    return Math.abs(results[0] as any)
                }

                if (fn.functionName === 'sign') {
                    return Math.sign(results[0] as any)
                }

            }

        })

        setEvaluate(() => evaluate.value);
    }


    return <>

        {fn.arguments.arguments.map((arg, i) => {
            return <>
                {arg.type === 'BinaryExpression' && <BinaryExpression node={arg} setEvaluate={childrenEvalutes[i][1]} />}
                {arg.type === 'Function' && <Function node={arg} setEvaluate={childrenEvalutes[i][1]} />}
                {arg.type === 'Identifier' && <Identifier node={arg} setEvaluate={childrenEvalutes[i][1]} />}
                {arg.type === 'Literal' && <Literal node={arg} setEvaluate={childrenEvalutes[i][1]} />}
                {arg.type === 'StringLiteral' && <StringLiteral node={arg} setEvaluate={childrenEvalutes[i][1]} />}
            </>
        })}
    </>
}

export default ASTFunction
