import { Identifier } from "ecss-parser/dist/ast-types";
import { useBlockContext } from "../../../../../../contexts/BlockContext";
import { FunctionComponent, EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../../../../node";

type Props = { node: Identifier, setEvaluate?: (evaluate: () => (eid: number) => any) => void }


const component: FunctionComponent<Props> = ({ node, setEvaluate }) => {

    const ctx = useBlockContext()

    if (setEvaluate) {
        const evaluateQueryVar = ctx.evaluateQueryVar;
        const getTime = ctx.getTime;
        setEvaluate(() => (eid: number) => {
            if (node.name.startsWith('?')) {
                return evaluateQueryVar(node.name, eid);
            }

            if (node.name == '$t') {
                return getTime(eid);
            }
        })
    }


    return <></>
}

export default component
