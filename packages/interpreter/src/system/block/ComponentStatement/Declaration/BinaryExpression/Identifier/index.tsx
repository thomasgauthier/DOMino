import { Identifier } from "ecss-parser/dist/ast-types";
import { useBlockContext } from "../../../../../../contexts/BlockContext";
import { useOutsideWorldContext } from "../../../../../../contexts/OutsideWorldContext";
import { FunctionComponent, EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../../../../node";

type Props = { node: Identifier, setEvaluate?: (evaluate: () => (eid: number) => any) => void }


const component: FunctionComponent<Props> = ({ node, setEvaluate }) => {

    const ctx = useBlockContext()
    const octx = useOutsideWorldContext()

    if (setEvaluate) {
        const evaluateQueryVar = ctx.evaluateQueryVar;
        const getTime = ctx.getTime;
        const getDeltaTime = octx.getDeltaTime;

        setEvaluate(() => (eid: number) => {
            if (node.name.startsWith('?')) {
                return evaluateQueryVar(node.name, eid);
            }

            if (node.name == '$t') {
                return getTime(eid);
            }

            if (node.name == '$dt') {
                return getDeltaTime();
            }
        })
    }


    return <></>
}

export default component
