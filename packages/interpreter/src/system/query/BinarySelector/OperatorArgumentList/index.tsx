import { OperatorArgumentList as ASTOperatorArgumentList } from "ecss-parser/dist/ast-types";
import { EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../../node";
import BinarySelector from "../"
import CompoundSelector from "../../CompoundSelector";
import { useMemo, useState } from "../../../../reactive";

type Props = EntityNodeEvaluatorProps<{ node: ASTOperatorArgumentList, setEvaluate: (evaluate: () => () => Set<number>[]) => void }>

const OperatorArgumentList: EntityNodeEvaluator<Props> = ({ node: operatorArgumentList, setEvaluate }) => {
    const evaluates = operatorArgumentList.selectors.map(() => useState<() => () => Set<number>>(() => () => new Set<number>()));

    const evaluate = useMemo(() => {
        const evaluators = evaluates.map(e => {
            return e[0]()()
        });

        if (evaluators.every(e => typeof e === 'function')) {
            return () => evaluators.map((e) => e())
        }
    });


    if (setEvaluate && evaluate.value) {
        setEvaluate(() => evaluate.value!)
    }


    return <>
        {operatorArgumentList.selectors.map((s, i) => {
            if (s.type === 'BinarySelector') {
                return <BinarySelector setEvaluate={evaluates[i][1]} node={s} />
            }

            if (s.type === 'CompoundSelector') {
                return <CompoundSelector setEvaluate={evaluates[i][1]} node={s} />
            }
        })}
    </>

}

export default OperatorArgumentList
