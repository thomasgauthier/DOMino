import { BinarySelector as ASTBinarySelector } from "ecss-parser/dist/ast-types";
import { useOutsideWorldContext } from "../../../contexts/OutsideWorldContext";
import { EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../node";
import { useMemo, useState } from "../../../reactive";
import CompoundSelector from "../CompoundSelector";
import OperatorArgumentList from "./OperatorArgumentList";


type Props = EntityNodeEvaluatorProps<{ node: ASTBinarySelector }>

const BinarySelector: EntityNodeEvaluator<Props> = ({ node: binarySelector, setEvaluate }) => {
    const { getAllEntities } = useOutsideWorldContext()


    const [leftEvaluate, setLeftEvaluate] = useState<() => () => Set<number>>(() => () => new Set())
    const [rightEvaluate, setRightEvaluate] = useState<() => () => Set<number>[]>(() => () => [new Set()])

    if (binarySelector.left.type === 'WildcardSelector') {
        setLeftEvaluate(() => () => getAllEntities())
    }

    if (setEvaluate) {
        const evaluate = useMemo(() => {

            const l = leftEvaluate()();
            const r = rightEvaluate()();

            if (typeof l === 'function' && typeof r === 'function') {
                return () => {

                    if (binarySelector.operator == ':any') {
                        return l().intersection(r().reduce((acc, val) => {
                            return acc.union(val);
                        }, new Set()))
                    }


                    if (binarySelector.operator === ':not') {
                        return l().intersection(r().reduce((acc, val) => {
                            return acc.difference(val);
                        }, getAllEntities()))
                    }

                }

            }
        });

        setEvaluate(() => evaluate.value);
    }

    return <>
        {binarySelector.left.type == "BinarySelector" && <BinarySelector setEvaluate={setLeftEvaluate} node={binarySelector.left} />}
        {binarySelector.left.type == 'CompoundSelector' && <CompoundSelector node={binarySelector.left} setEvaluate={setLeftEvaluate} />}

        {binarySelector.right.type == "OperatorArgumentList" && <OperatorArgumentList setEvaluate={setRightEvaluate} node={binarySelector.right} />}
    </>

}

export default BinarySelector
