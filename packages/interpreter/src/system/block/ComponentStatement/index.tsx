import { ComponentStatement as ASTComponentStatement } from "ecss-parser/dist/ast-types";
import Declaration from "./Declaration"
import { EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../node";
import { useMemo, useState } from "../../../reactive";

type Props = EntityNodeEvaluatorProps<{ node: ASTComponentStatement }>

const ComponentStatement: EntityNodeEvaluator<Props> = ({ node: statement, setEvaluate }) => {
    const [childEvaluate, setChildEvaluate] = useState<() => (eid: number) => number | boolean | string>(() => (eid: number) => 0)

    if (setEvaluate) {
        const evaluate = useMemo(() => {

            const evChild = childEvaluate()();

            if (typeof evChild === 'function') {
                
                return (eid: number) => {                    
                    return evChild(eid);
                }
            }
        })

        setEvaluate(() => evaluate.value);
    }


    return <Declaration node={statement.declaration} setEvaluate={setChildEvaluate} />
}

export default ComponentStatement
