import { BinaryExpression as ASTBinaryExpression } from "ecss-parser/dist/ast-types";
import Literal from "./Literal"
import Identifier from "./Identifier"
import Function from "../Function"
import { EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../../../node";
import { useState, useMemo } from "../../../../../reactive"

type Props = EntityNodeEvaluatorProps<{ node: ASTBinaryExpression }>

const BinaryExpression: EntityNodeEvaluator<Props> = ({ node, setEvaluate }) => {
    const [leftEvaluate, setLeftEvaluate] = useState<() => (eid: number) => number | boolean | undefined>(() => (eid: number) => undefined)
    const [rightEvaluate, setRightEvaluate] = useState<() => (eid: number) => number | boolean | undefined>(() => (eid: number) => undefined)


    const evaluate = useMemo(() => {

        const l = leftEvaluate()();
        const r = rightEvaluate()();

        if (typeof l === 'function' && typeof r === 'function') {

            return (eid: number) => {
                const left = l(eid);
                const right = r(eid);

                if (typeof left !== 'undefined' && typeof right !== 'undefined') {

                    const numberL = Number(left);
                    const numberR = Number(right);

                    if (node.operator === '+') {
                        return numberL + numberR;

                    }

                    if (node.operator === '*') {
                        return numberL * numberR;

                    }

                    if (node.operator === '-') {
                        return numberL - numberR;

                    }

                    if (node.operator === '/') {
                        return numberL / numberR;

                    }

                    if (node.operator === '%') {
                        return numberL % numberR;
                    }
                }

                return undefined
            }
        }
    });

    if (setEvaluate) {
        setEvaluate(() => evaluate.value);
    }

    const left = node.left.type === 'Literal' ? <Literal node={node.left} setEvaluate={setLeftEvaluate} /> :
        node.left.type === 'Identifier' ? <Identifier node={node.left} setEvaluate={setLeftEvaluate} /> :
            node.left.type === 'Function' ? <Function node={node.left} setEvaluate={setLeftEvaluate} /> :
                node.left.type === 'BinaryExpression' ? <BinaryExpression node={node.left} setEvaluate={setLeftEvaluate} /> :
                    <></>

    const right = node.right.type === 'Literal' ? <Literal node={node.right} setEvaluate={setRightEvaluate} /> :
        node.right.type === 'Identifier' ? <Identifier node={node.right} setEvaluate={setRightEvaluate} /> :
            node.right.type === 'Function' ? <Function node={node.right} setEvaluate={setRightEvaluate} /> :
                node.right.type === 'BinaryExpression' ? <BinaryExpression node={node.right} setEvaluate={setRightEvaluate} /> :
                    <></>

    return <>
        {left}
        {right}
    </>
}

export default BinaryExpression
